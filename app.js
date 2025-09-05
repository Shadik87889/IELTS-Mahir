// Existing code...
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

// Function to get the Listening band score based on the official IELTS system
function getListeningBand(score) {
  if (score >= 39 && score <= 40) return 9;
  if (score >= 37 && score <= 38) return 8.5;
  if (score >= 35 && score <= 36) return 8;
  if (score >= 33 && score <= 34) return 7.5;
  if (score >= 30 && score <= 32) return 7;
  if (score >= 27 && score <= 29) return 6.5;
  if (score >= 23 && score <= 26) return 6;
  if (score >= 19 && score <= 22) return 5.5;
  if (score >= 15 && score <= 18) return 5;
  if (score >= 13 && score <= 14) return 4.5;
  if (score >= 10 && score <= 12) return 4;
  if (score >= 8 && score <= 9) return 3.5;
  if (score >= 6 && score <= 7) return 3;
  if (score >= 4 && score <= 5) return 2.5;
  if (score >= 2 && score <= 3) return 2;
  if (score >= 1 && score <= 1) return 1.5;
  if (score >= 0 && score <= 0) return 1;
  return "--";
}

// Function to get the Academic Reading band score based on the official IELTS system
function getAcademicReadingBand(score) {
  if (score >= 39 && score <= 40) return 9;
  if (score >= 37 && score <= 38) return 8.5;
  if (score >= 35 && score <= 36) return 8;
  if (score >= 33 && score <= 34) return 7.5;
  if (score >= 30 && score <= 32) return 7;
  if (score >= 27 && score <= 29) return 6.5;
  if (score >= 23 && score <= 26) return 6;
  if (score >= 19 && score <= 22) return 5.5;
  if (score >= 15 && score <= 18) return 5;
  if (score >= 13 && score <= 14) return 4.5;
  if (score >= 10 && score <= 12) return 4;
  if (score >= 8 && score <= 9) return 3.5;
  if (score >= 6 && score <= 7) return 3;
  if (score >= 4 && score <= 5) return 2.5;
  if (score >= 2 && score <= 3) return 2;
  if (score >= 1 && score <= 1) return 1.5;
  if (score >= 0 && score <= 0) return 1;
  return "--";
}

// Function to get the General Reading band score based on the official IELTS system
function getGeneralReadingBand(score) {
  if (score === 40) return 9;
  if (score === 39) return 8.5;
  if (score >= 37 && score <= 38) return 8;
  if (score === 36) return 7.5;
  if (score >= 34 && score <= 35) return 7;
  if (score >= 32 && score <= 33) return 6.5;
  if (score >= 30 && score <= 31) return 6;
  if (score >= 27 && score <= 29) return 5.5;
  if (score >= 23 && score <= 26) return 5;
  if (score >= 19 && score <= 22) return 4.5;
  if (score >= 15 && score <= 18) return 4;
  if (score >= 12 && score <= 14) return 3.5;
  if (score >= 9 && score <= 11) return 3;
  if (score >= 6 && score <= 8) return 2.5;
  if (score >= 3 && score <= 5) return 2;
  if (score >= 1 && score <= 2) return 1.5;
  if (score >= 0 && score <= 0) return 1;
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
  return finalBand;
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

// ======== FUNCTION: Calculate all bands on button click ========
function calculateAllBands() {
  // 1. Calculate and display all individual band scores
  calculateListening();
  calculateAcademicReading();
  calculateGeneralReading();
  calculateOverallBand();
}

// ======== Init on Load ========
function initializeEnhancements() {
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

  const globalResetBtn = document.createElement("button");
  globalResetBtn.textContent = "Reset All";
  globalResetBtn.className = "global-reset";
  globalResetBtn.onclick = resetAllBands;
  document
    .querySelector("#page4 .calculator-title")
    ?.appendChild(globalResetBtn);

  const calculateBtns = document.querySelectorAll("#calculate-button");
  calculateBtns.forEach((btn) => {
    btn.onclick = calculateAllBands;
  });
}

window.onload = function () {
  initializeEnhancements();
};

document.querySelectorAll(".featured-card-wrapper").forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const connectBtn = document.querySelector(".connect-btn");
  if (connectBtn) {
    connectBtn.addEventListener("click", () => {
      const url = connectBtn.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  }
});
