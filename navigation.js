// Get the navigation bar element
const nav = document.querySelector("nav");

// Variable to store the last scroll position
let lastScrollY = window.scrollY;

// Function to handle the scroll event
function handleScroll() {
  const currentScrollY = window.scrollY;

  // Add/remove the 'scrolled' class for the blur effect
  if (currentScrollY > 50) {
    // Arbitrary value to trigger the blur after some scrolling
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  // Determine scroll direction and toggle the 'nav-hidden' class
  if (currentScrollY > lastScrollY) {
    // Scrolling down, hide the nav
    nav.classList.add("nav-hidden");
  } else {
    // Scrolling up, show the nav
    nav.classList.remove("nav-hidden");
  }

  // Update the last scroll position
  lastScrollY = currentScrollY;
}

// Add the event listener to the window
window.addEventListener("scroll", handleScroll);
