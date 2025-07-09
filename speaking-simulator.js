/**
 * IELTS Speaking Scoring Module (Frontend-only)
 * @param {string} transcript - Speech-to-text transcript.
 * @param {number} audioDuration - Duration in seconds.
 * @returns {object} Scoring result or error object.
 */
function scoreIeltsSpeaking(transcript, audioDuration) {
  // 1. Transcript Validity Check
  if (
    !transcript ||
    typeof transcript !== "string" ||
    transcript.trim() === "" ||
    transcript.trim().toLowerCase() === "undefined" ||
    transcript.trim().toLowerCase().includes("speechrecognition not supported")
  ) {
    return {
      error: true,
      message:
        "⚠️ Speech recognition is not supported or transcript could not be generated. Please use Chrome and allow microphone access.",
      scores: null,
    };
  }

  // 2. Preprocess transcript
  const clean = transcript.replace(/[\r\n]+/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  const totalWords = words.length;
  const uniqueWords = new Set(words.map((w) => w.toLowerCase())).size;
  const durationMin = Math.max(audioDuration / 60, 0.01);
  const wpm = Math.round(totalWords / durationMin);

  // 3. Lexical Resource
  const linkingPhrases = [
    "In my opinion",
    "Furthermore",
    "Moreover",
    "However",
    "On the other hand",
    "For example",
    "To be honest",
  ];
  let linkingCount = 0;
  for (let phrase of linkingPhrases) {
    if (clean.includes(phrase)) linkingCount++;
  }

  // 4. Grammar Range & Accuracy
  const sentenceEnd = /[.?!]/g;
  const sentences = clean.split(sentenceEnd).filter((s) => s.trim().length > 0);
  const sentenceCount = sentences.length;
  // Advanced grammar triggers
  const grammarTriggers = ["although", "while", "because"];
  let grammarTriggerCount = 0;
  for (let t of grammarTriggers) {
    if (clean.toLowerCase().includes(t)) grammarTriggerCount++;
  }

  // 5. Fluency & Coherence (simulate pauses)
  let pausePenalty = 0;
  if (wpm < 60) pausePenalty = 2;
  else if (wpm < 80) pausePenalty = 1;
  if (audioDuration > 0 && totalWords / audioDuration < 1.2) pausePenalty += 1; // very slow

  // 6. Pronunciation (simulated)
  let pronunciationPenalty = 0;
  if (audioDuration < 20) pronunciationPenalty = 2;
  else if (audioDuration < 35) pronunciationPenalty = 1;
  if (totalWords < 10) pronunciationPenalty = 3;

  // 7. Scoring (scale 1–9)
  // Fluency & Coherence
  let fluencyScore = 6;
  if (wpm >= 100 && pausePenalty === 0 && linkingCount >= 2) fluencyScore = 9;
  else if (wpm >= 85 && pausePenalty <= 1 && linkingCount >= 1)
    fluencyScore = 8;
  else if (wpm >= 70 && pausePenalty <= 1) fluencyScore = 7;
  else if (wpm >= 55) fluencyScore = 6;
  else fluencyScore = 5;
  fluencyScore -= pausePenalty;
  fluencyScore = Math.max(1, Math.min(9, fluencyScore));

  // Lexical Resource
  let lexicalScore = 6;
  if (uniqueWords > 50 && linkingCount >= 2) lexicalScore = 9;
  else if (uniqueWords > 35 && linkingCount >= 1) lexicalScore = 8;
  else if (uniqueWords > 25) lexicalScore = 7;
  else if (uniqueWords > 15) lexicalScore = 6;
  else lexicalScore = 5;

  // Grammar Range & Accuracy
  let grammarScore = 6;
  if (sentenceCount >= 7 && grammarTriggerCount >= 2) grammarScore = 9;
  else if (sentenceCount >= 5 && grammarTriggerCount >= 1) grammarScore = 8;
  else if (sentenceCount >= 4) grammarScore = 7;
  else if (sentenceCount >= 2) grammarScore = 6;
  else grammarScore = 5;

  // Pronunciation (simulated)
  let pronunciationScore = 6;
  if (pronunciationPenalty >= 3 || totalWords < 10) pronunciationScore = 2;
  else if (pronunciationPenalty === 2) pronunciationScore = 4;
  else if (pronunciationPenalty === 1) pronunciationScore = 6;
  else if (fluencyScore >= 8 && lexicalScore >= 8 && grammarScore >= 8)
    pronunciationScore = 9;
  else if (fluencyScore >= 7 && lexicalScore >= 7 && grammarScore >= 7)
    pronunciationScore = 8;
  else if (fluencyScore >= 6 && lexicalScore >= 6 && grammarScore >= 6)
    pronunciationScore = 7;
  else pronunciationScore = 6;

  // If transcript is very short, force low band
  if (totalWords < 5 || !clean) {
    fluencyScore = 1;
    lexicalScore = 1;
    grammarScore = 1;
    pronunciationScore = 1;
  } else if (totalWords < 15) {
    fluencyScore = Math.min(fluencyScore, 2);
    lexicalScore = Math.min(lexicalScore, 2);
    grammarScore = Math.min(grammarScore, 2);
    pronunciationScore = Math.min(pronunciationScore, 2);
  }

  // 8. Overall band
  const overallBand = Math.round(
    (fluencyScore + lexicalScore + grammarScore + pronunciationScore) / 4
  );

  // 9. Feedback Messages
  function feedbackMsg(score, area) {
    if (area === "fluency") {
      if (score >= 8) return "Excellent fluency and logical flow.";
      if (score >= 7) return "Good fluency. Try to reduce hesitation.";
      if (score >= 6) return "Fair fluency. Try to keep talking more smoothly.";
      if (score >= 4)
        return "Try to reduce hesitation and keep talking more smoothly.";
      return "Very limited fluency. Try to speak more.";
    }
    if (area === "lexical") {
      if (score >= 8) return "Excellent vocabulary and use of linking phrases.";
      if (score >= 7) return "Good vocabulary. Try to use more advanced words.";
      if (score >= 6) return "Fair vocabulary. Try to use more varied words.";
      if (score >= 4) return "Limited vocabulary. Avoid repeating basic words.";
      return "Very basic vocabulary. Learn and use more words.";
    }
    if (area === "grammar") {
      if (score >= 8) return "Excellent use of complex grammar structures!";
      if (score >= 7) return "Good grammar. Try to use more complex sentences.";
      if (score >= 6)
        return "Fair grammar. Practice using more punctuation and longer sentences.";
      if (score >= 4)
        return "Frequent grammar errors. Practice sentence structure.";
      return "Very limited grammar. Practice basic sentences.";
    }
    if (area === "pronunciation") {
      if (score >= 8) return "Clear and natural pronunciation.";
      if (score >= 7)
        return "Good pronunciation. Try to speak a bit longer for full marks.";
      if (score >= 6)
        return "Understandable pronunciation. Practice clarity and length.";
      if (score >= 4) return "Pronunciation needs improvement. Speak clearly.";
      return "Very unclear speech. Practice basic pronunciation.";
    }
    return "";
  }

  return {
    error: false,
    scores: {
      fluencyScore,
      lexicalScore,
      grammarScore,
      pronunciationScore,
      overallBand,
      feedback: {
        fluency: feedbackMsg(fluencyScore, "fluency"),
        lexical: feedbackMsg(lexicalScore, "lexical"),
        grammar: feedbackMsg(grammarScore, "grammar"),
        pronunciation: feedbackMsg(pronunciationScore, "pronunciation"),
      },
    },
  };
}

// Example questions for the simulator
const simQuestions = {
  part1: [
    "What’s your favorite food?",
    "Do you enjoy reading books?",
    "Where did you grow up?",
    "What do you do in your free time?",
    "Do you prefer mornings or evenings?",
    "Tell me about your hometown.",
    "Do you like to travel?",
    "What kind of music do you like?",
    "How do you usually spend your weekends?",
    "Do you have any pets?",
    "What is your favorite season?",
    "Do you enjoy cooking?",
    "What is your favorite movie?",
    "Do you play any sports?",
    "What is your favorite holiday?",
  ],
  part2: [
    {
      topic: "Describe a memorable journey you have taken.",
      points: [
        "Where you went",
        "How you travelled",
        "What you did during the journey",
        "And explain why it was memorable",
      ],
    },
    {
      topic: "Describe a person who has influenced you.",
      points: [
        "Who the person is",
        "How you know them",
        "What qualities they have",
        "And explain how they influenced you",
      ],
    },
    {
      topic: "Describe a book you have recently read.",
      points: [
        "What the book is",
        "Why you decided to read it",
        "What the main story is about",
        "And explain what you learned from it",
      ],
    },
    {
      topic: "Describe a skill you would like to learn.",
      points: [
        "What the skill is",
        "Why you want to learn it",
        "How you would learn it",
        "And explain how it would help you",
      ],
    },
    {
      topic: "Describe a place you would like to visit.",
      points: [
        "Where it is",
        "Why you want to go there",
        "What you would do there",
        "And explain why it is special to you",
      ],
    },
  ],
  part3: [
    [
      "Why do people like to travel to new places?",
      "How can travel broaden a person’s mind?",
      "Do you think it’s better to travel alone or with others?",
    ],
    [
      "What qualities make someone a good role model?",
      "How can parents influence their children’s behavior?",
      "Do you think famous people are always good role models?",
    ],
    [
      "Do you prefer reading printed books or e-books?",
      "How can reading benefit people of all ages?",
      "Should children be encouraged to read more?",
    ],
    [
      "Is it important to learn new skills throughout life?",
      "How can technology help people learn new skills?",
      "What skills are most valuable in today’s world?",
    ],
    [
      "What are the benefits of visiting new places?",
      "How can tourism affect local cultures?",
      "Should governments promote tourism?",
    ],
  ],
};

/* ===== IELTS Speaking Smart Scoring Module ===== */
/**
 * Evaluate IELTS Speaking answer based on transcript and audio duration.
 * @param {string} transcript - The speech-to-text transcript.
 * @param {number} audioDuration - Duration in seconds.
 * @returns {object} Scoring result with band scores and feedback.
 */
function scoreIeltsSpeaking(transcript, audioDuration) {
  // --- 1. Preprocess transcript ---
  const clean = (transcript || "").replace(/[\r\n]+/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  const totalWords = words.length;
  const uniqueWords = new Set(words.map((w) => w.toLowerCase())).size;
  const durationMin = Math.max(audioDuration / 60, 0.01);
  const wpm = Math.round(totalWords / durationMin);

  // --- 2. Lexical Resource ---
  const linkingPhrases = [
    "In my opinion",
    "Furthermore",
    "Moreover",
    "However",
    "On the other hand",
    "For example",
    "To be honest",
  ];
  let linkingCount = 0;
  for (let phrase of linkingPhrases) {
    if (clean.includes(phrase)) linkingCount++;
  }
  // Academic words (20+)
  const academicWords = [
    "significant",
    "consequence",
    "beneficial",
    "impact",
    "aspect",
    "factor",
    "concept",
    "method",
    "process",
    "analysis",
    "approach",
    "strategy",
    "environment",
    "challenge",
    "solution",
    "criteria",
    "requirement",
    "potential",
    "complex",
    "structure",
    "function",
    "context",
    "resource",
    "issue",
    "evaluate",
    "demonstrate",
    "indicate",
    "illustrate",
    "establish",
    "maintain",
  ];
  let academicCount = 0;
  for (let word of academicWords) {
    if (clean.toLowerCase().includes(word)) academicCount++;
  }
  // Penalize overuse of basic words
  const basicWords = ["good", "nice", "thing", "stuff", "like", "very"];
  let basicOveruse = 0;
  for (let word of basicWords) {
    const matches = clean.match(new RegExp(`\\b${word}\\b`, "gi"));
    if (matches && matches.length > 3) basicOveruse++;
  }

  // --- 3. Grammar Range & Accuracy ---
  const sentenceEnd = /[.?!]/g;
  const sentences = clean.split(sentenceEnd).filter((s) => s.trim().length > 0);
  const sentenceCount = sentences.length;
  const punctuationTypes = [
    clean.includes("."),
    clean.includes("!"),
    clean.includes("?"),
    clean.includes(","),
    clean.includes(";"),
    clean.includes(":"),
  ].filter(Boolean).length;
  // Complex sentence starters
  const complexStarters = [
    "Although",
    "Because",
    "While",
    "Since",
    "Unless",
    "Even though",
    "Whereas",
    "As soon as",
  ];
  let complexCount = 0;
  for (let starter of complexStarters) {
    if (clean.includes(starter)) complexCount++;
  }

  // --- 4. Fluency & Coherence ---
  // Simulate pauses: very low WPM or long audio with few words
  let pausePenalty = 0;
  if (wpm < 50) pausePenalty = 2;
  else if (wpm < 60) pausePenalty = 1;
  else if (wpm > 140) pausePenalty = 1; // too fast
  // Logical flow connectors
  const flowConnectors = [
    "First",
    "Then",
    "After that",
    "Finally",
    "Next",
    "In conclusion",
  ];
  let flowCount = 0;
  for (let c of flowConnectors) {
    if (clean.includes(c)) flowCount++;
  }

  // --- 5. Pronunciation (simulated) ---
  let pronunciationPenalty = 0;
  if (audioDuration < 30) pronunciationPenalty = 2;
  else if (audioDuration < 45) pronunciationPenalty = 1;
  if (totalWords < 20) pronunciationPenalty = 3;

  // --- 6. Criteria scoring ---
  // Fluency & Coherence
  let fluencyScore = 6;
  if (wpm >= 90 && wpm <= 130 && pausePenalty === 0 && flowCount >= 2)
    fluencyScore = 9;
  else if (wpm >= 80 && wpm <= 140 && pausePenalty <= 1 && flowCount >= 1)
    fluencyScore = 8;
  else if (wpm >= 65 && pausePenalty <= 1) fluencyScore = 7;
  else if (wpm >= 50) fluencyScore = 6;
  else fluencyScore = 5;
  fluencyScore -= pausePenalty;
  fluencyScore = Math.max(1, Math.min(9, fluencyScore));

  // Lexical Resource
  let lexicalScore = 6;
  if (linkingCount >= 3 && academicCount >= 3 && basicOveruse === 0)
    lexicalScore = 9;
  else if (linkingCount >= 2 && academicCount >= 2) lexicalScore = 8;
  else if (linkingCount >= 1 && academicCount >= 1) lexicalScore = 7;
  else if (uniqueWords > 18) lexicalScore = 6;
  else lexicalScore = 5;
  lexicalScore -= basicOveruse;
  lexicalScore = Math.max(1, Math.min(9, lexicalScore));

  // Grammar Range & Accuracy
  let grammarScore = 6;
  if (sentenceCount >= 7 && punctuationTypes >= 3 && complexCount >= 2)
    grammarScore = 9;
  else if (sentenceCount >= 5 && punctuationTypes >= 2 && complexCount >= 1)
    grammarScore = 8;
  else if (sentenceCount >= 3 && punctuationTypes >= 2) grammarScore = 7;
  else if (sentenceCount >= 2) grammarScore = 6;
  else grammarScore = 5;

  // Pronunciation (simulated)
  let pronunciationScore = 6;
  if (pronunciationPenalty >= 3 || totalWords < 10) pronunciationScore = 2;
  else if (pronunciationPenalty === 2) pronunciationScore = 4;
  else if (pronunciationPenalty === 1) pronunciationScore = 6;
  else if (fluencyScore >= 8 && lexicalScore >= 8 && grammarScore >= 8)
    pronunciationScore = 9;
  else if (fluencyScore >= 7 && lexicalScore >= 7 && grammarScore >= 7)
    pronunciationScore = 8;
  else if (fluencyScore >= 6 && lexicalScore >= 6 && grammarScore >= 6)
    pronunciationScore = 7;
  else pronunciationScore = 6;

  // If transcript is empty or very short, force low band
  if (totalWords < 5 || !clean) {
    fluencyScore = 1;
    lexicalScore = 1;
    grammarScore = 1;
    pronunciationScore = 1;
  } else if (totalWords < 20) {
    fluencyScore = Math.min(fluencyScore, 2);
    lexicalScore = Math.min(lexicalScore, 2);
    grammarScore = Math.min(grammarScore, 2);
    pronunciationScore = Math.min(pronunciationScore, 2);
  }

  // --- 7. Overall band ---
  const overallBand = Math.round(
    (fluencyScore + lexicalScore + grammarScore + pronunciationScore) / 4
  );

  // --- 8. Feedback messages ---
  function feedbackMsg(score, area) {
    if (area === "fluency") {
      if (score >= 8) return "Excellent pace and logical flow.";
      if (score >= 7) return "Good pace, but reduce long pauses.";
      if (score >= 6) return "Fair fluency. Try to speak more smoothly.";
      if (score >= 4) return "Frequent pauses. Practice continuous speaking.";
      return "Very limited fluency. Try to speak more.";
    }
    if (area === "lexical") {
      if (score >= 8) return "Great use of linking words and advanced terms.";
      if (score >= 7)
        return "Nice vocabulary! Include more idioms or collocations.";
      if (score >= 6) return "Fair vocabulary. Try to use more varied words.";
      if (score >= 4) return "Limited vocabulary. Avoid repeating basic words.";
      return "Very basic vocabulary. Learn and use more words.";
    }
    if (area === "grammar") {
      if (score >= 8) return "Excellent grammar and sentence variety.";
      if (score >= 7) return "Good grammar. Try more complex sentences.";
      if (score >= 6) return "Try using complex sentences and punctuation.";
      if (score >= 4)
        return "Frequent grammar errors. Practice sentence structure.";
      return "Very limited grammar. Practice basic sentences.";
    }
    if (area === "pronunciation") {
      if (score >= 8) return "Clear and natural speech.";
      if (score >= 7)
        return "Clear speech. Try to speak a bit longer for full marks.";
      if (score >= 6)
        return "Understandable speech. Practice clarity and length.";
      if (score >= 4) return "Pronunciation needs improvement. Speak clearly.";
      return "Very unclear speech. Practice basic pronunciation.";
    }
    return "";
  }

  return {
    fluencyScore,
    lexicalScore,
    grammarScore,
    pronunciationScore,
    overallBand,
    feedback: {
      fluency: feedbackMsg(fluencyScore, "fluency"),
      lexical: feedbackMsg(lexicalScore, "lexical"),
      grammar: feedbackMsg(grammarScore, "grammar"),
      pronunciation: feedbackMsg(pronunciationScore, "pronunciation"),
    },
  };
}
// Expose for global use
window.scoreIeltsSpeaking = scoreIeltsSpeaking;
/* 2. State Management */
let simState = {
  step: 1, // 1: Part 1, 2: Part 2, 3: Part 3, 4: Summary
  part1: {
    questions: [],
    recordings: [],
    blobs: [],
    transcripts: [],
    durations: [],
  },
  part2: {
    cue: null,
    recording: null,
    blob: null,
    transcript: "",
    duration: 0,
  },
  part3: {
    questions: [],
    recordings: [],
    blobs: [],
    transcripts: [],
    durations: [],
  },
  summary: {
    band: null,
    feedback: "",
  },
};
/* 3. Utility Functions */
function shuffle(arr) {
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pad(n) {
  return n < 10 ? "0" + n : n;
}
function formatTime(sec) {
  let m = Math.floor(sec / 60),
    s = Math.floor(sec % 60);
  return pad(m) + ":" + pad(s);
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 100);
}
function estimateBandScore(state) {
  // Simple: based on total seconds spoken and transcript length
  let totalSecs = 0,
    totalWords = 0;
  state.part1.durations.forEach((d) => (totalSecs += d));
  state.part2.duration && (totalSecs += state.part2.duration);
  state.part3.durations.forEach((d) => (totalSecs += d));
  state.part1.transcripts.forEach(
    (t) => (totalWords += (t || "").split(/\s+/).length)
  );
  state.part2.transcript &&
    (totalWords += (state.part2.transcript || "").split(/\s+/).length);
  state.part3.transcripts.forEach(
    (t) => (totalWords += (t || "").split(/\s+/).length)
  );
  // Mock logic: 7.5+ for >350 words, 7+ for >250, 6.5+ for >180, else 6
  if (totalWords > 350 && totalSecs > 200) return 8;
  if (totalWords > 250 && totalSecs > 150) return 7.5;
  if (totalWords > 180 && totalSecs > 120) return 7;
  if (totalWords > 120 && totalSecs > 80) return 6.5;
  return 6;
}
function randomFeedback(band) {
  const arr = [
    "Try to speak more fluently and avoid long pauses.",
    "Great vocabulary usage! Keep it up.",
    "Work on your pronunciation for better clarity.",
    "Try to expand your answers with more details.",
    "Excellent! Your answers are well-structured.",
    "Aim for more complex grammar structures.",
    "Keep your speech natural and confident.",
    "Practice linking your ideas smoothly.",
  ];
  if (band >= 7.5) return arr[1] + " " + arr[4];
  if (band >= 7) return arr[4] + " " + arr[6];
  if (band >= 6.5) return arr[3] + " " + arr[7];
  return arr[0] + " " + arr[5];
}
/* 4. MediaRecorder/Audio/Transcript Logic */
let simRecorder = null,
  simChunks = [],
  simTimer = null,
  simTimerStart = 0,
  simTimerCb = null;
let simCurrentQ = 0,
  simPrepTimer = null,
  simPrepTimeLeft = 60,
  simRecTimeLeft = 120;
let simAudioUrl = null;
let simSpeechRecognition = null;
let simDarkMode = false;
/* 5. UI Rendering */
const simMain = document.getElementById("sim-main");
function simRender() {
  // Update step indicator
  document.getElementById("sim-step-indicator").textContent =
    simState.step < 4 ? `Step ${simState.step} of 3` : "Summary";
  document.querySelectorAll(".sim-step").forEach((el, i) => {
    el.classList.toggle("sim-step-active", i === simState.step - 1);
  });
  // Render main content
  if (simState.step === 1) simRenderPart1();
  else if (simState.step === 2) simRenderPart2();
  else if (simState.step === 3) simRenderPart3();
  else simRenderSummary();
}
function simRenderPart1() {
  // Show 3 questions, one at a time, with recording controls
  if (!simState.part1.questions.length) {
    simState.part1.questions = shuffle(simQuestions.part1).slice(0, 3);
    simState.part1.recordings = [null, null, null];
    simState.part1.blobs = [null, null, null];
    simState.part1.transcripts = ["", "", ""];
    simState.part1.durations = [0, 0, 0];
    simCurrentQ = 0;
  }
  let q = simCurrentQ;
  let html = `
    <div class="sim-section-title">Part 1: Introduction & Interview</div>
    <ul class="sim-question-list">
      <li><b>Question ${q + 1}:</b> ${simState.part1.questions[q]}</li>
    </ul>
    <div id="sim-timer" class="sim-timer" style="display:none;"><span>00:00</span></div>
    <div class="sim-controls">
      <button class="sim-btn" id="sim-btn-record"><span class="sim-btn-icon">🎙️</span> Record</button>
      <button class="sim-btn sim-btn-secondary" id="sim-btn-stop" disabled><span class="sim-btn-icon">⏹️</span> Stop</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-play" disabled><span class="sim-btn-icon">▶️</span> Play</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-re" disabled><span class="sim-btn-icon">🔄</span> Re-record</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-download" disabled><span class="sim-btn-icon">⬇️</span> Download</button>
    </div>
    <audio id="sim-audio" class="sim-audio-player" controls style="display:none;"></audio>
    <div id="sim-success" class="sim-success" style="display:none;"><span>✅</span> Recording saved!</div>
    <div id="sim-warning" class="sim-warning" style="display:none;"><span>⚠️</span> Please record your answer.</div>
    <div class="sim-transcript" id="sim-transcript">${
      simState.part1.transcripts[q]
        ? "<b>Transcript:</b> " + simState.part1.transcripts[q]
        : ""
    }</div>
    <div class="sim-nav">
      <button class="sim-btn sim-btn-light" id="sim-btn-back"${
        q === 0 ? " disabled" : ""
      }><span class="sim-btn-icon">⬅️</span> Back</button>
      <button class="sim-btn" id="sim-btn-next"${
        simState.part1.blobs[q] ? "" : " disabled"
      }>Next <span class="sim-btn-icon">➡️</span></button>
    </div>
  `;
  simMain.innerHTML = html;
  // Restore audio if exists
  if (simState.part1.blobs[q]) {
    let url = URL.createObjectURL(simState.part1.blobs[q]);
    let audio = document.getElementById("sim-audio");
    audio.src = url;
    audio.style.display = "";
    document.getElementById("sim-btn-play").disabled = false;
    document.getElementById("sim-btn-re").disabled = false;
    document.getElementById("sim-btn-download").disabled = false;
    document.getElementById("sim-success").style.display = "";
  }
  // Event listeners
  document.getElementById("sim-btn-record").onclick = () =>
    simStartRecording("part1", q);
  document.getElementById("sim-btn-stop").onclick = () =>
    simStopRecording("part1", q);
  document.getElementById("sim-btn-play").onclick = () =>
    simPlayAudio("part1", q);
  document.getElementById("sim-btn-re").onclick = () => simReRecord("part1", q);
  document.getElementById("sim-btn-download").onclick = () => {
    if (simState.part1.blobs[q])
      downloadBlob(simState.part1.blobs[q], `IELTS_Part1_Q${q + 1}.mp3`);
  };
  document.getElementById("sim-btn-back").onclick = () => {
    if (q > 0) {
      simCurrentQ--;
      simRender();
    }
  };
  document.getElementById("sim-btn-next").onclick = () => {
    if (!simState.part1.blobs[q]) {
      document.getElementById("sim-warning").style.display = "";
      return;
    }
    if (q < 2) {
      simCurrentQ++;
      simRender();
    } else {
      simState.step = 2;
      simRender();
    }
  };
}
function simRenderPart2() {
  // Cue card, 1 min prep, 2 min record, transcript, controls
  if (!simState.part2.cue) {
    let idx = Math.floor(Math.random() * simQuestions.part2.length);
    simState.part2.cue = simQuestions.part2[idx];
    simState.part2.recording = null;
    simState.part2.blob = null;
    simState.part2.transcript = "";
    simState.part2.duration = 0;
    simPrepTimeLeft = 60;
    simRecTimeLeft = 120;
  }
  let cue = simState.part2.cue;
  let html = `
    <div class="sim-section-title">Part 2: Long Turn (Cue Card)</div>
    <div class="sim-cue-card">
      <b>${cue.topic}</b>
      <ul style="margin:0.5em 0 0 1.2em;">
        ${cue.points.map((pt) => `<li>${pt}</li>`).join("")}
      </ul>
    </div>
    <div id="sim-prep-timer" class="sim-timer"><span>Prep Time: 01:00</span></div>
    <div id="sim-rec-timer" class="sim-timer" style="display:none;"><span>00:00</span></div>
    <div class="sim-controls" id="sim-controls">
      <button class="sim-btn" id="sim-btn-prep"><span class="sim-btn-icon">⏳</span> Start Prep</button>
      <button class="sim-btn" id="sim-btn-record" style="display:none;"><span class="sim-btn-icon">🎙️</span> Start Recording</button>
      <button class="sim-btn sim-btn-secondary" id="sim-btn-stop" style="display:none;" disabled><span class="sim-btn-icon">⏹️</span> Stop</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-play" style="display:none;" disabled><span class="sim-btn-icon">▶️</span> Play</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-re" style="display:none;" disabled><span class="sim-btn-icon">🔄</span> Re-record</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-download" style="display:none;" disabled><span class="sim-btn-icon">⬇️</span> Download</button>
    </div>
    <audio id="sim-audio" class="sim-audio-player" controls style="display:none;"></audio>
    <div id="sim-success" class="sim-success" style="display:none;"><span>✅</span> Recording saved!</div>
    <div id="sim-warning" class="sim-warning" style="display:none;"><span>⚠️</span> Please record your answer.</div>
    <div class="sim-transcript" id="sim-transcript">${
      simState.part2.transcript
        ? "<b>Transcript:</b> " + simState.part2.transcript
        : ""
    }</div>
    <div class="sim-nav">
      <button class="sim-btn sim-btn-light" id="sim-btn-back"><span class="sim-btn-icon">⬅️</span> Back</button>
      <button class="sim-btn" id="sim-btn-next"${
        simState.part2.blob ? "" : " disabled"
      }>Next <span class="sim-btn-icon">➡️</span></button>
    </div>
  `;
  simMain.innerHTML = html;
  // Prep/record/play controls
  let prepBtn = document.getElementById("sim-btn-prep");
  let recordBtn = document.getElementById("sim-btn-record");
  let stopBtn = document.getElementById("sim-btn-stop");
  let playBtn = document.getElementById("sim-btn-play");
  let reBtn = document.getElementById("sim-btn-re");
  let dlBtn = document.getElementById("sim-btn-download");
  let audio = document.getElementById("sim-audio");
  // If already recorded
  if (simState.part2.blob) {
    let url = URL.createObjectURL(simState.part2.blob);
    audio.src = url;
    audio.style.display = "";
    playBtn.style.display = "";
    playBtn.disabled = false;
    reBtn.style.display = "";
    reBtn.disabled = false;
    dlBtn.style.display = "";
    dlBtn.disabled = false;
    document.getElementById("sim-success").style.display = "";
    recordBtn.style.display = "";
    recordBtn.disabled = false;
    stopBtn.style.display = "";
    stopBtn.disabled = true;
    prepBtn.style.display = "none";
    document.getElementById("sim-prep-timer").style.display = "none";
    document.getElementById("sim-rec-timer").style.display = "none";
  }
  // Prep logic
  prepBtn &&
    (prepBtn.onclick = () => {
      prepBtn.disabled = true;
      simPrepTimeLeft = 60;
      document.getElementById("sim-prep-timer").style.display = "";
      document.getElementById("sim-prep-timer").firstElementChild.textContent =
        "Prep Time: 01:00";
      recordBtn.style.display = "none";
      stopBtn.style.display = "none";
      playBtn.style.display = "none";
      reBtn.style.display = "none";
      dlBtn.style.display = "none";
      simPrepTimer = setInterval(() => {
        simPrepTimeLeft--;
        document.getElementById(
          "sim-prep-timer"
        ).firstElementChild.textContent =
          "Prep Time: " + formatTime(simPrepTimeLeft);
        if (simPrepTimeLeft <= 0) {
          clearInterval(simPrepTimer);
          document.getElementById("sim-prep-timer").style.display = "none";
          recordBtn.style.display = "";
          recordBtn.disabled = false;
        }
      }, 1000);
    });
  // Record logic
  recordBtn &&
    (recordBtn.onclick = () => {
      recordBtn.disabled = true;
      stopBtn.style.display = "";
      stopBtn.disabled = false;
      simStartRecording("part2");
      document.getElementById("sim-rec-timer").style.display = "";
      let t = 0;
      simTimerCb = setInterval(() => {
        t++;
        document.getElementById(
          "sim-rec-timer"
        ).firstElementChild.textContent = formatTime(t);
        if (t >= 120) {
          clearInterval(simTimerCb);
          simStopRecording("part2");
        }
      }, 1000);
    });
  stopBtn &&
    (stopBtn.onclick = () => {
      stopBtn.disabled = true;
      clearInterval(simTimerCb);
      simStopRecording("part2");
    });
  playBtn && (playBtn.onclick = () => simPlayAudio("part2"));
  reBtn && (reBtn.onclick = () => simReRecord("part2"));
  dlBtn &&
    (dlBtn.onclick = () => {
      if (simState.part2.blob)
        downloadBlob(simState.part2.blob, "IELTS_Part2.mp3");
    });
  document.getElementById("sim-btn-back").onclick = () => {
    simState.step = 1;
    simCurrentQ = 2;
    simRender();
  };
  document.getElementById("sim-btn-next").onclick = () => {
    if (!simState.part2.blob) {
      document.getElementById("sim-warning").style.display = "";
      return;
    }
    simState.step = 3;
    simRender();
  };
}
function simRenderPart3() {
  // 2-3 follow-up questions, one at a time, with recording controls
  if (!simState.part3.questions.length) {
    // Pick set matching Part 2 cue
    let idx = simQuestions.part2.indexOf(simState.part2.cue);
    let qs =
      simQuestions.part3[idx] || shuffle(simQuestions.part3.flat()).slice(0, 3);
    simState.part3.questions = qs.slice(0, 3);
    simState.part3.recordings = [null, null, null];
    simState.part3.blobs = [null, null, null];
    simState.part3.transcripts = ["", "", ""];
    simState.part3.durations = [0, 0, 0];
    simCurrentQ = 0;
  }
  let q = simCurrentQ;
  let html = `
    <div class="sim-section-title">Part 3: Discussion</div>
    <ul class="sim-question-list">
      <li><b>Question ${q + 1}:</b> ${simState.part3.questions[q]}</li>
    </ul>
    <div id="sim-timer" class="sim-timer" style="display:none;"><span>00:00</span></div>
    <div class="sim-controls">
      <button class="sim-btn" id="sim-btn-record"><span class="sim-btn-icon">🎙️</span> Record</button>
      <button class="sim-btn sim-btn-secondary" id="sim-btn-stop" disabled><span class="sim-btn-icon">⏹️</span> Stop</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-play" disabled><span class="sim-btn-icon">▶️</span> Play</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-re" disabled><span class="sim-btn-icon">🔄</span> Re-record</button>
      <button class="sim-btn sim-btn-light" id="sim-btn-download" disabled><span class="sim-btn-icon">⬇️</span> Download</button>
    </div>
    <audio id="sim-audio" class="sim-audio-player" controls style="display:none;"></audio>
    <div id="sim-success" class="sim-success" style="display:none;"><span>✅</span> Recording saved!</div>
    <div id="sim-warning" class="sim-warning" style="display:none;"><span>⚠️</span> Please record your answer.</div>
    <div class="sim-transcript" id="sim-transcript">${
      simState.part3.transcripts[q]
        ? "<b>Transcript:</b> " + simState.part3.transcripts[q]
        : ""
    }</div>
    <div class="sim-nav">
      <button class="sim-btn sim-btn-light" id="sim-btn-back"${
        q === 0 ? " disabled" : ""
      }><span class="sim-btn-icon">⬅️</span> Back</button>
      <button class="sim-btn" id="sim-btn-next"${
        simState.part3.blobs[q] ? "" : " disabled"
      }>${
    q < simState.part3.questions.length - 1
      ? "Next <span class='sim-btn-icon'>➡️</span>"
      : "Finish Test <span class='sim-btn-icon'>🏁</span>"
  }</button>
    </div>
  `;
  simMain.innerHTML = html;
  // Restore audio if exists
  if (simState.part3.blobs[q]) {
    let url = URL.createObjectURL(simState.part3.blobs[q]);
    let audio = document.getElementById("sim-audio");
    audio.src = url;
    audio.style.display = "";
    document.getElementById("sim-btn-play").disabled = false;
    document.getElementById("sim-btn-re").disabled = false;
    document.getElementById("sim-btn-download").disabled = false;
    document.getElementById("sim-success").style.display = "";
  }
  // Event listeners
  document.getElementById("sim-btn-record").onclick = () =>
    simStartRecording("part3", q);
  document.getElementById("sim-btn-stop").onclick = () =>
    simStopRecording("part3", q);
  document.getElementById("sim-btn-play").onclick = () =>
    simPlayAudio("part3", q);
  document.getElementById("sim-btn-re").onclick = () => simReRecord("part3", q);
  document.getElementById("sim-btn-download").onclick = () => {
    if (simState.part3.blobs[q])
      downloadBlob(simState.part3.blobs[q], `IELTS_Part3_Q${q + 1}.mp3`);
  };
  document.getElementById("sim-btn-back").onclick = () => {
    if (q > 0) {
      simCurrentQ--;
      simRender();
    } else {
      simState.step = 2;
      simRender();
    }
  };
  document.getElementById("sim-btn-next").onclick = () => {
    if (!simState.part3.blobs[q]) {
      document.getElementById("sim-warning").style.display = "";
      return;
    }
    if (q < simState.part3.questions.length - 1) {
      simCurrentQ++;
      simRender();
    } else {
      simState.step = 4;
      simRender();
    }
  };
}
function simRenderSummary() {
  // Show all questions, audio, transcript, download links, feedback, band
  if (!simState.summary.band) {
    simState.summary.band = estimateBandScore(simState);
    simState.summary.feedback = randomFeedback(simState.summary.band);
  }
  let html = `
    <div class="sim-section-title">Test Summary & Feedback</div>
    <div class="sim-band-label">Your Mock Band Score:</div>
    <div class="sim-band-score">${simState.summary.band} / 9</div>
    <div class="sim-feedback">${simState.summary.feedback}</div>
    <div class="sim-summary">
      <h3>Part 1: Introduction</h3>
      ${simState.part1.questions
        .map(
          (q, i) => `
        <div class="sim-summary-part">
          <b>Q${i + 1}:</b> ${q}
          <div class="sim-summary-audio">
            <audio controls src="${
              simState.part1.blobs[i]
                ? URL.createObjectURL(simState.part1.blobs[i])
                : ""
            }"></audio>
          </div>
          <div class="sim-summary-download">
            <button class="sim-btn sim-btn-light" onclick="downloadBlob(simState.part1.blobs[${i}], 'IELTS_Part1_Q${
            i + 1
          }.mp3')" ${
            simState.part1.blobs[i] ? "" : "disabled"
          }>⬇️ Download</button>
          </div>
          <div class="sim-summary-transcript"><b>Transcript:</b> ${
            simState.part1.transcripts[i] || "<i>No transcript</i>"
          }</div>
        </div>
      `
        )
        .join("")}
      <h3>Part 2: Cue Card</h3>
      <div class="sim-summary-part">
        <b>${simState.part2.cue.topic}</b>
        <ul style="margin:0.5em 0 0 1.2em;">
          ${simState.part2.cue.points.map((pt) => `<li>${pt}</li>`).join("")}
        </ul>
        <div class="sim-summary-audio">
          <audio controls src="${
            simState.part2.blob ? URL.createObjectURL(simState.part2.blob) : ""
          }"></audio>
        </div>
        <div class="sim-summary-download">
          <button class="sim-btn sim-btn-light" onclick="downloadBlob(simState.part2.blob, 'IELTS_Part2.mp3')" ${
            simState.part2.blob ? "" : "disabled"
          }>⬇️ Download</button>
        </div>
        <div class="sim-summary-transcript"><b>Transcript:</b> ${
          simState.part2.transcript || "<i>No transcript</i>"
        }</div>
      </div>
      <h3>Part 3: Discussion</h3>
      ${simState.part3.questions
        .map(
          (q, i) => `
        <div class="sim-summary-part">
          <b>Q${i + 1}:</b> ${q}
          <div class="sim-summary-audio">
            <audio controls src="${
              simState.part3.blobs[i]
                ? URL.createObjectURL(simState.part3.blobs[i])
                : ""
            }"></audio>
          </div>
          <div class="sim-summary-download">
            <button class="sim-btn sim-btn-light" onclick="downloadBlob(simState.part3.blobs[${i}], 'IELTS_Part3_Q${
            i + 1
          }.mp3')" ${
            simState.part3.blobs[i] ? "" : "disabled"
          }>⬇️ Download</button>
          </div>
          <div class="sim-summary-transcript"><b>Transcript:</b> ${
            simState.part3.transcripts[i] || "<i>No transcript</i>"
          }</div>
        </div>
      `
        )
        .join("")}
    </div>
    <div class="sim-summary-actions">
      <button class="sim-btn" onclick="simRestart()">Restart Test</button>
    </div>
  `;
  simMain.innerHTML = html;
}
/* 6. Recording/Playback Logic */
function simStartRecording(part, idx) {
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    alert("Sorry, your browser does not support audio recording.");
    return;
  }
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      simRecorder = new MediaRecorder(stream);
      simChunks = [];
      simRecorder.ondataavailable = (e) => simChunks.push(e.data);
      simRecorder.onstop = () => {
        let blob = new Blob(simChunks, { type: "audio/mp3" });
        let duration = Math.round((Date.now() - simTimerStart) / 1000);
        if (part === "part1") {
          simState.part1.blobs[idx] = blob;
          simState.part1.durations[idx] = duration;
          simState.part1.recordings[idx] = simChunks.slice();
          simGenTranscript(blob, part, idx);
        } else if (part === "part2") {
          simState.part2.blob = blob;
          simState.part2.duration = duration;
          simState.part2.recording = simChunks.slice();
          simGenTranscript(blob, part);
        } else if (part === "part3") {
          simState.part3.blobs[idx] = blob;
          simState.part3.durations[idx] = duration;
          simState.part3.recordings[idx] = simChunks.slice();
          simGenTranscript(blob, part, idx);
        }
        simRender();
      };
      simRecorder.start();
      simTimerStart = Date.now();
      // UI: show timer
      let t = 0;
      let timerEl =
        document.getElementById("sim-timer") ||
        document.getElementById("sim-rec-timer");
      timerEl && (timerEl.style.display = "");
      timerEl && (timerEl.firstElementChild.textContent = formatTime(0));
      simTimerCb = setInterval(() => {
        t++;
        timerEl && (timerEl.firstElementChild.textContent = formatTime(t));
        if (part === "part2" && t >= 120) {
          clearInterval(simTimerCb);
          simStopRecording(part, idx);
        }
      }, 1000);
      // UI: enable/disable buttons
      document.getElementById("sim-btn-record").disabled = true;
      document.getElementById("sim-btn-stop").disabled = false;
      document.getElementById("sim-btn-play").disabled = true;
      document.getElementById("sim-btn-re").disabled = true;
      document.getElementById("sim-btn-download").disabled = true;
      document.getElementById("sim-success").style.display = "none";
      document.getElementById("sim-warning").style.display = "none";
    })
    .catch(() => {
      alert("Microphone access denied.");
    });
}
function simStopRecording(part, idx) {
  if (simRecorder && simRecorder.state !== "inactive") {
    simRecorder.stop();
    clearInterval(simTimerCb);
    let timerEl =
      document.getElementById("sim-timer") ||
      document.getElementById("sim-rec-timer");
    timerEl && (timerEl.style.display = "none");
  }
}
function simPlayAudio(part, idx) {
  let audio = document.getElementById("sim-audio");
  if (part === "part1" && simState.part1.blobs[idx]) {
    audio.src = URL.createObjectURL(simState.part1.blobs[idx]);
    audio.play();
  }
  if (part === "part2" && simState.part2.blob) {
    audio.src = URL.createObjectURL(simState.part2.blob);
    audio.play();
  }
  if (part === "part3" && simState.part3.blobs[idx]) {
    audio.src = URL.createObjectURL(simState.part3.blobs[idx]);
    audio.play();
  }
}
function simReRecord(part, idx) {
  if (part === "part1") {
    simState.part1.blobs[idx] = null;
    simState.part1.transcripts[idx] = "";
    simState.part1.durations[idx] = 0;
    simRender();
  }
  if (part === "part2") {
    simState.part2.blob = null;
    simState.part2.transcript = "";
    simState.part2.duration = 0;
    simRender();
  }
  if (part === "part3") {
    simState.part3.blobs[idx] = null;
    simState.part3.transcripts[idx] = "";
    simState.part3.durations[idx] = 0;
    simRender();
  }
}
/* 7. Transcript Generation */
function simGenTranscript(blob, part, idx) {
  if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
    // Not supported
    if (part === "part1")
      simState.part1.transcripts[idx] = "(SpeechRecognition not supported)";
    if (part === "part2")
      simState.part2.transcript = "(SpeechRecognition not supported)";
    if (part === "part3")
      simState.part3.transcripts[idx] = "(SpeechRecognition not supported)";
    simRender();
    return;
  }
  // Play audio and recognize
  let rec = window.SpeechRecognition
    ? new window.SpeechRecognition()
    : new window.webkitSpeechRecognition();
  rec.lang = "en-US";
  rec.continuous = false;
  rec.interimResults = false;
  // Play audio to recognition
  let audio = document.createElement("audio");
  audio.src = URL.createObjectURL(blob);
  let context = new (window.AudioContext || window.webkitAudioContext)();
  let source;
  audio.oncanplaythrough = () => {
    source = context.createMediaElementSource(audio);
    let dest = context.createMediaStreamDestination();
    source.connect(dest);
    rec.onresult = function (e) {
      let transcript = e.results[0][0].transcript;
      if (part === "part1") simState.part1.transcripts[idx] = transcript;
      if (part === "part2") simState.part2.transcript = transcript;
      if (part === "part3") simState.part3.transcripts[idx] = transcript;
      simRender();
    };
    rec.onerror = function () {
      if (part === "part1")
        simState.part1.transcripts[idx] = "(Could not transcribe)";
      if (part === "part2")
        simState.part2.transcript = "(Could not transcribe)";
      if (part === "part3")
        simState.part3.transcripts[idx] = "(Could not transcribe)";
      simRender();
    };
    // Start recognition
    try {
      rec.start();
      audio.play();
      setTimeout(() => {
        rec.stop();
      }, Math.min(10000, audio.duration * 1000 + 1000));
    } catch (e) {
      if (part === "part1")
        simState.part1.transcripts[idx] = "(Could not transcribe)";
      if (part === "part2")
        simState.part2.transcript = "(Could not transcribe)";
      if (part === "part3")
        simState.part3.transcripts[idx] = "(Could not transcribe)";
      simRender();
    }
  };
}
function simRestart() {
  simState = {
    step: 1,
    part1: {
      questions: [],
      recordings: [],
      blobs: [],
      transcripts: [],
      durations: [],
    },
    part2: {
      cue: null,
      recording: null,
      blob: null,
      transcript: "",
      duration: 0,
    },
    part3: {
      questions: [],
      recordings: [],
      blobs: [],
      transcripts: [],
      durations: [],
    },
    summary: { band: null, feedback: "" },
  };
  simCurrentQ = 0;
  simRender();
}
/* 8. Dark Mode */
document.getElementById("sim-dark-toggle").onclick = () => {
  simDarkMode = !simDarkMode;
  document
    .getElementById("ielts-speaking-simulator")
    .classList.toggle("sim-dark", simDarkMode);
  document.getElementById("sim-dark-toggle").textContent = simDarkMode
    ? "☀️"
    : "🌙";
};
/* 9. Init */
simRender();
/* 10. Expose downloadBlob for summary page */
window.downloadBlob = downloadBlob;
window.simRestart = simRestart;

