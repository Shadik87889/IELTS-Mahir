function page2Animation() {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the "Ready, set, Go" text
  gsap.from("#page2 .flex-el h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2 .flex-el",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
      once: true,
    },
  });

  // Animate each featured card as they come into view
  gsap.from("#page2 .featured-card-wrapper", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2 .all-featured-cards",
      start: "top 85%",
      end: "top 40%",
      scrub: true,
      once: true,
    },
  });
}
page2Animation();
function page3Animation() {
  gsap.registerPlugin(ScrollTrigger);
  // Animate .label and .main-heading
  gsap.from(".testimonials-header .label", {
    scrollTrigger: {
      trigger: ".testimonials-header",
      start: "top 90%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  gsap.from(".testimonials-header .main-heading", {
    scrollTrigger: {
      trigger: ".testimonials-header",
      start: "top 90%",
    },
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2,
  });

  const cards = gsap.utils.toArray(".testimonial-card");

  cards.forEach((card, i) => {
    const directionX = i % 2 === 0 ? -200 : 200;
    const directionZ = i % 2 === 0 ? -400 : 400;
    const avatar = card.querySelector(".avatar");

    // Create glow ring
    const glow = document.createElement("div");
    glow.classList.add("glow-ring");
    card.appendChild(glow);

    gsap.set(glow, { scale: 0, opacity: 0 });

    gsap.fromTo(
      card,
      {
        x: directionX,
        y: 150,
        z: directionZ,
        rotationY: directionX > 0 ? 45 : -45,
        rotationX: 30,
        opacity: 0,
        scale: 0.3,
        filter: "blur(15px)",
        clipPath: "circle(0% at 50% 50%)",
      },
      {
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
        },
        x: 0,
        y: 0,
        z: 0,
        rotationY: 0,
        rotationX: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        clipPath: "circle(150% at 50% 50%)",
        duration: 2,
        ease: "expo.out",
        delay: i * 0.2,
        onStart: () => {
          if (avatar) {
            gsap.fromTo(
              avatar,
              { scale: 0.4, opacity: 0, rotate: -30, filter: "blur(6px)" },
              {
                scale: 1,
                rotate: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "back.out(3)",
                delay: 0.3,
              }
            );
          }

          // Glow burst
          gsap.fromTo(
            glow,
            { scale: 0.4, opacity: 0 },
            {
              scale: 2.2,
              opacity: 0.3,
              duration: 0.8,
              ease: "expo.out",
              onComplete: () => gsap.to(glow, { opacity: 0, duration: 0.3 }),
            }
          );
        },
      }
    );
  });

  // Hover (original style)
  document.querySelectorAll(".testimonial-card").forEach((card) => {
    const avatar = card.querySelector(".avatar");
    const sweep = document.createElement("div");
    sweep.classList.add("light-sweep");
    card.appendChild(sweep);

    card.addEventListener("mousemove", (e) => {
      const bounds = card.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;

      gsap.to(card, {
        rotationY: deltaX * 0.05,
        rotationX: -deltaY * 0.05,
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(sweep, {
        x: x - 150,
        y: y - 150,
        duration: 0.4,
        ease: "power2.out",
      });

      if (avatar) {
        gsap.to(avatar, {
          y: -10,
          scale: 1.05,
          duration: 0.4,
          ease: "sine.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: "expo.out",
      });
      gsap.to(sweep, {
        x: -150,
        y: -150,
        duration: 0.4,
        ease: "power2.out",
      });
      if (avatar) {
        gsap.to(avatar, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "sine.inOut",
        });
      }
    });
  });
}

page3Animation();

(function () {
  if (!window.matchMedia("(max-width: 768px)").matches) return;

  const cards = Array.from(
    document.querySelectorAll("#testimonials-grid .testimonial-card")
  );
  const indicators = document.getElementById("testimonial-indicators");
  let current = 0;
  let animating = false;

  function showCard(idx, direction = 1) {
    if (animating || idx === current) return;
    animating = true;

    const outgoingCard = cards[current];
    const incomingCard = cards[idx];

    const animationDuration = 0.5;
    const outgoingScale = 0.9;
    const incomingScale = 1.05;
    const incomingStartX = direction === 1 ? "100%" : "-100%";
    const outgoingEndX = direction === 1 ? "-10%" : "10%";

    gsap.set(incomingCard, {
      x: incomingStartX,
      scale: incomingScale,
      opacity: 0,
      zIndex: 2,
      pointerEvents: "auto",
    });
    gsap.set(outgoingCard, { zIndex: 1 });

    gsap
      .timeline({
        onComplete: () => {
          gsap.set(outgoingCard, {
            clearProps: "x, scale, opacity, zIndex, pointerEvents",
          });
          gsap.set(incomingCard, { clearProps: "x, scale, zIndex" });

          incomingCard.classList.add("active");
          outgoingCard.classList.remove("active");
          animating = false;
          current = idx;
          updateIndicators();
        },
      })
      .to(
        outgoingCard,
        {
          x: outgoingEndX,
          scale: outgoingScale,
          opacity: 0,
          duration: animationDuration * 0.8,
          ease: "power3.out",
        },
        0
      )
      .to(
        incomingCard,
        {
          x: "0%",
          scale: 1,
          opacity: 1,
          duration: animationDuration,
          ease: "power3.out",
        },
        0
      );
  }

  function updateIndicators() {
    if (indicators) {
      indicators.innerHTML = "";
      cards.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.className = "dot" + (i === current ? " active" : "");
        dot.onclick = () => {
          if (!animating) showCard(i, i > current ? 1 : -1);
        };
        indicators.appendChild(dot);
      });
    }
  }

  let startX = null;
  let gridElement = document.getElementById("testimonials-grid");

  gridElement.addEventListener(
    "touchstart",
    function (e) {
      if (animating) return;
      startX = e.touches[0].clientX;
    },
    { passive: true }
  );

  gridElement.addEventListener("touchend", function (e) {
    if (startX === null || animating) return;

    let dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      let nextIdx = current;
      if (dx < 0) {
        nextIdx = (current + 1) % cards.length;
        showCard(nextIdx, 1);
      } else {
        nextIdx = (current - 1 + cards.length) % cards.length;
        showCard(nextIdx, -1);
      }
    }
    startX = null;
  });

  // Initial setup
  cards.forEach((card, index) => {
    gsap.set(card, {
      opacity: index === current ? 1 : 0,
      x: index === current ? "0%" : "100%",
      scale: 1,
      zIndex: index === current ? 2 : 1,
      pointerEvents: index === current ? "auto" : "none",
    });
  });

  cards[current].classList.add("active");
  updateIndicators();
})();
