// New JavaScript for the speaking simulator
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const nextBtn = document.getElementById("next-btn");
const promptBox = document.getElementById("prompt-box");
const transcriptOutput = document.getElementById("transcript-output");
const feedbackOutput = document.getElementById("feedback-output");
const listeningIndicator = document.getElementById("listening-indicator");
const statusMessage = document.getElementById("status-message");
const loader = document.getElementById("loader");

let mediaRecorder;
let audioChunks = [];
let isRecording = false;
let currentQuestion = 0;
let userResponses = [];

const questions = [
  "What is your name? Tell me a little about yourself.",
  "Let's talk about hobbies. What do you enjoy doing in your free time?",
  "Have you ever tried a new hobby recently? What was it, and why did you choose it?",
  "How do you think hobbies benefit people?",
  "Describe a place you have visited that you would recommend to a friend.",
  "What made this place so special to you?",
  "Do you prefer to travel alone or with others? Why?",
];

// Use the provided API key
const API_KEY = "AIzaSyCsdeFOJrU43BZmnRP5WD1pm80fZH1cxN4";

function showLoader(show) {
  if (show) {
    loader.style.display = "flex";
  } else {
    loader.style.display = "none";
  }
}

function updateUI(state) {
  switch (state) {
    case "idle":
      startBtn.textContent = "Get a Question";
      startBtn.disabled = false;
      stopBtn.disabled = true;
      nextBtn.disabled = true;
      listeningIndicator.style.display = "none";
      statusMessage.textContent = "";
      showLoader(false);
      break;
    case "speaking":
      startBtn.disabled = true;
      stopBtn.disabled = true;
      nextBtn.disabled = true;
      listeningIndicator.style.display = "none";
      statusMessage.textContent = "Speaking...";
      showLoader(false);
      break;
    case "listening":
      startBtn.disabled = true;
      stopBtn.disabled = false;
      nextBtn.disabled = true;
      listeningIndicator.style.display = "flex";
      statusMessage.textContent = "Listening for your response...";
      showLoader(false);
      break;
    case "processing":
      startBtn.disabled = true;
      stopBtn.disabled = true;
      nextBtn.disabled = true;
      listeningIndicator.style.display = "none";
      statusMessage.textContent = "Analyzing your response...";
      showLoader(true);
      break;
    case "finished":
      startBtn.textContent = "Restart Test";
      startBtn.disabled = false;
      stopBtn.disabled = true;
      nextBtn.disabled = true;
      listeningIndicator.style.display = "none";
      statusMessage.textContent = "Test complete!";
      showLoader(false);
      break;
  }
}

function showMessage(message) {
  promptBox.innerHTML = `<p>${message}</p>`;
}

// Converts PCM data to a WAV file Blob
function pcmToWav(pcmData, sampleRate) {
  const pcm16 = new Int16Array(pcmData.buffer);
  const buffer = new ArrayBuffer(44 + pcm16.length * 2);
  const view = new DataView(buffer);

  // WAV header
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + pcm16.length * 2, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, pcm16.length * 2, true);

  // Write PCM data
  let offset = 44;
  for (let i = 0; i < pcm16.length; i++, offset += 2) {
    view.setInt16(offset, pcm16[i], true);
  }

  return new Blob([view], { type: "audio/wav" });

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
}

function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function generateTTS(text) {
  const payload = {
    contents: [
      {
        parts: [{ text: text }],
      },
    ],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: "Kore" },
        },
      },
    },
    model: "gemini-2.5-flash-preview-tts",
  };
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    const part = result?.candidates?.[0]?.content?.parts?.[0];
    const audioData = part?.inlineData?.data;
    const mimeType = part?.inlineData?.mimeType;

    if (audioData && mimeType && mimeType.startsWith("audio/")) {
      const sampleRate = parseInt(mimeType.match(/rate=(\d+)/)[1], 10);
      const pcmData = base64ToArrayBuffer(audioData);
      const wavBlob = pcmToWav(new Int16Array(pcmData), sampleRate);
      const audioUrl = URL.createObjectURL(wavBlob);
      return new Audio(audioUrl);
    } else {
      throw new Error("Failed to get audio data from API");
    }
  } catch (error) {
    console.error("Error generating TTS:", error);
    showMessage("An error occurred while generating audio. Please try again.");
    return null;
  }
}

