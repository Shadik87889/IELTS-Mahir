// Accordion functionality for Writing section
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector(".accordion-icon");

    // Close other open accordions
    document
      .querySelectorAll(".accordion-content.active")
      .forEach((openContent) => {
        if (openContent !== content) {
          openContent.classList.remove("active");
          openContent.previousElementSibling
            .querySelector(".accordion-icon")
            .classList.remove("rotate-180");
        }
      });

    // Toggle current accordion
    content.classList.toggle("active");
    icon.classList.toggle("rotate-180");
  });
});

// Ensure smooth scrolling for the hero button
document.querySelector(".hero-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});
