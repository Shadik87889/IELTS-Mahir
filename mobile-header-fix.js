/**
 * mobile-header-fix.js
 * Automatically injects layout fixes for the mobile header UI.
 * This solves the issue where the "Sign In" button and hamburger menu
 * get misplaced or wrap to a new line on smaller screens.
 */
(function () {
  // Prevent multiple injections if script is loaded twice
  if (document.getElementById("mobile-header-fix-styles")) return;

  const style = document.createElement("style");
  style.id = "mobile-header-fix-styles";
  style.innerHTML = `
        /* Smart Layout Overrides for Mobile Header */
        @media (max-width: 1024px) {
            /* 1. Maximize available width in the container */
            #premium-header .pr-container {
                padding: 0 12px 0 16px !important;
                display: flex !important;
                flex-wrap: nowrap !important;
                align-items: center !important;
            }

            /* 2. Make the logo area responsive and allow shrinking if necessary */
            .pr-logo {
                flex-shrink: 1 !important;
                min-width: 0 !important; 
                margin-right: auto !important; /* Push actions to the right */
            }
            .pr-logo img {
                max-height: 34px !important; /* Slightly scale down logo */
                width: auto !important;
            }

            /* 3. Scale down the brand text so it doesn't push the buttons */
            .pr-mobile-brand-name {
                font-size: 1.1rem !important;
                white-space: nowrap !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
            }

            /* On extremely small screens (like iPhone SE), hide the brand name to leave space for buttons */
            @media (max-width: 380px) {
                .pr-mobile-brand-name {
                    display: none !important;
                }
            }

            /* 4. Stop the action area from wrapping or acting weird */
            .pr-actions {
                display: flex !important;
                flex-wrap: nowrap !important;
                align-items: center !important;
                gap: 8px !important; /* Tighter gap between sign-in and menu */
                flex-shrink: 0 !important; /* Prevent actions from getting crushed */
            }

            /* 5. Fix the container wrapping and weird margins */
            #auth-buttons-container {
                margin-right: 0 !important; /* Removes the problematic 15px margin */
                flex-wrap: nowrap !important;
                display: flex !important;
                align-items: center !important;
            }

            /* 6. Smartly shrink the 'Sign In' Button */
            .auth-signin-btn {
                padding: 8px 16px !important;
                font-size: 0.9rem !important;
                white-space: nowrap !important;
                border-radius: 50px !important;
                gap: 6px !important;
            }

            /* Ensure auth loading skeleton also fits perfectly */
            .auth-loading-pulse {
                gap: 5px !important;
            }
            .auth-loading-circle {
                width: 36px !important;
                height: 36px !important;
            }

            /* 7. Stabilize the Hamburger Toggle Size */
            .pr-mobile-toggle {
                width: 38px !important;
                height: 38px !important;
                flex-shrink: 0 !important;
                margin-left: 2px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
            }
        }
    `;

  // Inject the styles directly into the head
  document.head.appendChild(style);
  console.log("Mobile Header Fix Applied.");
})();
