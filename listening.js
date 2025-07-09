<!-- ===== IELTS Speaking Test Simulation Section ===== -->
<section id="ielts-speaking-test" class="speaking-test-section">
  <div class="speaking-test-container">
    <!-- Progress/Section Label -->
    <div class="test-progress">
      <span id="section-label" class="section-label">Part 1: Introduction</span>
      <span id="progress-indicator" class="progress-indicator">1 / 3</span>
    </div>

    <!-- Question/Card Display -->
    <div id="question-area" class="question-area">
      <!-- Dynamic content injected here -->
    </div>

    <!-- Timer Display -->
    <div id="timer-area" class="timer-area" style="display:none;">
      <span id="timer-label"></span>
      <span id="timer-value">00:00</span>
    </div>

    <!-- Recording Controls -->
    <div id="controls-area" class="controls-area">
      <!-- Dynamic controls injected here -->
    </div>

    <!-- Playback Controls -->
    <div id="playback-area" class="playback-area" style="display:none;">
      <audio id="audio-playback" controls></audio>
      <button id="download-btn" class="btn" style="display:none;">Download Audio</button>
    </div>
  </div>
</section>

<style>
.speaking-test-section {
  background: #f8fafc;
  padding: 40px 0 60px 0;
  font-family: 'Montserrat', Arial, sans-serif;
}
.speaking-test-container {
  max-width: 420px;
  margin: 0 auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
  padding: 32px 20px 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.test-progress {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.section-label {
  font-weight: 700;
  font-size: 1.1rem;
  color: #2d3748;
  letter-spacing: 0.02em;
}
.progress-indicator {
  font-size: 1rem;
  color: #64748b;
  background: #e2e8f0;
  border-radius: 12px;
  padding: 2px 12px;
}
.question-area {
  width: 100%;
  min-height: 80px;
  margin-bottom: 18px;
  text-align: center;
}
.question-text, .cue-card-topic {
  font-size: 1.13rem;
  color: #22223b;
  margin-bottom: 10px;
  font-weight: 500;
}
.cue-card {
  background: #f1f5f9;
  border-radius: 12px;
  padding: 18px 14px;
  margin-bottom: 10px;
  border-left: 4px solid #4f46e5;
}
.cue-card-title {
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 8px;
  font-size: 1.08rem;
}
.cue-card-topic {
  font-size: 1.08rem;
  color: #22223b;
}
.timer-area {
  margin-bottom: 14px;
  font-size: 1.1rem;
  color: #4f46e5;
  font-weight: 600;
  display: flex;
  gap: 10px;
  align-items: center;
}
.controls-area {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.btn {
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s;
  margin: 4px 0;
}
.btn:active, .btn:focus {
  background: #3730a3;
  outline: none;
}
.btn.secondary {
  background: #e2e8f0;
  color: #22223b;
}
.btn.secondary:active, .btn.secondary:focus {
  background: #cbd5e1;
}
.btn[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
#download-btn {
  margin-top: 10px;
  background: #059669;
}
#download-btn:active, #download-btn:focus {
  background: #047857;
}
.playback-area {
  width: 100%;
  text-align: center;
  margin-top: 8px;
}
audio {
  width: 100%;
  margin-bottom: 6px;
}
@media (max-width: 600px) {
  .speaking-test-container {
    padding: 16px 4vw 18px 4vw;
    border-radius: 10px;
  }
  .btn {
    width: 100%;
    padding: 12px 0;
    font-size: 1rem;
  }
  .test-progress {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>

<script>
// =====================
// IELTS Speaking Test Data
// =====================

// Part 1: Introduction Questions
const part1Questions = [
  "What is your full name?",
  "Where are you from?",
  "Do you work or study?",
  "What do you like to do in your free time?",
  "Do you enjoy reading books?",
  "How often do you use public transport?",
  "What kind of music do you like?",
  "Do you prefer living in a city or the countryside?",
  "What is your favorite season of the year?",
  "Do you like to travel?",
  "How do you usually spend your weekends?",
  "Do you have any hobbies?",
  "What is your favorite food?",
  "Do you enjoy watching movies?",
  "How important is exercise to you?"
];

// Part 2: Cue Cards
const part2CueCards = [
  {
    title: "Describe a memorable journey you have taken.",
    topic: "You should say:\n- where you went\n- how you travelled\n- what you did during the journey\nand explain why this journey was memorable for you."
  },
  {
    title: "Describe a person who has inspired you.",
    topic: "You should say:\n- who this person is\n- how you know them\n- what qualities they have\nand explain how they have inspired you."
  },
  {
    title: "Describe a book you have recently read.",
    topic: "You should say:\n- what the book is\n- what it is about\n- why you decided to read it\nand explain what you learned from it."
  },
  {
    title: "Describe a goal you set that you achieved.",
    topic: "You should say:\n- what the goal was\n- how you achieved it\n- how long it took\nand explain how you felt after achieving it."
  }
];

// Part 3: Discussion Questions
const part3Questions = [
  [
    "Why do people like to travel to different places?",
    "How can travel affect a person's view of the world?",
    "Do you think travel is more important for young people or older people?"
  ],
  [
    "What qualities make someone a good role model?",
    "How can parents influence their children?",
    "Do you think famous people are good role models?"
  ],
  [
    "Do you think reading is important for children?",
    "How can reading benefit adults?",
    "What are the differences between reading online and reading printed books?"
  ],
  [
    "Why is it important to set goals?",
    "What kinds of goals do young people usually set?",
    "How can achieving goals affect a person's life?"
  ]
];

// =====================
// State Management
// =====================
let currentSection = 1; // 1: Part 1, 2: Part 2, 3: Part 3
let part1Order = [];
let part1Index = 0;
let selectedCueCard = 0;
let part3Order = [];
let part3Index = 0;

// Recording Data
let mediaRecorder = null;
let audioChunks = [];
let recordings = {
  part1: [],
  part2: null,
  part3: []
};
let timers = {
  interval: null,
  seconds: 0
};
let isRecording = false;

// =====================
// DOM Elements
// =====================
const sectionLabel = document.getElementById('section-label');
const progressIndicator = document.getElementById('progress-indicator');
const questionArea = document.getElementById('question-area');
const timerArea = document.getElementById('timer-area');
const timerLabel = document.getElementById('timer-label');
const timerValue = document.getElementById('timer-value');
const controlsArea = document.getElementById('controls-area');
const playbackArea = document.getElementById('playback-area');
const audioPlayback = document.getElementById('audio-playback');
const downloadBtn = document.getElementById('download-btn');

// =====================
// Utility Functions
// =====================

// Shuffle array (Fisher-Yates)
function shuffle(arr) {
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Format seconds as MM:SS
function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// =====================
// Recording Functions
// =====================

// Start recording audio
async function startRecording() {
  if (isRecording) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];
    mediaRecorder.ondataavailable = e => {
      if (e.data.size > 0) audioChunks.push(e.data);
    };
    mediaRecorder.onstop = () => {
      stream.getTracks().forEach(track => track.stop());
      // Save audio blob to correct part
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      if (currentSection === 1) {
        recordings.part1[part1Index] = audioBlob;
      } else if (currentSection === 2) {
        recordings.part2 = audioBlob;
      } else if (currentSection === 3) {
        recordings.part3[part3Index] = audioBlob;
      }
      showPlayback(audioBlob);
    };
    mediaRecorder.start();
    isRecording = true;
    startTimer(currentSection === 2 ? 120 : 60, stopRecording); // 2 min for Part 2, 1 min for others
  } catch (err) {
    alert('Microphone access denied or unavailable.');
  }
}

// Stop recording audio
function stopRecording() {
  if (mediaRecorder && isRecording) {
    mediaRecorder.stop();
    isRecording = false;
    stopTimer();
    updateControlsAfterRecording();
  }
}

// Show playback controls for the last recorded audio
function showPlayback(blob) {
  playbackArea.style.display = 'block';
  audioPlayback.src = URL.createObjectURL(blob);
  audioPlayback.load();
  if (currentSection === 3 && part3Index === part3Order.length - 1) {
    downloadBtn.style.display = 'inline-block';
  } else if (currentSection === 2) {
    downloadBtn.style.display = 'none';
  }
}

// Download all audio as a ZIP (or as separate files)
downloadBtn.onclick = function() {
  // Download each part as a separate file
  // Part 1
  recordings.part1.forEach((blob, idx) => {
    if (blob) download(blob, `IELTS_Speaking_Part1_Q${idx+1}.webm`);
  });
  // Part 2
  if (recordings.part2) download(recordings.part2, `IELTS_Speaking_Part2.webm`);
  // Part 3
  recordings.part3.forEach((blob, idx) => {
    if (blob) download(blob, `IELTS_Speaking_Part3_Q${idx+1}.webm`);
  });
};

// Download helper
function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }, 100);
}

