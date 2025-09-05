// Ensure GSAP and ScrollTrigger are loaded before this script runs.
// This file is meant to be linked in your HTML, e.g., <script src="gsap.js"></script>
// after the GSAP library links.

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

(function () {
  // --- 2. Featured Cards Animation (page2) ---
  // Animates the featured cards to slide in from the bottom when they come into view.
  // Uses ScrollTrigger to pin the section while the cards animate.
  gsap.utils.toArray(".featured-card-wrapper").forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%", // Animation starts when the top of the card is 80% from the top of the viewport
        toggleActions: "play none none none",
      },
    });
  });

  // --- 3. Testimonials Section (`page3`) Animation ---
  // Fades in the testimonials header and grid as the user scrolls.
  gsap.from("#page3 .testimonials-header, #page3 #testimonials-grid", {
    y: 50,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page3",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // --- 5. IELTS Programs Section (`ielts-programs-section`) Animation ---
  // Animates the section header and then staggers the program cards.
  gsap.from("#ielts-programs-section .programs-header", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#ielts-programs-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.utils.toArray(".program-card").forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      delay: index * 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // --- 6. Success Journey (`success-journey-section`) Animation ---
  // Animates the header and the timeline items with a staggered effect.
  gsap.from("#success-journey-section .success-journey-header", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#success-journey-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.utils.toArray(".timeline-item").forEach((item, index) => {
    let direction = index % 2 === 0 ? -100 : 100; // Left or right direction
    gsap.from(item, {
      x: direction,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // --- 8. FAQ Section (`faq-section`) Animation ---
  // Animates the header and individual FAQ items.
  gsap.from("#faq-section .faq-header", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#faq-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.utils.toArray(".faq-item").forEach((item, index) => {
    gsap.from(item, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });
})();
