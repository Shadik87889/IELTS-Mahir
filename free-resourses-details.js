// Global variables for Firebase (will be populated by the Canvas environment)
const defaultAppId = "ielts-mahir-community-forum"; // Fallback for local development
const defaultFirebaseConfig = {
  apiKey: "AIzaSyAxsd0CnLsh7t7yFy3ZPp6saGD_YpLL1mY",
  authDomain: "ielts-mahir-community-forum.firebaseapp.com",
  projectId: "ielts-mahir-community-forum",
  storageBucket: "ielts-mahir-community-forum.firebasestorage.app",
  messagingSenderId: "1036043607546",
  appId: "1:1036043607546:web:bd217e04cc0ec5f296d843",
  measurementId: "G-YC4CG1WKD1", // Corrected measurementId based on typical Firebase config
};

// Initialize Firebase only once
let app;
let db;
let currentAppId;

// Array to hold dynamically loaded free resources
let freeResourcesData = [];

// --- Firebase Initialization ---
async function initializeFirebase() {
  try {
    const firebaseConfig =
      typeof __firebase_config !== "undefined"
        ? JSON.parse(__firebase_config)
        : defaultFirebaseConfig;
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore(app);
    currentAppId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;
    console.log("Firebase initialized for public data access.");
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    showMessage(
      `Failed to connect to Firebase: ${error.message}. Please check your internet connection and Firebase setup.`
    );
  }
}

// --- Message Box Utility ---
const showMessage = (message) => {
  // This assumes a message box HTML structure exists somewhere, similar to the admin panel.
  // For a standalone page, you might need to add this HTML or use a simple alert for now.
  // For this example, let's just log to console if no message box is available.
  console.warn("showMessage called:", message);
  alert(message); // Fallback to alert for simplicity in this file
};

// Function to extract category from URL
function getCategoryFromURL() {
  const path = window.location.pathname;
  const filename = path.split("/").pop().replace(".html", "").toLowerCase();
  if (
    ["", "index", "all", "ielts", "free-resources-details"].includes(filename)
  )
    return "all";
  return filename.replace("ielts-", "").replace(/-/g, " ");
}

// --- Category Button Active State Logic ---
function setActiveCategoryButton(category) {
  const buttons = document.querySelectorAll(".categories a");
  buttons.forEach((btn) => {
    const btnCat = (btn.dataset.category || btn.textContent || "")
      .trim()
      .toLowerCase();
    if (
      btnCat === category ||
      (category === "all" &&
        (btnCat === "all" || btnCat === "all categories" || btnCat === ""))
    ) {
      btn.classList.add("active");
      btn.setAttribute("aria-current", "true");
    } else {
      btn.classList.remove("active");
      btn.removeAttribute("aria-current");
    }
  });
}

const VIDEOS_PER_PAGE = 6;

// Function to format timestamp to a "time ago" string
function formatTimestampToTimeAgo(timestamp) {
  if (!timestamp || !timestamp.toDate) return "N/A"; // Handle invalid or missing timestamps

  const date = timestamp.toDate(); // Convert Firestore Timestamp to Date object
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000; // Years
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000; // Months
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400; // Days
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600; // Hours
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60; // Minutes
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
}

/**
 * Formats a number of views into a human-readable string.
 * Examples: 0 -> "0 view", 1 -> "1 view", 100 -> "100 views",
 * 1200 -> "1.2K views", 1500000 -> "1.5M views".
 * @param {number} views The raw view count.
 * @returns {string} The formatted view string.
 */
function formatViewsForDisplay(views) {
  if (views === undefined || views === null || isNaN(views)) {
    views = 0;
  }

  if (views === 0) {
    return "0 view";
  } else if (views === 1) {
    return "1 view";
  } else if (views < 1000) {
    return `${views} views`;
  } else if (views < 1000000) {
    return `${(views / 1000).toFixed(1)}K views`;
  } else {
    return `${(views / 1000000).toFixed(1)}M views`;
  }
}

