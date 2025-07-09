document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".menu-item");
  const dropdowns = document.querySelectorAll(".dropdown");

  // GSAP animation duration and easing
  const animationDuration = 0.4;
  const animationEase = "power2.out";
  const staggerAmount = 0.08; // Small delay for staggered animations (still used for main menu)

  // Function to close all open submenus and reset their arrows
  const closeAllSubmenus = () => {
    dropdowns.forEach((dropdown) => {
      const submenu = dropdown.querySelector(".submenu");
      const arrowIcon = dropdown.querySelector(".arrow");

      // Ensure no animation is currently running
      if (gsap.isTweening(submenu)) {
        gsap.killTweensOf(submenu);
      }

      if (window.innerWidth < 768) {
        // Desktop: GSAP animation for closing
        gsap.to(submenu, {
          maxHeight: 0,
          opacity: 0,
          y: 15, // Animate Y for desktop
          paddingTop: 0,
          paddingBottom: 0,
          duration: animationDuration,
          ease: animationEase,
          onComplete: () => {
            submenu.style.visibility = "hidden";
            submenu.style.pointerEvents = "none";
          },
        });
        gsap.to(arrowIcon, {
          rotation: 0,
          duration: animationDuration,
          ease: animationEase,
        });
      } else {
        // Mobile: Remove 'show' class directly
        submenu.classList.remove("show");
        arrowIcon.classList.remove("rotate");
        // Ensure inline styles from GSAP are cleared for mobile
        gsap.set(submenu, { clearProps: "all" });
      }
    });
  };

  // --- Function to Show Mobile Menu ---
  const showMobileMenu = () => {
    gsap.fromTo(
      navMenu.children,
      { opacity: 0, y: 30, scaleX: 0.9 },
      {
        opacity: 1,
        y: 0,
        scaleX: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: staggerAmount,
        delay: 0.1,
      }
    );
  };

  // --- Function to Hide Mobile Menu ---
  const hideMobileMenu = () => {
    gsap.to(navMenu.children, {
      opacity: 0,
      y: -20,
      scaleX: 0.9,
      duration: 0.3,
      ease: "power1.in",
      stagger: -staggerAmount,
      onComplete: () => {
        gsap.set(navMenu.children, { clearProps: "opacity,y,scaleX" });
      },
    });
  };

  // --- Mobile Menu Toggle Logic (Hamburger) ---
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("open");
      document.body.classList.toggle("menu-open"); // Toggles body overflow for mobile menu
      closeAllSubmenus(); // Close any open submenus when main menu opens/closes

      if (navMenu.classList.contains("active")) {
        showMobileMenu();
      } else {
        hideMobileMenu();
      }
    });
  }

  // --- Dropdown Toggle Logic (Click for both Desktop & Mobile) ---
  dropdowns.forEach((dropdown) => {
    const downArrow = dropdown.querySelector(".down-arrow");
    const submenu = dropdown.querySelector(".submenu");
    const arrowIcon = dropdown.querySelector(".arrow");

    downArrow.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      event.stopPropagation(); // Prevent click from bubbling up

      // Ensure no animation is currently running on this submenu
      if (gsap.isTweening(submenu)) {
        gsap.killTweensOf(submenu);
      }

      if (window.innerWidth < 768) {
        // If this submenu is already open, close it
        if (submenu.style.maxHeight !== "0px") {
          // Check current GSAP state or if it's open
          gsap.to(submenu, {
            maxHeight: 0,
            opacity: 0,
            y: window.innerWidth > 768 ? 15 : 0, // Animate Y for desktop
            paddingTop: 0,
            paddingBottom: 0,
            duration: animationDuration,
            ease: animationEase,
            onComplete: () => {
              submenu.style.visibility = "hidden";
              submenu.style.pointerEvents = "none";
            },
          });
          gsap.to(arrowIcon, {
            rotation: 0,
            duration: animationDuration,
            ease: animationEase,
          });
        } else {
          // Close all other submenus first
          closeAllSubmenus();

          // Then open this submenu
          submenu.style.visibility = "visible";
          submenu.style.pointerEvents = "auto";
          gsap.fromTo(
            submenu,
            {
              maxHeight: 0,
              opacity: 0,
              y: 15, // Start from slightly lower for desktop
              paddingTop: 0,
              paddingBottom: 0,
            },
            {
              maxHeight: submenu.scrollHeight, // Animate to full content height
              opacity: 1,
              y: 0, // Reset Y position
              paddingTop: 10, // Apply expanded padding
              paddingBottom: 10, // Apply expanded padding
              duration: animationDuration,
              ease: animationEase,
            }
          );
          gsap.to(arrowIcon, {
            rotation: 90,
            duration: animationDuration,
            ease: animationEase,
          });
        }
      } else {
        // Mobile Animation (using classes for CSS transitions)
        // Close other submenus
        document.querySelectorAll(".submenu").forEach((menu) => {
          if (menu !== submenu) menu.classList.remove("show");
        });
        document.querySelectorAll(".arrow").forEach((arr) => {
          if (arr !== arrowIcon) arr.classList.remove("rotate");
        });

        // Toggle this submenu and arrow
        submenu.classList.toggle("show");
        arrowIcon.classList.toggle("rotate");
        // Clear any GSAP inline styles that might interfere
        gsap.set(submenu, { clearProps: "all" });
      }
    });
  });

  // --- Close menus on various interactions ---

  // Close main mobile menu when a non-dropdown link inside it is clicked
  // Also close submenus when a submenu link is clicked
  navMenu.querySelectorAll("a:not(.down-arrow)").forEach((link) => {
    link.addEventListener("click", () => {
      // For mobile: if the main menu is active, close it
      if (window.innerWidth <= 768 && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
        document.body.classList.remove("menu-open");
        hideMobileMenu(); // Hide mobile menu items with animation
      }
      closeAllSubmenus(); // Always close any open submenus after a navigation link click
    });
  });

  // Close all submenus (and mobile menu if open) on an outside click
  document.addEventListener("click", (event) => {
    // If the click is not inside the nav menu and not on the hamburger
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      // For mobile: close main menu if open
      if (window.innerWidth <= 768 && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
        document.body.classList.remove("menu-open");
        hideMobileMenu(); // Hide mobile menu items with animation
      }
      // Always close all submenus (applies to both desktop and mobile)
      closeAllSubmenus();
    }
  });

  // Close mobile menu and submenus when window is resized to desktop view
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
        document.body.classList.remove("menu-open");
        // Clear mobile menu animation properties
        gsap.set(navMenu.children, { clearProps: "all" });
      }
      closeAllSubmenus(); // Ensure submenus are closed on desktop transition
    } else {
      // On mobile view, ensure submenu properties are reset for proper mobile accordion
      dropdowns.forEach((dropdown) => {
        const submenu = dropdown.querySelector(".submenu");
        const arrow = dropdown.querySelector(".arrow");

        // Clear any GSAP inline styles that might interfere with mobile CSS
        gsap.set(submenu, { clearProps: "all" });
        gsap.set(arrow, { clearProps: "all" });

        // If submenu was open on desktop and now on mobile, ensure it collapses if main menu is closed
        if (
          !navMenu.classList.contains("active") &&
          submenu.classList.contains("show") // Check for the 'show' class for mobile state
        ) {
          submenu.classList.remove("show");
          arrow.classList.remove("rotate");
        }
      });
    }
  });
});
