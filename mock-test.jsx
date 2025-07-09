import React, { useState, useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

// Import Lucide React icons (ensure CDN is loaded in HTML)
// <script src="https://unpkg.com/lucide-react@latest"></script> will be needed for this if not in a full build environment.
// For this environment, we'll assume a global 'lucide' object or inline SVG for simplicity in the prototype.
// For production, you'd `npm install lucide-react` and import specific icons.
const MicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mic"
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);
const HeadphonesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-headphones"
  >
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
    <path d="M18 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
    <path d="M7 14v-3a9 9 0 0 1 18 0v3" />
  </svg>
);
const BookOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-book-open"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const FileTextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-file-text"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);
const ActivityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-activity"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

// Firebase configuration and app ID (will be provided by the Canvas environment)
const appId = typeof __app_id !== "undefined" ? __app_id : "default-app-id";
const firebaseConfig =
  typeof __firebase_config !== "undefined" ? JSON.parse(__firebase_config) : {};
const initialAuthToken =
  typeof __initial_auth_token !== "undefined" ? __initial_auth_token : null;

// Initialize Firebase (will be done once in the App component's useEffect)
let app;
let db;
let auth;

// --- Utility Components ---

// Basic Modal for messages (replaces alert/confirm)
const Modal = ({ show, title, message, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm transform scale-95 animate-zoom-in">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
        >
          Got It!
        </button>
      </div>
    </div>
  );
};

// Loading Spinner
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
    <p className="ml-3 text-lg text-gray-700">Loading...</p>
  </div>
);

// --- Individual IELTS Module Components ---