async function getTranscript(audioBase64) {
  const prompt = "Transcribe the following audio.";
  const payload = {
    contents: [
      {
        parts: [
          { text: prompt },
          { inlineData: { mimeType: "audio/webm", data: audioBase64 } },
        ],
      },
    ],
  };
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (result.candidates && result.candidates.length > 0) {
      return result.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Invalid API response structure.");
    }
  } catch (error) {
    console.error("Error getting transcript:", error);
    return "Sorry, I couldn't transcribe your audio. Please try again.";
  }
}

async function getFeedback(question, answer) {
  const prompt = `You are an IELTS speaking examiner. A student has answered the following question. Provide concise, helpful feedback on the student's answer. The feedback should be a JSON object with four keys: 'grammar', 'vocabulary', 'fluency', and 'coherence'. For each key, provide a detailed paragraph of feedback. Do not give a band score.
            Question: "${question}"
            Student's Answer: "${answer}"`;

  const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
  const payload = {
    contents: chatHistory,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          grammar: { type: "STRING" },
          vocabulary: { type: "STRING" },
          fluency: { type: "STRING" },
          coherence: { type: "STRING" },
        },
      },
    },
  };
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (result.candidates && result.candidates.length > 0) {
      const json = result.candidates[0].content.parts[0].text;
      return JSON.parse(json);
    } else {
      throw new Error("Invalid API response structure or no candidates found.");
    }
  } catch (error) {
    console.error("Error getting feedback:", error);
    return null;
  }
}

async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    audioChunks = [];
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };
    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      isRecording = false;
      updateUI("processing");

      const base64Audio = await blobToBase64(audioBlob);
      const transcript = await getTranscript(base64Audio);
      transcriptOutput.innerHTML = transcript;

      userResponses.push({
        question: questions[currentQuestion - 1],
        answer: transcript,
      });

      const feedbackJson = await getFeedback(
        questions[currentQuestion - 1],
        transcript
      );
      if (feedbackJson) {
        const feedbackHtml = `
                    <div>
                        <h4><i class="fas fa-spell-check"></i> Grammar:</h4>
                        <p>${feedbackJson.grammar}</p>
                    </div>
                    <div>
                        <h4><i class="fas fa-book-open"></i> Vocabulary:</h4>
                        <p>${feedbackJson.vocabulary}</p>
                    </div>
                    <div>
                        <h4><i class="fas fa-link"></i> Coherence:</h4>
                        <p>${feedbackJson.coherence}</p>
                    </div>
                `;
        feedbackOutput.innerHTML = feedbackHtml;
      } else {
        feedbackOutput.innerHTML = `<p>Sorry, I couldn't generate feedback at this time. Please try again.</p>`;
      }

      nextBtn.disabled = false;
      statusMessage.textContent =
        'Response analyzed. Click "Next Question" to continue.';
    };

    mediaRecorder.start();
    isRecording = true;
    updateUI("listening");
  } catch (error) {
    console.error("Error starting microphone:", error);
    showMessage(
      "Permission to use the microphone was denied. Please allow it in your browser settings to continue."
    );
    updateUI("idle");
  }
}

async function startTest() {
  currentQuestion = 0;
  userResponses = [];
  startNextQuestion();
}

async function startNextQuestion() {
  if (isRecording) {
    mediaRecorder.stop();
  }

  if (currentQuestion >= questions.length) {
    showMessage("Test complete! You have answered all the questions.");
    transcriptOutput.innerHTML = "You have completed all the questions.";
    feedbackOutput.innerHTML = "Practice more to improve your score!";
    updateUI("finished");
    nextBtn.disabled = true;
    return;
  }

  transcriptOutput.innerHTML = "...";
  feedbackOutput.innerHTML = "...";
  updateUI("speaking");

  const currentQuestionText = questions[currentQuestion];
  showMessage(`Question ${currentQuestion + 1}: ${currentQuestionText}`);

  const audio = await generateTTS(currentQuestionText);
  if (audio) {
    audio.play();
    audio.onended = () => {
      startRecording();
    };
  } else {
    updateUI("idle");
  }
  currentQuestion++;
}

function stopTest() {
  if (isRecording) {
    mediaRecorder.stop();
  }
  showMessage("Test stopped. Click 'Get a Question' to begin again.");
  updateUI("idle");
}

startBtn.addEventListener("click", () => {
  if (startBtn.textContent === "Restart Test") {
    startTest();
  } else {
    startNextQuestion();
  }
});
stopBtn.addEventListener("click", stopTest);
nextBtn.addEventListener("click", startNextQuestion);

updateUI("idle");