// Function to render videos based on fetched data
function renderVideos(page = 1, filteredCategory = "all") {
  const grid = document.querySelector(".video-grid");
  if (!grid) {
    console.error("Video grid element not found.");
    return;
  }
  grid.innerHTML = ""; // Clear existing videos

  // Ensure category is lowercase for consistent filtering
  const lowerCaseFilteredCategory = filteredCategory.toLowerCase();

  // Filter videos based on the selected category
  const videosToShow =
    lowerCaseFilteredCategory === "all" ||
    lowerCaseFilteredCategory === "all categories"
      ? freeResourcesData.filter((video) => video.status === "active") // Only show active resources
      : freeResourcesData.filter(
          (video) =>
            video.category.toLowerCase() === lowerCaseFilteredCategory &&
            video.status === "active"
        );

  const start = (page - 1) * VIDEOS_PER_PAGE;
  const end = start + VIDEOS_PER_PAGE;
  const videos = videosToShow.slice(start, end);

  if (videos.length === 0) {
    grid.innerHTML = `<p class="text-gray-500 text-center col-span-full">No free resources found in this category.</p>`;
  }

  for (const [i, video] of videos.entries()) {
    const card = document.createElement("div");
    card.className = "video-card";
    card.tabIndex = 0;
    card.dataset.index = start + i; // Used for opening modal with correct video data

    const uploadedTimeText = formatTimestampToTimeAgo(video.timestamp); // Get formatted time
    const viewsText = formatViewsForDisplay(video.views); // Use the new formatting function

    card.innerHTML = `
            <div class="video-thumb-wrap">
                <img src="${
                  video.img ||
                  "https://placehold.co/400x200/cccccc/white?text=Resource+Image"
                }" alt="Video Thumbnail" onerror="this.src='https://placehold.co/400x200/cccccc/white?text=Resource+Image';" />
                <button class="play-btn-abs" aria-label="Play video">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="none"/>
                        <polygon points="12,9 25,16 12,23" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${viewsText} &bull; ${uploadedTimeText}</p>
            </div>
        `;
    card.addEventListener("click", function (e) {
      if (
        e.target.closest(".play-btn-abs") ||
        e.target.closest(".video-card")
      ) {
        const idx = Number(card.dataset.index);
        const vid = videosToShow[idx]; // Use videosToShow which is already filtered
        if (vid) {
          openVideoModal(vid.link, vid);
        } else {
          showMessage("Video data not found for this card.");
        }
      }
    });
    grid.appendChild(card);
  }

  const totalPages = Math.ceil(videosToShow.length / VIDEOS_PER_PAGE);
  createPagination(totalPages, page, filteredCategory);
}

// --- Modal & Video Player Logic (Full Page, Stupendous Design, Enhanced for Mobile & Tablet) ---
// --- Recommendation Feature Added ---
function getYouTubeVideoId(url) {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/.*[?&]v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/, // Explicitly add this pattern
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function trapFocus(modal) {
  const focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  modal.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
    if (e.key === "Escape") {
      closeVideoModal();
    }
  });
}

// --- Recommendation logic ---
function getRecommendedVideos(currentVideo, count = 4) {
  if (!currentVideo) return [];
  // Ensure currentVideo.category is defined before using it
  const currentCategory = currentVideo.category
    ? currentVideo.category.toLowerCase()
    : "";
  const currentLink = currentVideo.link;

  // Filter active videos, excluding the current video
  const activeVideos = freeResourcesData.filter(
    (v) => v.status === "active" && v.link !== currentLink
  );

  const sameCat = activeVideos.filter(
    (v) => (v.category ? v.category.toLowerCase() : "") === currentCategory
  );

  let recs = sameCat.slice(0, count);

  // If we still need more recommendations, pick randomly from other categories
  if (recs.length < count) {
    const others = activeVideos.filter((v) => !recs.includes(v));
    while (recs.length < count && others.length > 0) {
      const idx = Math.floor(Math.random() * others.length);
      recs.push(others.splice(idx, 1)[0]);
    }
  }
  return recs;
}

