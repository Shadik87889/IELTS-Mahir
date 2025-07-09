document.addEventListener("DOMContentLoaded", () => {
  // 1. DOM Elements
  const speakWordBtn = document.getElementById("speakWord");
  const userInput = document.getElementById("userInput");
  const checkWordBtn = document.getElementById("checkWord");
  const nextWordBtn = document.getElementById("nextWord");
  const feedbackDiv = document.getElementById("feedback");
  const scoreSpan = document.getElementById("score");
  const totalWordsSpan = document.getElementById("totalWords");
  const restartTestBtn = document.getElementById("restartTest");
  const wordDisplay = document.getElementById("wordDisplay"); // For showing the word after check/incorrect

  // 2. IELTS-level Words (Expand this list for a more comprehensive test!)
  const ieltsWords = [
    "accommodation",
    "achieve",
    "analyse",
    "apparent",
    "approach",
    "approximately",
    "argument",
    "assessment",
    "available",
    "benefits",
    "category",
    "challenge",
    "characteristic",
    "commercial",
    "commitment",
    "community",
    "complex",
    "consequences",
    "considerable",
    "consumption",
    "contribute",
    "convenient",
    "corporate",
    "correspond",
    "critically",
    "cultural",
    "curriculum",
    "definitely",
    "demonstrate",
    "developing",
    "diverse",
    "domestic",
    "economy",
    "effective",
    "efficient",
    "environment",
    "essential",
    "establish",
    "evidence",
    "exaggerate",
    "excellent",
    "exception",
    "expansion",
    "experience",
    "explanation",
    "facilitate",
    "factors",
    "financial",
    "flexible",
    "foundation",
    "furthermore",
    "government",
    "guarantee",
    "highlight",
    "historical",
    "illustrate",
    "immediate",
    "impact",
    "implement",
    "implications",
    "individual",
    "informal",
    "infrastructure",
    "initiative",
    "innovation",
    "institute",
    "integrated",
    "integrity",
    "intelligence",
    "intensive",
    "interact",
    "interpret",
    "involved",
    "knowledge",
    "lecturer",
    "liberal",
    "maintain",
    "management",
    "manipulate",
    "media",
    "methodology",
    "minority",
    "monitor",
    "motivation",
    "nevertheless",
    "objective",
    "obtain",
    "occasionally",
    "occupational",
    "occurred",
    "opportunity",
    "organisation",
    "orientation",
    "overall",
    "parallel",
    "participate",
    "particular",
    "perceive",
    "perform",
    "perspective",
    "phenomenon",
    "philosophy",
    "physical",
    "policy",
    "potential",
    "practical",
    "previous",
    "primary",
    "principle",
    "prioritise",
    "procedure",
    "professional",
    "promote",
    "proportion",
    "provide",
    "psychological",
    "publication",
    "qualitative",
    "quantity",
    "quarterly",
    "radiation",
    "random",
    "rational",
    "reaction",
    "recognise",
    "recommend",
    "reduction",
    "referral",
    "reflection",
    "regardless",
    "regulate",
    "relevant",
    "research",
    "resident",
    "resource",
    "response",
    "responsible",
    "revenue",
    "revision",
    "scenario",
    "schedule",
    "scholarship",
    "scientific",
    "secondary",
    "security",
    "selection",
    "significant",
    "similar",
    "simulate",
    "social",
    "sophisticated",
    "source",
    "specific",
    "statistic",
    "strategy",
    "structure",
    "subsequent",
    "subsidiary",
    "sufficient",
    "suggest",
    "superior",
    "supplementary",
    "sustain",
    "symbolise",
    "systematic",
    "technique",
    "technology",
    "temporary",
    "tendency",
    "theory",
    "therefore",
    "threaten",
    "throughout",
    "tradition",
    "transfer",
    "transform",
    "transmission",
    "tremendous",
    "ultimate",
    "undergo",
    "undertake",
    "uniform",
    "uniquely",
    "universal",
    "unlimited",
    "unnecessary",
    "urban",
    "utilize",
    "valid",
    "variable",
    "variation",
    "various",
    "vehicle",
    "verbal",
    "version",
    "vertical",
    "via",
    "vice",
    "virtually",
    "visible",
    "vision",
    "visual",
    "vital",
    "volume",
    "voluntary",
    "vulnerable",
    "whereas",
    "whereby",
    "widespread",
    "withstand",
    "workplace",
    "yield",
  ];

  // 3. Game State Variables
  let currentWordIndex = -1; // -1 means test hasn't started
  let wordsAttempted = 0;
  let correctAttempts = 0;
  let shuffledWords = []; // To store the randomized list for the current test

  // 4. Text-to-Speech (TTS) Setup
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.lang = "en-US"; // Set language to American English
  utterance.volume = 1; // From 0 to 1
  utterance.rate = 0.8; // From 0.1 to 10 (speed)
  utterance.pitch = 1; // From 0 to 2 (tone)

  // Ensure voices are loaded before trying to use them
  let voicesLoaded = false;
  synth.onvoiceschanged = () => {
    if (!voicesLoaded) {
      const voices = synth.getVoices();
      // Try to find a good English voice, e.g., Google US English or a default system voice
      utterance.voice = voices.find(
        (voice) =>
          voice.name.includes("Google US English") || voice.lang === "en-US"
      );
      if (!utterance.voice && voices.length > 0) {
        utterance.voice =
          voices.find((voice) => voice.lang === "en-US") || voices[0]; // Fallback to any en-US or first available
      }
      voicesLoaded = true;
    }
  };
  if (synth.getVoices().length > 0) {
    // If voices are already loaded
    voicesLoaded = true;
    const voices = synth.getVoices();
    utterance.voice = voices.find(
      (voice) =>
        voice.name.includes("Google US English") || voice.lang === "en-US"
    );
    if (!utterance.voice && voices.length > 0) {
      utterance.voice =
        voices.find((voice) => voice.lang === "en-US") || voices[0];
    }
  }

  // 5. Helper Functions

  // Fisher-Yates (Knuth) Shuffle for randomizing array
  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function speakWord(word) {
    if (synth.speaking) {
      synth.cancel(); // Stop any current speech
    }
    utterance.text = word;
    synth.speak(utterance);
  }

  function displayFeedback(message, type) {
    feedbackDiv.textContent = message;
    feedbackDiv.className = "feedback " + type; // Add 'correct' or 'incorrect' class
  }

  function updateScoreDisplay() {
    scoreSpan.textContent = correctAttempts;
    totalWordsSpan.textContent = wordsAttempted;
  }

  function resetTest() {
    correctAttempts = 0;
    wordsAttempted = 0;
    currentWordIndex = -1; // Reset index to prepare for first word
    shuffledWords = shuffleArray([...ieltsWords]); // Re-shuffle for a new test
    updateScoreDisplay();
    feedbackDiv.textContent = "";
    feedbackDiv.className = "feedback"; // Clear feedback styling
    userInput.value = "";
    wordDisplay.textContent = ""; // Clear displayed word
    nextWordBtn.textContent = "Start Test"; // Change button text to start
    userInput.disabled = true; // Disable input until test starts
    checkWordBtn.disabled = true; // Disable check until test starts
    speakWordBtn.disabled = false; // Allow speaking a word if needed (though nextWord will handle initial)
    // Set up the initial state for nextWord to get the first word
    speakWordBtn.removeEventListener("click", handleSpeakWord); // Remove listener to avoid double triggers
    speakWordBtn.addEventListener("click", handleSpeakWord); // Re-add to ensure it's there
  }

  function goToNextWord() {
    if (synth.speaking) {
      synth.cancel(); // Stop any current speech
    }

    userInput.value = ""; // Clear previous input
    feedbackDiv.textContent = ""; // Clear feedback
    feedbackDiv.className = "feedback"; // Reset feedback styling
    wordDisplay.textContent = ""; // Clear displayed word
    userInput.focus(); // Focus on input for convenience

    wordsAttempted++; // Increment words attempted for scoring purposes

    // If it's the first word or we've gone through all words, restart.
    // Otherwise, move to the next word in the shuffled list.
    if (currentWordIndex >= shuffledWords.length - 1) {
      alert(
        "Test Completed! Your final score is " +
          correctAttempts +
          " out of " +
          ieltsWords.length +
          "."
      );
      resetTest();
      return; // Exit function after reset
    }

    currentWordIndex++;
    const wordToSpeak = shuffledWords[currentWordIndex];
    speakWord(wordToSpeak);

    // Update button text and enable necessary controls
    nextWordBtn.textContent = "Next Word";
    userInput.disabled = false;
    checkWordBtn.disabled = false;
    updateScoreDisplay(); // Update score after word count changes
  }

  // 6. Event Handlers

  function handleSpeakWord() {
    if (currentWordIndex !== -1 && shuffledWords[currentWordIndex]) {
      speakWord(shuffledWords[currentWordIndex]);
    } else {
      // If the test hasn't started or no word is current, call goToNextWord to start it.
      goToNextWord();
    }
  }

  function handleCheckWord() {
    if (currentWordIndex === -1 || !shuffledWords[currentWordIndex]) {
      displayFeedback("Please listen to a word first!", "info");
      return;
    }

    const correctWord = shuffledWords[currentWordIndex];
    const userAnswer = userInput.value.trim().toLowerCase(); // Trim whitespace and make lowercase

    if (userAnswer === correctWord) {
      displayFeedback("Correct!", "correct");
      correctAttempts++;
    } else {
      displayFeedback(`Incorrect. The word was: "${correctWord}"`, "incorrect");
    }
    wordDisplay.textContent = correctWord; // Show the correct word
    updateScoreDisplay(); // Update score immediately
  }

  function handleNextWord() {
    goToNextWord();
  }

  function handleRestartTest() {
    if (
      confirm(
        "Are you sure you want to restart the test? Your current progress will be lost."
      )
    ) {
      resetTest();
      goToNextWord(); // Start a new test immediately after reset
    }
  }

  // Allow pressing Enter in the input field to check the word
  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission behavior
      if (!checkWordBtn.disabled) {
        // Only check if the button is enabled
        handleCheckWord();
      }
    }
  });

  // 7. Event Listeners
  speakWordBtn.addEventListener("click", handleSpeakWord);
  checkWordBtn.addEventListener("click", handleCheckWord);
  nextWordBtn.addEventListener("click", handleNextWord);
  restartTestBtn.addEventListener("click", handleRestartTest);

  // Initial setup when the page loads
  resetTest(); // Set initial state
  nextWordBtn.textContent = "Start Test"; // Ensure it says 'Start Test' initially
});
