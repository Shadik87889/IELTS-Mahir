// success-story.js - Logic for the dedicated testimonials page

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase configuration
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

const firebaseConfig =
  typeof __firebase_config !== "undefined"
    ? JSON.parse(__firebase_config)
    : defaultFirebaseConfig;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const appId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;

let currentFilter = "all"; // Keep track of the current filter state
let allTestimonials = []; // Cache all fetched testimonials to filter client-side
let currentPage = 1; // Track the current page
const itemsPerPage = 6; // Set number of testimonials per page

// Function to render pagination controls
const renderPaginationControls = (totalItems) => {
  const paginationControls = document.getElementById("pagination-controls");
  if (!paginationControls) return;

  paginationControls.innerHTML = ""; // Clear existing controls
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return; // Don't show controls if there's only one page

  // Previous Button
  const prevButton = document.createElement("button");
  prevButton.classList.add("pagination-button");
  prevButton.textContent = "Previous";
  prevButton.dataset.page = "prev";
  if (currentPage === 1) {
    prevButton.disabled = true;
  }
  paginationControls.appendChild(prevButton);

  // Page Number Buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("pagination-button");
    pageButton.textContent = i;
    pageButton.dataset.page = i;
    if (i === currentPage) {
      pageButton.classList.add("active");
    }
    paginationControls.appendChild(pageButton);
  }

  // Next Button
  const nextButton = document.createElement("button");
  nextButton.classList.add("pagination-button");
  nextButton.textContent = "Next";
  nextButton.dataset.page = "next";
  if (currentPage === totalPages) {
    nextButton.disabled = true;
  }
  paginationControls.appendChild(nextButton);
};

// Function to filter and display testimonials based on the current filter
const filterAndDisplayTestimonials = () => {
  const testimonialsGrid = document.getElementById("testimonials-page-grid");
  if (!testimonialsGrid) return;

  testimonialsGrid.innerHTML = ""; // Clear the grid before re-rendering

  const filteredTestimonials = allTestimonials.filter((testimonial) => {
    if (currentFilter === "all") return true;
    return testimonial.type === currentFilter;
  });

  if (filteredTestimonials.length === 0) {
    const filterText = currentFilter === "text" ? "written" : currentFilter;
    testimonialsGrid.innerHTML = `<p style="text-align: center; grid-column: 1 / -1; color: #6b7280;">No ${filterText} testimonials found.</p>`;
    renderPaginationControls(0); // Clear pagination if no items
    return;
  }

  // Paginate the results
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTestimonials = filteredTestimonials.slice(
    startIndex,
    endIndex
  );

  paginatedTestimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");
    card.dataset.id = testimonial.id;

    let contentHtml = "";

    if (testimonial.type === "video") {
      card.classList.add("video-card");
      contentHtml = `
          <div class="video-overlay"></div>
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
          <div class="video-info">
            <p class="name video-name">${testimonial.name}</p>
            <p class="role video-role">${testimonial.role}</p>
          </div>
        `;
    } else {
      card.classList.add("text-card"); // Add class for quote icon style
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

  addVideoEventListeners(); // Re-attach video listeners after rendering
  renderPaginationControls(filteredTestimonials.length); // Render pagination controls
};

// Function to fetch all approved testimonials from Firestore
const fetchTestimonials = () => {
  const testimonialsGrid = document.getElementById("testimonials-page-grid");
  if (!testimonialsGrid) {
    console.error("Element with ID 'testimonials-page-grid' not found.");
    return;
  }

  const testimonialsRef = collection(
    db,
    "artifacts",
    appId,
    "public",
    "data",
    "testimonials"
  );
  const q = query(testimonialsRef, where("status", "==", "approved"));

  onSnapshot(
    q,
    (snapshot) => {
      allTestimonials = []; // Reset cache on new data from Firestore
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          allTestimonials.push({ id: doc.id, ...doc.data() });
        });
      }
      filterAndDisplayTestimonials(); // Perform the initial render with the 'all' filter
    },
    (error) => {
      console.error("Error fetching testimonials:", error);
      testimonialsGrid.innerHTML = `<p class="text-red-500 text-center col-span-full">Error loading testimonials: ${error.message}</p>`;
    }
  );
};

// Function to set up the filter button event listeners
const setupFilterControls = () => {
  const filterTabs = document.getElementById("filter-tabs");
  if (!filterTabs) return;

  filterTabs.addEventListener("click", (e) => {
    if (e.target.matches(".filter-tab")) {
      // Remove 'active' class from all filter buttons
      filterTabs
        .querySelectorAll(".filter-tab")
        .forEach((btn) => btn.classList.remove("active"));
      // Add 'active' class to the button that was clicked
      e.target.classList.add("active");
      // Update the global filter state
      currentFilter = e.target.dataset.filter;
      // Reset to the first page when filter changes
      currentPage = 1;
      // Re-render the testimonials with the new filter
      filterAndDisplayTestimonials();
    }
  });
};

// Function to set up pagination event listeners
const setupPaginationControls = () => {
  const paginationControls = document.getElementById("pagination-controls");
  if (!paginationControls) return;

  paginationControls.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.matches(".pagination-button") || target.disabled) return;

    const page = target.dataset.page;
    const totalPages = Math.ceil(
      allTestimonials.filter(
        (t) => currentFilter === "all" || t.type === currentFilter
      ).length / itemsPerPage
    );

    if (page === "prev") {
      if (currentPage > 1) {
        currentPage--;
      }
    } else if (page === "next") {
      if (currentPage < totalPages) {
        currentPage++;
      }
    } else {
      currentPage = parseInt(page, 10);
    }

    filterAndDisplayTestimonials();
    // Scroll to the top of the grid after changing page
    document
      .getElementById("testimonials-page-grid")
      .scrollIntoView({ behavior: "smooth" });
  });
};

// Function to add event listeners for video play/pause
const addVideoEventListeners = () => {
  document
    .querySelectorAll(".testimonial-card .play-button")
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        const videoId = e.currentTarget.dataset.videoId;
        const card = document.querySelector(
          `.testimonial-card[data-id="${videoId}"]`
        );
        const videoElement = card.querySelector(".tes-video");

        if (videoElement) {
          // Pause all other videos before playing the new one
          document.querySelectorAll(".tes-video").forEach((v) => {
            if (v !== videoElement) v.pause();
          });
          videoElement.play();
        }
      });
    });

  document
    .querySelectorAll(".testimonial-card .pause-button")
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        const videoId = e.currentTarget.dataset.videoId;
        const card = document.querySelector(
          `.testimonial-card[data-id="${videoId}"]`
        );
        const videoElement = card.querySelector(".tes-video");
        if (videoElement) videoElement.pause();
      });
    });

  document.querySelectorAll(".testimonial-card .tes-video").forEach((video) => {
    video.addEventListener("play", (e) => {
      const card = e.target.closest(".testimonial-card");
      card.querySelector(".play-button").style.display = "none";
      card.querySelector(".pause-button").style.display = "flex";
    });
    video.addEventListener("pause", (e) => {
      const card = e.target.closest(".testimonial-card");
      card.querySelector(".play-button").style.display = "flex";
      card.querySelector(".pause-button").style.display = "none";
    });
    video.addEventListener("ended", (e) => {
      const card = e.target.closest(".testimonial-card");
      card.querySelector(".play-button").style.display = "flex";
      card.querySelector(".pause-button").style.display = "none";
    });
  });
};

// Run setup functions when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  fetchTestimonials();
  setupFilterControls();
  setupPaginationControls();
});