function renderRecommendationsHTML(recommendations) {
  if (!recommendations.length) return "";
  return `
        <div style="margin-top:36px;">
            <strong style="font-size:1.23rem;color:#ffd700;">Recommended Videos:</strong>
            <div style="display:flex;flex-direction:column;gap:18px;margin-top:14px;">
                ${recommendations
                  .map(
                    (rec) => `
                        <div class="rec-video-card" tabindex="0" style="
                            display:flex;align-items:center;gap:18px;cursor:pointer;
                            background:rgba(255,255,255,0.03);border-radius:10px;padding:10px 12px;transition:background 0.15s;
                        " data-link="${rec.link}" data-category="${
                      rec.category
                    }">
                            <img src="${
                              rec.img ||
                              "https://placehold.co/64x64/cccccc/white?text=Rec"
                            }" alt="Thumbnail" style="width:64px;height:64px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px #0004;" onerror="this.src='https://placehold.co/64x64/cccccc/white?text=Rec';">
                            <div style="flex:1;">
                                <div style="font-weight:700;font-size:1.08rem;color:#fff;line-height:1.2;margin-bottom:2px;">
                                    ${rec.title}
                                </div>
                                <div style="font-size:0.98rem;color:#b3b3c7;">${formatViewsForDisplay(
                                  rec.views
                                )}</div>
                                <div style="font-size:0.93rem;color:#ffd700;margin-top:2px;">${
                                  rec.category
                                }</div>
                            </div>
                        </div>
                    `
                  )
                  .join("")}
            </div>
        </div>
    `;
}

