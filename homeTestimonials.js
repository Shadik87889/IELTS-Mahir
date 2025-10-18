// homeTestimonials.js - UPDATED CODE (No Authentication Attempted for Public Reads)

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
// REMOVED ALL AUTH-RELATED IMPORTS as they are not needed for public reads

// Firebase configuration and initialization
// Use the provided Firebase config for local development
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

// Check if Canvas global variables are defined, otherwise use defaults
const firebaseConfig =
  typeof __firebase_config !== "undefined"
    ? JSON.parse(__firebase_config)
    : defaultFirebaseConfig;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app); // REMOVED: auth instance is no longer needed in this file
const appId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;

// REMOVED: userId and isAuthReady variables, and authenticateFirebase function.
// No authentication is needed as per your security rules for these public reads.

// Declare message box elements globally, but initialize them inside DOMContentLoaded
let messageBox = null;
let messageContent = null;
let closeMessageBoxBtn = null;

const showMessage = (message) => {
  // Check if elements are initialized before trying to use them
  if (messageContent && messageBox) {
    messageContent.textContent = message;
    messageBox.classList.remove("hidden");
  } else {
    // Fallback to console if message box elements aren't ready
    console.warn("Message box elements not found. Message:", message);
  }
};

// --- Carousel/Slider Logic ---
let currentTestimonialIndex = 0;
let testimonialsData = []; // Store fetched testimonials
let isMobile = window.matchMedia("(max-width: 768px)").matches; // Check if on mobile

const updateCarousel = () => {
  const cards = document.querySelectorAll(".testimonial-card");
  const totalCards = cards.length;

  if (totalCards === 0) return;

  // Update indicators
  const dots = document.querySelectorAll(".flip-indicators .dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentTestimonialIndex);
  });

  cards.forEach((card, index) => {
    card.style.transition =
      "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease-in-out"; // Smooth transition

    if (index === currentTestimonialIndex) {
      card.classList.add("active");
      card.classList.remove("prev", "next");
      // Active card: centered, full size, fully visible
      card.style.transform = "translateX(0) scale(1)";
      card.style.opacity = "1";
      card.style.pointerEvents = "auto";
      card.style.zIndex = "2"; // Ensure active card is on top
    } else if (
      index ===
      (currentTestimonialIndex - 1 + totalCards) % totalCards
    ) {
      // Previous card: shifted left, slightly smaller, slightly faded
      card.classList.add("prev");
      card.classList.remove("active", "next");
      card.style.transform = "translateX(-100%) scale(0.9)"; // Shift left
      card.style.opacity = "0.7";
      card.style.pointerEvents = "none";
      card.style.zIndex = "1";
    } else if (index === (currentTestimonialIndex + 1) % totalCards) {
      // Next card: shifted right, slightly smaller, slightly faded
      card.classList.add("next");
      card.classList.remove("active", "prev");
      card.style.transform = "translateX(100%) scale(0.9)"; // Shift right
      card.style.opacity = "0.7";
      card.style.pointerEvents = "none";
      card.style.zIndex = "1";
    } else {
      // Other cards: hidden and out of the flow
      card.classList.remove("active", "prev", "next");
      card.style.transform = "translateX(0) scale(0.8)"; // Keep them at their original position for scale but make them effectively invisible
      card.style.opacity = "0";
      card.style.pointerEvents = "none";
      card.style.zIndex = "0";
    }
  });
};

const goToPrevTestimonial = () => {
  if (testimonialsData.length > 0) {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonialsData.length) %
      testimonialsData.length;
    updateCarousel();
  }
};

const goToNextTestimonial = () => {
  if (testimonialsData.length > 0) {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonialsData.length;
    updateCarousel();
  }
};

