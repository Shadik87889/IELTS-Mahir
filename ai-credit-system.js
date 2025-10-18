import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { initFirebaseAuth, authAppState, showToast } from "./auth.js";

// --- CONFIGURATION ---
const DEFAULT_FREE_CREDITS = 10; // Credits for new free users

// --- DOM Elements (to be found on any page using this script) ---
let userStatusContainer = null;
let upgradeModal = null;
let closeModalBtn = null;
let initialLoader = null;
let mainContent = null;

// --- STATE ---
let userRole = "free";
let aiCredits = 0;
let firestoreListener = null; // To hold the onSnapshot unsubscribe function

/**
 * A central hub to manage user access to AI features based on their role and credit balance.
 */
export const aiCreditSystem = {
  /**
   * Initializes the entire system. Should be called on DOMContentLoaded.
   * @param {function} onAccessGranted - A callback function to run after access is confirmed (e.g., to show the main content).
   */
  initialize: (onAccessGranted) => {
    // Find necessary DOM elements on the current page
    userStatusContainer = document.getElementById("auth-buttons-container"); // Display status in the nav
    upgradeModal = document.getElementById("upgrade-modal");
    closeModalBtn = document.getElementById("close-modal-btn");
    initialLoader = document.getElementById("initial-loader");
    mainContent = document.getElementById("main-container");

    if (
      !userStatusContainer ||
      !upgradeModal ||
      !closeModalBtn ||
      !initialLoader ||
      !mainContent
    ) {
      console.error(
        "AI Credit System Error: One or more required HTML elements (user-status-container, upgrade-modal, etc.) are missing from the page."
      );
      return;
    }

    closeModalBtn.addEventListener("click", () =>
      upgradeModal.classList.add("hidden")
    );

    // Start the authentication process
    initFirebaseAuth((user) => handleAuthStateChange(user, onAccessGranted));
  },

  /**
   * Checks if the user can use an AI feature. If yes, it deducts a credit for free users.
   * This is the primary function feature pages will call before making an API request.
   * @returns {Promise<boolean>} - A promise that resolves to true if access is granted, false otherwise.
   */
  requestAccess: async () => {
    if (userRole === "pro") {
      return true; // Pro users always have access
    }

    if (aiCredits > 0) {
      const db = authAppState.db;
      const appId = authAppState.appId || "ielts-mahir-community-forum";
      const userRef = doc(
        db,
        `artifacts/${appId}/users/${authAppState.userId}/userProfile/profile`
      );
      try {
        // Deduct a credit from Firestore
        await updateDoc(userRef, { aiCredits: increment(-1) });
        return true; // Access granted
      } catch (error) {
        console.error("Failed to deduct credit:", error);
        showToast("An error occurred. Please try again.", "error");
        return false;
      }
    } else {
      // No credits left
      upgradeModal.classList.remove("hidden");
      return false; // Access denied
    }
  },
};

/**
 * Handles changes in user authentication state.
 * @param {object|null} user - The Firebase user object or null.
 * @param {function} onAccessGranted - The callback to run when the page can be shown.
 */
async function handleAuthStateChange(user, onAccessGranted) {
  if (user) {
    if (firestoreListener) {
      firestoreListener();
    }

    const db = authAppState.db;
    const appId = authAppState.appId || "ielts-mahir-community-forum";
    const userRef = doc(
      db,
      `artifacts/${appId}/users/${user.uid}/userProfile/profile`
    );

    firestoreListener = onSnapshot(
      userRef,
      async (docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          userRole = userData.role || "free";

          // FIX: Check if credits are missing for an existing user and add them.
          if (userData.aiCredits === undefined) {
            aiCredits = DEFAULT_FREE_CREDITS;
            // Update the document in Firestore so the user starts with credits.
            try {
              await setDoc(
                userRef,
                { aiCredits: DEFAULT_FREE_CREDITS },
                { merge: true }
              );
            } catch (e) {
              console.error(
                "Failed to add default credits to existing user:",
                e
              );
            }
          } else {
            aiCredits = userData.aiCredits;
          }
        } else {
          // This is a new user. Create their profile with default credits.
          await setDoc(
            userRef,
            { role: "free", aiCredits: DEFAULT_FREE_CREDITS },
            { merge: true }
          );
          userRole = "free";
          aiCredits = DEFAULT_FREE_CREDITS;
        }

        updateNavbarUI();

        if (initialLoader && !initialLoader.classList.contains("hidden")) {
          initialLoader.classList.add("hidden");
          onAccessGranted();
        }
      },
      (error) => {
        console.error("Error listening to user profile:", error);
        showToast("Could not load your profile.", "error");
        redirectToLogin();
      }
    );
  } else {
    redirectToLogin();
  }
}

/**
 * Updates the navigation bar to show the user's status (Pro or Free Credits).
 */
function updateNavbarUI() {
  if (!userStatusContainer) return;

  let statusHtml = "";
  if (userRole === "pro") {
    statusHtml = `
              <div class="flex items-center gap-2 bg-yellow-400/10 text-yellow-300 text-sm font-bold px-3 py-2 rounded-lg">
                  <i class="fas fa-star"></i>
                  <span>Pro Member</span>
              </div>
          `;
  } else {
    statusHtml = `
              <div class="flex items-center gap-2 bg-blue-400/10 text-blue-300 text-sm font-bold px-3 py-2 rounded-lg">
                  <i class="fas fa-coins"></i>
                  <span>Free Credits: ${aiCredits}</span>
              </div>
          `;
  }

  const existingStatus = userStatusContainer.querySelector(
    "#user-credit-status"
  );
  if (existingStatus) {
    existingStatus.innerHTML = statusHtml;
  } else {
    const statusDiv = document.createElement("div");
    statusDiv.id = "user-credit-status";
    statusDiv.innerHTML = statusHtml;
    userStatusContainer.prepend(statusDiv);
  }
}

/**
 * Redirects the user to the login page.
 */
function redirectToLogin() {
  showToast("Please log in to use this feature.", "info");
  setTimeout(() => {
    window.location.href = "/auth.html"; // Assuming you have an auth.html page
  }, 2000);
}