/* ===== IELTS Speaking Scoring Module ===== */
/**
 * Evaluate IELTS Speaking answer based on transcript and audio duration.
 * @param {string} transcript - The speech-to-text transcript.
 * @param {number} audioDuration - Duration in seconds.
 * @returns {object} Scoring result with band scores and feedback.
 */
function scoreIeltsSpeaking(transcript, audioDuration) {
  // --- 1. Preprocess transcript ---
  const clean = (transcript || "").replace(/[\r\n]+/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  const totalWords = words.length;
  const uniqueWords = new Set(words.map((w) => w.toLowerCase())).size;

  // --- 2. Words Per Minute (WPM) ---
  const durationMin = Math.max(audioDuration / 60, 0.01);
  const wpm = Math.round(totalWords / durationMin);

  // --- 3. Linking phrases ---
  const linkingPhrases = [
    "In my opinion",
    "Furthermore",
    "Moreover",
    "However",
    "On the other hand",
    "For example",
    "To be honest",
  ];
  let linkingCount = 0;
  for (let phrase of linkingPhrases) {
    if (clean.includes(phrase)) linkingCount++;
  }

  // --- 4. Punctuation for grammar ---
  const grammarMarks = (clean.match(/[.?!]/g) || []).length;

  // --- 5. Pause simulation (low WPM) ---
  let pausePenalty = 0;
  if (wpm < 60) pausePenalty = 2;
  else if (wpm < 80) pausePenalty = 1;

  // --- 6. Criteria scoring ---
  // Fluency & Coherence: WPM, pausePenalty, linking phrases
  let fluencyScore = 6;
  if (wpm >= 110 && pausePenalty === 0 && linkingCount >= 2) fluencyScore = 9;
  else if (wpm >= 90 && pausePenalty === 0 && linkingCount >= 1)
    fluencyScore = 8;
  else if (wpm >= 80 && pausePenalty <= 1) fluencyScore = 7;
  else if (wpm >= 65) fluencyScore = 6;
  else fluencyScore = 5;
  fluencyScore -= pausePenalty;
  fluencyScore = Math.max(1, Math.min(9, fluencyScore));

  // Lexical Resource: unique words, total words
  let lexicalScore = 6;
  if (uniqueWords > 60) lexicalScore = 9;
  else if (uniqueWords > 45) lexicalScore = 8;
  else if (uniqueWords > 30) lexicalScore = 7;
  else if (uniqueWords > 18) lexicalScore = 6;
  else lexicalScore = 5;

  // Grammatical Range & Accuracy: punctuation, sentence count
  let grammarScore = 6;
  if (grammarMarks > 7) grammarScore = 9;
  else if (grammarMarks > 5) grammarScore = 8;
  else if (grammarMarks > 3) grammarScore = 7;
  else if (grammarMarks > 1) grammarScore = 6;
  else grammarScore = 5;

  // Pronunciation (simulated): audioDuration and WPM
  let pronunciationScore = 6;
  if (audioDuration > 90 && wpm > 80) pronunciationScore = 9;
  else if (audioDuration > 70 && wpm > 70) pronunciationScore = 8;
  else if (audioDuration > 50 && wpm > 60) pronunciationScore = 7;
  else if (audioDuration > 30) pronunciationScore = 6;
  else pronunciationScore = 5;

  // --- 7. Overall band ---
  const overallBand = Math.round(
    (fluencyScore + lexicalScore + grammarScore + pronunciationScore) / 4
  );

  // --- 8. Feedback messages ---
  function feedbackMsg(score, area) {
    if (area === "fluency") {
      if (score >= 8) return "Excellent fluency and coherence.";
      if (score >= 7) return "Good fluency. Try to reduce long pauses.";
      if (score >= 6) return "Fair fluency. Practice speaking more smoothly.";
      return "Frequent pauses. Practice speaking continuously.";
    }
    if (area === "lexical") {
      if (score >= 8) return "Excellent vocabulary range.";
      if (score >= 7) return "Good vocabulary usage.";
      if (score >= 6) return "Fair vocabulary. Try to use more varied words.";
      return "Limited vocabulary. Learn and use more words.";
    }
    if (area === "grammar") {
      if (score >= 8) return "Excellent grammatical range and accuracy.";
      if (score >= 7) return "Good grammar. Use more complex sentences.";
      if (score >= 6)
        return "Fair grammatical range. Use more complex sentences.";
      return "Frequent grammar errors. Practice sentence structure.";
    }
    if (area === "pronunciation") {
      if (score >= 8) return "Clear and natural pronunciation.";
      if (score >= 7) return "Good pronunciation. Try to speak longer.";
      if (score >= 6) return "Understandable pronunciation. Practice clarity.";
      return "Pronunciation needs improvement. Speak clearly and confidently.";
    }
    return "";
  }

  return {
    fluencyScore,
    lexicalScore,
    grammarScore,
    pronunciationScore,
    overallBand,
    feedback: {
      fluency: feedbackMsg(fluencyScore, "fluency"),
      lexical: feedbackMsg(lexicalScore, "lexical"),
      grammar: feedbackMsg(grammarScore, "grammar"),
      pronunciation: feedbackMsg(pronunciationScore, "pronunciation"),
    },
  };
}
// Expose for global use
window.scoreIeltsSpeaking = scoreIeltsSpeaking;