const ListeningTest = ({ onFinishTest, testTitle }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes for listening
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const timerRef = useRef(null);
  const audioElementRef = useRef(null); // Ref to hold the HTML Audio Element

  // Placeholder for audio data (in a real app, this would be an actual audio file)
  // Using a placeholder audio URL for actual playback demonstration.
  // Replace with a real audio file URL for a complete experience.
  const audioUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Example MP3 URL

  const questions = [
    {
      id: "L1",
      type: "multiple-choice",
      audioPrompt:
        "You will hear a conversation between a student and a university administrator about course registration.",
      questionText:
        "1. What is the main reason the student wants to change courses?",
      options: [
        "a) The current course is too difficult.",
        "b) The timetable clashes with another commitment.",
        "c) They are more interested in a different subject.",
        "d) The lecturer is unhelpful.",
      ],
      correctAnswer: "b", // For self-checking in prototype
    },
    {
      id: "L2",
      type: "fill-in-the-blank",
      audioPrompt:
        "Now, you will hear a lecture about renewable energy sources.",
      questionText: "2. Solar panels convert sunlight into __________ energy.",
      // In a real system, keywords or phrases for validation
      correctAnswer: "electrical",
    },
    {
      id: "L3",
      type: "matching",
      audioPrompt:
        "Listen to a discussion about different types of local businesses.",
      questionText: "3. Match the business type to its primary offering:",
      items: [
        { key: "A. Bakery", value: "" },
        { key: "B. Bookstore", value: "" },
        { key: "C. Florist", value: "" },
      ],
      options: [
        "I. Fresh flowers and arrangements",
        "II. Baked goods and pastries",
        "III. Novels and academic texts",
      ],
      correctMapping: { A: "II", B: "III", C: "I" }, // For self-checking
    },
    {
      id: "L4",
      type: "short-answer",
      audioPrompt: "You will hear a report about urban development.",
      questionText:
        "4. What is one major challenge of rapid urbanization mentioned?",
      correctAnswer: "housing shortages",
    },
  ];

  useEffect(() => {
    // Initialize audio element
    audioElementRef.current = new Audio(audioUrl);
    audioElementRef.current.preload = "auto"; // Attempt to preload audio

    // Event listener for when audio finishes playing
    const handleAudioEnded = () => {
      setIsPlaying(false);
      console.log("Audio finished playing.");
    };

    audioElementRef.current.addEventListener("ended", handleAudioEnded);

    // Start exam timer on component mount
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          handleFinishTest();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup on unmount
    return () => {
      clearInterval(timerRef.current);
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current.removeEventListener("ended", handleAudioEnded);
        audioElementRef.current = null; // Clear the ref
      }
    };
  }, [audioUrl]); // Re-run if audioUrl changes

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setModalContent({
        title: "End of Listening Section",
        message:
          "You have completed all questions in the Listening section. Please submit your answers.",
      });
      setShowModal(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handlePlayPause = () => {
    if (!audioElementRef.current) {
      console.error("Audio element not initialized.");
      setModalContent({
        title: "Audio Error",
        message: "Audio is not ready. Please try again.",
      });
      setShowModal(true);
      return;
    }

    if (isPlaying) {
      audioElementRef.current.pause();
      console.log("Audio paused.");
    } else {
      audioElementRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
        setModalContent({
          title: "Audio Playback Error",
          message:
            "Could not play audio. Please ensure your browser allows autoplay or try interacting with the page first.",
        });
        setShowModal(true);
      });
      console.log("Audio playing...");
    }
    setIsPlaying((prev) => !prev);
  };

  const handleFinishTest = async () => {
    clearInterval(timerRef.current);
    if (audioElementRef.current) {
      audioElementRef.current.pause(); // Stop audio if still playing
    }
    // In a real system, you would send answers to the backend for scoring.
    // Here, we just simulate the process.
    setModalContent({
      title: "Submitting Listening Answers",
      message:
        "Your Listening answers are being processed. This is where AI scoring would happen.",
    });
    setShowModal(true);

    // Simulate AI scoring
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

    setModalContent({
      title: "Listening Score Report",
      message:
        "Thank you for completing the Listening test! Your score report will be available in your dashboard (conceptually). This section is automatically graded by the system.",
    });
    setShowModal(true);
    onFinishTest(); // Go back to main menu or next section
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-4xl mx-auto my-8 animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">
        Listening Test
      </h2>
      <p className="text-xl text-gray-700 mb-8 text-center font-medium">
        {testTitle}
      </p>

      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-100">
        <div className="text-lg font-semibold text-gray-700 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6zm-3.707 5.707a1 1 0 001.414-1.414L9 8.586V7a1 1 0 10-2 0v2a1 1 0 00.293.707l3 3z"
              clipRule="evenodd"
            ></path>
          </svg>
          Time Left:{" "}
          <span className="text-red-600 ml-1">{formatTime(timeRemaining)}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePlayPause}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 px-5 rounded-full shadow-lg transition duration-300 flex items-center transform hover:scale-105"
            // Disable if audio element isn't ready or URL is bad
            disabled={
              !audioElementRef.current ||
              !audioElementRef.current.canPlayType("audio/mpeg")
            }
          >
            <HeadphonesIcon className="w-5 h-5 mr-2" />
            {isPlaying ? "Pause Audio" : "Play Audio"}
          </button>
          {!audioElementRef.current && <LoadingSpinner />}
        </div>
      </div>

      <div className="mb-8 bg-blue-50 p-5 rounded-xl border border-blue-200 shadow-inner">
        <p className="text-blue-800 text-lg font-semibold leading-relaxed">
          <span className="font-bold text-blue-900 mr-2">Audio Prompt:</span>{" "}
          {currentQ.audioPrompt}
        </p>
      </div>

      <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-inner">
        <h3 className="text-2xl font-bold text-gray-800 mb-5">
          {currentQ.questionText}
        </h3>
        {currentQ.type === "multiple-choice" && (
          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <label
                key={index}
                className="flex items-center text-gray-700 cursor-pointer bg-white p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition duration-200 shadow-sm"
              >
                <input
                  type="radio"
                  name={currentQ.id}
                  value={option.charAt(0)}
                  checked={answers[currentQ.id] === option.charAt(0)}
                  onChange={handleInputChange}
                  className="form-radio h-5 w-5 text-blue-600 rounded-full border-gray-300 focus:ring-blue-500 cursor-pointer"
                />
                <span className="ml-4 text-lg">{option}</span>
              </label>
            ))}
          </div>
        )}

        {currentQ.type === "fill-in-the-blank" && (
          <input
            type="text"
            name={currentQ.id}
            value={answers[currentQ.id] || ""}
            onChange={handleInputChange}
            placeholder="Type your answer here..."
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 text-gray-800 text-lg shadow-sm"
          />
        )}

        {currentQ.type === "matching" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-gray-700 mb-3 text-lg">Items:</p>
              <ul className="space-y-2">
                {currentQ.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 bg-white p-3 rounded-lg border border-gray-200 shadow-sm"
                  >
                    {item.key}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-700 mb-3 text-lg">
                Match Options:
              </p>
              {currentQ.items.map((item, index) => (
                <div key={index} className="flex items-center mb-3">
                  <span className="mr-3 text-gray-700 font-medium">
                    {item.key.split(".")[0]}:
                  </span>
                  <select
                    name={`${currentQ.id}-${item.key.split(".")[0]}`} // e.g., L3-A
                    value={
                      answers[`${currentQ.id}-${item.key.split(".")[0]}`] || ""
                    }
                    onChange={handleInputChange}
                    className="flex-grow p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 text-gray-800 shadow-sm"
                  >
                    <option value="">Select an option</option>
                    {currentQ.options.map((opt, optIndex) => (
                      <option key={optIndex} value={opt.charAt(0)}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentQ.type === "short-answer" && (
          <textarea
            name={currentQ.id}
            value={answers[currentQ.id] || ""}
            onChange={handleInputChange}
            placeholder="Write your short answer here (max 3 words usually)..."
            rows="3"
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 text-gray-800 text-lg shadow-sm resize-y"
          ></textarea>
        )}
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-xl hover:bg-gray-400 transition duration-300 ${
            currentQuestion === 0
              ? "opacity-50 cursor-not-allowed"
              : "shadow-md hover:shadow-lg transform hover:scale-105"
          }`}
        >
          <ChevronLeftIcon className="inline-block mr-2" /> Previous
        </button>
        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
          >
            Next Question &rarr;
          </button>
        ) : (
          <button
            onClick={handleFinishTest}
            className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
          >
            Submit Listening
          </button>
        )}
      </div>

      <Modal
        show={showModal}
        title={modalContent.title}
        message={modalContent.message}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

const ReadingTest = ({ onFinishTest, testTitle }) => {
  const [currentPassage, setCurrentPassage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes for reading
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const timerRef = useRef(null);

  const passages = [
    {
      id: "R1",
      title: "The Impact of Artificial Intelligence on Modern Society",
      text: `Artificial intelligence (AI) is rapidly transforming various aspects of modern society, from healthcare and education to transportation and entertainment. Its ability to process vast amounts of data and identify complex patterns has led to significant advancements, promising a future where tasks are automated, decisions are data-driven, and human capabilities are augmented. However, alongside these promising developments, AI also presents a range of challenges that require careful consideration.

One of the primary impacts of AI is its potential to revolutionize industries by automating repetitive and dangerous tasks. In manufacturing, AI-powered robots are increasing efficiency and precision, while in logistics, AI algorithms optimize delivery routes and manage inventory. This automation can lead to increased productivity and economic growth, but it also raises concerns about job displacement and the need for workforce retraining. Societies must adapt to these shifts by investing in education and developing new roles that leverage human creativity and critical thinking skills.

Furthermore, AI's application in data analysis has profound implications for decision-making. Machine learning models can analyze medical images to detect diseases earlier, predict market trends with greater accuracy, and personalize educational experiences. The ethical implications of AI, particularly concerning data privacy, bias in algorithms, and accountability for AI-driven decisions, are paramount. Ensuring fairness, transparency, and human oversight in AI systems is crucial to building public trust and preventing unintended negative consequences.

The integration of AI into daily life also brings about changes in human interaction and communication. Virtual assistants and chatbots are becoming increasingly sophisticated, providing instant information and support. While these tools offer convenience, there is a discussion about the extent to which human connection might be diminished. Balancing the benefits of AI with the preservation of human values and interactions will be key to shaping a future where AI serves humanity effectively and ethically.`,
      questions: [
        {
          id: "R1Q1",
          type: "multiple-choice",
          questionText:
            "1. What is one of the primary impacts of AI mentioned in the text?",
          options: [
            "a) Its ability to diminish human connection.",
            "b) Its potential to revolutionize industries by automating tasks.",
            "c) Its contribution to increased job displacement only.",
            "d) Its exclusive focus on entertainment applications.",
          ],
          correctAnswer: "b",
        },
        {
          id: "R1Q2",
          type: "true-false-not-given",
          statement:
            "2. The text suggests that AI will lead to a complete disappearance of human jobs.",
          correctAnswer: "F", // False
        },
        {
          id: "R1Q3",
          type: "summary-completion",
          prompt: "3. Complete the summary below:",
          summaryText:
            "AI is changing various sectors, offering increased efficiency and precision through automation. However, this raises concerns about job displacement, necessitating investments in ___________ and the development of new roles.",
          correctAnswer: "education",
        },
      ],
    },
    {
      id: "R2",
      title: "The History of the Olympic Games",
      text: `The Olympic Games, a grand international multi-sport event, trace their origins back to ancient Greece, where they were held every four years in Olympia. The first recorded Olympic Games took place in 776 BC, and they continued for nearly 12 centuries until Emperor Theodosius I abolished them in 393 AD, deeming them a pagan festival. These ancient games were primarily religious, dedicated to the god Zeus, and featured a range of athletic contests, including running, wrestling, and chariot racing. Winners were crowned with olive wreaths and hailed as heroes, bringing immense prestige to their hometowns.

The revival of the Olympic Games in their modern form is attributed to Pierre de Coubertin, a French educator and historian. Inspired by the ancient Greek ideals of physical and moral excellence, Coubertin proposed the revival of the Games at a congress in Paris in 1894. His vision was to create an international sporting event that would promote peace and understanding among nations through athletic competition. The International Olympic Committee (IOC) was established, and the first modern Olympic Games were held in Athens, Greece, in 1896.

Since their revival, the modern Olympic Games have grown exponentially, becoming the world's foremost sporting spectacle. They have faced numerous challenges, including political boycotts, financial difficulties, and the complexities of hosting a massive international event. However, the core principles of friendship, respect, and excellence continue to guide the movement. The Games now encompass both Summer and Winter editions, featuring thousands of athletes from almost every country in the world competing in a vast array of sports. The legacy of the Olympics extends beyond sport, influencing urban development, national identity, and global diplomacy.`,
      questions: [
        {
          id: "R2Q1",
          type: "matching-headings",
          prompt: "4. Match the following headings to the paragraphs:",
          headings: [
            "I. The Ancient Origins",
            "II. Modern Revival and Growth",
            "III. Olympic Legacy Beyond Sport",
          ],
          paragraphMap: {
            "Paragraph 1": "I",
            "Paragraph 2": "II",
            "Paragraph 3": "III",
          },
          correctMapping: {
            "Paragraph 1": "I",
            "Paragraph 2": "II",
            "Paragraph 3": "III",
          },
        },
        {
          id: "R2Q2",
          type: "short-answer",
          questionText:
            "5. Who is credited with the revival of the modern Olympic Games?",
          correctAnswer: "Pierre de Coubertin",
        },
      ],
    },
  ];

  useEffect(() => {
    // Start timer on component mount
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          handleFinishTest();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextPassage = () => {
    if (currentPassage < passages.length - 1) {
      setCurrentPassage((prev) => prev + 1);
    } else {
      setModalContent({
        title: "End of Reading Section",
        message:
          "You have completed all passages in the Reading section. Please submit your answers.",
      });
      setShowModal(true);
    }
  };

  const handlePreviousPassage = () => {
    if (currentPassage > 0) {
      setCurrentPassage((prev) => prev - 1);
    }
  };

  const handleFinishTest = async () => {
    clearInterval(timerRef.current);
    // In a real system, you would send answers to the backend for scoring.
    setModalContent({
      title: "Submitting Reading Answers",
      message:
        "Your Reading answers are being processed. This is where AI scoring would happen.",
    });
    setShowModal(true);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

    setModalContent({
      title: "Reading Score Report",
      message:
        "Thank you for completing the Reading test! Your score report will be available in your dashboard (conceptually). This section is automatically graded by the system.",
    });
    setShowModal(true);
    onFinishTest(); // Go back to main menu or next section
  };

  const currentP = passages[currentPassage];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-6xl mx-auto my-8 animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">
        Reading Test
      </h2>
      <p className="text-xl text-gray-700 mb-8 text-center font-medium">
        {testTitle}
      </p>

      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-100">
        <div className="text-lg font-semibold text-gray-700 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6zm-3.707 5.707a1 1 0 001.414-1.414L9 8.586V7a1 1 0 10-2 0v2a1 1 0 00.293.707l3 3z"
              clipRule="evenodd"
            ></path>
          </svg>
          Time Left:{" "}
          <span className="text-red-600 ml-1">{formatTime(timeRemaining)}</span>
        </div>
        <div className="text-lg font-semibold text-gray-700">
          Passage{" "}
          <span className="font-bold text-gray-800">{currentPassage + 1}</span>{" "}
          of <span className="font-bold text-gray-800">{passages.length}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Reading Passage Area */}
        <div className="bg-blue-50 p-6 rounded-2xl overflow-y-auto max-h-[70vh] shadow-inner border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-800 mb-5">
            {currentP.title}
          </h3>
          {currentP.text.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 mb-4 leading-relaxed text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Questions Area */}
        <div className="bg-gray-50 p-6 rounded-2xl overflow-y-auto max-h-[70vh] shadow-inner border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-5">
            Questions for Passage {currentPassage + 1}
          </h3>
          {currentP.questions.map((q, qIndex) => (
            <div
              key={q.id}
              className="mb-8 pb-6 border-b border-gray-200 last:border-b-0"
            >
              <p className="text-lg font-semibold text-gray-800 mb-4">
                {q.questionText}
              </p>

              {q.type === "multiple-choice" && (
                <div className="space-y-3">
                  {q.options.map((option, optIndex) => (
                    <label
                      key={optIndex}
                      className="flex items-center text-gray-700 cursor-pointer bg-white p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition duration-200 shadow-sm"
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={option.charAt(0)}
                        checked={answers[q.id] === option.charAt(0)}
                        onChange={handleInputChange}
                        className="form-radio h-5 w-5 text-blue-600 rounded-full border-gray-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="ml-4 text-lg">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {q.type === "true-false-not-given" && (
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <p className="font-semibold text-gray-700 mb-3 text-lg">
                    Statement: "{q.statement}"
                  </p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center text-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        value="T"
                        checked={answers[q.id] === "T"}
                        onChange={handleInputChange}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="ml-2 text-lg">True</span>
                    </label>
                    <label className="inline-flex items-center text-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        value="F"
                        checked={answers[q.id] === "F"}
                        onChange={handleInputChange}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="ml-2 text-lg">False</span>
                    </label>
                    <label className="inline-flex items-center text-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        value="NG"
                        checked={answers[q.id] === "NG"}
                        onChange={handleInputChange}
                        className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="ml-2 text-lg">Not Given</span>
                    </label>
                  </div>
                </div>
              )}

              {q.type === "summary-completion" && (
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <p className="italic text-gray-600 mb-3 text-lg">
                    {q.prompt}
                  </p>
                  <p className="bg-gray-100 p-3 rounded-lg border border-gray-200 mb-3 text-gray-700 leading-relaxed text-lg font-medium">
                    {q.summaryText.replace("___________", "_____")}
                  </p>
                  <input
                    type="text"
                    name={q.id}
                    value={answers[q.id] || ""}
                    onChange={handleInputChange}
                    placeholder="Enter missing word(s)..."
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 text-gray-800 text-lg shadow-sm"
                  />
                </div>
              )}

              {q.type === "matching-headings" && (
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <p className="italic text-gray-600 mb-3 text-lg">
                    {q.prompt}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold text-gray-700 mb-3 text-lg">
                        Headings:
                      </p>
                      <ul className="space-y-1">
                        {q.headings.map((heading, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-gray-700 text-base py-1"
                          >
                            {heading}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 mb-3 text-lg">
                        Match to Paragraph:
                      </p>
                      {Object.keys(q.paragraphMap).map((paraKey, pIndex) => (
                        <div key={pIndex} className="flex items-center mb-3">
                          <span className="mr-3 text-gray-700 font-medium">
                            {paraKey}:
                          </span>
                          <select
                            name={`${q.id}-${paraKey.replace(" ", "")}`}
                            value={
                              answers[`${q.id}-${paraKey.replace(" ", "")}`] ||
                              ""
                            }
                            onChange={handleInputChange}
                            className="flex-grow p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 text-gray-800 shadow-sm"
                          >
                            <option value="">Select a heading</option>
                            {q.headings.map((heading, hIndex) => (
                              <option
                                key={hIndex}
                                value={heading.split(".")[0]}
                              >
                                {heading}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {q.type === "short-answer" && (
                <textarea
                  name={q.id}
                  value={answers[q.id] || ""}
                  onChange={handleInputChange}
                  placeholder="Write your short answer here..."
                  rows="3"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 text-gray-800 text-lg shadow-sm resize-y"
                ></textarea>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={handlePreviousPassage}
          disabled={currentPassage === 0}
          className={`bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-xl hover:bg-gray-400 transition duration-300 ${
            currentPassage === 0
              ? "opacity-50 cursor-not-allowed"
              : "shadow-md hover:shadow-lg transform hover:scale-105"
          }`}
        >
          <ChevronLeftIcon className="inline-block mr-2" /> Previous
        </button>
        {currentPassage < passages.length - 1 ? (
          <button
            onClick={handleNextPassage}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
          >
            Next Passage &rarr;
          </button>
        ) : (
          <button
            onClick={handleFinishTest}
            className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
          >
            Submit Reading
          </button>
        )}
      </div>

      <Modal
        show={showModal}
        title={modalContent.title}
        message={modalContent.message}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

const WritingTest = ({ onFinishTest, testTitle }) => {
  const [task1Answer, setTask1Answer] = useState("");
  const [task2Answer, setTask2Answer] = useState("");
  const [task1WordCount, setTask1WordCount] = useState(0);
  const [task2WordCount, setTask2WordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes for writing
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Start timer on component mount
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          handleFinishTest();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const calculateWordCount = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter((word) => word !== "").length;
  };

  const handleTask1Change = (e) => {
    const text = e.target.value;
    setTask1Answer(text);
    setTask1WordCount(calculateWordCount(text));
  };

  const handleTask2Change = (e) => {
    const text = e.target.value;
    setTask2Answer(text);
    setTask2WordCount(calculateWordCount(text));
  };

  const handleFinishTest = async () => {
    clearInterval(timerRef.current);
    setIsLoadingFeedback(true);
    setFeedback(null);

    setModalContent({
      title: "Submitting Writing Responses",
      message:
        "Your writing is being sent for advanced AI evaluation. This may take a moment.",
    });
    setShowModal(true);

    try {
      // Simulate API call to AI grading service
      const mockFeedback = await simulateAIGrading(task1Answer, task2Answer);

      setFeedback(mockFeedback);
      setModalContent({
        title: "AI Feedback Generated",
        message:
          "Your detailed AI-generated feedback and estimated band score are now available below.",
      });
      setShowModal(true);
    } catch (error) {
      console.error("Error during AI grading:", error);
      setModalContent({
        title: "Grading Error",
        message: `There was an error generating feedback: ${error.message}. Please check your input or try again later.`,
      });
      setShowModal(true);
    } finally {
      setIsLoadingFeedback(false);
    }
  };

  // Simulate AI grading using Gemini API
  const simulateAIGrading = async (task1, task2) => {
    const prompt = `Evaluate the following IELTS Writing Task 1 and Task 2 responses. Provide a detailed band score estimation (e.g., Band 6.5) and specific feedback based on IELTS criteria (Task Achievement/Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy). Highlight strengths and areas for improvement for each task.

Task 1 Response:
"${task1}"

Task 2 Response:
"${task2}"

Provide the response in a structured JSON format with fields: 'task1Feedback', 'task2Feedback', 'overallEstimatedBand', 'suggestionsForImprovement'.`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = {
      contents: chatHistory,
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            task1Feedback: { type: "STRING" },
            task2Feedback: { type: "STRING" },
            overallEstimatedBand: { type: "STRING" },
            suggestionsForImprovement: { type: "STRING" },
          },
          propertyOrdering: [
            "task1Feedback",
            "task2Feedback",
            "overallEstimatedBand",
            "suggestionsForImprovement",
          ],
        },
      },
    };
    const apiKey = "AIzaSyCsdeFOJrU43BZmnRP5WD1pm80fZH1cxN4"; // Use the provided API key
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    console.log("Calling Gemini API for writing feedback...");
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log("Gemini API response:", result);

    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      const jsonString = result.candidates[0].content.parts[0].text;
      try {
        return JSON.parse(jsonString);
      } catch (parseError) {
        console.error(
          "Failed to parse AI response JSON:",
          parseError,
          jsonString
        );
        throw new Error("Invalid AI response format.");
      }
    } else {
      throw new Error("No valid AI response received.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-5xl mx-auto my-8 animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">
        Writing Test
      </h2>
      <p className="text-xl text-gray-700 mb-8 text-center font-medium">
        {testTitle}
      </p>

      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-100">
        <div className="text-lg font-semibold text-gray-700 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6zm-3.707 5.707a1 1 0 001.414-1.414L9 8.586V7a1 1 0 10-2 0v2a1 1 0 00.293.707l3 3z"
              clipRule="evenodd"
            ></path>
          </svg>
          Time Left:{" "}
          <span className="text-red-600 ml-1">{formatTime(timeRemaining)}</span>
        </div>
        <div className="text-gray-700 font-semibold text-right">
          Min. Word Count: Task 1 (
          <span
            className={task1WordCount < 150 ? "text-red-500" : "text-green-600"}
          >
            150
          </span>
          ), Task 2 (
          <span
            className={task2WordCount < 250 ? "text-red-500" : "text-green-600"}
          >
            250
          </span>
          )
        </div>
      </div>

      {/* Task 1 */}
      <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Task 1: Report/Letter{" "}
          <span className="text-base font-normal text-gray-600">
            (approx. 20 minutes)
          </span>
        </h3>
        <p className="text-gray-700 mb-5 bg-blue-50 p-4 rounded-xl border border-blue-200 leading-relaxed text-lg shadow-sm">
          *The graph below shows the percentage of the population aged 65 and
          over in three countries between 1980 and 2040. Summarise the
          information by selecting and reporting the main features, and make
          comparisons where relevant.*
          <br />
          <br />
          <img
            src="https://placehold.co/400x200/cccccc/ffffff?text=SAMPLE+GRAPH"
            alt="Sample IELTS Graph Placeholder"
            className="rounded-lg my-3 mx-auto shadow-md"
          />
          (Note: In a real system, you'd see the actual graph image here.)
        </p>
        <textarea
          value={task1Answer}
          onChange={handleTask1Change}
          placeholder="Write your Task 1 response here. Aim for at least 150 words."
          rows="10"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 text-gray-800 text-lg shadow-sm resize-y"
        ></textarea>
        <div className="text-right text-base text-gray-600 mt-3">
          Word count:{" "}
          <span
            className={
              task1WordCount < 150
                ? "text-red-500 font-bold"
                : "text-green-600 font-bold"
            }
          >
            {task1WordCount}
          </span>
        </div>
      </div>

      {/* Task 2 */}
      <div className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Task 2: Essay{" "}
          <span className="text-base font-normal text-gray-600">
            (approx. 40 minutes)
          </span>
        </h3>
        <p className="text-gray-700 mb-5 bg-blue-50 p-4 rounded-xl border border-blue-200 leading-relaxed text-lg shadow-sm">
          *Some people believe that the best way to improve public health is by
          increasing the number of sports facilities. Others, however, believe
          that this is not enough and that other measures are required. Discuss
          both these views and give your own opinion.*
        </p>
        <textarea
          value={task2Answer}
          onChange={handleTask2Change}
          placeholder="Write your Task 2 essay here. Aim for at least 250 words."
          rows="15"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-300 text-gray-800 text-lg shadow-sm resize-y"
        ></textarea>
        <div className="text-right text-base text-gray-600 mt-3">
          Word count:{" "}
          <span
            className={
              task2WordCount < 250
                ? "text-red-500 font-bold"
                : "text-green-600 font-bold"
            }
          >
            {task2WordCount}
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleFinishTest}
          disabled={isLoadingFeedback}
          className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white font-bold py-4 px-10 rounded-2xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105 text-xl flex items-center justify-center"
        >
          {isLoadingFeedback && <LoadingSpinner />}
          {!isLoadingFeedback && (
            <>
              <ActivityIcon className="w-6 h-6 mr-3" /> Get AI Writing Feedback
            </>
          )}
        </button>
      </div>

      {feedback && (
        <div className="mt-16 bg-green-50 p-8 rounded-3xl shadow-xl border border-green-200 animate-fade-in">
          <h3 className="text-3xl font-extrabold text-green-800 mb-6 text-center tracking-tight">
            AI Writing Feedback
          </h3>
          <p className="text-center text-2xl font-bold text-green-700 mb-8">
            Estimated Overall Band:{" "}
            <span className="bg-green-200 px-4 py-2 rounded-lg">
              {feedback.overallEstimatedBand}
            </span>
          </p>

          <div className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <FileTextIcon className="w-5 h-5 mr-2 text-blue-500" /> Task 1
              Feedback:
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {feedback.task1Feedback}
            </p>
          </div>

          <div className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <FileTextIcon className="w-5 h-5 mr-2 text-blue-500" /> Task 2
              Feedback:
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {feedback.task2Feedback}
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <ActivityIcon className="w-5 h-5 mr-2 text-blue-500" />{" "}
              Suggestions for Improvement:
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {feedback.suggestionsForImprovement}
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={onFinishTest}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
            >
              Back to Module Tests
            </button>
          </div>
        </div>
      )}

      <Modal
        show={showModal}
        title={modalContent.title}
        message={modalContent.message}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

const SpeakingTest = ({ onFinishTest, testTitle }) => {
  const [currentPart, setCurrentPart] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recordingStatus, setRecordingStatus] = useState("idle"); // idle, recording, processing
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // Max 15 minutes for speaking test
  const [responseTimer, setResponseTimer] = useState(0); // Timer for individual response
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const timerRef = useRef(null);
  const responseTimerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const questions = useRef({
    // Using ref for questions as they are static and won't trigger re-renders
    1: [
      "Let's talk about your hometown. Where are you from?",
      "Do you like living there? Why or why not?",
      "What is your favorite place in your hometown?",
      "How has your hometown changed over the years?",
      "Do you think you will always live in your hometown?",
    ],
    2: [
      {
        cueCard:
          "Describe a successful person you know. You should say: who this person is; what they do; what makes them successful; and explain why you admire them.",
        prepTime: 60, // seconds
        talkTime: 120, // seconds
      },
    ],
    3: [
      "Let's discuss success in general. What qualities do you think are essential for success in modern society?",
      "Do you think success is always about wealth and status?",
      "How important is education in achieving success?",
      "What role does luck play in people's success?",
      "Do you believe that everyone has an equal opportunity to succeed?",
    ],
  });

  const currentQuestions = questions.current[currentPart];
  const currentQuestion =
    currentPart === 2
      ? currentQuestions[0]
      : currentQuestions[currentQuestionIndex];

  useEffect(() => {
    // Overall test timer
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          handleFinishTest();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup overall timer on unmount
    return () => {
      clearInterval(timerRef.current);
      clearInterval(responseTimerRef.current);
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === "recording"
      ) {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startResponseTimer = (duration) => {
    clearInterval(responseTimerRef.current);
    setResponseTimer(duration);
    responseTimerRef.current = setInterval(() => {
      setResponseTimer((prev) => {
        if (prev <= 1) {
          clearInterval(responseTimerRef.current);
          if (recordingStatus === "recording") {
            stopRecording(); // Automatically stop recording when response time is up
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopAllTimers = () => {
    clearInterval(timerRef.current);
    clearInterval(responseTimerRef.current);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        setRecordingStatus("processing");
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        }); // Use WAV for better STT compatibility
        const base64Audio = await blobToBase64(audioBlob);

        // Send to AI for processing
        await sendAudioToAI(base64Audio);
        stream.getTracks().forEach((track) => track.stop()); // Stop microphone
        setRecordingStatus("idle"); // Reset for next question/part
      };

      mediaRecorderRef.current.start();
      setRecordingStatus("recording");
      console.log("Recording started...");
      // Start response timer based on part
      if (currentPart === 1) {
        startResponseTimer(30); // ~30 seconds for Part 1 questions
      } else if (currentPart === 2) {
        startResponseTimer(currentQuestion.talkTime);
      } else if (currentPart === 3) {
        startResponseTimer(60); // ~60 seconds for Part 3 questions
      }
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setModalContent({
        title: "Microphone Access Denied",
        message:
          "Please allow microphone access to proceed with the Speaking test.",
      });
      setShowModal(true);
      setRecordingStatus("idle");
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      clearInterval(responseTimerRef.current);
      setResponseTimer(0);
      console.log("Recording stopped...");
    }
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]); // Get base64 string without data:mimeType
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const sendAudioToAI = async (base64Audio) => {
    setIsLoadingFeedback(true);
    setFeedback(null);

    setModalContent({
      title: "Processing Speech",
      message: "Your response is being analyzed by our AI. Please wait...",
    });
    setShowModal(true);

    try {
      // Step 1: Transcribe audio using Gemini-2.0-flash with inlineData
      const transcriptionPrompt = "Transcribe the following audio:";
      let chatHistory = [];
      chatHistory.push({
        role: "user",
        parts: [
          { text: transcriptionPrompt },
          {
            inlineData: {
              mimeType: "audio/wav", // Ensure correct MIME type
              data: base64Audio,
            },
          },
        ],
      });
      const transcriptionPayload = { contents: chatHistory };
      const apiKey = "AIzaSyCsdeFOJrU43BZmnRP5WD1pm80fZH1cxN4"; // Use the provided API key
      const transcriptionApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      console.log("Calling Gemini API for transcription...");
      const transcriptionResponse = await fetch(transcriptionApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transcriptionPayload),
      });

      const transcriptionResult = await transcriptionResponse.json();
      console.log("Transcription result:", transcriptionResult);

      let transcribedText = "Could not transcribe your speech.";
      if (
        transcriptionResult.candidates &&
        transcriptionResult.candidates.length > 0 &&
        transcriptionResult.candidates[0].content &&
        transcriptionResult.candidates[0].content.parts &&
        transcriptionResult.candidates[0].content.parts.length > 0
      ) {
        transcribedText =
          transcriptionResult.candidates[0].content.parts[0].text;
      }

      // Step 2: Evaluate transcribed text for IELTS Speaking criteria
      const evaluationPrompt = `You are an IELTS examiner. Evaluate the following spoken response to the question: "${
        currentQuestion.cueCard || currentQuestion
      }".
      Response: "${transcribedText}"

      Provide a detailed band score estimation (e.g., Band 6.5) for Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation. Then give an overall estimated band score. Also, provide specific feedback on strengths and areas for improvement, and suggest one or two alternative ways to phrase difficult sentences to achieve a higher score.
      Provide the response in a structured JSON format with fields: 'fluencyCoherence', 'lexicalResource', 'grammaticalRangeAccuracy', 'pronunciation', 'overallEstimatedBand', 'feedbackDetails', 'alternativePhrasingSuggestions'.`;

      const evaluationPayload = {
        contents: [{ role: "user", parts: [{ text: evaluationPrompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              fluencyCoherence: { type: "STRING" },
              lexicalResource: { type: "STRING" },
              grammaticalRangeAccuracy: { type: "STRING" },
              pronunciation: { type: "STRING" },
              overallEstimatedBand: { type: "STRING" },
              feedbackDetails: { type: "STRING" },
              alternativePhrasingSuggestions: { type: "STRING" },
            },
            propertyOrdering: [
              "fluencyCoherence",
              "lexicalResource",
              "grammaticalRangeAccuracy",
              "pronunciation",
              "overallEstimatedBand",
              "feedbackDetails",
              "alternativePhrasingSuggestions",
            ],
          },
        },
      };

      const evaluationApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      console.log("Calling Gemini API for speaking evaluation...");
      const evaluationResponse = await fetch(evaluationApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(evaluationPayload),
      });

      const evaluationResult = await evaluationResponse.json();
      console.log("Evaluation result:", evaluationResult);

      if (
        evaluationResult.candidates &&
        evaluationResult.candidates.length > 0 &&
        evaluationResult.candidates[0].content &&
        evaluationResult.candidates[0].content.parts &&
        evaluationResult.candidates[0].content.parts.length > 0
      ) {
        const jsonString = evaluationResult.candidates[0].content.parts[0].text;
        try {
          const parsedFeedback = JSON.parse(jsonString);
          setFeedback({ transcribedText, ...parsedFeedback }); // Combine transcription and evaluation
        } catch (parseError) {
          console.error(
            "Failed to parse AI response JSON for evaluation:",
            parseError,
            jsonString
          );
          setFeedback({
            transcribedText,
            overallEstimatedBand: "N/A",
            feedbackDetails: "Error parsing AI feedback.",
          });
        }
      } else {
        setFeedback({
          transcribedText,
          overallEstimatedBand: "N/A",
          feedbackDetails: "No AI evaluation received.",
        });
      }

      setShowModal(false); // Close processing modal
      setModalContent({
        title: "Speaking Feedback Ready",
        message:
          "Your AI-generated feedback and estimated band score are ready below.",
      });
      setShowModal(true);
    } catch (error) {
      console.error("Error sending audio to AI:", error);
      setModalContent({
        title: "AI Processing Error",
        message: `An error occurred during AI processing: ${error.message}`,
      });
      setShowModal(true);
    } finally {
      setIsLoadingFeedback(false);
    }
  };

  const handleNextQuestion = () => {
    if (
      currentPart === 1 &&
      currentQuestionIndex < questions.current[1].length - 1
    ) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setFeedback(null); // Clear previous feedback
    } else if (currentPart === 2) {
      setCurrentPart(3);
      setCurrentQuestionIndex(0);
      setFeedback(null); // Clear previous feedback
    } else if (
      currentPart === 3 &&
      currentQuestionIndex < questions.current[3].length - 1
    ) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setFeedback(null); // Clear previous feedback
    } else {
      handleFinishTest();
    }
  };

  const handleFinishTest = async () => {
    stopAllTimers();
    setModalContent({
      title: "End of Speaking Test",
      message:
        "You have completed the Speaking test. Your full report will be available in your dashboard (conceptually).",
    });
    setShowModal(true);
    onFinishTest(); // Go back to main menu
  };

  const currentQuestionText =
    currentPart === 2 ? currentQuestion.cueCard : currentQuestion;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-4xl mx-auto my-8 animate-fade-in-up">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center tracking-tight">
        Speaking Test
      </h2>
      <p className="text-xl text-gray-700 mb-8 text-center font-medium">
        {testTitle}
      </p>

      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-100">
        <div className="text-lg font-semibold text-gray-700 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6zm-3.707 5.707a1 1 0 001.414-1.414L9 8.586V7a1 1 0 10-2 0v2a1 1 0 00.293.707l3 3z"
              clipRule="evenodd"
            ></path>
          </svg>
          Time Left:{" "}
          <span className="text-red-600 ml-1">{formatTime(timeRemaining)}</span>
        </div>
        <div className="text-lg font-semibold text-gray-700">
          Part: <span className="font-bold text-gray-800">{currentPart}</span>
        </div>
      </div>

      <div className="mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-200 shadow-inner min-h-[150px] flex flex-col justify-center items-center text-center">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">
          {currentPart === 2
            ? "Cue Card: Prepare for 1 minute, then speak for 1-2 minutes."
            : "AI Examiner's Question:"}
        </h3>
        <p className="text-gray-800 text-3xl font-semibold leading-relaxed">
          "{currentQuestionText}"
        </p>
        {currentPart === 2 && (
          <div className="mt-4 text-gray-600 text-lg">
            <p className="font-medium">
              Preparation Time:{" "}
              <span className="font-bold">
                {formatTime(
                  responseTimer > 0 ? responseTimer : currentQuestion.prepTime
                )}
              </span>
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 mb-10">
        {recordingStatus === "idle" && (
          <button
            onClick={startRecording}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105 text-xl flex items-center"
          >
            <MicIcon className="w-6 h-6 mr-3" />
            Start Recording
          </button>
        )}
        {recordingStatus === "recording" && (
          <div className="flex flex-col items-center">
            <button
              onClick={stopRecording}
              className="bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105 text-xl flex items-center"
            >
              <MicIcon className="w-6 h-6 mr-3" />
              Stop Recording
            </button>
            <p className="mt-3 text-red-600 font-semibold text-lg flex items-center">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Recording...{" "}
              <span className="text-gray-700 ml-2">
                ({formatTime(responseTimer)})
              </span>
            </p>
          </div>
        )}
        {recordingStatus === "processing" && (
          <div className="flex flex-col items-center">
            <LoadingSpinner />
            <p className="text-gray-700 mt-3 text-lg">
              Analyzing your response with AI...
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleNextQuestion}
          disabled={recordingStatus !== "idle" || isLoadingFeedback}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
        >
          {currentPart === 3 &&
          currentQuestionIndex === questions.current[3].length - 1
            ? "End Test"
            : "Next Question &rarr;"}
        </button>
      </div>

      {feedback && (
        <div className="mt-16 bg-green-50 p-8 rounded-3xl shadow-xl border border-green-200 animate-fade-in">
          <h3 className="text-3xl font-extrabold text-green-800 mb-6 text-center tracking-tight">
            AI Speaking Feedback
          </h3>
          <p className="text-center text-2xl font-bold text-green-700 mb-8">
            Estimated Overall Band:{" "}
            <span className="bg-green-200 px-4 py-2 rounded-lg">
              {feedback.overallEstimatedBand}
            </span>
          </p>

          <div className="mb-6 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <FileTextIcon className="w-5 h-5 mr-2 text-blue-500" /> Your
              Transcribed Response:
            </h4>
            <p className="text-gray-700 italic leading-relaxed text-lg whitespace-pre-wrap">
              {feedback.transcribedText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-bold text-lg text-gray-800 mb-2">
                Fluency & Coherence:
              </h4>
              <p className="text-gray-700 text-base">
                {feedback.fluencyCoherence}
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-bold text-lg text-gray-800 mb-2">
                Lexical Resource:
              </h4>
              <p className="text-gray-700 text-base">
                {feedback.lexicalResource}
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-bold text-lg text-gray-800 mb-2">
                Grammatical Range & Accuracy:
              </h4>
              <p className="text-gray-700 text-base">
                {feedback.grammaticalRangeAccuracy}
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h4 className="font-bold text-lg text-gray-800 mb-2">
                Pronunciation:
              </h4>
              <p className="text-gray-700 text-base">
                {feedback.pronunciation}
              </p>
            </div>
          </div>

          <div className="mb-8 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <ActivityIcon className="w-5 h-5 mr-2 text-blue-500" /> Detailed
              Feedback:
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {feedback.feedbackDetails}
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lightbulb w-5 h-5 mr-2 text-blue-500"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
                <path d="M7 14h10" />
                <path d="M12 22v-4" />
                <path d="M8 22h8" />
              </svg>{" "}
              Alternative Phrasing Suggestions:
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {feedback.alternativePhrasingSuggestions}
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={onFinishTest}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
            >
              Back to Module Tests
            </button>
          </div>
        </div>
      )}

      <Modal
        show={showModal}
        title={modalContent.title}
        message={modalContent.message}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

// --- Main Module Selection Component ---
const ModuleSelection = ({ onSelectModule }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
      <button
        onClick={() => onSelectModule("listening")}
        className="flex flex-col items-center justify-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 w-72 h-64 border-b-8 border-blue-500 hover:border-blue-700 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <HeadphonesIcon className="w-20 h-20 text-blue-600 mb-6 group-hover:text-blue-800 transition duration-300 transform group-hover:scale-110 relative z-10" />
        <span className="text-3xl font-bold text-gray-800 group-hover:text-blue-900 transition duration-300 relative z-10">
          Listening
        </span>
        <span className="text-base text-gray-600 mt-2 relative z-10">
          30 mins, 40 questions
        </span>
      </button>

      <button
        onClick={() => onSelectModule("reading")}
        className="flex flex-col items-center justify-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 w-72 h-64 border-b-8 border-green-500 hover:border-green-700 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <BookOpenIcon className="w-20 h-20 text-green-600 mb-6 group-hover:text-green-800 transition duration-300 transform group-hover:scale-110 relative z-10" />
        <span className="text-3xl font-bold text-gray-800 group-hover:text-green-900 transition duration-300 relative z-10">
          Reading
        </span>
        <span className="text-base text-gray-600 mt-2 relative z-10">
          60 mins, 40 questions
        </span>
      </button>

      <button
        onClick={() => onSelectModule("writing")}
        className="flex flex-col items-center justify-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 w-72 h-64 border-b-8 border-yellow-500 hover:border-yellow-700 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <FileTextIcon className="w-20 h-20 text-yellow-600 mb-6 group-hover:text-yellow-800 transition duration-300 transform group-hover:scale-110 relative z-10" />
        <span className="text-3xl font-bold text-gray-800 group-hover:text-yellow-900 transition duration-300 relative z-10">
          Writing
        </span>
        <span className="text-base text-gray-600 mt-2 relative z-10">
          60 mins, 2 tasks (AI graded)
        </span>
      </button>

      <button
        onClick={() => onSelectModule("speaking")}
        className="flex flex-col items-center justify-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 w-72 h-64 border-b-8 border-red-500 hover:border-red-700 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-75 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <MicIcon className="w-20 h-20 text-red-600 mb-6 group-hover:text-red-800 transition duration-300 transform group-hover:scale-110 relative z-10" />
        <span className="text-3xl font-bold text-gray-800 group-hover:text-red-900 transition duration-300 relative z-10">
          Speaking
        </span>
        <span className="text-base text-gray-600 mt-2 relative z-10">
          11-14 mins, 3 parts (AI graded)
        </span>
      </button>

      <button
        onClick={() => onSelectModule("my-progress")} // A new module for conceptual dashboard
        className="flex flex-col items-center justify-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 w-72 h-64 border-b-8 border-purple-500 hover:border-purple-700 group cursor:pointer focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <ActivityIcon className="w-20 h-20 text-purple-600 mb-6 group-hover:text-purple-800 transition duration-300 transform group-hover:scale-110 relative z-10" />
        <span className="text-3xl font-bold text-gray-800 group-hover:text-purple-900 transition duration-300 relative z-10">
          My Progress
        </span>
        <span className="text-base text-gray-600 mt-2 relative z-10">
          Track your journey
        </span>
      </button>
    </div>
  );
};

// --- Module Specific Test Selection Component ---
const ModuleTestSelection = ({
  selectedModule,
  mockTests,
  onSelectTest,
  onBack,
}) => {
  const filteredTests = mockTests.filter(
    (test) => test.module === selectedModule
  );

  const getModuleDetails = (module) => {
    switch (module) {
      case "listening":
        return {
          title: "Listening",
          color: "blue",
          icon: <HeadphonesIcon className="w-12 h-12" />,
        };
      case "reading":
        return {
          title: "Reading",
          color: "green",
          icon: <BookOpenIcon className="w-12 h-12" />,
        };
      case "writing":
        return {
          title: "Writing",
          color: "yellow",
          icon: <FileTextIcon className="w-12 h-12" />,
        };
      case "speaking":
        return {
          title: "Speaking",
          color: "red",
          icon: <MicIcon className="w-12 h-12" />,
        };
      default:
        return { title: "Module", color: "gray", icon: null };
    }
  };

  const moduleDetails = getModuleDetails(selectedModule);

  return (
    <div className="max-w-6xl mx-auto py-8 animate-fade-in">
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300 text-lg font-semibold bg-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <ChevronLeftIcon className="w-6 h-6 mr-2 text-gray-700" />
          Back to Modules
        </button>
        <h2
          className={`text-5xl font-extrabold text-${moduleDetails.color}-800 text-center tracking-tight flex-grow`}
        >
          {moduleDetails.title} Mock Tests
        </h2>
        <div className="w-auto"></div> {/* Placeholder to balance flexbox */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTests.length > 0 ? (
          filteredTests.map((test) => (
            <div
              key={test.id}
              onClick={() => onSelectTest(test.module, test.id, test.title)}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group border border-gray-200 relative"
            >
              <div
                className={`p-8 flex flex-col items-start min-h-[220px] ${
                  moduleDetails.color === "blue"
                    ? "bg-gradient-to-br from-blue-50 to-blue-100"
                    : moduleDetails.color === "green"
                    ? "bg-gradient-to-br from-green-50 to-green-100"
                    : moduleDetails.color === "yellow"
                    ? "bg-gradient-to-br from-yellow-50 to-yellow-100"
                    : moduleDetails.color === "red"
                    ? "bg-gradient-to-br from-red-50 to-red-100"
                    : ""
                } border-b-4 border-${moduleDetails.color}-300`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md ${
                    moduleDetails.color === "blue"
                      ? "bg-blue-200 text-blue-700"
                      : moduleDetails.color === "green"
                      ? "bg-green-200 text-green-700"
                      : moduleDetails.color === "yellow"
                      ? "bg-yellow-200 text-yellow-700"
                      : moduleDetails.color === "red"
                      ? "bg-red-200 text-red-700"
                      : ""
                  }`}
                >
                  {moduleDetails.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {test.title}
                </h3>
                <p className="text-gray-700 text-base flex-grow">
                  {test.topic}
                </p>
              </div>
              <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <span
                  className={`text-sm font-bold px-4 py-1 rounded-full shadow-inner ${
                    test.source === "IDP"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {test.source}
                </span>
                <span className="text-base text-gray-600 font-medium">
                  {test.module.charAt(0).toUpperCase() + test.module.slice(1)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full py-16 text-xl">
            No mock tests available for this module yet. Please check back
            later!
          </p>
        )}
      </div>
    </div>
  );
};

// --- My Progress / Dashboard Component (Conceptual) ---
const MyProgressDashboard = ({ onBack }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-5xl mx-auto my-8 animate-fade-in-up">
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 transition duration-300 text-lg font-semibold bg-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <ChevronLeftIcon className="w-6 h-6 mr-2 text-gray-700" />
          Back to Modules
        </button>
        <h2 className="text-5xl font-extrabold text-purple-800 text-center tracking-tight flex-grow">
          My Progress Dashboard
        </h2>
        <div className="w-auto"></div>
      </div>

      <div className="text-center bg-purple-50 p-8 rounded-2xl border border-purple-200 shadow-inner">
        <p className="text-gray-700 text-xl mb-6 leading-relaxed">
          This is where your personalized progress and past test results would
          be displayed in a full system! Imagine interactive charts showing your
          band scores over time, breakdowns by skill, and AI-driven insights
          into your strengths and weaknesses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Overall Score Trend
            </h3>
            <img
              src="https://placehold.co/400x150/f0f4f8/9ca3af?text=LINE+CHART"
              alt="Overall Score Chart"
              className="w-full rounded-md"
            />
            <p className="text-sm text-gray-500 mt-2">
              Your band score progress over last 5 tests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Skill Breakdown
            </h3>
            <img
              src="https://placehold.co/400x150/f0f4f8/9ca3af?text=RADAR+CHART"
              alt="Skill Breakdown Chart"
              className="w-full rounded-md"
            />
            <p className="text-sm text-gray-500 mt-2">
              Performance across Listening, Reading, Writing, Speaking.
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-md mt-6">
          Future enhancements would include detailed reports, personalized study
          recommendations, and more!
        </p>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [currentView, setCurrentView] = useState("module-selection"); // 'module-selection', 'module-test-selection', 'test-in-progress', 'my-progress'
  const [selectedModule, setSelectedModule] = useState(null); // 'listening', 'reading', etc.
  const [selectedTestTitle, setSelectedTestTitle] = useState(null); // Title of the selected mock test
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Define your mock test data here (grouped by module for easier filtering)
  const allMockTests = [
    {
      id: "L_M_1",
      module: "listening",
      title: "Listening Mock Test 1 (Basic)",
      topic: "Academic - Everyday Conversations",
      source: "IDP",
    },
    {
      id: "L_BC_1",
      module: "listening",
      title: "Listening Practice Test 2 (Intermediate)",
      topic: "General Training - Public Announcements",
      source: "British Council",
    },
    {
      id: "L_IDP_3",
      module: "listening",
      title: "Listening Exam Prep (Advanced)",
      topic: "Academic - University Lecture",
      source: "IDP",
    },
    {
      id: "L_BC_4",
      module: "listening",
      title: "Listening Advanced (Challenging)",
      topic: "General Training - News Report",
      source: "British Council",
    },
    {
      id: "L_IDP_5",
      module: "listening",
      title: "Listening Focus Test (Accent Training)",
      topic: "Academic - Multiple Accents",
      source: "IDP",
    },

    {
      id: "R_M_1",
      module: "reading",
      title: "Reading Academic Test A (Basic)",
      topic: "Academic - Science & Technology",
      source: "IDP",
    },
    {
      id: "R_BC_1",
      module: "reading",
      title: "Reading General Test B (Intermediate)",
      topic: "General Training - Work & Society",
      source: "British Council",
    },
    {
      id: "R_IDP_3",
      module: "reading",
      title: "Reading Challenging (Academic)",
      topic: "Academic - Historical Article",
      source: "IDP",
    },
    {
      id: "R_BC_4",
      module: "reading",
      title: "Reading Practice (General)",
      topic: "General Training - Advertisements",
      source: "British Council",
    },
    {
      id: "R_IDP_5",
      module: "reading",
      title: "Reading Strategy Test (Skimming)",
      topic: "Academic - Long Passages",
      source: "IDP",
    },

    {
      id: "W_M_1",
      module: "writing",
      title: "Writing Academic Test 1 (Basic)",
      topic: "Academic - Data Analysis & Opinion Essay",
      source: "IDP",
    },
    {
      id: "W_BC_1",
      module: "writing",
      title: "Writing General Test 1 (Intermediate)",
      topic: "General Training - Letter & Essay",
      source: "British Council",
    },
    {
      id: "W_IDP_3",
      module: "writing",
      title: "Writing Task 2 Focus (Advanced)",
      topic: "Academic - Problem & Solution",
      source: "IDP",
    },
    {
      id: "W_BC_4",
      module: "writing",
      title: "Writing Task 1 & 2 (General)",
      topic: "General Training - Complaint Letter",
      source: "British Council",
    },
    {
      id: "W_IDP_5",
      module: "writing",
      title: "Writing Coherence Practice",
      topic: "Academic - Argumentative Essay",
      source: "IDP",
    },

    {
      id: "S_M_1",
      module: "speaking",
      title: "Speaking Mock Interview A (Basic)",
      topic: "Academic - Personal & Abstract Topics",
      source: "IDP",
    },
    {
      id: "S_BC_1",
      module: "speaking",
      title: "Speaking Practice Interview B (Intermediate)",
      topic: "General Training - Daily Life & Future",
      source: "British Council",
    },
    {
      id: "S_IDP_3",
      module: "speaking",
      title: "Speaking Fluency Builder (Advanced)",
      topic: "Academic - Technology & Society",
      source: "IDP",
    },
    {
      id: "S_BC_4",
      module: "speaking",
      title: "Speaking Pronunciation Drill (General)",
      topic: "General Training - Hobbies & Interests",
      source: "British Council",
    },
    {
      id: "S_IDP_5",
      module: "speaking",
      title: "Speaking Part 3 Deep Dive",
      topic: "Academic - Discussion Topics",
      source: "IDP",
    },
  ];

  useEffect(() => {
    // Initialize Firebase only once
    if (!app) {
      app = initializeApp(firebaseConfig);
      db = getFirestore(app);
      auth = getAuth(app);

      // Authenticate anonymously or with custom token
      const authenticateUser = async () => {
        try {
          if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
            console.log("Signed in with custom token.");
          } else {
            await signInAnonymously(auth);
            console.log("Signed in anonymously.");
          }
        } catch (error) {
          console.error("Firebase authentication error:", error);
          setModalContent({
            title: "Authentication Error",
            message: `Failed to authenticate with Firebase: ${error.message}. Some features may not work.`,
          });
          setShowModal(true);
        }
      };
      authenticateUser();

      // Listen for auth state changes
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid);
          console.log("Firebase User ID:", user.uid);
        } else {
          setUserId(null);
          console.log("No Firebase user is signed in.");
        }
        setIsAuthReady(true); // Auth state is now known
      });

      return () => unsubscribe(); // Cleanup auth listener
    }
  }, []);

  const handleSelectModule = (moduleName) => {
    if (!isAuthReady || !userId) {
      setModalContent({
        title: "System Loading",
        message:
          "Please wait a moment while the system initializes (authenticates with Firebase).",
      });
      setShowModal(true);
      return;
    }
    if (moduleName === "my-progress") {
      setCurrentView("my-progress");
    } else {
      setSelectedModule(moduleName);
      setCurrentView("module-test-selection");
    }
  };

  const handleSelectTest = (moduleName, testId, testTitle) => {
    if (!isAuthReady || !userId) {
      setModalContent({
        title: "System Loading",
        message:
          "Please wait a moment while the system initializes (authenticates with Firebase).",
      });
      setShowModal(true);
      return;
    }
    setSelectedModule(moduleName); // Ensure module is set correctly
    setSelectedTestTitle(testTitle);
    setCurrentView("test-in-progress");
    // In a real application, you'd load specific test content based on testId here
  };

  const handleFinishTest = () => {
    setCurrentView("module-test-selection"); // Go back to module-specific test selection
    setSelectedTestTitle(null); // Clear selected test title
  };

  const handleBackToModules = () => {
    setCurrentView("module-selection");
    setSelectedModule(null);
    setSelectedTestTitle(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 font-['Inter'] py-12 px-4 sm:px-6 lg:px-8">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        
        body { font-family: 'Inter', sans-serif; }

        .form-radio:checked {
            background-color: #3B82F6; /* blue-500 */
            border-color: #3B82F6;
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.7s ease-out forwards;
        }
        .animate-zoom-in {
            animation: zoomIn 0.3s ease-out forwards;
        }
        .animate-pulse-slow {
            animation: pulse-slow 2s infinite;
        }
        .animate-pulse-fast {
            animation: pulse-fast 1s infinite;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes pulse-fast {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.02); opacity: 0.9; }
        }

        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #a0aec0; /* gray-400 */
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #718096; /* gray-600 */
        }
        `}
      </style>
      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-blue-900 drop-shadow-lg leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700">
            IELTS Mastery Hub
          </span>
        </h1>
        <p className="text-2xl text-gray-700 mt-4 max-w-2xl mx-auto">
          Your ultimate destination for world-class IELTS preparation.
        </p>
        {isAuthReady && userId && (
          <p className="mt-6 text-lg text-gray-600 font-mono bg-white bg-opacity-70 backdrop-blur-sm inline-block px-4 py-2 rounded-xl shadow-md border border-gray-200">
            User ID:{" "}
            <span className="font-semibold text-gray-800">{userId}</span>
          </p>
        )}
      </header>

      {currentView === "module-selection" && (
        <ModuleSelection onSelectModule={handleSelectModule} />
      )}

      {currentView === "module-test-selection" && selectedModule && (
        <ModuleTestSelection
          selectedModule={selectedModule}
          mockTests={allMockTests}
          onSelectTest={handleSelectTest}
          onBack={handleBackToModules}
        />
      )}

      {currentView === "test-in-progress" && selectedModule === "listening" && (
        <ListeningTest
          onFinishTest={handleFinishTest}
          testTitle={selectedTestTitle}
        />
      )}
      {currentView === "test-in-progress" && selectedModule === "reading" && (
        <ReadingTest
          onFinishTest={handleFinishTest}
          testTitle={selectedTestTitle}
        />
      )}
      {currentView === "test-in-progress" && selectedModule === "writing" && (
        <WritingTest
          onFinishTest={handleFinishTest}
          testTitle={selectedTestTitle}
        />
      )}
      {currentView === "test-in-progress" && selectedModule === "speaking" && (
        <SpeakingTest
          onFinishTest={handleFinishTest}
          testTitle={selectedTestTitle}
        />
      )}

      {currentView === "my-progress" && (
        <MyProgressDashboard onBack={handleBackToModules} />
      )}

      <Modal
        show={showModal}
        title={modalContent.title}
        message={modalContent.message}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default App;
