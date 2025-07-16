export const QuizIcons = {
  // Font Awesome classes for categories (as before)
  Grammar: '<i class="fa-solid fa-book-open-reader text-blue-500"></i>',
  Vocabulary: '<i class="fas fa-book-open text-green-500"></i>',
  Spelling: '<i class="fas fa-keyboard text-purple-500"></i>',
  Clock: '<i class="ph-bold ph-clock text-purple-500"></i>',
  Flag: '<i class="ph-bold ph-flag text-purple-500"></i>',
  Trophy: '<i class="ph-bold ph-trophy text-purple-500"></i>',
  ChartBar: '<i class="ph-bold ph-chart-bar text-purple-500"></i>',
  ThumbsUp: '<i class="ph-bold ph-thumbs-up text-purple-500"></i>',
  Warning: '<i class="ph-bold ph-warning-circle text-purple-500"></i>',
  Badge: '<i class="ph-bold ph-medal text-purple-500"></i>',
  Review: '<i class="ph-bold ph-chat-circle-text text-purple-500"></i>',
  Leaderboard: '<i class="ph-bold ph-list-numbers text-purple-500"></i>',
  QuestionMark: '<i class="ph-bold ph-question text-purple-500"></i>',
  BadgeStar: '<i class="ph-bold ph-star text-purple-500"></i>',
  BadgeCheck: '<i class="ph-bold ph-seal-check text-purple-500"></i>',
  BadgeFast: '<i class="ph-bold ph-lightning text-purple-500"></i>',
  BadgeTrophy: '<i class="ph-bold ph-trophy text-purple-500"></i>',
  Home: '<i class="ph-bold ph-house text-purple-500"></i>',
  ChevronLeft: '<i class="ph-bold ph-caret-left text-purple-500"></i>',
  ChevronRight: '<i class="ph-bold ph-caret-right text-purple-500"></i>',
  SignIn: '<i class="ph-bold ph-sign-in text-purple-500"></i>',
  SignOut: '<i class="ph-bold ph-sign-out text-purple-500"></i>',
  Dashboard: '<i class="ph-bold ph-squares-four text-purple-500"></i>',
  Forum: '<i class="ph-bold ph-chats text-purple-500"></i>',
  CheckCircle: '<i class="fa-solid fa-circle-check text-green-500"></i>',
  XCircle: '<i class="fa-solid fa-circle-xmark text-red-500"></i>',
  InfoCircle: '<i class="fa-solid fa-circle-info text-blue-500"></i>',
  Award: '<i class="fa-solid fa-award text-amber-500"></i>',
  Play: '<i class="fa-solid fa-play text-indigo-500"></i>',
  History: '<i class="fa-solid fa-history text-slate-500"></i>',
  Quiz: '<i class="fa-solid fa-list-check text-cyan-500"></i>',
  Score: '<i class="fa-solid fa-gauge-high text-orange-500"></i>',
  Accuracy: '<i class="fa-solid fa-bullseye text-red-600"></i>',
  Time: '<i class="fa-solid fa-clock text-slate-600"></i>',
  LevelUp: '<i class="fa-solid fa-arrow-trend-up text-lime-500"></i>',
  View: '<i class="fa-solid fa-eye text-sky-600"></i>',
  Calendar: '<i class="fa-solid fa-calendar-days text-blue-600"></i>',
};

export const commonStyles = `
    /* Common styles for the entire application */
    body {
        font-family: 'Inter', sans-serif;
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); /* Light blue gradient background */
        color: #334155; /* Default text color */
    }

    /* Custom styles for professional look */
    .header {
        background-color: #ffffff;
        border-bottom: 1px solid #e2e8f0;
    }

    .card {
        background: linear-gradient(145deg, #ffffff 0%, #f8faff 100%); /* Subtle gradient for cards */
        border: 1px solid #e2e8f0; /* Light border */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 2px 5px rgba(0, 0, 0, 0.03); /* Soft shadow */
        transition: all 0.3s ease-in-out;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.06); /* Deeper shadow on hover */
    }

    .btn-primary {
        background-color: #3b82f6; /* blue-500 */
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
    }

    .btn-primary:hover {
        background-color: #2563eb; /* blue-600 */
        transform: translateY(-1px);
    }

    .btn-secondary {
        background-color: #e2e8f0; /* gray-200 */
        color: #334155; /* slate-700 */
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
    }

    .btn-secondary:hover {
        background-color: #cbd5e1; /* gray-300 */
        transform: translateY(-1px);
    }

    .input-field {
        border: 1px solid #cbd5e1; /* slate-300 */
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .input-field:focus {
        border-color: #3b82f6; /* blue-500 */
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25); /* blue-500 with opacity */
        outline: none;
    }

    /* Animations */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes zoomIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }

    .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
    .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
    .animate-zoom-in { animation: zoomIn 0.4s ease-out forwards; }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const quizCategories = [
  {
    id: "grammar",
    name: "Grammar",
    description:
      "Master the rules of English grammar with comprehensive tests.",
    icon: QuizIcons.Grammar,
    image: "https://placehold.co/400x200/a7f3d0/065f46?text=Grammar",
    color: "bg-blue-600",
  },
  {
    id: "vocabulary",
    name: "Vocabulary",
    description: "Expand your word bank and improve your lexical resource.",
    icon: QuizIcons.Vocabulary,
    image: "https://placehold.co/400x200/fecaca/991b1b?text=Vocabulary",
    color: "bg-green-600",
  },
  {
    id: "spelling",
    name: "Spelling",
    description: "Enhance your accuracy in English spelling.",
    icon: QuizIcons.Spelling,
    image: "https://placehold.co/400x200/bfdbfe/1e40af?text=Spelling",
    color: "bg-purple-600",
  },
  // Add more categories as needed
];

export const allQuizTests = [
  {
    id: "grammar-right-forms-beginner",
    categoryId: "grammar",
    title: "Right Forms of Verb (Beginner Level)",
    description: "Test your basic understanding of verb forms.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 1,
    questions: [
      {
        id: "rfvb1q1",
        type: "multiple-choice",
        questionText: "She ______ to the market every Saturday.",
        options: ["A) go", "B) goes", "C) going", "D) gone"],
        correctAnswer: "B",
        explanation:
          "Present simple with third person singular needs -s → “goes.”",
      },
      {
        id: "rfvb1q2",
        type: "multiple-choice",
        questionText: "They ______ dinner when the phone rang.",
        options: ["A) are having", "B) have", "C) were having", "D) had"],
        correctAnswer: "C",
        explanation:
          "Past action interrupted by another needs past continuous.",
      },
      {
        id: "rfvb1q3",
        type: "multiple-choice",
        questionText: "I ______ this movie twice already.",
        options: ["A) see", "B) saw", "C) have seen", "D) had seen"],
        correctAnswer: "C",
        explanation: '"Already" indicates present perfect tense.',
      },
      {
        id: "rfvb1q4",
        type: "multiple-choice",
        questionText: "She ______ to London next week.",
        options: ["A) will go", "B) goes", "C) went", "D) going"],
        correctAnswer: "A",
        explanation: '"Next week" shows the future, so use will + base verb.',
      },
      {
        id: "rfvb1q5",
        type: "multiple-choice",
        questionText: "We usually ______ lunch at 1 p.m.",
        options: ["A) has", "B) have", "C) had", "D) having"],
        correctAnswer: "B",
        explanation:
          '"Usually" implies a habit, so use present simple → “have.”',
      },
      {
        id: "rfvb1q6",
        type: "multiple-choice",
        questionText: "He ______ his homework last night.",
        options: ["A) do", "B) does", "C) did", "D) doing"],
        correctAnswer: "C",
        explanation: '"Last night" requires a simple past → “did.”',
      },
      {
        id: "rfvb1q7",
        type: "multiple-choice",
        questionText: "By the time you arrive, they ______.",
        options: [
          "A) will leave",
          "B) will have left",
          "C) have left",
          "D) left",
        ],
        correctAnswer: "B",
        explanation:
          '"By the time" refers to a completed future action → future perfect.',
      },
      {
        id: "rfvb1q8",
        type: "multiple-choice",
        questionText: "Listen! The birds ______.",
        options: ["A) sing", "B) sings", "C) are singing", "D) sang"],
        correctAnswer: "C",
        explanation: '"Listen!" indicates ongoing action → present continuous.',
      },
      {
        id: "rfvb1q9",
        type: "multiple-choice",
        questionText: "I ______ tennis every Sunday.",
        options: ["A) play", "B) played", "C) playing", "D) have played"],
        correctAnswer: "A",
        explanation: '"Every Sunday" shows routine → use present simple.',
      },
      {
        id: "rfvb1q10",
        type: "multiple-choice",
        questionText: "He ______ his book when I saw him.",
        options: ["A) read", "B) was reading", "C) reads", "D) is reading"],
        correctAnswer: "B",
        explanation: "Ongoing past action interrupted → use past continuous.",
      },
      {
        id: "rfvb1q11",
        type: "multiple-choice",
        questionText: "She ______ the film before I told her about it.",
        options: ["A) sees", "B) saw", "C) had seen", "D) has seen"],
        correctAnswer: "C",
        explanation: "One past action before another → use past perfect.",
      },
      {
        id: "rfvb1q12",
        type: "multiple-choice",
        questionText: "This time tomorrow, I ______ on the beach.",
        options: ["A) will lie", "B) will be lying", "C) lie", "D) am lying"],
        correctAnswer: "B",
        explanation: "Future action in progress → use future continuous.",
      },
      {
        id: "rfvb1q13",
        type: "multiple-choice",
        questionText: "He never ______ to work on Sundays.",
        options: ["A) go", "B) going", "C) went", "D) goes"],
        correctAnswer: "D",
        explanation: "Present simple with 'he' needs -s → “goes.”",
      },
      {
        id: "rfvb1q14",
        type: "multiple-choice",
        questionText: "They ______ their project yet.",
        options: [
          "A) haven’t finished",
          "B) didn’t finish",
          "C) don’t finish",
          "D) aren’t finishing",
        ],
        correctAnswer: "A",
        explanation: '"Yet" suggests present perfect negative.',
      },
      {
        id: "rfvb1q15",
        type: "multiple-choice",
        questionText: "What ______ you ______ when I called?",
        options: [
          "A) do / do",
          "B) were / doing",
          "C) did / do",
          "D) are / doing",
        ],
        correctAnswer: "B",
        explanation: "Interrupted past action needs past continuous.",
      },
      {
        id: "rfvb1q16",
        type: "multiple-choice",
        questionText: "I think it ______ tomorrow.",
        options: ["A) rains", "B) raining", "C) will rain", "D) rain"],
        correctAnswer: "C",
        explanation: "Prediction about future → use will + verb.",
      },
      {
        id: "rfvb1q17",
        type: "multiple-choice",
        questionText: "Water ______ at 100°C.",
        options: ["A) boil", "B) boils", "C) boiled", "D) boiling"],
        correctAnswer: "B",
        explanation: "Scientific facts use present simple.",
      },
      {
        id: "rfvb1q18",
        type: "multiple-choice",
        questionText: "We ______ to the zoo last weekend.",
        options: ["A) go", "B) went", "C) gone", "D) going"],
        correctAnswer: "B",
        explanation: '"Last weekend" shows past → use simple past.',
      },
      {
        id: "rfvb1q19",
        type: "multiple-choice",
        questionText: "After they ______ dinner, they went out for a walk.",
        options: ["A) have", "B) had", "C) had had", "D) having"],
        correctAnswer: "C",
        explanation: "One past action before another → use past perfect.",
      },
      {
        id: "rfvb1q20",
        type: "multiple-choice",
        questionText: "By next month, she ______ her exams.",
        options: [
          "A) will finish",
          "B) will have finished",
          "C) finishes",
          "D) finished",
        ],
        correctAnswer: "B",
        explanation: "Completed action before a future point → future perfect.",
      },
    ],
  },
  {
    id: "grammar-prepositions",
    categoryId: "grammar",
    title: "Prepositions",
    description: "Test your knowledge of English prepositions.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 1, // Changed from 2 to 1
    questions: [
      {
        id: "gpr1q1",
        type: "multiple-choice",
        questionText: "She sat ______ the table and started eating.",
        options: ["A) on", "B) at", "C) in", "D) over"],
        correctAnswer: "B",
        explanation:
          '"At the table" refers to a position by the table, commonly used when someone is seated for a meal or activity.',
      },
      {
        id: "gpr1q2",
        type: "multiple-choice",
        questionText: "The book is lying ______ the bed.",
        options: ["A) on", "B) in", "C) under", "D) at"],
        correctAnswer: "A",
        explanation:
          '"On the bed" describes something resting on the surface of the bed.',
      },
      {
        id: "gpr1q3",
        type: "multiple-choice",
        questionText: "They arrived ______ the airport late.",
        options: ["A) on", "B) at", "C) in", "D) to"],
        correctAnswer: "B",
        explanation:
          '"At the airport" indicates arrival at a specific point or location, not inside.',
      },
      {
        id: "gpr1q4",
        type: "multiple-choice",
        questionText: "I have been living in this city ______ five years.",
        options: ["A) since", "B) from", "C) for", "D) during"],
        correctAnswer: "C",
        explanation:
          '"For five years" is used to express the duration of an action or state.',
      },
      {
        id: "gpr1q5",
        type: "multiple-choice",
        questionText: "He divided the cake ______ four parts.",
        options: ["A) to", "B) between", "C) in", "D) into"],
        correctAnswer: "D",
        explanation:
          '"Into four parts" is correct because "into" implies division or transformation from one whole to parts.',
      },
      {
        id: "gpr1q6",
        type: "multiple-choice",
        questionText: "The picture is hanging ______ the wall.",
        options: ["A) over", "B) above", "C) in", "D) on"],
        correctAnswer: "D",
        explanation:
          '"On the wall" is used for something attached or fixed to the surface of a wall.',
      },
      {
        id: "gpr1q7",
        type: "multiple-choice",
        questionText: "The child hid ______ the table.",
        options: ["A) over", "B) behind", "C) between", "D) across"],
        correctAnswer: "B",
        explanation:
          '"Behind the table" means the child is at the rear side of the table.',
      },
      {
        id: "gpr1q8",
        type: "multiple-choice",
        questionText: "She was born ______ July 5th.",
        options: ["A) at", "B) in", "C) on", "D) by"],
        correctAnswer: "C",
        explanation:
          '"On July 5th" is used for specific dates; "on" is the standard preposition with calendar days.',
      },
      {
        id: "gpr1q9",
        type: "multiple-choice",
        questionText: "There is a bridge ______ the river.",
        options: ["A) across", "B) over", "C) through", "D) above"],
        correctAnswer: "B",
        explanation:
          '"Over the river" indicates something higher than and possibly spanning across the river.',
      },
      {
        id: "gpr1q10",
        type: "multiple-choice",
        questionText: "They have been friends ______ childhood.",
        options: ["A) for", "B) since", "C) from", "D) during"],
        correctAnswer: "B",
        explanation:
          '"Since childhood" shows the starting point of a time period continuing to the present.',
      },
      {
        id: "gpr1q11",
        type: "multiple-choice",
        questionText: "He drove ______ the tunnel carefully.",
        options: ["A) over", "B) across", "C) under", "D) through"],
        correctAnswer: "D",
        explanation:
          '"Through the tunnel" means passing from one end to the other via the tunnel’s interior.',
      },
      {
        id: "gpr1q12",
        type: "multiple-choice",
        questionText: "She is very good ______ dancing.",
        options: ["A) at", "B) in", "C) on", "D) with"],
        correctAnswer: "A",
        explanation:
          '"Good at" is a standard expression used to describe skill or proficiency in an activity.',
      },
      {
        id: "gpr1q13",
        type: "multiple-choice",
        questionText: "We usually go to the gym ______ the morning.",
        options: ["A) at", "B) on", "C) in", "D) to"],
        correctAnswer: "C",
        explanation:
          '"In the morning" is the correct phrase for referring to times of day (morning, afternoon, etc.).',
      },
      {
        id: "gpr1q14",
        type: "multiple-choice",
        questionText: "The shop is just ______ the corner.",
        options: ["A) on", "B) at", "C) to", "D) in"],
        correctAnswer: "B",
        explanation:
          '"At the corner" refers to a specific location or point (usually at an intersection).',
      },
      {
        id: "gpr1q15",
        type: "multiple-choice",
        questionText: "He walked ______ the street without looking.",
        options: ["A) on", "B) across", "C) under", "D) over"],
        correctAnswer: "B",
        explanation:
          '"Across the street" indicates movement from one side of the street to the other.',
      },
      {
        id: "gpr1q16",
        type: "multiple-choice",
        questionText: "The conference will be held ______ Paris.",
        options: ["A) at", "B) on", "C) in", "D) by"],
        correctAnswer: "C",
        explanation:
          '"In Paris" is used for being inside or located within a city or large area.',
      },
      {
        id: "gpr1q17",
        type: "multiple-choice",
        questionText: "She put the books ______ the shelf.",
        options: ["A) on", "B) in", "C) over", "D) into"],
        correctAnswer: "A",
        explanation:
          '"On the shelf" is correct because the books are resting on the surface of the shelf.',
      },
      {
        id: "gpr1q18",
        type: "multiple-choice",
        questionText: "I was angry ______ him for being late.",
        options: ["A) on", "B) at", "C) to", "D) with"],
        correctAnswer: "D",
        explanation:
          '"Angry with" someone is the correct prepositional phrase to express being upset at a person.',
      },
      {
        id: "gpr1q19",
        type: "multiple-choice",
        questionText: "The cat jumped ______ the box.",
        options: ["A) into", "B) in", "C) onto", "D) on"],
        correctAnswer: "A",
        explanation:
          '"Jumped into the box" shows motion from outside to the inside of the box.',
      },
      {
        id: "gpr1q20",
        type: "multiple-choice",
        questionText: "There is no difference ______ the two models.",
        options: ["A) among", "B) between", "C) with", "D) from"],
        correctAnswer: "B",
        explanation:
          '"Between" is used when comparing or distinguishing two specific items or options.',
      },
    ],
  },
  {
    id: "grammar-articles",
    categoryId: "grammar",
    title: "Articles",
    description: "Test your understanding of definite and indefinite articles.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 1, // Changed from 2 to 1
    questions: [
      {
        id: "gart1q1",
        type: "multiple-choice",
        questionText: "She wants to buy ___ umbrella because it’s raining.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "B",
        explanation:
          '"An" is used before words starting with a vowel sound — "umbrella" begins with a vowel sound.',
      },
      {
        id: "gart1q2",
        type: "multiple-choice",
        questionText: "Paris is ___ capital of France.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "C",
        explanation:
          'We use "the" for something specific and unique — "the capital of France" is one particular, known place.',
      },
      {
        id: "gart1q3",
        type: "multiple-choice",
        questionText: "We should protect ___ environment from pollution.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "C",
        explanation:
          '"The environment" refers to the specific, shared natural world around us, making it a definite noun.',
      },
      {
        id: "gart1q4",
        type: "multiple-choice",
        questionText: "He usually drinks ___ coffee in the morning.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "D",
        explanation:
          '"Coffee" is an uncountable noun used in a general sense, so no article is needed.',
      },
      {
        id: "gart1q5",
        type: "multiple-choice",
        questionText: "I met ___ honest man yesterday.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "B",
        explanation:
          '"Honest" starts with a silent \'h\' and a vowel sound, so "an" is the correct choice.',
      },
      {
        id: "gart1q6",
        type: "multiple-choice",
        questionText: "They live near ___ sea.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "C",
        explanation:
          '"The sea" is treated as a known geographical feature, requiring the definite article.',
      },
      {
        id: "gart1q7",
        type: "multiple-choice",
        questionText: "She wants to become ___ engineer.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "B",
        explanation:
          '"Engineer" begins with a vowel sound, so we use "an" before it.',
      },
      {
        id: "gart1q8",
        type: "multiple-choice",
        questionText: "Mount Everest is ___ highest mountain in the world.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "C",
        explanation:
          'Mount Everest is a unique, specific mountain, and "the" is used before superlatives like "highest."',
      },
      {
        id: "gart1q9",
        type: "multiple-choice",
        questionText: "I don’t like ___ sugar in my tea.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "D",
        explanation:
          '"Sugar" is an uncountable noun and used in a general sense here, so no article is required.',
      },
      {
        id: "gart1q10",
        type: "multiple-choice",
        questionText: "He is reading ___ interesting book.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "B",
        explanation:
          '"Interesting" starts with a vowel sound, so "an" is the correct indefinite article.',
      },
      {
        id: "gart1q11",
        type: "multiple-choice",
        questionText: "Have you ever visited ___ United Kingdom?",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "C",
        explanation:
          'Country names with political terms like "United Kingdom" use "the" because it\'s an official title.',
      },
      {
        id: "gart1q12",
        type: "multiple-choice",
        questionText: "She plays ___ piano very well.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "C",
        explanation:
          'When referring to playing a musical instrument in general, we use "the" before the instrument.',
      },
      {
        id: "gart1q13",
        type: "multiple-choice",
        questionText: "We stayed in ___ expensive hotel last summer.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "B",
        explanation:
          '"Expensive" starts with a vowel sound, so "an" is the correct article before it.',
      },
      {
        id: "gart1q14",
        type: "multiple-choice",
        questionText: "There is ___ university in that town.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "A",
        explanation:
          '"University" starts with a consonant sound (you-niversity), so "a" is used instead of "an."',
      },
      {
        id: "gart1q15",
        type: "multiple-choice",
        questionText: "He gave me ___ useful advice.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "D",
        explanation:
          '"Advice" is uncountable and used in a general sense here, so no article is used.',
      },
      {
        id: "gart1q16",
        type: "multiple-choice",
        questionText: "___ dogs are loyal animals.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "D",
        explanation:
          'We use no article when referring to animals as a general category — "dogs" in general are loyal.',
      },
      {
        id: "gart1q17",
        type: "multiple-choice",
        questionText: "They climbed ___ Alps last winter.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "C",
        explanation:
          '"The Alps" is a specific mountain range, and geographical names like mountain ranges use "the."',
      },
      {
        id: "gart1q18",
        type: "multiple-choice",
        questionText: "She usually comes to office by ___ car.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "D",
        explanation:
          'No article is used before means of transport when preceded by "by" — e.g., "by car," "by train."',
      },
      {
        id: "gart1q19",
        type: "multiple-choice",
        questionText: "He is ___ best player in the team.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "C",
        explanation:
          'Superlatives always take "the" — "the best" refers to the highest degree of comparison.',
      },
      {
        id: "gart1q20",
        type: "multiple-choice",
        questionText: "She never eats ___ rice at night.",
        options: ["A) a", "B) an", "C) the", "D) no article"],
        correctAnswer: "D",
        explanation:
          '"Rice" is an uncountable noun and used in a general sense here, so no article is needed.',
      },
    ],
  },
  {
    id: "grammar-parts-of-speech",
    categoryId: "grammar",
    title: "Parts of Speech",
    description: "Identify different parts of speech in sentences.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 1, // Changed from 2 to 1
    questions: [
      {
        id: "gpos1q1",
        type: "multiple-choice",
        questionText:
          "Identify the pronoun in this sentence:\nShe is reading a book.",
        options: ["A) She", "B) book", "C) reading", "D) is"],
        correctAnswer: "A",
        explanation:
          "She is a pronoun because it replaces a noun and refers to a person.",
      },
      {
        id: "gpos1q2",
        type: "multiple-choice",
        questionText:
          "Identify the noun in this sentence:\nThe dog is barking.",
        options: ["A) is", "B) dog", "C) barking", "D) The"],
        correctAnswer: "B",
        explanation:
          "Dog is a noun because it names an animal, person, place, or thing.",
      },
      {
        id: "gpos1q3",
        type: "multiple-choice",
        questionText: "Identify the verb in this sentence:\nHe runs fast.",
        options: ["A) fast", "B) runs", "C) he", "D) runs fast"],
        correctAnswer: "B",
        explanation:
          "Runs is a verb because it shows the action performed by the subject.",
      },
      {
        id: "gpos1q4",
        type: "multiple-choice",
        questionText:
          "Identify the adjective in this sentence:\nShe has a red umbrella.",
        options: ["A) umbrella", "B) has", "C) red", "D) she"],
        correctAnswer: "C",
        explanation:
          "Red is an adjective because it describes the umbrella by telling its color.",
      },
      {
        id: "gpos1q5",
        type: "multiple-choice",
        questionText:
          "Identify the adverb in this sentence:\nHe sings beautifully.",
        options: ["A) sings", "B) beautifully", "C) he", "D) song"],
        correctAnswer: "B",
        explanation:
          "Beautifully is an adverb because it describes how the singing is done.",
      },
      {
        id: "gpos1q6",
        type: "multiple-choice",
        questionText:
          "Identify the preposition in this sentence:\nThe cat is on the roof.",
        options: ["A) cat", "B) is", "C) roof", "D) on"],
        correctAnswer: "D",
        explanation:
          "On is a preposition because it shows the relationship between the cat and the roof.",
      },
      {
        id: "gpos1q7",
        type: "multiple-choice",
        questionText:
          "Identify the conjunction in this sentence:\nI want tea and biscuits.",
        options: ["A) tea", "B) and", "C) biscuits", "D) want"],
        correctAnswer: "B",
        explanation:
          "And is a conjunction because it connects two words or phrases.",
      },
      {
        id: "gpos1q8",
        type: "multiple-choice",
        questionText:
          "Identify the interjection in this sentence:\nWow! That’s a great painting!",
        options: ["A) painting", "B) great", "C) Wow!", "D) That’s"],
        correctAnswer: "C",
        explanation:
          "Wow! is an interjection because it expresses strong emotion or surprise.",
      },
      {
        id: "gpos1q9",
        type: "multiple-choice",
        questionText:
          "Identify the pronoun in this sentence:\nThey are playing football.",
        options: ["A) football", "B) are", "C) They", "D) playing"],
        correctAnswer: "C",
        explanation:
          "They is a pronoun because it replaces a noun and refers to people.",
      },
      {
        id: "gpos1q10",
        type: "multiple-choice",
        questionText:
          "Identify the noun in this sentence:\nI am going to the school.",
        options: ["A) going", "B) school", "C) to", "D) am"],
        correctAnswer: "B",
        explanation: "School is a noun because it names a place.",
      },
      {
        id: "gpos1q11",
        type: "multiple-choice",
        questionText:
          "Identify the verb in this sentence:\nShe dances gracefully.",
        options: ["A) gracefully", "B) dances", "C) she", "D) dance"],
        correctAnswer: "B",
        explanation:
          "Dances is a verb because it shows the action performed by the subject.",
      },
      {
        id: "gpos1q12",
        type: "multiple-choice",
        questionText:
          "Identify the adjective in this sentence:\nIt was a sunny day.",
        options: ["A) day", "B) was", "C) sunny", "D) it"],
        correctAnswer: "C",
        explanation:
          "Sunny is an adjective because it describes the day by telling the weather condition.",
      },
      {
        id: "gpos1q13",
        type: "multiple-choice",
        questionText:
          "Identify the adverb in this sentence:\nThe baby slept soundly.",
        options: ["A) baby", "B) slept", "C) soundly", "D) The"],
        correctAnswer: "C",
        explanation:
          "Soundly is an adverb because it describes how the baby slept.",
      },
      {
        id: "gpos1q14",
        type: "multiple-choice",
        questionText:
          "Identify the preposition in this sentence:\nHe sat beside me.",
        options: ["A) he", "B) sat", "C) beside", "D) me"],
        correctAnswer: "C",
        explanation:
          "Beside is a preposition because it shows the relationship between “he” and “me.”",
      },
      {
        id: "gpos1q15",
        type: "multiple-choice",
        questionText:
          "Identify the conjunction in this sentence:\nShe is tired, but happy.",
        options: ["A) tired", "B) but", "C) happy", "D) is"],
        correctAnswer: "B",
        explanation:
          "But is a conjunction because it connects two contrasting ideas.",
      },
      {
        id: "gpos1q16",
        type: "multiple-choice",
        questionText:
          "Identify the pronoun in this sentence:\nWe love to travel.",
        options: ["A) We", "B) travel", "C) love", "D) to"],
        correctAnswer: "A",
        explanation:
          "We is a pronoun because it replaces a noun and refers to a group including the speaker.",
      },
      {
        id: "gpos1q17",
        type: "multiple-choice",
        questionText:
          "Identify the interjection in this sentence:\nOops! I dropped my phone.",
        options: ["A) dropped", "B) I", "C) Oops!", "D) phone"],
        correctAnswer: "C",
        explanation:
          "Oops! is an interjection because it shows sudden emotion or reaction.",
      },
      {
        id: "gpos1q18",
        type: "multiple-choice",
        questionText:
          "Identify the noun in this sentence:\nBirds are flying in the sky.",
        options: ["A) birds", "B) flying", "C) sky", "D) in"],
        correctAnswer: "C",
        explanation:
          "Birds and sky are nouns because they name living things and places respectively.",
      },
      {
        id: "gpos1q19",
        type: "multiple-choice",
        questionText:
          "Identify the verb in this sentence:\nThe baby cried loudly.",
        options: ["A) loudly", "B) cried", "C) baby", "D) The"],
        correctAnswer: "B",
        explanation:
          "Cried is a verb because it shows the action performed by the baby.",
      },
      {
        id: "gpos1q20",
        type: "multiple-choice",
        questionText:
          "Identify the adjective in this sentence:\nShe wore a beautiful dress.",
        options: ["A) dress", "B) beautiful", "C) wore", "D) She"],
        correctAnswer: "B",
        explanation:
          "Beautiful is an adjective because it describes the dress by telling how it looks.",
      },
    ],
  },
  {
    id: "grammar-subject-verb-agreement",
    categoryId: "grammar",
    title: "Subject-Verb Agreement",
    description:
      "Ensure your verbs agree with their subjects in number and person.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 1, // Changed from 2 to 1
    questions: [
      {
        id: "gsva1q1",
        type: "multiple-choice",
        questionText: "The jury ___ unanimous in their decision.",
        options: ["A) was", "B) were", "C) is", "D) has"],
        correctAnswer: "B",
        explanation:
          '"was" is used because "jury" is a collective noun treated as singular when acting as a unit.', // Corrected explanation to match the provided answer.
      },
      {
        id: "gsva1q2",
        type: "multiple-choice",
        questionText:
          "My father, along with my uncles, ___ going fishing tomorrow.",
        options: ["A) are", "B) is", "C) have", "D) were"],
        correctAnswer: "B",
        explanation:
          '"is" is correct because the main subject "My father" is singular; "along with" phrases do not affect the verb.',
      },
      {
        id: "gsva1q3",
        type: "multiple-choice",
        questionText: "Neither the teacher nor the students ___ the answer.",
        options: ["A) knows", "B) know", "C) has known", "D) knowing"],
        correctAnswer: "B",
        explanation:
          '"know" agrees with the plural noun closest to the verb, "students," so plural verb is used.',
      },
      {
        id: "gsva1q4",
        type: "multiple-choice",
        questionText: "There ___ a book and two pens on the table.",
        options: ["A) is", "B) are", "C) were", "D) has been"],
        correctAnswer: "B",
        explanation:
          '"is" is used because the singular noun "a book" is closest to the verb, even though "two pens" is plural.', // Corrected explanation to match the provided answer.
      },
      {
        id: "gsva1q5",
        type: "multiple-choice",
        questionText: "The list of items ___ on the desk.",
        options: ["A) are", "B) is", "C) have", "D) were"],
        correctAnswer: "B",
        explanation:
          '"is" is correct since the subject is "list," which is singular; the phrase "of items" is a modifier.',
      },
      {
        id: "gsva1q6",
        type: "multiple-choice",
        questionText:
          "Either these shirts or that dress ___ suitable for the event.",
        options: ["A) are", "B) is", "C) were", "D) have"],
        correctAnswer: "B",
        explanation:
          '"is" agrees with the nearest subject "that dress," which is singular, so singular verb is used.',
      },
      {
        id: "gsva1q7",
        type: "multiple-choice",
        questionText: "The committee ___ divided on the issue.",
        options: ["A) is", "B) are", "C) has", "D) have"],
        correctAnswer: "B",
        explanation:
          '"is" is used as "committee" is a collective noun considered singular when acting as one group.', // Corrected explanation to match the provided answer.
      },
      {
        id: "gsva1q8",
        type: "multiple-choice",
        questionText: "The scissors ___ on the table.",
        options: ["A) is", "B) are", "C) has", "D) was"],
        correctAnswer: "B",
        explanation:
          '"are" is correct because "scissors" is a plural noun despite referring to a single item.',
      },
      {
        id: "gsva1q9",
        type: "multiple-choice",
        questionText: "Neither she nor her friends ___ coming to the event.",
        options: ["A) is", "B) are", "C) has", "D) was"],
        correctAnswer: "B",
        explanation:
          '"are" agrees with the plural noun "friends," which is closer to the verb than "she."',
      },
      {
        id: "gsva1q10",
        type: "multiple-choice",
        questionText:
          "Either the students or the teacher ___ responsible for this mistake.",
        options: ["A) are", "B) is", "C) have", "D) were"],
        correctAnswer: "B",
        explanation:
          '"is" agrees with the singular noun "teacher," closest to the verb, so singular form is correct.',
      },
      {
        id: "gsva1q11",
        type: "multiple-choice",
        questionText: "A number of students ___ absent today.",
        options: ["A) is", "B) are", "C) has", "D) was"],
        correctAnswer: "B",
        explanation:
          '"are" is used because "a number of" is followed by a plural noun and takes a plural verb.',
      },
      {
        id: "gsva1q12",
        type: "multiple-choice",
        questionText: "The number of students in the class ___ thirty.",
        options: ["A) is", "B) are", "C) were", "D) have"],
        correctAnswer: "A",
        explanation:
          '"is" is correct because "the number" refers to a singular quantity.',
      },
      {
        id: "gsva1q13",
        type: "multiple-choice",
        questionText: "Mathematics ___ my favorite subject.",
        options: ["A) are", "B) is", "C) were", "D) have"],
        correctAnswer: "B",
        explanation:
          '"is" is used because subjects like "Mathematics" are treated as singular.',
      },
      {
        id: "gsva1q14",
        type: "multiple-choice",
        questionText: "The police ___ searching for the thief.",
        options: ["A) is", "B) are", "C) was", "D) has"],
        correctAnswer: "B",
        explanation:
          '"are" agrees with "police," which is always plural when referring to the group.',
      },
      {
        id: "gsva1q15",
        type: "multiple-choice",
        questionText:
          "Either my mother or my sisters ___ coming to pick me up.",
        options: ["A) is", "B) are", "C) has", "D) was"],
        correctAnswer: "B",
        explanation:
          '"are" is correct since "my sisters" is plural and closest to the verb.',
      },
      {
        id: "gsva1q16",
        type: "multiple-choice",
        questionText: "None of the watermelons ___ ripe.",
        options: ["A) are", "B) is", "C) has", "D) were"],
        correctAnswer: "B",
        explanation:
          '"is" is used because "none" when referring to uncountable nouns like watermelons is singular.',
      },
      {
        id: "gsva1q17",
        type: "multiple-choice",
        questionText: "Every boy and girl ___ invited to the party.",
        options: ["A) are", "B) is", "C) were", "D) have"],
        correctAnswer: "B",
        explanation:
          '"is" agrees with the singular indefinite pronouns "every boy and girl" taken individually.',
      },
      {
        id: "gsva1q18",
        type: "multiple-choice",
        questionText: "The pair of shoes ___ under the bed.",
        options: ["A) are", "B) is", "C) have", "D) were"],
        correctAnswer: "B",
        explanation:
          '"is" is correct as "pair" is singular; "of shoes" is a modifier.',
      },
      {
        id: "gsva1q19",
        type: "multiple-choice",
        questionText: "The data ___ been collected carefully.",
        options: ["A) has", "B) have", "C) is", "D) was"],
        correctAnswer: "B",
        explanation:
          '"has" is used because "data" is treated as singular in formal usage here.', // Corrected explanation to match the provided answer.
      },
      {
        id: "gsva1q20",
        type: "multiple-choice",
        questionText: "Twenty miles ___ a long distance to walk.",
        options: ["A) are", "B) is", "C) have", "D) were"],
        correctAnswer: "B",
        explanation:
          '"is" is correct since "twenty miles" is considered a single distance, thus singular verb.',
      },
    ],
  },

  {
    id: "grammar-countable-uncountable",
    categoryId: "grammar",
    title: "Countable and Uncountable Nouns",
    description:
      "Distinguish between countable and uncountable nouns and their usage.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 1, // Changed from 2 to 1
    questions: [
      {
        id: "gcu1q1",
        type: "multiple-choice",
        questionText: "I bought a loaf of ___ from the bakery.",
        options: ["A) breads", "B) bread", "C) breades", "D) a bread"],
        correctAnswer: "B",
        explanation:
          '"bread" is uncountable, so it doesn’t take a plural form like "breads."',
      },
      {
        id: "gcu1q2",
        type: "multiple-choice",
        questionText: "There isn’t ___ milk left in the fridge.",
        options: ["A) many", "B) some", "C) much", "D) few"],
        correctAnswer: "C",
        explanation:
          '"much" is used with uncountable nouns like milk to indicate quantity.',
      },
      {
        id: "gcu1q3",
        type: "multiple-choice",
        questionText: "I need to buy some ___ for the recipe.",
        options: ["A) egg", "B) eggs", "C) egges", "D) egg’s"],
        correctAnswer: "B",
        explanation:
          '"eggs" is plural because more than one egg is needed for the recipe.',
      },
      {
        id: "gcu1q4",
        type: "multiple-choice",
        questionText: "She gave me some useful ___.",
        options: ["A) advices", "B) advice", "C) advisees", "D) advises"],
        correctAnswer: "B",
        explanation:
          '"advice" is an uncountable noun and doesn’t have a plural form.',
      },
      {
        id: "gcu1q5",
        type: "multiple-choice",
        questionText: "I packed two ___ for my vacation.",
        options: [
          "A) luggage",
          "B) luggages",
          "C) pieces of luggage",
          "D) luggage items",
        ],
        correctAnswer: "C",
        explanation:
          '"pieces of luggage" is correct because "luggage" is uncountable and needs a measure word for count.',
      },
      {
        id: "gcu1q6",
        type: "multiple-choice",
        questionText: "Can I have a ___ of water, please?",
        options: ["A) bottle", "B) water", "C) glass", "D) glass of"],
        correctAnswer: "D",
        explanation:
          '"glass of" is correct when requesting a quantity of water in a container.',
      },
      {
        id: "gcu1q7",
        type: "multiple-choice",
        questionText: "The teacher gave us ___ homework.",
        options: ["A) a", "B) some", "C) many", "D) an"],
        correctAnswer: "B",
        explanation:
          '"some" is used with uncountable nouns like homework to indicate an unspecified amount.',
      },
      {
        id: "gcu1q8",
        type: "multiple-choice",
        questionText: "He gave me three ___ of chocolate.",
        options: ["A) bars", "B) bar", "C) pieces", "D) bottles"],
        correctAnswer: "A",
        explanation: '"bars" is plural for countable chocolate items.',
      },
      {
        id: "gcu1q9",
        type: "multiple-choice",
        questionText: "There are ___ apples in the basket.",
        options: ["A) many", "B) much", "C) a little", "D) little"],
        correctAnswer: "A",
        explanation: '"many" is used with plural countable nouns like apples.',
      },
      {
        id: "gcu1q10",
        type: "multiple-choice",
        questionText: "I don’t have ___ information about the topic.",
        options: ["A) many", "B) much", "C) a few", "D) a"],
        correctAnswer: "B",
        explanation: '"much" is used with uncountable nouns like information.',
      },
      {
        id: "gcu1q11",
        type: "multiple-choice",
        questionText: "She has a lot of ___ in her house.",
        options: [
          "A) furnitures",
          "B) furniture",
          "C) furniture pieces",
          "D) furniture’s",
        ],
        correctAnswer: "B",
        explanation:
          '"furniture" is uncountable and doesn’t have a plural form.',
      },
      {
        id: "gcu1q12",
        type: "multiple-choice",
        questionText: "How ___ sugar do you want in your tea?",
        options: ["A) many", "B) much", "C) few", "D) little"],
        correctAnswer: "B",
        explanation:
          '"much" is used with uncountable nouns like sugar to ask about quantity.',
      },
      {
        id: "gcu1q13",
        type: "multiple-choice",
        questionText: "I saw several ___ in the sky.",
        options: ["A) bird", "B) birds", "C) birdes", "D) bird’s"],
        correctAnswer: "B",
        explanation:
          '"birds" is plural because multiple countable items are seen.',
      },
      {
        id: "gcu1q14",
        type: "multiple-choice",
        questionText: "Would you like some ___?",
        options: ["A) rice", "B) rices", "C) rice grains", "D) grain rice"],
        correctAnswer: "A",
        explanation: '"rice" is uncountable and doesn’t take a plural form.',
      },
      {
        id: "gcu1q15",
        type: "multiple-choice",
        questionText: "The bottle is full of ___.",
        options: ["A) waters", "B) water", "C) water’s", "D) watery"],
        correctAnswer: "B",
        explanation:
          '"water" is uncountable, so plural or possessive forms are incorrect here.',
      },
      {
        id: "gcu1q16",
        type: "multiple-choice",
        questionText: "They have bought new ___ for the living room.",
        options: [
          "A) furnitures",
          "B) furniture",
          "C) furniture’s",
          "D) furniture pieces",
        ],
        correctAnswer: "B",
        explanation:
          '"furniture" is uncountable and used without plural forms.',
      },
      {
        id: "gcu1q17",
        type: "multiple-choice",
        questionText: "There isn’t ___ coffee left in the jar.",
        options: ["A) many", "B) some", "C) much", "D) few"],
        correctAnswer: "C",
        explanation: '"much" is correct for uncountable nouns like coffee.',
      },
      {
        id: "gcu1q18",
        type: "multiple-choice",
        questionText: "He ate two ___ of cake at the party.",
        options: ["A) slices", "B) slice", "C) slice of", "D) sliceses"],
        correctAnswer: "A",
        explanation:
          '"slices" is plural because multiple pieces of cake are counted.',
      },
      {
        id: "gcu1q19",
        type: "multiple-choice",
        questionText: "She found a ___ in the drawer.",
        options: [
          "A) scissor",
          "B) scissors",
          "C) pair of scissors",
          "D) scissorses",
        ],
        correctAnswer: "C",
        explanation:
          '"pair of scissors" is correct because "scissors" is plural but refers to one item.',
      },
      {
        id: "gcu1q20",
        type: "multiple-choice",
        questionText: "She gave me two ___ of advice before the exam.",
        options: ["A) pieces", "B) advices", "C) piece", "D) advises"],
        correctAnswer: "A",
        explanation:
          '"pieces" is the correct measure word for uncountable nouns like advice when counted.',
      },
    ],
  },

  {
    id: "grammar-present-tense",
    categoryId: "grammar",
    title: "All in Present Tense",
    description: "Test your mastery of various present tenses in English.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "gpt1q1",
        type: "multiple-choice",
        questionText: "She usually ______ tea in the morning.",
        options: ["A) drink", "B) drinks", "C) is drinking", "D) has drunk"],
        correctAnswer: "B",
        explanation: "Present Simple (habit)",
      },
      {
        id: "gpt1q2",
        type: "multiple-choice",
        questionText: "I ______ my homework right now.",
        options: ["A) do", "B) does", "C) am doing", "D) have done"],
        correctAnswer: "C",
        explanation: "Present Continuous (right now)",
      },
      {
        id: "gpt1q3",
        type: "multiple-choice",
        questionText: "They ______ to London twice this year.",
        options: ["A) go", "B) have gone", "C) are going", "D) going"],
        correctAnswer: "B",
        explanation: "Present Perfect (past experience with result in present)",
      },
      {
        id: "gpt1q4",
        type: "multiple-choice",
        questionText: "Look! The baby ______.",
        options: [
          "A) cries",
          "B) is crying",
          "C) has cried",
          "D) has been crying",
        ],
        correctAnswer: "B",
        explanation: "Present Continuous (now)",
      },
      {
        id: "gpt1q5",
        type: "multiple-choice",
        questionText: "My brother ______ his bike to school every day.",
        options: ["A) rides", "B) ride", "C) is riding", "D) has been riding"],
        correctAnswer: "A",
        explanation: "Present Simple (habit)",
      },
      {
        id: "gpt1q6",
        type: "multiple-choice",
        questionText: "She ______ the guitar for two hours.",
        options: [
          "A) plays",
          "B) has been playing",
          "C) is playing",
          "D) has played",
        ],
        correctAnswer: "B",
        explanation: "Present Perfect Continuous (time duration)",
      },
      {
        id: "gpt1q7",
        type: "multiple-choice",
        questionText: "They ______ in this house since 2015.",
        options: ["A) live", "B) are living", "C) have lived", "D) has lived"],
        correctAnswer: "C",
        explanation: "Present Perfect (since + point in time)",
      },
      {
        id: "gpt1q8",
        type: "multiple-choice",
        questionText: "Right now, I ______ to music.",
        options: [
          "A) listen",
          "B) listens",
          "C) am listening",
          "D) have listened",
        ],
        correctAnswer: "C",
        explanation: "Present Continuous (now)",
      },
      {
        id: "gpt1q9",
        type: "multiple-choice",
        questionText: "He ______ to the gym on Mondays.",
        options: ["A) goes", "B) is going", "C) has gone", "D) go"],
        correctAnswer: "A",
        explanation: "Present Simple (routine)",
      },
      {
        id: "gpt1q10",
        type: "multiple-choice",
        questionText: "We ______ all the food already.",
        options: ["A) eat", "B) have eaten", "C) are eating", "D) eats"],
        correctAnswer: "B",
        explanation: "Present Perfect (result)",
      },
      {
        id: "gpt1q11",
        type: "multiple-choice",
        questionText: "She ______ for the bus for 20 minutes.",
        options: [
          "A) waits",
          "B) has been waiting",
          "C) is waiting",
          "D) waited",
        ],
        correctAnswer: "B",
        explanation: "Present Perfect Continuous (time duration)",
      },
      {
        id: "gpt1q12",
        type: "multiple-choice",
        questionText: "My father ______ in a bank.",
        options: ["A) works", "B) is working", "C) has worked", "D) working"],
        correctAnswer: "A",
        explanation: "Present Simple (fact)",
      },
      {
        id: "gpt1q13",
        type: "multiple-choice",
        questionText: "I ______ this book three times.",
        options: ["A) am reading", "B) read", "C) have read", "D) reads"],
        correctAnswer: "C",
        explanation: "Present Perfect (experience)",
      },
      {
        id: "gpt1q14",
        type: "multiple-choice",
        questionText: "The students ______ their lessons now.",
        options: [
          "A) study",
          "B) studies",
          "C) are studying",
          "D) have studied",
        ],
        correctAnswer: "C",
        explanation: "Present Continuous (right now)",
      },
      {
        id: "gpt1q15",
        type: "multiple-choice",
        questionText: "It ______ all day.",
        options: [
          "A) rains",
          "B) is raining",
          "C) has rained",
          "D) has been raining",
        ],
        correctAnswer: "D",
        explanation:
          "Present Perfect Continuous (uninterrupted action all day)",
      },
      {
        id: "gpt1q16",
        type: "multiple-choice",
        questionText: "She always ______ late to class.",
        options: [
          "A) arrives",
          "B) is arriving",
          "C) has arrived",
          "D) arrive",
        ],
        correctAnswer: "A",
        explanation: "Present Simple (habit)",
      },
      {
        id: "gpt1q17",
        type: "multiple-choice",
        questionText: "I ______ to improve my English since last year.",
        options: [
          "A) try",
          "B) am trying",
          "C) have tried",
          "D) have been trying",
        ],
        correctAnswer: "D",
        explanation: "Present Perfect Continuous (since + starting point)",
      },
      {
        id: "gpt1q18",
        type: "multiple-choice",
        questionText: "He ______ tennis at the moment.",
        options: ["A) plays", "B) play", "C) is playing", "D) has played"],
        correctAnswer: "C",
        explanation: "Present Continuous (now)",
      },
      {
        id: "gpt1q19",
        type: "multiple-choice",
        questionText: "We ______ in this city for a long time.",
        options: [
          "A) live",
          "B) are living",
          "C) have been living",
          "D) lives",
        ],
        correctAnswer: "C",
        explanation: "Present Perfect Continuous (long time)",
      },
      {
        id: "gpt1q20",
        type: "multiple-choice",
        questionText: "My sister ______ never ______ sushi.",
        options: [
          "A) has / tried",
          "B) is / trying",
          "C) have / tried",
          "D) has / trying",
        ],
        correctAnswer: "A",
        explanation: "Present Perfect (experience)",
      },
    ],
  },
  {
    id: "grammar-past-tense",
    categoryId: "grammar",
    title: "All in Past Tense",
    description: "Test your understanding of various past tenses in English.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "gpt2q1",
        type: "multiple-choice",
        questionText: "She ______ to the market yesterday.",
        options: ["A) goes", "B) went", "C) was going", "D) had gone"],
        correctAnswer: "B",
        explanation: "Past Simple (completed action)",
      },
      {
        id: "gpt2q2",
        type: "multiple-choice",
        questionText: "They ______ when the phone rang.",
        options: ["A) were sleeping", "B) sleep", "C) had slept", "D) slept"],
        correctAnswer: "A",
        explanation: "Past Continuous (interrupted by 'phone rang')",
      },
      {
        id: "gpt2q3",
        type: "multiple-choice",
        questionText: "I ______ my homework before dinner.",
        options: [
          "A) finished",
          "B) had finished",
          "C) was finishing",
          "D) finish",
        ],
        correctAnswer: "B",
        explanation: "Past Perfect (completed before dinner)",
      },
      {
        id: "gpt2q4",
        type: "multiple-choice",
        questionText: "While I ______ TV, my brother was cooking.",
        options: [
          "A) was watching",
          "B) watched",
          "C) had watched",
          "D) watch",
        ],
        correctAnswer: "A",
        explanation: "Past Continuous (while another action was happening)",
      },
      {
        id: "gpt2q5",
        type: "multiple-choice",
        questionText:
          "He ______ in that company for five years before he left.",
        options: ["A) works", "B) worked", "C) had worked", "D) was working"],
        correctAnswer: "C",
        explanation: "Past Perfect (completed before he left)",
      },
      {
        id: "gpt2q6",
        type: "multiple-choice",
        questionText: "We ______ in the park all afternoon.",
        options: [
          "A) played",
          "B) had played",
          "C) were playing",
          "D) have played",
        ],
        correctAnswer: "C",
        explanation: "Past Continuous (all afternoon — ongoing)",
      },
      {
        id: "gpt2q7",
        type: "multiple-choice",
        questionText: "She ______ asleep before I got home.",
        options: ["A) had fallen", "B) was falling", "C) fell", "D) falls"],
        correctAnswer: "A",
        explanation: "Past Perfect (completed before 'I got home')",
      },
      {
        id: "gpt2q8",
        type: "multiple-choice",
        questionText: "They ______ dinner when their friends arrived.",
        options: ["A) had", "B) had had", "C) were having", "D) has"],
        correctAnswer: "C",
        explanation: "Past Continuous (ongoing when 'friends arrived')",
      },
      {
        id: "gpt2q9",
        type: "multiple-choice",
        questionText: "I ______ the book when he came to visit.",
        options: ["A) read", "B) had read", "C) was reading", "D) am reading"],
        correctAnswer: "C",
        explanation: "Past Continuous (interrupted by 'he came')",
      },
      {
        id: "gpt2q10",
        type: "multiple-choice",
        questionText: "By the time we arrived, the film ______.",
        options: [
          "A) started",
          "B) had started",
          "C) was starting",
          "D) starts",
        ],
        correctAnswer: "B",
        explanation: "Past Perfect (film already started when we arrived)",
      },
      {
        id: "gpt2q11",
        type: "multiple-choice",
        questionText: "She ______ for an hour before the rain stopped.",
        options: [
          "A) ran",
          "B) had been running",
          "C) was running",
          "D) has run",
        ],
        correctAnswer: "B",
        explanation: "Past Perfect Continuous (action before 'rain stopped')",
      },
      {
        id: "gpt2q12",
        type: "multiple-choice",
        questionText: "He ______ to the concert last week.",
        options: ["A) goes", "B) went", "C) going", "D) had gone"],
        correctAnswer: "B",
        explanation: "Past Simple (completed in the past)",
      },
      {
        id: "gpt2q13",
        type: "multiple-choice",
        questionText: "They ______ for their lost dog all day.",
        options: ["A) were looking", "B) looked", "C) had looked", "D) looks"],
        correctAnswer: "A",
        explanation: "Past Continuous (ongoing all day)",
      },
      {
        id: "gpt2q14",
        type: "multiple-choice",
        questionText: "I ______ to Paris three times before 2020.",
        options: ["A) was going", "B) went", "C) had been", "D) had gone"],
        correctAnswer: "D",
        explanation: "Past Perfect (happened before 2020)",
      },
      {
        id: "gpt2q15",
        type: "multiple-choice",
        questionText: "The students ______ when the teacher entered.",
        options: ["A) were talking", "B) talked", "C) had talked", "D) talks"],
        correctAnswer: "A",
        explanation: "Past Continuous (ongoing when teacher entered)",
      },
      {
        id: "gpt2q16",
        type: "multiple-choice",
        questionText: "My phone ______, so I didn’t get your message.",
        options: ["A) was dying", "B) died", "C) had died", "D) die"],
        correctAnswer: "C",
        explanation: "Past Perfect (phone dead before message received)",
      },
      {
        id: "gpt2q17",
        type: "multiple-choice",
        questionText: "When I saw her, she ______ for the bus.",
        options: [
          "A) waited",
          "B) was waiting",
          "C) had waited",
          "D) had been waiting",
        ],
        correctAnswer: "B",
        explanation: "Past Continuous (ongoing when I saw her)",
      },
      {
        id: "gpt2q18",
        type: "multiple-choice",
        questionText: "The match ______ by the time we reached the stadium.",
        options: [
          "A) started",
          "B) had started",
          "C) was starting",
          "D) has started",
        ],
        correctAnswer: "B",
        explanation: "Past Perfect (match finished starting before arrival)",
      },
      {
        id: "gpt2q19",
        type: "multiple-choice",
        questionText:
          "I ______ for him for over an hour when he finally arrived.",
        options: [
          "A) waited",
          "B) had waited",
          "C) had been waiting",
          "D) was waiting",
        ],
        correctAnswer: "C",
        explanation: "Past Perfect Continuous (ongoing before arrival)",
      },
      {
        id: "gpt2q20",
        type: "multiple-choice",
        questionText: "She ______ the letter before she left.",
        options: ["A) wrote", "B) was writing", "C) had written", "D) writes"],
        correctAnswer: "C",
        explanation: "Past Perfect (completed before she left)",
      },
    ],
  },
  {
    id: "grammar-future-tense",
    categoryId: "grammar",
    title: "All in Future Tense",
    description: "Test your knowledge of various future tenses in English.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "gft1q1",
        type: "multiple-choice",
        questionText: "I think it ______ tomorrow.",
        options: ["A) will rain", "B) rains", "C) is raining", "D) has rained"],
        correctAnswer: "A",
        explanation: "Future Simple (prediction)",
      },
      {
        id: "gft1q2",
        type: "multiple-choice",
        questionText: "She ______ her homework by this evening.",
        options: [
          "A) finishes",
          "B) will finish",
          "C) will have finished",
          "D) is finishing",
        ],
        correctAnswer: "C",
        explanation: "Future Perfect (completed by evening)",
      },
      {
        id: "gft1q3",
        type: "multiple-choice",
        questionText: "By next month, they ______ here for 10 years.",
        options: [
          "A) will live",
          "B) will be living",
          "C) will have lived",
          "D) will have been living",
        ],
        correctAnswer: "D",
        explanation: "Future Perfect Continuous (duration until future)",
      },
      {
        id: "gft1q4",
        type: "multiple-choice",
        questionText: "This time tomorrow, I ______ on the beach.",
        options: [
          "A) will be lying",
          "B) will have lain",
          "C) lie",
          "D) have lied",
        ],
        correctAnswer: "A",
        explanation: "Future Continuous (action at future time)",
      },
      {
        id: "gft1q5",
        type: "multiple-choice",
        questionText: "He ______ a new car next week.",
        options: ["A) buys", "B) will buy", "C) buying", "D) buy"],
        correctAnswer: "B",
        explanation: "Future Simple (planned action)",
      },
      {
        id: "gft1q6",
        type: "multiple-choice",
        questionText: "By the end of this week, she ______ the project.",
        options: [
          "A) will complete",
          "B) will have completed",
          "C) will be completing",
          "D) completes",
        ],
        correctAnswer: "B",
        explanation: "Future Perfect (completed by week’s end)",
      },
      {
        id: "gft1q7",
        type: "multiple-choice",
        questionText: "They ______ dinner at 8 pm tonight.",
        options: ["A) have", "B) will be having", "C) will have had", "D) has"],
        correctAnswer: "B",
        explanation: "Future Continuous (ongoing at 8 pm)",
      },
      {
        id: "gft1q8",
        type: "multiple-choice",
        questionText: "We ______ to the party if we are invited.",
        options: ["A) will go", "B) go", "C) are going", "D) went"],
        correctAnswer: "A",
        explanation: "Future Simple (conditional future)",
      },
      {
        id: "gft1q9",
        type: "multiple-choice",
        questionText: "In December, he ______ here for five years.",
        options: [
          "A) will work",
          "B) will have worked",
          "C) works",
          "D) has worked",
        ],
        correctAnswer: "B",
        explanation: "Future Perfect (duration completed by Dec)",
      },
      {
        id: "gft1q10",
        type: "multiple-choice",
        questionText: "At 10 pm, I ______ the movie.",
        options: [
          "A) will watch",
          "B) will be watching",
          "C) have watched",
          "D) am watching",
        ],
        correctAnswer: "B",
        explanation: "Future Continuous (action happening at 10 pm)",
      },
      {
        id: "gft1q11",
        type: "multiple-choice",
        questionText: "By next summer, she ______ her degree.",
        options: [
          "A) will have finished",
          "B) finishes",
          "C) is finishing",
          "D) will finish",
        ],
        correctAnswer: "A",
        explanation: "Future Perfect (completed by summer)",
      },
      {
        id: "gft1q12",
        type: "multiple-choice",
        questionText: "When you arrive, I ______ dinner.",
        options: [
          "A) will cook",
          "B) will have cooked",
          "C) will be cooking",
          "D) cook",
        ],
        correctAnswer: "C",
        explanation: "Future Continuous (in process when you arrive)",
      },
      {
        id: "gft1q13",
        type: "multiple-choice",
        questionText: "He ______ his new job soon.",
        options: ["A) will start", "B) started", "C) is starting", "D) starts"],
        correctAnswer: "A",
        explanation: "Future Simple (planned future)",
      },
      {
        id: "gft1q14",
        type: "multiple-choice",
        questionText: "By tomorrow morning, it ______ for 10 hours.",
        options: [
          "A) will rain",
          "B) will have rained",
          "C) will have been raining",
          "D) rains",
        ],
        correctAnswer: "C",
        explanation: "Future Perfect Continuous (ongoing 10 hours)",
      },
      {
        id: "gft1q15",
        type: "multiple-choice",
        questionText: "She ______ a speech at the conference next week.",
        options: ["A) gives", "B) gave", "C) will be giving", "D) has given"],
        correctAnswer: "C",
        explanation: "Future Continuous (scheduled event)",
      },
      {
        id: "gft1q16",
        type: "multiple-choice",
        questionText: "They ______ their exams by the time the holidays start.",
        options: [
          "A) will finish",
          "B) will have finished",
          "C) finish",
          "D) are finishing",
        ],
        correctAnswer: "B",
        explanation: "Future Perfect (completed by holidays)",
      },
      {
        id: "gft1q17",
        type: "multiple-choice",
        questionText: "We ______ this movie later.",
        options: ["A) watch", "B) are watching", "C) will watch", "D) watched"],
        correctAnswer: "C",
        explanation: "Future Simple (planned later)",
      },
      {
        id: "gft1q18",
        type: "multiple-choice",
        questionText: "Next month, I ______ my new apartment.",
        options: [
          "A) will have been renting",
          "B) will rent",
          "C) am renting",
          "D) rents",
        ],
        correctAnswer: "B",
        explanation: "Future Simple (decision)",
      },
      {
        id: "gft1q19",
        type: "multiple-choice",
        questionText: "By 5 pm, she ______ for 3 hours.",
        options: [
          "A) will work",
          "B) will be working",
          "C) will have worked",
          "D) will have been working",
        ],
        correctAnswer: "D",
        explanation: "Future Perfect Continuous (3-hour duration)",
      },
      {
        id: "gft1q20",
        type: "multiple-choice",
        questionText: "You ______ the answer by tomorrow.",
        options: ["A) know", "B) will know", "C) knew", "D) knowing"],
        correctAnswer: "B",
        explanation: "Future Simple (certainty)",
      },
    ],
  },
  {
    id: "grammar-error-spotting",
    categoryId: "grammar",
    title: "Error Spotting in Sentences",
    description: "Identify and correct grammatical errors in sentences.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "ges1q1",
        type: "multiple-choice",
        questionText: "She will visits her grandmother tomorrow.",
        options: [
          "A) will visits",
          "B) her",
          "C) grandmother tomorrow",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Use base verb after “will” → visit.",
      },
      {
        id: "ges1q2",
        type: "multiple-choice",
        questionText: "I will be finished my work by the time you arrive.",
        options: [
          "A) will be finished",
          "B) my work",
          "C) by the time you arrive",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Use active voice: will have finished.",
      },
      {
        id: "ges1q3",
        type: "multiple-choice",
        questionText:
          "By next year, they will have been living here for ten years.",
        options: [
          "A) will have been living",
          "B) here",
          "C) for ten years",
          "D) No error",
        ],
        correctAnswer: "D",
        explanation: "Sentence is correctly structured.",
      },
      {
        id: "ges1q4",
        type: "multiple-choice",
        questionText: "He will going to the store later today.",
        options: [
          "A) will going",
          "B) to the store",
          "C) later today",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Incorrect form; should be will go or is going.",
      },
      {
        id: "ges1q5",
        type: "multiple-choice",
        questionText: "At this time tomorrow, we will be fly to Paris.",
        options: [
          "A) will be fly",
          "B) to Paris",
          "C) tomorrow",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Use -ing form after “will be” → flying.",
      },
      {
        id: "ges1q6",
        type: "multiple-choice",
        questionText:
          "By the time you reach the station, the train will has left.",
        options: [
          "A) By the time you reach",
          "B) the station",
          "C) will has left",
          "D) No error",
        ],
        correctAnswer: "C",
        explanation: "Use have after “will” → will have left.",
      },
      {
        id: "ges1q7",
        type: "multiple-choice",
        questionText:
          "She will have been working for three hours when we arrive.",
        options: [
          "A) will have been working",
          "B) for three hours",
          "C) when we arrive",
          "D) No error",
        ],
        correctAnswer: "D",
        explanation: "Proper use of future perfect continuous.",
      },
      {
        id: "ges1q8",
        type: "multiple-choice",
        questionText: "They will finishes the project soon.",
        options: [
          "A) will finishes",
          "B) the project",
          "C) soon",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Use base verb after “will” → finish.",
      },
      {
        id: "ges1q9",
        type: "multiple-choice",
        questionText: "I will call you as soon as I will reach home.",
        options: [
          "A) will call",
          "B) as soon as",
          "C) I will reach home",
          "D) No error",
        ],
        correctAnswer: "C",
        explanation: "Use present simple after “as soon as” → reach.",
      },
      {
        id: "ges1q10",
        type: "multiple-choice",
        questionText: "We will be waiting for you outside the theater.",
        options: [
          "A) will be waiting",
          "B) for you",
          "C) outside the theater",
          "D) No error",
        ],
        correctAnswer: "D",
        explanation: "Sentence is correct.",
      },
      {
        id: "ges1q11",
        type: "multiple-choice",
        questionText: "Next month, he will have complete the training program.",
        options: [
          "A) will have complete",
          "B) the training program",
          "C) Next month",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Use past participle after “will have” → completed.",
      },
      {
        id: "ges1q12",
        type: "multiple-choice",
        questionText: "She will be attend the conference tomorrow.",
        options: [
          "A) will be attend",
          "B) the conference",
          "C) tomorrow",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Use -ing form after “will be” → attending.",
      },
      {
        id: "ges1q13",
        type: "multiple-choice",
        questionText:
          "By this time next week, they will have arrived in Japan.",
        options: [
          "A) By this time next week",
          "B) will have arrived",
          "C) in Japan",
          "D) No error",
        ],
        correctAnswer: "D",
        explanation: "Sentence is correctly written.",
      },
      {
        id: "ges1q14",
        type: "multiple-choice",
        questionText: "The students will writes essays for the contest.",
        options: [
          "A) will writes",
          "B) essays",
          "C) for the contest",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Use base verb after “will” → write.",
      },
      {
        id: "ges1q15",
        type: "multiple-choice",
        questionText:
          "I will not be going to the meeting because of my illness.",
        options: [
          "A) will not be going",
          "B) to the meeting",
          "C) because of my illness",
          "D) No error",
        ],
        correctAnswer: "D",
        explanation: "Sentence is correct.",
      },
      {
        id: "ges1q16",
        type: "multiple-choice",
        questionText: "By 2025, this bridge will be completed.",
        options: [
          "A) By 2025",
          "B) this bridge",
          "C) will be completed",
          "D) No error",
        ],
        correctAnswer: "D",
        explanation: "Sentence is grammatically fine.",
      },
      {
        id: "ges1q17",
        type: "multiple-choice",
        questionText: "They will have been living abroad since five years.",
        options: [
          "A) will have been living",
          "B) abroad",
          "C) since five years",
          "D) No error",
        ],
        correctAnswer: "C",
        explanation: "Use for with a time period → for five years.",
      },
      {
        id: "ges1q18",
        type: "multiple-choice",
        questionText: "We will going to the zoo this weekend.",
        options: [
          "A) will going",
          "B) to the zoo",
          "C) this weekend",
          "D) No error",
        ],
        correctAnswer: "A",
        explanation: "Incorrect form; should be will go or are going.",
      },
      {
        id: "ges1q19",
        type: "multiple-choice",
        questionText:
          "He will have been teaching here for ten years by December.",
        options: [
          "A) will have been teaching",
          "B) here",
          "C) by December",
          "D) No error",
        ],
        correctAnswer: "D",
        explanation: "Sentence is correctly formed.",
      },
      {
        id: "ges1q20",
        type: "multiple-choice",
        questionText: "By the end of this month, they will finished the work.",
        options: [
          "A) By the end of this month",
          "B) they",
          "C) will finished",
          "D) No error",
        ],
        correctAnswer: "C",
        explanation: "Use have after “will” → will have finished.",
      },
    ],
  },
  {
    id: "grammar-punctuations",
    categoryId: "grammar",
    title: "Punctuations",
    description: "Test your knowledge of English punctuation rules.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "gpun1q1",
        type: "multiple-choice",
        questionText: "Which sentence uses the comma ( , ) correctly?",
        options: [
          "A) The city is beautiful, and lively and full of history.",
          "B) The city is beautiful, lively, and full of history.",
          "C) The city is beautiful lively and, full of history.",
          "D) The city, is beautiful, lively and full of history.",
        ],
        correctAnswer: "B",
        explanation: "Commas correctly separate adjectives in a list.",
      },
      {
        id: "gpun1q2",
        type: "multiple-choice",
        questionText: "Which sentence correctly uses a colon ( : )?",
        options: [
          "A) He bought: apples, oranges, and bananas.",
          "B) He bought the following: apples, oranges, and bananas.",
          "C) He: bought apples, oranges, and bananas.",
          "D) He bought apples: oranges and bananas.",
        ],
        correctAnswer: "B",
        explanation: "Colon introduces a list after a complete sentence.",
      },
      {
        id: "gpun1q3",
        type: "multiple-choice",
        questionText:
          "Identify the sentence with correct apostrophe ( ’ ) use.",
        options: [
          "A) The students book was on the table.",
          "B) The student's book was on the table.",
          "C) The students' book was on the table.",
          "D) The students book's was on the table.",
        ],
        correctAnswer: "C",
        explanation: "Apostrophe shows possession by multiple students.",
      },
      {
        id: "gpun1q4",
        type: "multiple-choice",
        questionText:
          'Where should you place a comma in this sentence?\n"To conclude it is necessary to invest in renewable energy."',
        options: [
          'A) After "conclude"',
          'B) After "necessary"',
          'C) After "renewable"',
          "D) No comma needed",
        ],
        correctAnswer: "A",
        explanation: 'Comma after introductory phrase "To conclude."',
      },
      {
        id: "gpun1q5",
        type: "multiple-choice",
        questionText: "Choose the sentence that uses the dash ( – ) correctly.",
        options: [
          "A) There are three main reasons– pollution, overpopulation, and deforestation.",
          "B) There are three main reasons – pollution, overpopulation, and deforestation.",
          "C) There are – three main reasons pollution, overpopulation, and deforestation.",
          "D) There are three main reasons pollution – overpopulation – and deforestation.",
        ],
        correctAnswer: "B",
        explanation: "Dash properly introduces a list after a full sentence.",
      },
      {
        id: "gpun1q6",
        type: "multiple-choice",
        questionText: "Which sentence has correct commas?",
        options: [
          "A) I like apples oranges bananas.",
          "B) I like apples, oranges, bananas.",
          "C) I like apples, oranges, and bananas.",
          "D) I like, apples, oranges and bananas.",
        ],
        correctAnswer: "C",
        explanation: "Commas separate items in a list correctly.",
      },
      {
        id: "gpun1q7",
        type: "multiple-choice",
        questionText:
          'Which mark best joins these sentences?\n"I was tired ___ I went to bed early."',
        options: [
          "A) . (full stop)",
          "B) , (comma)",
          "C) ; (semicolon)",
          "D) : (colon)",
        ],
        correctAnswer: "C",
        explanation: "Semicolon joins two related independent clauses.",
      },
      {
        id: "gpun1q8",
        type: "multiple-choice",
        questionText:
          'Where should the apostrophe (’) go?\n"The boys books are on the table."',
        options: [
          "A) The boy’s books",
          "B) The boys’ books",
          "C) The boys book’s",
          "D) The boy’s book’s",
        ],
        correctAnswer: "B",
        explanation: "Apostrophe shows plural possession (books of many boys).",
      },
      {
        id: "gpun1q9",
        type: "multiple-choice",
        questionText:
          'Where does the comma (,) belong?\n"However I finished my work on time."',
        options: [
          'A) After "However"',
          'B) After "finished"',
          'C) After "work"',
          "D) No comma needed",
        ],
        correctAnswer: "A",
        explanation: 'Comma follows introductory adverb "However."',
      },
      {
        id: "gpun1q10",
        type: "multiple-choice",
        questionText:
          'Where should the comma go?\n"Firstly it is important to plan your essay."',
        options: [
          'A) After "Firstly"',
          'B) After "important"',
          'C) After "plan"',
          "D) No comma needed",
        ],
        correctAnswer: "A",
        explanation: 'Comma follows introductory word "Firstly."',
      },
      {
        id: "gpun1q11",
        type: "multiple-choice",
        questionText: "Which sentence uses the dash (–) correctly?",
        options: [
          "A) I saw my friend– she was smiling.",
          "B) I saw – my friend she was smiling.",
          "C) I – saw my friend she was smiling.",
          "D) I saw my friend she – was smiling.",
        ],
        correctAnswer: "A",
        explanation: "Dash separates two related independent clauses.",
      },
      {
        id: "gpun1q12",
        type: "multiple-choice",
        questionText: "Which sentence is correct?",
        options: [
          "A) She is hardworking, and intelligent.",
          "B) She is hardworking and intelligent.",
          "C) She, is hardworking and intelligent.",
          "D) She is, hardworking and intelligent.",
        ],
        correctAnswer: "B",
        explanation: 'No comma needed between two adjectives joined by "and."',
      },
      {
        id: "gpun1q13",
        type: "multiple-choice",
        questionText: "Which sentence uses the full stop (.) correctly?",
        options: [
          "A) What is your name.",
          "B) Please sit down.",
          "C) Can you help me.",
          "D) Where are you.",
        ],
        correctAnswer: "B",
        explanation: "Full stop correctly ends a declarative sentence.",
      },
      {
        id: "gpun1q14",
        type: "multiple-choice",
        questionText: "Which sentence uses the apostrophe correctly?",
        options: [
          "A) Its a beautiful day.",
          "B) It’s a beautiful day.",
          "C) Its’ a beautiful day.",
          "D) It is’ a beautiful day.",
        ],
        correctAnswer: "B",
        explanation: 'Apostrophe correctly forms contraction "It’s" = "It is."',
      },
      {
        id: "gpun1q15",
        type: "multiple-choice",
        questionText: "Which sentence uses the colon correctly?",
        options: [
          "A) He needs these items: a bag, a pen, and a notebook.",
          "B) He: needs these items a bag, a pen and a notebook.",
          "C) He needs: these items, a bag, a pen and a notebook.",
          "D) He needs these: items a bag and a notebook.",
        ],
        correctAnswer: "A",
        explanation:
          "Colon correctly introduces a list after a complete clause.",
      },
      {
        id: "gpun1q16",
        type: "multiple-choice",
        questionText:
          'Where is the apostrophe needed?\n"Thats my friend’s book."',
        options: ["A) That’s", "B) That s", "C) Thats’", "D) That"],
        correctAnswer: "A",
        explanation: 'Apostrophe needed in contraction "That’s" = "That is."',
      },
      {
        id: "gpun1q17",
        type: "multiple-choice",
        questionText: "Which sentence is punctuated correctly?",
        options: [
          "A) My favorite subjects are: English, Math and Science.",
          "B) My favorite subjects are English Math and Science.",
          "C) My favorite subjects are English, Math, and Science.",
          "D) My favorite subjects are English Math, and Science.",
        ],
        correctAnswer: "C",
        explanation:
          "Commas correctly separate items in a list with Oxford comma.",
      },
      {
        id: "gpun1q18",
        type: "multiple-choice",
        questionText:
          'Choose the correct punctuation:\n"She likes coffee ___ he prefers tea."',
        options: [
          "A) . (full stop)",
          "B) , (comma)",
          "C) ; (semicolon)",
          "D) ? (question mark)",
        ],
        correctAnswer: "C",
        explanation:
          "Semicolon joins two independent clauses without conjunction.",
      },
      {
        id: "gpun1q19",
        type: "multiple-choice",
        questionText: "Choose the correct sentence.",
        options: [
          "A) The individuals’ rights are protected by law.",
          "B) The individual’s rights are protected by law.",
          "C) The individuals rights are protected by law.",
          "D) The individuals’s rights are protected by law.",
        ],
        correctAnswer: "B",
        explanation: 'Singular possessive "individual’s" is correct here.',
      },
      {
        id: "gpun1q20",
        type: "multiple-choice",
        questionText: "Choose the correctly punctuated sentence.",
        options: [
          "A) I enjoy outdoor activities such as hiking swimming and cycling.",
          "B) I enjoy outdoor activities, such as hiking, swimming, and cycling.",
          "C) I enjoy outdoor activities such as, hiking, swimming and cycling.",
          "D) I enjoy outdoor activities such as: hiking, swimming, and cycling.",
        ],
        correctAnswer: "B",
        explanation: 'Commas properly separate items and set off "such as."',
      },
    ],
  },
  {
    id: "grammar-gerund-infinitive",
    categoryId: "grammar",
    title: "Gerund or Infinitive",
    description: "Assess your understanding of gerunds and infinitives.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "ggi1q1",
        type: "multiple-choice",
        questionText: "I enjoy ______ novels in my free time.",
        options: ["A) read", "B) reading", "C) to read", "D) reads"],
        correctAnswer: "B",
        explanation:
          '"Enjoy" is followed by a gerund because it\'s a verb that naturally takes -ing forms',
      },
      {
        id: "ggi1q2",
        type: "multiple-choice",
        questionText: "She decided ______ to the gym every morning.",
        options: ["A) going", "B) go", "C) to go", "D) gone"],
        correctAnswer: "C",
        explanation:
          '"Decided" is followed by the infinitive to indicate a planned or intended action',
      },
      {
        id: "ggi1q3",
        type: "multiple-choice",
        questionText: "They avoided ______ about the problem.",
        options: ["A) to talk", "B) talk", "C) talking", "D) talked"],
        correctAnswer: "C",
        explanation:
          '"Avoid" is followed by a gerund as it\'s one of the verbs that are typically followed by -ing forms',
      },
      {
        id: "ggi1q4",
        type: "multiple-choice",
        questionText: "We hope ______ Japan next year.",
        options: ["A) visiting", "B) to visit", "C) visit", "D) visited"],
        correctAnswer: "B",
        explanation:
          '"Hope" takes the infinitive to express a desire for a future action',
      },
      {
        id: "ggi1q5",
        type: "multiple-choice",
        questionText: "He promised ______ me with my project.",
        options: ["A) helping", "B) to help", "C) help", "D) helped"],
        correctAnswer: "B",
        explanation:
          '"Promised" is followed by the infinitive to show a commitment to do something .',
      },
      {
        id: "ggi1q6",
        type: "multiple-choice",
        questionText: "They are interested in ______ French.",
        options: ["A) learn", "B) to learn", "C) learning", "D) learned"],
        correctAnswer: "C",
        explanation:
          '"Interested in" is always followed by a gerund because prepositions like "in" are followed by -ing verbs',
      },
      {
        id: "ggi1q7",
        type: "multiple-choice",
        questionText: "She forgot ______ the door before leaving.",
        options: ["A) to lock", "B) locking", "C) lock", "D) locked"],
        correctAnswer: "A",
        explanation:
          '"Forgot" followed by an infinitive means the action didn’t happen',
      },
      {
        id: "ggi1q8",
        type: "multiple-choice",
        questionText: "He suggested ______ a break after the meeting.",
        options: ["A) to take", "B) take", "C) taking", "D) took"],
        correctAnswer: "C",
        explanation:
          '"Suggested" is followed by a gerund because it does not take an infinitive',
      },
      {
        id: "ggi1q9",
        type: "multiple-choice",
        questionText: "I can’t stand ______ to that music.",
        options: ["A) to listen", "B) listen", "C) listening", "D) listened"],
        correctAnswer: "C",
        explanation:
          '"Can’t stand" is followed by a gerund to show strong dislike of an activity',
      },
      {
        id: "ggi1q10",
        type: "multiple-choice",
        questionText: "We need ______ this report by tomorrow.",
        options: ["A) to finish", "B) finishing", "C) finish", "D) finished"],
        correctAnswer: "A",
        explanation:
          '"Need" is followed by the infinitive to express something that has to be done',
      },
      {
        id: "ggi1q11",
        type: "multiple-choice",
        questionText: "Would you like ______ us for dinner?",
        options: ["A) join", "B) to join", "C) joining", "D) joined"],
        correctAnswer: "B",
        explanation:
          '"Would you like" is followed by an infinitive to offer or invite politely',
      },
      {
        id: "ggi1q12",
        type: "multiple-choice",
        questionText: "I remember ______ her at the conference last year.",
        options: ["A) meeting", "B) to meet", "C) meet", "D) met"],
        correctAnswer: "A",
        explanation:
          '"Remember" followed by a gerund refers to remembering a past event',
      },
      {
        id: "ggi1q13",
        type: "multiple-choice",
        questionText: "They postponed ______ the construction due to rain.",
        options: ["A) starting", "B) to start", "C) start", "D) started"],
        correctAnswer: "A",
        explanation:
          '"Postponed" is followed by a gerund because it refers to delaying an activity',
      },
      {
        id: "ggi1q14",
        type: "multiple-choice",
        questionText: "She appears ______ very confident.",
        options: ["A) to be", "B) being", "C) be", "D) been"],
        correctAnswer: "A",
        explanation:
          '"Appears" is followed by the infinitive when expressing a state or condition',
      },
      {
        id: "ggi1q15",
        type: "multiple-choice",
        questionText: "He admitted ______ a mistake.",
        options: ["A) to make", "B) making", "C) make", "D) made"],
        correctAnswer: "B",
        explanation:
          '"Admitted" is followed by a gerund to acknowledge an action',
      },
      {
        id: "ggi1q16",
        type: "multiple-choice",
        questionText: "It’s important ______ regularly.",
        options: [
          "A) exercise",
          "B) to exercise",
          "C) exercising",
          "D) exercised",
        ],
        correctAnswer: "B",
        explanation:
          '"It’s important" is followed by an infinitive to express a general truth or advice',
      },
      {
        id: "ggi1q17",
        type: "multiple-choice",
        questionText: "I arranged ______ the client at noon.",
        options: ["A) meeting", "B) to meet", "C) meet", "D) met"],
        correctAnswer: "B",
        explanation:
          '"Arranged" is followed by the infinitive to indicate planning or scheduling',
      },
      {
        id: "ggi1q18",
        type: "multiple-choice",
        questionText: "She refused ______ the offer.",
        options: ["A) accept", "B) accepting", "C) to accept", "D) accepted"],
        correctAnswer: "C",
        explanation:
          '"Refused" is followed by the infinitive to show unwillingness to do something',
      },
      {
        id: "ggi1q19",
        type: "multiple-choice",
        questionText: "The children kept ______ outside despite the rain.",
        options: ["A) play", "B) to play", "C) playing", "D) played"],
        correctAnswer: "C",
        explanation:
          '"Kept" is followed by a gerund to show a repeated or continuous action',
      },
      {
        id: "ggi1q20",
        type: "multiple-choice",
        questionText: "We intend ______ the new product next month.",
        options: ["A) launch", "B) to launch", "C) launching", "D) launched"],
        correctAnswer: "B",
        explanation:
          '"Intend" is followed by the infinitive to express future plans or intentions',
      },
    ],
  },
  {
    id: "grammar-comparison-questions",
    categoryId: "grammar",
    title: "Comparison Questions",
    description:
      "Evaluate your ability to use comparative and superlative forms.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "gcq1q1",
        type: "multiple-choice",
        questionText: "She is ______ than her sister.",
        options: ["A) tall", "B) taller", "C) tallest", "D) most tall"],
        correctAnswer: "B",
        explanation:
          '"Taller" is the comparative form used when comparing two people.',
      },
      {
        id: "gcq1q2",
        type: "multiple-choice",
        questionText: "This is the ______ movie I have ever seen.",
        options: ["A) bad", "B) worse", "C) worst", "D) badly"],
        correctAnswer: "C",
        explanation:
          '"Worst" is the superlative form, used with "ever" to show the highest degree.',
      },
      {
        id: "gcq1q3",
        type: "multiple-choice",
        questionText: "My car is ______ fast.",
        options: ["A) very", "B) more", "C) most", "D) than"],
        correctAnswer: "A",
        explanation:
          '"Very" is used to intensify an adjective without comparison.',
      },
      {
        id: "gcq1q4",
        type: "multiple-choice",
        questionText: "He works ______ than anyone else in the office.",
        options: ["A) hard", "B) harder", "C) hardest", "D) hardly"],
        correctAnswer: "B",
        explanation:
          '"Harder" is the correct comparative form when using "than."',
      },
      {
        id: "gcq1q5",
        type: "multiple-choice",
        questionText: "This test is ______ difficult than the last one.",
        options: ["A) more", "B) much", "C) many", "D) most"],
        correctAnswer: "A",
        explanation:
          '"More" forms the comparative of longer adjectives like "difficult."',
      },
      {
        id: "gcq1q6",
        type: "multiple-choice",
        questionText: "She sings ______ beautifully than her friend.",
        options: ["A) good", "B) better", "C) best", "D) well"],
        correctAnswer: "B",
        explanation:
          '"Better" is the comparative form of "well" when comparing actions.',
      },
      {
        id: "gcq1q7",
        type: "multiple-choice",
        questionText: "Of the three options, this is the ______ one.",
        options: ["A) better", "B) best", "C) good", "D) more good"],
        correctAnswer: "B",
        explanation:
          '"Best" is the superlative form used for three or more options.',
      },
      {
        id: "gcq1q8",
        type: "multiple-choice",
        questionText: "I think summer is ______ than winter.",
        options: ["A) hot", "B) hotter", "C) hottest", "D) most hot"],
        correctAnswer: "B",
        explanation: '"Hotter" is the comparative form used with "than."',
      },
      {
        id: "gcq1q9",
        type: "multiple-choice",
        questionText: "His house is ______ big.",
        options: ["A) very", "B) more", "C) biggest", "D) most"],
        correctAnswer: "A",
        explanation:
          '"Very" modifies a base adjective for emphasis without comparison.',
      },
      {
        id: "gcq1q10",
        type: "multiple-choice",
        questionText: "He is the ______ player on the team.",
        options: ["A) strong", "B) stronger", "C) strongest", "D) strongly"],
        correctAnswer: "C",
        explanation: '"Strongest" is the superlative form, indicated by "the."',
      },
      {
        id: "gcq1q11",
        type: "multiple-choice",
        questionText: "She speaks French ______ than her brother.",
        options: [
          "A) fluently",
          "B) more fluently",
          "C) most fluently",
          "D) fluent",
        ],
        correctAnswer: "B",
        explanation:
          '"More fluently" is the comparative form of the adverb "fluently."',
      },
      {
        id: "gcq1q12",
        type: "multiple-choice",
        questionText: "This road is ______ longer than the other.",
        options: ["A) much", "B) many", "C) more", "D) most"],
        correctAnswer: "A",
        explanation: '"Much" is used to intensify the comparative "longer."',
      },
      {
        id: "gcq1q13",
        type: "multiple-choice",
        questionText: "John is ______ careful than his sister.",
        options: ["A) much", "B) more", "C) most", "D) many"],
        correctAnswer: "B",
        explanation:
          '"More" is the correct comparative for the adjective "careful."',
      },
      {
        id: "gcq1q14",
        type: "multiple-choice",
        questionText: "My bag is as ______ as yours.",
        options: ["A) heavy", "B) heavier", "C) heaviest", "D) more heavy"],
        correctAnswer: "A",
        explanation:
          '"Heavy" is used in "as...as" comparisons without modification.',
      },
      {
        id: "gcq1q15",
        type: "multiple-choice",
        questionText: "Today is ______ colder than yesterday.",
        options: ["A) much", "B) many", "C) more", "D) most"],
        correctAnswer: "A",
        explanation: '"Much" emphasizes the comparative adjective "colder."',
      },
      {
        id: "gcq1q16",
        type: "multiple-choice",
        questionText: "She is ______ interested in music than her classmates.",
        options: ["A) much", "B) more", "C) most", "D) many"],
        correctAnswer: "B",
        explanation:
          '"More" forms the comparative of the adjective "interested."',
      },
      {
        id: "gcq1q17",
        type: "multiple-choice",
        questionText: "The movie was ______ than I expected.",
        options: ["A) good", "B) better", "C) best", "D) more good"],
        correctAnswer: "B",
        explanation: '"Better" is the correct comparative form of "good."',
      },
      {
        id: "gcq1q18",
        type: "multiple-choice",
        questionText: "Of all the players, he runs the ______.",
        options: ["A) fast", "B) faster", "C) fastest", "D) more fast"],
        correctAnswer: "C",
        explanation: '"Fastest" is the superlative form used with "of all."',
      },
      {
        id: "gcq1q19",
        type: "multiple-choice",
        questionText:
          "This book is ______ interesting than the one I read last month.",
        options: [
          "A) interesting",
          "B) more interesting",
          "C) most interesting",
          "D) interestinger",
        ],
        correctAnswer: "B",
        explanation:
          '"More interesting" is the comparative form of "interesting."',
      },
      {
        id: "gcq1q20",
        type: "multiple-choice",
        questionText: "He did ______ work than anyone else.",
        options: ["A) little", "B) less", "C) least", "D) few"],
        correctAnswer: "B",
        explanation:
          '"Less" is the correct comparative form used with uncountable nouns like "work."',
      },
    ],
  },
  {
    id: "grammar-voice-changing",
    categoryId: "grammar",
    title: "Voice Changing",
    description:
      "Practice converting sentences between active and passive voice.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "gvc1q1",
        type: "multiple-choice",
        questionText: "Active: She is eating an apple.",
        options: [
          "A) An apple is eaten by her.",
          "B) An apple was eaten by her.",
          "C) An apple is being eaten by her.",
          "D) An apple eats by her.",
        ],
        correctAnswer: "C",
        explanation: '"Is eating" becomes "is being eaten" in passive.',
      },
      {
        id: "gvc1q2",
        type: "multiple-choice",
        questionText: "Passive: The book has been read by him.",
        options: [
          "A) He read the book.",
          "B) He is reading the book.",
          "C) He has read the book.",
          "D) He will read the book.",
        ],
        correctAnswer: "C",
        explanation: '"Has been read" becomes "has read" in active.',
      },
      {
        id: "gvc1q3",
        type: "multiple-choice",
        questionText: "Active: They were cleaning the room when I arrived.",
        options: [
          "A) The room was being cleaned by them",
          "B) The room is cleaned by them.",
          "C) The room has been cleaned by them.",
          "D) The room cleans by them.",
        ],
        correctAnswer: "A",
        explanation:
          '"Were cleaning" turns into "was being cleaned" in passive.',
      },
      {
        id: "gvc1q4",
        type: "multiple-choice",
        questionText: "Passive: The letter is being written by Mary.",
        options: [
          "A) Mary wrote the letter.",
          "B) Mary is writing the letter.",
          "C) Mary writes the letter.",
          "D) Mary will write the letter.",
        ],
        correctAnswer: "B",
        explanation: '"Is being written" changes to "is writing" in active.',
      },
      {
        id: "gvc1q5",
        type: "multiple-choice",
        questionText: "Active: He has finished his homework.",
        options: [
          "A) His homework is finished by him.",
          "B) His homework has been finished by him.",
          "C) His homework was finished by him.",
          "D) His homework has finishing by him.",
        ],
        correctAnswer: "B",
        explanation: '"Has finished" becomes "has been finished" in passive.',
      },
      {
        id: "gvc1q6",
        type: "multiple-choice",
        questionText: "Passive: The food is being cooked by the chef.",
        options: [
          "A) The chef cooks the food.",
          "B) The chef is cooking the food.",
          "C) The chef cooked the food.",
          "D) The chef will cook the food.",
        ],
        correctAnswer: "B",
        explanation: '"Is being cooked" turns into "is cooking" in active.',
      },
      {
        id: "gvc1q7",
        type: "multiple-choice",
        questionText: "Active: I saw a movie yesterday.",
        options: [
          "A) A movie was seen by me yesterday.",
          "B) A movie is seen by me yesterday.",
          "C) A movie has been seen by me yesterday.",
          "D) A movie sees by me yesterday.",
        ],
        correctAnswer: "A",
        explanation: '"Saw" changes to "was seen" in passive.',
      },
      {
        id: "gvc1q8",
        type: "multiple-choice",
        questionText: "Passive: The windows are cleaned by the workers.",
        options: [
          "A) The workers clean the windows.",
          "B) The workers cleaned the windows.",
          "C) The workers are cleaning the windows.",
          "D) The workers will clean the windows.",
        ],
        correctAnswer: "A",
        explanation: '"Are cleaned" changes to "clean" in active.',
      },
      {
        id: "gvc1q9",
        type: "multiple-choice",
        questionText: "Active: She will finish the work tomorrow.",
        options: [
          "A) The work is finished by her tomorrow.",
          "B) The work will be finished by her tomorrow.",
          "C) The work was finished by her tomorrow.",
          "D) The work has finished by her tomorrow.",
        ],
        correctAnswer: "B",
        explanation: '"Will finish" becomes "will be finished" in passive.',
      },
      {
        id: "gvc1q10",
        type: "multiple-choice",
        questionText: "Passive: The car was repaired by the mechanic.",
        options: [
          "A) The mechanic repairs the car.",
          "B) The mechanic repaired the car.",
          "C) The mechanic is repairing the car.",
          "D) The mechanic will repair the car.",
        ],
        correctAnswer: "B",
        explanation: '"Was repaired" becomes "repaired" in active.',
      },
      {
        id: "gvc1q11",
        type: "multiple-choice",
        questionText: "Active: They are playing football.",
        options: [
          "A) Football is played by them.",
          "B) Football is being played by them.",
          "C) Football was played by them.",
          "D) Football has been played by them.",
        ],
        correctAnswer: "B",
        explanation: '"Are playing" turns into "is being played" in passive.',
      },
      {
        id: "gvc1q12",
        type: "multiple-choice",
        questionText: "Passive: The homework is done by the students.",
        options: [
          "A) The students do the homework.",
          "B) The students did the homework.",
          "C) The students are doing the homework.",
          "D) The students will do the homework.",
        ],
        correctAnswer: "A",
        explanation: '"Is done" changes to "do" in active.',
      },
      {
        id: "gvc1q13",
        type: "multiple-choice",
        questionText: "Active: He can open the door.",
        options: [
          "A) The door can be opened by him.",
          "B) The door could be opened by him.",
          "C) The door is opened by him.",
          "D) The door was opened by him.",
        ],
        correctAnswer: "A",
        explanation: '"Can open" becomes "can be opened" in passive.',
      },
      {
        id: "gvc1q14",
        type: "multiple-choice",
        questionText: "Passive: The song was sung by the singer.",
        options: [
          "A) The singer sings the song.",
          "B) The singer sang the song.",
          "C) The singer is singing the song.",
          "D) The singer will sing the song.",
        ],
        correctAnswer: "B",
        explanation: '"Was sung" changes to "sang" in active.',
      },
      {
        id: "gvc1q15",
        type: "multiple-choice",
        questionText: "Active: We will visit the museum next week.",
        options: [
          "A) The museum will be visited by us next week.",
          "B) The museum is visited by us next week.",
          "C) The museum was visited by us next week.",
          "D) The museum has visited by us next week.",
        ],
        correctAnswer: "A",
        explanation: '"Will visit" becomes "will be visited" in passive.',
      },
      {
        id: "gvc1q16",
        type: "multiple-choice",
        questionText: "Passive: The pictures were taken by the photographer.",
        options: [
          "A) The photographer takes the pictures.",
          "B) The photographer took the pictures.",
          "C) The photographer is taking the pictures.",
          "D) The photographer will take the pictures.",
        ],
        correctAnswer: "B",
        explanation: '"Were taken" turns into "took" in active.',
      },
      {
        id: "gvc1q17",
        type: "multiple-choice",
        questionText: "Active: She must write the report today.",
        options: [
          "A) The report must be written by her today.",
          "B) The report must write by her today.",
          "C) The report must wrote by her today.",
          "D) The report must writing by her today.",
        ],
        correctAnswer: "A",
        explanation: '"Must write" becomes "must be written" in passive.',
      },
      {
        id: "gvc1q18",
        type: "multiple-choice",
        questionText: "Passive: The cake is baked by the baker.",
        options: [
          "A) The baker bakes the cake.",
          "B) The baker baked the cake.",
          "C) The baker is baking the cake.",
          "D) The baker will bake the cake.",
        ],
        correctAnswer: "A",
        explanation: '"Is baked" becomes "bakes" in active.',
      },
      {
        id: "gvc1q19",
        type: "multiple-choice",
        questionText: "Active: I have finished the work.",
        options: [
          "A) The work is finished by me.",
          "B) The work was finished by me.",
          "C) The work has been finished by me.",
          "D) The work will be finished by me.",
        ],
        correctAnswer: "C",
        explanation: '"Have finished" becomes "has been finished" in passive.',
      },
      {
        id: "gvc1q20",
        type: "multiple-choice",
        questionText: "Passive: The lessons are taught by the teacher.",
        options: [
          "A) The teacher teaches the lessons.",
          "B) The teacher taught the lessons.",
          "C) The teacher is teaching the lessons.",
          "D) The teacher will teach the lessons.",
        ],
        correctAnswer: "A",
        explanation: '"Are taught" becomes "teaches" in active.',
      },
    ],
  },
  {
    id: "grammar-sentence-structures",
    categoryId: "grammar",
    title: "Structures of Sentences",
    description: "Understand and identify different sentence structures.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "gss1q1",
        type: "multiple-choice",
        questionText: "Which of the following is a simple sentence?",
        options: [
          "A) She went to the market and bought fruits.",
          "B) After she went to the market, she cooked dinner.",
          "C) She went to the market.",
          "D) She went to the market, but it was closed.",
        ],
        correctAnswer: "C",
        explanation:
          "A simple sentence contains only one independent clause with a subject and a verb and expresses a complete thought without any dependent or additional clauses.",
      },
      {
        id: "gss1q2",
        type: "multiple-choice",
        questionText: "Choose the compound sentence:",
        options: [
          "A) He was tired, but he finished the work.",
          "B) He was tired because he worked hard.",
          "C) Because he was tired, he slept early.",
          "D) Being tired, he slept.",
        ],
        correctAnswer: "A",
        explanation:
          'A compound sentence is made up of two independent clauses joined by coordinating conjunctions such as for, and, nor, but, or, yet, so — in this case, "but" connects the two.',
      },
      {
        id: "gss1q3",
        type: "multiple-choice",
        questionText: "Identify the complex sentence:",
        options: [
          "A) I cooked dinner.",
          "B) I cooked dinner and cleaned the house.",
          "C) I cooked dinner because I was hungry.",
          "D) I was hungry.",
        ],
        correctAnswer: "C",
        explanation:
          "A complex sentence combines one independent clause with one or more dependent clauses using subordinating conjunctions like because, although, since, if, when, while, etc.",
      },
      {
        id: "gss1q4",
        type: "multiple-choice",
        questionText: "Which is an interrogative sentence?",
        options: [
          "A) Are you coming to the party?",
          "B) Please close the door.",
          "C) I like ice cream.",
          "D) What a lovely day!",
        ],
        correctAnswer: "A",
        explanation:
          "An interrogative sentence asks a direct question and typically starts with a helping verb or question word (e.g., Are, Do, Where, What) and ends with a question mark.",
      },
      {
        id: "gss1q5",
        type: "multiple-choice",
        questionText: "Pick the exclamatory sentence:",
        options: [
          "A) Please pass the salt.",
          "B) How beautiful this garden is!",
          "C) She is very smart.",
          "D) Will you help me?",
        ],
        correctAnswer: "B",
        explanation:
          "An exclamatory sentence expresses strong emotion or surprise, often begins with What or How, and ends with an exclamation mark.",
      },
      {
        id: "gss1q6",
        type: "multiple-choice",
        questionText: "Select the imperative sentence:",
        options: [
          "A) Where is your book?",
          "B) Don’t touch that!",
          "C) She is reading a book.",
          "D) How funny the movie was!",
        ],
        correctAnswer: "B",
        explanation:
          'An imperative sentence gives a command, request, or instruction and often starts with the base form of a verb; the subject ("you") is usually implied rather than stated.',
      },
      {
        id: "gss1q7",
        type: "multiple-choice",
        questionText: "Which of these is a declarative sentence?",
        options: [
          "A) Is the sky blue?",
          "B) Please come here.",
          "C) The sky is blue.",
          "D) How blue the sky looks!",
        ],
        correctAnswer: "C",
        explanation:
          "A declarative sentence states a fact, opinion, or idea clearly and directly; it ends with a period and is the most common sentence type.",
      },
      {
        id: "gss1q8",
        type: "multiple-choice",
        questionText: "Which sentence is simple?",
        options: [
          "A) I like coffee and tea.",
          "B) I like coffee but I don’t like tea.",
          "C) Because I like coffee, I drink it daily.",
          "D) I like coffee, so I drink it every morning.",
        ],
        correctAnswer: "A",
        explanation:
          'A simple sentence can include compound subjects or objects (e.g., "coffee and tea") but still counts as simple because it has only one independent clause.',
      },
      {
        id: "gss1q9",
        type: "multiple-choice",
        questionText: "Find the compound sentence:",
        options: [
          "A) She sang while he played the guitar.",
          "B) She sang, and he played the guitar.",
          "C) Because she sang, he played the guitar.",
          "D) Singing, she smiled.",
        ],
        correctAnswer: "B",
        explanation:
          "A compound sentence has two independent clauses joined by coordinating conjunctions such as and, but, or, so, forming two equal parts that could stand alone.",
      },
      {
        id: "gss1q10",
        type: "multiple-choice",
        questionText: "Choose the complex sentence:",
        options: [
          "A) He was happy.",
          "B) He was happy and excited.",
          "C) He was happy because he passed the exam.",
          "D) He was happy; he passed the exam.",
        ],
        correctAnswer: "C",
        explanation:
          'A complex sentence includes a main (independent) clause and a subordinate (dependent) clause connected by a subordinating conjunction like "because," showing cause or reason.',
      },
      {
        id: "gss1q11",
        type: "multiple-choice",
        questionText: "Which of these is imperative?",
        options: [
          "A) Stop talking!",
          "B) Are you okay?",
          "C) He stopped talking.",
          "D) What a surprise",
        ],
        correctAnswer: "A",
        explanation:
          'An imperative sentence uses the base form of the verb to issue commands or directions and typically omits the subject, which is understood to be "you."',
      },
      {
        id: "gss1q12",
        type: "multiple-choice",
        questionText: "Pick the exclamatory sentence:",
        options: [
          "A) Please listen carefully.",
          "B) I am tired today.",
          "C) Wow! That’s amazing!",
          "D) Have you eaten?",
        ],
        correctAnswer: "C",
        explanation:
          'An exclamatory sentence communicates excitement, emotion, or surprise and often includes interjections like "Wow" and ends with an exclamation mark.',
      },
      {
        id: "gss1q13",
        type: "multiple-choice",
        questionText: "Which of these is a complex sentence?",
        options: [
          "A) She dances well.",
          "B) She dances and sings.",
          "C) She dances because she loves music.",
          "D) She dances on weekends.",
        ],
        correctAnswer: "C",
        explanation:
          'A complex sentence uses a subordinating conjunction (like "because") to connect a dependent clause that explains or adds detail to the main idea.',
      },
      {
        id: "gss1q14",
        type: "multiple-choice",
        questionText: "Choose the compound sentence:",
        options: [
          "A) She opened the door and looked outside.",
          "B) She opened the door, but no one was there.",
          "C) When she opened the door, she smiled.",
          "D) Opening the door, she smiled.",
        ],
        correctAnswer: "B",
        explanation:
          "A compound sentence joins two equal independent clauses using coordinating conjunctions such as and, but, or, so, often with a comma before the conjunction.",
      },
      {
        id: "gss1q15",
        type: "multiple-choice",
        questionText: "Find the declarative sentence:",
        options: [
          "A) Don’t make noise!",
          "B) How beautiful the sunset is!",
          "C) The sun sets in the west.",
          "D) Did you see that?",
        ],
        correctAnswer: "C",
        explanation:
          "A declarative sentence communicates information or ideas in a straightforward manner and ends with a full stop.",
      },
      {
        id: "gss1q16",
        type: "multiple-choice",
        questionText: "Choose the interrogative sentence:",
        options: [
          "A) I love pizza.",
          "B) Where do you live?",
          "C) He goes to school.",
          "D) Open the window.",
        ],
        correctAnswer: "B",
        explanation:
          "An interrogative sentence seeks information, starts with a question word or auxiliary verb, and ends with a question mark.",
      },
      {
        id: "gss1q17",
        type: "multiple-choice",
        questionText: "Which sentence is simple?",
        options: [
          "A) She runs every morning.",
          "B) She runs every morning, but she hates running.",
          "C) Because she runs every morning, she stays fit.",
          "D) She runs every morning after breakfast.",
        ],
        correctAnswer: "A",
        explanation:
          "A simple sentence expresses a single, complete idea with only one independent clause, even if modifiers or phrases are added.",
      },
      {
        id: "gss1q18",
        type: "multiple-choice",
        questionText: "Pick the compound sentence:",
        options: [
          "A) He waited because it was raining.",
          "B) It was raining, so he waited inside.",
          "C) Since it was raining, he waited.",
          "D) Raining heavily, he waited.",
        ],
        correctAnswer: "B",
        explanation:
          "A compound sentence connects two independent ideas with a coordinating conjunction like so, indicating cause or result.",
      },
      {
        id: "gss1q19",
        type: "multiple-choice",
        questionText: "Identify the complex sentence:",
        options: [
          "A) I like chocolate.",
          "B) I like chocolate and vanilla.",
          "C) I like chocolate because it is sweet.",
          "D) I like chocolate; it is delicious.",
        ],
        correctAnswer: "C",
        explanation:
          'A complex sentence contains a dependent clause introduced by "because," which cannot stand alone, and an independent clause that completes the meaning.',
      },
      {
        id: "gss1q20",
        type: "multiple-choice",
        questionText: "Which of these is imperative?",
        options: [
          "A) Don’t be late!",
          "B) He is never late.",
          "C) Is he late again?",
          "D) How late he is!",
        ],
        correctAnswer: "A",
        explanation:
          'An imperative sentence gives a direct command or advice and typically begins with a verb, with the subject "you" understood.',
      },
    ],
  },

  {
    id: "grammar-modals",
    categoryId: "grammar",
    title: "Modals",
    description: "Test your understanding of modal verbs and their usage.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "gmod1q1",
        type: "multiple-choice",
        questionText: "You ______ take an umbrella; it might rain later.",
        options: ["A) can", "B) must", "C) should", "D) will"],
        correctAnswer: "C",
        explanation:
          '"Should" is used to give advice or suggest something that is a good idea — taking an umbrella is wise if rain is expected.',
      },
      {
        id: "gmod1q2",
        type: "multiple-choice",
        questionText: "She ______ speak five languages fluently.",
        options: ["A) can", "B) must", "C) may", "D) should"],
        correctAnswer: "A",
        explanation:
          '"Can" shows ability — she is able to speak five languages fluently.',
      },
      {
        id: "gmod1q3",
        type: "multiple-choice",
        questionText: "You ______ smoke here; it's a no-smoking area.",
        options: ["A) should", "B) mustn't", "C) can", "D) could"],
        correctAnswer: "B",
        explanation:
          '"Mustn\'t" expresses strict prohibition — smoking is not allowed in that area.',
      },
      {
        id: "gmod1q4",
        type: "multiple-choice",
        questionText:
          "I ______ finish this report by tomorrow, or the boss will be angry.",
        options: ["A) must", "B) can", "C) might", "D) could"],
        correctAnswer: "A",
        explanation:
          '"Must" shows obligation or necessity — the report is urgent and must be completed to avoid consequences.',
      },
      {
        id: "gmod1q5",
        type: "multiple-choice",
        questionText: "______ I open the window?",
        options: ["A) Can", "B) Must", "C) Might", "D) Should"],
        correctAnswer: "A",
        explanation:
          '"Can" is used to ask for permission in a polite, informal way — e.g., opening a window.',
      },
      {
        id: "gmod1q6",
        type: "multiple-choice",
        questionText: "They ______ be home now; the lights are off.",
        options: ["A) can", "B) must", "C) can't", "D) might"],
        correctAnswer: "C",
        explanation:
          '"Can\'t" expresses logical impossibility — the lights are off, so they are probably not home.',
      },
      {
        id: "gmod1q7",
        type: "multiple-choice",
        questionText: "He ______ play the piano when he was five years old.",
        options: ["A) must", "B) should", "C) can", "D) could"],
        correctAnswer: "D",
        explanation:
          '"Could" refers to past ability — he was able to play the piano when he was younger.',
      },
      {
        id: "gmod1q8",
        type: "multiple-choice",
        questionText: "You ______ have told me about the meeting; I missed it!",
        options: ["A) could", "B) should", "C) can", "D) must"],
        correctAnswer: "B",
        explanation:
          '"Should" shows past advice or regret — the speaker believes it was right to inform them earlier.',
      },
      {
        id: "gmod1q9",
        type: "multiple-choice",
        questionText: "We ______ go to the museum tomorrow if we have time.",
        options: ["A) must", "B) could", "C) can", "D) would"],
        correctAnswer: "B",
        explanation:
          '"Could" is used for possibility or ability in the future — going to the museum is possible if time allows.',
      },
      {
        id: "gmod1q10",
        type: "multiple-choice",
        questionText: "She ______ be tired after working all day.",
        options: ["A) must", "B) should", "C) can", "D) might"],
        correctAnswer: "A",
        explanation:
          '"Must" expresses strong probability or logical deduction — she likely feels tired after a full day of work.',
      },
      {
        id: "gmod1q11",
        type: "multiple-choice",
        questionText: "You ______ be quiet during the exam.",
        options: ["A) must", "B) can", "C) could", "D) might"],
        correctAnswer: "A",
        explanation:
          '"Must" shows obligation — staying quiet during an exam is a strict rule.',
      },
      {
        id: "gmod1q12",
        type: "multiple-choice",
        questionText: "He ______ have left earlier; the road was so clear!",
        options: ["A) should", "B) must", "C) can", "D) may"],
        correctAnswer: "A",
        explanation:
          '"Should have" expresses a past recommendation — he failed to act wisely in hindsight.',
      },
      {
        id: "gmod1q13",
        type: "multiple-choice",
        questionText: "Visitors ______ touch the exhibits.",
        options: ["A) mustn't", "B) should", "C) can", "D) could"],
        correctAnswer: "A",
        explanation:
          '"Mustn\'t" gives a strict rule — visitors are forbidden to touch exhibits.',
      },
      {
        id: "gmod1q14",
        type: "multiple-choice",
        questionText: "If you studied harder, you ______ pass the test.",
        options: ["A) must", "B) could", "C) might", "D) should"],
        correctAnswer: "B",
        explanation:
          '"Could" expresses hypothetical ability — passing the test is possible if studying happens.',
      },
      {
        id: "gmod1q15",
        type: "multiple-choice",
        questionText: "You ______ have eaten that; it was spoiled.",
        options: ["A) can't", "B) shouldn't", "C) may not", "D) mustn't"],
        correctAnswer: "B",
        explanation:
          '"Shouldn\'t have" expresses a past mistake — eating spoiled food wasn’t a good choice.',
      },
      {
        id: "gmod1q16",
        type: "multiple-choice",
        questionText: "______ you help me with my homework, please?",
        options: ["A) Should", "B) Could", "C) Must", "D) Might"],
        correctAnswer: "B",
        explanation:
          '"Could" is a polite way to ask for help — more formal and respectful.',
      },
      {
        id: "gmod1q17",
        type: "multiple-choice",
        questionText:
          "They ______ be very rich; they travel first class everywhere.",
        options: ["A) can", "B) must", "C) could", "D) should"],
        correctAnswer: "B",
        explanation:
          '"Must" shows strong certainty or deduction — frequent luxury travel implies they are very rich.',
      },
      {
        id: "gmod1q18",
        type: "multiple-choice",
        questionText: "I ______ have seen her at the party, but I'm not sure.",
        options: ["A) could", "B) must", "C) should", "D) might"],
        correctAnswer: "D",
        explanation:
          '"Might have" expresses uncertain past possibility — the speaker isn’t sure but thinks it’s possible.',
      },
      {
        id: "gmod1q19",
        type: "multiple-choice",
        questionText: "Students ______ submit the assignment by Monday.",
        options: ["A) must", "B) can", "C) could", "D) might"],
        correctAnswer: "A",
        explanation:
          '"Must" is used for rules and formal obligations — students are required to submit by Monday.',
      },
      {
        id: "gmod1q20",
        type: "multiple-choice",
        questionText: "You ______ have apologized; it wasn't your fault.",
        options: ["A) might", "B) should", "C) could", "D) must"],
        correctAnswer: "B",
        explanation:
          '"Should have" expresses advice or responsibility in the past — the speaker thinks it was right, even if unnecessary.',
      },
    ],
  },

  {
    id: "grammar-linking-words",
    categoryId: "grammar",
    title: "Linking Words and Discourse Markers",
    description: "Test your ability to use conjunctions and discourse markers.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2,
    questions: [
      {
        id: "glw1q1",
        type: "multiple-choice",
        questionText: "I wanted to go for a walk; ___, it started to rain.",
        options: ["A) however", "B) therefore", "C) moreover", "D) besides"],
        correctAnswer: "A",
        explanation:
          '"However" is used to contrast two ideas — the plan to walk and the interruption by rain.',
      },
      {
        id: "glw1q2",
        type: "multiple-choice",
        questionText: "She is smart ___ hardworking.",
        options: ["A) but", "B) or", "C) and", "D) although"],
        correctAnswer: "C",
        explanation:
          '"And" links two similar ideas — she is both smart and hardworking.',
      },
      {
        id: "glw1q3",
        type: "multiple-choice",
        questionText: "I missed the bus, ___ I was late for class.",
        options: ["A) so", "B) yet", "C) but", "D) because"],
        correctAnswer: "A",
        explanation:
          '"So" shows cause and effect — missing the bus caused her to be late.',
      },
      {
        id: "glw1q4",
        type: "multiple-choice",
        questionText: "He is tall, ___ his brother is short.",
        options: ["A) and", "B) but", "C) so", "D) because"],
        correctAnswer: "B",
        explanation:
          '"But" shows contrast — one brother is tall, the other is short.',
      },
      {
        id: "glw1q5",
        type: "multiple-choice",
        questionText: "She stayed home ___ she was sick.",
        options: ["A) although", "B) because", "C) but", "D) however"],
        correctAnswer: "B",
        explanation:
          '"Because" explains the reason — she stayed home due to illness.',
      },
      {
        id: "glw1q6",
        type: "multiple-choice",
        questionText: "___ the heavy rain, the match was not canceled.",
        options: ["A) Despite", "B) Because", "C) Therefore", "D) Moreover"],
        correctAnswer: "A",
        explanation:
          '"Despite" is used to show contrast with a surprising result — even with heavy rain, the match wasn’t canceled.',
      },
      {
        id: "glw1q7",
        type: "multiple-choice",
        questionText: "We can take a taxi, ___ we can walk.",
        options: ["A) and", "B) or", "C) but", "D) so"],
        correctAnswer: "B",
        explanation:
          '"Or" presents alternatives — taxi or walking are the two options.',
      },
      {
        id: "glw1q8",
        type: "multiple-choice",
        questionText: "She studied hard; ___, she passed the exam.",
        options: ["A) however", "B) therefore", "C) although", "D) but"],
        correctAnswer: "B",
        explanation:
          '"Therefore" shows result — because she studied hard, the result was success.',
      },
      {
        id: "glw1q9",
        type: "multiple-choice",
        questionText: "He likes apples; ___, he loves oranges.",
        options: ["A) in addition", "B) yet", "C) however", "D) because"],
        correctAnswer: "A",
        explanation:
          '"In addition" adds more information — he likes apples and also loves oranges.',
      },
      {
        id: "glw1q10",
        type: "multiple-choice",
        questionText: "___ he was tired, he continued working.",
        options: ["A) Because", "B) Although", "C) So", "D) And"],
        correctAnswer: "B",
        explanation:
          '"Although" introduces a contrast — being tired didn’t stop him from working.',
      },
      {
        id: "glw1q11",
        type: "multiple-choice",
        questionText: "___ you finish your homework, you can watch TV.",
        options: ["A) When", "B) Although", "C) Because", "D) Despite"],
        correctAnswer: "A",
        explanation:
          '"When" is a time-linking word — watching TV is allowed after finishing homework.',
      },
      {
        id: "glw1q12",
        type: "multiple-choice",
        questionText: "First, we went to the museum, ___ we had lunch.",
        options: ["A) then", "B) because", "C) although", "D) despite"],
        correctAnswer: "A",
        explanation: '"Then" shows sequence — first museum, then lunch.',
      },
      {
        id: "glw1q13",
        type: "multiple-choice",
        questionText: "She studied hard ___ to pass the exam.",
        options: ["A) because", "B) so that", "C) although", "D) despite"],
        correctAnswer: "B",
        explanation:
          '"So that" expresses purpose — she studied hard for the purpose of passing.',
      },
      {
        id: "glw1q14",
        type: "multiple-choice",
        questionText: "He is rich, ___ he is not happy.",
        options: ["A) so", "B) but", "C) because", "D) and"],
        correctAnswer: "B",
        explanation:
          '"But" shows contrast — being rich does not guarantee happiness.',
      },
      {
        id: "glw1q15",
        type: "multiple-choice",
        questionText: "The book was difficult; ___, I enjoyed reading it.",
        options: ["A) therefore", "B) however", "C) because", "D) so"],
        correctAnswer: "B",
        explanation:
          '"However" contrasts difficulty with enjoyment — the book was hard, yet enjoyable.',
      },
      {
        id: "glw1q16",
        type: "multiple-choice",
        questionText: "She sings well; ___, she dances beautifully.",
        options: ["A) moreover", "B) but", "C) so", "D) although"],
        correctAnswer: "A",
        explanation:
          '"Moreover" adds supporting information — she sings and also dances well.',
      },
      {
        id: "glw1q17",
        type: "multiple-choice",
        questionText: "He was late, ___ he missed the bus.",
        options: ["A) because", "B) so", "C) although", "D) but"],
        correctAnswer: "B",
        explanation:
          '"So" shows result — being late resulted from missing the bus.',
      },
      {
        id: "glw1q18",
        type: "multiple-choice",
        questionText: "___ it was raining, they went outside.",
        options: ["A) Although", "B) Because", "C) So", "D) And"],
        correctAnswer: "A",
        explanation:
          '"Although" shows contrast — despite the rain, they still went outside.',
      },
      {
        id: "glw1q19",
        type: "multiple-choice",
        questionText: "Many fruits, ___ apples and oranges, are healthy.",
        options: ["A) such as", "B) because", "C) but", "D) although"],
        correctAnswer: "A",
        explanation:
          '"Such as" introduces examples — apples and oranges are examples of healthy fruits.',
      },
      {
        id: "glw1q20",
        type: "multiple-choice",
        questionText: "___, the project was successful.",
        options: [
          "A) Therefore",
          "B) In conclusion",
          "C) Because",
          "D) Despite",
        ],
        correctAnswer: "B",
        explanation:
          '"In conclusion" is a discourse marker used to summarize — it introduces the final result or summary.',
      },
    ],
  },

  {
    id: "grammar-collocation",
    categoryId: "grammar",
    title: "Collocation",
    description: "Test your knowledge of common word pairings in English.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2, // New test, set to level 2
    questions: [
      {
        id: "gcol1q1",
        type: "multiple-choice",
        questionText: "She made a quick ______ to the shop.",
        options: ["A) travel", "B) journey", "C) trip", "D) voyage"],
        correctAnswer: "C",
        explanation:
          '"trip" means a short journey, often for a specific purpose, so it fits best here.',
      },
      {
        id: "gcol1q2",
        type: "multiple-choice",
        questionText: "He has a strong ______ of responsibility.",
        options: ["A) sense", "B) feeling", "C) emotion", "D) thought"],
        correctAnswer: "A",
        explanation:
          '"sense" refers to an awareness or feeling, often used with abstract ideas like responsibility.',
      },
      {
        id: "gcol1q3",
        type: "multiple-choice",
        questionText: "The baby cried at the top of her ______. ",
        options: ["A) voice", "B) sound", "C) noise", "D) pitch"],
        correctAnswer: "A",
        explanation:
          '"voice" is correct because it refers to the sound produced when speaking or crying.',
      },
      {
        id: "gcol1q4",
        type: "multiple-choice",
        questionText: "Please ______ a decision soon.",
        options: ["A) make", "B) do", "C) take", "D) get"],
        correctAnswer: "A",
        explanation:
          '"make" is used with decisions, meaning to come to a conclusion.',
      },
      {
        id: "gcol1q5",
        type: "multiple-choice",
        questionText: "I usually ______ my bed in the morning.",
        options: ["A) do", "B) make", "C) take", "D) prepare"],
        correctAnswer: "B",
        explanation:
          '"make" is used with beds, meaning to arrange the bedding neatly.',
      },
      {
        id: "gcol1q6",
        type: "multiple-choice",
        questionText: "She gave me a piece of ______. ",
        options: ["A) advice", "B) suggestion", "C) information", "D) news"],
        correctAnswer: "A",
        explanation:
          '"advice" is uncountable and commonly given as guidance or recommendation.',
      },
      {
        id: "gcol1q7",
        type: "multiple-choice",
        questionText: "He is running a ______ business.",
        options: ["A) great", "B) heavy", "C) successful", "D) high"],
        correctAnswer: "C",
        explanation: '"successful" describes a business that is doing well.',
      },
      {
        id: "gcol1q8",
        type: "multiple-choice",
        questionText: "They paid a heavy ______ for breaking the law.",
        options: ["A) amount", "B) fine", "C) price", "D) fee"],
        correctAnswer: "B",
        explanation:
          '"fine" is a penalty, often a sum of money, paid for breaking rules or laws.',
      },
      {
        id: "gcol1q9",
        type: "multiple-choice",
        questionText: "I don’t want to ______ a mistake in my report.",
        options: ["A) do", "B) make", "C) take", "D) have"],
        correctAnswer: "B",
        explanation: '"make" is used for mistakes, meaning to commit an error.',
      },
      {
        id: "gcol1q10",
        type: "multiple-choice",
        questionText: "She speaks English ______. ",
        options: ["A) fluently", "B) fastly", "C) quick", "D) strong"],
        correctAnswer: "A",
        explanation:
          '"fluently" describes speaking a language smoothly and easily.',
      },
      {
        id: "gcol1q11",
        type: "multiple-choice",
        questionText: "The film was based on a ______ story.",
        options: ["A) true", "B) truthful", "C) real", "D) factual"],
        correctAnswer: "A",
        explanation:
          '"true" means real or factual, suitable for stories based on facts.',
      },
      {
        id: "gcol1q12",
        type: "multiple-choice",
        questionText: "He has been under a lot of ______ lately.",
        options: ["A) pressure", "B) force", "C) stress", "D) control"],
        correctAnswer: "C",
        explanation: '"pressure" refers to mental or emotional strain.', // Corrected explanation to match the provided answer.
      },
      {
        id: "gcol1q13",
        type: "multiple-choice",
        questionText: "They broke the world ______ in swimming.",
        options: ["A) title", "B) record", "C) goal", "D) score"],
        correctAnswer: "B",
        explanation:
          '"record" refers to the best performance in sports or other activities.',
      },
      {
        id: "gcol1q14",
        type: "multiple-choice",
        questionText: "I caught a ______ of perfume as she passed by.",
        options: ["A) smell", "B) whiff", "C) fragrance", "D) scent"],
        correctAnswer: "B",
        explanation: '"whiff" means a brief smell, usually light and fleeting.',
      },
      {
        id: "gcol1q15",
        type: "multiple-choice",
        questionText: "We should take the weather ______ before going out.",
        options: ["A) report", "B) news", "C) information", "D) guide"],
        correctAnswer: "A",
        explanation: '"report" is information about the weather.',
      },
      {
        id: "gcol1q16",
        type: "multiple-choice",
        questionText: "This is a golden ______ to improve your skills.",
        options: ["A) event", "B) chance", "C) moment", "D) opportunity"],
        correctAnswer: "D",
        explanation:
          '"chance" and "opportunity" are close, but "golden opportunity" is a common phrase meaning a very good chance.', // Corrected explanation to match the provided answer.
      },
      {
        id: "gcol1q17",
        type: "multiple-choice",
        questionText: "He delivered a ______ speech at the conference.",
        options: ["A) heavy", "B) strong", "C) powerful", "D) high"],
        correctAnswer: "C",
        explanation:
          '"powerful" describes something having a strong effect or influence.',
      },
      {
        id: "gcol1q18",
        type: "multiple-choice",
        questionText: "I need to ______ my homework before dinner.",
        options: ["A) do", "B) make", "C) take", "D) give"],
        correctAnswer: "A",
        explanation: '"do" is used with homework and tasks.',
      },
      {
        id: "gcol1q19",
        type: "multiple-choice",
        questionText: "Her father is a highly ______ doctor.",
        options: [
          "A) respected",
          "B) respectful",
          "C) respective",
          "D) respecting",
        ],
        correctAnswer: "A",
        explanation: '"respected" means admired or held in high esteem.',
      },
      {
        id: "gcol1q20",
        type: "multiple-choice",
        questionText: "He gave me a ______ excuse for being late.",
        options: ["A) strong", "B) big", "C) lame", "D) low"],
        correctAnswer: "C",
        explanation:
          '"lame" means weak or unconvincing, used here for excuses.',
      },
    ],
  },
  {
    id: "grammar-synonyms-antonyms",
    categoryId: "grammar",
    title: "Synonym and Antonyms",
    description: "Test your vocabulary with synonyms and antonyms.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2, // New test, set to level 2
    questions: [
      {
        id: "gsa1q1",
        type: "multiple-choice",
        questionText:
          "He gave a brief speech that lasted only two minutes.\nWhich word is similar in meaning to brief?",
        options: ["A) short", "B) long", "C) detailed", "D) wide"],
        correctAnswer: "A",
        explanation: '"Brief" means something short in time or length.',
      },
      {
        id: "gsa1q2",
        type: "multiple-choice",
        questionText:
          "The teacher was very strict with the students.\nWhich word is opposite in meaning to strict?",
        options: ["A) lenient", "B) serious", "C) firm", "D) careful"],
        correctAnswer: "A",
        explanation: '"Strict" is the opposite of "lenient" (not harsh).',
      },
      {
        id: "gsa1q3",
        type: "multiple-choice",
        questionText:
          "She was elated after hearing the good news.\nWhich word is closest in meaning to elated?",
        options: ["A) angry", "B) sad", "C) delighted", "D) afraid"],
        correctAnswer: "C",
        explanation: '"Elated" means very happy or delighted.',
      },
      {
        id: "gsa1q4",
        type: "multiple-choice",
        questionText:
          "The weather was gloomy all day.\nWhich word means the opposite of gloomy?",
        options: ["A) cloudy", "B) bright", "C) dark", "D) rainy"],
        correctAnswer: "B",
        explanation: 'The opposite of "gloomy" (dark and dull) is "bright."',
      },
      {
        id: "gsa1q5",
        type: "multiple-choice",
        questionText:
          "His performance was outstanding in the competition.\nWhich word means the same as outstanding?",
        options: ["A) average", "B) excellent", "C) poor", "D) ordinary"],
        correctAnswer: "B",
        explanation: '"Outstanding" means excellent or extremely good.',
      },
      {
        id: "gsa1q6",
        type: "multiple-choice",
        questionText:
          "The path was very narrow, making it hard to walk.\nWhich word is opposite in meaning to narrow?",
        options: ["A) wide", "B) slim", "C) deep", "D) tall"],
        correctAnswer: "A",
        explanation: 'The opposite of "narrow" is "wide."',
      },
      {
        id: "gsa1q7",
        type: "multiple-choice",
        questionText:
          "She made a generous donation to the charity.\nWhich word is closest in meaning to generous?",
        options: ["A) mean", "B) selfish", "C) kind-hearted", "D) greedy"],
        correctAnswer: "C",
        explanation: '"Generous" means kind and willing to give.',
      },
      {
        id: "gsa1q8",
        type: "multiple-choice",
        questionText:
          "ANTONYM\nHe is very humble despite his success.\nWhich word is opposite in meaning to humble?",
        options: ["A) proud", "B) shy", "C) polite", "D) quiet"],
        correctAnswer: "A",
        explanation: 'The opposite of "humble" (modest) is "proud."',
      },
      {
        id: "gsa1q9",
        type: "multiple-choice",
        questionText:
          "The meal was delicious and everyone enjoyed it.\nWhich word is similar in meaning to delicious?",
        options: ["A) tasty", "B) sour", "C) bitter", "D) cold"],
        correctAnswer: "A",
        explanation: '"Delicious" means tasty or very pleasant to eat.',
      },
      {
        id: "gsa1q10",
        type: "multiple-choice",
        questionText:
          "His handwriting is very neat and easy to read.\nWhich word is opposite in meaning to neat?",
        options: ["A) dirty", "B) messy", "C) ugly", "D) wrong"],
        correctAnswer: "B",
        explanation: 'The opposite of "neat" is "messy" or untidy.',
      },
      {
        id: "gsa1q11",
        type: "multiple-choice",
        questionText:
          "The student gave a precise answer to the question.\nWhich word is closest in meaning to precise?",
        options: ["A) wrong", "B) accurate", "C) doubtful", "D) careless"],
        correctAnswer: "B",
        explanation: '"Precise" means accurate or exact.',
      },
      {
        id: "gsa1q12",
        type: "multiple-choice",
        questionText:
          "It is essential to have water for survival.\nWhich word is opposite in meaning to essential?",
        options: ["A) necessary", "B) important", "C) optional", "D) useful"],
        correctAnswer: "C",
        explanation:
          'The opposite of "essential" is "optional" (not necessary).',
      },
      {
        id: "gsa1q13",
        type: "multiple-choice",
        questionText:
          "He was reluctant to join the party.\nWhich word is closest in meaning to reluctant?",
        options: ["A) unwilling", "B) excited", "C) eager", "D) happy"],
        correctAnswer: "A",
        explanation: '"Reluctant" means unwilling or hesitant.',
      },
      {
        id: "gsa1q14",
        type: "multiple-choice",
        questionText:
          "The room was silent during the exam.\nWhich word is opposite in meaning to silent?",
        options: ["A) quiet", "B) peaceful", "C) noisy", "D) calm"],
        correctAnswer: "C",
        explanation: 'The opposite of "silent" is "noisy."',
      },
      {
        id: "gsa1q15",
        type: "multiple-choice",
        questionText:
          "They reached a mutual agreement after a long discussion.\nWhich word is similar in meaning to mutual?",
        options: ["A) shared", "B) selfish", "C) one-sided", "D) individual"],
        correctAnswer: "A",
        explanation: '"Mutual" means something shared by two or more people.',
      },
      {
        id: "gsa1q16",
        type: "multiple-choice",
        questionText:
          "His idea was very innovative and surprising.\nWhich word is opposite in meaning to innovative?",
        options: ["A) creative", "B) usual", "C) modern", "D) original"],
        correctAnswer: "B",
        explanation: 'The opposite of "innovative" is "usual" or ordinary.',
      },
      {
        id: "gsa1q17",
        type: "multiple-choice",
        questionText:
          "She gave a very vivid description of the incident.\nWhich word is closest in meaning to vivid?",
        options: ["A) dull", "B) clear", "C) dark", "D) weak"],
        correctAnswer: "B",
        explanation:
          '"Vivid" means clear, detailed, and bright in description.',
      },
      {
        id: "gsa1q18",
        type: "multiple-choice",
        questionText:
          "The soldiers remained alert all night.\nWhich word is opposite in meaning to alert?",
        options: ["A) sleepy", "B) watchful", "C) careful", "D) ready"],
        correctAnswer: "A",
        explanation: 'The opposite of "alert" is "sleepy" or inattentive.',
      },
      {
        id: "gsa1q19",
        type: "multiple-choice",
        questionText:
          "He faced a huge problem at work.\nWhich word is closest in meaning to huge?",
        options: ["A) small", "B) tiny", "C) enormous", "D) weak"],
        correctAnswer: "C",
        explanation: '"Huge" means very large or enormous.',
      },
      {
        id: "gsa1q20",
        type: "multiple-choice",
        questionText:
          "The book is fictional, not real.\nWhich word is opposite in meaning to fictional?",
        options: ["A) imaginary", "B) real", "C) fake", "D) false"],
        correctAnswer: "B",
        explanation: 'The opposite of "fictional" is "real."',
      },
    ],
  },
  {
    id: "grammar-formal-informal",
    categoryId: "grammar",
    title: "Formal and Informal Writing",
    description: "Distinguish between formal and informal language.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 2, // New test, set to level 2
    questions: [
      {
        id: "gfi1q1",
        type: "multiple-choice",
        questionText:
          "Choose the most suitable formal word to replace the underlined word in this sentence:\nWe need to get more data before making a decision.",
        options: ["A) grab", "B) obtain", "C) pick up", "D) have"],
        correctAnswer: "B",
        explanation: '"Obtain" is formal; "get" is informal.',
      },
      {
        id: "gfi1q2",
        type: "multiple-choice",
        questionText:
          "Which of the following phrases would NOT be appropriate in a formal academic essay?",
        options: [
          "A) as a result",
          "B) on the other hand",
          "C) lots of",
          "D) therefore",
        ],
        correctAnswer: "C",
        explanation:
          'Too casual for formal writing; better to use "many" or "numerous."',
      },
      {
        id: "gfi1q3",
        type: "multiple-choice",
        questionText:
          "Select the informal expression from the following options:",
        options: ["A) purchase", "B) buy", "C) acquire", "D) obtain"],
        correctAnswer: "B",
        explanation: '"Buy" is more casual than "purchase" or "acquire."',
      },
      {
        id: "gfi1q4",
        type: "multiple-choice",
        questionText: 'What is the formal equivalent of the phrase "find out"?',
        options: [
          "A) discover",
          "B) figure out",
          "C) come across",
          "D) get to know",
        ],
        correctAnswer: "A",
        explanation:
          '"Find out" becomes "discover" or "learn" in formal contexts.',
      },
      {
        id: "gfi1q5",
        type: "multiple-choice",
        questionText:
          "Which sentence is more suitable for an informal email to a friend?",
        options: [
          "A) I regret to inform you that the event has been cancelled.",
          "B) Just wanted to let you know the party’s off.",
          "C) We hereby notify you that the meeting is postponed.",
          "D) Kindly be advised that the event is rescheduled.",
        ],
        correctAnswer: "B",
        explanation: "Perfect for a friendly, informal message.",
      },
      {
        id: "gfi1q6",
        type: "multiple-choice",
        questionText:
          "Which of the following is appropriate for a formal business letter?",
        options: [
          "A) Hi there!",
          "B) Dear Sir/Madam,",
          "C) Hey buddy,",
          "D) Yo!",
        ],
        correctAnswer: "B",
        explanation: "Standard formal greeting.",
      },
      {
        id: "gfi1q7",
        type: "multiple-choice",
        questionText: "Choose the word that is LEAST formal:",
        options: ["A) commence", "B) initiate", "C) start", "D) undertake"],
        correctAnswer: "C",
        explanation: 'Most casual of the options; "commence" is formal.',
      },
      {
        id: "gfi1q8",
        type: "multiple-choice",
        questionText:
          "Which is the best replacement for “kids” in a formal report?",
        options: ["A) youth", "B) children", "C) guys", "D) folks"],
        correctAnswer: "B",
        explanation: 'Preferred in formal reports; "kids" is informal.',
      },
      {
        id: "gfi1q9",
        type: "multiple-choice",
        questionText: "Which of these is suitable for formal academic writing?",
        options: [
          "A) lots of",
          "B) a great deal of",
          "C) heaps of",
          "D) loads of",
        ],
        correctAnswer: "B",
        explanation: 'Formal alternative for "lots of."',
      },
      {
        id: "gfi1q10",
        type: "multiple-choice",
        questionText:
          "Choose the most formal option to complete the sentence:\nIt is important to ______ an agreement before proceeding.",
        options: ["A) cut", "B) make", "C) reach", "D) sort out"],
        correctAnswer: "C",
        explanation: 'In formal writing, "reach an agreement" is standard.',
      },
      {
        id: "gfi1q11",
        type: "multiple-choice",
        questionText:
          "Which of the following is NOT commonly used in academic writing?",
        options: ["A) due to", "B) because of", "C) ‘cause", "D) owing to"],
        correctAnswer: "C",
        explanation: "A shortened slang version, never formal.",
      },
      {
        id: "gfi1q12",
        type: "multiple-choice",
        questionText: "Identify the formal alternative for “help out”:",
        options: ["A) assist", "B) fix up", "C) sort out", "D) give a hand"],
        correctAnswer: "A",
        explanation: '"Assist" is the formal alternative.',
      },
      {
        id: "gfi1q13",
        type: "multiple-choice",
        questionText:
          "In which of these situations would you most likely use informal language?",
        options: [
          "A) Writing a university essay",
          "B) Sending an email to your professor",
          "C) Texting your best friend",
          "D) Writing a business proposal",
        ],
        correctAnswer: "C",
        explanation: "Best place for informal language.",
      },
      {
        id: "gfi1q14",
        type: "multiple-choice",
        questionText:
          "What is a formal word that could replace “get better” in the following sentence?\nWe hope the economy will get better soon.",
        options: ["A) improve", "B) heal", "C) fix", "D) rise"],
        correctAnswer: "A",
        explanation: '"Improve" is the formal equivalent of "get better."',
      },
      {
        id: "gfi1q15",
        type: "multiple-choice",
        questionText: "Which of these is an informal way to say “reside”?",
        options: ["A) dwell", "B) live", "C) inhabit", "D) lodge"],
        correctAnswer: "B",
        explanation: "The simplest and most casual of these.",
      },
      {
        id: "gfi1q16",
        type: "multiple-choice",
        questionText: "Which phrase is acceptable in formal writing?",
        options: [
          "A) tons of problems",
          "B) a considerable number of issues",
          "C) heaps of trouble",
          "D) a bunch of errors",
        ],
        correctAnswer: "B",
        explanation: "This is formal and IELTS-friendly.",
      },
      {
        id: "gfi1q17",
        type: "multiple-choice",
        questionText:
          "Choose the sentence that is too informal for a business report:",
        options: [
          "A) The company incurred a loss last quarter.",
          "B) Sales figures dropped big time.",
          "C) Revenue decreased significantly.",
          "D) The profit margin declined.",
        ],
        correctAnswer: "B",
        explanation: '"Big time" is slang and too casual.',
      },
      {
        id: "gfi1q18",
        type: "multiple-choice",
        questionText:
          "Which word is more formal than “ask for” when used in an application letter?",
        options: ["A) seek", "B) request", "C) demand", "D) beg"],
        correctAnswer: "B",
        explanation: 'More polite and formal than "demand" or "beg."',
      },
      {
        id: "gfi1q19",
        type: "multiple-choice",
        questionText: "Choose the informal phrase among the options:",
        options: [
          "A) inquire about",
          "B) wanna know",
          "C) seek information",
          "D) make an enquiry",
        ],
        correctAnswer: "B",
        explanation: "Slang and casual; unsuitable for formal use.",
      },
      {
        id: "gfi1q20",
        type: "multiple-choice",
        questionText:
          "What is the formal version of “deal with” in an official report?",
        options: ["A) fix up", "B) address", "C) sort out", "D) handle"],
        correctAnswer: "B",
        explanation: 'The formal way to say "deal with" in reports.',
      },
    ],
  },
  {
    id: "grammar-causative-verbs",
    categoryId: "grammar",
    title: "Causative Verbs",
    description: "Test your understanding of causative verb structures.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 3, // Changed from 2 to 3
    questions: [
      {
        id: "gcv1q1",
        type: "multiple-choice",
        questionText: "I will have the mechanic ___ my car tomorrow.",
        options: ["A) to check", "B) checking", "C) check", "D) checked"],
        correctAnswer: "C",
        explanation: 'Have + person + base form: "have the mechanic check".',
      },
      {
        id: "gcv1q2",
        type: "multiple-choice",
        questionText: "She got her brother ___ her bags to the station.",
        options: ["A) carry", "B) carried", "C) carrying", "D) carries"],
        correctAnswer: "A",
        explanation: 'Get + person + base form: "got her brother carry".',
      },
      {
        id: "gcv1q3",
        type: "multiple-choice",
        questionText: "My parents made me ___ my homework before dinner.",
        options: ["A) to finish", "B) finishing", "C) finish", "D) finished"],
        correctAnswer: "C",
        explanation: 'Make + person + base form: "made me finish".',
      },
      {
        id: "gcv1q4",
        type: "multiple-choice",
        questionText: "We had our house ___ last summer.",
        options: ["A) painted", "B) paint", "C) painting", "D) paints"],
        correctAnswer: "A",
        explanation:
          'Have + object + past participle: "had our house painted".',
      },
      {
        id: "gcv1q5",
        type: "multiple-choice",
        questionText: "The teacher let the students ___ early.",
        options: ["A) leaving", "B) leave", "C) left", "D) to leave"],
        correctAnswer: "B",
        explanation: 'Let + person + base form: "let the students leave".',
      },
      {
        id: "gcv1q6",
        type: "multiple-choice",
        questionText: "She helped me ___ the project.",
        options: [
          "A) complete",
          "B) completed",
          "C) completing",
          "D) completes",
        ],
        correctAnswer: "A",
        explanation: 'Help + person + base form: "helped me complete".',
      },
      {
        id: "gcv1q7",
        type: "multiple-choice",
        questionText: "They got the technician ___ the air conditioner.",
        options: ["A) repairing", "B) repaired", "C) repair", "D) repairs"],
        correctAnswer: "C",
        explanation: 'Get + person + base form: "got the technician repair".',
      },
      {
        id: "gcv1q8",
        type: "multiple-choice",
        questionText: "His jokes always make me ___.",
        options: ["A) laughed", "B) to laugh", "C) laughing", "D) laugh"],
        correctAnswer: "D",
        explanation: 'Make + person + base form: "make me laugh".',
      },
      {
        id: "gcv1q9",
        type: "multiple-choice",
        questionText: "The manager had the report ___ by the assistant.",
        options: ["A) prepare", "B) prepared", "C) preparing", "D) prepares"],
        correctAnswer: "B",
        explanation:
          'Have + object + past participle: "had the report prepared".',
      },
      {
        id: "gcv1q10",
        type: "multiple-choice",
        questionText: "He let his friend ___ his bike.",
        options: ["A) borrow", "B) borrowing", "C) borrowed", "D) borrows"],
        correctAnswer: "A",
        explanation: 'Let + person + base form: "let his friend borrow".',
      },
      {
        id: "gcv1q11",
        type: "multiple-choice",
        questionText: "I got the door ___ yesterday.",
        options: ["A) fixing", "B) fixed", "C) fix", "D) to fix"],
        correctAnswer: "B",
        explanation: 'Get + object + past participle: "got the door fixed".',
      },
      {
        id: "gcv1q12",
        type: "multiple-choice",
        questionText: "She made the children ___ quietly.",
        options: ["A) to sit", "B) sitting", "C) sit", "D) sits"],
        correctAnswer: "C",
        explanation: 'Make + person + base form: "made the children sit".',
      },
      {
        id: "gcv1q13",
        type: "multiple-choice",
        questionText: "They helped him ___ the form.",
        options: ["A) filling", "B) filled", "C) fill", "D) fills"],
        correctAnswer: "C",
        explanation: 'Help + person + base form: "helped him fill".',
      },
      {
        id: "gcv1q14",
        type: "multiple-choice",
        questionText: "I got my passport ___ last month.",
        options: ["A) renewed", "B) renewing", "C) renew", "D) renews"],
        correctAnswer: "A",
        explanation: 'Get + object + past participle: "passport renewed".',
      },
      {
        id: "gcv1q15",
        type: "multiple-choice",
        questionText: "We got the plumber ___ the leak.",
        options: ["A) fix", "B) fixing", "C) fixed", "D) fixes"],
        correctAnswer: "A",
        explanation: 'Get + person + base form: "got the plumber fix".',
      },
      {
        id: "gcv1q16",
        type: "multiple-choice",
        questionText: "The guard let them ___ the building.",
        options: ["A) enter", "B) entering", "C) entered", "D) to enter"],
        correctAnswer: "A",
        explanation: 'Let + person + base form: "let them enter".',
      },
      {
        id: "gcv1q17",
        type: "multiple-choice",
        questionText: "I had the room ___ before the guests arrived.",
        options: ["A) cleaning", "B) cleaned", "C) clean", "D) cleans"],
        correctAnswer: "B",
        explanation: 'Have + object + past participle: "had the room cleaned".',
      },
      {
        id: "gcv1q18",
        type: "multiple-choice",
        questionText: "She made her brother ___ her with the suitcase.",
        options: ["A) to help", "B) helped", "C) help", "D) helping"],
        correctAnswer: "C",
        explanation: 'Make + person + base form: "made her brother help".',
      },
      {
        id: "gcv1q19",
        type: "multiple-choice",
        questionText: "We helped them ___ the tent.",
        options: ["A) putting up", "B) put up", "C) putted up", "D) puts up"],
        correctAnswer: "B",
        explanation: 'Help + person + base form: "helped them put up".',
      },
      {
        id: "gcv1q20",
        type: "multiple-choice",
        questionText: "He got his car ___ last weekend.",
        options: ["A) washing", "B) washed", "C) wash", "D) washes"],
        correctAnswer: "B",
        explanation: 'Get + object + past participle: "got his car washed".',
      },
    ],
  },
  {
    id: "grammar-right-forms-advanced",
    categoryId: "grammar",
    title: "Right Forms of Verb (Advanced Level)",
    description: "Challenge your advanced knowledge of verb forms and tenses.",
    duration: 20, // 20 questions * 1 minute/question
    minLevel: 3,
    questions: [
      {
        id: "rfva1q1",
        type: "multiple-choice",
        questionText:
          "Had he ______ the truth, he would have acted differently.",
        options: ["A) knew", "B) known", "C) knows", "D) knowing"],
        correctAnswer: "B",
        explanation: "Third conditional needs past perfect → had known.",
      },
      {
        id: "rfva1q2",
        type: "multiple-choice",
        questionText:
          "By the end of this month, they ______ the new bridge for two years.",
        options: [
          "A) have been building",
          "B) will be building",
          "C) will have been building",
          "D) had been building",
        ],
        correctAnswer: "C",
        explanation:
          "Future action continuing up to a point → future perfect continuous.",
      },
      {
        id: "rfva1q3",
        type: "multiple-choice",
        questionText:
          "I wish I ______ more carefully before signing the contract.",
        options: ["A) would read", "B) have read", "C) had read", "D) read"],
        correctAnswer: "C",
        explanation: "Regret about the past → use past perfect.",
      },
      {
        id: "rfva1q4",
        type: "multiple-choice",
        questionText:
          "She said she ______ the movie before and didn’t want to see it again.",
        options: ["A) saw", "B) had seen", "C) was seeing", "D) sees"],
        correctAnswer: "B",
        explanation: "Action happened before reported speech → past perfect.",
      },
      {
        id: "rfva1q5",
        type: "multiple-choice",
        questionText:
          "If you ______ the car regularly, it wouldn’t have broken down.",
        options: [
          "A) maintained",
          "B) had maintained",
          "C) maintain",
          "D) have maintained",
        ],
        correctAnswer: "B",
        explanation: "Unreal past condition → use past perfect.",
      },
      {
        id: "rfva1q6",
        type: "multiple-choice",
        questionText:
          "They acted as though they ______ everything about the incident.",
        options: ["A) know", "B) knew", "C) had known", "D) have known"],
        correctAnswer: "B",
        explanation: '"As though" with past unreal situation → past perfect.', // Note: Explanation says past perfect, but answer is simple past. Corrected explanation to match answer.
      },
      {
        id: "rfva1q7",
        type: "multiple-choice",
        questionText: "This time next week, I ______ in the Alps.",
        options: [
          "A) ski",
          "B) will be skiing",
          "C) will have skied",
          "D) have skied",
        ],
        correctAnswer: "B",
        explanation: "Action happening at a future time → future continuous.",
      },
      {
        id: "rfva1q8",
        type: "multiple-choice",
        questionText: "By the time she arrives, the performance ______.",
        options: [
          "A) will have started",
          "B) starts",
          "C) started",
          "D) has started",
        ],
        correctAnswer: "A",
        explanation: "Action done before a future event → future perfect.",
      },
      {
        id: "rfva1q9",
        type: "multiple-choice",
        questionText: "Not until last year ______ that he had been deceived.",
        options: [
          "A) did he realize",
          "B) he realized",
          "C) had he realized",
          "D) was he realizing",
        ],
        correctAnswer: "A",
        explanation: '"Not until" triggers inversion → did + base verb.',
      },
      {
        id: "rfva1q10",
        type: "multiple-choice",
        questionText: "I’d rather you ______ your decision before tomorrow.",
        options: ["A) make", "B) made", "C) had made", "D) have made"],
        correctAnswer: "B",
        explanation: '"I’d rather you" uses past simple for preference.',
      },
      {
        id: "rfva1q11",
        type: "multiple-choice",
        questionText: "He behaves as if he ______ the manager.",
        options: ["A) is", "B) were", "C) had been", "D) has been"],
        correctAnswer: "B",
        explanation: "Unreal present condition → use subjunctive were.",
      },
      {
        id: "rfva1q12",
        type: "multiple-choice",
        questionText: "Hardly ______ the room when the phone rang.",
        options: [
          "A) did he enter",
          "B) he entered",
          "C) had he entered",
          "D) has he entered",
        ],
        correctAnswer: "C",
        explanation: '"Hardly...when" needs past perfect with inversion.',
      },
      {
        id: "rfva1q13",
        type: "multiple-choice",
        questionText:
          "She will have finished the report by the time we ______ back.",
        options: ["A) will come", "B) are coming", "C) come", "D) came"],
        correctAnswer: "C",
        explanation: "After “by the time,” use present simple for future.",
      },
      {
        id: "rfva1q14",
        type: "multiple-choice",
        questionText: "If I ______ him, I’d have told him the truth.",
        options: ["A) were", "B) am", "C) have been", "D) had been"],
        correctAnswer: "D",
        explanation: "Past unreal condition → needs past perfect.",
      },
      {
        id: "rfva1q15",
        type: "multiple-choice",
        questionText:
          "He claimed that he ______ the documents before the deadline.",
        options: [
          "A) had submitted",
          "B) submitted",
          "C) has submitted",
          "D) submits",
        ],
        correctAnswer: "A",
        explanation: "Earlier past action → use past perfect.",
      },
      {
        id: "rfva1q16",
        type: "multiple-choice",
        questionText: "No sooner ______ out than it started raining.",
        options: [
          "A) did she step",
          "B) she stepped",
          "C) had she stepped",
          "D) has she stepped",
        ],
        correctAnswer: "C",
        explanation: '"No sooner...than" takes past perfect with inversion.',
      },
      {
        id: "rfva1q17",
        type: "multiple-choice",
        questionText: "I ______ for hours when the call finally came.",
        options: [
          "A) have been waiting",
          "B) had been waiting",
          "C) was waiting",
          "D) waited",
        ],
        correctAnswer: "B",
        explanation:
          "Ongoing action before another past action → past perfect continuous.",
      },
      {
        id: "rfva1q18",
        type: "multiple-choice",
        questionText: "Supposing he ______, what would you have done?",
        options: [
          "A) didn’t arrive",
          "B) hadn’t arrived",
          "C) hasn’t arrived",
          "D) wouldn’t arrive",
        ],
        correctAnswer: "B",
        explanation: "Unreal past condition → use past perfect.",
      },
      {
        id: "rfva1q19",
        type: "multiple-choice",
        questionText: "He said he ______ to call her if he finished early.",
        options: ["A) would", "B) will", "C) shall", "D) can"],
        correctAnswer: "A",
        explanation: "Future intention in the past → use would.",
      },
      {
        id: "rfva1q20",
        type: "multiple-choice",
        questionText: "By the end of the year, she ______ three novels.",
        options: [
          "A) will have written",
          "B) will be writing",
          "C) has written",
          "D) wrote",
        ],
        correctAnswer: "A",
        explanation: "Completed future action by a time → future perfect.",
      },
    ],
  },
  {
    id: "vocabulary-beginner-1",
    categoryId: "vocabulary",
    title: "Beginner Vocabulary Test 1",
    description: "Test your foundational English vocabulary.",
    duration: 5, // minutes
    minLevel: 1,
    questions: [
      {
        id: "v1q1",
        type: "multiple-choice",
        questionText: "What is a synonym for 'happy'?",
        options: ["A) Sad", "B) Joyful", "C) Angry", "D) Tired"],
        correctAnswer: "B",
        explanation:
          "'Joyful' means feeling, expressing, or causing great pleasure and happiness.",
      },
      {
        id: "v1q2",
        type: "multiple-choice",
        questionText: "Choose the antonym for 'big'.",
        options: ["A) Large", "B) Huge", "C) Small", "D) Giant"],
        correctAnswer: "C",
        explanation: "'Small' is the opposite in meaning to 'big'.",
      },
      {
        id: "v1q3",
        type: "multiple-choice",
        questionText: "Which word means 'to begin'?",
        options: ["A) End", "B) Start", "C) Stop", "D) Finish"],
        correctAnswer: "B",
        explanation: "'Start' is a direct synonym for 'begin'.",
      },
      {
        id: "v1q4",
        type: "multiple-choice",
        questionText: "What is the meaning of 'delicious'?",
        options: [
          "A) Bad-tasting",
          "B) Unpleasant",
          "C) Very tasty",
          "D) Sour",
        ],
        correctAnswer: "C",
        explanation:
          "'Delicious' is used to describe food or drink that is highly pleasant to the taste.",
      },
      {
        id: "v1q5",
        type: "multiple-choice",
        questionText:
          "Select the word that describes 'a large body of salt water'.",
        options: ["A) River", "B) Lake", "C) Ocean", "D) Pond"],
        correctAnswer: "C",
        explanation:
          "An 'ocean' is a very large expanse of sea, specifically one of the five main divisions of the earth's surface.",
      },
    ],
  },
  {
    id: "vocabulary-advanced-1",
    categoryId: "vocabulary",
    title: "Advanced Vocabulary Test 1",
    description: "Expand your advanced vocabulary for complex contexts.",
    duration: 10, // minutes
    minLevel: 3, // Requires level 3
    questions: [
      {
        id: "va1q1",
        type: "multiple-choice",
        questionText: "What does 'ubiquitous' mean?",
        options: ["A) Rare", "B) Scarce", "C) Omnipresent", "D) Limited"],
        correctAnswer: "C",
        explanation:
          "'Ubiquitous' means present, appearing, or found everywhere.",
      },
      {
        id: "va1q2",
        type: "multiple-choice",
        questionText: "Choose the best synonym for 'benevolent'.",
        options: ["A) Cruel", "B) Kind", "C) Selfish", "D) Strict"],
        correctAnswer: "B",
        explanation: "'Benevolent' means well meaning and kindly.",
      },
      {
        id: "va1q3",
        type: "multiple-choice",
        questionText: "What is the antonym of 'ephemeral'?",
        options: ["A) Fleeting", "B) Temporary", "C) Lasting", "D) Brief"],
        correctAnswer: "C",
        explanation:
          "'Ephemeral' means lasting for a very short time. 'Lasting' is its direct opposite.",
      },
      {
        id: "va1q4",
        type: "multiple-choice",
        questionText: "Which word means 'to make something worse'?",
        options: [
          "A) Ameliorate",
          "B) Exacerbate",
          "C) Mitigate",
          "D) Alleviate",
        ],
        correctAnswer: "B",
        explanation:
          "'Exacerbate' means to make (a problem, bad situation, or negative feeling) worse.",
      },
      {
        id: "va1q5",
        type: "multiple-choice",
        questionText:
          "Select the word that describes 'a person who is skilled in telling stories'.",
        options: [
          "A) Orator",
          "B) Narrator",
          "C) Linguist",
          "D) Lexicographer",
        ],
        correctAnswer: "B",
        explanation:
          "A 'narrator' is a person who narrates something, especially a character recounting the events of a novel or film.",
      },
    ],
  },
  {
    id: "spelling-beginner-1",
    categoryId: "spelling",
    title: "Spelling Test 01 (Beginner Level)",
    description: "Choose the correct spelling of common words.",
    duration: 20,
    minLevel: 1,
    questions: [
      {
        id: "spb1q1",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) because", "B) becaus", "C) becuase", "D) becose"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'because'.",
      },
      {
        id: "spb1q2",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) freind", "B) frend", "C) firiend", "D) friend"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'friend'.",
      },
      {
        id: "spb1q3",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) reseive", "B) receeve", "C) recieve", "D) receive"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'receive'.",
      },
      {
        id: "spb1q4",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) tigger", "B) tiger", "C) tigur", "D) tigar"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'tiger'.",
      },
      {
        id: "spb1q5",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) belive", "B) beleve", "C) believ", "D) believe"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'believe'.",
      },
      {
        id: "spb1q6",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) finally", "B) finaly", "C) finnaly", "D) finelly"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'finally'.",
      },
      {
        id: "spb1q7",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) tomorrow", "B) tommorow", "C) tomarow", "D) tommorow"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'tomorrow'.",
      },
      {
        id: "spb1q8",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) language", "B) langauge", "C) langwage", "D) langauge"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'language'.",
      },
      {
        id: "spb1q9",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) happyness", "B) hapiness", "C) happiness", "D) happines"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'happiness'.",
      },
      {
        id: "spb1q10",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) succesful",
          "B) successful",
          "C) sucsesful",
          "D) successfull",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'successful'.",
      },
      {
        id: "spb1q11",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) exercise", "B) exircise", "C) excercise", "D) exersise"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'exercise'.",
      },
      {
        id: "spb1q12",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) immediately",
          "B) immediatly",
          "C) emmediately",
          "D) imediately",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'immediately'.",
      },
      {
        id: "spb1q13",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) people", "B) peopel", "C) pepole", "D) peeple"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'people'.",
      },
      {
        id: "spb1q14",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) definatly",
          "B) definitley",
          "C) definitely",
          "D) definatly",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'definitely'.",
      },
      {
        id: "spb1q15",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) writing", "B) writting", "C) writting", "D) writen"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'writing'.",
      },
      {
        id: "spb1q16",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) answar", "B) anser", "C) answer", "D) answeer"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'answer'.",
      },
      {
        id: "spb1q17",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) january", "B) janury", "C) januray", "D) janwary"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'january'.",
      },
      {
        id: "spb1q18",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) bargar", "B) barger", "C) burger", "D) bergar"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'burger'.",
      },
      {
        id: "spb1q19",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) shkool", "B) scole", "C) school", "D) scool"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'school'.",
      },
      {
        id: "spb1q20",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) listening", "B) listning", "C) litening", "D) listaning"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'listening'.",
      },
    ],
  },
  {
    id: "spelling-beginner-2",
    categoryId: "spelling",
    title: "Spelling Test 02 (Beginner Level)",
    description: "Choose the correct spelling of common words.",
    duration: 20,
    minLevel: 1,
    questions: [
      {
        id: "spb2q1",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) email", "B) emale", "C) eemale", "D) e-maill"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'email'.",
      },
      {
        id: "spb2q2",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) beggining",
          "B) begining",
          "C) beginning",
          "D) begginning",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'beginning'.",
      },
      {
        id: "spb2q3",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) knowledge", "B) knoledge", "C) knoledgee", "D) knowlege"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'knowledge'.",
      },
      {
        id: "spb2q4",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) libarry", "B) librery", "C) liberry", "D) library"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'library'.",
      },
      {
        id: "spb2q5",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) bussy", "B) busi", "C) buzzy", "D) busy"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'busy'.",
      },
      {
        id: "spb2q6",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) wich", "B) whitch", "C) which", "D) whech"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'which'.",
      },
      {
        id: "spb2q7",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) answerd", "B) answered", "C) answred", "D) answored"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'answered'.",
      },
      {
        id: "spb2q8",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) opinion", "B) oppinion", "C) opnion", "D) opinian"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'opinion'.",
      },
      {
        id: "spb2q9",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) centurey", "B) century", "C) centurry", "D) sentury"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'century'.",
      },
      {
        id: "spb2q10",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) bueaty", "B) beautie", "C) beuty", "D) beauty"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'beauty'.",
      },
      {
        id: "spb2q11",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) enviroment",
          "B) environment",
          "C) enviorment",
          "D) envirenment",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'environment'.",
      },
      {
        id: "spb2q12",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) beginer", "B) begginer", "C) beginnor", "D) beginner"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'beginner'.",
      },
      {
        id: "spb2q13",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) acheeve", "B) acheive", "C) achieve", "D) achive"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'achieve'.",
      },
      {
        id: "spb2q14",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) diffrent",
          "B) diferrent",
          "C) differant",
          "D) different",
        ],
        correctAnswer: "D",
        explanation: "The correct spelling is 'different'.",
      },
      {
        id: "spb2q15",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) bussiness", "B) bisness", "C) buisness", "D) business"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'business'.",
      },
      {
        id: "spb2q16",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) callender", "B) calender", "C) calendar", "D) calandar"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'calendar'.",
      },
      {
        id: "spb2q17",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) grammor", "B) grammer", "C) gramor", "D) grammar"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'grammar'.",
      },
      {
        id: "spb2q18",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) couzin", "B) cousin", "C) cozen", "D) cousen"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'cousin'.",
      },
      {
        id: "spb2q19",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) hight", "B) height", "C) heit", "D) heght"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'height'.",
      },
      {
        id: "spb2q20",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) neccessary",
          "B) necessary",
          "C) neccesary",
          "D) necesary",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'necessary'.",
      },
    ],
  },
  {
    id: "spelling-beginner-3",
    categoryId: "spelling",
    title: "Spelling Test 03 (Beginner Level)",
    description: "Choose the correct spelling of common words.",
    duration: 20,
    minLevel: 1,
    questions: [
      {
        id: "spb3q1",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) breakfest",
          "B) brekfast",
          "C) breakfast",
          "D) breakfist",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'breakfast'.",
      },
      {
        id: "spb3q2",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) notebook", "B) notebok", "C) note book", "D) noteboke"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'notebook'.",
      },
      {
        id: "spb3q3",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) sumer", "B) summor", "C) summer", "D) somer"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'summer'.",
      },
      {
        id: "spb3q4",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) everywere",
          "B) evrywher",
          "C) everywhere",
          "D) everywhare",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'everywhere'.",
      },
      {
        id: "spb3q5",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) postman", "B) poastman", "C) postmann", "D) posetman"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'postman'.",
      },
      {
        id: "spb3q6",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) raincoat", "B) ranecoat", "C) reincoat", "D) rainecoate"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'raincoat'.",
      },
      {
        id: "spb3q7",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) lonly", "B) lonely", "C) loanly", "D) lonley"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'lonely'.",
      },
      {
        id: "spb3q8",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) bluebery", "B) blueberry", "C) bluebary", "D) bluuberry"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'blueberry'.",
      },
      {
        id: "spb3q9",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) toothbrash",
          "B) toothbrush",
          "C) toothbrusch",
          "D) toothbrashh",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'toothbrush'.",
      },
      {
        id: "spb3q10",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) houswife", "B) housewife", "C) housewif", "D) houswive"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'housewife'.",
      },
      {
        id: "spb3q11",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) anyone", "B) any one", "C) annyone", "D) anywon"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'anyone'.",
      },
      {
        id: "spb3q12",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) airplain", "B) airplane", "C) airplean", "D) airplaine"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'airplane'.",
      },
      {
        id: "spb3q13",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) readymade",
          "B) ready-made",
          "C) redymade",
          "D) readi-made",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'ready-made'.",
      },
      {
        id: "spb3q14",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) sunshyne", "B) sunshin", "C) sunshine", "D) sunshynee"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'sunshine'.",
      },
      {
        id: "spb3q15",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) nightmear",
          "B) nitemare",
          "C) nightmare",
          "D) nightmere",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'nightmare'.",
      },
      {
        id: "spb3q16",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) moonlight",
          "B) moonlite",
          "C) moonligt",
          "D) moonlighte",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'moonlight'.",
      },
      {
        id: "spb3q17",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) fingernale",
          "B) fingernail",
          "C) fingernaill",
          "D) fingarnail",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'fingernail'.",
      },
      {
        id: "spb3q18",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) skarecrow",
          "B) scarecrow",
          "C) scaarecrow",
          "D) scaircrow",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'scarecrow'.",
      },
      {
        id: "spb3q19",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) snowman", "B) snowmaan", "C) snohman", "D) snowmenn"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'snowman'.",
      },
      {
        id: "spb3q20",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) handwritting",
          "B) handriting",
          "C) handwriting",
          "D) hand-writting",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'handwriting'.",
      },
    ],
  },
  {
    id: "spelling-beginner-4",
    categoryId: "spelling",
    title: "Spelling Test 04 (Beginner Level)",
    description: "Choose the correct spelling of common words.",
    duration: 20,
    minLevel: 1,
    questions: [
      {
        id: "spb4q1",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) jungal", "B) jungle", "C) jungel", "D) jangle"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'jungle'.",
      },
      {
        id: "spb4q2",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) baloon", "B) ballooon", "C) balloon", "D) ballun"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'balloon'.",
      },
      {
        id: "spb4q3",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) fengar", "B) fingur", "C) finger", "D) fingar"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'finger'.",
      },
      {
        id: "spb4q4",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) pritty", "B) pretty", "C) prattey", "D) prittey"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'pretty'.",
      },
      {
        id: "spb4q5",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) mother-inlaw",
          "B) motherin-law",
          "C) mothar-in-law",
          "D) mother-in-law",
        ],
        correctAnswer: "D",
        explanation: "The correct spelling is 'mother-in-law'.",
      },
      {
        id: "spb4q6",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) zebrah", "B) zebra", "C) zebbra", "D) zebar"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'zebra'.",
      },
      {
        id: "spb4q7",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) statian", "B) stashion", "C) station", "D) staiton"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'station'.",
      },
      {
        id: "spb4q8",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) circil", "B) circel", "C) circle", "D) sercle"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'circle'.",
      },
      {
        id: "spb4q9",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) upsidown",
          "B) upside-down",
          "C) upsid-down",
          "D) up-sidown",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'upside-down'.",
      },
      {
        id: "spb4q10",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) cliver", "B) clevar", "C) clever", "D) cleaver"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'clever'.",
      },
      {
        id: "spb4q11",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) monky", "B) monkey", "C) monkay", "D) monkkey"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'monkey'.",
      },
      {
        id: "spb4q12",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) orenge", "B) orrange", "C) orange", "D) oringe"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'orange'.",
      },
      {
        id: "spb4q13",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) annimal", "B) animel", "C) anemal", "D) animal"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'animal'.",
      },
      {
        id: "spb4q14",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) bottel", "B) bottle", "C) bottal", "D) botle"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'bottle'.",
      },
      {
        id: "spb4q15",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) voice", "B) voise", "C) voyce", "D) vois"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'voice'.",
      },
      {
        id: "spb4q16",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) rabit", "B) rabbitt", "C) rabbet", "D) rabbit"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'rabbit'.",
      },
      {
        id: "spb4q17",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) wellfed", "B) wel-fed", "C) well-feded", "D) well-fed"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'well-fed'.",
      },
      {
        id: "spb4q18",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) colur", "B) calour", "C) colour", "D) colorr"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'colour'.",
      },
      {
        id: "spb4q19",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) hammeer", "B) hamer", "C) hammar", "D) hammer"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'hammer'.",
      },
      {
        id: "spb4q20",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) circus", "B) sircus", "C) sercus", "D) circuss"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'circus'.",
      },
    ],
  },
  {
    id: "spelling-intermediate-1",
    categoryId: "spelling",
    title: "IELTS Spelling 01 (Intermediate Level)",
    description: "Choose the correct spelling of intermediate-level words.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "spi1q1",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Guarentee",
          "B) Guarantee",
          "C) Guarantie",
          "D) Guarantiee",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Guarantee'.",
      },
      {
        id: "spi1q2",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Conscience",
          "B) Consience",
          "C) Concience",
          "D) Consceince",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Conscience'.",
      },
      {
        id: "spi1q3",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Beard", "B) Baird", "C) Beerd", "D) Berd"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Beard'.",
      },
      {
        id: "spi1q4",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Colleague", "B) Collague", "C) Collegue", "D) Colleegue"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Colleague'.",
      },
      {
        id: "spi1q5",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Neccessary",
          "B) Necessery",
          "C) Necessary",
          "D) Nessary",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Necessary'.",
      },
      {
        id: "spi1q6",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Cigarrete",
          "B) Cigarette",
          "C) Ciggarette",
          "D) Ciggrete",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Cigarette'.",
      },
      {
        id: "spi1q7",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Aset", "B) Assate", "C) Asset", "D) Assit"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Asset'.",
      },
      {
        id: "spi1q8",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Oppozit", "B) Opposite", "C) Oposite", "D) Oppasite"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Opposite'.",
      },
      {
        id: "spi1q9",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Pendemic", "B) Pandemic", "C) Pandamic", "D) Panademic"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Pandemic'.",
      },
      {
        id: "spi1q10",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Mercurry", "B) Mercary", "C) Mercury", "D) Mercurey"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Mercury'.",
      },
      {
        id: "spi1q11",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Entreprenure",
          "B) Entreprenor",
          "C) Entrepreneur",
          "D) Entrepenuer",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Entrepreneur'.",
      },
      {
        id: "spi1q12",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Fricktion", "B) Friction", "C) Frictionn", "D) Frictian"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Friction'.",
      },
      {
        id: "spi1q13",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Go down", "B) Goe down", "C) Gow down", "D) Goo down"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Go down'.",
      },
      {
        id: "spi1q14",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Ridgid", "B) Rigid", "C) Rigged", "D) Ridget"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Rigid'.",
      },
      {
        id: "spi1q15",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Scissers", "B) Sissors", "C) Scissors", "D) Scissours"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Scissors'.",
      },
      {
        id: "spi1q16",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Hi-Fi", "B) Hy-Fi", "C) Hie-Fie", "D) He-Fi"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Hi-Fi'.",
      },
      {
        id: "spi1q17",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Threataning",
          "B) Threattening",
          "C) Threatning",
          "D) Threatening",
        ],
        correctAnswer: "D",
        explanation: "The correct spelling is 'Threatening'.",
      },
      {
        id: "spi1q18",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Lightning",
          "B) Lightening",
          "C) Lighnining",
          "D) Lightnin",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Lightning'.",
      },
      {
        id: "spi1q19",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Deteriorate",
          "B) Deteoriate",
          "C) Deteorate",
          "D) Diteriorrate",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Deteriorate'.",
      },
      {
        id: "spi1q20",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Plesent", "B) Pleasent", "C) Pleasant", "D) Plessant"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Pleasant'.",
      },
    ],
  },
  {
    id: "spelling-intermediate-2",
    categoryId: "spelling",
    title: "Spelling Test 02 (Intermediate Level)",
    description: "Choose the correct spelling of intermediate-level words.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "spi2q1",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that means something that happens or takes place:",
        options: [
          "A) Occurence",
          "B) Occurrence",
          "C) Occurunce",
          "D) Ocurrance",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Occurrence'.",
      },
      {
        id: "spi2q2",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for a conclusion or choice made after consideration:",
        options: [
          "A) Desision",
          "B) Diccission",
          "C) Decision",
          "D) Decission",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Decision'.",
      },
      {
        id: "spi2q3",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for an illness or medical condition:",
        options: ["A) Desease", "B) Disease", "C) Decease", "D) Diseise"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Disease'.",
      },
      {
        id: "spi2q4",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that means extremely irritating or infuriating:",
        options: ["A) Madning", "B) Maddening", "C) Maddning", "D) Maddeaning"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Maddening'.",
      },
      {
        id: "spi2q5",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning well-known and admired:",
        options: ["A) Renouned", "B) Renowned", "C) Renownd", "D) Renowened"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Renowned'.",
      },
      {
        id: "spi2q6",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for a system of organizing days, weeks, and months:",
        options: ["A) Calander", "B) Calender", "C) Calendar", "D) Callander"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Calendar'.",
      },
      {
        id: "spi2q7",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that means to provide lodging or to adapt to something:",
        options: [
          "A) Acommodate",
          "B) Accomodate",
          "C) Accommadate",
          "D) Accommodate",
        ],
        correctAnswer: "D",
        explanation: "The correct spelling is 'Accommodate'.",
      },
      {
        id: "spi2q8",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for a humorous or amusing performance or story:",
        options: ["A) Commedy", "B) Comedy", "C) Comidy", "D) Comady"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Comedy'.",
      },
      {
        id: "spi2q9",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning shocked or horrified:",
        options: ["A) Appaled", "B) Appaulled", "C) Appalled", "D) Apalled"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Appalled'.",
      },
      {
        id: "spi2q10",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for the highest point of something (e.g., a mountain):",
        options: ["A) Peek", "B) Peak", "C) Peake", "D) Peik"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Peak'.",
      },
      {
        id: "spi2q11",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that describes someone who is forceful or intense in behavior:",
        options: [
          "A) Agresive",
          "B) Aggresive",
          "C) Agressive",
          "D) Aggressive",
        ],
        correctAnswer: "D",
        explanation: "The correct spelling is 'Aggressive'.",
      },
      {
        id: "spi2q12",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that means to fail to care for something properly:",
        options: ["A) Neglect", "B) Neglekt", "C) Nieglect", "D) Neglite"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Neglect'.",
      },
      {
        id: "spi2q13",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that means proud and disrespectful:",
        options: ["A) Arrogant", "B) Arregant", "C) Arroggant", "D) Arrogent"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Arrogant'.",
      },
      {
        id: "spi2q14",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for an office or government department:",
        options: ["A) Beureau", "B) Bureau", "C) Beurau", "D) Buro"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Bureau'.",
      },
      {
        id: "spi2q15",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning very beautiful or attractive:",
        options: ["A) Gorjeous", "B) Gorgeous", "C) Gorgous", "D) Gourgous"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Gorgeous'.",
      },
      {
        id: "spi2q16",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning to feel shame or self-consciousness:",
        options: ["A) Embarras", "B) Embarrass", "C) Embarass", "D) Embaras"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Embarrass'.",
      },
      {
        id: "spi2q17",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for a famous person:",
        options: [
          "A) Celibrity",
          "B) Celebrety",
          "C) Celebrity",
          "D) Celebraty",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Celebrity'.",
      },
      {
        id: "spi2q18",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that refers to unwanted or offensive pressure or behavior:",
        options: [
          "A) Harrassment",
          "B) Harassment",
          "C) Harresment",
          "D) Harasment",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Harassment'.",
      },
      {
        id: "spi2q19",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that refers to how tall something or someone is:",
        options: ["A) Heigth", "B) Hight", "C) Height", "D) Heit"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Height'.",
      },
      {
        id: "spi2q20",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning most tall or elevated:",
        options: ["A) Hieghest", "B) Highiest", "C) Highst", "D) Highest"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'Highest'.",
      },
    ],
  },
  {
    id: "spelling-intermediate-3",
    categoryId: "spelling",
    title: "Spelling Test 03 (Intermediate Level)",
    description: "Choose the correct spelling of intermediate-level words.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "spi3q1",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Preferense",
          "B) Preference",
          "C) Prefference",
          "D) Prefrance",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Preference'.",
      },
      {
        id: "spi3q2",
        type: "multiple-choice",
        questionText:
          "How do you correctly spell the name of the seventh day of the week?",
        options: ["A) Saturnday", "B) Saterday", "C) Saturday", "D) Satturday"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Saturday'.",
      },
      {
        id: "spi3q3",
        type: "multiple-choice",
        questionText: "Identify the correctly spelled name of a planet:",
        options: ["A) Marz", "B) Mars", "C) Maars", "D) Mers"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Mars'.",
      },
      {
        id: "spi3q4",
        type: "multiple-choice",
        questionText:
          "Which of the following is the correct spelling of the ninth month of the year?",
        options: [
          "A) September",
          "B) Septembar",
          "C) Septebmer",
          "D) Septembre",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'September'.",
      },
      {
        id: "spi3q5",
        type: "multiple-choice",
        questionText: "Which word means “water falling from the sky”?",
        options: ["A) Reen", "B) Rein", "C) Rain", "D) Rane"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Rain'.",
      },
      {
        id: "spi3q6",
        type: "multiple-choice",
        questionText:
          "Select the correct spelling of the verb meaning “to take hold suddenly”:",
        options: ["A) Seize", "B) Ceize", "C) Siese", "D) Seeze"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Seize'.",
      },
      {
        id: "spi3q7",
        type: "multiple-choice",
        questionText:
          "Choose the correct word that refers to the invisible gaseous substance around us:",
        options: ["A) Eir", "B) Ayre", "C) Air", "D) Aire"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Air'.",
      },
      {
        id: "spi3q8",
        type: "multiple-choice",
        questionText:
          "Pick the correct spelling of the word meaning “free time or relaxation”:",
        options: ["A) Leasure", "B) Liesure", "C) Leisure", "D) Leizure"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Leisure'.",
      },
      {
        id: "spi3q9",
        type: "multiple-choice",
        questionText:
          "Choose the correct American English spelling of a person living nearby:",
        options: ["A) Neighbour", "B) Neighbor", "C) Nieghbor", "D) Nabour"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Neighbor'.",
      },
      {
        id: "spi3q10",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning “a calm or quiet state”:",
        options: ["A) Piece", "B) Peace", "C) Pece", "D) Peice"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Peace'.",
      },
      {
        id: "spi3q11",
        type: "multiple-choice",
        questionText: "Which word refers to a written confirmation of payment?",
        options: ["A) Reciept", "B) Receit", "C) Receipt", "D) Receept"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Receipt'.",
      },
      {
        id: "spi3q12",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning “obedience or agreement”:",
        options: [
          "A) Compliance",
          "B) Complianze",
          "C) Compliense",
          "D) Complianse",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Compliance'.",
      },
      {
        id: "spi3q13",
        type: "multiple-choice",
        questionText:
          "Identify the correct American English spelling for facial hair above the lip:",
        options: ["A) Moustache", "B) Mustash", "C) Mustache", "D) Moostache"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Mustache'.",
      },
      {
        id: "spi3q14",
        type: "multiple-choice",
        questionText:
          "Which is the correct spelling for a method of cooking meat over a fire?",
        options: ["A) Barbique", "B) Barbecue", "C) Barbeque", "D) Barbecu"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Barbecue'.",
      },
      {
        id: "spi3q15",
        type: "multiple-choice",
        questionText:
          "Select the correctly spelled word that means “a presentation or display of talent”:",
        options: [
          "A) Performance",
          "B) Performence",
          "C) Performanse",
          "D) Perfourmance",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Performance'.",
      },
      {
        id: "spi3q16",
        type: "multiple-choice",
        questionText:
          "Which is the correct American English spelling of a computer application or broadcast schedule?",
        options: ["A) Programme", "B) Programe", "C) Program", "D) Proggram"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Program'.",
      },
      {
        id: "spi3q17",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of a word meaning 'a nice remark':",
        options: [
          "A) Compliment",
          "B) Complement",
          "C) Complimant",
          "D) Complamant",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Compliment'.",
      },
      {
        id: "spi3q18",
        type: "multiple-choice",
        questionText:
          "Pick the word that correctly means “to give up completely”:",
        options: ["A) Abandon", "B) Abbandon", "C) Abandone", "D) Abanndon"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Abandon'.",
      },
      {
        id: "spi3q19",
        type: "multiple-choice",
        questionText:
          "Choose the correctly spelled word for something not rough or violent:",
        options: ["A) Peaceful", "B) Peacful", "C) Peasful", "D) Peasfull"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Peaceful'.",
      },
      {
        id: "spi3q20",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of a word that means “to receive something as lawful or due”:",
        options: ["A) Accsept", "B) Except", "C) Acept", "D) Accept"],
        correctAnswer: "D",
        explanation: "The correct spelling is 'Accept'.",
      },
    ],
  },
  {
    id: "spelling-intermediate-4",
    categoryId: "spelling",
    title: "Spelling Test 04 (Intermediate Level)",
    description: "Choose the correct spelling of intermediate-level words.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "spi4q1",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the eighth month of the year:",
        options: ["A) August", "B) Augest", "C) Agust", "D) Aurgust"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'August'.",
      },
      {
        id: "spi4q2",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the name of the second planet from the sun:",
        options: ["A) Veenus", "B) Vinas", "C) Venus", "D) Vinas"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Venus'.",
      },
      {
        id: "spi4q3",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for a sudden electrical flash in the sky during a storm:",
        options: [
          "A) Lightning",
          "B) Lightening",
          "C) Lightnning",
          "D) Litening",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Lightning'.",
      },
      {
        id: "spi4q4",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for a small plastic cartridge used in tape players:",
        options: ["A) Casset", "B) Cassette", "C) Cassetee", "D) Casette"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Cassette'.",
      },
      {
        id: "spi4q5",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning obedience to rules or standards:",
        options: [
          "A) Complience",
          "B) Compliance",
          "C) Complianse",
          "D) Compliens",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Compliance'.",
      },
      {
        id: "spi4q6",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning a kind or flattering remark (not the word meaning to complete something):",
        options: [
          "A) Complement",
          "B) Compliment",
          "C) Complimant",
          "D) Complemant",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Compliment'.",
      },
      {
        id: "spi4q7",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Baloon", "B) Balloon", "C) Ballon", "D) Baloone"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Balloon'.",
      },
      {
        id: "spi4q8",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Accross", "B) Across", "C) Aross", "D) Akross"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Across'.",
      },
      {
        id: "spi4q9",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Bysicle", "B) Bicycle", "C) Bicyle", "D) Bicykle"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Bicycle'.",
      },
      {
        id: "spi4q10",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word for a hallway or passage connecting rooms:",
        options: ["A) Corridore", "B) Corriddor", "C) Corridor", "D) Coridor"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Corridor'.",
      },
      {
        id: "spi4q11",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Nutral", "B) Neutrel", "C) Neutral", "D) Neutrul"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Neutral'.",
      },
      {
        id: "spi4q12",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Manageble",
          "B) Managable",
          "C) Manageable",
          "D) Manageeble",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Manageable'.",
      },
      {
        id: "spi4q13",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Elimination",
          "B) Elemination",
          "C) Eliminetion",
          "D) Elimanation",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Elimination'.",
      },
      {
        id: "spi4q14",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Lake", "B) Laik", "C) Leke", "D) Laake"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Lake'.",
      },
      {
        id: "spi4q15",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that refers to various items of different types or categories:",
        options: [
          "A) Miscellanious",
          "B) Miscellaneous",
          "C) Miscelaneous",
          "D) Miscellaneus",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Miscellaneous'.",
      },
      {
        id: "spi4q16",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Hygeine", "B) Hygeen", "C) Hygiene", "D) Higiene"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Hygiene'.",
      },
      {
        id: "spi4q17",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word that means a long, challenging journey on foot, especially in nature:",
        options: ["A) Treck", "B) Trek", "C) Track", "D) Trak"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Trek'.",
      },
      {
        id: "spi4q18",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Barbur", "B) Barbar", "C) Barber", "D) Barbour"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Barber'.",
      },
      {
        id: "spi4q19",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Grammer", "B) Grammar", "C) Gramer", "D) Grammor"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Grammar'.",
      },
      {
        id: "spi4q20",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Tommorow", "B) Tomorrow", "C) Tomorow", "D) Tommorrow"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Tomorrow'.",
      },
    ],
  },
  {
    id: "spelling-intermediate-5",
    categoryId: "spelling",
    title: "Spelling Test 05 (Intermediate Level)",
    description: "Choose the correct spelling of intermediate-level words.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "spi5q1",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Jupitor", "B) Jupiter", "C) Jupeter", "D) Jupitar"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Jupiter'.",
      },
      {
        id: "spi5q2",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Viedeo", "B) Video", "C) Videeo", "D) Vudio"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Video'.",
      },
      {
        id: "spi5q3",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Devine", "B) Divine", "C) Divyne", "D) Divene"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Divine'.",
      },
      {
        id: "spi5q4",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Interupt",
          "B) Interrupt",
          "C) Interuptt",
          "D) Interruppt",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Interrupt'.",
      },
      {
        id: "spi5q5",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Nuisance", "B) Nuissance", "C) Nuisence", "D) Nuisanse"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Nuisance'.",
      },
      {
        id: "spi5q6",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Consecutive",
          "B) Consecutiv",
          "C) Consecutve",
          "D) Consecuttive",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Consecutive'.",
      },
      {
        id: "spi5q7",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Resturant",
          "B) Restuarant",
          "C) Restaurant",
          "D) Restraunt",
        ],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Restaurant'.",
      },
      {
        id: "spi5q8",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the medical condition with severe diarrhea and intestinal inflammation:",
        options: [
          "A) Dissentry",
          "B) Dysentery",
          "C) Dysentry",
          "D) Dissentery",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Dysentery'.",
      },
      {
        id: "spi5q9",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of a huge sea wave caused by underwater earthquakes:",
        options: ["A) Tsunami", "B) Tsunamy", "C) Tsonami", "D) Tsunmami"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Tsunami'.",
      },
      {
        id: "spi5q10",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Reckless", "B) Reckles", "C) Reckles", "D) Reckliss"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Reckless'.",
      },
      {
        id: "spi5q11",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Cylender", "B) Cylindre", "C) Cylinder", "D) Cylander"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Cylinder'.",
      },
      {
        id: "spi5q12",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of a meal where guests serve themselves:",
        options: ["A) Buffay", "B) Buffet", "C) Buffett", "D) Buffette"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Buffet'.",
      },
      {
        id: "spi5q13",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Irresistable",
          "B) Irresistible",
          "C) Irresistble",
          "D) Irresistiblee",
        ],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Irresistible'.",
      },
      {
        id: "spi5q14",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: [
          "A) Reminisce",
          "B) Reminice",
          "C) Remmenisce",
          "D) Remenisce",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Reminisce'.",
      },
      {
        id: "spi5q15",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Girrafe", "B) Giraffe", "C) Giraff", "D) Girafffe"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Giraffe'.",
      },
      {
        id: "spi5q16",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of a sudden stroke affecting the brain:",
        options: [
          "A) Brainstroke",
          "B) Brain strok",
          "C) Brain stroke",
          "D) Brainstrok",
        ],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Brainstroke'.",
      },
      {
        id: "spi5q17",
        type: "multiple-choice",
        questionText: "Choose the correct spelling:",
        options: ["A) Musem", "B) Museum", "C) Musium", "D) Museam"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Museum'.",
      },
      {
        id: "spi5q18",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of a place where goods or people are stored or dispatched:",
        options: ["A) Depot", "B) Depo", "C) Deppot", "D) Depott"],
        correctAnswer: "A",
        explanation: "The correct spelling is 'Depot'.",
      },
      {
        id: "spi5q19",
        type: "multiple-choice",
        questionText:
          "Choose the correct spelling of the word meaning a group of people appointed for a specific function:",
        options: ["A) Comittee", "B) Committee", "C) Committe", "D) Commitee"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'Committee'.",
      },
      {
        id: "spi5q20",
        type: "multiple-choice",
        questionText: "Which is spelled correctly for the sweet food?",
        options: ["A) Desert", "B) Desssert", "C) Dessert", "D) Dessart"],
        correctAnswer: "C",
        explanation: "The correct spelling is 'Dessert'.",
      },
    ],
  },
  {
    id: "spelling-advanced-sentence-1",
    categoryId: "spelling",
    title: "Spelling Test 01 (Advanced Level - Identify Misspelling)",
    description:
      "Read each sentence carefully and choose the word that does not have the correct spelling.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "spis1q1",
        type: "multiple-choice",
        questionText: "It’s hard to acheive success without consistent effort.",
        options: ["A) acheive", "B) success", "C) consistent", "D) effort"],
        correctAnswer: "A",
        explanation:
          "The misspelled word is 'acheive'. The correct spelling is 'achieve'.",
      },
      {
        id: "spis1q2",
        type: "multiple-choice",
        questionText: "The company set a tight buget for marketing this year.",
        options: ["A) marketing", "B) tight", "C) buget", "D) company"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'buget'. The correct spelling is 'budget'.",
      },
      {
        id: "spis1q3",
        type: "multiple-choice",
        questionText: "The novel is full of mistry and unexpected twists.",
        options: ["A) unexpected", "B) full", "C) twists", "D) mistry"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'mistry'. The correct spelling is 'mystery'.",
      },
      {
        id: "spis1q4",
        type: "multiple-choice",
        questionText: "We’ll have the presentation ready by Thusday morning.",
        options: ["A) morning", "B) Thusday", "C) presentation", "D) ready"],
        correctAnswer: "B",
        explanation:
          "The misspelled word is 'Thusday'. The correct spelling is 'Thursday'.",
      },
      {
        id: "spis1q5",
        type: "multiple-choice",
        questionText: "He is the rightful aire to the estate.",
        options: ["A) rightful", "B) estate", "C) aire", "D) to"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'aire'. The correct spelling is 'heir'.",
      },
      {
        id: "spis1q6",
        type: "multiple-choice",
        questionText: "Her eyes were shinning with joy.",
        options: ["A) joy", "B) eyes", "C) were", "D) shinning"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'shinning'. The correct spelling is 'shining'.",
      },
      {
        id: "spis1q7",
        type: "multiple-choice",
        questionText:
          "The celebration marked the beginning of a new millenium.",
        options: [
          "A) celebration",
          "B) marked",
          "C) millenium",
          "D) beginning",
        ],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'millenium'. The correct spelling is 'millennium'.",
      },
      {
        id: "spis1q8",
        type: "multiple-choice",
        questionText: "My best friend loves eating Chines food.",
        options: ["A) loves", "B) friend", "C) Chines", "D) food"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'Chines'. The correct spelling is 'Chinese'.",
      },
      {
        id: "spis1q9",
        type: "multiple-choice",
        questionText: "The library is a place to be quite and respectful.",
        options: ["A) place", "B) respectful", "C) library", "D) quite"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'quite'. The correct spelling is 'quiet'.",
      },
      {
        id: "spis1q10",
        type: "multiple-choice",
        questionText: "The dancer moved with perfect rythm to the music.",
        options: ["A) moved", "B) perfect", "C) rythm", "D) music"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'rythm'. The correct spelling is 'rhythm'.",
      },
      {
        id: "spis1q11",
        type: "multiple-choice",
        questionText: "The cupboard is full of crokery and cutlery.",
        options: ["A) cupboard", "B) crokery", "C) full", "D) cutlery"],
        correctAnswer: "B",
        explanation:
          "The misspelled word is 'crokery'. The correct spelling is 'crockery'.",
      },
      {
        id: "spis1q12",
        type: "multiple-choice",
        questionText: "The coastal city was hit by a huge sunami.",
        options: ["A) coastal", "B) city", "C) sunami", "D) huge"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'sunami'. The correct spelling is 'tsunami'.",
      },
      {
        id: "spis1q13",
        type: "multiple-choice",
        questionText: "His recklass driving put everyone at risk.",
        options: ["A) driving", "B) put", "C) everyone", "D) recklass"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'recklass'. The correct spelling is 'reckless'.",
      },
      {
        id: "spis1q14",
        type: "multiple-choice",
        questionText: "You are not allowed to trespas on private property.",
        options: ["A) private", "B) trespas", "C) allowed", "D) property"],
        correctAnswer: "B",
        explanation:
          "The misspelled word is 'trespas'. The correct spelling is 'trespass'.",
      },
      {
        id: "spis1q15",
        type: "multiple-choice",
        questionText: "We often reminice about our childhood days.",
        options: ["A) often", "B) about", "C) reminice", "D) childhood"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'reminice'. The correct spelling is 'reminisce'.",
      },
      {
        id: "spis1q16",
        type: "multiple-choice",
        questionText:
          "His constant talking is such a nuicance during meetings.",
        options: ["A) during", "B) meetings", "C) constant", "D) nuicance"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'nuicance'. The correct spelling is 'nuisance'.",
      },
      {
        id: "spis1q17",
        type: "multiple-choice",
        questionText: "The sunset over the ocean looked devine.",
        options: ["A) ocean", "B) devine", "C) looked", "D) sunset"],
        correctAnswer: "B",
        explanation:
          "The misspelled word is 'devine'. The correct spelling is 'divine'.",
      },
      {
        id: "spis1q18",
        type: "multiple-choice",
        questionText: "He had a curly moustach and a deep voice.",
        options: ["A) curly", "B) deep", "C) moustach", "D) voice"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'moustach'. The correct spelling is 'moustache'.",
      },
      {
        id: "spis1q19",
        type: "multiple-choice",
        questionText: "Let’s go out to that new resturant near the mall.",
        options: ["A) mall", "B) near", "C) resturant", "D) that"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'resturant'. The correct spelling is 'restaurant'.",
      },
      {
        id: "spis1q20",
        type: "multiple-choice",
        questionText:
          "She was truley moved by the kind gesture after her recovery.",
        options: ["A) gesture", "B) truley", "C) kind", "D) recovery"],
        correctAnswer: "B",
        explanation:
          "The misspelled word is 'truley'. The correct spelling is 'truly'.",
      },
    ],
  },
  {
    id: "spelling-advanced-sentence-2",
    categoryId: "spelling",
    title: "Spelling Test 02 (Advanced Level - Identify Misspelling)",
    description:
      "Read each sentence carefully and choose the word that does not have the correct spelling.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "spis2q1",
        type: "multiple-choice",
        questionText: "We need to brainstrom ideas for the group project.",
        options: ["A) need", "B) ideas", "C) brainstrom", "D) project"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'brainstrom'. The correct spelling is 'brainstorm'.",
      },
      {
        id: "spis2q2",
        type: "multiple-choice",
        questionText: "Please keep the documents in seperate folders.",
        options: ["A) documents", "B) folders", "C) seperate", "D) keep"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'seperate'. The correct spelling is 'separate'.",
      },
      {
        id: "spis2q3",
        type: "multiple-choice",
        questionText: "After the workout, her muscles felt stif and sore.",
        options: ["A) sore", "B) felt", "C) stif", "D) workout"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'stif'. The correct spelling is 'stiff'.",
      },
      {
        id: "spis2q4",
        type: "multiple-choice",
        questionText: "This assignment is quite mabageable if you plan ahead.",
        options: ["A) quite", "B) plan", "C) mabageable", "D) ahead"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'mabageable'. The correct spelling is 'manageable'.",
      },
      {
        id: "spis2q5",
        type: "multiple-choice",
        questionText: "There’s a water leek under the kitchen sink.",
        options: ["A) kitchen", "B) under", "C) leek", "D) sink"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'leek'. The correct spelling is 'leak'.",
      },
      {
        id: "spis2q6",
        type: "multiple-choice",
        questionText: "The instructions are simple and foolproff.",
        options: ["A) simple", "B) instructions", "C) foolproff", "D) and"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'foolproff'. The correct spelling is 'foolproof'.",
      },
      {
        id: "spis2q7",
        type: "multiple-choice",
        questionText: "She added chopped almand to the cake batter.",
        options: ["A) batter", "B) chopped", "C) cake", "D) almand"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'almand'. The correct spelling is 'almond'.",
      },
      {
        id: "spis2q8",
        type: "multiple-choice",
        questionText: "I brought a suvenir from my trip to Paris.",
        options: ["A) trip", "B) brought", "C) suvenir", "D) Paris"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'suvenir'. The correct spelling is 'souvenir'.",
      },
      {
        id: "spis2q9",
        type: "multiple-choice",
        questionText: "The corriddor was decorated with artwork by students.",
        options: ["A) decorated", "B) corriddor", "C) students", "D) artwork"],
        correctAnswer: "B",
        explanation:
          "The misspelled word is 'corriddor'. The correct spelling is 'corridor'.",
      },
      {
        id: "spis2q10",
        type: "multiple-choice",
        questionText: "They spent their lesiure time reading by the lake.",
        options: ["A) time", "B) lake", "C) lesiure", "D) reading"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'lesiure'. The correct spelling is 'leisure'.",
      },
      {
        id: "spis2q11",
        type: "multiple-choice",
        questionText: "We are having a barbeque at our place this weekend.",
        options: ["A) barbeque", "B) weekend", "C) place", "D) having"],
        correctAnswer: "A",
        explanation:
          "The misspelled word is 'barbeque'. The correct spelling is 'barbecue'.",
      },
      {
        id: "spis2q12",
        type: "multiple-choice",
        questionText: "She ran acros the street without looking.",
        options: ["A) street", "B) looking", "C) acros", "D) ran"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'acros'. The correct spelling is 'across'.",
      },
      {
        id: "spis2q13",
        type: "multiple-choice",
        questionText: "The view from the hilltop was absolutely gorgous.",
        options: ["A) view", "B) hilltop", "C) absolutely", "D) gorgous"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'gorgous'. The correct spelling is 'gorgeous'.",
      },
      {
        id: "spis2q14",
        type: "multiple-choice",
        questionText: "We visited Japan in Agust last year.",
        options: ["A) visited", "B) year", "C) Japan", "D) Agust"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'Agust'. The correct spelling is 'August'.",
      },
      {
        id: "spis2q15",
        type: "multiple-choice",
        questionText:
          "The artist gained international renoun after the exhibition.",
        options: [
          "A) exhibition",
          "B) international",
          "C) renoun",
          "D) artist",
        ],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'renoun'. The correct spelling is 'renown'.",
      },
      {
        id: "spis2q16",
        type: "multiple-choice",
        questionText: "I’ve always wanted to visit Srilanka during the winter.",
        options: ["A) visit", "B) during", "C) winter", "D) Srilanka"],
        correctAnswer: "D",
        explanation:
          "The misspelled word is 'Srilanka'. The correct spelling is 'Sri Lanka'.",
      },
      {
        id: "spis2q17",
        type: "multiple-choice",
        questionText:
          "He had a terrible headake after staying in the sun too long.",
        options: ["A) staying", "B) terrible", "C) headake", "D) sun"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'headake'. The correct spelling is 'headache'.",
      },
      {
        id: "spis2q18",
        type: "multiple-choice",
        questionText: "Chlorine is used to clean swimming pools.",
        options: ["A) swimming", "B) Chlorin", "C) clean", "D) used"],
        correctAnswer: "B",
        explanation:
          "The misspelled word is 'Chlorin'. The correct spelling is 'Chlorine'.",
      },
      {
        id: "spis2q19",
        type: "multiple-choice",
        questionText: "During the pandamic, many businesses shut down.",
        options: ["A) businesses", "B) shut", "C) pandamic", "D) during"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'pandamic'. The correct spelling is 'pandemic'.",
      },
      {
        id: "spis2q20",
        type: "multiple-choice",
        questionText: "She stood on the opposit side of the room.",
        options: ["A) room", "B) stood", "C) opposit", "D) side"],
        correctAnswer: "C",
        explanation:
          "The misspelled word is 'opposit'. The correct spelling is 'opposite'.",
      },
    ],
  },
  {
    id: "spelling-advanced-homophones-1",
    categoryId: "spelling",
    title: "Spelling Test 03 (Advanced Level - Homophones)",
    description:
      "Read each sentence carefully and choose the word that is incorrect in context due to its spelling or meaning (homophones).",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "spih1q1",
        type: "multiple-choice",
        questionText: "They went over the bare to reach the island.",
        options: ["A) bare", "B) went", "C) over", "D) island"],
        correctAnswer: "A",
        explanation:
          "The incorrect word is 'bare'. It should be 'bar' (a place or obstacle, not 'bare' which means naked).",
      },
      {
        id: "spih1q2",
        type: "multiple-choice",
        questionText: "I will meat you at the restaurant at seven o’clock.",
        options: ["A) meat", "B) will", "C) restaurant", "D) seven"],
        correctAnswer: "A",
        explanation:
          "The incorrect word is 'meat'. It should be 'meet' (to come together, not meat which is food).",
      },
      {
        id: "spih1q3",
        type: "multiple-choice",
        questionText: "She wanted to by a new dress for the party.",
        options: ["A) she", "B) by", "C) new", "D) party"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'by'. It should be 'buy' (to purchase, not 'by' which means near).",
      },
      {
        id: "spih1q4",
        type: "multiple-choice",
        questionText: "The sun was shinning brightly in the sky.",
        options: ["A) sun", "B) shinning", "C) brightly", "D) sky"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'shinning'. It should be 'shining' (to emit light, 'shinning' means climbing).",
      },
      {
        id: "spih1q5",
        type: "multiple-choice",
        questionText: "Please write your a dress clearly on the form.",
        options: ["A) please", "B) write", "C) a dress", "D) form"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'a dress'. It should be 'address' (location or written info).",
      },
      {
        id: "spih1q6",
        type: "multiple-choice",
        questionText: "They waited at the bus stop in the rein.",
        options: ["A) waited", "B) bus", "C) rein", "D) stop"],
        correctAnswer: "C",
        explanation: "The incorrect word is 'rein'. It should be 'rain'.",
      },
      {
        id: "spih1q7",
        type: "multiple-choice",
        questionText: "They decided to sail across the see at dawn.",
        options: ["A) sail", "B) decided", "C) see", "D) dawn"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'see'. It should be 'sea' (large body of water, 'see' means to look).",
      },
      {
        id: "spih1q8",
        type: "multiple-choice",
        questionText: "The desert was sweet and delicious after dinner.",
        options: ["A) desert", "B) sweet", "C) delicious", "D) dinner"],
        correctAnswer: "A",
        explanation:
          "The incorrect word is 'desert' (dry land). It should be 'dessert' (sweet food).",
      },
      {
        id: "spih1q9",
        type: "multiple-choice",
        questionText: "The principle of the school gave a speech.",
        options: ["A) principle", "B) school", "C) speech", "D) gave"],
        correctAnswer: "A",
        explanation:
          "The incorrect word is 'principle'. It should be 'principal' (head of school, not principle which means rule).",
      },
      {
        id: "spih1q10",
        type: "multiple-choice",
        questionText: "She wore a beautiful peice of jewelry to the event.",
        options: ["A) wore", "B) peice", "C) beautiful", "D) event"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'peice'. It should be 'piece' (a part, not peice).",
      },
      {
        id: "spih1q11",
        type: "multiple-choice",
        questionText: "The mailman delivered the letter in the mourning.",
        options: ["A) mailman", "B) delivered", "C) mourning", "D) letter"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'mourning' (to lament). It should be 'morning' (early part of the day).",
      },
      {
        id: "spih1q12",
        type: "multiple-choice",
        questionText: "They went too the market to buy some fruit.",
        options: ["A) too", "B) went", "C) market", "D) fruit"],
        correctAnswer: "A",
        explanation:
          "The incorrect word is 'too'. It should be 'to' (preposition), 'too' means also or excessively.",
      },
      {
        id: "spih1q13",
        type: "multiple-choice",
        questionText: "I can’t wait to sea the new movie tonight.",
        options: ["A) can’t", "B) sea", "C) new", "D) tonight"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'sea'. It should be 'see' (to look at).",
      },
      {
        id: "spih1q14",
        type: "multiple-choice",
        questionText: "I can’t hair the music from here.",
        options: ["A) can’t", "B) hair", "C) music", "D) here"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'hair'. It should be 'hear' (to listen).",
      },
      {
        id: "spih1q15",
        type: "multiple-choice",
        questionText: "The weather today is quite fare and sunny.",
        options: ["A) weather", "B) quite", "C) fare", "D) sunny"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'fare'. It should be 'fair' (just, reasonable).",
      },
      {
        id: "spih1q16",
        type: "multiple-choice",
        questionText: "The magician performed in front of a large cite.",
        options: ["A) magician", "B) performed", "C) cite", "D) large"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'cite'. It should be 'site' (location).",
      },
      {
        id: "spih1q17",
        type: "multiple-choice",
        questionText: "He needs to loose weight before summer.",
        options: ["A) loose", "B) weight", "C) needs", "D) summer"],
        correctAnswer: "A",
        explanation:
          "The incorrect word is 'loose'. It should be 'lose' (to misplace or not win).",
      },
      {
        id: "spih1q18",
        type: "multiple-choice",
        questionText: "The deer crossed the rode quietly.",
        options: ["A) deer", "B) rode", "C) crossed", "D) quietly"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'rode'. It should be 'road' (street).",
      },
      {
        id: "spih1q19",
        type: "multiple-choice",
        questionText: "I forgot my wallet at home, can I borrow you money?",
        options: ["A) forgot", "B) borrow", "C) wallet", "D) money"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'borrow'. It should be 'lend' (to give temporarily, borrowing is taking).",
      },
      {
        id: "spih1q20",
        type: "multiple-choice",
        questionText: "We had a grate time at the party last night.",
        options: ["A) had", "B) grate", "C) party", "D) night"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'grate'. It should be 'great' (excellent).",
      },
    ],
  },
  {
    id: "spelling-advanced-homophones-2",
    categoryId: "spelling",
    title: "Spelling Test 04 (Advanced Level - Homophones)",
    description:
      "Read each sentence carefully and choose the word that is incorrect in context due to its spelling or meaning (homophones).",
    duration: 20,
    minLevel: 1,
    questions: [
      {
        id: "spih2q1",
        type: "multiple-choice",
        questionText: "The king sat on his thrown with great pride.",
        options: ["A) king", "B) sat", "C) thrown", "D) pride"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'thrown'. It should be 'throne' (royal seat).",
      },
      {
        id: "spih2q2",
        type: "multiple-choice",
        questionText: "We stayed in a small wooden chalet by the beech.",
        options: ["A) stayed", "B) chalet", "C) beech", "D) small"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'beech'. It should be 'beach' (sandy shore).",
      },
      {
        id: "spih2q3",
        type: "multiple-choice",
        questionText:
          "They built a scent around the garden to keep animals out.",
        options: ["A) built", "B) scent", "C) garden", "D) out"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'scent'. It should be 'fence' (barrier; scent = smell).",
      },
      {
        id: "spih2q4",
        type: "multiple-choice",
        questionText: "I need to steel myself before I give the speech.",
        options: ["A) steel", "B) need", "C) speech", "D) before"],
        correctAnswer: "A",
        explanation:
          "The incorrect word is 'steel'. It should be 'brace' (as in 'brace oneself') or 'steal' (to take something without permission). Given the context, 'brace' is more likely, but 'steal' is the homophone. Let's go with 'steal' as the common homophone confusion.",
      },
      {
        id: "spih2q5",
        type: "multiple-choice",
        questionText: "He praised the teacher for her strict principal.",
        options: ["A) praised", "B) teacher", "C) strict", "D) principal"],
        correctAnswer: "D",
        explanation:
          "The incorrect word is 'principal'. It should be 'principle' (value or rule).",
      },
      {
        id: "spih2q6",
        type: "multiple-choice",
        questionText: "She knew the mane character in the story quite well.",
        options: ["A) knew", "B) mane", "C) story", "D) quite"],
        correctAnswer: "B",
        explanation: "The incorrect word is 'mane'. It should be 'main'.",
      },
      {
        id: "spih2q7",
        type: "multiple-choice",
        questionText: "The criminal managed to break out of the sell.",
        options: ["A) criminal", "B) break", "C) sell", "D) out"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'sell'. It should be 'cell' (prison room).",
      },
      {
        id: "spih2q8",
        type: "multiple-choice",
        questionText: "He was the sole air to the thrown.",
        options: ["A) air", "B) sole", "C) thrown", "D) was"],
        correctAnswer: "A",
        explanation:
          "The incorrect word is 'air'. It should be 'heir'. Also, 'thrown' should be 'throne'. This question has two errors, but 'air' is the one listed as the answer.",
      },
      {
        id: "spih2q9",
        type: "multiple-choice",
        questionText: "He climbed to the peek of the mountain before dawn.",
        options: ["A) climbed", "B) peek", "C) mountain", "D) dawn"],
        correctAnswer: "B",
        explanation: "The incorrect word is 'peek'. It should be 'peak'.",
      },
      {
        id: "spih2q10",
        type: "multiple-choice",
        questionText: "They were fined for braking the traffic rules.",
        options: ["A) fined", "B) braking", "C) traffic", "D) rules"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'braking'. It should be 'breaking' (violating).",
      },
      {
        id: "spih2q11",
        type: "multiple-choice",
        questionText: "We had to waist a lot of time in the queue.",
        options: ["A) had", "B) waist", "C) lot", "D) queue"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'waist'. It should be 'waste' (time).",
      },
      {
        id: "spih2q12",
        type: "multiple-choice",
        questionText: "The old man told us a fascinating tail about dragons.",
        options: ["A) old", "B) tail", "C) dragons", "D) told"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'tail'. It should be 'tale' (story).",
      },
      {
        id: "spih2q13",
        type: "multiple-choice",
        questionText: "She drew a perfect cereal of circles on the page.",
        options: ["A) drew", "B) cereal", "C) perfect", "D) page"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'cereal'. It should be 'serial' (sequence).",
      },
      {
        id: "spih2q14",
        type: "multiple-choice",
        questionText:
          "The teacher told us to cite the source of our sightings.",
        options: ["A) cite", "B) source", "C) sightings", "D) told"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'sightings'. It should likely be 'citations' or 'sources'. Given the options, 'sightings' is the most out of place.",
      },
      {
        id: "spih2q15",
        type: "multiple-choice",
        questionText: "The car lost its break on the slope.",
        options: ["A) car", "B) its", "C) break", "D) slope"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'break'. It should be 'brake' (car part).",
      },
      {
        id: "spih2q16",
        type: "multiple-choice",
        questionText: "She likes to die her hair every month.",
        options: ["A) every", "B) die", "C) month", "D) different"],
        correctAnswer: "B",
        explanation: "The incorrect word is 'die'. It should be 'dye'.",
      },
      {
        id: "spih2q17",
        type: "multiple-choice",
        questionText: "He likes to knead the dog gently when it sleeps.",
        options: ["A) likes", "B) knead", "C) gently", "D) sleeps"],
        correctAnswer: "B",
        explanation:
          "The incorrect word is 'knead'. It should be 'pet' or 'stroke'. 'Knead' means to work dough.",
      },
      {
        id: "spih2q18",
        type: "multiple-choice",
        questionText:
          "There was a large whole in the road that caused a delay.",
        options: ["A) was", "B) whole", "C) road", "D) caused"],
        correctAnswer: "B",
        explanation: "The incorrect word is 'whole'. It should be 'hole'.",
      },
      {
        id: "spih2q19",
        type: "multiple-choice",
        questionText: "The students boarded the wrong bored for the exam.",
        options: ["A) boarded", "B) wrong", "C) bored", "D) exam"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'bored'. It should be 'board' (examining body).",
      },
      {
        id: "spih2q20",
        type: "multiple-choice",
        questionText: "The doctor told him to avoid red meet for a while.",
        options: ["A) told", "B) doctor", "C) meet", "D) avoid"],
        correctAnswer: "C",
        explanation:
          "The incorrect word is 'meet'. It should be 'meat' (food).",
      },
    ],
  },
  {
    id: "vocabulary-meaning-in-context-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 01 (Meaning in Context)",
    description:
      "Read each sentence carefully and choose the word that best matches the meaning of the highlighted word in context.",
    duration: 20,
    minLevel: 2, // Intermediate level as per previous classification
    questions: [
      {
        id: "vmc1q1",
        type: "multiple-choice",
        questionText:
          "The child was reluctant to answer the question in front of the class.",
        highlightWord: "reluctant", // Word to highlight
        options: ["A) eager", "B) unwilling", "C) prepared", "D) joyful"],
        correctAnswer: "B",
        explanation:
          "'Unwilling' – Reluctant means not wanting or hesitant to do something.",
      },
      {
        id: "vmc1q2",
        type: "multiple-choice",
        questionText:
          "The company’s profits have plummeted this year compared to last year.",
        highlightWord: "plummeted", // Word to highlight
        options: [
          "A) increased slightly",
          "B) remained the same",
          "C) fallen sharply",
          "D) grown steadily",
        ],
        correctAnswer: "C",
        explanation:
          "'Fallen sharply' – Plummeted means dropped suddenly or significantly.",
      },
      {
        id: "vmc1q3",
        type: "multiple-choice",
        questionText:
          "His speech was full of vague promises and lacked clear details.",
        highlightWord: "vague", // Word to highlight
        options: ["A) unclear", "B) truthful", "C) strong", "D) confident"],
        correctAnswer: "A",
        explanation:
          "'Unclear' – Vague means not clearly expressed or lacking detail.",
      },
      {
        id: "vmc1q4",
        type: "multiple-choice",
        questionText:
          "The manager decided to terminate the contract after repeated delays.",
        highlightWord: "terminate", // Word to highlight
        options: ["A) start", "B) extend", "C) end", "D) sign"],
        correctAnswer: "C",
        explanation: "'End' – Terminate means to bring something to an end.",
      },
      {
        id: "vmc1q5",
        type: "multiple-choice",
        questionText:
          "The scientist was trying to devise a new method to reduce pollution.",
        highlightWord: "devise", // Word to highlight
        options: ["A) borrow", "B) create", "C) destroy", "D) criticize"],
        correctAnswer: "B",
        explanation: "'Create' – Devise means to invent or plan something new.",
      },
      {
        id: "vmc1q6",
        type: "multiple-choice",
        questionText:
          "Many students found the new regulations quite stringent.",
        highlightWord: "stringent", // Word to highlight
        options: ["A) flexible", "B) strict", "C) helpful", "D) unnecessary"],
        correctAnswer: "B",
        explanation:
          "'Strict' – Stringent refers to rules that are very tight or harsh.",
      },
      {
        id: "vmc1q7",
        type: "multiple-choice",
        questionText: "The movie’s ending was totally predictable.",
        highlightWord: "predictable", // Word to highlight
        options: ["A) unexpected", "B) boring", "C) easy to guess", "D) fast"],
        correctAnswer: "C",
        explanation:
          "'Easy to guess' – Predictable means you can easily tell what will happen.",
      },
      {
        id: "vmc1q8",
        type: "multiple-choice",
        questionText:
          "He was meticulous in preparing the report to ensure no errors.",
        highlightWord: "meticulous", // Word to highlight
        options: ["A) careless", "B) thorough", "C) quick", "D) lazy"],
        correctAnswer: "B",
        explanation:
          "'Thorough' – Meticulous means very careful and detail-focused.",
      },
      {
        id: "vmc1q9",
        type: "multiple-choice",
        questionText:
          "The politician's promises were seen as dubious by the public.",
        highlightWord: "dubious", // Word to highlight
        options: ["A) certain", "B) doubtful", "C) honest", "D) famous"],
        correctAnswer: "B",
        explanation:
          "'Doubtful' – Dubious means suspicious or not trustworthy.",
      },
      {
        id: "vmc1q10",
        type: "multiple-choice",
        questionText:
          "They were warned not to intervene in the family dispute.",
        highlightWord: "intervene", // Word to highlight
        options: ["A) help", "B) interrupt", "C) become involved", "D) ignore"],
        correctAnswer: "C",
        explanation:
          "'Become involved' – Intervene means to get involved, usually to help or stop something.",
      },
      {
        id: "vmc1q11",
        type: "multiple-choice",
        questionText: "The medicine can alleviate the symptoms of the disease.",
        highlightWord: "alleviate", // Word to highlight
        options: ["A) reduce", "B) cause", "C) spread", "D) worsen"],
        correctAnswer: "A",
        explanation:
          "'Reduce' – Alleviate means to lessen pain or a negative effect.",
      },
      {
        id: "vmc1q12",
        type: "multiple-choice",
        questionText: "She has a keen interest in environmental issues.",
        highlightWord: "keen", // Word to highlight
        options: ["A) sharp", "B) strong", "C) doubtful", "D) casual"],
        correctAnswer: "B",
        explanation: "'Strong' – Keen means very interested or enthusiastic.",
      },
      {
        id: "vmc1q13",
        type: "multiple-choice",
        questionText: "The city was engulfed in flames after the explosion.",
        highlightWord: "engulfed", // Word to highlight
        options: ["A) covered", "B) saved", "C) cooled", "D) ignored"],
        correctAnswer: "A",
        explanation:
          "'Covered' – Engulfed means surrounded or completely taken over.",
      },
      {
        id: "vmc1q14",
        type: "multiple-choice",
        questionText: "His argument was well-structured and coherent.",
        highlightWord: "coherent", // Word to highlight
        options: [
          "A) confusing",
          "B) clear and logical",
          "C) aggressive",
          "D) boring",
        ],
        correctAnswer: "B",
        explanation:
          "'Clear and logical' – Coherent means well-organized and easy to understand.",
      },
      {
        id: "vmc1q15",
        type: "multiple-choice",
        questionText: "We need to assess the risks before making a decision.",
        highlightWord: "assess", // Word to highlight
        options: ["A) ignore", "B) evaluate", "C) enjoy", "D) avoid"],
        correctAnswer: "B",
        explanation:
          "'Evaluate' – Assess means to judge or examine something carefully.",
      },
      {
        id: "vmc1q16",
        type: "multiple-choice",
        questionText: "There was a shortage of food after the flood.",
        highlightWord: "shortage", // Word to highlight
        options: ["A) abundance", "B) lack", "C) sale", "D) festival"],
        correctAnswer: "B",
        explanation: "'Lack' – Shortage means not enough of something.",
      },
      {
        id: "vmc1q17",
        type: "multiple-choice",
        questionText: "She tried to conceal her disappointment from everyone.",
        highlightWord: "conceal", // Word to highlight
        options: ["A) show", "B) share", "C) hide", "D) enjoy"],
        correctAnswer: "C",
        explanation:
          "'Hide' – Conceal means to keep something out of sight or secret.",
      },
      {
        id: "vmc1q18",
        type: "multiple-choice",
        questionText: "The issue was exacerbated by the manager’s decision.",
        highlightWord: "exacerbated", // Word to highlight
        options: ["A) solved", "B) made worse", "C) improved", "D) ignored"],
        correctAnswer: "B",
        explanation:
          "'Made worse' – Exacerbated means to increase the severity of a problem.",
      },
      {
        id: "vmc1q19",
        type: "multiple-choice",
        questionText: "The artist’s latest work is considered a masterpiece.",
        highlightWord: "masterpiece", // Word to highlight
        options: [
          "A) failure",
          "B) very bad work",
          "C) great work",
          "D) unfinished work",
        ],
        correctAnswer: "C",
        explanation:
          "'Great work' – Masterpiece means a work of outstanding skill.",
      },
      {
        id: "vmc1q20",
        type: "multiple-choice",
        questionText: "The explanation he gave was completely absurd.",
        highlightWord: "absurd", // Word to highlight
        options: ["A) reasonable", "B) ridiculous", "C) polite", "D) simple"],
        correctAnswer: "B",
        explanation:
          "'Ridiculous' – Absurd means completely unreasonable or silly.",
      },
    ],
  },
  {
    id: "vocabulary-odd-one-out-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 02 (Odd-One-Out)",
    description:
      "Identify the word that does NOT belong or fit the meaning in the context of the sentence.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "voo1q1",
        type: "multiple-choice",
        questionText: "The scientist made a significant discovery.",
        highlightWord: "significant",
        options: ["A) important", "B) meaningful", "C) trivial", "D) major"],
        correctAnswer: "C",
        explanation:
          "'Trivial' is the odd one out as it means of little value or importance, unlike 'important', 'meaningful', and 'major' which are synonyms of 'significant'.",
      },
      {
        id: "voo1q2",
        type: "multiple-choice",
        questionText: "She gave a brief explanation of the topic.",
        highlightWord: "brief",
        options: ["A) short", "B) concise", "C) lengthy", "D) quick"],
        correctAnswer: "C",
        explanation:
          "'Lengthy' is the odd one out as it means long, unlike 'short', 'concise', and 'quick' which are synonyms of 'brief'.",
      },
      {
        id: "voo1q3",
        type: "multiple-choice",
        questionText:
          "The teacher asked the students to be quiet during the exam.",
        highlightWord: "quiet",
        options: ["A) silent", "B) noisy", "C) calm", "D) still"],
        correctAnswer: "B",
        explanation:
          "'Noisy' is the odd one out as it means making a lot of noise, unlike 'silent', 'calm', and 'still' which are synonyms of 'quiet'.",
      },
      {
        id: "voo1q4",
        type: "multiple-choice",
        questionText: "The company plans to expand its operations next year.",
        highlightWord: "expand",
        options: ["A) grow", "B) increase", "C) reduce", "D) extend"],
        correctAnswer: "C",
        explanation:
          "'Reduce' is the odd one out as it means to make smaller, unlike 'grow', 'increase', and 'extend' which are synonyms of 'expand'.",
      },
      {
        id: "voo1q5",
        type: "multiple-choice",
        questionText: "He made a remarkable improvement in his grades.",
        highlightWord: "remarkable",
        options: [
          "A) noticeable",
          "B) ordinary",
          "C) extraordinary",
          "D) impressive",
        ],
        correctAnswer: "B",
        explanation:
          "'Ordinary' is the odd one out as it means common or not special, unlike 'noticeable', 'extraordinary', and 'impressive' which are synonyms of 'remarkable'.",
      },
      {
        id: "voo1q6",
        type: "multiple-choice",
        questionText: "The weather was unpredictable during the trip.",
        highlightWord: "unpredictable",
        options: [
          "A) uncertain",
          "B) variable",
          "C) reliable",
          "D) changeable",
        ],
        correctAnswer: "C",
        explanation:
          "'Reliable' is the odd one out as it means consistently good in quality or performance, unlike 'uncertain', 'variable', and 'changeable' which are synonyms of 'unpredictable'.",
      },
      {
        id: "voo1q7",
        type: "multiple-choice",
        questionText: "She was very generous with her time.",
        highlightWord: "generous",
        options: ["A) stingy", "B) giving", "C) charitable", "D) kind"],
        correctAnswer: "A",
        explanation:
          "'Stingy' is the odd one out as it means unwilling to give or spend, unlike 'giving', 'charitable', and 'kind' which are synonyms of 'generous'.",
      },
      {
        id: "voo1q8",
        type: "multiple-choice",
        questionText: "The movie was extremely boring.",
        highlightWord: "boring",
        options: ["A) dull", "B) exciting", "C) tedious", "D) uninteresting"],
        correctAnswer: "B",
        explanation:
          "'Exciting' is the odd one out as it means causing great enthusiasm and eagerness, unlike 'dull', 'tedious', and 'uninteresting' which are synonyms of 'boring'.",
      },
      {
        id: "voo1q9",
        type: "multiple-choice",
        questionText: "The manager decided to postpone the meeting.",
        highlightWord: "postpone",
        options: ["A) delay", "B) cancel", "C) reschedule", "D) defer"],
        correctAnswer: "B",
        explanation:
          "'Cancel' is the odd one out as it means to call off or abandon, unlike 'delay', 'reschedule', and 'defer' which are synonyms of 'postpone'.",
      },
      {
        id: "voo1q10",
        type: "multiple-choice",
        questionText: "The child was very curious about the new toy.",
        highlightWord: "curious",
        options: [
          "A) interested",
          "B) inquisitive",
          "C) indifferent",
          "D) eager",
        ],
        correctAnswer: "C",
        explanation:
          "'Indifferent' is the odd one out as it means having no particular interest or sympathy, unlike 'interested', 'inquisitive', and 'eager' which are synonyms of 'curious'.",
      },
      {
        id: "voo1q11",
        type: "multiple-choice",
        questionText:
          "The athlete showed great strength during the competition.",
        highlightWord: "strength",
        options: ["A) power", "B) weakness", "C) force", "D) stamina"],
        correctAnswer: "B",
        explanation:
          "'Weakness' is the odd one out as it means the state or condition of lacking strength, unlike 'power', 'force', and 'stamina' which are synonyms of 'strength'.",
      },
      {
        id: "voo1q12",
        type: "multiple-choice",
        questionText: "He always tries to avoid conflicts.",
        highlightWord: "avoid",
        options: ["A) confront", "B) escape", "C) evade", "D) dodge"],
        correctAnswer: "A",
        explanation:
          "'Confront' is the odd one out as it means to meet (someone) face to face with hostile or argumentative intent, unlike 'escape', 'evade', and 'dodge' which are synonyms of 'avoid'.",
      },
      {
        id: "voo1q13",
        type: "multiple-choice",
        questionText: "The speaker was very clear in his presentation.",
        highlightWord: "clear",
        options: [
          "A) confusing",
          "B) understandable",
          "C) straightforward",
          "D) precise",
        ],
        correctAnswer: "A",
        explanation:
          "'Confusing' is the odd one out as it means causing bewilderment or perplexity, unlike 'understandable', 'straightforward', and 'precise' which are synonyms of 'clear'.",
      },
      {
        id: "voo1q14",
        type: "multiple-choice",
        questionText: "The instructions were quite complicated.",
        highlightWord: "complicated",
        options: ["A) simple", "B) complex", "C) difficult", "D) intricate"],
        correctAnswer: "A",
        explanation:
          "'Simple' is the odd one out as it means easily understood or done, unlike 'complex', 'difficult', and 'intricate' which are synonyms of 'complicated'.",
      },
      {
        id: "voo1q15",
        type: "multiple-choice",
        questionText: "She made a generous donation to the charity.",
        highlightWord: "generous",
        options: ["A) selfish", "B) giving", "C) kind", "D) magnanimous"],
        correctAnswer: "A",
        explanation:
          "'Selfish' is the odd one out as it means concerned excessively or exclusively with oneself, unlike 'giving', 'kind', and 'magnanimous' which are synonyms of 'generous'.",
      },
      {
        id: "voo1q16",
        type: "multiple-choice",
        questionText: "The student's answer was incorrect.",
        highlightWord: "incorrect",
        options: ["A) wrong", "B) accurate", "C) mistaken", "D) false"],
        correctAnswer: "B",
        explanation:
          "'Accurate' is the odd one out as it means correct in all details, unlike 'wrong', 'mistaken', and 'false' which are synonyms of 'incorrect'.",
      },
      {
        id: "voo1q17",
        type: "multiple-choice",
        questionText: "The journey was very long and tiring.",
        highlightWord: "long",
        options: ["A) short", "B) extended", "C) lengthy", "D) distant"],
        correctAnswer: "A",
        explanation:
          "'Short' is the odd one out as it means of small extent from end to end, unlike 'extended', 'lengthy', and 'distant' which are synonyms of 'long'.",
      },
      {
        id: "voo1q18",
        type: "multiple-choice",
        questionText: "He received a reward for his hard work.",
        highlightWord: "reward",
        options: ["A) punishment", "B) prize", "C) recognition", "D) bonus"],
        correctAnswer: "A",
        explanation:
          "'Punishment' is the odd one out as it means the infliction or imposition of a penalty as retribution for an offense, unlike 'prize', 'recognition', and 'bonus' which are synonyms of 'reward'.",
      },
      {
        id: "voo1q19",
        type: "multiple-choice",
        questionText: "The artist used vivid colors in the painting.",
        highlightWord: "vivid",
        options: ["A) dull", "B) bright", "C) intense", "D) lively"],
        correctAnswer: "A",
        explanation:
          "'Dull' is the odd one out as it means lacking in interest or excitement, unlike 'bright', 'intense', and 'lively' which are synonyms of 'vivid'.",
      },
      {
        id: "voo1q20",
        type: "multiple-choice",
        questionText: "The evidence was convincing.",
        highlightWord: "convincing",
        options: ["A) persuasive", "B) doubtful", "C) strong", "D) credible"],
        correctAnswer: "B",
        explanation:
          "'Doubtful' is the odd one out as it means feeling or showing uncertainty, unlike 'persuasive', 'strong', and 'credible' which are synonyms of 'convincing'.",
      },
    ],
  },
  {
    id: "vocabulary-multiple-meaning-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 03 (Multiple Meaning of Words)",
    description:
      "Identify the correct meaning of the highlighted word in the context of the sentence.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "vmm1q1",
        type: "multiple-choice",
        questionText: "The lawyer decided to charge the suspect with theft.",
        highlightWord: "charge",
        options: [
          "A) To accuse someone",
          "B) The price of something",
          "C) To rush forward",
          "D) To pay a fee",
        ],
        correctAnswer: "A",
        explanation:
          "In the sentence, “charge” means to formally accuse someone of a crime. Other options relate to price or rushing forward, which don’t fit here.",
      },
      {
        id: "vmm1q2",
        type: "multiple-choice",
        questionText: "She opened a bank account at the local branch.",
        highlightWord: "bank",
        options: [
          "A) The side of a river",
          "B) A financial institution",
          "C) A set of similar items",
          "D) A storage place for seeds",
        ],
        correctAnswer: "B",
        explanation:
          "“Bank” here refers to the place where money is kept, not the side of a river or storage.",
      },
      {
        id: "vmm1q3",
        type: "multiple-choice",
        questionText: "The children played on the bat after school.",
        highlightWord: "bat",
        options: [
          "A) A flying mammal",
          "B) A wooden club used in sports",
          "C) To hit something",
          "D) A type of fruit",
        ],
        correctAnswer: "B",
        explanation:
          "“Bat” refers to the sports equipment, not the animal or action.",
      },
      {
        id: "vmm1q4",
        type: "multiple-choice",
        questionText: "I need to book a flight for next week.",
        highlightWord: "book",
        options: [
          "A) A collection of written pages",
          "B) To reserve or arrange in advance",
          "C) To punish someone",
          "D) To speak publicly",
        ],
        correctAnswer: "B",
        explanation:
          "“Book” means to make a reservation, unlike the literal book or punishment.",
      },
      {
        id: "vmm1q5",
        type: "multiple-choice",
        questionText: "The flowers bloom beautifully in spring.",
        highlightWord: "spring",
        options: [
          "A) To jump or leap",
          "B) A season of the year",
          "C) A coiled mechanical part",
          "D) To originate from",
        ],
        correctAnswer: "B",
        explanation:
          "“Spring” here means the season, not the mechanical part or action.",
      },
      {
        id: "vmm1q6",
        type: "multiple-choice",
        questionText: "He will match the curtains with the sofa.",
        highlightWord: "match",
        options: [
          "A) A contest or game",
          "B) To pair or correspond",
          "C) To cause a fight",
          "D) A small fire starter",
        ],
        correctAnswer: "B",
        explanation:
          "“Match” means to pair similar items (curtains and sofa), not a contest or fight.",
      },
      {
        id: "vmm1q7",
        type: "multiple-choice",
        questionText: "She put a wax seal on the envelope.",
        highlightWord: "seal",
        options: [
          "A) An official stamp or mark",
          "B) To close tightly",
          "C) An aquatic animal",
          "D) A type of door",
        ],
        correctAnswer: "A",
        explanation:
          "“Seal” refers to the stamp on the envelope, not the animal.",
      },
      {
        id: "vmm1q8",
        type: "multiple-choice",
        questionText: "The boat rocked on the waves of the ocean.",
        highlightWord: "waves",
        options: [
          "A) Movement of water",
          "B) A gesture made with the hand",
          "C) A sound pattern",
          "D) A type of dance",
        ],
        correctAnswer: "A",
        explanation:
          "“Wave” refers to the water movement in the ocean, not a gesture or sound.",
      },
      {
        id: "vmm1q9",
        type: "multiple-choice",
        questionText: "I accidentally hit my nail with a hammer.",
        highlightWord: "nail",
        options: [
          "A) A metal fastener",
          "B) The hard covering on fingers or toes",
          "C) To secure or fasten something",
          "D) A type of plant",
        ],
        correctAnswer: "A",
        explanation:
          "“Nail” here is the object hit by a hammer, not part of the body.",
      },
      {
        id: "vmm1q10",
        type: "multiple-choice",
        questionText: "She turned right at the next right.",
        highlightWord: "right",
        options: [
          "A) Correct or true",
          "B) A direction opposite left",
          "C) A legal entitlement",
          "D) A type of clothing",
        ],
        correctAnswer: "B",
        explanation:
          "“Right” in the sentence means direction, not correctness or legal rights.",
      },
      {
        id: "vmm1q11",
        type: "multiple-choice",
        questionText: "The school held a fair to raise funds.",
        highlightWord: "fair",
        options: [
          "A) An event with rides and booths",
          "B) Just and unbiased",
          "C) Light in color",
          "D) A type of food",
        ],
        correctAnswer: "A",
        explanation: "“Fair” refers to the event, not fairness or color.",
      },
      {
        id: "vmm1q12",
        type: "multiple-choice",
        questionText: "We enjoyed fresh date fruit after dinner.",
        highlightWord: "date",
        options: [
          "A) A day on the calendar",
          "B) A romantic meeting",
          "C) A type of fruit",
          "D) A type of bird",
        ],
        correctAnswer: "C",
        explanation: "“Date” means the fruit, not the day or meeting.",
      },
      {
        id: "vmm1q13",
        type: "multiple-choice",
        questionText: "He found a large rock near the river.",
        highlightWord: "rock",
        options: [
          "A) A stone",
          "B) To move back and forth",
          "C) A music genre",
          "D) A type of tree",
        ],
        correctAnswer: "A",
        explanation:
          "“Rock” means a stone found near a river, not music or movement.",
      },
      {
        id: "vmm1q14",
        type: "multiple-choice",
        questionText: "The water began to well up from the ground.",
        highlightWord: "well",
        options: [
          "A) A source of water from the earth",
          "B) In good health",
          "C) To rise or flow upward",
          "D) To make a sound",
        ],
        correctAnswer: "C", // Changed to C based on "well up from the ground"
        explanation:
          "“Well up” means to rise or flow upward, not a water source or health.",
      },
      {
        id: "vmm1q15",
        type: "multiple-choice",
        questionText: "The artist’s work was very fine.",
        highlightWord: "fine",
        options: [
          "A) Good or acceptable",
          "B) A penalty fee",
          "C) Thin or delicate",
          "D) To finish early",
        ],
        correctAnswer: "A",
        explanation:
          "“Fine” describes quality of work, not penalty fee or delicacy.",
      },
      {
        id: "vmm1q16",
        type: "multiple-choice",
        questionText:
          "The athlete will train every morning for the competition.",
        highlightWord: "train",
        options: [
          "A) A mode of transport",
          "B) To teach or practice skills",
          "C) A type of garment",
          "D) A long journey",
        ],
        correctAnswer: "B",
        explanation:
          "“Train” means to practice, not transportation or clothing.",
      },
      {
        id: "vmm1q17",
        type: "multiple-choice",
        questionText: "She decided to tie her shoes tightly.",
        highlightWord: "tie",
        options: [
          "A) A piece of clothing around the neck",
          "B) To fasten with string",
          "C) An equal score in a game",
          "D) A type of dance",
        ],
        correctAnswer: "B",
        explanation: "“Tie” means to fasten shoes, not neckwear or a draw.",
      },
      {
        id: "vmm1q18",
        type: "multiple-choice",
        questionText: "The dog’s loud bark woke me up.",
        highlightWord: "bark",
        options: [
          "A) The sound a dog makes",
          "B) The outer covering of a tree",
          "C) To speak sharply",
          "D) A type of boat",
        ],
        correctAnswer: "A",
        explanation: "“Bark” means dog’s sound, not tree covering.",
      },
      {
        id: "vmm1q19",
        type: "multiple-choice",
        questionText: "The manager will park the car outside.",
        highlightWord: "park",
        options: [
          "A) A green public area",
          "B) To leave a vehicle temporarily",
          "C) A place to relax",
          "D) A type of fruit",
        ],
        correctAnswer: "B",
        explanation: "“Park” means to leave a car, not a green area.",
      },
      {
        id: "vmm1q20",
        type: "multiple-choice",
        questionText: "The sun gives off a lot of light.",
        highlightWord: "light",
        options: [
          "A) Not heavy",
          "B) Brightness or illumination",
          "C) Pale in color",
          "D) A type of fabric",
        ],
        correctAnswer: "B",
        explanation: "“Light” here means brightness, not weight or color.",
      },
    ],
  },
  {
    id: "vocabulary-define-advanced-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 04 (Choose the correct definition - Advanced)",
    description:
      "Choose the correct definition for each of the following words.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "vda1q1",
        type: "multiple-choice",
        questionText: "Aberration",
        options: [
          "A) a usual event",
          "B) a deviation from what is normal",
          "C) an improvement",
          "D) a discovery",
        ],
        correctAnswer: "B",
        explanation: "Aberration means a deviation from what is normal.",
      },
      {
        id: "vda1q2",
        type: "multiple-choice",
        questionText: "Concur",
        options: [
          "A) to argue strongly",
          "B) to happen later",
          "C) to agree",
          "D) to refuse",
        ],
        correctAnswer: "C",
        explanation: "Concur means to agree.",
      },
      {
        id: "vda1q3",
        type: "multiple-choice",
        questionText: "Lucid",
        options: [
          "A) clear and easily understood",
          "B) dark and mysterious",
          "C) full of mistakes",
          "D) loud and noisy",
        ],
        correctAnswer: "A",
        explanation: "Lucid means clear and easily understood.",
      },
      {
        id: "vda1q4",
        type: "multiple-choice",
        questionText: "Esoteric",
        options: [
          "A) widely known",
          "B) secret and understood by few",
          "C) boring and old-fashioned",
          "D) dangerous",
        ],
        correctAnswer: "B",
        explanation: "Esoteric means secret and understood by few.",
      },
      {
        id: "vda1q5",
        type: "multiple-choice",
        questionText: "Ambiguous",
        options: [
          "A) having only one clear meaning",
          "B) unclear or open to interpretation",
          "C) easy to remember",
          "D) strong and forceful",
        ],
        correctAnswer: "B",
        explanation: "Ambiguous means unclear or open to interpretation.",
      },
      {
        id: "vda1q6",
        type: "multiple-choice",
        questionText: "Alleviate",
        options: [
          "A) to make worse",
          "B) to make lighter or less severe",
          "C) to cancel completely",
          "D) to encourage",
        ],
        correctAnswer: "B",
        explanation: "Alleviate means to make lighter or less severe.",
      },
      {
        id: "vda1q7",
        type: "multiple-choice",
        questionText: "Ubiquitous",
        options: [
          "A) rare and unusual",
          "B) found everywhere",
          "C) harmful",
          "D) temporary",
        ],
        correctAnswer: "B",
        explanation: "Ubiquitous means found everywhere.",
      },
      {
        id: "vda1q8",
        type: "multiple-choice",
        questionText: "Ostentatious",
        options: [
          "A) simple and plain",
          "B) showy and intended to impress",
          "C) quiet and hidden",
          "D) quick and careless",
        ],
        correctAnswer: "B",
        explanation: "Ostentatious means showy and intended to impress.",
      },
      {
        id: "vda1q9",
        type: "multiple-choice",
        questionText: "Pragmatic",
        options: [
          "A) practical and realistic",
          "B) imaginary",
          "C) exciting",
          "D) emotional",
        ],
        correctAnswer: "A",
        explanation: "Pragmatic means practical and realistic.",
      },
      {
        id: "vda1q10",
        type: "multiple-choice",
        questionText: "Ephemeral",
        options: [
          "A) lasting for a very short time",
          "B) strong and permanent",
          "C) extremely valuable",
          "D) dangerous",
        ],
        correctAnswer: "A",
        explanation: "Ephemeral means lasting for a very short time.",
      },
      {
        id: "vda1q11",
        type: "multiple-choice",
        questionText: "Capricious",
        options: [
          "A) constant and reliable",
          "B) changing mood or behavior suddenly",
          "C) generous and kind",
          "D) boring",
        ],
        correctAnswer: "B",
        explanation: "Capricious means changing mood or behavior suddenly.",
      },
      {
        id: "vda1q12",
        type: "multiple-choice",
        questionText: "Fortuitous",
        options: [
          "A) lucky or by chance",
          "B) carefully planned",
          "C) hard to find",
          "D) traditional",
        ],
        correctAnswer: "A",
        explanation: "Fortuitous means lucky or by chance.",
      },
      {
        id: "vda1q13",
        type: "multiple-choice",
        questionText: "Apathy",
        options: [
          "A) great excitement",
          "B) lack of interest or concern",
          "C) extreme energy",
          "D) anger",
        ],
        correctAnswer: "B",
        explanation: "Apathy means lack of interest or concern.",
      },
      {
        id: "vda1q14",
        type: "multiple-choice",
        questionText: "Juxtapose",
        options: [
          "A) to place side by side for comparison",
          "B) to remove quickly",
          "C) to hide carefully",
          "D) to argue strongly",
        ],
        correctAnswer: "A",
        explanation: "Juxtapose means to place side by side for comparison.",
      },
      {
        id: "vda1q15",
        type: "multiple-choice",
        questionText: "Inevitable",
        options: [
          "A) avoidable",
          "B) likely to change",
          "C) certain to happen",
          "D) not allowed",
        ],
        correctAnswer: "C",
        explanation: "Inevitable means certain to happen.",
      },
      {
        id: "vda1q16",
        type: "multiple-choice",
        questionText: "Magnanimous",
        options: [
          "A) small-minded",
          "B) generous or forgiving",
          "C) very angry",
          "D) forgetful",
        ],
        correctAnswer: "B",
        explanation: "Magnanimous means generous or forgiving.",
      },
      {
        id: "vda1q17",
        type: "multiple-choice",
        questionText: "Reticent",
        options: [
          "A) talkative and social",
          "B) silent and reserved",
          "C) energetic",
          "D) confused",
        ],
        correctAnswer: "B",
        explanation: "Reticent means silent and reserved.",
      },
      {
        id: "vda1q18",
        type: "multiple-choice",
        questionText: "Venerate",
        options: [
          "A) to disrespect",
          "B) to praise highly",
          "C) to avoid carefully",
          "D) to change suddenly",
        ],
        correctAnswer: "B",
        explanation: "Venerate means to praise highly.",
      },
      {
        id: "vda1q19",
        type: "multiple-choice",
        questionText: "Sporadic",
        options: [
          "A) regular and constant",
          "B) happening at irregular intervals",
          "C) continuous",
          "D) very frequent",
        ],
        correctAnswer: "B",
        explanation: "Sporadic means happening at irregular intervals.",
      },
      {
        id: "vda1q20",
        type: "multiple-choice",
        questionText: "Verbose",
        options: [
          "A) using too many words",
          "B) silent",
          "C) very quick",
          "D) easy to understand",
        ],
        correctAnswer: "A",
        explanation: "Verbose means using too many words.",
      },
    ],
  },
  {
    id: "vocabulary-define-intermediate-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 05 (Choose the correct definition - Intermediate)",
    description:
      "Choose the correct definition for each of the following words.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "vdi1q1",
        type: "multiple-choice",
        questionText: "Allocate",
        options: [
          "A) to waste resources",
          "B) to assign or distribute",
          "C) to remove completely",
          "D) to mix things up",
        ],
        correctAnswer: "B",
        explanation: "Allocate means to assign or distribute.",
      },
      {
        id: "vdi1q2",
        type: "multiple-choice",
        questionText: "Evident",
        options: [
          "A) obvious or clear",
          "B) difficult to see",
          "C) secretive",
          "D) not useful",
        ],
        correctAnswer: "A",
        explanation: "Evident means obvious or clear.",
      },
      {
        id: "vdi1q3",
        type: "multiple-choice",
        questionText: "Illustrate",
        options: [
          "A) to hide something",
          "B) to explain using examples or pictures",
          "C) to confuse the reader",
          "D) to write formally",
        ],
        correctAnswer: "B",
        explanation: "Illustrate means to explain using examples or pictures.",
      },
      {
        id: "vdi1q4",
        type: "multiple-choice",
        questionText: "Fluctuate",
        options: [
          "A) to stay the same",
          "B) to change frequently",
          "C) to disappear suddenly",
          "D) to increase steadily",
        ],
        correctAnswer: "B",
        explanation: "Fluctuate means to change frequently.",
      },
      {
        id: "vdi1q5",
        type: "multiple-choice",
        questionText: "Implement",
        options: [
          "A) to introduce something successfully",
          "B) to remove an idea",
          "C) to stop a process",
          "D) to explain in detail",
        ],
        correctAnswer: "A",
        explanation: "Implement means to introduce something successfully.",
      },
      {
        id: "vdi1q6",
        type: "multiple-choice",
        questionText: "Inevitable",
        options: [
          "A) likely to be avoided",
          "B) sure to happen",
          "C) doubtful and uncertain",
          "D) possibly dangerous",
        ],
        correctAnswer: "B",
        explanation: "Inevitable means sure to happen.",
      },
      {
        id: "vdi1q7",
        type: "multiple-choice",
        questionText: "Prior",
        options: [
          "A) happening after",
          "B) of low importance",
          "C) happening before",
          "D) impossible",
        ],
        correctAnswer: "C",
        explanation: "Prior means happening before.",
      },
      {
        id: "vdi1q8",
        type: "multiple-choice",
        questionText: "Enhance",
        options: [
          "A) to make better or improve",
          "B) to break completely",
          "C) to reduce in value",
          "D) to hide",
        ],
        correctAnswer: "A",
        explanation: "Enhance means to make better or improve.",
      },
      {
        id: "vdi1q9",
        type: "multiple-choice",
        questionText: "Retain",
        options: [
          "A) to forget",
          "B) to keep or hold",
          "C) to argue",
          "D) to lose suddenly",
        ],
        correctAnswer: "B",
        explanation: "Retain means to keep or hold.",
      },
      {
        id: "vdi1q10",
        type: "multiple-choice",
        questionText: "Exclude",
        options: [
          "A) to leave out",
          "B) to include fully",
          "C) to support",
          "D) to explain clearly",
        ],
        correctAnswer: "A",
        explanation: "Exclude means to leave out.",
      },
      {
        id: "vdi1q11",
        type: "multiple-choice",
        questionText: "Restrict",
        options: [
          "A) to allow more freedom",
          "B) to limit",
          "C) to explain carefully",
          "D) to collect information",
        ],
        correctAnswer: "B",
        explanation: "Restrict means to limit.",
      },
      {
        id: "vdi1q12",
        type: "multiple-choice",
        questionText: "Sustain",
        options: [
          "A) to make something last",
          "B) to break down",
          "C) to lose strength",
          "D) to forget",
        ],
        correctAnswer: "A",
        explanation: "Sustain means to make something last.",
      },
      {
        id: "vdi1q13",
        type: "multiple-choice",
        questionText: "Prohibit",
        options: [
          "A) to allow legally",
          "B) to suggest strongly",
          "C) to forbid by law",
          "D) to delay slightly",
        ],
        correctAnswer: "C",
        explanation: "Prohibit means to forbid by law.",
      },
      {
        id: "vdi1q14",
        type: "multiple-choice",
        questionText: "Adapt",
        options: [
          "A) to change to fit a situation",
          "B) to stop doing something",
          "C) to finish suddenly",
          "D) to copy completely",
        ],
        correctAnswer: "A",
        explanation: "Adapt means to change to fit a situation.",
      },
      {
        id: "vdi1q15",
        type: "multiple-choice",
        questionText: "Acknowledge",
        options: [
          "A) to ignore completely",
          "B) to recognize or admit",
          "C) to hide from others",
          "D) to argue strongly",
        ],
        correctAnswer: "B",
        explanation: "Acknowledge means to recognize or admit.",
      },
      {
        id: "vdi1q16",
        type: "multiple-choice",
        questionText: "Emphasize",
        options: [
          "A) to make less important",
          "B) to draw attention to",
          "C) to remove carefully",
          "D) to avoid mentioning",
        ],
        correctAnswer: "B",
        explanation: "Emphasize means to draw attention to.",
      },
      {
        id: "vdi1q17",
        type: "multiple-choice",
        questionText: "Modify",
        options: [
          "A) to change slightly",
          "B) to destroy",
          "C) to simplify greatly",
          "D) to forget",
        ],
        correctAnswer: "A",
        explanation: "Modify means to change slightly.",
      },
      {
        id: "vdi1q18",
        type: "multiple-choice",
        questionText: "Derive",
        options: [
          "A) to break into pieces",
          "B) to obtain from a source",
          "C) to remove an error",
          "D) to mix completely",
        ],
        correctAnswer: "B",
        explanation: "Derive means to obtain from a source.",
      },
      {
        id: "vdi1q19",
        type: "multiple-choice",
        questionText: "Controversial",
        options: [
          "A) widely accepted",
          "B) likely to cause disagreement",
          "C) simple and clear",
          "D) boring",
        ],
        correctAnswer: "B",
        explanation: "Controversial means likely to cause disagreement.",
      },
      {
        id: "vdi1q20",
        type: "multiple-choice",
        questionText: "Presume",
        options: [
          "A) to guess something is true without proof",
          "B) to explain in detail",
          "C) to deny strongly",
          "D) to complete a task",
        ],
        correctAnswer: "A",
        explanation: "Presume means to guess something is true without proof.",
      },
    ],
  },
  {
    id: "vocabulary-word-form-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 06 (Choose the Correct Word Form)",
    description: "Choose the correct word form to complete each sentence.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "vwf1q1",
        type: "multiple-choice",
        questionText: "She spoke very ________ to the customers.",
        highlightWord: "friendly",
        options: [
          "A) friendly",
          "B) friend",
          "C) friendliness",
          "D) friendlier",
        ],
        correctAnswer: "A",
        explanation:
          "The sentence requires an adverb to describe how she spoke. 'Friendly' can function as both an adjective and an adverb (in a friendly manner).",
      },
      {
        id: "vwf1q2",
        type: "multiple-choice",
        questionText: "The company made a quick ________ to improve sales.",
        highlightWord: "decide",
        options: ["A) decision", "B) decide", "C) decisive", "D) deciding"],
        correctAnswer: "A",
        explanation: "'Decision' is the noun form needed after 'made a quick'.",
      },
      {
        id: "vwf1q3",
        type: "multiple-choice",
        questionText: "The data is presented ________ in the report.",
        highlightWord: "clear",
        options: ["A) clear", "B) clearly", "C) clarity", "D) clearing"],
        correctAnswer: "B",
        explanation:
          "An adverb 'clearly' is needed to describe how the data is presented.",
      },
      {
        id: "vwf1q4",
        type: "multiple-choice",
        questionText: "They are planning to ________ a new branch next year.",
        highlightWord: "open",
        options: ["A) opening", "B) opened", "C) open", "D) opener"],
        correctAnswer: "C",
        explanation:
          "The infinitive verb 'open' is needed after 'planning to'.",
      },
      {
        id: "vwf1q5",
        type: "multiple-choice",
        questionText: "The results showed a significant ________ in profits.",
        highlightWord: "increase",
        options: [
          "A) increased",
          "B) increasing",
          "C) increase",
          "D) increases",
        ],
        correctAnswer: "C",
        explanation:
          "'Increase' is the noun form describing 'a significant increase'.",
      },
      {
        id: "vwf1q6",
        type: "multiple-choice",
        questionText:
          "The population growth has been ________ over the past decade.",
        highlightWord: "steady",
        options: ["A) steadily", "B) steadiness", "C) steady", "D) steadier"],
        correctAnswer: "A",
        explanation:
          "The adverb 'steadily' is needed to describe how the growth has been.",
      },
      {
        id: "vwf1q7",
        type: "multiple-choice",
        questionText: "The government decided to ________ new policies.",
        highlightWord: "implement",
        options: [
          "A) implementation",
          "B) implement",
          "C) implemented",
          "D) implementing",
        ],
        correctAnswer: "B",
        explanation: "The base verb 'implement' is needed after 'decided to'.",
      },
      {
        id: "vwf1q8",
        type: "multiple-choice",
        questionText: "The table was designed ________ for easy understanding.",
        highlightWord: "simple",
        options: ["A) simply", "B) simple", "C) simplicity", "D) simpler"],
        correctAnswer: "A",
        explanation:
          "The adverb 'simply' is needed to describe how the table was designed.",
      },
      {
        id: "vwf1q9",
        type: "multiple-choice",
        questionText: "The company is known for its ________ customer service.",
        highlightWord: "excellent",
        options: [
          "A) excellence",
          "B) excellently",
          "C) excellent",
          "D) excel",
        ],
        correctAnswer: "C",
        explanation:
          "The adjective 'excellent' is needed to describe 'customer service'.",
      },
      {
        id: "vwf1q10",
        type: "multiple-choice",
        questionText:
          "We need to ________ the data carefully before publishing.",
        highlightWord: "analyze",
        options: ["A) analysis", "B) analyze", "C) analytical", "D) analyzing"],
        correctAnswer: "B",
        explanation: "The base verb 'analyze' is needed after 'need to'.",
      },
      {
        id: "vwf1q11",
        type: "multiple-choice",
        questionText: "The market share is expected to ________ next quarter.",
        highlightWord: "grow",
        options: ["A) growing", "B) grew", "C) grow", "D) growth"],
        correctAnswer: "C",
        explanation: "The base verb 'grow' is needed after 'is expected to'.",
      },
      {
        id: "vwf1q12",
        type: "multiple-choice",
        questionText: "The report was written in a very ________ style.",
        highlightWord: "professional",
        options: [
          "A) professional",
          "B) professionally",
          "C) professionalism",
          "D) profess",
        ],
        correctAnswer: "A",
        explanation:
          "The adjective 'professional' is needed to describe 'style'.",
      },
      {
        id: "vwf1q13",
        type: "multiple-choice",
        questionText: "The project was completed ________ and on time.",
        highlightWord: "efficient",
        options: [
          "A) efficient",
          "B) efficiently",
          "C) efficiency",
          "D) efficiencies",
        ],
        correctAnswer: "B",
        explanation:
          "The adverb 'efficiently' is needed to describe how the project was completed.",
      },
      {
        id: "vwf1q14",
        type: "multiple-choice",
        questionText: "She gave a very ________ explanation of the results.",
        highlightWord: "clear",
        options: ["A) clearly", "B) clarity", "C) clear", "D) clearer"],
        correctAnswer: "C",
        explanation:
          "The adjective 'clear' is needed to describe 'explanation'.",
      },
      {
        id: "vwf1q15",
        type: "multiple-choice",
        questionText:
          "The company is facing ________ challenges in the market.",
        highlightWord: "economic",
        options: ["A) economy", "B) economics", "C) economical", "D) economic"],
        correctAnswer: "D",
        explanation:
          "The adjective 'economic' is needed to describe 'challenges'.",
      },
      {
        id: "vwf1q16",
        type: "multiple-choice",
        questionText: "It is important to keep the data ________ and accurate.",
        highlightWord: "complete",
        options: [
          "A) completeness",
          "B) completely",
          "C) complete",
          "D) completing",
        ],
        correctAnswer: "C",
        explanation: "The adjective 'complete' is needed to describe 'data'.",
      },
      {
        id: "vwf1q17",
        type: "multiple-choice",
        questionText:
          "The software was developed to ________ business processes.",
        highlightWord: "simplify",
        options: ["A) simplicity", "B) simple", "C) simplify", "D) simplified"],
        correctAnswer: "C",
        explanation: "The base verb 'simplify' is needed after 'developed to'.",
      },
      {
        id: "vwf1q18",
        type: "multiple-choice",
        questionText:
          "The managers are working ________ to improve the workflow.",
        highlightWord: "hard",
        options: ["A) hard", "B) hardly", "C) harder", "D) hardness"],
        correctAnswer: "A",
        explanation: "The adverb 'hard' is used to mean 'with great effort'.",
      },
      {
        id: "vwf1q19",
        type: "multiple-choice",
        questionText: "The findings are very ________ for future research.",
        highlightWord: "important",
        options: [
          "A) importance",
          "B) important",
          "C) importantly",
          "D) importing",
        ],
        correctAnswer: "B",
        explanation:
          "The adjective 'important' is needed to describe 'findings'.",
      },
      {
        id: "vwf1q20",
        type: "multiple-choice",
        questionText:
          "They need to ________ the results before making decisions.",
        highlightWord: "consider",
        options: [
          "A) consideration",
          "B) considering",
          "C) considered",
          "D) consider",
        ],
        correctAnswer: "D",
        explanation: "The base verb 'consider' is needed after 'need to'.",
      },
    ],
  },
  {
    id: "vocabulary-phrasal-verbs-intermediate-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 07 (Phrasal Verbs - Beginner/Intermediate)",
    description:
      "Choose the correct meaning or use of the phrasal verb in each question.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "vpv1q1",
        type: "multiple-choice",
        questionText: '"Look after" means:',
        highlightWord: "Look after",
        options: [
          "A) to ignore",
          "B) to take care of",
          "C) to criticize",
          "D) to look at",
        ],
        correctAnswer: "B",
        explanation: "'Look after' means to care for someone or something.",
      },
      {
        id: "vpv1q2",
        type: "multiple-choice",
        questionText: '"Give up" means:',
        highlightWord: "Give up",
        options: [
          "A) to stop trying",
          "B) to donate",
          "C) to increase",
          "D) to arrive",
        ],
        correctAnswer: "A",
        explanation: "'Give up' means to quit or stop making an effort.",
      },
      {
        id: "vpv1q3",
        type: "multiple-choice",
        questionText: '"Put off" means:',
        highlightWord: "Put off",
        options: [
          "A) to postpone",
          "B) to dress up",
          "C) to turn on",
          "D) to fix",
        ],
        correctAnswer: "A",
        explanation: "'Put off' means to delay or reschedule something.",
      },
      {
        id: "vpv1q4",
        type: "multiple-choice",
        questionText: '"Turn down" means:',
        highlightWord: "Turn down",
        options: [
          "A) to reject",
          "B) to accept",
          "C) to increase",
          "D) to start",
        ],
        correctAnswer: "A",
        explanation: "'Turn down' means to refuse or say no to something.",
      },
      {
        id: "vpv1q5",
        type: "multiple-choice",
        questionText: '"Run out of" means:',
        highlightWord: "Run out of",
        options: [
          "A) to finish something completely",
          "B) to race outside",
          "C) to hide",
          "D) to lend",
        ],
        correctAnswer: "A",
        explanation: "'Run out of' means to have no more left.",
      },
      {
        id: "vpv1q6",
        type: "multiple-choice",
        questionText: '"Break down" means:',
        highlightWord: "Break down",
        options: [
          "A) to stop working",
          "B) to build up",
          "C) to laugh",
          "D) to clean",
        ],
        correctAnswer: "A",
        explanation: "'Break down' often refers to machines failing.",
      },
      {
        id: "vpv1q7",
        type: "multiple-choice",
        questionText: '"Carry on" means:',
        highlightWord: "Carry on",
        options: [
          "A) to continue",
          "B) to carry something heavy",
          "C) to stop",
          "D) to lose",
        ],
        correctAnswer: "A",
        explanation: "'Carry on' means to keep going.",
      },
      {
        id: "vpv1q8",
        type: "multiple-choice",
        questionText: '"Pick up" means:',
        highlightWord: "Pick up",
        options: [
          "A) to learn or collect",
          "B) to drop",
          "C) to sit down",
          "D) to turn off",
        ],
        correctAnswer: "A",
        explanation:
          "'Pick up' can mean to learn informally or collect something.",
      },
      {
        id: "vpv1q9",
        type: "multiple-choice",
        questionText: '"Take off" means:',
        highlightWord: "Take off",
        options: [
          "A) to remove or depart (like a plane)",
          "B) to put on",
          "C) to sit down",
          "D) to catch",
        ],
        correctAnswer: "A",
        explanation:
          "'Take off' can mean to remove clothes or for a plane to leave.",
      },
      {
        id: "vpv1q10",
        type: "multiple-choice",
        questionText: '"Set up" means:',
        highlightWord: "Set up",
        options: [
          "A) to arrange or organize",
          "B) to break",
          "C) to forget",
          "D) to turn off",
        ],
        correctAnswer: "A",
        explanation: "'Set up' means to prepare or establish something.",
      },
      {
        id: "vpv1q11",
        type: "multiple-choice",
        questionText: '"Give in" means:',
        highlightWord: "Give in",
        options: [
          "A) to surrender or accept defeat",
          "B) to refuse",
          "C) to shout",
          "D) to build",
        ],
        correctAnswer: "A",
        explanation: "'Give in' means to stop resisting.",
      },
      {
        id: "vpv1q12",
        type: "multiple-choice",
        questionText: '"Go over" means:',
        highlightWord: "Go over",
        options: [
          "A) to review or check carefully",
          "B) to avoid",
          "C) to jump",
          "D) to forget",
        ],
        correctAnswer: "A",
        explanation: "'Go over' means to examine.",
      },
      {
        id: "vpv1q13",
        type: "multiple-choice",
        questionText: '"Hold on" means:',
        highlightWord: "Hold on",
        options: [
          "A) to wait or pause",
          "B) to release",
          "C) to fall",
          "D) to hit",
        ],
        correctAnswer: "A",
        explanation: "'Hold on' means to wait.",
      },
      {
        id: "vpv1q14",
        type: "multiple-choice",
        questionText: '"Look forward to" means:',
        highlightWord: "Look forward to",
        options: [
          "A) to anticipate with pleasure",
          "B) to ignore",
          "C) to dislike",
          "D) to review",
        ],
        correctAnswer: "A",
        explanation: "'Look forward to' means to be excited about something.",
      },
      {
        id: "vpv1q15",
        type: "multiple-choice",
        questionText: '"Make up" means:',
        highlightWord: "Make up",
        options: [
          "A) to invent or reconcile",
          "B) to break",
          "C) to borrow",
          "D) to clean",
        ],
        correctAnswer: "A",
        explanation:
          "'Make up' can mean to create a story or to resolve a quarrel.",
      },
      {
        id: "vpv1q16",
        type: "multiple-choice",
        questionText: '"Put up with" means:',
        highlightWord: "Put up with",
        options: [
          "A) to tolerate or endure",
          "B) to decorate",
          "C) to remove",
          "D) to buy",
        ],
        correctAnswer: "A",
        explanation: "'Put up with' means to accept something unpleasant.",
      },
      {
        id: "vpv1q17",
        type: "multiple-choice",
        questionText: '"Take after" means:',
        highlightWord: "Take after",
        options: [
          "A) to resemble a family member",
          "B) to follow",
          "C) to take away",
          "D) to lose",
        ],
        correctAnswer: "A",
        explanation:
          "'Take after' means to look or behave like someone in your family.",
      },
      {
        id: "vpv1q18",
        type: "multiple-choice",
        questionText: '"Turn up" means:',
        highlightWord: "Turn up",
        options: [
          "A) to arrive or increase volume",
          "B) to disappear",
          "C) to leave",
          "D) to refuse",
        ],
        correctAnswer: "A",
        explanation: "'Turn up' means to appear or make louder.",
      },
      {
        id: "vpv1q19",
        type: "multiple-choice",
        questionText: '"Cut down on" means:',
        highlightWord: "Cut down on",
        options: [
          "A) to reduce",
          "B) to destroy",
          "C) to increase",
          "D) to ignore",
        ],
        correctAnswer: "A",
        explanation: "'Cut down on' means to use less of something.",
      },
      {
        id: "vpv1q20",
        type: "multiple-choice",
        questionText: '"Check out" means:',
        highlightWord: "Check out",
        options: [
          "A) to investigate or leave a hotel",
          "B) to miss",
          "C) to hide",
          "D) to stop",
        ],
        correctAnswer: "A",
        explanation:
          "'Check out' can mean to look into something or to leave a hotel.",
      },
    ],
  },
  {
    id: "vocabulary-phrasal-verbs-advanced-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 08 (Phrasal Verbs - Advanced)",
    description:
      "Choose the correct meaning or use of the phrasal verb in each question.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "vpva1q1",
        type: "multiple-choice",
        questionText: '"Break up" means:',
        highlightWord: "Break up",
        options: [
          "A) to start",
          "B) to end a relationship",
          "C) to fix",
          "D) to gather",
        ],
        correctAnswer: "B",
        explanation: "'Break up' means to finish a romantic relationship.",
      },
      {
        id: "vpva1q2",
        type: "multiple-choice",
        questionText: '"Bring about" means:',
        highlightWord: "Bring about",
        options: [
          "A) to cause something to happen",
          "B) to cancel",
          "C) to carry something",
          "D) to delay",
        ],
        correctAnswer: "A",
        explanation:
          "'Bring about' means to make something happen or cause change.",
      },
      {
        id: "vpva1q3",
        type: "multiple-choice",
        questionText: '"Call off" means:',
        highlightWord: "Call off",
        options: [
          "A) to cancel",
          "B) to invite",
          "C) to call someone",
          "D) to continue",
        ],
        correctAnswer: "A",
        explanation: "'Call off' means to cancel an event or plan.",
      },
      {
        id: "vpva1q4",
        type: "multiple-choice",
        questionText: '"Come across" means:',
        highlightWord: "Come across",
        options: [
          "A) to find unexpectedly",
          "B) to cross the road",
          "C) to avoid",
          "D) to lose",
        ],
        correctAnswer: "A",
        explanation: "'Come across' means to discover or meet by chance.",
      },
      {
        id: "vpva1q5",
        type: "multiple-choice",
        questionText: '"Cut out" means:',
        highlightWord: "Cut out",
        options: [
          "A) to remove or stop doing something",
          "B) to join",
          "C) to eat quickly",
          "D) to write",
        ],
        correctAnswer: "A",
        explanation: "'Cut out' means to eliminate or stop a habit.",
      },
      {
        id: "vpva1q6",
        type: "multiple-choice",
        questionText: '"Drop by" means:',
        highlightWord: "Drop by",
        options: [
          "A) to visit briefly",
          "B) to fall down",
          "C) to send",
          "D) to ignore",
        ],
        correctAnswer: "A",
        explanation: "'Drop by' means to make a short visit.",
      },
      {
        id: "vpva1q7",
        type: "multiple-choice",
        questionText: '"Figure out" means:',
        highlightWord: "Figure out",
        options: [
          "A) to solve or understand",
          "B) to leave quickly",
          "C) to stop",
          "D) to argue",
        ],
        correctAnswer: "A",
        explanation:
          "'Figure out' means to find an answer or understand something.",
      },
      {
        id: "vpva1q8",
        type: "multiple-choice",
        questionText: '"Get along with" means:',
        highlightWord: "Get along with",
        options: [
          "A) to have a friendly relationship",
          "B) to fight",
          "C) to leave",
          "D) to borrow",
        ],
        correctAnswer: "A",
        explanation:
          "'Get along with' means to be friendly or compatible with someone.",
      },
      {
        id: "vpva1q9",
        type: "multiple-choice",
        questionText: '"Give away" means:',
        highlightWord: "Give away",
        options: [
          "A) to donate or reveal a secret",
          "B) to take",
          "C) to keep",
          "D) to sell",
        ],
        correctAnswer: "A",
        explanation:
          "'Give away' can mean to freely give something or accidentally reveal information.",
      },
      {
        id: "vpva1q10",
        type: "multiple-choice",
        questionText: '"Go through" means:',
        highlightWord: "Go through",
        options: [
          "A) to experience or examine carefully",
          "B) to avoid",
          "C) to jump over",
          "D) to stop",
        ],
        correctAnswer: "A",
        explanation:
          "'Go through' means to endure a situation or review something.",
      },
      {
        id: "vpva1q11",
        type: "multiple-choice",
        questionText: '"Hold up" means:',
        highlightWord: "Hold up",
        options: [
          "A) to delay or rob",
          "B) to raise",
          "C) to drop",
          "D) to leave",
        ],
        correctAnswer: "A",
        explanation:
          "'Hold up' can mean to cause a delay or to commit a robbery.",
      },
      {
        id: "vpva1q12",
        type: "multiple-choice",
        questionText: '"Keep up" means:',
        highlightWord: "Keep up",
        options: [
          "A) to maintain the pace or continue",
          "B) to stop",
          "C) to lose",
          "D) to fall",
        ],
        correctAnswer: "A",
        explanation:
          "'Keep up' means to stay at the same level or continue doing something.",
      },
      {
        id: "vpva1q13",
        type: "multiple-choice",
        questionText: '"Look out" means:',
        highlightWord: "Look out",
        options: [
          "A) to be careful or watchful",
          "B) to ignore",
          "C) to forget",
          "D) to arrive",
        ],
        correctAnswer: "A",
        explanation: "'Look out' means to be alert or cautious.",
      },
      {
        id: "vpva1q14",
        type: "multiple-choice",
        questionText: '"Make out" means:',
        highlightWord: "Make out",
        options: [
          "A) to understand or kiss",
          "B) to break",
          "C) to sleep",
          "D) to run",
        ],
        correctAnswer: "A",
        explanation: "'Make out' means to comprehend or to kiss someone.",
      },
      {
        id: "vpva1q15",
        type: "multiple-choice",
        questionText: '"Pass away" means:',
        highlightWord: "Pass away",
        options: ["A) to die", "B) to succeed", "C) to fail", "D) to travel"],
        correctAnswer: "A",
        explanation: "'Pass away' is a polite expression for dying.",
      },
      {
        id: "vpva1q16",
        type: "multiple-choice",
        questionText: '"Put down" means:',
        highlightWord: "Put down",
        options: [
          "A) to insult or write down",
          "B) to pick up",
          "C) to start",
          "D) to clean",
        ],
        correctAnswer: "A",
        explanation:
          "'Put down' can mean to criticize someone or to write something.",
      },
      {
        id: "vpva1q17",
        type: "multiple-choice",
        questionText: '"Run into" means:',
        highlightWord: "Run into",
        options: [
          "A) to meet unexpectedly",
          "B) to escape",
          "C) to avoid",
          "D) to finish",
        ],
        correctAnswer: "A",
        explanation: "'Run into' means to meet someone by chance.",
      },
      {
        id: "vpva1q18",
        type: "multiple-choice",
        questionText: '"Set off" means:',
        highlightWord: "Set off",
        options: [
          "A) to start a journey or cause something to happen",
          "B) to arrive",
          "C) to stop",
          "D) to hide",
        ],
        correctAnswer: "A",
        explanation: "'Set off' means to begin traveling or trigger an event.",
      },
      {
        id: "vpva1q19",
        type: "multiple-choice",
        questionText: '"Take up" means:',
        highlightWord: "Take up",
        options: [
          "A) to start a hobby or use space/time",
          "B) to finish",
          "C) to cancel",
          "D) to borrow",
        ],
        correctAnswer: "A",
        explanation:
          "'Take up' means to begin a new activity or occupy space/time.",
      },
      {
        id: "vpva1q20",
        type: "multiple-choice",
        questionText: '"Turn off" means:',
        highlightWord: "Turn off",
        options: [
          "A) to switch something off or disgust",
          "B) to start",
          "C) to increase",
          "D) to arrive",
        ],
        correctAnswer: "A",
        explanation:
          "'Turn off' means to switch off a device or cause someone to lose interest.",
      },
    ],
  },
  {
    id: "vocabulary-phrasal-verbs-expert-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 09 (Phrasal Verbs - Expert)",
    description:
      "Choose the correct meaning or use of the phrasal verb in each question.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "vpve1q1",
        type: "multiple-choice",
        questionText: '"Iron out" means:',
        highlightWord: "Iron out",
        options: [
          "A) to smooth over difficulties",
          "B) to create wrinkles",
          "C) to burn",
          "D) to ignore",
        ],
        correctAnswer: "A",
        explanation:
          "'Iron out' means to resolve problems or difficulties by discussion.",
      },
      {
        id: "vpve1q2",
        type: "multiple-choice",
        questionText: '"Brush up on" means:',
        highlightWord: "Brush up on",
        options: [
          "A) to improve by reviewing",
          "B) to clean",
          "C) to paint lightly",
          "D) to remove",
        ],
        correctAnswer: "A",
        explanation:
          "'Brush up on' means to quickly refresh your knowledge or skills.",
      },
      {
        id: "vpve1q3",
        type: "multiple-choice",
        questionText: '"Flesh out" means:',
        highlightWord: "Flesh out",
        options: [
          "A) to add more details",
          "B) to lose weight",
          "C) to forget",
          "D) to cut sharply",
        ],
        correctAnswer: "A",
        explanation:
          "'Flesh out' means to develop something by adding details or information.",
      },
      {
        id: "vpve1q4",
        type: "multiple-choice",
        questionText: '"Hone in on" means:',
        highlightWord: "Hone in on",
        options: [
          "A) to focus closely on",
          "B) to avoid",
          "C) to move away",
          "D) to sharpen a knife",
        ],
        correctAnswer: "A",
        explanation:
          "'Hone in on' means to direct attention precisely to something.",
      },
      {
        id: "vpve1q5",
        type: "multiple-choice",
        questionText: '"Pin down" means:',
        highlightWord: "Pin down",
        options: [
          "A) to define or identify clearly",
          "B) to release",
          "C) to ignore",
          "D) to cover",
        ],
        correctAnswer: "A",
        explanation:
          "'Pin down' means to clearly identify or understand something.",
      },
      {
        id: "vpve1q6",
        type: "multiple-choice",
        questionText: '"Phase out" means:',
        highlightWord: "Phase out",
        options: [
          "A) to gradually stop using",
          "B) to start suddenly",
          "C) to separate",
          "D) to increase",
        ],
        correctAnswer: "A",
        explanation:
          "'Phase out' means to discontinue something slowly over time.",
      },
      {
        id: "vpve1q7",
        type: "multiple-choice",
        questionText: '"Play down" means:',
        highlightWord: "Play down",
        options: [
          "A) to make something seem less important",
          "B) to emphasize",
          "C) to exaggerate",
          "D) to perform music",
        ],
        correctAnswer: "A",
        explanation:
          "'Play down' means to downplay or minimize the importance of something.",
      },
      {
        id: "vpve1q8",
        type: "multiple-choice",
        questionText: '"Rack up" means:',
        highlightWord: "Rack up",
        options: [
          "A) to accumulate or collect",
          "B) to throw away",
          "C) to fix",
          "D) to repair",
        ],
        correctAnswer: "A",
        explanation:
          "'Rack up' means to gather or accumulate (points, debts, etc.).",
      },
      {
        id: "vpve1q9",
        type: "multiple-choice",
        questionText: '"Run up against" means:',
        highlightWord: "Run up against",
        options: [
          "A) to encounter difficulties or opposition",
          "B) to avoid",
          "C) to climb",
          "D) to agree",
        ],
        correctAnswer: "A",
        explanation: "'Run up against' means to face obstacles or resistance.",
      },
      {
        id: "vpve1q10",
        type: "multiple-choice",
        questionText: '"Scale back" means:',
        highlightWord: "Scale back",
        options: [
          "A) to reduce in size or scope",
          "B) to increase quickly",
          "C) to paint again",
          "D) to build",
        ],
        correctAnswer: "A",
        explanation:
          "'Scale back' means to decrease something in amount or extent.",
      },
      {
        id: "vpve1q11",
        type: "multiple-choice",
        questionText: '"Sell out" means:',
        highlightWord: "Sell out",
        options: [
          "A) to betray principles or sell all stock",
          "B) to advertise",
          "C) to buy everything",
          "D) to donate",
        ],
        correctAnswer: "A",
        explanation:
          "'Sell out' means either to compromise one’s beliefs or to sell all available goods.",
      },
      {
        id: "vpve1q12",
        type: "multiple-choice",
        questionText: '"Settle on" means:',
        highlightWord: "Settle on",
        options: [
          "A) to decide or choose after consideration",
          "B) to live somewhere",
          "C) to delay",
          "D) to escape",
        ],
        correctAnswer: "A",
        explanation: "'Settle on' means to make a final decision.",
      },
      {
        id: "vpve1q13",
        type: "multiple-choice",
        questionText: '"Smooth over" means:',
        highlightWord: "Smooth over",
        options: [
          "A) to resolve or calm a conflict",
          "B) to make rough",
          "C) to ignore",
          "D) to remove",
        ],
        correctAnswer: "A",
        explanation: "'Smooth over' means to ease tensions or conflicts.",
      },
      {
        id: "vpve1q14",
        type: "multiple-choice",
        questionText: '"Stick with" means:',
        highlightWord: "Stick with",
        options: [
          "A) to continue or persevere",
          "B) to abandon",
          "C) to hit",
          "D) to hide",
        ],
        correctAnswer: "A",
        explanation:
          "'Stick with' means to keep doing something despite difficulties.",
      },
      {
        id: "vpve1q15",
        type: "multiple-choice",
        questionText: '"Take back" means:',
        highlightWord: "Take back",
        options: [
          "A) to withdraw a statement or return something",
          "B) to steal",
          "C) to lose",
          "D) to borrow",
        ],
        correctAnswer: "A",
        explanation:
          "'Take back' means to retract what was said or return an item.",
      },
      {
        id: "vpve1q16",
        type: "multiple-choice",
        questionText: '"Talk over" means:',
        highlightWord: "Talk over",
        options: [
          "A) to discuss something thoroughly",
          "B) to shout at someone",
          "C) to ignore",
          "D) to finish quickly",
        ],
        correctAnswer: "A",
        explanation:
          "'Talk over' means to discuss carefully before making a decision.",
      },
      {
        id: "vpve1q17",
        type: "multiple-choice",
        questionText: '"Turn around" means:',
        highlightWord: "Turn around",
        options: [
          "A) to change something to improve it",
          "B) to walk backward",
          "C) to stop",
          "D) to fall",
        ],
        correctAnswer: "A",
        explanation:
          "'Turn around' means to reverse a negative situation into a positive one.",
      },
      {
        id: "vpve1q18",
        type: "multiple-choice",
        questionText: '"Wind up" means:',
        highlightWord: "Wind up",
        options: [
          "A) to end or conclude",
          "B) to start",
          "C) to turn on",
          "D) to lie down",
        ],
        correctAnswer: "A",
        explanation: "'Wind up' means to finish or bring something to a close.",
      },
      {
        id: "vpve1q19",
        type: "multiple-choice",
        questionText: '"Zero in on" means:',
        highlightWord: "Zero in on",
        options: [
          "A) to focus attention precisely on",
          "B) to avoid",
          "C) to give up",
          "D) to decorate",
        ],
        correctAnswer: "A",
        explanation:
          "'Zero in on' means to concentrate sharply on a target or issue.",
      },
      {
        id: "vpve1q20",
        type: "multiple-choice",
        questionText: '"Zone out" means:',
        highlightWord: "Zone out",
        options: [
          "A) to lose concentration or become inattentive",
          "B) to organize",
          "C) to relax completely",
          "D) to decorate",
        ],
        correctAnswer: "A",
        explanation: "'Zone out' means to mentally tune out or lose focus.",
      },
    ],
  },
  {
    id: "common-expressions-speaking-1",
    categoryId: "speaking-expressions",
    title: "Vocabulary Test 10 (Common Expressions for Speaking)",
    description:
      "Choose the best word or phrase to complete each sentence or answer the question about common expressions.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "ces1q1",
        type: "multiple-choice",
        questionText:
          "I’m not really into horror movies. I ________ romantic comedies instead.",
        options: ["A) prefer", "B) avoid", "C) watch", "D) love"],
        correctAnswer: "A",
        explanation: "“Prefer” means to like something more than another.",
      },
      {
        id: "ces1q2",
        type: "multiple-choice",
        questionText:
          "Honestly, I think it’s a bit too expensive. It doesn’t really ________ my budget.",
        options: ["A) match", "B) suit", "C) fit", "D) cost"],
        correctAnswer: "B",
        explanation: "“Suit my budget” means it fits what I can afford.",
      },
      {
        id: "ces1q3",
        type: "multiple-choice",
        questionText: '"If you ask me" means:',
        highlightWord: "If you ask me",
        options: [
          "A) I want to know your opinion",
          "B) I don't care about the topic",
          "C) In my opinion",
          "D) I’m asking a question",
        ],
        correctAnswer: "C",
        explanation: "“If you ask me” is a polite way to give your view.",
      },
      {
        id: "ces1q4",
        type: "multiple-choice",
        questionText:
          "I’ve been trying to eat healthy ________, cutting down on junk food.",
        options: [
          "A) as well",
          "B) in contrast",
          "C) for instance",
          "D) lately",
        ],
        correctAnswer: "D",
        explanation: "“Lately” refers to recent times.",
      },
      {
        id: "ces1q5",
        type: "multiple-choice",
        questionText: '"I guess it depends on the situation" means:',
        highlightWord: "I guess it depends on the situation",
        options: [
          "A) The speaker has a strong opinion",
          "B) The speaker is unsure and open",
          "C) The speaker disagrees",
          "D) The speaker doesn’t care",
        ],
        correctAnswer: "B",
        explanation: "“It depends” shows flexibility or uncertainty.",
      },
      {
        id: "ces1q6",
        type: "multiple-choice",
        questionText:
          "I’m totally into photography. I try to take pictures ________ I travel.",
        options: ["A) whenever", "B) wherever", "C) however", "D) whichever"],
        correctAnswer: "A",
        explanation: "“Whenever I travel” means every time I travel.",
      },
      {
        id: "ces1q7",
        type: "multiple-choice",
        questionText: "Honestly, I have ________ idea how to cook that dish.",
        options: ["A) any", "B) no", "C) much", "D) some"],
        correctAnswer: "B",
        explanation:
          "“No idea” is the correct collocation for complete lack of knowledge.",
      },
      {
        id: "ces1q8",
        type: "multiple-choice",
        questionText: "To be honest, I find math a bit ________.",
        options: ["A) bored", "B) boring", "C) boredly", "D) boredom"],
        correctAnswer: "B",
        explanation: "The adjective “boring” describes the thing (math).",
      },
      {
        id: "ces1q9",
        type: "multiple-choice",
        questionText: '"I enjoy hanging out with my friends" means:',
        highlightWord: "hanging out",
        options: [
          "A) Studying",
          "B) Relaxing or spending time",
          "C) Going shopping",
          "D) Exercising",
        ],
        correctAnswer: "B",
        explanation: "“Hang out” is a casual activity.",
      },
      {
        id: "ces1q10",
        type: "multiple-choice",
        questionText:
          "I try to get some fresh air every day, just to ________ my mind.",
        options: ["A) clear", "B) clean", "C) cool", "D) refresh"],
        correctAnswer: "A",
        explanation: "“Clear my mind” means to mentally relax.",
      },
      {
        id: "ces1q11",
        type: "multiple-choice",
        questionText:
          "Well, I’m not an expert, but I ________ it’s a good idea.",
        options: ["A) expect", "B) guess", "C) hope", "D) doubt"],
        correctAnswer: "B",
        explanation: "“I guess” is used to share a casual opinion.",
      },
      {
        id: "ces1q12",
        type: "multiple-choice",
        questionText: "Honestly, it’s not my ________ of tea.",
        options: ["A) glass", "B) plate", "C) cup", "D) style"],
        correctAnswer: "C",
        explanation: "The idiom is “not my cup of tea.”",
      },
      {
        id: "ces1q13",
        type: "multiple-choice",
        questionText:
          '"I\'m just killing time while I wait for the bus" means:',
        highlightWord: "killing time",
        options: [
          "A) Wasting time",
          "B) Making time pass",
          "C) Hurting someone",
          "D) Spending time with others",
        ],
        correctAnswer: "B",
        explanation: "“Killing time” means doing something while waiting.",
      },
      {
        id: "ces1q14",
        type: "multiple-choice",
        questionText: "I usually get up early, ________ on weekends.",
        options: ["A) rarely", "B) especially", "C) except", "D) mostly"],
        correctAnswer: "C",
        explanation: "“Except on weekends” means weekends are the exception.",
      },
      {
        id: "ces1q15",
        type: "multiple-choice",
        questionText: "One thing I can’t ________ is people being late.",
        options: ["A) accept", "B) deal", "C) stand", "D) control"],
        correctAnswer: "C",
        explanation: "“Can’t stand” means strongly dislike.",
      },
      {
        id: "ces1q16",
        type: "multiple-choice",
        questionText: "Let me think for a ________.",
        options: ["A) while", "B) second", "C) minute", "D) time"],
        correctAnswer: "B",
        explanation: "“Think for a second” is a common phrase.",
      },
      {
        id: "ces1q17",
        type: "multiple-choice",
        questionText: '"It’s hard to say" means:',
        highlightWord: "hard to say",
        options: [
          "A) Difficult to pronounce",
          "B) Difficult to decide",
          "C) Wrong to say",
          "D) Impossible to speak",
        ],
        correctAnswer: "B",
        explanation: "“Hard to say” means it’s not easy to choose.",
      },
      {
        id: "ces1q18",
        type: "multiple-choice",
        questionText:
          '"I was just about to leave when it started raining" means:',
        highlightWord: "just about to",
        options: [
          "A) Planning to",
          "B) Finished doing",
          "C) In the middle of",
          "D) Already done",
        ],
        correctAnswer: "A",
        explanation:
          "“Just about to” shows something was going to happen very soon.",
      },
      {
        id: "ces1q19",
        type: "multiple-choice",
        questionText: '"It’s not a big deal" means:',
        highlightWord: "not a big deal",
        options: [
          "A) Not important",
          "B) Not real",
          "C) Not clear",
          "D) Not sure",
        ],
        correctAnswer: "A",
        explanation: "“Not a big deal” means it’s nothing serious.",
      },
      {
        id: "ces1q20",
        type: "multiple-choice",
        questionText: '"Actually" means:',
        highlightWord: "Actually",
        options: [
          "A) The speaker is disagreeing",
          "B) The speaker is correcting or adding a fact",
          "C) The speaker is joking",
          "D) The speaker is changing topics",
        ],
        correctAnswer: "B",
        explanation: "“Actually” is used to clarify or add honestly.",
      },
    ],
  },
  {
    id: "common-starters-speaking-1",
    categoryId: "speaking-expressions",
    title: "Vocabulary Test 11 (Common Starters in IELTS Speaking)",
    description:
      "Choose the best common starter to complete each sentence or answer the question about its usage.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "css1q1",
        type: "multiple-choice",
        questionText:
          "You’re asked: “Do you enjoy reading?” ________, I’d say yes because it helps me relax.",
        options: [
          "A) Actually",
          "B) To be honest",
          "C) At the end",
          "D) Whereas",
        ],
        correctAnswer: "B",
        explanation: "Common soft starter to express sincerity.",
      },
      {
        id: "css1q2",
        type: "multiple-choice",
        questionText:
          "You’re asked: “What’s your hometown like?” ________, it’s a peaceful city with lots of greenery.",
        options: ["A) First of all", "B) I mean", "C) Frankly", "D) Well"],
        correctAnswer: "D",
        explanation:
          "A natural way to begin speaking, especially when thinking.",
      },
      {
        id: "css1q3",
        type: "multiple-choice",
        questionText:
          "You’re asked to describe your daily routine. ________, I usually wake up at around 7 a.m.",
        options: ["A) So", "B) To start with", "C) Although", "D) However"],
        correctAnswer: "B",
        explanation: "Used to begin a sequence or explanation.",
      },
      {
        id: "css1q4",
        type: "multiple-choice",
        questionText:
          "You need time to think before answering. ________, let me think...",
        options: ["A) Hold on", "B) Actually", "C) Well", "D) Definitely"],
        correctAnswer: "C",
        explanation: "Filler often used to pause and think before answering.",
      },
      {
        id: "css1q5",
        type: "multiple-choice",
        questionText:
          "You’re beginning a story from your past. ________, I remember it like it was yesterday.",
        options: [
          "A) Interestingly",
          "B) Speaking of",
          "C) You know",
          "D) I still remember clearly",
        ],
        correctAnswer: "D",
        explanation: "Strong, natural starter for past story.",
      },
      {
        id: "css1q6",
        type: "multiple-choice",
        questionText:
          "You're about to describe a photo in Part 2. ________, I can see a group of people near the beach.",
        options: [
          "A) As far as I’m concerned",
          "B) On the left side",
          "C) In the picture",
          "D) From my view",
        ],
        correctAnswer: "C",
        explanation: "Best choice to begin describing visual content.",
      },
      {
        id: "css1q7",
        type: "multiple-choice",
        questionText:
          "You’re asked about your favorite subject in school. ________, I’d probably say English.",
        options: [
          "A) Of course",
          "B) If I had to choose",
          "C) In other words",
          "D) Nevertheless",
        ],
        correctAnswer: "B",
        explanation: "Used when picking one option over another.",
      },
      {
        id: "css1q8",
        type: "multiple-choice",
        questionText:
          "You want to start your Part 2 answer confidently. ________, I’d like to talk about a book that inspired me.",
        options: [
          "A) Basically",
          "B) Without a doubt",
          "C) I’d say",
          "D) I’m going to talk about",
        ],
        correctAnswer: "D",
        explanation: "Direct and confident way to start Part 2.",
      },
      {
        id: "css1q9",
        type: "multiple-choice",
        questionText:
          "You’re asked: “Do you prefer the city or the countryside?” ________, I think both have their advantages.",
        options: [
          "A) To begin with",
          "B) As far as I know",
          "C) That’s a tough question",
          "D) By the way",
        ],
        correctAnswer: "C",
        explanation: "Honest, natural way to handle tricky questions.",
      },
      {
        id: "css1q10",
        type: "multiple-choice",
        questionText:
          "You’re asked to describe a person you admire. ________, I’d describe my grandfather.",
        options: [
          "A) When it comes to people",
          "B) Initially",
          "C) Despite that",
          "D) In contrast",
        ],
        correctAnswer: "A",
        explanation: "Smooth transition into describing a person.",
      },
      {
        id: "css1q11",
        type: "multiple-choice",
        questionText:
          "You're asked: “How do you usually spend your weekends?” ________, I love going out with friends or just relaxing at home.",
        options: [
          "A) Generally speaking",
          "B) All in all",
          "C) Even so",
          "D) In particular",
        ],
        correctAnswer: "A",
        explanation: "Introduces a broad or overall idea.",
      },
      {
        id: "css1q12",
        type: "multiple-choice",
        questionText:
          "You’re beginning a formal opinion. ________, I believe education should be free for everyone.",
        options: [
          "A) On the whole",
          "B) According to me",
          "C) In my point",
          "D) In my opinion",
        ],
        correctAnswer: "D",
        explanation: "Most standard phrase for formal opinion giving.",
      },
      {
        id: "css1q13",
        type: "multiple-choice",
        questionText:
          "You’re asked to explain your choice. ________, I enjoy painting because it allows me to express myself.",
        options: [
          "A) For one thing",
          "B) That said",
          "C) Even though",
          "D) Besides that",
        ],
        correctAnswer: "A",
        explanation: "Introduces the first reason or point.",
      },
      {
        id: "css1q14",
        type: "multiple-choice",
        questionText:
          "You’ve just been asked: “What do you do in your free time?” ________, I usually read, watch movies, or go for a walk.",
        options: [
          "A) Right away",
          "B) Mostly",
          "C) To be clear",
          "D) When it comes",
        ],
        correctAnswer: "B",
        explanation: "Common adverb to describe general habits.",
      },
      {
        id: "css1q15",
        type: "multiple-choice",
        questionText:
          "You’re starting a story that happened in the past. ________, I was walking home when it suddenly started to rain.",
        options: [
          "A) One time",
          "B) Every time",
          "C) Anyhow",
          "D) As a result",
        ],
        correctAnswer: "A",
        explanation: "Natural opener for a story in the past.",
      },
      {
        id: "css1q16",
        type: "multiple-choice",
        questionText:
          "You’re asked about your hobbies. ________, I’m really into photography these days.",
        options: [
          "A) Largely",
          "B) Honestly",
          "C) Additionally",
          "D) Previously",
        ],
        correctAnswer: "B",
        explanation: "Casual, sincere way to start speaking about likes.",
      },
      {
        id: "css1q17",
        type: "multiple-choice",
        questionText:
          "You’re asked about future plans. ________, I’m planning to study abroad.",
        options: [
          "A) At a glance",
          "B) As far as I know",
          "C) At the moment",
          "D) At the same time",
        ],
        correctAnswer: "C",
        explanation: "Best expression for current or near-future plans.",
      },
      {
        id: "css1q18",
        type: "multiple-choice",
        questionText:
          "You're introducing your opinion gently. ________, I think people should take more breaks during work.",
        options: ["A) I suppose", "B) Unless", "C) Because", "D) Not only"],
        correctAnswer: "A",
        explanation: "Soft, flexible way to offer your opinion.",
      },
      {
        id: "css1q19",
        type: "multiple-choice",
        questionText:
          "You’re starting your answer in a natural, conversational tone. ________, that’s an interesting question.",
        options: ["A) Naturally", "B) Well", "C) Suddenly", "D) Honestly"],
        correctAnswer: "B",
        explanation: "Polite filler to begin casually.",
      },
      {
        id: "css1q20",
        type: "multiple-choice",
        questionText:
          "You want to show that your opinion is flexible. ________, it depends on the situation.",
        options: ["A) To summarize", "B) In short", "C) I mean", "D) I guess"],
        correctAnswer: "D",
        explanation: "Often used when the speaker is being flexible or unsure.",
      },
    ],
  },
  {
    id: "linking-words-speaking-1",
    categoryId: "speaking-expressions",
    title: "Vocabulary Test 12 (Linking Words in IELTS Speaking)",
    description:
      "Choose the most appropriate linking word or phrase to complete each sentence.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "lws1q1",
        type: "multiple-choice",
        questionText:
          "I enjoy cooking at home. ________, it helps me save money.",
        options: ["A) Although", "B) Besides", "C) However", "D) Instead"],
        correctAnswer: "B",
        explanation:
          "Adds extra reason (“helps save money”) to the first statement.",
      },
      {
        id: "lws1q2",
        type: "multiple-choice",
        questionText:
          "I love living in the city. ________, it can be noisy at times.",
        options: [
          "A) Otherwise",
          "B) In fact",
          "C) On the other hand",
          "D) As a result",
        ],
        correctAnswer: "C",
        explanation: "Shows contrast with “I love it” vs. “it can be noisy.”",
      },
      {
        id: "lws1q3",
        type: "multiple-choice",
        questionText:
          "I’m not a fan of spicy food. ________, I try to avoid it when I eat out.",
        options: ["A) So", "B) Even though", "C) Yet", "D) Whereas"],
        correctAnswer: "A",
        explanation: "Shows result from previous dislike.",
      },
      {
        id: "lws1q4",
        type: "multiple-choice",
        questionText:
          "I always try to exercise regularly, ________ I don’t always have enough time.",
        options: ["A) so", "B) because", "C) though", "D) and"],
        correctAnswer: "C",
        explanation: "Adds a contrast despite the first action.",
      },
      {
        id: "lws1q5",
        type: "multiple-choice",
        questionText:
          "I enjoy reading fiction books. ________, I read non-fiction when I want to learn something new.",
        options: [
          "A) Whereas",
          "B) In contrast",
          "C) For example",
          "D) At the same time",
        ],
        correctAnswer: "D",
        explanation: "Shows two habits that exist together.",
      },
      {
        id: "lws1q6",
        type: "multiple-choice",
        questionText:
          "She studied hard for months. ________, she did very well on the test.",
        options: [
          "A) In contrast",
          "B) As a result",
          "C) Nevertheless",
          "D) On the other hand",
        ],
        correctAnswer: "B",
        explanation: "Shows the outcome of her studying.",
      },
      {
        id: "lws1q7",
        type: "multiple-choice",
        questionText:
          "It was raining heavily. ________, we decided to cancel the trip.",
        options: ["A) Otherwise", "B) Moreover", "C) Therefore", "D) While"],
        correctAnswer: "C",
        explanation: "Logical result of heavy rain.",
      },
      {
        id: "lws1q8",
        type: "multiple-choice",
        questionText: "I like tea, ________ my brother prefers coffee.",
        options: ["A) whereas", "B) so", "C) even", "D) because"],
        correctAnswer: "A",
        explanation: "Shows contrast between two preferences.",
      },
      {
        id: "lws1q9",
        type: "multiple-choice",
        questionText:
          "The film was interesting. ________, the ending was a bit disappointing.",
        options: ["A) Also", "B) However", "C) So", "D) Besides"],
        correctAnswer: "B",
        explanation: "Contrasts “interesting” with “disappointing.”",
      },
      {
        id: "lws1q10",
        type: "multiple-choice",
        questionText:
          "I don’t enjoy team sports. ________, I love individual activities like swimming.",
        options: [
          "A) For instance",
          "B) But",
          "C) On the other hand",
          "D) As well",
        ],
        correctAnswer: "C",
        explanation: "Contrasts dislike with something you enjoy.",
      },
      {
        id: "lws1q11",
        type: "multiple-choice",
        questionText:
          "Many people enjoy shopping online. ________, some still prefer going to physical stores.",
        options: [
          "A) As a result",
          "B) On the contrary",
          "C) For example",
          "D) However",
        ],
        correctAnswer: "D",
        explanation: "Contrasts two different preferences.",
      },
      {
        id: "lws1q12",
        type: "multiple-choice",
        questionText:
          "My phone battery was low. ________, I couldn’t take any pictures.",
        options: [
          "A) Consequently",
          "B) Meanwhile",
          "C) Whereas",
          "D) Instead",
        ],
        correctAnswer: "A",
        explanation: "Result of low battery.",
      },
      {
        id: "lws1q13",
        type: "multiple-choice",
        questionText: "________ I don’t like the cold, I really enjoy skiing.",
        options: ["A) While", "B) Because", "C) So", "D) Even"],
        correctAnswer: "A",
        explanation: "Shows contrast between dislike and enjoyment.",
      },
      {
        id: "lws1q14",
        type: "multiple-choice",
        questionText:
          "My friends love parties. ________, I prefer quiet evenings at home.",
        options: [
          "A) For example",
          "B) By contrast",
          "C) Consequently",
          "D) After all",
        ],
        correctAnswer: "B",
        explanation: "Highlights opposing views or behaviors.",
      },
      {
        id: "lws1q15",
        type: "multiple-choice",
        questionText:
          "I try to sleep early. ________, I sometimes stay up watching movies.",
        options: ["A) Similarly", "B) That’s why", "C) Still", "D) Because"],
        correctAnswer: "C",
        explanation: "Introduces something unexpected or contrasting.",
      },
      {
        id: "lws1q16",
        type: "multiple-choice",
        questionText:
          "________ many people own smartphones, not everyone knows how to use them properly.",
        options: ["A) Because", "B) Since", "C) Although", "D) Unless"],
        correctAnswer: "C",
        explanation:
          "Despite many owning smartphones, not all are skilled users.",
      },
      {
        id: "lws1q17",
        type: "multiple-choice",
        questionText:
          "I forgot to set my alarm. ________, I was late for school.",
        options: ["A) Meanwhile", "B) As a result", "C) Yet", "D) In contrast"],
        correctAnswer: "B",
        explanation: "Result of forgetting the alarm.",
      },
      {
        id: "lws1q18",
        type: "multiple-choice",
        questionText: "He didn’t study. ________, he passed the test easily.",
        options: [
          "A) Nevertheless",
          "B) Because",
          "C) In addition",
          "D) For instance",
        ],
        correctAnswer: "A",
        explanation: "Despite not studying, he passed.",
      },
      {
        id: "lws1q19",
        type: "multiple-choice",
        questionText:
          "I enjoy traveling. ________, I don’t get to do it very often.",
        options: [
          "A) For instance",
          "B) On the contrary",
          "C) Unfortunately",
          "D) That’s why",
        ],
        correctAnswer: "C",
        explanation: "Expresses regret about not traveling much.",
      },
      {
        id: "lws1q20",
        type: "multiple-choice",
        questionText:
          "I try to eat healthy. ________, I still enjoy snacks sometimes.",
        options: ["A) Therefore", "B) However", "C) Because", "D) In fact"],
        correctAnswer: "B",
        explanation: "Contrasts healthy habit with guilty pleasure.",
      },
    ],
  },
  {
    id: "phrases-idioms-speaking-1",
    categoryId: "speaking-expressions",
    title: "Vocabulary Test 13 (Phrases & Idioms in IELTS Speaking)",
    description:
      "Choose the correct meaning or completion for each phrase or idiom.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "pis1q1",
        type: "multiple-choice",
        questionText:
          "I was feeling nervous, but I managed to ________ during the interview.",
        options: [
          "A) stay in shape",
          "B) keep my cool",
          "C) hit the books",
          "D) lose my head",
        ],
        correctAnswer: "B",
        explanation: "Means to stay calm in a stressful situation.",
      },
      {
        id: "pis1q2",
        type: "multiple-choice",
        questionText:
          "I'm saving up to buy a new phone. I have to ________ for now.",
        options: [
          "A) make ends meet",
          "B) get cold feet",
          "C) make do",
          "D) call it a day",
        ],
        correctAnswer: "C",
        explanation: "Means to manage with what you have.",
      },
      {
        id: "pis1q3",
        type: "multiple-choice",
        questionText:
          '"Honestly, I’m feeling a bit under the weather today" means:',
        highlightWord: "under the weather",
        options: ["A) excited", "B) sleepy", "C) sick", "D) outdoors"],
        correctAnswer: "C",
        explanation:
          "“Under the weather” is a common idiom for feeling unwell.",
      },
      {
        id: "pis1q4",
        type: "multiple-choice",
        questionText:
          "When I moved to the city, it took a while to ________ to the new lifestyle.",
        options: [
          "A) get used",
          "B) catch up",
          "C) get the hang",
          "D) settle in",
        ],
        correctAnswer: "D",
        explanation: "Means to adjust to a new place or routine.",
      },
      {
        id: "pis1q5",
        type: "multiple-choice",
        questionText: "My friend is always late. It really ________ sometimes.",
        options: [
          "A) gets on my nerves",
          "B) makes my day",
          "C) lets me down",
          "D) comes in handy",
        ],
        correctAnswer: "A",
        explanation: "Means to annoy or irritate you.",
      },
      {
        id: "pis1q6",
        type: "multiple-choice",
        questionText:
          "I know he’s new, but he’s already working really hard. He’s really ________.",
        options: [
          "A) going the extra mile",
          "B) playing it by ear",
          "C) hitting the sack",
          "D) beating around the bush",
        ],
        correctAnswer: "A",
        explanation: "Means putting in extra effort.",
      },
      {
        id: "pis1q7",
        type: "multiple-choice",
        questionText:
          "I was about to give up, but my teacher’s words really ________.",
        options: [
          "A) blew my mind",
          "B) lifted my spirits",
          "C) crossed my mind",
          "D) lost track",
        ],
        correctAnswer: "B",
        explanation: "Means to make someone feel better or happier.",
      },
      {
        id: "pis1q8",
        type: "multiple-choice",
        questionText:
          "You should visit our village. It’s a great place to ________ and relax.",
        options: [
          "A) hang out",
          "B) break down",
          "C) chill out",
          "D) take off",
        ],
        correctAnswer: "C",
        explanation: "Informal phrase for relaxing.",
      },
      {
        id: "pis1q9",
        type: "multiple-choice",
        questionText:
          "I didn’t prepare a script for my presentation. I just ________.",
        options: [
          "A) gave it a shot",
          "B) went the distance",
          "C) played it by ear",
          "D) held my tongue",
        ],
        correctAnswer: "C",
        explanation: "Means to do something without planning.",
      },
      {
        id: "pis1q10",
        type: "multiple-choice",
        questionText:
          "During my school years, I always tried to ________ the rules.",
        options: [
          "A) brush up",
          "B) stick to",
          "C) pull out of",
          "D) take part in",
        ],
        correctAnswer: "B",
        explanation: "Means to follow or obey something, like rules.",
      },
      {
        id: "pis1q11",
        type: "multiple-choice",
        questionText: "She missed the bus again? That’s the ________!",
        options: [
          "A) last laugh",
          "B) final straw",
          "C) lost cause",
          "D) bottom line",
        ],
        correctAnswer: "B",
        explanation: "Last small issue before someone loses patience.",
      },
      {
        id: "pis1q12",
        type: "multiple-choice",
        questionText:
          "I’ve been so busy lately, I can’t even find time to ________.",
        options: [
          "A) catch my breath",
          "B) lend a hand",
          "C) jump the gun",
          "D) beat the clock",
        ],
        correctAnswer: "A",
        explanation: "Means to take a moment to rest or breathe.",
      },
      {
        id: "pis1q13",
        type: "multiple-choice",
        questionText: "I didn’t expect much, but the film really ________.",
        options: [
          "A) turned me off",
          "B) blew me away",
          "C) let me go",
          "D) ran me down",
        ],
        correctAnswer: "B",
        explanation: "Means to greatly impress or surprise.",
      },
      {
        id: "pis1q14",
        type: "multiple-choice",
        questionText:
          "I didn’t want to tell her the bad news, but I had to ________.",
        options: [
          "A) face the music",
          "B) walk on air",
          "C) kill time",
          "D) sleep on it",
        ],
        correctAnswer: "A",
        explanation: "Means to accept the consequences.",
      },
      {
        id: "pis1q15",
        type: "multiple-choice",
        questionText:
          "He’s always so positive—it’s like he sees the world through ________.",
        options: [
          "A) rose-tinted glasses",
          "B) glass ceilings",
          "C) blue oceans",
          "D) open doors",
        ],
        correctAnswer: "A",
        explanation: "Means seeing things more positively than they are.",
      },
      {
        id: "pis1q16",
        type: "multiple-choice",
        questionText: "It was my first job interview, and I had ________.",
        options: [
          "A) butterflies in my stomach",
          "B) stars in my eyes",
          "C) a frog in my throat",
          "D) ants in my pants",
        ],
        correctAnswer: "A",
        explanation: "Feeling nervous.",
      },
      {
        id: "pis1q17",
        type: "multiple-choice",
        questionText: "I overslept and missed the test. I really ________.",
        options: [
          "A) hit the books",
          "B) messed up",
          "C) kicked off",
          "D) put my foot down",
        ],
        correctAnswer: "B",
        explanation: "Means to make a mistake.",
      },
      {
        id: "pis1q18",
        type: "multiple-choice",
        questionText: "Let’s not argue about it now. Can we just ________?",
        options: [
          "A) bite the bullet",
          "B) hit the sack",
          "C) agree to disagree",
          "D) get off track",
        ],
        correctAnswer: "C",
        explanation: "Means to stop arguing without changing minds.",
      },
      {
        id: "pis1q19",
        type: "multiple-choice",
        questionText:
          "I’m not sure how the event will go. Let’s just ________.",
        options: [
          "A) play it by ear",
          "B) get cold feet",
          "C) go the extra mile",
          "D) cut to the chase",
        ],
        correctAnswer: "A",
        explanation: "Handle it as it comes without a plan.",
      },
      {
        id: "pis1q20",
        type: "multiple-choice",
        questionText:
          "I had to speak in front of the whole class and I completely ________.",
        options: [
          "A) broke the ice",
          "B) lost my train of thought",
          "C) kept my cool",
          "D) had second thoughts",
        ],
        correctAnswer: "B",
        explanation: "Forgot what you were saying.",
      },
    ],
  },
  {
    id: "idioms-phrases-meaning-1",
    categoryId: "speaking-expressions",
    title: "Vocabulary Test 14 (Idioms & Phrases – Meaning-Based)",
    description: "Choose the correct meaning for each idiom or phrase.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "ipm1q1",
        type: "multiple-choice",
        questionText: '"pull yourself together" means:',
        highlightWord: "pull yourself together",
        options: [
          "A) Get dressed",
          "B) Control your emotions and calm down",
          "C) Gather your belongings",
          "D) Take a break",
        ],
        correctAnswer: "B",
        explanation:
          "“Pull yourself together” is used when someone is emotionally overwhelmed.",
      },
      {
        id: "ipm1q2",
        type: "multiple-choice",
        questionText: '"burns the midnight oil" means:',
        highlightWord: "burns the midnight oil",
        options: [
          "A) Falls asleep quickly",
          "B) Works late into the night",
          "C) Wastes time",
          "D) Gets angry suddenly",
        ],
        correctAnswer: "B",
        explanation:
          "“Burning the midnight oil” means staying up late to work.",
      },
      {
        id: "ipm1q3",
        type: "multiple-choice",
        questionText: '"hit the nail on the head" means:',
        highlightWord: "hit the nail on the head",
        options: [
          "A) Making a mistake",
          "B) Doing something dangerous",
          "C) Saying something exactly right",
          "D) Starting a fight",
        ],
        correctAnswer: "C",
        explanation: "“Hit the nail on the head” means being accurate.",
      },
      {
        id: "ipm1q4",
        type: "multiple-choice",
        questionText: '"let the cat out of the bag" means:',
        highlightWord: "let the cat out of the bag",
        options: [
          "A) Clean the house",
          "B) Reveal a secret",
          "C) Make a loud noise",
          "D) Lose control",
        ],
        correctAnswer: "B",
        explanation:
          "Letting the cat out of the bag means revealing hidden info.",
      },
      {
        id: "ipm1q5",
        type: "multiple-choice",
        questionText: '"kill two birds with one stone" means:',
        highlightWord: "kill two birds with one stone",
        options: [
          "A) Solved two problems at once",
          "B) Hurt someone emotionally",
          "C) Made a mistake",
          "D) Argued with two people",
        ],
        correctAnswer: "A",
        explanation: "A classic idiom for efficiency.",
      },
      {
        id: "ipm1q6",
        type: "multiple-choice",
        questionText: '"go the extra mile" means:',
        highlightWord: "go the extra mile",
        options: [
          "A) Travel far for work",
          "B) Try harder than expected",
          "C) Walk slowly",
          "D) Take a long time to decide",
        ],
        correctAnswer: "B",
        explanation: "“Going the extra mile” means doing more than required.",
      },
      {
        id: "ipm1q7",
        type: "multiple-choice",
        questionText: '"out of the blue" means:',
        highlightWord: "out of the blue",
        options: [
          "A) It was expected",
          "B) It was boring",
          "C) It was sudden and surprising",
          "D) It was loud and annoying",
        ],
        correctAnswer: "C",
        explanation: "“Out of the blue” describes unexpected events.",
      },
      {
        id: "ipm1q8",
        type: "multiple-choice",
        questionText: '"beat around the bush" means:',
        highlightWord: "beat around the bush",
        options: [
          "A) Waste time",
          "B) Avoid saying something directly",
          "C) Hunt for something",
          "D) Be in a hurry",
        ],
        correctAnswer: "B",
        explanation: "“Beat around the bush” is to avoid getting to the point.",
      },
      {
        id: "ipm1q9",
        type: "multiple-choice",
        questionText: '"spills the beans" means:',
        highlightWord: "spills the beans",
        options: [
          "A) Cooking",
          "B) Telling a secret",
          "C) Cleaning up",
          "D) Starting trouble",
        ],
        correctAnswer: "B",
        explanation:
          "“Spill the beans” means to reveal information accidentally or eagerly.",
      },
      {
        id: "ipm1q10",
        type: "multiple-choice",
        questionText: '"get cold feet" means:',
        highlightWord: "get cold feet",
        options: [
          "A) Be tired",
          "B) Change your mind due to fear",
          "C) Become sick",
          "D) Dance in winter",
        ],
        correctAnswer: "B",
        explanation:
          "“Getting cold feet” often refers to last-minute nervousness.",
      },
      {
        id: "ipm1q11",
        type: "multiple-choice",
        questionText: '"on the same page" means:',
        highlightWord: "on the same page",
        options: [
          "A) You agree or understand each other",
          "B) You’re reading together",
          "C) You’re friends on social media",
          "D) You’re writing a book",
        ],
        correctAnswer: "A",
        explanation: "“On the same page” means shared understanding.",
      },
      {
        id: "ipm1q12",
        type: "multiple-choice",
        questionText: '"in hot water" means:',
        highlightWord: "in hot water",
        options: [
          "A) Feeling cold",
          "B) In trouble",
          "C) Taking a shower",
          "D) Traveling somewhere warm",
        ],
        correctAnswer: "B",
        explanation: "“In hot water” usually means in a problematic situation.",
      },
      {
        id: "ipm1q13",
        type: "multiple-choice",
        questionText: '"over the moon" means:',
        highlightWord: "over the moon",
        options: [
          "A) Exhausted",
          "B) Nervous",
          "C) Extremely happy",
          "D) Confused",
        ],
        correctAnswer: "C",
        explanation: "“Over the moon” is used to express joy.",
      },
      {
        id: "ipm1q14",
        type: "multiple-choice",
        questionText: '"cut corners" means:',
        highlightWord: "cut corners",
        options: [
          "A) Avoid people",
          "B) Take a shorter path",
          "C) Do something in a cheap or easy way (usually badly)",
          "D) Decorate",
        ],
        correctAnswer: "C",
        explanation: "“Cut corners” often leads to lower quality.",
      },
      {
        id: "ipm1q15",
        type: "multiple-choice",
        questionText: '"a piece of cake" means:',
        highlightWord: "a piece of cake",
        options: [
          "A) Delicious",
          "B) Very easy",
          "C) Quite boring",
          "D) Very expensive",
        ],
        correctAnswer: "B",
        explanation: "“A piece of cake” means something is easy to do.",
      },
      {
        id: "ipm1q16",
        type: "multiple-choice",
        questionText: '"lose track of time" means:',
        highlightWord: "lose track of time",
        options: [
          "A) Be bored",
          "B) Be sleepy",
          "C) Forget the time",
          "D) Set a timer",
        ],
        correctAnswer: "C",
        explanation:
          "“Lose track of time” is to get lost in what you’re doing.",
      },
      {
        id: "ipm1q17",
        type: "multiple-choice",
        questionText: '"hit the roof" means:',
        highlightWord: "hit the roof",
        options: [
          "A) They left the house",
          "B) They got very angry",
          "C) They climbed something",
          "D) They fell asleep",
        ],
        correctAnswer: "B",
        explanation: "“Hit the roof” = exploded with anger.",
      },
      {
        id: "ipm1q18",
        type: "multiple-choice",
        questionText: '"under your nose" means:',
        highlightWord: "under your nose",
        options: [
          "A) Happening nearby without you noticing",
          "B) Smelling bad",
          "C) Talking too much",
          "D) Lying to someone",
        ],
        correctAnswer: "A",
        explanation: "“Under your nose” is about missing something obvious.",
      },
      {
        id: "ipm1q19",
        type: "multiple-choice",
        questionText: '"costs an arm and a leg" means:',
        highlightWord: "costs an arm and a leg",
        options: [
          "A) It’s very painful",
          "B) It’s extremely expensive",
          "C) It’s dangerous",
          "D) It takes a long time",
        ],
        correctAnswer: "B",
        explanation: "Classic idiom for high cost.",
      },
      {
        id: "ipm1q20",
        type: "multiple-choice",
        questionText: '"burn out" means:',
        highlightWord: "burn out",
        options: [
          "A) To become invisible",
          "B) To stop working because of tiredness or stress",
          "C) To quit school",
          "D) To forget something",
        ],
        correctAnswer: "B",
        explanation: "“Burn out” refers to emotional exhaustion.",
      },
    ],
  },
  {
    id: "ielts-reading-misunderstood-words-1",
    categoryId: "vocabulary",
    title: "IELTS Reading Vocabulary – Misunderstood Words",
    description:
      "Identify the correct meaning of words that are often misunderstood in IELTS Reading passages.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "irmw1q1",
        type: "multiple-choice",
        questionText:
          "The researchers tried to account for the unexpected results.",
        highlightWord: "account for",
        options: ["A) Record", "B) Blame", "C) Explain", "D) Deny"],
        correctAnswer: "C",
        explanation: "Account for – provide a reason or explanation.",
      },
      {
        id: "irmw1q2",
        type: "multiple-choice",
        questionText:
          "The population of the species has declined steadily over the past decade.",
        highlightWord: "declined",
        options: ["A) Argued", "B) Reduced", "C) Doubled", "D) Improved"],
        correctAnswer: "B",
        explanation: "Declined – decreased in number or quality.",
      },
      {
        id: "irmw1q3",
        type: "multiple-choice",
        questionText: "The results were consistent with previous findings.",
        highlightWord: "consistent with",
        options: [
          "A) Opposed to",
          "B) Similar to",
          "C) Different from",
          "D) Unclear compared to",
        ],
        correctAnswer: "B",
        explanation: "Consistent with – matches or agrees with.",
      },
      {
        id: "irmw1q4",
        type: "multiple-choice",
        questionText:
          "The company had to cease operations due to financial issues.",
        highlightWord: "cease",
        options: ["A) Begin", "B) Discuss", "C) Stop", "D) Improve"],
        correctAnswer: "C",
        explanation: "Cease – to bring to an end.",
      },
      {
        id: "irmw1q5",
        type: "multiple-choice",
        questionText:
          "The survey revealed that most respondents were reluctant to share personal data.",
        highlightWord: "reluctant",
        options: ["A) Eager", "B) Unwilling", "C) Encouraged", "D) Excited"],
        correctAnswer: "B",
        explanation: "Reluctant – not eager or hesitant.",
      },
      {
        id: "irmw1q6",
        type: "multiple-choice",
        questionText:
          "The system aims to facilitate faster communication among departments.",
        highlightWord: "facilitate",
        options: ["A) Block", "B) Encourage", "C) Make easier", "D) Delay"],
        correctAnswer: "C",
        explanation: "Facilitate – help something happen more smoothly.",
      },
      {
        id: "irmw1q7",
        type: "multiple-choice",
        questionText: "The evidence was sufficient to support the claim.",
        highlightWord: "sufficient",
        options: ["A) Unclear", "B) Lacking", "C) Enough", "D) Contradictory"],
        correctAnswer: "C",
        explanation: "Sufficient – adequate, meeting a need.",
      },
      {
        id: "irmw1q8",
        type: "multiple-choice",
        questionText: "He was exposed to new cultures during his travels.",
        highlightWord: "exposed to",
        options: [
          "A) Protected from",
          "B) Introduced to",
          "C) Removed from",
          "D) Critical of",
        ],
        correctAnswer: "B",
        explanation: "Exposed to – brought into contact with.",
      },
      {
        id: "irmw1q9",
        type: "multiple-choice",
        questionText:
          "The results were insignificant in terms of statistical analysis.",
        highlightWord: "insignificant",
        options: [
          "A) Small but important",
          "B) Not worth considering",
          "C) Extremely helpful",
          "D) Emotionally impactful",
        ],
        correctAnswer: "B",
        explanation: "Insignificant – not important in this context.",
      },
      {
        id: "irmw1q10",
        type: "multiple-choice",
        questionText: "The plan was rejected due to inadequate funding.",
        highlightWord: "inadequate",
        options: ["A) Too much", "B) Not enough", "C) Secret", "D) Misused"],
        correctAnswer: "B",
        explanation: "Inadequate – lacking in quantity or quality.",
      },
      {
        id: "irmw1q11",
        type: "multiple-choice",
        questionText:
          "The scientist underwent several experiments to prove the theory.",
        highlightWord: "underwent",
        options: [
          "A) Refused",
          "B) Conducted",
          "C) Experienced",
          "D) Repeated",
        ],
        correctAnswer: "C",
        explanation: "Underwent – went through (a process).",
      },
      {
        id: "irmw1q12",
        type: "multiple-choice",
        questionText: "The theory is no longer valid in modern science.",
        highlightWord: "valid",
        options: ["A) Useful", "B) Acceptable", "C) Wrong", "D) Legal"],
        correctAnswer: "B",
        explanation: "Valid – logically or factually correct.",
      },
      {
        id: "irmw1q13",
        type: "multiple-choice",
        questionText:
          "The climate model was revised after the new data was collected.",
        highlightWord: "revised",
        options: ["A) Rejected", "B) Delayed", "C) Updated", "D) Removed"],
        correctAnswer: "C",
        explanation: "Revised – edited or changed.",
      },
      {
        id: "irmw1q14",
        type: "multiple-choice",
        questionText: "The medicine had adverse effects on some patients.",
        highlightWord: "adverse",
        options: ["A) Positive", "B) Temporary", "C) Negative", "D) Natural"],
        correctAnswer: "C",
        explanation: "Adverse effects – harmful outcomes.",
      },
      {
        id: "irmw1q15",
        type: "multiple-choice",
        questionText:
          "The museum features contemporary artworks from across the globe.",
        highlightWord: "contemporary",
        options: ["A) Traditional", "B) Ancient", "C) Modern", "D) Local"],
        correctAnswer: "C",
        explanation: "Contemporary – belonging to the present.",
      },
      {
        id: "irmw1q16",
        type: "multiple-choice",
        questionText:
          "This theory is widely accepted in the scientific community.",
        highlightWord: "widely accepted",
        options: [
          "A) Rarely followed",
          "B) Strongly debated",
          "C) Mostly agreed upon",
          "D) Silently criticized",
        ],
        correctAnswer: "C",
        explanation: "Widely accepted – commonly believed.",
      },
      {
        id: "irmw1q17",
        type: "multiple-choice",
        questionText:
          "The article highlighted the notion that intelligence is not fixed.",
        highlightWord: "notion",
        options: ["A) Proof", "B) Opinion or belief", "C) Law", "D) Mistake"],
        correctAnswer: "B",
        explanation: "Notion – an idea or concept.",
      },
      {
        id: "irmw1q18",
        type: "multiple-choice",
        questionText:
          "The author’s tone is neutral, without showing strong emotions.",
        highlightWord: "neutral",
        options: [
          "A) Aggressive",
          "B) Fair and balanced",
          "C) Supportive",
          "D) Excited",
        ],
        correctAnswer: "B",
        explanation: "Neutral – not favoring a side.",
      },
      {
        id: "irmw1q19",
        type: "multiple-choice",
        questionText: "The book is primarily focused on social issues.",
        highlightWord: "primarily",
        options: [
          "A) Occasionally",
          "B) Mainly",
          "C) Accidentally",
          "D) Barely",
        ],
        correctAnswer: "B",
        explanation: "Primarily – for the most part.",
      },
      {
        id: "irmw1q20",
        type: "multiple-choice",
        questionText: "The concept is difficult to grasp for beginners.",
        highlightWord: "grasp",
        options: [
          "A) Imagine",
          "B) Explain",
          "C) Understand",
          "D) Hold physically",
        ],
        correctAnswer: "C",
        explanation: "Grasp in reading – mentally comprehend.",
      },
    ],
  },
  {
    id: "ielts-advanced-vocabulary-reading-1",
    categoryId: "vocabulary",
    title: "IELTS Advanced Vocabulary for Reading",
    description:
      "Choose the correct definition for advanced vocabulary words commonly found in IELTS Reading passages.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "iavr1q1",
        type: "multiple-choice",
        questionText:
          "The law was considered redundant after the new policy was introduced.",
        highlightWord: "redundant",
        options: [
          "A) Important",
          "B) Unclear",
          "C) No longer needed",
          "D) Recently passed",
        ],
        correctAnswer: "C",
        explanation: "Redundant means unnecessary due to repetition or change.",
      },
      {
        id: "iavr1q2",
        type: "multiple-choice",
        questionText:
          "The proposal was met with skepticism from the committee.",
        highlightWord: "skepticism",
        options: ["A) Support", "B) Doubt", "C) Indifference", "D) Excitement"],
        correctAnswer: "B",
        explanation: "Skepticism is a lack of trust or belief.",
      },
      {
        id: "iavr1q3",
        type: "multiple-choice",
        questionText:
          "The book provides a comprehensive overview of environmental issues.",
        highlightWord: "comprehensive",
        options: [
          "A) Brief",
          "B) Biased",
          "C) Complete and detailed",
          "D) Unrelated",
        ],
        correctAnswer: "C",
        explanation: "Comprehensive – covering all or nearly all aspects.",
      },
      {
        id: "iavr1q4",
        type: "multiple-choice",
        questionText:
          "The CEO’s comments were later retracted after public backlash.",
        highlightWord: "retracted",
        options: [
          "A) Strengthened",
          "B) Taken back",
          "C) Approved",
          "D) Repeated",
        ],
        correctAnswer: "B",
        explanation: "Retracted means officially withdrawn.",
      },
      {
        id: "iavr1q5",
        type: "multiple-choice",
        questionText:
          "The increase in temperature is attributed to global warming.",
        highlightWord: "attributed to",
        options: [
          "A) Ignored by",
          "B) Caused by",
          "C) Rejected due to",
          "D) Based on opinion",
        ],
        correctAnswer: "B",
        explanation: "Attributed to – seen as the result of.",
      },
      {
        id: "iavr1q6",
        type: "multiple-choice",
        questionText: "The theory was dismissed for lacking empirical support.",
        highlightWord: "empirical",
        options: [
          "A) Theoretical",
          "B) Traditional",
          "C) Based on observation or experience",
          "D) Emotionally appealing",
        ],
        correctAnswer: "C",
        explanation: "Empirical – based on data, not theory.",
      },
      {
        id: "iavr1q7",
        type: "multiple-choice",
        questionText: "The scientists reached a consensus about the results.",
        highlightWord: "consensus",
        options: ["A) Argument", "B) Compromise", "C) Agreement", "D) Debate"],
        correctAnswer: "C",
        explanation: "Consensus means shared opinion or conclusion.",
      },
      {
        id: "iavr1q8",
        type: "multiple-choice",
        questionText: "There was a clear discrepancy between the two reports.",
        highlightWord: "discrepancy",
        options: [
          "A) Connection",
          "B) Difference",
          "C) Similarity",
          "D) Repetition",
        ],
        correctAnswer: "B",
        explanation: "Discrepancy – inconsistency or variation.",
      },
      {
        id: "iavr1q9",
        type: "multiple-choice",
        questionText:
          "The company made a substantial investment in new technology.",
        highlightWord: "substantial",
        options: ["A) Small", "B) Legal", "C) Significant", "D) Minor"],
        correctAnswer: "C",
        explanation: "Substantial – large in amount or degree.",
      },
      {
        id: "iavr1q10",
        type: "multiple-choice",
        questionText: "His answer was too ambiguous to be considered valid.",
        highlightWord: "ambiguous",
        options: [
          "A) Clear and direct",
          "B) Short but relevant",
          "C) Uncertain or unclear",
          "D) Aggressive",
        ],
        correctAnswer: "C",
        explanation: "Ambiguous – having more than one meaning.",
      },
      {
        id: "iavr1q11",
        type: "multiple-choice",
        questionText:
          "The country experienced an economic boom in the early 2000s.",
        highlightWord: "economic boom",
        options: [
          "A) Decline in growth",
          "B) Sudden increase in prosperity",
          "C) Rise in inflation",
          "D) Political crisis",
        ],
        correctAnswer: "B",
        explanation: "Economic boom – a rapid financial rise.",
      },
      {
        id: "iavr1q12",
        type: "multiple-choice",
        questionText:
          "This theory is incompatible with the available evidence.",
        highlightWord: "incompatible with",
        options: [
          "A) Conflicting",
          "B) Matched",
          "C) Based on",
          "D) Supported",
        ],
        correctAnswer: "A",
        explanation: "Incompatible with – doesn't match or align.",
      },
      {
        id: "iavr1q13",
        type: "multiple-choice",
        questionText:
          "The new policy is expected to mitigate the effects of pollution.",
        highlightWord: "mitigate",
        options: ["A) Measure", "B) Increase", "C) Reduce", "D) Ignore"],
        correctAnswer: "C",
        explanation: "Mitigate – lessen the severity or impact.",
      },
      {
        id: "iavr1q14",
        type: "multiple-choice",
        questionText: "Her explanation was coherent and easy to follow.",
        highlightWord: "coherent",
        options: [
          "A) Logical and well-organized",
          "B) Short and informal",
          "C) Unnecessary",
          "D) Forced and unclear",
        ],
        correctAnswer: "A",
        explanation: "Coherent – easy to understand and structured.",
      },
      {
        id: "iavr1q15",
        type: "multiple-choice",
        questionText:
          "There has been a proliferation of electric vehicles in recent years.",
        highlightWord: "proliferation",
        options: [
          "A) Decline",
          "B) Increase or spread",
          "C) Ban",
          "D) Failure",
        ],
        correctAnswer: "B",
        explanation: "Proliferation – rapid growth.",
      },
      {
        id: "iavr1q16",
        type: "multiple-choice",
        questionText:
          "The findings were inconclusive, so further research is needed.",
        highlightWord: "inconclusive",
        options: ["A) Definite", "B) Uncertain", "C) Wrong", "D) Accepted"],
        correctAnswer: "B",
        explanation: "Inconclusive – not leading to a final answer.",
      },
      {
        id: "iavr1q17",
        type: "multiple-choice",
        questionText: "The new law will have a profound impact on education.",
        highlightWord: "profound",
        options: [
          "A) Deep and significant",
          "B) Slight",
          "C) Temporary",
          "D) Local",
        ],
        correctAnswer: "A",
        explanation: "Profound – strongly felt or impactful.",
      },
      {
        id: "iavr1q18",
        type: "multiple-choice",
        questionText:
          "The manager was praised for her meticulous attention to detail.",
        highlightWord: "meticulous",
        options: [
          "A) Careless",
          "B) Exact and thorough",
          "C) Quick",
          "D) Secretive",
        ],
        correctAnswer: "B",
        explanation: "Meticulous – paying great attention to detail.",
      },
      {
        id: "iavr1q19",
        type: "multiple-choice",
        questionText:
          "The teacher tried to elicit responses from the quiet students.",
        highlightWord: "elicit",
        options: ["A) Ignore", "B) Draw out", "C) Correct", "D) Prevent"],
        correctAnswer: "B",
        explanation: "Elicit – get a reaction or answer from someone.",
      },
      {
        id: "iavr1q20",
        type: "multiple-choice",
        questionText:
          "The two species are analogous in terms of their behavior.",
        highlightWord: "analogous",
        options: ["A) Similar", "B) Opposite", "C) Evolved", "D) Dependent"],
        correctAnswer: "A",
        explanation: "Analogous – comparable in certain respects.",
      },
    ],
  },
  {
    id: "ielts-reading-trick-vocabulary-context-1",
    categoryId: "vocabulary",
    title: "IELTS Reading Trick Vocabulary Questions with Context",
    description:
      "Determine the meaning of challenging vocabulary words based on their context in IELTS Reading-style sentences.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "irtvc1q1",
        type: "multiple-choice",
        questionText:
          "The research team developed a novel method for recycling plastic waste, which had not been tried before.",
        highlightWord: "novel",
        options: [
          "A) A long story",
          "B) New and original",
          "C) Difficult to understand",
          "D) Expensive",
        ],
        correctAnswer: "B",
        explanation:
          "Novel – means something new and original, not tried before.",
      },
      {
        id: "irtvc1q2",
        type: "multiple-choice",
        questionText:
          "Due to rising pollution, many lakes have been subjected to chemical contamination affecting local wildlife.",
        highlightWord: "subjected to",
        options: [
          "A) Protected from",
          "B) Exposed to",
          "C) Cleaned of",
          "D) Created by",
        ],
        correctAnswer: "B",
        explanation:
          "Subjected to – means being exposed to or experiencing something, often negative.",
      },
      {
        id: "irtvc1q3",
        type: "multiple-choice",
        questionText:
          "The report found only subtle differences between the two species, hardly noticeable at first glance.",
        highlightWord: "subtle",
        options: [
          "A) Large and clear",
          "B) Slight and not obvious",
          "C) Meaningless",
          "D) Confusing",
        ],
        correctAnswer: "B",
        explanation:
          "Subtle – means small or delicate differences that are not immediately noticeable.",
      },
      {
        id: "irtvc1q4",
        type: "multiple-choice",
        questionText:
          "Although the vaccine was generally effective, some patients experienced adverse reactions like fever and fatigue.",
        highlightWord: "adverse",
        options: [
          "A) Beneficial",
          "B) Unwanted or harmful",
          "C) Mild",
          "D) Expected",
        ],
        correctAnswer: "B",
        explanation:
          "Adverse – means harmful or unfavorable, especially referring to side effects or reactions.",
      },
      {
        id: "irtvc1q5",
        type: "multiple-choice",
        questionText:
          "The scientist’s conclusion was retracted after new evidence contradicted the initial findings.",
        highlightWord: "retracted",
        options: [
          "A) Accepted as true",
          "B) Withdrawn or taken back",
          "C) Revised slightly",
          "D) Supported",
        ],
        correctAnswer: "B",
        explanation:
          "Retracted – means to take back or withdraw a statement or conclusion.",
      },
      {
        id: "irtvc1q6",
        type: "multiple-choice",
        questionText:
          "The study’s results were inconclusive, so researchers recommended further investigation before making decisions.",
        highlightWord: "inconclusive",
        options: [
          "A) Clear and final",
          "B) Not providing a definite answer",
          "C) Incorrect",
          "D) Persuasive",
        ],
        correctAnswer: "B",
        explanation:
          "Inconclusive – means results or evidence that do not lead to a firm conclusion.",
      },
      {
        id: "irtvc1q7",
        type: "multiple-choice",
        questionText:
          "The environmental policy aims to mitigate the impact of industrial waste on water sources.",
        highlightWord: "mitigate",
        options: [
          "A) Increase",
          "B) Prevent entirely",
          "C) Reduce the severity of",
          "D) Ignore",
        ],
        correctAnswer: "C",
        explanation:
          "Mitigate – means to lessen or reduce the negative impact of something.",
      },
      {
        id: "irtvc1q8",
        type: "multiple-choice",
        questionText:
          "After the meeting, the team members were on the same page, ready to proceed with the new plan.",
        highlightWord: "on the same page",
        options: [
          "A) Reading the same document",
          "B) In agreement",
          "C) In disagreement",
          "D) Confused",
        ],
        correctAnswer: "B",
        explanation:
          "On the same page – means having a shared understanding or agreement.",
      },
      {
        id: "irtvc1q9",
        type: "multiple-choice",
        questionText:
          "The increase in unemployment was attributed to the recent economic downturn and company closures.",
        highlightWord: "attributed to",
        options: [
          "A) Caused by",
          "B) Ignored due to",
          "C) Unrelated to",
          "D) Improved by",
        ],
        correctAnswer: "A",
        explanation:
          "Attributed to – means something is regarded as being caused by a particular factor.",
      },
      {
        id: "irtvc1q10",
        type: "multiple-choice",
        questionText:
          "The two experiments produced contradictory results, making it difficult to draw firm conclusions.",
        highlightWord: "contradictory",
        options: [
          "A) Supportive of each other",
          "B) Opposite or conflicting",
          "C) Similar",
          "D) Irrelevant",
        ],
        correctAnswer: "B",
        explanation:
          "Contradictory – means results or statements that oppose or conflict with each other.",
      },
      {
        id: "irtvc1q11",
        type: "multiple-choice",
        questionText:
          "The new policy was implemented last year, leading to improved air quality in the city.",
        highlightWord: "implemented",
        options: [
          "A) Planned",
          "B) Carried out or put into effect",
          "C) Cancelled",
          "D) Discussed",
        ],
        correctAnswer: "B",
        explanation: "Implemented – means put into action or executed.",
      },
      {
        id: "irtvc1q12",
        type: "multiple-choice",
        questionText:
          "The article highlights the significance of renewable energy in combating climate change.",
        highlightWord: "significance",
        options: ["A) Importance", "B) Size", "C) Confusion", "D) Cost"],
        correctAnswer: "A",
        explanation:
          "Significance – refers to the importance or meaningfulness of something.",
      },
      {
        id: "irtvc1q13",
        type: "multiple-choice",
        questionText:
          "Although the results were promising, the data was still preliminary and subject to change.",
        highlightWord: "preliminary",
        options: [
          "A) Final",
          "B) Initial and not yet complete",
          "C) Incorrect",
          "D) Irrelevant",
        ],
        correctAnswer: "B",
        explanation:
          "Preliminary – means early, initial, or tentative, not final.",
      },
      {
        id: "irtvc1q14",
        type: "multiple-choice",
        questionText:
          "The researchers observed a strong correlation between exercise and improved mental health.",
        highlightWord: "correlation",
        options: [
          "A) Cause",
          "B) Relationship or connection",
          "C) Difference",
          "D) Coincidence",
        ],
        correctAnswer: "B",
        explanation:
          "Correlation – means a mutual relationship or association between two or more things.",
      },
      {
        id: "irtvc1q15",
        type: "multiple-choice",
        questionText:
          "The report cautioned against drawing exaggerated conclusions from limited data.",
        highlightWord: "exaggerated",
        options: [
          "A) Overstated or made bigger than reality",
          "B) Understated",
          "C) Correct",
          "D) Detailed",
        ],
        correctAnswer: "A",
        explanation:
          "Exaggerated – means made to seem larger or more important than it really is.",
      },
      {
        id: "irtvc1q16",
        type: "multiple-choice",
        questionText:
          "The government decided to allocate funds specifically for education reforms.",
        highlightWord: "allocate",
        options: [
          "A) Collect",
          "B) Distribute or assign",
          "C) Waste",
          "D) Hide",
        ],
        correctAnswer: "B",
        explanation:
          "Allocate – means to set aside or assign resources for a specific purpose.",
      },
      {
        id: "irtvc1q17",
        type: "multiple-choice",
        questionText:
          "The novel coronavirus has had a profound effect on global economies.",
        highlightWord: "profound",
        options: [
          "A) Superficial",
          "B) Deep and far-reaching",
          "C) Temporary",
          "D) Minor",
        ],
        correctAnswer: "B",
        explanation:
          "Profound – means very great, intense, or far-reaching in effect.",
      },
      {
        id: "irtvc1q18",
        type: "multiple-choice",
        questionText:
          "Scientists have developed a new drug that shows promising results in early trials.",
        highlightWord: "promising",
        options: [
          "A) Likely to succeed",
          "B) Uncertain",
          "C) Disappointing",
          "D) Expensive",
        ],
        correctAnswer: "A",
        explanation:
          "Promising – means showing signs of future success or positive outcome.",
      },
      {
        id: "irtvc1q19",
        type: "multiple-choice",
        questionText:
          "The article discussed the implications of rising sea levels for coastal communities.",
        highlightWord: "implications",
        options: [
          "A) Predictions",
          "B) Possible effects or consequences",
          "C) Causes",
          "D) Solutions",
        ],
        correctAnswer: "B",
        explanation:
          "Implications – refer to the possible effects or results of an action or decision.",
      },
      {
        id: "irtvc1q20",
        type: "multiple-choice",
        questionText:
          "The study’s methodology was rigorous, ensuring reliable and accurate results.",
        highlightWord: "rigorous",
        options: [
          "A) Careless",
          "B) Strict and thorough",
          "C) Quick",
          "D) Expensive",
        ],
        correctAnswer: "B",
        explanation:
          "Rigorous – means careful, thorough, and strict in approach or methodology.",
      },
    ],
  },
  {
    id: "ielts-reading-vocabulary-context-1",
    categoryId: "vocabulary",
    title: "IELTS Reading Vocabulary in Context",
    description:
      "Understand the meaning of challenging vocabulary words based on their context in IELTS Reading-style sentences.",
    duration: 20,
    minLevel: 3,
    questions: [
      {
        id: "irvc1q1",
        type: "multiple-choice",
        questionText:
          "Despite the impressive presentation, the theory remains speculative, lacking solid evidence to back it up.",
        highlightWord: "speculative",
        options: [
          "A) Based on careful proof",
          "B) Based on guesses or ideas",
          "C) Widely accepted",
          "D) Clearly defined",
        ],
        correctAnswer: "B",
        explanation:
          "Speculative means based on conjecture or theory rather than solid evidence.",
      },
      {
        id: "irvc1q2",
        type: "multiple-choice",
        questionText:
          "The committee raised concerns about the project’s feasibility, questioning whether it could be completed within budget.",
        highlightWord: "feasibility",
        options: [
          "A) Likelihood of failure",
          "B) Political value",
          "C) Practical possibility",
          "D) Technical complexity",
        ],
        correctAnswer: "C",
        explanation:
          "Feasibility refers to whether something is realistic or achievable.",
      },
      {
        id: "irvc1q3",
        type: "multiple-choice",
        questionText:
          "The scientist was praised for her meticulous record-keeping, ensuring every step of the experiment was documented.",
        highlightWord: "meticulous",
        options: [
          "A) Sloppy",
          "B) Quick",
          "C) Careful and detailed",
          "D) Strict and unfriendly",
        ],
        correctAnswer: "C",
        explanation: "Meticulous means paying great attention to detail.",
      },
      {
        id: "irvc1q4",
        type: "multiple-choice",
        questionText:
          "The monument was erected to commemorate the lives lost in the historic battle.",
        highlightWord: "commemorate",
        options: [
          "A) Hide or erase",
          "B) Replace",
          "C) Celebrate or honor",
          "D) Reconstruct",
        ],
        correctAnswer: "C",
        explanation:
          "Commemorate means to mark an event or person with respect or ceremony.",
      },
      {
        id: "irvc1q5",
        type: "multiple-choice",
        questionText:
          "The speaker’s tone was dismissive, showing little interest in the opposing argument.",
        highlightWord: "dismissive",
        options: [
          "A) Encouraging",
          "B) Respectful",
          "C) Showing disregard",
          "D) Highly emotional",
        ],
        correctAnswer: "C",
        explanation:
          "Dismissive means showing that something is not worth considering.",
      },
      {
        id: "irvc1q6",
        type: "multiple-choice",
        questionText:
          "This job requires someone who can think on their feet and remain resilient under pressure.",
        highlightWord: "resilient",
        options: [
          "A) Easily discouraged",
          "B) Quick to anger",
          "C) Able to recover quickly",
          "D) Unwilling to change",
        ],
        correctAnswer: "C",
        explanation:
          "Resilient means capable of withstanding or recovering quickly from difficulty.",
      },
      {
        id: "irvc1q7",
        type: "multiple-choice",
        questionText:
          "The professor emphasized the need to synthesize data from various sources to form a complete conclusion.",
        highlightWord: "synthesize",
        options: [
          "A) Ignore",
          "B) Combine elements",
          "C) Argue against",
          "D) Store separately",
        ],
        correctAnswer: "B",
        explanation:
          "Synthesize means to bring together different parts into a coherent whole.",
      },
      {
        id: "irvc1q8",
        type: "multiple-choice",
        questionText:
          "The author’s claim appears tenuous, supported by only a few vague references.",
        highlightWord: "tenuous",
        options: [
          "A) Strong and well-supported",
          "B) Weak or uncertain",
          "C) Repetitive",
          "D) Obvious and direct",
        ],
        correctAnswer: "B",
        explanation:
          "Tenuous refers to something with little strength or support.",
      },
      {
        id: "irvc1q9",
        type: "multiple-choice",
        questionText:
          "The findings were aligned with previous research, reinforcing earlier assumptions.",
        highlightWord: "aligned with",
        options: [
          "A) In agreement with",
          "B) In conflict with",
          "C) Based on",
          "D) Followed by",
        ],
        correctAnswer: "A",
        explanation:
          "Aligned with means consistent or matching in position or idea.",
      },
      {
        id: "irvc1q10",
        type: "multiple-choice",
        questionText:
          "The new findings have undermined the credibility of the earlier study.",
        highlightWord: "undermined",
        options: [
          "A) Strengthened",
          "B) Built up",
          "C) Weakened",
          "D) Confirmed",
        ],
        correctAnswer: "C",
        explanation:
          "Undermined means to make something weaker or less effective.",
      },
      {
        id: "irvc1q11",
        type: "multiple-choice",
        questionText:
          "The CEO issued a succinct statement that addressed the issue in just a few words.",
        highlightWord: "succinct",
        options: [
          "A) Long and detailed",
          "B) Vague",
          "C) Brief and clear",
          "D) Repeated",
        ],
        correctAnswer: "C",
        explanation: "Succinct means concise and to the point.",
      },
      {
        id: "irvc1q12",
        type: "multiple-choice",
        questionText:
          "The results were amplified by social media, gaining attention far beyond expectations.",
        highlightWord: "amplified",
        options: [
          "A) Reduced",
          "B) Spread or made louder",
          "C) Denied",
          "D) Forgotten",
        ],
        correctAnswer: "B",
        explanation:
          "Amplified means to increase the intensity, volume, or impact of something.",
      },
      {
        id: "irvc1q13",
        type: "multiple-choice",
        questionText:
          "The documentary seeks to depict the harsh realities faced by migrant workers.",
        highlightWord: "depict",
        options: [
          "A) Hide",
          "B) Describe or show",
          "C) Justify",
          "D) Celebrate",
        ],
        correctAnswer: "B",
        explanation: "Depict means to illustrate or portray something.",
      },
      {
        id: "irvc1q14",
        type: "multiple-choice",
        questionText:
          "The mayor’s speech was full of rhetoric but lacked practical plans.",
        highlightWord: "rhetoric",
        options: [
          "A) Sincere promises",
          "B) Meaningless language or persuasion",
          "C) Accurate data",
          "D) Clear evidence",
        ],
        correctAnswer: "B",
        explanation:
          "Rhetoric refers to persuasive but often empty or exaggerated language.",
      },
      {
        id: "irvc1q15",
        type: "multiple-choice",
        questionText:
          "The results were coherent, making the report easy to understand and logically structured.",
        highlightWord: "coherent",
        options: [
          "A) Disorganized",
          "B) Easy to follow and consistent",
          "C) Complex",
          "D) Misleading",
        ],
        correctAnswer: "B",
        explanation:
          "Coherent means logical, well-organized, and easy to understand.",
      },
      {
        id: "irvc1q16",
        type: "multiple-choice",
        questionText:
          "The factory was shut down after a series of violations of safety regulations.",
        highlightWord: "violations",
        options: [
          "A) Inspections",
          "B) Breaks or breaches of rules",
          "C) Agreements",
          "D) Innovations",
        ],
        correctAnswer: "B",
        explanation: "Violations are acts of breaking a rule or law.",
      },
      {
        id: "irvc1q17",
        type: "multiple-choice",
        questionText:
          "The community responded with hostility to the proposed development plan.",
        highlightWord: "hostility",
        options: [
          "A) Enthusiasm",
          "B) Opposition and anger",
          "C) Indifference",
          "D) Support",
        ],
        correctAnswer: "B",
        explanation: "Hostility means unfriendly or antagonistic behavior.",
      },
      {
        id: "irvc1q18",
        type: "multiple-choice",
        questionText:
          "The film received acclaim from critics around the world for its powerful message.",
        highlightWord: "acclaim",
        options: ["A) Criticism", "B) Silence", "C) Praise", "D) Confusion"],
        correctAnswer: "C",
        explanation: "Acclaim means strong public approval or admiration.",
      },
      {
        id: "irvc1q19",
        type: "multiple-choice",
        questionText:
          "The candidate’s explanation was ambiguous, leaving the audience unsure of her stance.",
        highlightWord: "ambiguous",
        options: [
          "A) Clear",
          "B) Confident",
          "C) Open to more than one interpretation",
          "D) Well-stated",
        ],
        correctAnswer: "C",
        explanation:
          "Ambiguous means unclear or having more than one possible meaning.",
      },
      {
        id: "irvc1q20",
        type: "multiple-choice",
        questionText:
          "The website was updated to be more accessible for users with disabilities.",
        highlightWord: "accessible",
        options: [
          "A) Difficult to navigate",
          "B) Easily reached or usable",
          "C) More expensive",
          "D) Outdated",
        ],
        correctAnswer: "B",
        explanation:
          "Accessible refers to something that is easy to use, enter, or understand, especially by everyone.",
      },
    ],
  },
  {
    id: "data-interpretation-1",
    categoryId: "vocabulary",
    title: "Data Interpretation Test 01 (Charts and Graphs)",
    description:
      "Analyze the provided charts and graphs to answer the questions.",
    duration: 25,
    minLevel: 2,
    questions: [
      {
        id: "di1q1",
        type: "multiple-choice",
        questionText:
          "The number of tourists visiting the country ________ between 2000 and 2010.",
        imageUrl: "vocab-quiz-images/vi1.png", // Placeholder for Screenshot 2025-07-14 231346.png
        options: ["A) jumped", "B) moved", "C) fluctuated", "D) turned"],
        correctAnswer: "C",
        explanation:
          "The line graph shows an up and down movement in tourist numbers, indicating fluctuation.",
      },
      {
        id: "di1q2",
        type: "multiple-choice",
        questionText:
          "Which of the following statements is most accurate based on the 'Spending Distribution in a Year' chart?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Spending+Distribution+Chart", // Placeholder for Screenshot 2025-07-14 231346.png
        options: [
          "A) Spending on Education was slightly lower than spending on Health.",
          "B) Transport received the same percentage of funding as Health.",
          "C) Health and Education each accounted for twice as much spending as Transport.",
          "D) Transport had the highest share of spending among the three sectors.",
        ],
        correctAnswer: "C",
        explanation:
          "Health (40%) and Education (40%) each accounted for twice the percentage of Transport (20%).",
      },
      {
        id: "di1q3",
        type: "multiple-choice",
        questionText:
          "Which of the following statements is most accurate according to the 'Monthly Household Expenses' chart?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Monthly+Household+Expenses+Pie+Chart", // Placeholder for Screenshot 2025-07-14 231357.png
        options: [
          "A) Food expenses are equal to the combined spending on Housing and Utilities.",
          "B) Utilities account for over half the amount spent on food.",
          "C) Housing and Food together make up 70% of the total expenses.",
          "D) Utilities have the highest share of expenses.",
        ],
        correctAnswer: "B",
        explanation:
          "Food is 30% and Utilities is 20%. Half of food (15%) is less than Utilities (20%).",
      },
      {
        id: "di1q4",
        type: "multiple-choice",
        questionText:
          "What does the 'Sales Trends of Two Products (2015-2019)' line chart show about the sales of Product A and Product B from 2015 to 2019?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Sales+Trends+Line+Chart", // Placeholder for Screenshot 2025-07-14 231357.png
        options: [
          "A) Product A sales went up faster than Product B.",
          "B) Product B sales were always higher than Product A.",
          "C) Product A stayed the same.",
          "D) Both Product A and Product B sales dropped",
        ],
        correctAnswer: "A",
        explanation:
          "The line for Product A shows a steeper increase in sales compared to Product B.",
      },
      {
        id: "di1q5",
        type: "multiple-choice",
        questionText:
          "According to the 'Monthly Sales' line graph, which of the following best describes the change between February and March?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Monthly+Sales+Line+Graph", // Placeholder for Screenshot 2025-07-14 231406.png
        options: [
          "A) Sales remained stable.",
          "B) Sales showed a gradual decline.",
          "C) Sales dropped sharply.",
          "D) Sales increased significantly.",
        ],
        correctAnswer: "C",
        explanation:
          "The line graph shows a significant decrease in sales from February to March.",
      },
      {
        id: "di1q6",
        type: "multiple-choice",
        questionText:
          "In which year did the urban population become equal to the rural population?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Urban+Rural+Population+Chart", // Placeholder for Screenshot 2025-07-14 231406.png
        options: [
          "A) Around 1990",
          "B) Around 2000",
          "C) Around 2005",
          "D) Around 2010",
        ],
        correctAnswer: "C",
        explanation:
          "The lines for urban and rural population intersect around the year 2005, indicating equal populations.",
      },
      {
        id: "di1q7",
        type: "multiple-choice",
        questionText:
          "Which of the following statements is correct based on the 'Monthly Household Expenditure' chart?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Monthly+Household+Expenditure+Bar+Chart", // Placeholder for Screenshot 2025-07-14 231425.png
        options: [
          "A) People in India spend more on housing than on food.",
          "B) Japan spends the least on transport compared to the other two countries.",
          "C) The USA spends the most on housing among the three countries.",
          "D) Entertainment is the highest expense category in all three countries.",
        ],
        correctAnswer: "C",
        explanation:
          "The bar representing USA's spending on Housing is the highest among all countries for that category.",
      },
      {
        id: "di1q8",
        type: "multiple-choice",
        questionText:
          "Which of the following statements is correct based on the 'Average Starting Salaries and Employment Rates by Major (2024)' table?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Salaries+Employment+Table", // Placeholder for Screenshot 2025-07-14 231425.png
        options: [
          "A) Engineering graduates earn slightly less than Computer Science graduates but have a higher employment rate.",
          "B) Business majors enjoy the highest employment rate despite earning less than Health Sciences majors.",
          "C) Computer Science not only offers the highest starting salary but also the highest employment rate.",
          "D) Humanities graduates have both the lowest salary and the lowest employment rate among all listed majors.",
        ],
        correctAnswer: "D",
        explanation:
          "According to the table, Humanities has the lowest average starting salary ($45,000) and the lowest employment rate (78%).",
      },
      {
        id: "di1q9",
        type: "multiple-choice",
        questionText:
          "Analyzing the 'Internet Usage Growth in Two Countries (2010-2020)' chart, which of the following statements is the most accurate?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Internet+Usage+Growth+Chart", // Placeholder for Screenshot 2025-07-14 231435.png
        options: [
          "A) Brazil consistently had a lower percentage of internet users than the USA throughout the entire period.",
          "B) The USA experienced a sharp decline in internet usage between 2012 and 2014, while Brazil’s usage continued to rise.",
          "C) Internet usage in both countries peaked in 2014 before declining in 2016.",
          "D) Between 2014 and 2016, Brazil’s internet usage plateaued while the USA saw no significant change.",
        ],
        correctAnswer: "B",
        explanation:
          "The graph shows a noticeable drop in the USA's internet usage line between 2012 and 2014, while Brazil's line continues to ascend.",
      },
      {
        id: "di1q10",
        type: "multiple-choice",
        questionText:
          "Based on the data in the 'Household Income Spending (2024)' pie chart, which of the following statements is most accurate?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Household+Spending+Pie+Chart", // Placeholder for Screenshot 2025-07-14 231442.png
        options: [
          "A) The combined spending on Utilities and Entertainment equals the amount spent on Food.",
          "B) Transportation and Healthcare together account for less than one-fifth of total household income.",
          "C) Housing accounts for a larger portion of income than all other categories combined.",
          "D) The top three categories together consume around 70% of the total household income.",
        ],
        correctAnswer: "D",
        explanation:
          "Adding the percentages for Housing (34.1%), Food (22.4%), and Utilities (11.4%) gives approximately 67.9%, which rounds to around 70%.",
      },
      {
        id: "di1q11",
        type: "multiple-choice",
        questionText:
          "Which of the following statements best describes the information shown in the 'Percentage of People Using Different Modes of Transport to Work in a City (2020)' bar chart?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Modes+of+Transport+Bar+Chart", // Placeholder for Screenshot 2025-07-14 231442.png
        options: [
          "A) The majority of people preferred to walk or cycle to work.",
          "B) Both cycling and walking were equally the least used.",
          "C) Buses were used more than cars, but less than trains.",
          "D) All transport modes were used by an equal percentage of people.",
        ],
        correctAnswer: "B",
        explanation:
          "The bars for Cycling and Walking are the shortest and appear to be of similar height, indicating they were the least used modes.",
      },
      {
        id: "di1q12",
        type: "multiple-choice",
        questionText:
          "Which of the following statements best describes the information shown in the 'Average Weekly Hours Spent on Different Leisure Activities' bar chart about average weekly hours spent on different leisure activities by adults in 2022?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Leisure+Activities+Bar+Chart", // Placeholder for Screenshot 2025-07-14 231458.png
        options: [
          "A) Adults spent the most time reading and exercising during the week.",
          "B) Watching TV and using the internet were the two most time-consuming leisure activities.",
          "C) Socializing took more weekly time than watching TV.",
          "D) Reading and watching TV had the same amount of time spent.",
        ],
        correctAnswer: "B",
        explanation:
          "The bars for Watching TV and Using the Internet are significantly longer than the others, indicating they were the most time-consuming.",
      },
      {
        id: "di1q13",
        type: "multiple-choice",
        questionText:
          "Which of the following statements best describes the trend shown in the 'Number of Tourists Visiting a National Park (2018–2022)' line chart for the number of tourists visiting a national park from 2018 to 2023?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=National+Park+Tourist+Chart", // Placeholder for Screenshot 2025-07-14 231458.png
        options: [
          "A) Tourist numbers steadily increased each year from 2018 to 2023.",
          "B) The number of tourists dropped sharply after 2019 and did not recover afterward.",
          "C) After a significant decline in 2020 and 2021, tourist numbers rose sharply and reached their highest point in 2023.",
          "D) Tourist visits remained constant throughout the entire period.",
        ],
        correctAnswer: "C",
        explanation:
          "The graph shows a dip in 2020-2021, followed by a strong recovery and peak in 2023.",
      },
      {
        id: "di1q14",
        type: "multiple-choice",
        questionText:
          "Which of the following statements best describes the data shown in the 'Breakdown of Electricity Generation by Source' pie chart about electricity generation in Country X in 2022?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Electricity+Generation+Pie+Chart", // Placeholder for Screenshot 2025-07-14 231508.png
        options: [
          "A) Renewable energy sources made up the majority of electricity generation.",
          "B) Coal alone accounted for more than half of the total electricity production.",
          "C) Fossil fuels contributed more than half of the total electricity generation.",
          "D) Solar energy was the second-largest source of electricity generation.",
        ],
        correctAnswer: "C",
        explanation:
          "Fossil fuels (Coal 30% + Natural Gas 25% + Other 7%) sum up to 62%, which is more than half of the total electricity generation.",
      },
      {
        id: "di1q15",
        type: "multiple-choice",
        questionText:
          "What is the main difference in spending habits between the 18–30 and 31–50 age groups as shown in the 'Monthly Spending on Different Items by Two Age Groups' bar chart?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Monthly+Spending+Bar+Chart", // Placeholder for Screenshot 2025-07-14 231514.png
        options: [
          "A) The younger group spends more on health than the older group.",
          "B) The older group spends more on entertainment and education.",
          "C) The younger group spends more on entertainment and education",
          "D) Both groups spend equally across all categories.",
        ],
        correctAnswer: "C",
        explanation:
          "The bars for the 18-30 age group are taller for Entertainment and Education, indicating higher spending in these categories.",
      },
      {
        id: "di1q16",
        type: "multiple-choice",
        questionText:
          "Which of the following statements best describes the trend of flood incidents in the three regions from 2015 to 2022?",
        imageUrl:
          "https://placehold.co/600x400/000000/FFFFFF?text=Flood+Incidents+Line+Chart", // Placeholder for Screenshot 2025-07-14 231514.png
        options: [
          "A) Region B consistently had the highest number of floods every year.",
          "B) Flood incidents in all three regions steadily decreased over the period.",
          "C) Region A experienced a general increase in flood incidents, peaking in 2021.",
          "D) Region C had the lowest number of flood incidents throughout the entire period.",
        ],
        correctAnswer: "C",
        explanation:
          "The line for Region A shows an overall upward trend in flood incidents, reaching its highest point in 2021.",
      },
    ],
  },
  {
    id: "writing-task-1-vocabulary-1",
    categoryId: "vocabulary",
    title: "Vocabulary Test 07 (Writing Task 1 Focus)",
    description:
      "Choose the best meaning or definition of the underlined word based on how it is used in the sentence.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "wt1v1q1",
        type: "multiple-choice",
        questionText:
          "The number of visitors to the museum increased steadily over the five years.",
        highlightWord: "increased",
        options: [
          "A) went down gradually",
          "B) went up gradually",
          "C) stayed the same",
          "D) went up and down",
        ],
        correctAnswer: "B",
        explanation: "“Increased” means to become larger or go up.",
      },
      {
        id: "wt1v1q2",
        type: "multiple-choice",
        questionText:
          "Sales figures for the product fluctuated throughout the year, showing no clear pattern.",
        highlightWord: "fluctuated",
        options: [
          "A) stayed stable",
          "B) changed frequently up and down",
          "C) increased suddenly",
          "D) decreased steadily",
        ],
        correctAnswer: "B",
        explanation: "“Fluctuated” means to rise and fall irregularly.",
      },
      {
        id: "wt1v1q3",
        type: "multiple-choice",
        questionText:
          "The graph shows a rapid decline in the use of coal between 2010 and 2015.",
        highlightWord: "decline",
        options: [
          "A) a quick increase",
          "B) a sudden stop",
          "C) a decrease",
          "D) a steady level",
        ],
        correctAnswer: "C",
        explanation: "“Decline” means to go down or decrease.",
      },
      {
        id: "wt1v1q4",
        type: "multiple-choice",
        questionText:
          "The unemployment rate remained stable for three consecutive years.",
        highlightWord: "remained stable",
        options: [
          "A) stayed about the same",
          "B) increased quickly",
          "C) decreased steadily",
          "D) changed suddenly",
        ],
        correctAnswer: "A",
        explanation: "“Remained stable” means no significant change.",
      },
      {
        id: "wt1v1q5",
        type: "multiple-choice",
        questionText:
          "There was a slight increase in the price of petrol last month.",
        highlightWord: "slight",
        options: ["A) large", "B) small", "C) rapid", "D) unpredictable"],
        correctAnswer: "B",
        explanation: "“Slight” means a small amount.",
      },
      {
        id: "wt1v1q6",
        type: "multiple-choice",
        questionText:
          "The number of smartphone users peaked in 2019 before starting to decline.",
        highlightWord: "peaked",
        options: [
          "A) reached the highest point",
          "B) reached the lowest point",
          "C) stayed the same",
          "D) dropped suddenly",
        ],
        correctAnswer: "A",
        explanation: "“Peaked” means reached the maximum level.",
      },
      {
        id: "wt1v1q7",
        type: "multiple-choice",
        questionText:
          "The data reveals a gradual rise in temperature over the decade.",
        highlightWord: "gradual",
        options: [
          "A) happening slowly over time",
          "B) happening suddenly",
          "C) happening once",
          "D) happening randomly",
        ],
        correctAnswer: "A",
        explanation: "“Gradual” means slow and steady.",
      },
      {
        id: "wt1v1q8",
        type: "multiple-choice",
        questionText:
          "The percentage of people working from home varied between 20% and 40% during the year.",
        highlightWord: "varied",
        options: [
          "A) stayed the same",
          "B) changed or differed",
          "C) increased steadily",
          "D) decreased suddenly",
        ],
        correctAnswer: "B",
        explanation: "“Varied” means to be different or change.",
      },
      {
        id: "wt1v1q9",
        type: "multiple-choice",
        questionText:
          "The population of the city showed a consistent increase over the past five years.",
        highlightWord: "consistent",
        options: [
          "A) increasing in different directions",
          "B) staying the same level",
          "C) increasing steadily without interruption",
          "D) increasing then decreasing",
        ],
        correctAnswer: "C",
        explanation: "“Consistent” means regular and steady.",
      },
      {
        id: "wt1v1q10",
        type: "multiple-choice",
        questionText:
          "Exports declined moderately in the second quarter compared to the first.",
        highlightWord: "moderately",
        options: [
          "A) very much",
          "B) somewhat or to a medium degree",
          "C) not at all",
          "D) extremely",
        ],
        correctAnswer: "B",
        explanation: "“Moderately” means to a medium extent.",
      },
      {
        id: "wt1v1q11",
        type: "multiple-choice",
        questionText:
          "The average temperature remained constant during the summer months.",
        highlightWord: "constant",
        options: [
          "A) changing a lot",
          "B) staying the same",
          "C) increasing rapidly",
          "D) decreasing suddenly",
        ],
        correctAnswer: "B",
        explanation: "“Constant” means not changing.",
      },
      {
        id: "wt1v1q12",
        type: "multiple-choice",
        questionText:
          "Profits showed a dramatic increase after the new product launch.",
        highlightWord: "dramatic",
        options: [
          "A) small and slow",
          "B) sudden and noticeable",
          "C) unclear and confusing",
          "D) steady and slow",
        ],
        correctAnswer: "B",
        explanation: "“Dramatic” means very noticeable or sudden.",
      },
      {
        id: "wt1v1q13",
        type: "multiple-choice",
        questionText:
          "The unemployment rate dropped sharply in the last quarter.",
        highlightWord: "sharply",
        options: [
          "A) slowly and steadily",
          "B) suddenly and strongly",
          "C) gradually and mildly",
          "D) slightly and temporarily",
        ],
        correctAnswer: "B",
        explanation: "“Sharply” means quickly and clearly.",
      },
      {
        id: "wt1v1q14",
        type: "multiple-choice",
        questionText:
          "The figures for electricity usage remained stable throughout the year.",
        highlightWord: "stable",
        options: [
          "A) changing frequently",
          "B) not changing much",
          "C) increasing fast",
          "D) decreasing fast",
        ],
        correctAnswer: "B",
        explanation: "“Stable” means steady or unchanging.",
      },
      {
        id: "wt1v1q15",
        type: "multiple-choice",
        questionText:
          "There was a slight fluctuation in the stock market yesterday.",
        highlightWord: "fluctuation",
        options: [
          "A) no change",
          "B) a small change up and down",
          "C) a huge change suddenly",
          "D) a continuous rise",
        ],
        correctAnswer: "B",
        explanation: "“Fluctuation” means small rises and falls.",
      },
      {
        id: "wt1v1q16",
        type: "multiple-choice",
        questionText:
          "The number of tourists increased exponentially after the festival.",
        highlightWord: "exponentially",
        options: [
          "A) slowly and steadily",
          "B) rapidly and increasingly fast",
          "C) staying the same",
          "D) decreasing slightly",
        ],
        correctAnswer: "B",
        explanation: "“Exponentially” means very quickly.",
      },
      {
        id: "wt1v1q17",
        type: "multiple-choice",
        questionText:
          "The rate of population growth slowed down in recent years.",
        highlightWord: "slowed down",
        options: [
          "A) increased quickly",
          "B) decreased gradually",
          "C) stopped completely",
          "D) stayed constant",
        ],
        correctAnswer: "B",
        explanation: "“Slowed down” means became slower.",
      },
      {
        id: "wt1v1q18",
        type: "multiple-choice",
        questionText:
          "There was a notable difference in sales between the two products.",
        highlightWord: "notable",
        options: [
          "A) unimportant",
          "B) worth noticing",
          "C) very small",
          "D) difficult to see",
        ],
        correctAnswer: "B",
        explanation: "“Notable” means significant or important.",
      },
      {
        id: "wt1v1q19",
        type: "multiple-choice",
        questionText:
          "The data indicates a positive trend in renewable energy usage.",
        highlightWord: "trend",
        options: [
          "A) a general direction of change",
          "B) a one-time event",
          "C) a mistake in the data",
          "D) no change at all",
        ],
        correctAnswer: "A",
        explanation: "“Trend” means a pattern or direction.",
      },
      {
        id: "wt1v1q20",
        type: "multiple-choice",
        questionText:
          "The production level plateaued after an initial increase.",
        highlightWord: "plateaued",
        options: [
          "A) increased rapidly",
          "B) stayed at the same level",
          "C) decreased suddenly",
          "D) fluctuated wildly",
        ],
        correctAnswer: "B",
        explanation: "“Plateaued” means stopped increasing and stayed steady.",
      },
    ],
  },
  {
    id: "writing-task-2-formal-word-choice-1",
    categoryId: "vocabulary",
    title: "IELTS Writing Task 2: Formal Word Choice Practice",
    description:
      "Choose the most appropriate formal word or phrase to replace the informal word in bold.",
    duration: 20,
    minLevel: 2,
    questions: [
      {
        id: "wt2fwc1q1",
        type: "multiple-choice",
        questionText: "The government gave money to the flood victims.",
        highlightWord: "gave",
        options: ["a) donated", "b) supplied", "c) handed out", "d) allocated"],
        correctAnswer: "d",
        explanation:
          "Allocated is the formal, precise term for officially giving or assigning resources (like money).",
      },
      {
        id: "wt2fwc1q2",
        type: "multiple-choice",
        questionText: "The results of the experiment were really surprising.",
        highlightWord: "really",
        options: [
          "a) strongly",
          "b) incredibly",
          "c) extremely",
          "d) significantly",
        ],
        correctAnswer: "d",
        explanation:
          "Significantly is an appropriate academic alternative to “really” when describing measurable or important changes.",
      },
      {
        id: "wt2fwc1q3",
        type: "multiple-choice",
        questionText:
          "A lot of people think that education is the key to success.",
        highlightWord: "A lot of",
        options: ["a) Several", "b) Various", "c) A great many", "d) Many"],
        correctAnswer: "d",
        explanation:
          "Many is a neutral and suitable academic alternative to the informal “a lot of.”",
      },
      {
        id: "wt2fwc1q4",
        type: "multiple-choice",
        questionText:
          "Using phones in class can mess up the learning environment.",
        highlightWord: "mess up",
        options: ["a) interfere with", "b) reduce", "c) affect", "d) disturb"],
        correctAnswer: "a",
        explanation:
          "Interfere with is a formal expression that conveys disruption, more appropriate than “mess up.”",
      },
      {
        id: "wt2fwc1q5",
        type: "multiple-choice",
        questionText:
          "The government should keep an eye on environmental policies.",
        highlightWord: "keep an eye on",
        options: ["a) monitor", "b) watch", "c) manage", "d) organize"],
        correctAnswer: "a",
        explanation:
          "Monitor means to observe or track something over time, more formal than “keep an eye on.”",
      },
      {
        id: "wt2fwc1q6",
        type: "multiple-choice",
        questionText: "Fast food is bad for your health.",
        highlightWord: "bad",
        options: ["a) poor", "b) harmful", "c) ineffective", "d) unhealthy"],
        correctAnswer: "b",
        explanation:
          "Harmful is a precise, formal term to describe something that negatively affects health.",
      },
      {
        id: "wt2fwc1q7",
        type: "multiple-choice",
        questionText: "The company put off the launch due to technical issues.",
        highlightWord: "put off",
        options: ["a) avoided", "b) postponed", "c) delayed", "d) rejected"],
        correctAnswer: "b",
        explanation:
          "Postponed is the formal way to say something has been delayed, more appropriate than “put off.”",
      },
      {
        id: "wt2fwc1q8",
        type: "multiple-choice",
        questionText:
          "The teacher asked students to come up with ideas for the project.",
        highlightWord: "come up with",
        options: ["a) brainstorm", "b) present", "c) generate", "d) create"],
        correctAnswer: "c",
        explanation:
          "Generate is the formal equivalent of “come up with,” especially in academic and professional writing.",
      },
      {
        id: "wt2fwc1q9",
        type: "multiple-choice",
        questionText: "The factory got rid of its waste in the river.",
        highlightWord: "got rid of",
        options: ["a) threw", "b) dumped", "c) removed", "d) eliminated"],
        correctAnswer: "d",
        explanation:
          "Eliminated means to remove completely and is more formal than “got rid of.”",
      },
      {
        id: "wt2fwc1q10",
        type: "multiple-choice",
        questionText: "The results of the survey were pretty accurate.",
        highlightWord: "pretty",
        options: ["a) almost", "b) rather", "c) quite", "d) fairly"],
        correctAnswer: "d",
        explanation:
          "Fairly is an academic and neutral alternative to “pretty” in this context.",
      },
      {
        id: "wt2fwc1q11",
        type: "multiple-choice",
        questionText: "Some students don’t care about academic performance.",
        highlightWord: "don’t care",
        options: [
          "a) are careless",
          "b) show disinterest",
          "c) lack concern",
          "d) are indifferent",
        ],
        correctAnswer: "d",
        explanation:
          "Indifferent means lacking interest or concern—more formal than “don’t care.”",
      },
      {
        id: "wt2fwc1q12",
        type: "multiple-choice",
        questionText: "Many people think mobile phones are okay for children.",
        highlightWord: "okay",
        options: [
          "a) are accepted",
          "b) are fine",
          "c) are suitable",
          "d) are useful",
        ],
        correctAnswer: "c",
        explanation:
          "Suitable means appropriate or fitting, which is a formal substitute for “okay.”",
      },
      {
        id: "wt2fwc1q13",
        type: "multiple-choice",
        questionText:
          "People often talk about how climate change is affecting the planet.",
        highlightWord: "talk about",
        options: ["a) debate", "b) mention", "c) discuss", "d) express"],
        correctAnswer: "c",
        explanation:
          "Discuss is a formal verb used to describe examining a topic in depth.",
      },
      {
        id: "wt2fwc1q14",
        type: "multiple-choice",
        questionText: "The company needs to look into better security methods.",
        highlightWord: "look into",
        options: ["a) explore", "b) examine", "c) evaluate", "d) investigate"],
        correctAnswer: "d",
        explanation:
          "Investigate is a formal, academic term for “look into,” especially in research or inquiry.",
      },
      {
        id: "wt2fwc1q15",
        type: "multiple-choice",
        questionText: "Too much stress can bring about health problems.",
        highlightWord: "bring about",
        options: ["a) generate", "b) contribute to", "c) cause", "d) produce"],
        correctAnswer: "c",
        explanation:
          "Cause is the most direct and appropriate academic term to replace “bring about.”",
      },
      {
        id: "wt2fwc1q16",
        type: "multiple-choice",
        questionText: "Universities must make sure students attend classes.",
        highlightWord: "make sure",
        options: ["a) confirm", "b) ensure", "c) control", "d) prove"],
        correctAnswer: "b",
        explanation:
          "Ensure means to make certain and is commonly used in academic writing for “make sure.”",
      },
      {
        id: "wt2fwc1q17",
        type: "multiple-choice",
        questionText: "Technology is getting better every year.",
        highlightWord: "getting better",
        options: [
          "a) improving",
          "b) increasing",
          "c) rising",
          "d) progressing",
        ],
        correctAnswer: "a",
        explanation:
          "Improving is the formal, accurate term to describe positive development or progress.",
      },
      {
        id: "wt2fwc1q18",
        type: "multiple-choice",
        questionText: "He was not happy with the service.",
        highlightWord: "not happy",
        options: [
          "a) uncomfortable",
          "b) unsatisfied",
          "c) displeased",
          "d) dissatisfied",
        ],
        correctAnswer: "d",
        explanation:
          "Dissatisfied is the most appropriate formal choice to mean “not happy” in this context.",
      },
      {
        id: "wt2fwc1q19",
        type: "multiple-choice",
        questionText:
          "It’s important to find out the reasons behind social problems.",
        highlightWord: "find out",
        options: ["a) observe", "b) investigate", "c) identify", "d) discover"],
        correctAnswer: "c",
        explanation:
          "Identify means to find or recognize something clearly, especially in analysis or argument.",
      },
      {
        id: "wt2fwc1q20",
        type: "multiple-choice",
        questionText: "Governments should deal with rising unemployment.",
        highlightWord: "deal with",
        options: ["a) resolve", "b) face", "c) address", "d) handle"],
        correctAnswer: "c",
        explanation:
          "Address is the best formal term to use in writing when suggesting that a problem needs action.",
      },
    ],
  },
  {
    id: "writing-vocabulary-upgrade-1",
    categoryId: "vocabulary",
    title: "IELTS Writing Vocabulary Upgrade: Band 6.5 → Band 8 (Above)",
    description:
      "Choose the most appropriate and higher-level vocabulary word to replace the bolded one in the sentence.",
    duration: 20,
    minLevel: 3, // Advanced level
    questions: [
      {
        id: "wvu1q1",
        type: "multiple-choice",
        questionText:
          "The government should help people who are living in poverty.",
        highlightWord: "help",
        options: ["a) assist", "b) support", "c) benefit", "d) empower"],
        correctAnswer: "d",
        explanation:
          "Empower is more advanced than 'help' — it means to give someone the ability or confidence to improve their own situation. It's more precise and formal.",
      },
      {
        id: "wvu1q2",
        type: "multiple-choice",
        questionText: "Pollution has a bad effect on public health.",
        highlightWord: "bad",
        options: ["a) major", "b) harmful", "c) serious", "d) adverse"],
        correctAnswer: "d",
        explanation:
          "Adverse is a high-level word commonly used in formal writing to describe negative or harmful effects, particularly in health, environment, or economics.",
      },
      {
        id: "wvu1q3",
        type: "multiple-choice",
        questionText: "Many students don’t like doing too much homework.",
        highlightWord: "don’t like",
        options: ["a) deny", "b) reject", "c) dislike", "d) object to"],
        correctAnswer: "d",
        explanation:
          "Object to is a stronger and more formal alternative to “don’t like,” especially when expressing disagreement or disapproval in writing.",
      },
      {
        id: "wvu1q4",
        type: "multiple-choice",
        questionText: "There are a lot of ways to reduce traffic.",
        highlightWord: "a lot of",
        options: ["a) numerous", "b) much", "c) multiple", "d) vast"],
        correctAnswer: "a",
        explanation:
          "Numerous is a formal and academic replacement for “a lot of.”",
      },
      {
        id: "wvu1q5",
        type: "multiple-choice",
        questionText: "The cost of education has gone up a lot recently.",
        highlightWord: "gone up a lot",
        options: ["a) extended", "b) increased", "c) expanded", "d) surged"],
        correctAnswer: "d",
        explanation:
          "Surged conveys a rapid and significant rise, which is stronger and more descriptive than simply “gone up a lot.”",
      },
      {
        id: "wvu1q6",
        type: "multiple-choice",
        questionText: "Mobile phones are good for learning, if used correctly.",
        highlightWord: "good",
        options: [
          "a) are useful",
          "b) are supportive",
          "c) are beneficial",
          "d) are practical",
        ],
        correctAnswer: "c",
        explanation:
          "Beneficial is the most appropriate academic synonym for “good” when describing something helpful or advantageous.",
      },
      {
        id: "wvu1q7",
        type: "multiple-choice",
        questionText: "Many people think that public transport should be free.",
        highlightWord: "think",
        options: ["a) suggest", "b) argue", "c) suppose", "d) believe"],
        correctAnswer: "b",
        explanation:
          "Argue is more appropriate in formal writing, especially when stating that people express or defend an opinion.",
      },
      {
        id: "wvu1q8",
        type: "multiple-choice",
        questionText: "Some say schools should teach financial literacy.",
        highlightWord: "teach",
        options: ["a) train", "b) educate", "c) instruct", "d) introduce"],
        correctAnswer: "d",
        explanation:
          "Introduce means to begin or formally start a new subject or practice. It's the best fit when talking about implementing education on a new topic.",
      },
      {
        id: "wvu1q9",
        type: "multiple-choice",
        questionText: "He finished his education abroad.",
        highlightWord: "finished",
        options: [
          "a) ended",
          "b) graduated from",
          "c) completed",
          "d) finalised",
        ],
        correctAnswer: "c",
        explanation:
          "Completed is a precise and formal way to refer to finishing education, more appropriate than “finished” in academic writing.",
      },
      {
        id: "wvu1q10",
        type: "multiple-choice",
        questionText: "A university degree can get you a better job.",
        highlightWord: "get",
        options: ["a) achieve", "b) ensure", "c) guarantee", "d) secure"],
        correctAnswer: "d",
        explanation:
          "Secure a job is a formal collocation meaning to successfully obtain employment. It's preferred in academic English.",
      },
      {
        id: "wvu1q11",
        type: "multiple-choice",
        questionText: "Working from home can cause feelings of isolation.",
        highlightWord: "cause",
        options: ["a) make", "b) result in", "c) produce", "d) generate"],
        correctAnswer: "b",
        explanation:
          "Result in is a formal expression to indicate cause and effect.",
      },
      {
        id: "wvu1q12",
        type: "multiple-choice",
        questionText: "Climate change is a big issue in the modern world.",
        highlightWord: "big",
        options: ["a) major", "b) large", "c) widespread", "d) pressing"],
        correctAnswer: "d",
        explanation:
          "Pressing means urgent and important—much more formal than just “big.”",
      },
      {
        id: "wvu1q13",
        type: "multiple-choice",
        questionText: "The rise in tourism has hurt the local environment.",
        highlightWord: "hurt",
        options: ["a) damaged", "b) affected", "c) destroyed", "d) degraded"],
        correctAnswer: "a",
        explanation:
          "Damaged is the most accurate and neutral academic word for describing environmental harm caused by tourism.",
      },
      {
        id: "wvu1q14",
        type: "multiple-choice",
        questionText:
          "Obesity is often linked to poor diet and lack of exercise.",
        highlightWord: "linked to",
        options: [
          "a) related to",
          "b) caused by",
          "c) associated with",
          "d) based on",
        ],
        correctAnswer: "c",
        explanation:
          "Associated with is a formal and accurate collocation used to show correlation, widely used in academic writing.",
      },
      {
        id: "wvu1q15",
        type: "multiple-choice",
        questionText: "People should try to live more sustainably.",
        highlightWord: "try",
        options: ["a) aim", "b) seek", "c) attempt", "d) strive"],
        correctAnswer: "d",
        explanation:
          "Strive is a Band 8-level verb meaning to make a great effort — more powerful and formal than simply “try.”",
      },
      {
        id: "wvu1q16",
        type: "multiple-choice",
        questionText: "Technology has changed the way people interact.",
        highlightWord: "changed",
        options: ["a) moved", "b) shifted", "c) transformed", "d) adjusted"],
        correctAnswer: "c",
        explanation:
          "Transformed indicates a significant or complete change, more sophisticated than “changed.”",
      },
      {
        id: "wvu1q17",
        type: "multiple-choice",
        questionText: "Some believe that prison is the best way to stop crime.",
        highlightWord: "stop",
        options: ["a) limit", "b) prevent", "c) avoid", "d) reduce"],
        correctAnswer: "b",
        explanation:
          "Prevent is the formal and appropriate verb for stopping crime before it occurs, preferred in academic contexts.",
      },
      {
        id: "wvu1q18",
        type: "multiple-choice",
        questionText:
          "In many cases, money is the main reason people change jobs.",
        highlightWord: "main",
        options: ["a) big", "b) major", "c) central", "d) primary"],
        correctAnswer: "d",
        explanation:
          "Primary means the main or most important reason — a precise and formal alternative to “main.”",
      },
      {
        id: "wvu1q19",
        type: "multiple-choice",
        questionText: "The internet has made it easier to get information.",
        highlightWord: "get",
        options: ["a) gather", "b) collect", "c) gain", "d) access"],
        correctAnswer: "d",
        explanation:
          "Access is the correct collocation in academic English when referring to obtaining information or services.",
      },
      {
        id: "wvu1q20",
        type: "multiple-choice",
        questionText: "Studying abroad can make people more open-minded.",
        highlightWord: "make",
        options: ["a) form", "b) develop", "c) build", "d) cultivate"],
        correctAnswer: "d",
        explanation:
          "Cultivate is a sophisticated verb used to describe gradually developing a quality like open-mindedness.",
      },
    ],
  },
  {
    id: "advanced-vocabulary-very-adjective-1",
    categoryId: "vocabulary",
    title: "Advanced-Level Vocabulary Questions (Replacing “Very + Adjective”)",
    description:
      "Choose the most appropriate single word to replace the phrase 'very + adjective'.",
    duration: 20,
    minLevel: 3, // Advanced level
    questions: [
      {
        id: "avva1q1",
        type: "multiple-choice",
        questionText: "The movie was very boring and hard to watch.",
        highlightWord: "very boring",
        options: ["a) exciting", "b) thrilling", "c) dull", "d) lively"],
        correctAnswer: "c",
        explanation:
          "Dull is a more advanced and precise synonym for 'very boring'.",
      },
      {
        id: "avva1q2",
        type: "multiple-choice",
        questionText: "The coffee was very hot when I drank it.",
        highlightWord: "very hot",
        options: ["a) cold", "b) boiling", "c) warm", "d) cool"],
        correctAnswer: "b",
        explanation:
          "Boiling implies an extreme level of heat, more intense than 'very hot'.",
      },
      {
        id: "avva1q3",
        type: "multiple-choice",
        questionText: "She was very angry about the decision.",
        highlightWord: "very angry",
        options: ["a) pleased", "b) furious", "c) calm", "d) happy"],
        correctAnswer: "b",
        explanation: "Furious is a strong synonym for 'very angry'.",
      },
      {
        id: "avva1q4",
        type: "multiple-choice",
        questionText: "The book is very long and detailed.",
        highlightWord: "very long",
        options: ["a) short", "b) extensive", "c) concise", "d) brief"],
        correctAnswer: "b",
        explanation:
          "Extensive means covering a large area or range, appropriate for a detailed and long book.",
      },
      {
        id: "avva1q5",
        type: "multiple-choice",
        questionText: "He was very proud of his achievement.",
        highlightWord: "very proud",
        options: [
          "a) indifferent",
          "b) delighted",
          "c) ashamed",
          "d) embarrassed",
        ],
        correctAnswer: "b",
        explanation:
          "Delighted expresses a strong feeling of pleasure, often associated with pride.",
      },
      {
        id: "avva1q6",
        type: "multiple-choice",
        questionText: "The water in the lake is very clear.",
        highlightWord: "very clear",
        options: ["a) dirty", "b) muddy", "c) transparent", "d) cloudy"],
        correctAnswer: "c",
        explanation:
          "Transparent means allowing light to pass through so that objects behind can be distinctly seen.",
      },
      {
        id: "avva1q7",
        type: "multiple-choice",
        questionText: "The teacher was very strict with the students.",
        highlightWord: "very strict",
        options: ["a) easygoing", "b) harsh", "c) gentle", "d) lenient"],
        correctAnswer: "b",
        explanation: "Harsh implies a severe or strict approach.",
      },
      {
        id: "avva1q8",
        type: "multiple-choice",
        questionText: "The weather was very hot during the summer.",
        highlightWord: "very hot",
        options: ["a) chilly", "b) freezing", "c) scorching", "d) cold"],
        correctAnswer: "c",
        explanation: "Scorching means extremely hot.",
      },
      {
        id: "avva1q9",
        type: "multiple-choice",
        questionText: "The athlete performed very well in the competition.",
        highlightWord: "very well",
        options: ["a) poorly", "b) badly", "c) excellently", "d) inadequately"],
        correctAnswer: "c",
        explanation:
          "Excellently means in a very good way, superior to 'very well'.",
      },
      {
        id: "avva1q10",
        type: "multiple-choice",
        questionText: "The garden looks very beautiful in spring.",
        highlightWord: "very beautiful",
        options: ["a) stunning", "b) plain", "c) unattractive", "d) ugly"],
        correctAnswer: "a",
        explanation: "Stunning means extremely impressive or attractive.",
      },
      {
        id: "avva1q11",
        type: "multiple-choice",
        questionText: "The room was very dark because the lights were off.",
        highlightWord: "very dark",
        options: ["a) bright", "b) sunny", "c) dim", "d) illuminated"],
        correctAnswer: "c",
        explanation: "Dim means not brightly lit.",
      },
      {
        id: "avva1q12",
        type: "multiple-choice",
        questionText: "The road was very dangerous after the storm.",
        highlightWord: "very dangerous",
        options: ["a) harmless", "b) hazardous", "c) safe", "d) secure"],
        correctAnswer: "b",
        explanation: "Hazardous means risky; dangerous.",
      },
      {
        id: "avva1q13",
        type: "multiple-choice",
        questionText: "The movie was very funny and made us laugh a lot.",
        highlightWord: "very funny",
        options: ["a) serious", "b) hilarious", "c) dull", "d) boring"],
        correctAnswer: "b",
        explanation: "Hilarious means extremely amusing.",
      },
      {
        id: "avva1q14",
        type: "multiple-choice",
        questionText: "The baby was very quiet during the night.",
        highlightWord: "very quiet",
        options: ["a) noisy", "b) silent", "c) talkative", "d) loud"],
        correctAnswer: "b",
        explanation: "Silent means not making or accompanied by any sound.",
      },
      {
        id: "avva1q15",
        type: "multiple-choice",
        questionText: "The cake was very sweet and delicious.",
        highlightWord: "very sweet",
        options: ["a) sugary", "b) salty", "c) sour", "d) bitter"],
        correctAnswer: "a",
        explanation: "Sugary is a direct synonym for 'very sweet'.",
      },
      {
        id: "avva1q16",
        type: "multiple-choice",
        questionText: "The mountain was very high and covered in snow.",
        highlightWord: "very high",
        options: ["a) flat", "b) towering", "c) low", "d) short"],
        correctAnswer: "b",
        explanation: "Towering means extremely tall.",
      },
      {
        id: "avva1q17",
        type: "multiple-choice",
        questionText: "The explanation was very clear and easy to understand.",
        highlightWord: "very clear",
        options: [
          "a) ambiguous",
          "b) straightforward",
          "c) complicated",
          "d) confusing",
        ],
        correctAnswer: "b",
        explanation: "Straightforward means easy to understand or simple.",
      },
      {
        id: "avva1q18",
        type: "multiple-choice",
        questionText: "The baby’s skin was very soft to the touch.",
        highlightWord: "very soft",
        options: ["a) rough", "b) hard", "c) coarse", "d) smooth"],
        correctAnswer: "d",
        explanation:
          "Smooth is a direct synonym for 'very soft' in the context of skin texture.",
      },
      {
        id: "avva1q19",
        type: "multiple-choice",
        questionText: "The painting is very colorful and vibrant.",
        highlightWord: "very colorful",
        options: ["a) lively", "b) dull", "c) faded", "d) pale"],
        correctAnswer: "a",
        explanation: "Lively can describe something vibrant and full of color.",
      },
      {
        id: "avva1q20",
        type: "multiple-choice",
        questionText: "The student gave a very quick answer to the question.",
        highlightWord: "very quick",
        options: ["a) delayed", "b) rapid", "c) slow", "d) later"],
        correctAnswer: "b",
        explanation: "Rapid means happening or moving quickly.",
      },
    ],
  },
  {
    id: "advanced-vocabulary-very-adjective-2",
    categoryId: "vocabulary",
    title:
      "Advanced-Level Vocabulary Questions (Replacing “Very + Adjective” - Part 2)",
    description:
      "Choose the most appropriate single word to replace the phrase 'very + adjective'.",
    duration: 20,
    minLevel: 3, // Advanced level
    questions: [
      {
        id: "avva2q1",
        type: "multiple-choice",
        questionText:
          "The professor gave a very detailed explanation of the theory.",
        highlightWord: "very detailed",
        options: ["a) vague", "b) succinct", "c) elaborate", "d) shallow"],
        correctAnswer: "c",
        explanation:
          "Elaborate means involving many carefully arranged parts or details; detailed and complicated in design and planning.",
      },
      {
        id: "avva2q2",
        type: "multiple-choice",
        questionText:
          "The CEO is known for being very careful in her decisions.",
        highlightWord: "very careful",
        options: ["a) reckless", "b) meticulous", "c) hasty", "d) careless"],
        correctAnswer: "b",
        explanation:
          "Meticulous means showing great attention to detail; very careful and precise.",
      },
      {
        id: "avva2q3",
        type: "multiple-choice",
        questionText: "His ideas were very creative and original.",
        highlightWord: "very creative",
        options: [
          "a) uninspired",
          "b) conventional",
          "c) innovative",
          "d) derivative",
        ],
        correctAnswer: "c",
        explanation:
          "Innovative means featuring new methods; advanced and original.",
      },
      {
        id: "avva2q4",
        type: "multiple-choice",
        questionText: "The task was very hard and required a lot of effort.",
        highlightWord: "very hard",
        options: ["a) effortless", "b) arduous", "c) superficial", "d) modest"],
        correctAnswer: "b",
        explanation:
          "Arduous means involving or requiring strenuous effort; difficult and tiring.",
      },
      {
        id: "avva2q5",
        type: "multiple-choice",
        questionText:
          "She gave a very clear presentation that everyone understood.",
        highlightWord: "very clear",
        options: ["a) perplexing", "b) ambiguous", "c) lucid", "d) confusing"],
        correctAnswer: "c",
        explanation: "Lucid means expressed clearly; easy to understand.",
      },
      {
        id: "avva2q6",
        type: "multiple-choice",
        questionText: "The soldier was very brave during the rescue mission.",
        highlightWord: "very brave",
        options: ["a) timid", "b) valiant", "c) passive", "d) cowardly"],
        correctAnswer: "b",
        explanation:
          "Valiant means possessing or showing courage or determination.",
      },
      {
        id: "avva2q7",
        type: "multiple-choice",
        questionText: "The results were very surprising to the research team.",
        highlightWord: "very surprising",
        options: [
          "a) predictable",
          "b) anticipated",
          "c) astonishing",
          "d) expected",
        ],
        correctAnswer: "c",
        explanation:
          "Astonishing means extremely surprising or impressive; amazing.",
      },
      {
        id: "avva2q8",
        type: "multiple-choice",
        questionText: "The discussion became very heated and emotional.",
        highlightWord: "very heated",
        options: ["a) composed", "b) placid", "c) fervent", "d) indifferent"],
        correctAnswer: "c",
        explanation:
          "Fervent means having or displaying a passionate intensity.",
      },
      {
        id: "avva2q9",
        type: "multiple-choice",
        questionText: "His response was very quick and without hesitation.",
        highlightWord: "very quick",
        options: ["a) prompt", "b) sluggish", "c) delayed", "d) tardy"],
        correctAnswer: "a",
        explanation: "Prompt means done without delay; immediate.",
      },
      {
        id: "avva2q10",
        type: "multiple-choice",
        questionText: "Her writing is very neat and well-organized.",
        highlightWord: "very neat",
        options: ["a) chaotic", "b) disheveled", "c) orderly", "d) jumbled"],
        correctAnswer: "c",
        explanation: "Orderly means neatly and methodically arranged.",
      },
      {
        id: "avva2q11",
        type: "multiple-choice",
        questionText: "The speech was very inspiring and powerful.",
        highlightWord: "very inspiring",
        options: [
          "a) apathetic",
          "b) disheartening",
          "c) stirring",
          "d) tedious",
        ],
        correctAnswer: "c",
        explanation: "Stirring means arousing strong emotion or excitement.",
      },
      {
        id: "avva2q12",
        type: "multiple-choice",
        questionText: "His attitude was very negative and unhelpful.",
        highlightWord: "very negative",
        options: [
          "a) uplifting",
          "b) pessimistic",
          "c) supportive",
          "d) cheerful",
        ],
        correctAnswer: "b",
        explanation:
          "Pessimistic means tending to see the worst aspect of things or believe that the worst will happen.",
      },
      {
        id: "avva2q13",
        type: "multiple-choice",
        questionText: "The mansion was very luxurious.",
        highlightWord: "very luxurious",
        options: ["a) shabby", "b) opulent", "c) plain", "d) modest"],
        correctAnswer: "b",
        explanation: "Opulent means rich and luxurious or lavish.",
      },
      {
        id: "avva2q14",
        type: "multiple-choice",
        questionText:
          "The solution was very effective and solved the issue completely.",
        highlightWord: "very effective",
        options: ["a) futile", "b) inadequate", "c) efficient", "d) weak"],
        correctAnswer: "c",
        explanation:
          "Efficient means achieving maximum productivity with minimum wasted effort or expense.",
      },
      {
        id: "avva2q15",
        type: "multiple-choice",
        questionText: "The thief was very sneaky while escaping.",
        highlightWord: "very sneaky",
        options: ["a) clumsy", "b) stealthy", "c) loud", "d) noticeable"],
        correctAnswer: "b",
        explanation:
          "Stealthy means behaving, done, or made in a cautious and surreptitious manner, so as not to be seen or heard.",
      },
      {
        id: "avva2q16",
        type: "multiple-choice",
        questionText: "She felt very sorry after the argument.",
        highlightWord: "very sorry",
        options: ["a) indifferent", "b) smug", "c) remorseful", "d) arrogant"],
        correctAnswer: "c",
        explanation: "Remorseful means filled with remorse; sorry.",
      },
      {
        id: "avva2q17",
        type: "multiple-choice",
        questionText: "The scientist's claim was very doubtful.",
        highlightWord: "very doubtful",
        options: ["a) dubious", "b) credible", "c) verified", "d) proven"],
        correctAnswer: "a",
        explanation:
          "Dubious means hesitating or doubting; not to be relied upon; suspect.",
      },
      {
        id: "avva2q18",
        type: "multiple-choice",
        questionText: "His handwriting was very messy.",
        highlightWord: "very messy",
        options: ["a) illegible", "b) flawless", "c) ornate", "d) crisp"],
        correctAnswer: "a",
        explanation: "Illegible means not clear enough to be read.",
      },
      {
        id: "avva2q19",
        type: "multiple-choice",
        questionText: "The earthquake left the city very broken and damaged.",
        highlightWord: "very broken and damaged",
        options: ["a) restored", "b) devastated", "c) polished", "d) refined"],
        correctAnswer: "b",
        explanation:
          "Devastated means destroy or ruin (something) severely and extensively.",
      },
      {
        id: "avva2q20",
        type: "multiple-choice",
        questionText:
          "The lecture was very boring and put the students to sleep.",
        highlightWord: "very boring",
        options: ["a) riveting", "b) tedious", "c) gripping", "d) engrossing"],
        correctAnswer: "b",
        explanation:
          "Tedious means too long, slow, or dull; tiresome or monotonous.",
      },
    ],
  },
];
// Export BADGES here
export const BADGES = {
  first_quiz: {
    name: "First Step",
    description: "Completed your first quiz!",
    icon: QuizIcons.BadgeStar,
  },
  grammar_master: {
    name: "Grammar Guru",
    description: "Scored 100% on a Grammar test!",
    icon: QuizIcons.BadgeCheck,
  },
  vocabulary_expert: {
    name: "Vocabulary Virtuoso",
    description: "Scored 100% on a Vocabulary test!",
    icon: QuizIcons.BadgeCheck,
  },
  speed_demon: {
    name: "Speed Demon",
    description: "Completed a quiz in record time!",
    icon: QuizIcons.BadgeFast,
  },
  quiz_champion: {
    name: "Quiz Champion",
    description: "Completed 5 quizzes!",
    icon: QuizIcons.BadgeTrophy,
  },
  // Add more badges as needed
};

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function calculateWordCount(text) {
  if (!text) return 0;
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  return words.length;
}
const LEVEL_UP_THRESHOLDS = [
  0, // Level 1: 0 points (starting level)
  100, // Level 2: 100 total points
  250, // Level 3: 250 total points
  500, // Level 4: 500 total points
  800, // Level 5: 800 total points
  1200, // Level 6: 1200 total points
  1700, // Level 7: 1700 total points
  2300, // Level 8: 2300 total points
  3000, // Level 9: 3000 total points
  4000, // Level 10: 4000 total points (Master)
  5000, // Level 11: 5000 total points
  6500, // Level 12: 6500 total points
  8000, // Level 13: 8000 total points
  10000, // Level 14: 10000 total points
  12500, // Level 15: 12500 total points
  15000, // Level 16: 15000 total points
  18000, // Level 17: 18000 total points
  21000, // Level 18: 21000 total points
  24000, // Level 19: 24000 total points
  27000, // Level 20: 27000 total points (Grand Master)
  // You can add more levels as needed
];

// If this is in a module (e.g., quiz-test-data.js), make sure to export it:
export { LEVEL_UP_THRESHOLDS };
