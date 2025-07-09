function newsTicker() {
  document.addEventListener("DOMContentLoaded", function () {
    const movingWrapper = document.querySelector(".moving-wrapper");
    const movingText = document.querySelector(".moving-one");
    movingWrapper.appendChild(movingText.cloneNode(true));

    let position = 0; // Start from center
    const speed = 1.5; // Adjust for smoothness

    function animateText() {
      position -= speed;
      if (position <= -movingText.offsetWidth) {
        position = 0; // Reset position smoothly when fully scrolled
      }
      movingWrapper.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animateText);
    }

    animateText();
  });
}

newsTicker();
function playBtn() {
  const playBtn = document.querySelector(".play-button");
  const pauseBtn = document.querySelector(".pause-button");
  const video = document.querySelector(".tes-video");

  // Start video on Play
  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none";
  });

  // Pause video on Pause click
  pauseBtn.addEventListener("click", () => {
    video.pause();
  });

  // Re-show play button if video is paused (e.g., by keyboard)
  video.addEventListener("pause", () => {
    playBtn.style.display = "flex";
  });

  // Hide play button while playing
  video.addEventListener("play", () => {
    playBtn.style.display = "none";
  });

  // Re-show play button after video ends
  video.addEventListener("ended", () => {
    playBtn.style.display = "flex";
  });
}
playBtn();
// ======== Band Tables ========

function getListeningBand(score) {
  const bands = [
    { min: 39, max: 40, band: 9 },
    { min: 37, max: 38, band: 8.5 },
    { min: 35, max: 36, band: 8 },
    { min: 33, max: 34, band: 7.5 },
    { min: 30, max: 32, band: 7 },
    { min: 27, max: 29, band: 6.5 },
    { min: 23, max: 26, band: 6 },
    { min: 19, max: 22, band: 5.5 },
    { min: 15, max: 18, band: 5 },
    { min: 13, max: 14, band: 4.5 },
    { min: 10, max: 12, band: 4 },
    { min: 8, max: 9, band: 3.5 },
    { min: 6, max: 7, band: 3 },
    { min: 4, max: 5, band: 2.5 },
  ];
  return getBandFromRange(score, bands);
}

function getAcademicReadingBand(score) {
  const bands = [
    { min: 39, max: 40, band: 9 },
    { min: 37, max: 38, band: 8.5 },
    { min: 35, max: 36, band: 8 },
    { min: 33, max: 34, band: 7.5 },
    { min: 30, max: 32, band: 7 },
    { min: 27, max: 29, band: 6.5 },
    { min: 23, max: 26, band: 6 },
    { min: 19, max: 22, band: 5.5 },
    { min: 15, max: 18, band: 5 },
    { min: 13, max: 14, band: 4.5 },
    { min: 10, max: 12, band: 4 },
    { min: 0, max: 9, band: 3.5 },
  ];
  return getBandFromRange(score, bands);
}

function getGeneralReadingBand(score) {
  const bands = [
    { min: 40, max: 40, band: 9 },
    { min: 39, max: 39, band: 8.5 },
    { min: 37, max: 38, band: 8 },
    { min: 36, max: 36, band: 7.5 },
    { min: 34, max: 35, band: 7 },
    { min: 32, max: 33, band: 6.5 },
    { min: 30, max: 31, band: 6 },
    { min: 27, max: 29, band: 5.5 },
    { min: 23, max: 26, band: 5 },
    { min: 19, max: 22, band: 4.5 },
    { min: 15, max: 18, band: 4 },
    { min: 0, max: 14, band: 3.5 },
  ];
  return getBandFromRange(score, bands);
}

function getBandFromRange(score, table) {
  for (const range of table) {
    if (score >= range.min && score <= range.max) {
      return range.band;
    }
  }
  return "--";
}

// ======== Calculators with Autofill ========

function calculateListening() {
  const score = parseInt(document.getElementById("listening-raw").value);
  const band = getListeningBand(score);
  document.getElementById("listening-band").textContent = band;
}

function resetListening() {
  document.getElementById("listening-raw").value = "";
  document.getElementById("listening-band").textContent = "--";
}

function calculateAcademicReading() {
  const score = parseInt(document.getElementById("academic-reading-raw").value);
  const band = getAcademicReadingBand(score);
  document.getElementById("academic-reading-band").textContent = band;
}
function resetAcademicReading() {
  document.getElementById("academic-reading-raw").value = "";
  document.getElementById("academic-reading-band").textContent = "--";
}

function calculateGeneralReading() {
  const score = parseInt(document.getElementById("general-reading-raw").value);
  const band = getGeneralReadingBand(score);
  document.getElementById("general-reading-band").textContent = band;
}
function resetGeneralReading() {
  document.getElementById("general-reading-raw").value = "";
  document.getElementById("general-reading-band").textContent = "--";
}

function calculateOverallBand() {
  const L = parseFloat(document.getElementById("overall-listening").value);
  const R = parseFloat(document.getElementById("overall-reading").value);
  const W = parseFloat(document.getElementById("overall-writing").value);
  const S = parseFloat(document.getElementById("overall-speaking").value);

  if (isNaN(L) || isNaN(R) || isNaN(W) || isNaN(S)) {
    document.getElementById("overall-band").textContent = "--";
    return;
  }

  let average = (L + R + W + S) / 4;
  let finalBand = roundIELTSBand(average);
  document.getElementById("overall-band").textContent = finalBand.toFixed(1);
}

