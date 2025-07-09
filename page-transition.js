document.querySelectorAll("a").forEach((link) => {
  if (link.href && !link.href.includes("#")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.href;

      // Animate overlay in
      gsap
        .timeline()
        .set("#transition-overlay", { pointerEvents: "all" })
        .to("#transition-overlay", {
          scaleY: 1,
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(".transition-logo", { opacity: 1, duration: 0.2 }, "-=0.3")
        .to(
          ".transition-logo span",
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 3,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .add(() => {
          window.location.href = href;
        });
    });
  }
});

window.addEventListener("load", () => {
  gsap.set("#transition-overlay", { scaleY: 1 });
  gsap.to("#transition-overlay", {
    scaleY: 0,
    duration: 3,
    ease: "power2.inOut",
    delay: 0.2,
  });
});
