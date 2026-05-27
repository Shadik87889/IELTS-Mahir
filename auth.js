// --- START OF FILE auth.js ---
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
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification, // ✨ NEW: Security Import
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

export const authAppState = {
  db: null,
  auth: null,
  userId: null,
  userProfile: null,
  isAuthReady: false,
  unsubscribeAuthProfile: null,
};

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

export const Icons = {
  User: `<i class="fas fa-user-circle"></i>`,
  Cog: `<i class="fas fa-cog"></i>`,
  Bell: `<i class="fas fa-bell"></i>`,
  SignIn: `<i class="fas fa-sign-in-alt"></i>`,
  SignOut: `<i class="fas fa-sign-out-alt"></i>`,
  Dashboard: `<i class="fas fa-chart-line"></i>`,
  Forum: `<i class="fas fa-comments"></i>`,
};

export function showToast(message, type, duration = 3000) {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `${
    type === "success" ? '<i class="fas fa-check-circle"></i>' : ""
  } ${type === "error" ? '<i class="fas fa-exclamation-triangle"></i>' : ""} ${
    type === "info" ? '<i class="fas fa-info-circle"></i>' : ""
  } <span>${message}</span>`;
  toastContainer.appendChild(toast);
  void toast.offsetWidth;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    toast.addEventListener("transitionend", () => toast.remove());
  }, duration);
}

export async function initFirebaseAuth(onAuthChangeCallback) {
  const appId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;
  const firebaseConfig =
    typeof __firebase_config !== "undefined"
      ? JSON.parse(__firebase_config)
      : defaultFirebaseConfig;

  try {
    let app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    authAppState.db = getFirestore(app);
    authAppState.auth = getAuth(app);
    await setPersistence(authAppState.auth, browserLocalPersistence);

    onAuthStateChanged(authAppState.auth, async (user) => {
      if (user) {
        const hasExplicitProvider = user.providerData.some(
          (p) => p.providerId !== "firebase" && p.providerId !== "anonymous",
        );

        if (user.isAnonymous && !hasExplicitProvider) {
          await signOut(authAppState.auth);
          return;
        }

        // ✨ ALWAYS force reload to get the latest email verification status
        await user.reload();

        // ✨ SECURITY CHECK: Is this a password account that hasn't verified their email?
        const isPasswordAuth = user.providerData.some(
          (p) => p.providerId === "password",
        );
        const isUnverified = isPasswordAuth && !user.emailVerified;

        authAppState.userId = user.uid;
        const userRef = doc(
          authAppState.db,
          `artifacts/${appId}/users/${user.uid}/userProfile/profile`,
        );
        const userSnap = await getDoc(userRef);

        let newUserProfileData;
        if (userSnap.exists()) {
          newUserProfileData = userSnap.data();
          if (
            newUserProfileData.name !== user.displayName &&
            user.displayName
          ) {
            await updateDoc(userRef, { name: user.displayName });
            newUserProfileData.name = user.displayName;
          }
        } else {
          newUserProfileData = {
            name: user.displayName || `User-${user.uid.substring(0, 5)}`,
            email: user.email || "",
            role: "free",
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

        await updateDoc(userRef, { lastLogin: serverTimestamp() });
        authAppState.userProfile = newUserProfileData;
        authAppState.isAuthReady = true;

        // ✨ Pass the unverified status back to the UI router to lock them out of the dashboard
        onAuthChangeCallback(user, isUnverified);
      } else {
        authAppState.userId = null;
        authAppState.userProfile = null;
        authAppState.isAuthReady = true;
        onAuthChangeCallback(null, false);
      }
    });

    if (typeof __initial_auth_token !== "undefined" && __initial_auth_token) {
      try {
        await signInWithCustomToken(authAppState.auth, __initial_auth_token);
      } catch (error) {}
    }

    return { db: authAppState.db, auth: authAppState.auth };
  } catch (error) {
    authAppState.isAuthReady = true;
    onAuthChangeCallback(null, false);
    throw error;
  }
}

export async function signInEmailPassword(email, password) {
  try {
    await signInWithEmailAndPassword(authAppState.auth, email, password);
    showToast("Authenticating...", "info");
    return true;
  } catch (error) {
    showToast(
      `Sign-in failed: ${error.message.replace("Firebase:", "")}`,
      "error",
    );
    return false;
  }
}

export async function signUpEmailPassword(email, password, name = "") {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authAppState.auth,
      email,
      password,
    );
    const user = userCredential.user;

    if (name) await updateProfile(user, { displayName: name });

    // ✨ SECURITY LAYER: Send mandatory verification email instantly upon signup
    await sendEmailVerification(user);

    const userRef = doc(
      authAppState.db,
      `artifacts/${defaultAppId}/users/${user.uid}/userProfile/profile`,
    );
    await setDoc(userRef, {
      name: name || `User-${user.uid.substring(0, 5)}`,
      email: user.email || "",
      bandGoal: "N/A",
      preparationStatus: "New Learner",
      reputation: 0,
      role: "free",
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

    showToast(
      "Account created! Please check your email to verify ownership.",
      "success",
      6000,
    );
    return true;
  } catch (error) {
    showToast(
      `Sign-up failed: ${error.message.replace("Firebase:", "")}`,
      "error",
    );
    return false;
  }
}

export async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authAppState.auth, provider);
    showToast("Signed in securely with Google!", "success");
    return true;
  } catch (error) {
    showToast(`Google sign-in failed`, "error");
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
    return false;
  }
}

// ✨ NEW HELPER: Resends the verification link
export async function resendVerificationLink() {
  try {
    const user = authAppState.auth.currentUser;
    if (user) {
      await sendEmailVerification(user);
      showToast(
        "Verification link resent! Check your inbox and spam folder.",
        "success",
        5000,
      );
      return true;
    }
    return false;
  } catch (error) {
    if (error.code === "auth/too-many-requests") {
      showToast(
        "You've requested too many emails. Please wait a minute.",
        "error",
      );
    } else {
      showToast("Failed to resend link. Try again later.", "error");
    }
    return false;
  }
}

// ✨ NEW HELPER: Forces Firebase to fetch the absolute latest user data (to check if they clicked the link)
export async function forceReloadUser() {
  try {
    const user = authAppState.auth.currentUser;
    if (user) {
      await user.reload();
      return authAppState.auth.currentUser;
    }
    return null;
  } catch (error) {
    return null;
  }
}