function resetOverallBand() {
  [
    "overall-listening",
    "overall-reading",
    "overall-writing",
    "overall-speaking",
  ].forEach((id) => {
    document.getElementById(id).value = "";
  });
  document.getElementById("overall-band").textContent = "--";
}

// ======== IELTS Band Rounding Rule ========
function roundIELTSBand(score) {
  const decimal = score % 1;
  if (decimal < 0.25) return Math.floor(score);
  if (decimal >= 0.25 && decimal < 0.75) return Math.floor(score) + 0.5;
  return Math.ceil(score);
}

// ======== Input Validation ========
function addInputValidation(id, min, max) {
  const input = document.getElementById(id);
  input.addEventListener("input", () => {
    const value = parseFloat(input.value);
    if (isNaN(value) || value < min || value > max) {
      input.classList.add("invalid-input");
    } else {
      input.classList.remove("invalid-input");
    }
  });
}

function showTooltip(input, message) {
  input.title = message;
}

// ======== Global Reset Button ========
function resetAllBands() {
  resetListening();
  resetAcademicReading();
  resetGeneralReading();
  resetOverallBand();
}

// ======== Live Calculation Events ========
function bindLiveEvents() {
  document.getElementById("listening-raw").oninput = calculateListening;
  document.getElementById(
    "academic-reading-raw"
  ).oninput = calculateAcademicReading;
  document.getElementById(
    "general-reading-raw"
  ).oninput = calculateGeneralReading;

  [
    "overall-listening",
    "overall-reading",
    "overall-writing",
    "overall-speaking",
  ].forEach((id) => {
    document.getElementById(id).oninput = calculateOverallBand;
  });
}

// ======== Init on Load ========
function initializeEnhancements() {
  // Validation
  addInputValidation("listening-raw", 0, 40);
  addInputValidation("academic-reading-raw", 0, 40);
  addInputValidation("general-reading-raw", 0, 40);

  showTooltip(
    document.getElementById("listening-raw"),
    "Listening raw score (0–40)"
  );
  showTooltip(
    document.getElementById("academic-reading-raw"),
    "Academic reading score (0–40)"
  );
  showTooltip(
    document.getElementById("general-reading-raw"),
    "General reading score (0–40)"
  );

  [
    "overall-listening",
    "overall-reading",
    "overall-writing",
    "overall-speaking",
  ].forEach((id) => {
    addInputValidation(id, 0, 9);
    showTooltip(document.getElementById(id), "Enter band (e.g., 6.5, 7, 8.5)");
  });

  // Reset All Button
  const globalResetBtn = document.createElement("button");
  globalResetBtn.textContent = "Reset All";
  globalResetBtn.className = "global-reset";
  globalResetBtn.onclick = resetAllBands;
  document
    .querySelector("#page4 .calculator-title")
    ?.appendChild(globalResetBtn);

  // Bind live events
  bindLiveEvents();
}

// window.onload = initializeEnhancements;
function enhanceCalculateButton() {
  const btn = document.querySelectorAll("#calculate-button");
  if (!btn) return;
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Add glow + shake effect
      const resultEl = document.getElementById("overall-band");
      resultEl.classList.add("glow-shake");

      // 2. Show a random motivational quote
      const quotes = [
        "You're improving every day!",
        "Keep pushing! You're almost there!",
        "Success is the sum of small efforts!",
        "IELTS ≠ Impossible!",
        "Hard work beats talent when talent doesn’t work hard!",
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      const quoteBox = document.createElement("div");
      quoteBox.textContent = randomQuote;
      quoteBox.className = "quote-box";
      document.body.appendChild(quoteBox);

      // 3. Auto-remove effects after a while
      setTimeout(() => {
        resultEl.classList.remove("glow-shake");
        quoteBox.remove();
      }, 3000);

      // 4. Optional: Play a sound
      const sound = new Audio(
        "https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"
      );
      sound.play();
    });
  });
}

// Apply styling dynamically (no need to write CSS manually)
function injectFunStyles() {
  const style = document.createElement("style");
  style.textContent = `.glow-shake {
  animation: shake 0.4s ease-in-out, glow 1.2s ease-in-out infinite alternate;
}

@keyframes shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
  100% { transform: translateX(0); }
}

@keyframes glow {
  from {
    text-shadow:
      0 0 5px rgba(0, 255, 204, 0.5),
      0 0 10px rgba(0, 255, 204, 0.3);
  }
  to {
    text-shadow:
      0 0 15px rgba(0, 255, 204, 0.9),
      0 0 30px rgba(0, 255, 204, 0.6);
  }
}

.quote-box {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #111, #222);
  color: #ffffff;
  padding: 16px 28px;
  border-radius: 16px;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  animation: fadeInOut 3.2s ease-in-out;
  pointer-events: none;
  white-space: nowrap;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(30px) scale(0.95);
  }
  15% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px) scale(0.95);
  }
}
`;
  document.head.appendChild(style);
}

// Initialize all
window.onload = function () {
  initializeEnhancements();
  enhanceCalculateButton();
  injectFunStyles();
};
