// This is the central auth.js file that should be imported by ALL other Firebase-dependent scripts.

import {
  initializeApp,
  getApps,
  getApp,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
  signInWithCustomToken,
  updateProfile, // Import updateProfile
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  query,
  collection,
  where,
  getDocs,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// --- Global State for Auth (simplified for multi-page) ---
export const authAppState = {
  db: null,
  auth: null,
  userId: null,
  userProfile: null,
  isAuthReady: false, // Indicates if Firebase Auth is initialized and its initial state checked
  // This will store unsubscribe functions for Firestore listeners
  // You'd manage specific page listeners (posts, comments) within their respective pages
  unsubscribeAuthProfile: null,
};

// --- Constants ---
const defaultAppId = "ielts-mahir-community-forum";
const defaultFirebaseConfig = {
  apiKey: "AIzaSyAxsd0CnLsh7t7yFy3ZPp6saGD_YpLL1mY",
  authDomain: "ielts-mahir-community-forum.firebaseapp.com",
  projectId: "ielts-mahir-community-forum",
  storageBucket: "ielts-mahir-community-forum.firebasestorage.app",
  messagingSenderId: "1036043607546",
  appId: "1:1036043607546:web:bd217e04cc0ec5f296d843",
  measurementId: "G-YC4CG1WKD3",
};

// --- Helper Icons (Font Awesome classes) ---
export const Icons = {
  // Export Icons so other modules can use them
  User: `<i class="fas fa-user-circle"></i>`,
  Cog: `<i class="fas fa-cog"></i>`,
  Bell: `<i class="fas fa-bell"></i>`,
  SignIn: `<i class="fas fa-sign-in-alt"></i>`,
  SignOut: `<i class="fas fa-sign-out-alt"></i>`,
  Dashboard: `<i class="fas fa-chart-line"></i>`,
  Forum: `<i class="fas fa-comments"></i>`,
  // Added for test-detail.html
  Headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z"/><path d="M18 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z"/><path d="M21 16v-4a9 9 0 0 0-18 0v4"/></svg>`,
  ChevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>`,
  FileText: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  Activity: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucude-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  Lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 18v4"/></svg>`,
  Mic: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
};

// --- Helper Functions (reusable) ---
export function showToast(message, type, duration = 3000) {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    console.warn("Toast container not found. Message:", message);
    return;
  }
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `${
    type === "success" ? '<i class="fas fa-check-circle"></i>' : ""
  } ${type === "error" ? '<i class="fas fa-exclamation-triangle"></i>' : ""} ${
    type === "info" ? '<i class="fas fa-info-circle"></i>' : ""
  } <span>${message}</span>`;
  toastContainer.appendChild(toast);
  void toast.offsetWidth; // Trigger reflow for animation
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => toast.remove());
  }, duration);
}

// --- Firebase Authentication Functions ---

/**
 * Initializes Firebase and sets up the authentication state listener.
 * This function should be called ONCE in your entire application.
 * @param {function(object|null): void} onAuthChangeCallback - Callback function to run when auth state changes.
 * Receives the Firebase User object (or null if signed out).
 * @returns {Promise<{db: object, auth: object}>} A promise that resolves with the Firestore and Auth instances.
 */
