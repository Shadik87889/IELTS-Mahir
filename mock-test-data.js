// mock-test-data.js

export const MockTestModules = [
  {
    id: "listening",
    name: "Listening",
    description: "Practice your listening comprehension skills.",
    icon: '<i class="ph-bold ph-headphones"></i>',
    image: "https://placehold.co/400x200/60a5fa/ffffff?text=Listening",
    color: "bg-blue-500",
  },
  {
    id: "reading",
    name: "Reading",
    description: "Improve your reading speed and comprehension.",
    icon: '<i class="ph-bold ph-book-open"></i>',
    image: "https://placehold.co/400x200/34d399/ffffff?text=Reading",
    color: "bg-green-500",
  },
  {
    id: "writing",
    name: "Writing",
    description: "Develop your essay and report writing abilities.",
    icon: '<i class="ph-bold ph-pencil"></i>',
    image: "https://placehold.co/400x200/fcd34d/ffffff?text=Writing",
    color: "bg-yellow-500",
  },
  {
    id: "speaking",
    name: "Speaking",
    description: "Enhance your fluency and pronunciation.",
    icon: '<i class="ph-bold ph-microphone-stage"></i>',
    image: "https://placehold.co/400x200/fb7185/ffffff?text=Speaking",
    color: "bg-red-500",
  },
];