// Function to render testimonials
const renderTestimonials = () => {
  const testimonialsGrid = document.getElementById("testimonials-grid");
  const testimonialsNav = document.getElementById("testimonial-flip-nav"); // Get the navigation container

  if (!testimonialsGrid) {
    console.error(
      "Testimonials grid element with ID 'testimonials-grid' not found. Cannot render testimonials."
    );
    return;
  }

  // NO AUTHENTICATION CHECK IS NEEDED HERE.
  // Your security rules 'allow read: if true;' means no auth is necessary.

  const testimonialsRef = collection(
    db,
    "artifacts",
    appId,
    "public",
    "data",
    "testimonials"
  );

  const q = query(testimonialsRef, where("status", "==", "approved"));

  console.log(
    `Setting up onSnapshot for approved testimonials at path: artifacts/${appId}/public/data/testimonials`
  );

  onSnapshot(
    q,
    (snapshot) => {
      testimonialsGrid.innerHTML = ""; // Clear existing testimonials
      testimonialsData = []; // Clear previous data
      if (testimonialsNav) testimonialsNav.innerHTML = ""; // Clear nav buttons

      if (snapshot.empty) {
        console.log("No approved testimonials found.");
        testimonialsGrid.innerHTML =
          '<p class="text-gray-500 text-center col-span-full">No testimonials to display yet.</p>';
      } else {
        snapshot.forEach((doc) => {
          testimonialsData.push({ id: doc.id, ...doc.data() });
        });

        // Sort testimonials to ensure consistent order (e.g., by name or timestamp)
        testimonialsData.sort((a, b) =>
          (a.name || "").localeCompare(b.name || "")
        ); // Example sort

        // Limit the number of testimonials to a maximum of 3
        if (testimonialsData.length > 3) {
          testimonialsData = testimonialsData.slice(0, 3);
        }

        testimonialsData.forEach((testimonial, index) => {
          const card = document.createElement("div");
          card.classList.add("testimonial-card");
          card.dataset.id = testimonial.id; // Store ID for video control

          let contentHtml = "";

          if (testimonial.type === "video") {
            card.classList.add("video-card"); // Add specific class for video styling
            contentHtml = `
              <img src="${
                testimonial.avatarSrc ||
                `https://placehold.co/80x80/9CA3AF/white?text=${testimonial.name
                  .substring(0, 2)
                  .toUpperCase()}`
              }" alt="${
              testimonial.name
            }" class="avatar video-avatar" onerror="this.src='https://placehold.co/80x80/9CA3AF/white?text=User'">
              <video class="tes-video" src="${
                testimonial.videoSrc
              }" preload="metadata" muted playsinline></video>
              <div class="play-button" data-video-id="${
                testimonial.id
              }"><i class="fa-solid fa-play"></i></div>
              <div class="pause-button" data-video-id="${
                testimonial.id
              }" style="display:none;"><i class="fa-solid fa-pause"></i></div>
              <p class="name video-name">${testimonial.name}</p>
              <p class="role video-role">${testimonial.role}</p>
            `;
          } else {
            contentHtml = `
              <img src="${
                testimonial.avatarSrc ||
                `https://placehold.co/80x80/9CA3AF/white?text=${testimonial.name
                  .substring(0, 2)
                  .toUpperCase()}`
              }" alt="${
              testimonial.name
            }" class="avatar" onerror="this.src='https://placehold.co/80x80/9CA3AF/white?text=User'">
              <p class="text">"${testimonial.text}"</p>
              <p class="name">${testimonial.name}</p>
              <p class="role">${testimonial.role}</p>
            `;
          }
          card.innerHTML = contentHtml;
          testimonialsGrid.appendChild(card);
        });

        // Add navigation for mobile if testimonials exist
        if (testimonialsData.length > 0 && isMobile) {
          // Inline styles for the buttons
          const buttonStyle = `
            background-color: #4A90E2; /* A nice blue */
            color: white;
            border: none;
            border-radius: 50%; /* Makes it circular */
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2em; /* Slightly larger icon */
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Subtle shadow */
            transition: background-color 0.3s ease;
            outline: none; /* Remove focus outline */
          `;

          const navHtml = `
            <button class="flip-nav-button prev-button" style="${buttonStyle} margin-right: 10px;">&laquo;</button>
            <div class="flip-indicators">
              ${testimonialsData
                .map(
                  (_, i) =>
                    `<span class="dot ${
                      i === 0 ? "active" : ""
                    }" data-index="${i}" style="
                      display: inline-block;
                      width: 10px;
                      height: 10px;
                      background-color: #bbb;
                      border-radius: 50%;
                      margin: 0 5px;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    "></span>`
                )
                .join("")}
            </div>
            <button class="flip-nav-button next-button" style="${buttonStyle} margin-left: 10px;">&raquo;</button>
          `;
          testimonialsNav.innerHTML = navHtml;

          // Add inline style for active dot
          const activeDotStyle = `background-color: #4A90E2 !important;`; // Matches button color
          testimonialsNav.querySelectorAll(".dot").forEach((dot, i) => {
            if (i === 0) {
              dot.style = dot.getAttribute("style") + activeDotStyle;
            }
          });

          // Add event listeners for navigation buttons
          testimonialsNav
            .querySelector(".prev-button")
            .addEventListener("click", goToPrevTestimonial);
          testimonialsNav
            .querySelector(".next-button")
            .addEventListener("click", goToNextTestimonial);
          testimonialsNav.querySelectorAll(".dot").forEach((dot) => {
            dot.addEventListener("click", (e) => {
              currentTestimonialIndex = parseInt(e.target.dataset.index);
              updateCarousel();
            });
            // Add hover/active effects with inline styles for dots
            dot.addEventListener("mouseover", (e) => {
              e.target.style.backgroundColor = "#888";
            });
            dot.addEventListener("mouseout", (e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "#bbb";
              } else {
                e.target.style.backgroundColor = "#4A90E2"; // Active color
              }
            });
          });
          updateCarousel(); // Initial update to show the first card
        } else if (!isMobile) {
          // If not mobile, ensure grid displays normally
          testimonialsGrid.style.transform = "none";
          document.querySelectorAll(".testimonial-card").forEach((card) => {
            card.style.position = "static";
            card.style.transform = "none";
            card.style.opacity = "1";
            card.style.pointerEvents = "auto";
            card.style.zIndex = "auto";
            card.classList.remove("active", "prev", "next");
          });
        }

        // Add event listeners for video play/pause after content update
        document
          .querySelectorAll(".testimonial-card .play-button")
          .forEach((button) => {
            button.addEventListener("click", (e) => {
              const videoId = e.currentTarget.dataset.videoId;
              const videoElement = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .tes-video`
              );
              const pauseButton = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .pause-button`
              );

              if (videoElement) {
                // Pause all other videos before playing the current one
                document.querySelectorAll(".tes-video").forEach((v) => {
                  if (v !== videoElement && !v.paused) {
                    v.pause();
                  }
                });
                videoElement.play();
                e.currentTarget.style.display = "none";
                if (pauseButton) pauseButton.style.display = "flex";
              }
            });
          });

        document
          .querySelectorAll(".testimonial-card .pause-button")
          .forEach((button) => {
            button.addEventListener("click", (e) => {
              const videoId = e.currentTarget.dataset.videoId;
              const videoElement = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .tes-video`
              );
              const playButton = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .play-button`
              );

              if (videoElement) {
                videoElement.pause();
                e.currentTarget.style.display = "none";
                if (playButton) playButton.style.display = "flex";
              }
            });
          });

        document
          .querySelectorAll(".testimonial-card .tes-video")
          .forEach((video) => {
            video.addEventListener("ended", (e) => {
              const videoId = e.target.closest(".testimonial-card").dataset.id;
              const playButton = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .play-button`
              );
              const pauseButton = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .pause-button`
              );
              if (playButton) playButton.style.display = "flex";
              if (pauseButton) pauseButton.style.display = "none";
            });
            video.addEventListener("play", (e) => {
              const videoId = e.target.closest(".testimonial-card").dataset.id;
              const playButton = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .play-button`
              );
              const pauseButton = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .pause-button`
              );
              if (playButton) playButton.style.display = "none";
              if (pauseButton) pauseButton.style.display = "flex";
            });
            video.addEventListener("pause", (e) => {
              const videoId = e.target.closest(".testimonial-card").dataset.id;
              const playButton = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .play-button`
              );
              const pauseButton = document.querySelector(
                `.testimonial-card[data-id="${videoId}"] .pause-button`
              );
              if (playButton) playButton.style.display = "flex";
              if (pauseButton) pauseButton.style.display = "none";
            });
          });

        // Optional: Add touch swipe for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        testimonialsGrid.addEventListener(
          "touchstart",
          (e) => {
            touchStartX = e.touches[0].clientX;
          },
          { passive: true }
        ); // Use passive listener for performance

        testimonialsGrid.addEventListener(
          "touchmove",
          (e) => {
            touchEndX = e.touches[0].clientX;
          },
          { passive: true }
        );

        testimonialsGrid.addEventListener("touchend", () => {
          const minSwipeDistance = 50; // Minimum pixels for a recognized swipe
          if (touchStartX - touchEndX > minSwipeDistance) {
            // Swiped left
            goToNextTestimonial();
          } else if (touchEndX - touchStartX > minSwipeDistance) {
            // Swiped right
            goToPrevTestimonial();
          }
          touchStartX = 0;
          touchEndX = 0;
        });
      }
    },
    (error) => {
      console.error("Error fetching approved testimonials:", error);
      showMessage(
        `Error loading testimonials: ${error.message}. Please try again.`
      );
    }
  );
};

// Handle window resize to update isMobile
window.addEventListener("resize", () => {
  const wasMobile = isMobile;
  isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (wasMobile !== isMobile) {
    renderTestimonials(); // Re-render to apply correct mobile/desktop styles
  }
});

// Start rendering when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  // Initialize message box elements here to ensure they exist
  messageBox = document.getElementById("message-box");
  messageContent = document.getElementById("message-content");
  closeMessageBoxBtn = document.getElementById("close-message-box");

  if (closeMessageBoxBtn) {
    closeMessageBoxBtn.addEventListener("click", () => {
      if (messageBox) messageBox.classList.add("hidden");
    });
  }

  console.log("Home Page DOMContentLoaded fired. Rendering testimonials...");
  renderTestimonials(); // Directly call renderTestimonials
});