// =====================
// Timer Functions
// =====================

// Start a timer for given seconds, call callback when done
function startTimer(duration, onEnd) {
  timers.seconds = duration;
  timerArea.style.display = 'flex';
  timerValue.textContent = formatTime(timers.seconds);
  timers.interval = setInterval(() => {
    timers.seconds--;
    timerValue.textContent = formatTime(timers.seconds);
    if (timers.seconds <= 0) {
      stopTimer();
      if (onEnd) onEnd();
    }
  }, 1000);
}

// Stop and clear timer
function stopTimer() {
  clearInterval(timers.interval);
  timers.interval = null;
}

// =====================
// UI Rendering Functions
// =====================

// Render Part 1
function renderPart1() {
  currentSection = 1;
  sectionLabel.textContent = "Part 1: Introduction";
  progressIndicator.textContent = `${part1Index + 1} / 3`;
  playbackArea.style.display = 'none';
  timerArea.style.display = 'none';
  // Show question
  questionArea.innerHTML = `<div class="question-text">${part1Questions[part1Order[part1Index]]}</div>`;
  // Controls: Start Recording, Next (disabled until recording done)
  controlsArea.innerHTML = `
    <button class="btn" id="start-btn">Start Recording</button>
    <button class="btn secondary" id="next-btn" disabled>Next</button>
  `;
  document.getElementById('start-btn').onclick = () => {
    controlsArea.querySelector('#start-btn').disabled = true;
    controlsArea.querySelector('#next-btn').disabled = true;
    timerLabel.textContent = "Recording:";
    startRecording();
    controlsArea.innerHTML = `
      <button class="btn" id="stop-btn">Stop</button>
    `;
    document.getElementById('stop-btn').onclick = stopRecording;
  };
  document.getElementById('next-btn').onclick = () => {
    part1Index++;
    if (part1Index < 3) {
      renderPart1();
    } else {
      renderPart2();
    }
  };
}

