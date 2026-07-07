import { authAppState } from "./auth.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

let completedTestIds = new Set();
let hasFetched = false;
let isFetching = false;

// We check both the premium app ID and the fallback default to guarantee we find the test
const possibleAppIds =
  typeof __app_id !== "undefined"
    ? [__app_id]
    : ["ielts-mahir-community-forum", "default-app-id"];

async function fetchCompletedTests() {
  if (hasFetched || isFetching || !authAppState.userId) return;
  isFetching = true;
  try {
    const db = getFirestore();

    // Loop through potential database paths to ensure we catch the completed test
    for (const appId of possibleAppIds) {
      const resultsRef = collection(
        db,
        `artifacts/${appId}/users/${authAppState.userId}/mockTestResults`,
      );
      const snapshot = await getDocs(resultsRef);
      snapshot.forEach((doc) => {
        if (doc.data().testId) {
          completedTestIds.add(doc.data().testId);
        }
      });
    }

    hasFetched = true;
    lockCompletedTests();
  } catch (error) {
    console.error("Error fetching completed tests:", error);
  } finally {
    isFetching = false;
  }
}

function lockCompletedTests() {
  if (!hasFetched) return;

  // --- 1. Lock Category Page Cards ---
  const testLinks = document.querySelectorAll("a.video-card");
  testLinks.forEach((link) => {
    // Prevent processing the same link twice
    if (link.dataset.retakeProcessed === "true") return;

    const href = link.getAttribute("href") || link.dataset.originalHref;
    if (!href || href.includes("payment-system") || href === "#") return;

    let testId = null;
    try {
      const url = new URL(href, window.location.origin);
      testId = url.searchParams.get("test");
    } catch (e) {
      const match = href.match(/[?&]test=([^&]+)/);
      if (match) testId = match[1];
    }

    if (testId && completedTestIds.has(testId)) {
      // Mark as processed & physically break the link
      link.dataset.retakeProcessed = "true";
      link.dataset.originalHref = href;
      link.removeAttribute("href");

      // Visual Updates
      link.classList.remove("locked-card", "group");
      link.classList.add("opacity-90");
      link.style.cursor = "not-allowed";

      // Change the main blue/indigo icon block to a Green Checkmark
      const mainIconBox = link.querySelector("div.w-\\[72px\\]");
      if (mainIconBox) {
        mainIconBox.innerHTML = '<i class="fas fa-check text-4xl"></i>';
        mainIconBox.className =
          "relative z-10 w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] bg-emerald-500 border border-white/20";
      }

      // Hide the play hover overlay
      const playOverlay = link.querySelector(".play-overlay");
      if (playOverlay) playOverlay.style.display = "none";

      // Change "Start Test" or "Unlock Test" text to "Completed"
      const textSpans = link.querySelectorAll("span");
      textSpans.forEach((span) => {
        if (
          span.textContent.trim().includes("Start Test") ||
          span.textContent.trim().includes("Unlock Test")
        ) {
          span.innerHTML = '<i class="fas fa-check-double mr-1"></i> Completed';
          span.className =
            "font-bold text-[13px] uppercase tracking-wider flex items-center text-emerald-600";
        }
      });

      // Change the small bottom-right arrow icon
      const smallIcon = link.querySelector(".w-8.h-8.rounded-full");
      if (smallIcon) {
        smallIcon.innerHTML = '<i class="fas fa-check text-xs"></i>';
        smallIcon.className =
          "w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200";
      }

      // === SILENT BLOCK (NO MESSY NOTIFICATIONS) ===
      link.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        true,
      );
    }
  });

  // --- 2. Lock Actual Test Page (If accessed via URL manipulation) ---
  const currentUrl = new URL(window.location.href);
  const currentTestId = currentUrl.searchParams.get("test");
  const isViewingResults = currentUrl.searchParams.get("score") !== null;

  if (
    currentTestId &&
    !isViewingResults &&
    completedTestIds.has(currentTestId)
  ) {
    const appDiv = document.getElementById("app");
    if (appDiv && !appDiv.dataset.retakeBlocked) {
      appDiv.dataset.retakeBlocked = "true";
      appDiv.innerHTML = `
                <div class="flex flex-col justify-center items-center h-full min-h-[60vh] px-4 w-full animate-fade-in-up">
                    <div class="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 max-w-lg w-full text-center">
                        <div class="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-inner">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <h2 class="text-3xl sm:text-4xl font-anton text-slate-800 uppercase tracking-wide mb-4">Test Completed</h2>
                        <p class="text-slate-600 mb-8 font-inter text-lg leading-relaxed">
                            You have already successfully completed this mock test. To maintain authentic scoring and assessments, tests cannot be retaken.
                        </p>
                        <a href="mock-test-home" class="inline-block px-8 py-3.5 bg-slate-800 text-white font-bold rounded-xl shadow-lg hover:bg-slate-700 transition-all font-inter">
                            Go Back to Tests
                        </a>
                    </div>
                </div>
            `;

      // Hide sticky test elements
      [
        "fixed-audio-player-wrapper",
        "test-info-bar",
        "listening-section-tabs",
        "test-section-tabs",
        "mobile-question-palette-wrapper",
      ].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
      });
      document.body.classList.remove("listening-body-padding");
    }
  }
}

// Check auth rapidly until User ID exists
const authInterval = setInterval(() => {
  if (authAppState.userId) {
    clearInterval(authInterval);
    fetchCompletedTests();
  } else if (authAppState.isAuthReady && !authAppState.userId) {
    clearInterval(authInterval); // User is fully logged out
  }
}, 200);

// Detect when React/Vanilla JS paints the test cards
const observer = new MutationObserver(() => {
  if (hasFetched) lockCompletedTests();
});

// VERY IMPORTANT: Bust the browser's "Back Button" Cache!
window.addEventListener("pageshow", (e) => {
  if (e.persisted && authAppState.userId) {
    hasFetched = false;
    fetchCompletedTests();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const targetNode = document.getElementById("app") || document.body;
  observer.observe(targetNode, { childList: true, subtree: true });
});
