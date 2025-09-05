// ======================================
// New JavaScript for Footer Scroll Links
// ======================================
document
  .querySelectorAll(
    '.footer a[href^="#"], .connect-btn[href^="#"], .program-menu-btn[href^="#"]'
  )
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default jump behavior

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Check if the target element exists on the current page
      if (targetElement) {
        // If it exists, perform smooth scroll and highlight
        const currentHighlights = document.querySelectorAll(".highlight");
        currentHighlights.forEach((el) => el.classList.remove("highlight"));

        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          targetElement.classList.add("highlight");
        }, 500);
      } else {
        // If the target element doesn't exist, redirect to the home page
        // and append the target ID to the URL as a hash fragment.
        window.location.href = "home.html" + targetId;
      }
    });
  });

// Add this additional script on your home.html page to handle the redirection scroll
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });

      // Optional: Add highlight
      setTimeout(() => {
        targetElement.classList.add("highlight");
      }, 500);
    }
  }
});
