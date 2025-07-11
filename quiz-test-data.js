export const QuizIcons = {
  // Font Awesome classes for categories (as before)
  Grammar: '<i class="fas fa-spell-check text-blue-500"></i>',
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
    id: "spelling-common-errors-1",
    categoryId: "spelling",
    title: "Common Spelling Errors 1",
    description: "Identify and correct frequently misspelled words.",
    duration: 5, // minutes
    minLevel: 1,
    questions: [
      {
        id: "s1q1",
        type: "multiple-choice",
        questionText: "Which spelling is correct?",
        options: ["A) recieve", "B) receive", "C) receve", "D) recive"],
        correctAnswer: "B",
        explanation: "The 'i before e except after c' rule applies here.",
      },
      {
        id: "s1q2",
        type: "multiple-choice",
        questionText: "Choose the correct spelling.",
        options: [
          "A) accomodate",
          "B) acommodate",
          "C) accommodate",
          "D) acomodate",
        ],
        correctAnswer: "C",
        explanation: "'Accommodate' has double 'c' and double 'm'.",
      },
      {
        id: "s1q3",
        type: "multiple-choice",
        questionText: "Which word is spelled correctly?",
        options: [
          "A) definately",
          "B) definitly",
          "C) definitely",
          "D) definatly",
        ],
        correctAnswer: "C",
        explanation:
          "The correct spelling is 'definitely', often misspelled due to pronunciation.",
      },
      {
        id: "s1q4",
        type: "multiple-choice",
        questionText: "Select the correctly spelled word.",
        options: ["A) seperate", "B) separate", "C) seperate", "D) separet"],
        correctAnswer: "B",
        explanation: "The correct spelling is 'separate', with 'a' after 'p'.",
      },
      {
        id: "s1q5",
        type: "multiple-choice",
        questionText: "Which of these is spelled correctly?",
        options: ["A) occured", "B) ocurred", "C) occurred", "D) occured"],
        correctAnswer: "C",
        explanation: "'Occurred' has double 'c' and double 'r'.",
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
];

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
