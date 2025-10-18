import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { initFirebaseAuth, authAppState, showToast } from "./auth.js";

/**
 * Initializes and protects an AI feature page based on user's authentication and subscription status.
 * @param {object} config - The configuration object for the specific feature.
 * @param {string} config.featureName - The name of the feature field in the Firestore usage document (e.g., 'grammarChecker').
 * @param {number} config.maxFreeTrials - The maximum number of free trials for this feature.
 * @param {Function} config.onCheckCallback - The async function to execute when the feature's main button is clicked and access is granted.
 */
export function initializeFeature(config) {
  document.addEventListener("DOMContentLoaded", () => {
    initFirebaseAuth((user) => handleAuthStateChange(user, config));
  });
}

async function handleAuthStateChange(user, config) {
  if (user) {
    await waitForUserProfile();
    await checkUserAccess(config);
  } else {
    showToast("Please log in to access this feature.", "info");
    setTimeout(() => {
      window.location.href = "/auth.html";
    }, 2000);
  }
}

function waitForUserProfile() {
  return new Promise((resolve) => {
    const check = () => {
      if (authAppState.isAuthReady && authAppState.userProfile) {
        resolve();
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
}

async function checkUserAccess(config) {
  const { featureName, maxFreeTrials } = config;

  const loaderContainer = document.getElementById("loader-container");
  const featureContainer = document.getElementById("feature-container");
  const upgradePrompt = document.getElementById("upgrade-prompt");
  const checkButton = document.getElementById("check-grammar-btn");
  const usageBadge = document.getElementById("usage-counter-badge");
  const proBadge = document.getElementById("pro-badge");
  const trialsLeftSpan = document.getElementById("trials-left");

  const userRole = authAppState.userProfile.role;

  if (userRole === "pro") {
    proBadge.classList.remove("hidden");
    usageBadge.classList.add("hidden");
    checkButton.disabled = false;
  } else {
    // 'free' user
    const usageData = await getUsageData(featureName);
    const trialsUsed = usageData[featureName] || 0;
    const trialsLeft = maxFreeTrials - trialsUsed;

    if (trialsLeft > 0) {
      usageBadge.classList.remove("hidden");
      proBadge.classList.add("hidden");
      trialsLeftSpan.textContent = trialsLeft;
      checkButton.disabled = false;
    } else {
      usageBadge.classList.remove("hidden");
      proBadge.classList.add("hidden");
      trialsLeftSpan.textContent = 0;
      checkButton.disabled = true;
      checkButton.textContent = "No Trials Left";
      checkButton.classList.add("bg-gray-400", "cursor-not-allowed");
      checkButton.classList.remove("bg-red-600", "hover:bg-red-700");
      upgradePrompt.classList.remove("hidden");
    }
  }

  loaderContainer.classList.add("hidden");
  featureContainer.classList.remove("hidden");

  // Attach the main check listener only after access is confirmed
  const checkBtn = document.getElementById("check-grammar-btn");
  checkBtn.addEventListener("click", () => onCheckButtonClick(config));
}

async function onCheckButtonClick(config) {
  const { featureName, maxFreeTrials, onCheckCallback } = config;

  if (authAppState.userProfile.role !== "pro") {
    const usageData = await getUsageData(featureName);
    const trialsUsed = usageData[featureName] || 0;
    if (trialsUsed >= maxFreeTrials) {
      showToast("You have no free trials left. Please upgrade.", "error");
      return;
    }
  }

  // Execute the feature-specific logic
  const success = await onCheckCallback();

  // Only update usage if the callback was successful (e.g., didn't fail on empty input)
  if (success && authAppState.userProfile.role === "free") {
    await updateUserUsage(featureName);
    await checkUserAccess(config); // Re-check access to update the UI
  }
}

async function getUsageData(featureName) {
  const db = authAppState.db;
  const appId =
    typeof __app_id !== "undefined" ? __app_id : "ielts-mahir-community-forum";
  const usageRef = doc(
    db,
    `artifacts/${appId}/users/${authAppState.userId}/usage/aiFeatures`
  );

  try {
    const docSnap = await getDoc(usageRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      const initialData = { [featureName]: 0, lastUpdated: serverTimestamp() };
      await setDoc(usageRef, initialData);
      return { [featureName]: 0 };
    }
  } catch (error) {
    console.error("Error getting usage data:", error);
    showToast("Could not retrieve your usage data.", "error");
    return { [featureName]: maxFreeTrials }; // Fail safe to block access
  }
}

async function updateUserUsage(featureName) {
  const db = authAppState.db;
  const appId =
    typeof __app_id !== "undefined" ? __app_id : "ielts-mahir-community-forum";
  const usageRef = doc(
    db,
    `artifacts/${appId}/users/${authAppState.userId}/usage/aiFeatures`
  );

  try {
    await updateDoc(usageRef, {
      [featureName]: increment(1),
      lastUpdated: serverTimestamp(),
    });
    console.log("Usage data updated.");
  } catch (error) {
    if (error.code === "not-found") {
      await setDoc(usageRef, {
        [featureName]: 1,
        lastUpdated: serverTimestamp(),
      });
    } else {
      console.error("Error updating usage data:", error);
      showToast("Could not update your usage count.", "error");
    }
  }
}