function renderVideoModalContent(meta) {
  const recommendations = getRecommendedVideos(meta, 4);
  const recommendationsHTML = renderRecommendationsHTML(recommendations);
  const uploadedTimeText = formatTimestampToTimeAgo(meta.timestamp); // Get formatted time for modal

  return `
        <div id="video-modal-content" style="
            position:relative;
            display:flex;
            flex-direction:row;
            width:100vw;
            height:100vh;
            background:linear-gradient(135deg,#181c2f 80%,#23243a 100%);
            border-radius:0;
            box-shadow:none;
            overflow:hidden;
            animation:modalPopIn 0.5s cubic-bezier(.4,2,.6,1) 1;
        ">
            <button id="close-video-modal"
                aria-label="Close video"
                style="
                    position:absolute;top:25px;right:0px;
                    font-size:2.4rem;background:transparent;border:none;
                    color:#fff;cursor:pointer;z-index:2;line-height:1.2;padding:0 12px;
                    border-radius:50%;
                    opacity:0.92;transition:opacity 0.2s,background 0.2s;
                "
            >
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="22" fill="#23243a" opacity="0.85"/>
                    <path d="M15 15 L29 29 M29 15 L15 29" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </button>
            <div class="video-modal-flex" style="display:flex;flex:1 1 0;min-height:0;min-width:0;flex-direction:row;">
                <div id="video-iframe-wrap" style="
                    flex:2 1 0;min-width:0;min-height:0;
                    display:flex;align-items:center;justify-content:center;
                    background:radial-gradient(ellipse at 60% 40%,#23243a 0%,#181c2f 100%);
                    position:relative;
                    overflow:hidden;
                    box-shadow:0 0 120px 0 #000c, 0 0 0 100vw #181c2f;
                    border-radius:0;
                    transition:box-shadow 0.3s;
                ">
                    <div id="video-overlay" style="
                        position:absolute;top:0;left:0;width:100%;height:100%;
                        pointer-events:none;
                        background:linear-gradient(120deg,rgba(24,28,47,0.18) 60%,rgba(35,36,58,0.28) 100%);
                        z-index:1;
                    "></div>
                </div>
                <aside style="
                    flex:1 1 420px;min-width:340px;max-width:520px;
                    background:linear-gradient(120deg,#23243a 60%,#181c2f 100%);
                    color:#f3f3f7;
                    padding:64px 48px 48px 48px;
                    display:flex;flex-direction:column;gap:36px;
                    box-shadow:-12px 0 64px #0004;
                    overflow-y:auto;
                    border-radius:0 0 0 0;
                    backdrop-filter: blur(2.5px);
                    position:relative;
                ">
                    <div style="display:flex;align-items:center;gap:24px;">
                        <div style="position:relative;">
                            <img src="${
                              meta.img ||
                              "https://placehold.co/92x92/cccccc/white?text=Video"
                            }" alt="Video thumbnail" style="width:92px;height:92px;object-fit:cover;border-radius:18px;box-shadow:0 2px 24px #000b;" onerror="this.src='https://placehold.co/92x92/cccccc/white?text=Video';">
                            <span style="
                                position:absolute;bottom:-10px;right:-10px;
                                background:linear-gradient(90deg,#ff1744 60%,#ff5e62 100%);
                                color:#fff;
                                font-size:0.95rem;
                                font-weight:700;
                                padding:4px 14px;
                                border-radius:12px;
                                box-shadow:0 2px 12px #ff174455;
                                letter-spacing:0.02em;
                                opacity:0.92;
                            ">${meta.category}</span>
                        </div>
                        <div>
                            <h2 style="font-size:2.1rem;font-weight:800;margin:0 0 6px 0;line-height:1.15;color:#fff;letter-spacing:-0.5px;text-shadow:0 2px 12px #0006;">
                                ${meta.title}
                            </h2>
                            <div style="font-size:1.18rem;color:#b3b3c7;">
                                <span style="margin-right:18px;">
                                    <svg style="vertical-align:middle;margin-right:4px;" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="9" stroke="#b3b3c7" stroke-width="1.5"/>
                                        <path d="M10 6v5l3 3" stroke="#b3b3c7" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                    ${formatViewsForDisplay(meta.views)}
                                </span>
                                <span style="font-size:0.98rem;color:#b3b3c7;"> &bull; ${uploadedTimeText}</span>
                            </div>
                        </div>
                    </div>
                    <div style="font-size:1.1rem;line-height:1.5;color:#e0e0e8;margin-bottom:12px;border-radius:14px;">
                        ${
                          meta.summary || "No summary available for this video."
                        }
                    </div>
                    <div style="margin-bottom:12px;">
                        <strong style="font-size:1.23rem;color:#ffd700;">Key Points:</strong>
                        <ul style="margin:14px 0 0 24px;padding:0;list-style:square;color:#ffe082;font-size:1.12rem;">
                            ${
                              meta.keypoints &&
                              Array.isArray(meta.keypoints) &&
                              meta.keypoints.length
                                ? meta.keypoints
                                    .map(
                                      (kp) =>
                                        `<li style="margin-bottom:10px;color:#ffe082;background:rgba(255,255,255,0.02);padding:7px 12px;border-radius:8px;">${kp}</li>`
                                    )
                                    .join("")
                                : `<li style="color:#b3b3c7;">No keypoints available.</li>`
                            }
                        </ul>
                    </div>
                    <div style="margin-top:auto;display:flex;align-items:center;gap:18px;">
                        ${
                          meta.link && meta.link !== "#"
                            ? `<a href="${meta.link}" target="_blank" rel="noopener" style="
                                    display:inline-flex;align-items:center;gap:10px;
                                    background:linear-gradient(90deg,#ff1744 60%,#ff5e62 100%);
                                    color:#fff;
                                    font-weight:700;
                                    padding:16px 38px;
                                    border-radius:14px;
                                    text-decoration:none;
                                    font-size:1.18rem;
                                    box-shadow:0 4px 32px #ff174455;
                                    transition:background 0.2s,box-shadow 0.2s,transform 0.12s;
                                    letter-spacing:0.02em;
                                " onmouseover="this.style.background='linear-gradient(90deg,#d50032 60%,#ff5e62 100%)';this.style.boxShadow='0 8px 32px #ff174488';this.style.transform='scale(1.05)'"
                                    onmouseout="this.style.background='linear-gradient(90deg,#ff1744 60%,#ff5e62 100%)';this.style.boxShadow='0 4px 32px #ff174455';this.style.transform='scale(1)'"
                                >
                                    <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
                                        <rect x="3" y="7" width="20" height="12" rx="2" stroke="#fff" stroke-width="1.5"/>
                                        <polygon points="12,10 18,13 12,16" fill="#fff"/>
                                    </svg>
                                    Watch on YouTube
                                </a>`
                            : `<span style="display:inline-block;padding:16px 38px;background:#444;border-radius:14px;color:#fff;font-size:1.18rem;opacity:0.7;cursor:not-allowed;">No YouTube Link</span>`
                        }
                        <span style="font-size:1.05rem;color:#b3b3c7;opacity:0.7;">Share:
                            <button id="share-video-btn" style="background:none;border:none;cursor:pointer;color:#ffd700;font-size:1.2em;margin-left:6px;" title="Copy page link">
                                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                    <path d="M7 13l6-6M8 7h5v5" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
                                    <rect x="3" y="3" width="14" height="14" rx="3" stroke="#ffd700" stroke-width="1.2"/>
                                </svg>
                            </button>
                        </span>
                    </div>
                    ${recommendationsHTML}
                </aside>
            </div>
        </div>
        <style>
            @keyframes modalPopIn {
                0% { transform:scale(0.96) translateY(60px); opacity:0; }
                100% { transform:scale(1) translateY(0); opacity:1; }
            }
            #video-modal::-webkit-scrollbar { display:none; }
            #video-modal-content::-webkit-scrollbar { width:0; }
            #video-modal-content aside::-webkit-scrollbar { width:8px; background:#23243a; }
            #video-modal-content aside::-webkit-scrollbar-thumb { background:#23243a; border-radius:8px; }

            /* --- Responsive, Super Professional Mobile & Tablet Design --- */
            @media (max-width: 1200px) {
                #video-modal-content aside { padding:36px 18px 24px 18px; .video-model-flex aside: 100%;}
            }
            @media (max-width: 900px) {
                #video-modal-content { flex-direction:column !important; }
                .video-modal-flex { flex-direction:column !important; }
                #video-modal-content aside {
                    max-width:100vw; min-width:0; padding:18px 6vw 12px 6vw;
                    box-shadow:0 -8px 32px #0004;
                    border-radius:0 0 18px 18px;
                }
                #video-iframe-wrap {
                    min-height:220px;
                    width:100vw !important;
                    height:auto !important;
                    max-width:100vw !important;
                    max-height:40vh !important;
                }
            }
            @media (max-width: 700px) {
                #video-modal-content { border-radius:0; flex-direction:column !important; }
                .video-modal-flex { flex-direction:column !important; }
                #video-modal-content aside {
                    padding:10px 2vw 8px 2vw;
                    gap:18px;
                    font-size:1rem;
                }
                #close-video-modal { top:16px; right:16px; }
                #video-iframe-wrap {
                    min-height:180px;
                    width:100vw !important;
                    height:auto !important;
                    max-width:100vw !important;
                    max-height:38vh !important;
                }
                #video-modal-content aside h2 {
                    font-size:1.3rem !important;
                }
            }
            @media (max-width: 768px) {
                #video-modal-content { flex-direction:column !important; }
                .video-modal-flex { flex-direction:column !important; }
                #video-modal-content aside {
                    padding:8px .5vw 6px .5vw;
                    gap:12px;
                    font-size:0.98rem;
                    border-radius:0 0 14px 14px;
                }
                #close-video-modal { top:8px; right:8px; }
                #video-iframe-wrap {
                    min-height:120px;
                    width:100vw !important;
                    height:auto !important;
                    max-width:100vw !important;
                    max-height:34vh !important;
                }
                #video-modal-content aside h2 {
                    font-size:1.08rem !important;
                }
                #video-modal-content aside img {
                    width:140px !important;
                    height:140px !important;
                    border-radius:10px !important;
                }
                #video-modal-content aside span[style*="position:absolute"] {
                    font-size:0.82rem !important;
                    padding:2px 8px !important;
                    border-radius:8px !important;
                }
                #video-modal-content aside ul {
                    margin-left:12px !important;
                    font-size:0.98rem !important;
                }
                #video-modal-content aside strong {
                    font-size:1.05rem !important;
                }
                #video-modal-content aside a,
                #video-modal-content aside span[style*="display:inline-block"] {
                    padding:10px 18px !important;
                    font-size:1rem !important;
                    border-radius:8px !important;
                }
            }
            @media (max-width: 430px) {
                #video-modal-content aside {
                    padding:4px 0 4px 0;
                    gap:8px;
                }
                #close-video-modal { top:4px; right:4px; }
                #video-modal-content aside h2 {
                    font-size:0.98rem !important;
                }
                #video-modal-content aside img {
                    width:60px !important;
                    height:60px !important;
                }
                #video-modal-content aside ul {
                    font-size:0.88rem !important;
                }
            }
        </style>
    `;
}

function openVideoModal(youtubeUrl, videoData = null) {
  let video = videoData;
  if (!video && youtubeUrl) {
    video = freeResourcesData.find((v) => v.link === youtubeUrl);
  }
  const meta = video || {
    title: "IELTS Video",
    views: 0, // Default to 0 views
    category: "",
    img: "",
    summary: "No summary available for this video.",
    keypoints: [],
    link: "#",
    timestamp: null, // Ensure timestamp is initialized
  };

  // --- Start: View Count Update Logic ---
  if (meta.id) {
    // Only attempt to update if the video has an ID (i.e., it's from Firestore)
    const videoDocRef = db
      .collection("artifacts")
      .doc(currentAppId)
      .collection("public")
      .doc("data")
      .collection("freeResources")
      .doc(meta.id);
    videoDocRef
      .update({
        views: firebase.firestore.FieldValue.increment(1),
      })
      .then(() => {
        console.log(`View count incremented for video ID: ${meta.id}`);
        // Optionally, update the local freeResourcesData array to reflect the new view count immediately
        const index = freeResourcesData.findIndex((v) => v.id === meta.id);
        if (index !== -1) {
          freeResourcesData[index].views =
            (freeResourcesData[index].views || 0) + 1;
          // Re-render videos to show updated count on the card (optional, as onSnapshot will eventually do this)
          renderVideos(1, getCategoryFromURL());
        }
      })
      .catch((error) => {
        console.error("Error updating view count:", error);
        // Provide a more specific message for the user if the update fails
        showMessage(
          `Failed to update view count for video: ${meta.title}. This might be due to Firebase security rules not allowing public writes to the 'views' field. Please check your Firestore rules. Error: ${error.message}`
        );
      });
  }
  // --- End: View Count Update Logic ---

  let modal = document.getElementById("video-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "video-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "YouTube Video Player");
    modal.style.cssText = `
            position:fixed;top:0;left:0;width:100vw;height:100vh;
            background:linear-gradient(135deg,#181c2f 80%,#23243a 100%);
            display:flex;align-items:center;justify-content:center;
            z-index:9999;transition:background 0.2s;
            font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
            overflow:hidden;
        `;
    document.body.appendChild(modal);
  }
  modal.innerHTML = renderVideoModalContent(meta);
  modal.style.display = "flex";

  // Set iframe or placeholder
  const videoId = getYouTubeVideoId(meta.link);
  const iframeWrap = modal.querySelector("#video-iframe-wrap");
  if (iframeWrap) {
    if (videoId) {
      iframeWrap.innerHTML = `
                <div style="
                    position:relative;
                    width:100vw;
                    height:100vh;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:linear-gradient(120deg,#10121c 60%,#23243a 100%);
                    overflow:hidden;
                ">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white&showinfo=0&iv_load_policy=3"
                        frameborder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                        title="YouTube video player"
                        style="width:100vw;height:100vh;min-height:120px;min-width:120px;max-width:100vw;max-height:100vh;border:none;background:#000;display:block;object-fit:cover;"
                    ></iframe>
                    <div style="
                        position:absolute;top:0;left:0;width:100vw;height:100vh;
                        pointer-events:none;
                        background:radial-gradient(ellipse at 60% 40%,rgba(24,28,47,0.10) 0%,rgba(35,36,58,0.18) 100%);
                        z-index:1;
                    "></div>
                </div>
            `;
    } else {
      iframeWrap.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;min-height:120px;">
                <span style="color:#fff;font-size:1.1em;text-align:center;">No video available.<br>See the info on the right.</span>
            </div>`;
    }
  }

  // Make share button work
  const shareBtn = modal.querySelector("#share-video-btn");
  if (shareBtn) {
    shareBtn.onclick = async function () {
      const shareUrl =
        meta.link && meta.link !== "#" ? meta.link : window.location.href;
      if (navigator.share) {
        try {
          await navigator.share({
            title: meta.title,
            text: meta.summary,
            url: shareUrl,
          });
        } catch (err) {
          // User cancelled or error
        }
      } else if (document.execCommand("copy")) {
        // Use document.execCommand for clipboard copy
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand("copy");
          shareBtn.innerHTML =
            '<span style="color:#ffd700;font-size:.8vw;">Copied!</span>';
          setTimeout(() => {
            shareBtn.innerHTML = `<svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <path d="M7 13l6-6M8 7h5v5" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
                                <rect x="3" y="3" width="14" height="14" rx="3" stroke="#ffd700" stroke-width="1.2"/>
                            </svg>`;
          }, 1200);
        } catch (err) {
          showMessage("Failed to copy link.");
        } finally {
          document.body.removeChild(textArea);
        }
      } else {
        showMessage("Copy not supported in this browser.");
      }
    };
  }

  // Close modal events
  modal.addEventListener("mousedown", function (e) {
    if (e.target === modal) closeVideoModal();
  });
  const closeBtn = modal.querySelector("#close-video-modal");
  if (closeBtn) closeBtn.onclick = closeVideoModal;
  trapFocus(modal);
  window.addEventListener("resize", resizeModalContent);

  setTimeout(
    () =>
      (modal.style.background =
        "linear-gradient(135deg,#181c2f 80%,#23243a 100%)"),
    10
  );
  if (closeBtn) closeBtn.focus();
  resizeModalContent();

  // --- Make recommendations clickable and keyboard accessible ---
  setTimeout(function () {
    const recCards = modal.querySelectorAll(".rec-video-card");
    recCards.forEach(function (card) {
      card.onclick = function (e) {
        const link = card.getAttribute("data-link");
        if (link) {
          const vid = freeResourcesData.find((v) => v.link === link);
          if (vid) openVideoModal(vid.link, vid);
        }
      };
      card.onkeydown = function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      };
    });
  }, 0);
}

function resizeModalContent() {
  // Full page: no need to resize iframe, it is 100vw x 100vh
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  if (modal) {
    modal.style.background = "rgba(18,20,32,0)";
    setTimeout(() => {
      modal.style.display = "none";
      const iframeWrap = modal.querySelector("#video-iframe-wrap");
      if (iframeWrap) iframeWrap.innerHTML = "";
    }, 200);
  }
}

// Expose for inline event handlers in recommendations (no longer strictly needed if `allVideos` is not global, but kept for consistency)
// window.openVideoModal = openVideoModal; // Already exposed below

// --- Pagination logic ---
function createPagination(totalPages, currentPage, filteredCategory = "all") {
  const ul = document.querySelector(".pagination");
  if (!ul) return;
  ul.innerHTML = "";

  function pageItem(page, text = null, opts = {}) {
    const li = document.createElement("li");
    li.className = "page-item";
    if (opts.active) li.classList.add("active");
    if (opts.disabled) li.classList.add("disabled");
    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.tabIndex = opts.disabled ? -1 : 0;
    if (opts.disabled) a.setAttribute("aria-disabled", "true");
    a.innerHTML = text !== null ? text : page;
    if (!opts.disabled && !opts.dots) a.dataset.page = page;
    if (opts.dots) {
      a.classList.add("dots");
      a.tabIndex = -1;
      a.innerHTML = "…";
    }
    li.appendChild(a);
    return li;
  }

  ul.appendChild(
    pageItem(currentPage - 1, "<span>&laquo;</span>", {
      disabled: currentPage === 1,
    })
  );

  let pageNumbers = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    if (currentPage <= 4) {
      pageNumbers = [1, 2, 3, 4, 5, "dots", totalPages];
    } else if (currentPage >= totalPages - 3) {
      pageNumbers = [
        1,
        "dots",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pageNumbers = [
        1,
        "dots",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "dots",
        totalPages,
      ];
    }
  }

  for (const n of pageNumbers) {
    if (n === "dots") {
      ul.appendChild(pageItem(null, "…", { dots: true, disabled: true }));
    } else {
      ul.appendChild(
        pageItem(n, null, {
          active: n === currentPage,
        })
      );
    }
  }

  ul.appendChild(
    pageItem(currentPage + 1, "<span>&raquo;</span>", {
      disabled: currentPage === totalPages,
    })
  );
}

function handlePaginationClick(e, filteredCategory) {
  const link = e.target.closest(".page-link");
  if (
    !link ||
    link.classList.contains("dots") ||
    link.getAttribute("aria-disabled") === "true"
  )
    return;
  e.preventDefault();
  const ul = document.querySelector(".pagination");
  const activePageElement = ul.querySelector(".active .page-link");
  const currentPage = activePageElement
    ? Number(activePageElement.dataset.page)
    : 1;

  // Filter active videos based on the current category for pagination calculation
  const videosInCurrentCategory =
    filteredCategory.toLowerCase() === "all" ||
    filteredCategory.toLowerCase() === "all categories"
      ? freeResourcesData.filter((video) => video.status === "active")
      : freeResourcesData.filter(
          (video) =>
            video.category.toLowerCase() === filteredCategory.toLowerCase() &&
            video.status === "active"
        );

  const totalPages = Math.ceil(
    videosInCurrentCategory.length / VIDEOS_PER_PAGE
  );

  let gotoPage = null;
  if (link.innerHTML.includes("&laquo;")) {
    gotoPage = Math.max(1, currentPage - 1);
  } else if (link.innerHTML.includes("&raquo;")) {
    gotoPage = Math.min(totalPages, currentPage + 1);
  } else {
    gotoPage = Number(link.dataset.page);
  }

  if (gotoPage && gotoPage !== currentPage) {
    renderVideos(gotoPage, filteredCategory);
    window.scrollTo({
      top: document.querySelector(".video-grid").offsetTop - 80,
      behavior: "smooth",
    });
  }
}

// Ensure Firebase is loaded before using it
document.addEventListener("DOMContentLoaded", async function () {
  // Dynamically load Firebase SDKs
  const loadFirebaseSDKs = () => {
    return new Promise((resolve) => {
      if (
        typeof firebase !== "undefined" &&
        typeof firebase.firestore !== "undefined"
      ) {
        resolve();
        return;
      }

      const scriptApp = document.createElement("script");
      scriptApp.src =
        "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"; // Use compat for older style
      scriptApp.onload = () => {
        const scriptAuth = document.createElement("script"); // Still loading auth, but not using it
        scriptAuth.src =
          "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js";
        scriptAuth.onload = () => {
          const scriptFirestore = document.createElement("script");
          scriptFirestore.src =
            "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore-compat.js";
          scriptFirestore.onload = resolve;
          document.head.appendChild(scriptFirestore);
        };
        document.head.appendChild(scriptAuth);
      };
      document.head.appendChild(scriptApp);
    });
  };

  await loadFirebaseSDKs();
  await initializeFirebase(); // Call the simplified initialization

  const currentCategory = getCategoryFromURL();
  setActiveCategoryButton(currentCategory);

  // Initial load and real-time updates for free resources (no authentication check needed)
  const freeResourcesRef = firebase
    .firestore()
    .collection(`artifacts/${currentAppId}/public/data/freeResources`);
  console.log(
    `Listening for freeResources at: artifacts/${currentAppId}/public/data/freeResources`
  );

  freeResourcesRef.onSnapshot(
    (snapshot) => {
      freeResourcesData = []; // Clear previous data
      snapshot.forEach((doc) => {
        freeResourcesData.push({ id: doc.id, ...doc.data() });
      });
      console.log("Free Resources data updated:", freeResourcesData);
      // Re-render videos with updated data
      renderVideos(1, getCategoryFromURL()); // Reset to page 1 on data change
    },
    (error) => {
      console.error("Error fetching free resources:", error);
      showMessage(
        `Error loading free resources: ${error.message}. Please check your internet connection.`
      );
    }
  );

  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const cat = (btn.dataset.category || btn.textContent || "")
        .trim()
        .toLowerCase();
      setActiveCategoryButton(cat);
      renderVideos(1, cat); // Always go to first page when changing category
      // Focus on video grid after rendering
      setTimeout(() => {
        const grid = document.querySelector(".video-grid");
        if (grid) grid.focus();
      }, 0);
    });
  });

  // Event listener for pagination clicks (assuming .pagination exists)
  const paginationElement = document.querySelector(".pagination");
  if (paginationElement) {
    paginationElement.addEventListener("click", function (e) {
      handlePaginationClick(e, getCategoryFromURL());
    });
  }

  // Expose `openVideoModal` and `freeResourcesData` globally if needed by other scripts
  window.openVideoModal = openVideoModal;
  window.freeResourcesData = freeResourcesData; // Make it accessible globally
});