export const allMockTests = [
  {
    id: "listening-test-1",
    moduleId: "listening",
    title: "C11 LISTENING 1 AC",
    description: "A full-length Academic Listening practice test.",
    duration: 40, // minutes
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder audio
    sections: [
      {
        id: "section-1",
        title: "Part 1",
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-8</p>
              <p>Complete the form below.</p>
              <p>Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.</p>
              <p>DENHAM'S SHIPPING AGENCY</p>
              <p>Customer quotation form</p>
            `,
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Name: Tim [GAP]",
                correctAnswer: "Tim",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Address to be collected from: [GAP] University",
                correctAnswer: "2",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text: "Town: Brighton Postcode: [GAP]",
                correctAnswer: "3",
              },
            ],
          },
          {
            instructions: `
              <p class="text-base font-normal text-gray-700 mb-2">Size of container:</p>
              <div class="map-image-container">
                  <img src="assets/Screenshot 2025-07-23 103255.png" alt="Container Diagram" class="rounded-lg">
              </div>
            `,
            questions: [
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "", // Blank on new line, text is in instructions
                correctAnswer: "4",
                inputPlacement: "newline",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "", // Blank on new line
                correctAnswer: "5",
                inputPlacement: "newline",
              },
            ],
          },
          {
            instructions: `
              <p class="text-base font-normal text-gray-700 mb-2">Contents: books</p>
            `,
            questions: [
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "", // Blank on new line
                correctAnswer: "6",
                inputPlacement: "newline",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "", // Blank on new line
                correctAnswer: "7",
                inputPlacement: "newline",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "Total estimated value: £ [GAP]",
                correctAnswer: "8",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 9-10</p>
              <p>Choose the correct letter, A, B, or C.</p>
            `,
            questions: [
              {
                id: "q9",
                questionNumber: 9,
                type: "mcq",
                text: "What is the minimum recommended cover by delivered?",
                options: ["A. Premium", "B. Standard", "C. Economy"],
                correctAnswer: "B. Standard",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "mcq",
                text: "Where does the customer want the goods the agency?",
                options: ["A. Port", "B. Home", "C. Business"],
                correctAnswer: "B. Home",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Part 2",
        image: "assets/loc-diagram.png", // This image is for the entire section, like the map
        questionGroups: [
          {
            instructions: `
              <p>Questions 11-15</p>
              <p>Label the plan below.</p>
              <p>Write NO MORE THAN THREE WORDS for each answer.</p>
            `,
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "map_labeling",
                text: "Entrance [GAP]",
                correctAnswer: "Ticket Centre and 11", // Placeholder
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "map_labeling",
                text: "[GAP]",
                correctAnswer: "12", // Placeholder
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "map_labeling",
                text: "[GAP]",
                correctAnswer: "13", // Placeholder
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "map_labeling",
                text: "[GAP]",
                correctAnswer: "14", // Placeholder
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "map_labeling",
                text: "[GAP]",
                correctAnswer: "15", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 16-20</p>
              <p>What does the tour guide tell her tour group about each of the following places on the day’s itinerary?</p>
              <p>Write the correct letter, A, B, or C next to questions 16 - 20 below.</p>
              <p>A. They'll definitely go there.</p>
              <p>B. They might go there if time allows.</p>
              <p>C. They certainly won't go there.</p>
              <p>N.B: You may choose any letter more than once.</p>
            `,
            questions: [
              {
                id: "q16",
                questionNumber: 16,
                type: "mcq",
                text: "Solana Country Club",
                options: [
                  "A. They'll definitely go there.",
                  "B. They might go there if time allows.",
                  "C. They certainly won't go there.",
                ],
                correctAnswer: "A. They'll definitely go there.", // Placeholder
              },
              {
                id: "q17",
                questionNumber: 17,
                type: "mcq",
                text: "Milltown Winery",
                options: [
                  "A. They'll definitely go there.",
                  "B. They might go there if time allows.",
                  "C. They certainly won't go there.",
                ],
                correctAnswer: "B. They might go there if time allows.", // Placeholder
              },
              {
                id: "q18",
                questionNumber: 18,
                type: "mcq",
                text: "The Aquarium",
                options: [
                  "A. They'll definitely go there.",
                  "B. They might go there if time allows.",
                  "C. They certainly won't go there.",
                ],
                correctAnswer: "C. They certainly won't go there.", // Placeholder
              },
              {
                id: "q19",
                questionNumber: 19,
                type: "mcq",
                text: "The Zoological Gardens",
                options: [
                  "A. They'll definitely go there.",
                  "B. They might go there if time allows.",
                  "C. They certainly won't go there.",
                ],
                correctAnswer: "A. They'll definitely go there.", // Placeholder
              },
              {
                id: "q20",
                questionNumber: 20,
                type: "mcq",
                text: "The Stout Brewery",
                options: [
                  "A. They'll definitely go there.",
                  "B. They might go there if time allows.",
                  "C. They certainly won't go there.",
                ],
                correctAnswer: "B. They might go there if time allows.", // Placeholder
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Part 3",
        questionGroups: [
          {
            instructions: `
              <p>Questions 21-25</p>
              <p>Complete the sentences below.</p>
              <p>Write NO MORE THAN TWO WORDS for each answer.</p>
            `,
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "fill_in_the_blank",
                text:
                  "Gyroscopes are used in laser devices and are found in many consumer [GAP]",
                correctAnswer: "products",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "fill_in_the_blank",
                text:
                  "The purpose of the project is to design a functional [GAP] and beneficial consumer product.",
                correctAnswer: "new",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "fill_in_the_blank",
                text:
                  "The gyroscopic exercise ball can be set in motion by movements of the [GAP] and wrist together in synch.",
                correctAnswer: "hand",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "fill_in_the_blank",
                text:
                  "The gyroscopic ball could help people in [GAP] who have lower-arm injuries.",
                correctAnswer: "rehabilitation",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "fill_in_the_blank",
                text:
                  "The product could also be aimed at [GAP] for whom lower-arm strength is very important.",
                correctAnswer: "athletes",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 26-30.</p>
              <p>Complete the table below.</p>
              <p>Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.</p>
            `,
            questions: [
              {
                id: "q26-30-table", // Single ID for the entire table question group
                questionNumber: 26, // Starting question number for this table group
                type: "table_fill_in_the_blank",
                tableData: [
                  // Header Row
                  ["", "Prototype Design", "Testing"],
                  // Data Rows - Each array represents a table row
                  // The content of cells directly reflects the image, with [INPUT] for blanks
                  ["Estimated Cost", "£ 3,000", "£ 26. [INPUT]"],
                  ["Number of Weeks", "27. [INPUT]", ""],
                  ["", "Number of test subjects", "28. [INPUT]"],
                  ["", "Breakdown of test subjects", "5 professional athletes"],
                  ["", "", "5 29. [INPUT]"],
                  ["", "", "30. [INPUT]"],
                ],
                correctAnswer: {
                  // Correct answers for each sub-question in the table
                  q26: "3000", // Example answer, update as needed
                  q27: "5", // Example answer, update as needed
                  q28: "10", // Example answer, update as needed
                  q29: "rehabilitation patients", // Example answer, update as needed
                  q30: "strength training", // Example answer, update as needed
                },
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Part 4",
        questionGroups: [
          {
            instructions: `
              <p>Questions 31-35</p>
              <p>Choose the correct letter, A, B or C.</p>
            `,
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "mcq",
                text: "Speakers have to know",
                options: [
                  "A. Their material.",
                  "B. Their audience.",
                  "C. Their limitations.",
                ],
                correctAnswer: "A. Their material.", // Placeholder
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "mcq",
                text: "Experienced speakers",
                options: [
                  "A. always try to wing it.",
                  "B. Never arrive unprepared.",
                  "C. Give the best presentations.",
                ],
                correctAnswer: "B. Never arrive unprepared.", // Placeholder
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "mcq",
                text: "You should always rehearse",
                options: [
                  "A. With friends who can advise you.",
                  "B. With all the equipment you plan on using.",
                  "C. More than once.",
                ],
                correctAnswer: "B. With all the equipment you plan on using.", // Placeholder
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "mcq",
                text: "It is a good idea to",
                options: [
                  "A. Be discreet with your audience.",
                  "B. Meet your fans.",
                  "C. Meet and welcome your audience.",
                ],
                correctAnswer: "C. Meet and welcome your audience.", // Placeholder
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "mcq",
                text: "Taking a few deep breaths before you begin",
                options: [
                  "A. Will stop you having a panic attack.",
                  "B. Will guarantee that you feel more relaxed.",
                  "C. Will help turn your tension into enthusiasm.",
                ],
                correctAnswer:
                  "C. Will help turn your tension into enthusiasm.", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 36-40</p>
              <p>Complete the sentences below.</p>
              <p>Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.</p>
            `,
            questions: [
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "Useful Tips for a Successful Presentation: Try to [GAP] yourself making a speech and imagine your voice loud and confident.",
                correctAnswer: "visualize", // Placeholder
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text: "Even if you make mistakes avoid making [GAP]",
                correctAnswer: "apologies", // Placeholder
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "Pay attention to your [GAP] - your words carry less meaning than your delivery.",
                correctAnswer: "delivery", // Placeholder
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "People usually remember less than [GAP] of what they hear.",
                correctAnswer: "half", // Placeholder
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "Be [GAP] about yourself; you don't become a perfect speaker overnight.",
                correctAnswer: "patient", // Placeholder
              },
            ],
          },
        ],
      },
    ],
  },
];

export const MockTestIcons = {
  // Icons for mock test specific UI elements
  Clock: '<i class="ph-bold ph-clock text-red-500"></i>',
  Flag: '<i class="ph-bold ph-flag text-white"></i>',
  Trophy: '<i class="ph-bold ph-trophy text-yellow-300"></i>',
  ChartBar: '<i class="ph-bold ph-chart-bar text-blue-600"></i>',
  ThumbsUp: '<i class="ph-bold ph-thumbs-up text-green-600"></i>',
  Warning: '<i class="ph-bold ph-warning-circle text-red-600"></i>',
  Badge: '<i class="ph-bold ph-medal text-yellow-600"></i>',
  Review: '<i class="ph-bold ph-chat-circle-text text-gray-600"></i>',
  Leaderboard: '<i class="ph-bold ph-list-numbers text-gray-600"></i>',
  QuestionMark: '<i class="ph-bold ph-question text-gray-600"></i>',
  Home: '<i class="ph-bold ph-house text-white"></i>',
  ChevronLeft: '<i class="ph-bold ph-caret-left text-gray-800"></i>',
  ChevronRight: '<i class="ph-bold ph-caret-right text-white"></i>',
  SignIn: '<i class="ph-bold ph-sign-in text-white"></i>',
  CheckCircle: '<i class="fa-solid fa-circle-check text-green-500"></i>',
  XCircle: '<i class="fa-solid fa-circle-xmark text-red-500"></i>',
  InfoCircle: '<i class="fa-solid fa-circle-info text-blue-500"></i>',
  // Badges specific to mock tests
  BadgeStar: '<i class="ph-bold ph-star text-yellow-500"></i>',
  BadgeCheck: '<i class="ph-bold ph-seal-check text-green-500"></i>',
  BadgeFast: '<i class="ph-bold ph-lightning text-orange-500"></i>',
  BadgeTrophy: '<i class="ph-bold ph-trophy text-amber-500"></i>',
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

export const MOCK_TEST_LEVEL_UP_THRESHOLDS = [
  0, // Level 1: 0 points (starting level)
  200, // Level 2: 200 total points
  500, // Level 3: 500 total points
  1000, // Level 4: 1000 total points
  1800, // Level 5: 1800 total points
  2800, // Level 6: 2800 total points
  4000, // Level 7: 4000 total points
  5500, // Level 8: 5500 total points
  7500, // Level 9: 7500 total points
  10000, // Level 10: 10000 total points (Master)
];

export const MOCK_TEST_BADGES = {
  first_mock_test: {
    name: "First Mock Test",
    description: "Completed your first full mock test!",
    icon: MockTestIcons.BadgeStar,
  },
  listening_ace: {
    name: "Listening Ace",
    description: "Achieved a perfect score in a Listening mock test!",
    icon: MockTestIcons.BadgeCheck,
  },
  reading_pro: {
    name: "Reading Pro",
    description: "Achieved a perfect score in a Reading mock test!",
    icon: MockTestIcons.BadgeCheck,
  },
  speed_demon: {
    name: "Speed Demon (Mock)",
    description:
      "Completed a mock test significantly faster than the duration!",
    icon: MockTestIcons.BadgeFast,
  },
  // Add more mock test specific badges here
};