// After recording, update controls to allow Next
function updateControlsAfterRecording() {
  controlsArea.innerHTML = `
    <button class="btn secondary" id="re-record-btn">Re-record</button>
    <button class="btn" id="next-btn">${currentSection === 3 && part3Index === part3Order.length - 1 ? 'Finish' : 'Next'}</button>
  `;
  document.getElementById('re-record-btn').onclick = () => {
    playbackArea.style.display = 'none';
    controlsArea.innerHTML = `
      <button class="btn" id="stop-btn">Stop</button>
    `;
    timerLabel.textContent = "Recording:";
    startRecording();
    document.getElementById('stop-btn').onclick = stopRecording;
  };
  document.getElementById('next-btn').onclick = () => {
    if (currentSection === 1) {
      part1Index++;
      if (part1Index < 3) {
        renderPart1();
      } else {
        renderPart2();
      }
    } else if (currentSection === 2) {
      renderPart3();
    } else if (currentSection === 3) {
      part3Index++;
      if (part3Index < part3Order.length) {
        renderPart3();
      } else {
        renderTestEnd();
      }
    }
  };
}

// Render Part 2
function renderPart2() {
  currentSection = 2;
  sectionLabel.textContent = "Part 2: Cue Card";
  progressIndicator.textContent = `1 / 1`;
  playbackArea.style.display = 'none';
  timerArea.style.display = 'flex';
  timerLabel.textContent = "Preparation:";
  // Pick a random cue card
  selectedCueCard = Math.floor(Math.random() * part2CueCards.length);
  const cue = part2CueCards[selectedCueCard];
  questionArea.innerHTML = `
    <div class="cue-card">
      <div class="cue-card-title">${cue.title}</div>
      <div class="cue-card-topic" style="white-space:pre-line;">${cue.topic}</div>
    </div>
    <div style="margin-top:8px;color:#64748b;font-size:0.98rem;">You have 1 minute to prepare. Recording will start automatically.</div>
  `;
  controlsArea.innerHTML = `<button class="btn secondary" disabled>Preparing...</button>`;
  // 1 min prep timer, then auto start recording
  startTimer(60, () => {
    timerLabel.textContent = "Recording:";
    startRecording();
    controlsArea.innerHTML = `
      <button class="btn" id="stop-btn">Stop</button>
    `;
    document.getElementById('stop-btn').onclick = stopRecording;
  });
  timerValue.textContent = formatTime(60);
}

