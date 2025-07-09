// Import authAppState and signOutUser from auth.js
import {
  initFirebaseAuth,
  signOutUser,
  authAppState,
  showToast,
} from "./auth.js";

// --- Helper Icons (Font Awesome classes) ---
const Icons = {
  User: `<i class="fas fa-user-circle"></i>`,
  SignIn: `<i class="fas fa-sign-in-alt"></i>`,
  SignOut: `<i class="fas fa-sign-out-alt"></i>`,
  Dashboard: `<i class="fas fa-chart-line"></i>`, // New icon for Dashboard
  Forum: `<i class="fas fa-comments"></i>`, // New icon for Forum
};

// --- DOM Elements Cache (for this page) ---
const elements = {
  authButtonsContainer: document.getElementById("auth-buttons-container"),
  dynamicActionText: document.getElementById("dynamic-action-text"),
};

/**
 * Renders the authentication buttons in the header based on user state.
 * This function is called by initFirebaseAuth.
 * @param {object|null} user - The Firebase User object or null if signed out.
 */
function updateNavBarAuthStatus(user) {
  console.log("updateNavBarAuthStatus called.");
  console.log("User object:", user);
  console.log("authAppState.userId:", authAppState.userId);
  console.log("authAppState.userProfile:", authAppState.userProfile);
  console.log("authButtonsContainer:", elements.authButtonsContainer);

  if (elements.authButtonsContainer) {
    if (user) {
      // User is signed in: Show only the profile icon and its dropdown
      elements.authButtonsContainer.innerHTML = `
              <div class="relative">
                  <button id="profile-icon-btn" class="auth-icon-btn" aria-label="User Profile"> ${
                    Icons.User
                  } </button>
                  <div id="profile-dropdown" class="profile-dropdown-menu hidden">
                      <div class="dropdown-header">Hello, ${
                        authAppState.userProfile?.name ||
                        user.email ||
                        user.uid.substring(0, 8)
                      }</div>
                      <button class="dropdown-item" onclick="window.location.href='dashboard.html'">${
                        Icons.Dashboard
                      } Dashboard</button>
                      <button class="dropdown-item" onclick="window.location.href='ielts-mahir-community-forum.html'">${
                        Icons.Forum
                      } Forum</button>
                      <button id="sign-out-dropdown-btn" class="dropdown-item sign-out-item"> ${
                        Icons.SignOut
                      } Sign Out</button>
                  </div>
              </div>
            `;

      const profileIconBtn = document.getElementById("profile-icon-btn");
      const profileDropdown = document.getElementById("profile-dropdown");
      const signOutDropdownBtn = document.getElementById(
        "sign-out-dropdown-btn"
      );

      if (profileIconBtn && profileDropdown) {
        profileIconBtn.addEventListener("click", (event) => {
          event.stopPropagation(); // Prevent document click from immediately closing
          profileDropdown.classList.toggle("hidden");
          profileDropdown.classList.toggle("show");
        });

        // Close dropdown if clicked outside
        document.addEventListener("click", (event) => {
          if (
            !profileDropdown.contains(event.target) &&
            !profileIconBtn.contains(event.target)
          ) {
            profileDropdown.classList.add("hidden");
            profileDropdown.classList.remove("show");
          }
        });
      }

      if (signOutDropdownBtn) {
        signOutDropdownBtn.addEventListener("click", async () => {
          await signOutUser();
          showToast("Signed out successfully!", "success"); // Show toast notification
          window.location.href = "auth.html"; // Redirect to a dedicated auth page
        });
      }

      if (elements.dynamicActionText) {
        elements.dynamicActionText.textContent = "go to your dashboard";
        elements.dynamicActionText.onclick = () => {
          window.location.href = "forum.html";
        }; // Or profile.html
      }
    } else {
      // User is signed out
      elements.authButtonsContainer.innerHTML = `
              <a href="auth.html" id="sign-in-nav-btn" class="auth-signin-btn"> ${Icons.SignIn} <span class="hidden sm:inline">Sign In</span> </a>
            `;
      if (elements.dynamicActionText) {
        elements.dynamicActionText.textContent = "sign in";
        elements.dynamicActionText.onclick = () => {
          window.location.href = "auth.html";
        };
      }
    }
  } else {
    console.error("Error: authButtonsContainer not found in the DOM.");
  }
}

// Initialize authentication when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired. Initializing Firebase Auth.");
  initFirebaseAuth(updateNavBarAuthStatus);
});

// --- Enhanced Loading Screen Logic ---
window.addEventListener("load", () => {
  const loadingOverlay = document.getElementById("loading-overlay");
  // Removed loadingPercentage
  const loaderWave = document.getElementById("loader-wave");

  const totalLoadingTime = 2500; // Total time for the simulated loading in milliseconds
  let startTime = null;

  function animateLoading(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    let progress = Math.min(elapsedTime / totalLoadingTime, 1); // Progress from 0 to 1

    // Animate the wave fill (from 100% down to 0% of its own height)
    // The wave element itself is 200% height, so we fill it from 100% to 0% of its parent's height
    // This means the wave's top position will go from 100% (fully hidden) to 0% (fully visible)
    const waveFillHeight = 100 - progress * 100; // 100 -> 0 as progress goes 0 -> 1
    if (loaderWave) {
      loaderWave.style.transform = `translateY(${waveFillHeight}%) rotate(${
        progress * 360
      }deg)`;
    }

    if (progress < 1) {
      requestAnimationFrame(animateLoading);
    } else {
      // Once loading is complete, hide the overlay
      if (loadingOverlay) {
        loadingOverlay.classList.add("hidden");
      }
    }
  }

  // Start the animation
  requestAnimationFrame(animateLoading);
});
