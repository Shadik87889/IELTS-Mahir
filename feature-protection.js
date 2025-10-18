import { authAppState } from "./auth.js";
import {
  doc,
  getDoc,
  setDoc,
  increment,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const FREE_TRIAL_LIMIT = 3;

/**
 * Protects a feature page based on user authentication, role, and trial status.
 * This function now assumes initFirebaseAuth from auth.js has already been called on the page.
 * @param {string} featureName - A unique identifier for the feature (e.g., 'grammarChecker').
 * @param {HTMLElement} contentElement - The main content container to show/hide.
 * @param {HTMLElement} loaderElement - The loading indicator element.
 * @param {HTMLElement} upgradeElement - The element to show when access is denied.
 */
export async function protectPage(
  featureName,
  contentElement,
  loaderElement,
  upgradeElement
) {
  // Create a promise that waits for the central auth state to be ready
  const waitForAuth = new Promise((resolve) => {
    const checkAuth = () => {
      if (authAppState.isAuthReady) {
        resolve();
      } else {
        setTimeout(checkAuth, 100); // Check again shortly
      }
    };
    checkAuth();
  });

  await waitForAuth;

  const user = authAppState.auth.currentUser;

  if (!user) {
    // Not logged in, redirect to the authentication page.
    window.location.href = "auth.html";
    return;
  }

  // User is logged in, use the profile from the global state.
  const userProfile = authAppState.userProfile;

  if (userProfile && userProfile.role === "pro") {
    // User is a pro member, grant access.
    loaderElement.classList.add("hidden");
    contentElement.classList.remove("hidden");
    return;
  }

  // User is not a pro member, check their free trial count.
  const db = authAppState.db;
  const trialDocRef = doc(db, "featureTrials", `${user.uid}_${featureName}`);
  const trialDocSnap = await getDoc(trialDocRef);

  let trialCount = 0;
  if (trialDocSnap.exists()) {
    trialCount = trialDocSnap.data().count;
  }

  if (trialCount < FREE_TRIAL_LIMIT) {
    // User has free trials remaining, grant access.
    loaderElement.classList.add("hidden");
    contentElement.classList.remove("hidden");
  } else {
    // No free trials left, show the upgrade prompt.
    loaderElement.classList.add("hidden");
    upgradeElement.classList.remove("hidden");
  }
}

/**
 * Increments the usage count for a feature for the current user.
 * Should be called whenever a user completes an action with the feature.
 * @param {string} featureName - A unique identifier for the feature.
 */
export async function logFeatureUsage(featureName) {
  const user = authAppState.auth.currentUser;
  if (!user) return; // Should not happen if page is protected

  const userProfile = authAppState.userProfile;
  // We only log usage for non-pro users
  if (userProfile && userProfile.role === "pro") {
    console.log("Pro user usage - not logged.");
    return;
  }

  const db = authAppState.db;
  const trialDocRef = doc(db, "featureTrials", `${user.uid}_${featureName}`);
  try {
    await setDoc(
      trialDocRef,
      {
        userId: user.uid,
        feature: featureName,
        count: increment(1),
        lastUsed: serverTimestamp(),
      },
      { merge: true }
    );
    console.log(`Usage logged for ${featureName}`);
  } catch (error) {
    console.error("Error logging feature usage: ", error);
  }
}