export async function initFirebaseAuth(onAuthChangeCallback) {
  const appId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;
  const firebaseConfig =
    typeof __firebase_config !== "undefined"
      ? JSON.parse(__firebase_config)
      : defaultFirebaseConfig;

  try {
    let app;
    // Check if a Firebase app already exists to prevent duplicate initialization errors
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApp(); // Get the default app if it already exists
    }

    authAppState.db = getFirestore(app);
    authAppState.auth = getAuth(app);

    // Set persistence for Firebase Authentication
    await setPersistence(authAppState.auth, browserLocalPersistence);

    // Listen for authentication state changes
    onAuthStateChanged(authAppState.auth, async (user) => {
      if (user) {
        // Check if the user is anonymous AND has no linked non-anonymous providers.
        // This is crucial to prevent signing out a user who just signed in via Google
        // but was briefly anonymous.
        const hasExplicitProvider = user.providerData.some(
          (provider) =>
            provider.providerId !== "firebase" &&
            provider.providerId !== "anonymous"
        );

        if (user.isAnonymous && !hasExplicitProvider) {
          console.warn(
            "Anonymous user detected without explicit provider. Signing out to enforce explicit sign-in."
          );
          await signOut(authAppState.auth);
          return; // onAuthStateChanged will be called again with null user
        }

        authAppState.userId = user.uid;
        const userRef = doc(
          authAppState.db,
          `artifacts/${appId}/users/${user.uid}/userProfile/profile`
        );
        const userSnap = await getDoc(userRef);

        let newUserProfileData;
        if (userSnap.exists()) {
          newUserProfileData = userSnap.data();
        } else {
          // Create a default profile if it's a new user or profile doesn't exist
          newUserProfileData = {
            name: user.displayName || `User-${user.uid.substring(0, 5)}`, // Use user.displayName if available
            email: user.email || "",
            bandGoal: "N/A",
            preparationStatus: "New Learner",
            reputation: 0,
            badges: [],
            createdAt: serverTimestamp(),
            userId: user.uid,
            bio: "",
            country: "",
            ieltsExperience: "",
            following: [],
            notificationPreferences: {
              vote: true,
              reply: true,
              follow: true,
              new_post: true,
            },
            defaultHomeFeed: "latest",
          };
          await setDoc(userRef, newUserProfileData);
        }

        // Update last login timestamp
        await updateDoc(userRef, { lastLogin: serverTimestamp() });

        // Check and update first_post badge (example of profile update logic)
        const userPostsSnap = await getDocs(
          query(
            collection(authAppState.db, `artifacts/${appId}/public/data/posts`),
            where("authorId", "==", user.uid)
          )
        );
        const hasFirstPostBadge = (newUserProfileData.badges || []).includes(
          "first_post"
        );

        if (userPostsSnap.docs.length > 0 && !hasFirstPostBadge) {
          await updateDoc(userRef, { badges: arrayUnion("first_post") });
          newUserProfileData.badges = [
            ...(newUserProfileData.badges || []),
            "first_post",
          ];
        } else if (userPostsSnap.docs.length === 0 && hasFirstPostBadge) {
          await updateDoc(userRef, { badges: arrayRemove("first_post") });
          newUserProfileData.badges = (newUserProfileData.badges || []).filter(
            (b) => b !== "first_post"
          );
        }

        authAppState.userProfile = newUserProfileData;
        authAppState.isAuthReady = true;

        // Call the provided callback with the user object
        onAuthChangeCallback(user);
      } else {
        // User is signed out
        authAppState.userId = null;
        authAppState.userProfile = null;
        authAppState.isAuthReady = true;

        // Call the provided callback with null user
        onAuthChangeCallback(null);
      }
    });

    // Attempt to sign in with custom token if provided by Canvas (for this environment)
    if (typeof __initial_auth_token !== "undefined" && __initial_auth_token) {
      console.log("Attempting sign-in with __initial_auth_token.");
      try {
        await signInWithCustomToken(authAppState.auth, __initial_auth_token);
      } catch (error) {
        console.error("Error signing in with custom token:", error);
      }
    } else {
      console.log(
        "No __initial_auth_token provided or it's undefined. Checking for existing user session."
      );
      // If no custom token and no user is already persisted, onAuthStateChanged will eventually
      // fire with a null user, triggering the callback.
    }

    // IMPORTANT: Return the initialized db and auth instances immediately.
    // The onAuthStateChanged listener will handle subsequent state changes.
    return { db: authAppState.db, auth: authAppState.auth };
  } catch (error) {
    showToast(
      "Failed to initialize app. Check console for Firebase configuration and network issues.",
      "error"
    );
    console.error("Error initializing Firebase or signing in:", error);
    authAppState.isAuthReady = true; // Mark as ready even on error
    onAuthChangeCallback(null); // Indicate no user
    throw error; // Re-throw the error so the .catch() in test-detail.html can handle it
  }
}

// --- Exported Authentication Methods ---

export async function signInEmailPassword(email, password) {
  try {
    await signInWithEmailAndPassword(authAppState.auth, email, password);
    showToast("Signed in successfully!", "success");
    return true;
  } catch (error) {
    showToast(`Sign-in failed: ${error.message}`, "error");
    console.error("Sign-in error:", error);
    return false;
  }
}

export async function signUpEmailPassword(email, password, name = "") {
  // Added name parameter
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authAppState.auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update Firebase Auth user profile with display name
    if (name) {
      await updateProfile(user, { displayName: name });
    }

    // Create user profile in Firestore
    const userRef = doc(
      authAppState.db,
      `artifacts/${defaultAppId}/users/${user.uid}/userProfile/profile`
    );
    await setDoc(userRef, {
      name: name || `User-${user.uid.substring(0, 5)}`, // Use provided name or default
      email: user.email || "",
      bandGoal: "N/A",
      preparationStatus: "New Learner",
      reputation: 0,
      badges: [],
      createdAt: serverTimestamp(),
      userId: user.uid,
      bio: "",
      country: "",
      ieltsExperience: "",
      following: [],
      notificationPreferences: {
        vote: true,
        reply: true,
        follow: true,
        new_post: true,
      },
      defaultHomeFeed: "latest",
    });

    showToast("Signed up successfully!", "success");
    return true;
  } catch (error) {
    showToast(`Sign-up failed: ${error.message}`, "error");
    console.error("Sign-up error:", error);
    return false;
  }
}

export async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authAppState.auth, provider);
    showToast("Signed in with Google successfully!", "success");
    return true;
  } catch (error) {
    showToast(`Google sign-in failed: ${error.message}`, "error");
    console.error("Google sign-in error:", error);
    return false;
  }
}

export async function signOutUser() {
  try {
    await signOut(authAppState.auth);
    showToast("Signed out successfully!", "success");
    return true;
  } catch (error) {
    showToast("Error signing out. Try again.", "error");
    console.error("Sign-out error:", error);
    return false;
  }
}