// Render Part 3
function renderPart3() {
  currentSection = 3;
  sectionLabel.textContent = "Part 3: Discussion";
  progressIndicator.textContent = `${part3Index + 1} / ${part3Order.length}`;
  playbackArea.style.display = 'none';
  timerArea.style.display = 'none';
  // Show question
  questionArea.innerHTML = `<div class="question-text">${part3Questions[selectedCueCard][part3Order[part3Index]]}</div>`;
  controlsArea.innerHTML = `
    <button class="btn" id="start-btn">Start Recording</button>
    <button class="btn secondary" id="next-btn" disabled>${part3Index === part3Order.length - 1 ? 'Finish' : 'Next'}</button>
  `;
  document.getElementById('start-btn').onclick = () => {
    controlsArea.querySelector('#start-btn').disabled = true;
    controlsArea.querySelector('#next-btn').disabled = true;
    timerLabel.textContent = "Recording:";
    timerArea.style.display = 'flex';
    startRecording();
    controlsArea.innerHTML = `
      <button class="btn" id="stop-btn">Stop</button>
    `;
    document.getElementById('stop-btn').onclick = stopRecording;
  };
  document.getElementById('next-btn').onclick = () => {
    part3Index++;
    if (part3Index < part3Order.length) {
      renderPart3();
    } else {
      renderTestEnd();
    }
  };
}

// Render End of Test
function renderTestEnd() {
  currentSection = 4;
  sectionLabel.textContent = "Test Complete";
  progressIndicator.textContent = "";
  timerArea.style.display = 'none';
  questionArea.innerHTML = `
    <div style="font-size:1.15rem;font-weight:600;color:#059669;margin-bottom:10px;">
      🎉 Well done! You have completed the IELTS Speaking Test simulation.
    </div>
    <div style="color:#64748b;font-size:1rem;margin-bottom:8px;">
      You can now listen to your answers and download your audio files.
    </div>
  `;
  controlsArea.innerHTML = '';
  playbackArea.style.display = 'block';
  audioPlayback.src = '';
  audioPlayback.load();
  downloadBtn.style.display = 'inline-block';
}

// =====================
// Initialization
// =====================

function startTest() {
  // Pick 3 random Part 1 questions
  part1Order = shuffle([...Array(part1Questions.length).keys()]).slice(0, 3);
  part1Index = 0;
  // For Part 3, pick 2-3 questions from the same set as the cue card
  const numPart3 = Math.floor(Math.random() * 2) + 2; // 2 or 3
  part3Order = shuffle([...Array(part3Questions[0].length).keys()]).slice(0, numPart3);
  part3Index = 0;
  // Reset recordings
  recordings.part1 = [];
  recordings.part2 = null;
  recordings.part3 = [];
  // Hide playback/download
  playbackArea.style.display = 'none';
  downloadBtn.style.display = 'none';
  // Start Part 1
  renderPart1();
}

// =====================
// On Page Load: Insert Start Button
// =====================
(function initSpeakingTest() {
  sectionLabel.textContent = "IELTS Speaking Test";
  progressIndicator.textContent = "";
  questionArea.innerHTML = `
    <div style="font-size:1.15rem;font-weight:600;color:#4f46e5;margin-bottom:10px;">
      Simulate a real IELTS Speaking Test in 3 parts.
    </div>
    <div style="color:#64748b;font-size:1rem;margin-bottom:18px;">
      Practice answering questions, record your responses, and download your audio.
    </div>
  `;
  controlsArea.innerHTML = `<button class="btn" id="start-test-btn">Start Test</button>`;
  playbackArea.style.display = 'none';
  timerArea.style.display = 'none';
  document.getElementById('start-test-btn').onclick = startTest;
})();
</script>