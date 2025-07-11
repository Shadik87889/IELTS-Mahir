// mock-test-data.js

/**
 * @file This file contains all the mock test data for IELTS Listening, Reading, Writing, and Speaking modules,
 * along with utility functions for time formatting and word counting.
 * It also includes common CSS styles and SVG icons.
 */

// --- 1. Mock Test Definitions ---
/**
 * Defines all available mock tests. Each test has an ID, title, module, and specific audio files if it's a Listening test.
 * @type {Array<Object>}
 */
export const allMockTests = [
  {
    id: "L_M_1",
    title: "Listening Mock Test 1: Daily Life and Academic Lectures",
    module: "listening",
    audioFiles: [
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Part 1
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Part 2
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Part 3
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Part 4
    ],
  },
  {
    id: "L_M_2",
    title: "Listening Mock Test 2: Social Conversations and University Talks",
    module: "listening",
    audioFiles: [
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", // Part 1
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", // Part 2
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", // Part 3
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", // Part 4
    ],
  },
  {
    id: "R_M_1",
    title: "Reading Mock Test 1: General Training - Sections 1-3",
    module: "reading",
  },
  {
    id: "R_M_2",
    title: "Reading Mock Test 2: Academic - Passages 1-3",
    module: "reading",
  },
  {
    id: "W_M_1",
    title: "Writing Mock Test 1: Academic - Tasks 1 & 2",
    module: "writing",
  },
  {
    id: "W_M_2",
    title: "Writing Mock Test 2: General Training - Tasks 1 & 2",
    module: "writing",
  },
  {
    id: "S_M_1",
    title: "Speaking Mock Test 1: General Interview & Cue Card",
    module: "speaking",
  },
  {
    id: "S_M_2",
    title: "Speaking Mock Test 2: Abstract Discussion & Personal Experience",
    module: "speaking",
  },
];

// --- 2. Listening Questions ---
/**
 * Comprehensive list of IELTS Listening questions.
 * Each question has an ID, type, question text, and correct answer.
 * IDs are structured (e.g., L1, L2) to allow filtering by test.
 * L1-L40 for Test 1, L41-L80 for Test 2.
 * @type {Array<Object>}
 */
export const listeningQuestions = [
  // --- Listening Mock Test 1 (L1-L40) ---
  // Part 1: Conversation (Questions 1-10) - Form Completion / Note Completion
  {
    id: "L1",
    type: "form-completion",
    questionText: "Complete the form below.",
    audioPrompt: "Listen to a conversation about booking a holiday.",
    gaps: [
      { number: 1, text: "Destination: Melbourne" },
      { number: 2, text: "Departure Date: 15th" },
      { number: 3, text: "Number of people: 2 adults and 1" },
      { number: 4, text: "Accommodation: The" },
      { number: 5, text: "Contact Number: 07700" },
    ],
    correctAnswers: {
      1: "January",
      2: "February",
      3: "child",
      4: "Grand Hotel",
      5: "900789",
    },
  },
  {
    id: "L6",
    type: "short-answer",
    questionText: "What is the main reason for the customer's call today?",
    correctAnswer: "booking a holiday",
    audioPrompt: "Listen to a conversation about booking a holiday.",
  },
  {
    id: "L7",
    type: "multiple-choice",
    questionText: "What type of accommodation does the customer prefer?",
    options: ["A. Hotel", "B. Apartment", "C. Villa"],
    correctAnswer: "A",
    audioPrompt: "Listen to a conversation about booking a holiday.",
  },
  {
    id: "L8",
    type: "sentence-completion",
    questionText: "The customer is interested in a trip to __________.",
    correctAnswer: "Australia",
    audioPrompt: "Listen to a conversation about booking a holiday.",
  },
  {
    id: "L9",
    type: "short-answer",
    questionText: "What is the total cost of the trip?",
    correctAnswer: "$2500",
    audioPrompt: "Listen to a conversation about booking a holiday.",
  },
  {
    id: "L10",
    type: "fill-in-the-blank",
    questionText: "The customer needs to pay a deposit of __________.",
    correctAnswer: "$500",
    audioPrompt: "Listen to a conversation about booking a holiday.",
  },

  // Part 2: Monologue (Questions 11-20) - Map Labelling / Multiple Choice
  {
    id: "L11",
    type: "map-labelling",
    questionText: "Label the map of the park below.",
    instruction:
      "Choose the correct letters A-H and write them next to questions 11-15.",
    imageUrl: "https://placehold.co/400x300/e0e0e0/333333?text=Park+Map",
    imageAlt: "Map of a park with numbered locations",
    labels: [
      { number: 11, label: "Café" },
      { number: 12, label: "Playground" },
      { number: 13, label: "Rose Garden" },
      { number: 14, label: "Tennis Courts" },
      { number: 15, label: "Main Entrance" },
    ],
    correctAnswers: {
      "L11-11": "C",
      "L11-12": "E",
      "L11-13": "A",
      "L11-14": "G",
      "L11-15": "B",
    },
    audioPrompt: "Listen to a guide describing a public park.",
  },
  {
    id: "L16",
    type: "multiple-choice",
    questionText: "What is the main purpose of the talk?",
    options: [
      "A. To introduce new park facilities",
      "B. To provide a historical overview of the park",
      "C. To guide visitors around the park",
    ],
    correctAnswer: "C",
    audioPrompt: "Listen to a guide describing a public park.",
  },
  {
    id: "L17",
    type: "multiple-choice",
    questionText: "Which activity is NOT allowed in the park?",
    options: ["A. Cycling", "B. Dog walking", "C. Picnics"],
    correctAnswer: "B",
    audioPrompt: "Listen to a guide describing a public park.",
  },
  {
    id: "L18",
    type: "short-answer",
    questionText: "What is the name of the nearest bus stop?",
    correctAnswer: "Central Avenue",
    audioPrompt: "Listen to a guide describing a public park.",
  },
  {
    id: "L19",
    type: "sentence-completion",
    questionText:
      "The park is particularly famous for its collection of __________.",
    correctAnswer: "rare birds",
    audioPrompt: "Listen to a guide describing a public park.",
  },
  {
    id: "L20",
    type: "fill-in-the-blank",
    questionText: "Visitors can rent boats from the __________.",
    correctAnswer: "boathouse",
    audioPrompt: "Listen to a guide describing a public park.",
  },

  // Part 3: Conversation (Questions 21-30) - Matching / Multiple Choice Multi
  {
    id: "L21",
    type: "matching",
    questionText: "What is the main topic of each student's presentation?",
    instruction:
      "Choose FIVE answers from the box and write the correct letter, A-H, next to questions 21-25.",
    items: ["21. Sarah", "22. Mark", "23. Emily", "24. David", "25. Chloe"],
    options: [
      "A. Climate Change",
      "B. Renewable Energy",
      "C. Urban Planning",
      "D. Water Conservation",
      "E. Sustainable Agriculture",
      "F. Waste Management",
      "G. Public Transport",
      "H. Green Architecture",
    ],
    correctMapping: {
      "21. Sarah": "D",
      "22. Mark": "B",
      "23. Emily": "F",
      "24. David": "A",
      "25. Chloe": "H",
    },
    audioPrompt: "Listen to two students discussing their research projects.",
  },
  {
    id: "L26",
    type: "multiple-choice-multi",
    questionText:
      "Which TWO challenges do the students mention about group work?",
    options: [
      "A. Difficulty in scheduling meetings",
      "B. Disagreements over research methods",
      "C. Unequal contribution from members",
      "D. Lack of clear leadership",
      "E. Finding relevant resources",
    ],
    correctAnswer: ["A", "C"],
    audioPrompt: "Listen to two students discussing their research projects.",
  },
  {
    id: "L28",
    type: "short-answer",
    questionText:
      "What is the professor's main advice for their presentations?",
    correctAnswer: "focus on practical solutions",
    audioPrompt: "Listen to two students discussing their research projects.",
  },
  {
    id: "L29",
    type: "sentence-completion",
    questionText:
      "The students need to submit their final report by the end of __________.",
    correctAnswer: "next week",
    audioPrompt: "Listen to two students discussing their research projects.",
  },
  {
    id: "L30",
    type: "fill-in-the-blank",
    questionText: "They decided to meet again on __________.",
    correctAnswer: "Friday",
    audioPrompt: "Listen to two students discussing their research projects.",
  },

  // Part 4: Monologue (Questions 31-40) - Summary Completion / Note Completion
  {
    id: "L31",
    type: "summary-completion-text",
    questionText: "Complete the summary below.",
    audioPrompt: "Listen to a lecture on the history of chocolate.",
    gaps: [
      {
        number: 31,
        text:
          "Chocolate originated in ancient Mesoamerica, where it was consumed as a bitter __________.",
      },
      {
        number: 32,
        text:
          "The Maya and Aztec civilizations used cocoa beans as a form of __________.",
      },
      {
        number: 33,
        text:
          "When chocolate arrived in Europe, it was initially a drink for the __________.",
      },
      {
        number: 34,
        text: "The first chocolate bar was created in the __________ century.",
      },
      {
        number: 35,
        text:
          "Today, chocolate is a global industry, but concerns remain about ethical __________ practices.",
      },
    ],
    correctAnswers: {
      31: "drink",
      32: "currency",
      33: "elite",
      34: "19th",
      35: "sourcing",
    },
  },
  {
    id: "L36",
    type: "multiple-choice",
    questionText:
      "What was the primary use of cocoa beans in ancient civilizations?",
    options: [
      "A. Sweet dessert",
      "B. Medicinal purposes",
      "C. Ritualistic drink",
    ],
    correctAnswer: "C",
    audioPrompt: "Listen to a lecture on the history of chocolate.",
  },
  {
    id: "L37",
    type: "short-answer",
    questionText: "Which European country first introduced chocolate?",
    correctAnswer: "Spain",
    audioPrompt: "Listen to a lecture on the history of chocolate.",
  },
  {
    id: "L38",
    type: "sentence-completion",
    questionText:
      "The industrial revolution made chocolate __________ to the general public.",
    correctAnswer: "accessible",
    audioPrompt: "Listen to a lecture on the history of chocolate.",
  },
  {
    id: "L39",
    type: "fill-in-the-blank",
    questionText:
      "Modern chocolate production often involves the addition of __________ and sugar.",
    correctAnswer: "milk",
    audioPrompt: "Listen to a lecture on the history of chocolate.",
  },
  {
    id: "L40",
    type: "multiple-choice",
    questionText: "What is a current challenge facing the chocolate industry?",
    options: [
      "A. Lack of demand",
      "B. Supply chain issues",
      "C. Overproduction",
    ],
    correctAnswer: "B",
    audioPrompt: "Listen to a lecture on the history of chocolate.",
  },

  // --- Listening Mock Test 2 (L41-L80) ---
  // Part 1: Conversation (Questions 41-50) - Note Completion / Short Answer
  {
    id: "L41",
    type: "note-completion",
    questionText: "Complete the notes below about a library membership.",
    audioPrompt: "Listen to a conversation about joining a local library.",
    gaps: [
      { number: 41, text: "Name: Sarah" },
      { number: 42, text: "Address: 24" },
      { number: 43, text: "Postcode: SW1A" },
      { number: 44, text: "Date of Birth: 15th July" },
      { number: 45, text: "Type of membership: Full" },
    ],
    correctAnswers: {
      41: "Jenkins",
      42: "Oak Street",
      43: "0AA",
      44: "1995",
      45: "annual",
    },
  },
  {
    id: "L46",
    type: "short-answer",
    questionText: "What document is required to prove address?",
    correctAnswer: "utility bill",
    audioPrompt: "Listen to a conversation about joining a local library.",
  },
  {
    id: "L47",
    type: "multiple-choice",
    questionText: "How many books can a new member borrow at a time?",
    options: ["A. Two", "B. Four", "C. Six"],
    correctAnswer: "B",
    audioPrompt: "Listen to a conversation about joining a local library.",
  },
  {
    id: "L48",
    type: "sentence-completion",
    questionText: "The library offers free __________ classes on Saturdays.",
    correctAnswer: "computer",
    audioPrompt: "Listen to a conversation about joining a local library.",
  },
  {
    id: "L49",
    type: "fill-in-the-blank",
    questionText: "The library is open until __________ on weekdays.",
    correctAnswer: "7 PM",
    audioPrompt: "Listen to a conversation about joining a local library.",
  },
  {
    id: "L50",
    type: "short-answer",
    questionText: "What is the annual membership fee?",
    correctAnswer: "$30",
    audioPrompt: "Listen to a conversation about joining a local library.",
  },

  // Part 2: Monologue (Questions 51-60) - Diagram Labelling / Multiple Choice
  {
    id: "L51",
    type: "diagram-labelling",
    questionText: "Label the parts of the new university building.",
    instruction:
      "Choose the correct letters A-G and write them next to questions 51-55.",
    imageUrl: "https://placehold.co/400x300/e0e0e0/333333?text=Building+Plan",
    imageAlt: "Diagram of a university building plan",
    labels: [
      { number: 51, label: "Lecture Theatre" },
      { number: 52, label: "Student Lounge" },
      { number: 53, label: "Library" },
      { number: 54, label: "Cafeteria" },
      { number: 55, label: "Main Entrance" },
    ],
    correctAnswers: {
      "L51-51": "D",
      "L51-52": "A",
      "L51-53": "F",
      "L51-54": "B",
      "L51-55": "C",
    },
    audioPrompt:
      "Listen to a university administrator giving a tour of a new building.",
  },
  {
    id: "L56",
    type: "multiple-choice",
    questionText: "What is unique about the building's design?",
    options: [
      "A. It uses recycled materials.",
      "B. It has a green roof.",
      "C. It features a modern art collection.",
    ],
    correctAnswer: "B",
    audioPrompt:
      "Listen to a university administrator giving a tour of a new building.",
  },
  {
    id: "L57",
    type: "multiple-choice",
    questionText: "Which service is available on the ground floor?",
    options: ["A. Bookshop", "B. IT Support", "C. Career Services"],
    correctAnswer: "A",
    audioPrompt:
      "Listen to a university administrator giving a tour of a new building.",
  },
  {
    id: "L58",
    type: "short-answer",
    questionText: "What is the capacity of the largest lecture theatre?",
    correctAnswer: "200",
    audioPrompt:
      "Listen to a university administrator giving a tour of a new building.",
  },
  {
    id: "L59",
    type: "sentence-completion",
    questionText: "Students can access the building using their __________.",
    correctAnswer: "ID cards",
    audioPrompt:
      "Listen to a university administrator giving a tour of a new building.",
  },
  {
    id: "L60",
    type: "fill-in-the-blank",
    questionText: "The building officially opens on __________.",
    correctAnswer: "September 1st",
    audioPrompt:
      "Listen to a university administrator giving a tour of a new building.",
  },

  // Part 3: Conversation (Questions 61-70) - Table Completion / Multiple Choice Multi
  {
    id: "L61",
    type: "table-completion",
    questionText: "Complete the table about student projects.",
    audioPrompt:
      "Listen to a conversation between a tutor and two students about their project.",
    table: {
      headers: ["Student Name", "Project Topic", "Deadline"],
      rows: [
        ["Maria", "Renewable Energy", "61. "],
        ["Tom", "62. ", "Next Friday"],
        ["63. ", "Sustainable Tourism", "64. "],
      ],
    },
    correctAnswers: {
      61: "Wednesday",
      62: "Urban Farming",
      63: "Lena",
      64: "End of Month",
    },
  },
  {
    id: "L65",
    type: "multiple-choice-multi",
    questionText:
      "Which TWO aspects should students focus on for their presentations?",
    options: [
      "A. Visual aids",
      "B. Detailed statistics",
      "C. Personal anecdotes",
      "D. Practical applications",
      "E. Academic theories",
    ],
    correctAnswer: ["A", "D"],
    audioPrompt:
      "Listen to a conversation between a tutor and two students about their project.",
  },
  {
    id: "L67",
    type: "short-answer",
    questionText: "What is the maximum length for each presentation?",
    correctAnswer: "15 minutes",
    audioPrompt:
      "Listen to a conversation between a tutor and two students about their project.",
  },
  {
    id: "L68",
    type: "sentence-completion",
    questionText:
      "The tutor suggests using __________ to make the data more engaging.",
    correctAnswer: "infographics",
    audioPrompt:
      "Listen to a conversation between a tutor and two students about their project.",
  },
  {
    id: "L69",
    type: "fill-in-the-blank",
    questionText:
      "Students can book a consultation with the tutor on __________.",
    correctAnswer: "Tuesday",
    audioPrompt:
      "Listen to a conversation between a tutor and two students about their project.",
  },
  {
    id: "L70",
    type: "multiple-choice",
    questionText: "What is the tutor's final piece of advice?",
    options: [
      "A. Practice their timing",
      "B. Research more deeply",
      "C. Collaborate more",
    ],
    correctAnswer: "A",
    audioPrompt:
      "Listen to a conversation between a tutor and two students about their project.",
  },

  // Part 4: Monologue (Questions 71-80) - Flow-chart Completion / Multiple Choice
  {
    id: "L71",
    type: "flow-chart-completion",
    questionText:
      "Complete the flow-chart below showing the process of water purification.",
    audioPrompt: "Listen to a lecture on water purification methods.",
    gaps: [
      { number: 71, text: "Source Water Collection" },
      { number: 72, text: "Coagulation and Flocculation (adding chemicals)" },
      { number: 73, text: "Sedimentation (heavy particles settle)" },
      { number: 74, text: "Filtration (water passes through sand and gravel)" },
      { number: 75, text: "Disinfection (adding chlorine or UV light)" },
    ],
    correctAnswers: {
      71: "Reservoir",
      72: "Alum",
      73: "Clarifier",
      74: "Sand Filters",
      75: "Chlorination",
    },
  },
  {
    id: "L76",
    type: "multiple-choice",
    questionText: "What is the primary goal of coagulation?",
    options: [
      "A. To remove large debris",
      "B. To make small particles clump together",
      "C. To kill bacteria",
    ],
    correctAnswer: "B",
    audioPrompt: "Listen to a lecture on water purification methods.",
  },
  {
    id: "L77",
    type: "short-answer",
    questionText:
      "What material is typically used in the final filtration stage?",
    correctAnswer: "charcoal",
    audioPrompt: "Listen to a lecture on water purification methods.",
  },
  {
    id: "L78",
    type: "sentence-completion",
    questionText: "Chlorine is added to water to __________.",
    correctAnswer: "kill microorganisms",
    audioPrompt: "Listen to a lecture on water purification methods.",
  },
  {
    id: "L79",
    type: "fill-in-the-blank",
    questionText:
      "The purified water is then stored in a __________ before distribution.",
    correctAnswer: "clearwell",
    audioPrompt: "Listen to a lecture on water purification methods.",
  },
  {
    id: "L80",
    type: "multiple-choice",
    questionText:
      "What is a potential disadvantage of using chlorine for disinfection?",
    options: [
      "A. It is very expensive.",
      "B. It can produce harmful byproducts.",
      "C. It does not kill all viruses.",
    ],
    correctAnswer: "B",
    audioPrompt: "Listen to a lecture on water purification methods.",
  },
];

// --- 3. Reading Passages ---
/**
 * Comprehensive list of IELTS Reading passages.
 * Each passage has an ID, title, text, and an array of questions.
 * Questions are embedded within their respective passages.
 * R1-R13 for Test 1 (General Training), R14-R26 for Test 2 (Academic).
 * @type {Array<Object>}
 */
export const readingPassages = [
  // --- Reading Mock Test 1 (General Training) ---
  {
    id: "R_M_1_P1",
    testId: "R_M_1",
    title: "The Benefits of Volunteering",
    text: `Volunteering offers a wide range of benefits, not only to the communities it serves but also to the volunteers themselves. Engaging in voluntary work can significantly boost an individual's well-being and personal development.

Firstly, volunteering provides an excellent opportunity to acquire new skills. Whether it's learning how to organise events, manage finances, or communicate effectively with diverse groups of people, the practical experience gained is invaluable. These skills are often transferable to professional settings, enhancing career prospects. For instance, someone volunteering at a local charity might develop strong leadership and problem-solving abilities.

Secondly, volunteering helps in expanding one's social network. By working alongside like-minded individuals, volunteers can form new friendships and professional connections. This sense of community and belonging can combat feelings of isolation and improve mental health. Many volunteers report feeling more connected to their local area and a greater sense of purpose.

Furthermore, contributing to a cause greater than oneself can lead to immense personal satisfaction and a feeling of accomplishment. Knowing that one's efforts are making a tangible difference to others' lives is a powerful motivator and a source of deep contentment. This positive emotional impact can reduce stress and increase overall happiness.

Finally, volunteering can offer a fresh perspective on life. It often exposes individuals to different social issues and challenges, fostering empathy and understanding. This broadened worldview can lead to a greater appreciation for one's own circumstances and a desire to contribute further to societal improvement.`,
    questions: [
      {
        id: "R1",
        type: "true-false-not-given",
        questionText: "Volunteering primarily benefits the community.",
        statement: "Volunteering primarily benefits the community.",
        correctAnswer: "False", // It benefits both community and volunteers
      },
      {
        id: "R2",
        type: "short-answer",
        questionText:
          "Name one type of skill that can be gained through volunteering.",
        correctAnswer: "organising events",
      },
      {
        id: "R3",
        type: "sentence-completion",
        questionText: "Volunteering can help combat feelings of __________.",
        correctAnswer: "isolation",
      },
      {
        id: "R4",
        type: "multiple-choice",
        questionText: "What is a key emotional benefit of volunteering?",
        options: [
          "A. Increased income",
          "B. Feeling of accomplishment",
          "C. Reduced workload",
        ],
        correctAnswer: "B",
      },
      {
        id: "R5",
        type: "true-false-not-given",
        questionText: "Volunteering always leads to immediate job offers.",
        statement: "Volunteering always leads to immediate job offers.",
        correctAnswer: "Not Given",
      },
      {
        id: "R6",
        type: "fill-in-the-blank",
        questionText: "Volunteering can foster __________ and understanding.",
        correctAnswer: "empathy",
      },
    ],
  },
  {
    id: "R_M_1_P2",
    testId: "R_M_1",
    title: "Job Advertisements",
    text: `**A. Customer Service Assistant - Part-time**
A busy retail store in the city centre is seeking a friendly and enthusiastic Customer Service Assistant. Duties include assisting customers with queries, processing sales, and maintaining a tidy store environment. Previous retail experience is preferred but not essential, as full training will be provided. Must be available to work weekends and some evenings. Excellent communication skills are a must. Apply with CV to jobs@retailstore.com.

**B. Office Administrator - Full-time**
A dynamic marketing agency requires an experienced Office Administrator. Responsibilities include managing office supplies, scheduling appointments, handling correspondence, and supporting the team with various administrative tasks. Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint) is mandatory. Candidates should be highly organised and able to work independently. Send your application to hr@marketingagency.co.uk.

**C. Volunteer Coordinator - Flexible Hours**
A non-profit organisation supporting local communities is looking for a dedicated Volunteer Coordinator. This role involves recruiting, training, and managing volunteers for various community projects. Strong interpersonal skills and a passion for community work are essential. Experience in volunteer management is desirable. This is a voluntary position, but expenses are covered. Email: volunteer@communityaid.org.

**D. Graphic Designer - Freelance**
We are a growing startup in need of a talented freelance Graphic Designer for a range of projects, including website design, branding, and marketing materials. Candidates must have a strong portfolio demonstrating creativity and proficiency in design software (e.g., Adobe Creative Suite). This is a project-based role with flexible deadlines. Submit your portfolio and rates to design@startupinnovate.net.`,
    questions: [
      {
        id: "R7",
        type: "matching-information",
        questionText: "Which advertisement mentions:",
        prompt:
          "Match the statements below with the correct advertisement (A-D).",
        items: [
          "7. A role where previous experience is not strictly necessary.",
          "8. A position that covers travel costs.",
          "9. A requirement for strong computer software skills.",
          "10. A job that involves working on weekends.",
        ],
        correctMapping: {
          "7. A role where previous experience is not strictly necessary.": "A",
          "8. A position that covers travel costs.": "C",
          "9. A requirement for strong computer software skills.": "B",
          "10. A job that involves working on weekends.": "A",
        },
      },
      {
        id: "R11",
        type: "short-answer",
        questionText: "Which advertisement is for a non-paid position?",
        correctAnswer: "C",
      },
      {
        id: "R12",
        type: "multiple-choice",
        questionText: "Which role requires a portfolio?",
        options: [
          "A. Customer Service Assistant",
          "B. Office Administrator",
          "C. Graphic Designer",
        ],
        correctAnswer: "C",
      },
      {
        id: "R13",
        type: "fill-in-the-blank",
        questionText:
          "The Office Administrator role is described as being in a __________ agency.",
        correctAnswer: "marketing",
      },
    ],
  },
  {
    id: "R_M_1_P3",
    testId: "R_M_1",
    title: "The History of Tea in Britain",
    text: `Tea, a beverage now synonymous with British culture, has a fascinating history that spans centuries. Originally cultivated in China, tea made its way to Europe in the 17th century, primarily through Dutch traders. However, it was in Britain that tea truly became a national obsession.

The introduction of tea to Britain is often credited to Catherine of Braganza, the Portuguese wife of King Charles II, in the 1660s. She brought her love for tea to the English court, and soon, it became fashionable among the aristocracy. Initially, tea was an expensive luxury, affordable only to the wealthy elite. Its high price was due to import duties and the long, perilous journey from Asia.

By the 18th century, as import volumes increased and prices gradually fell, tea became more accessible. Coffee houses, which had been popular social hubs, began to face competition from tea gardens and tea rooms. These establishments offered a more refined and often family-friendly atmosphere. The British East India Company played a crucial role in expanding tea trade, establishing vast plantations in India to meet the burgeoning demand.

The 19th century saw tea become a staple in every British household, regardless of social class. The tradition of 'afternoon tea' emerged, a light meal served in the late afternoon, which quickly became a cherished ritual. Innovations like the tea bag, though not invented in Britain, further popularised the drink by making it more convenient.

Today, Britain remains one of the largest per capita consumers of tea globally. While the rituals may have evolved, the comforting presence of a 'cuppa' continues to be a central part of daily life and a symbol of British identity.`,
    questions: [
      {
        id: "R14",
        type: "matching-headings",
        questionText: "Match the following headings to the paragraphs.",
        prompt:
          "Choose the correct heading for paragraphs 1-5 from the list below.",
        items: [
          "Paragraph 1",
          "Paragraph 2",
          "Paragraph 3",
          "Paragraph 4",
          "Paragraph 5",
        ],
        options: [
          "I. Tea's Royal Introduction",
          "II. Global Origins",
          "III. The Rise of Public Tea Houses",
          "IV. A Modern Staple",
          "V. Widespread Popularity",
          "VI. Early European Trade",
        ],
        correctMapping: {
          "Paragraph 1": "II",
          "Paragraph 2": "I",
          "Paragraph 3": "III",
          "Paragraph 4": "V",
          "Paragraph 5": "IV",
        },
      },
      {
        id: "R19",
        type: "true-false-not-given",
        questionText: "Tea was first grown in India.",
        statement: "Tea was first grown in India.",
        correctAnswer: "False",
      },
      {
        id: "R20",
        type: "short-answer",
        questionText:
          "Who is credited with introducing tea to the English court?",
        correctAnswer: "Catherine of Braganza",
      },
      {
        id: "R21",
        type: "fill-in-the-blank",
        questionText:
          "In the 17th century, tea reached Europe mainly through __________ traders.",
        correctAnswer: "Dutch",
      },
      {
        id: "R22",
        type: "multiple-choice",
        questionText:
          "What was the main reason for tea's initial high price in Britain?",
        options: [
          "A. Limited supply from China",
          "B. High import duties",
          "C. Lack of demand",
        ],
        correctAnswer: "B",
      },
      {
        id: "R23",
        type: "sentence-completion",
        questionText:
          "The British East India Company helped expand tea trade by establishing plantations in __________.",
        correctAnswer: "India",
      },
      {
        id: "R24",
        type: "true-false-not-given",
        questionText:
          "Afternoon tea was a tradition that existed before the 19th century.",
        statement:
          "Afternoon tea was a tradition that existed before the 19th century.",
        correctAnswer: "False",
      },
      {
        id: "R25",
        type: "short-answer",
        questionText:
          "What innovation further popularised tea in the 19th century?",
        correctAnswer: "tea bag",
      },
      {
        id: "R26",
        type: "fill-in-the-blank",
        questionText:
          "Britain remains one of the largest per capita consumers of tea __________.",
        correctAnswer: "globally",
      },
    ],
  },

  // --- Reading Mock Test 2 (Academic) ---
  {
    id: "R_M_2_P1",
    testId: "R_M_2",
    title: "The Psychology of Colour in Marketing",
    text: `A. Colour plays a significant, albeit often subconscious, role in consumer behaviour and marketing. The human brain processes colours before it processes words or shapes, making colour a powerful tool for brands to convey messages, evoke emotions, and influence purchasing decisions. Understanding the psychology of colour is therefore crucial for effective marketing strategies.

B. Different colours elicit different emotional and psychological responses. For instance, red is often associated with energy, passion, and urgency, making it effective for sales and call-to-action buttons. Blue, on the other hand, conveys trust, security, and calmness, frequently used by banks and tech companies. Green is linked to nature, health, and tranquility, popular among environmental brands and those promoting well-being. Yellow signifies optimism and warmth, while purple is often associated with royalty, creativity, and luxury.

C. However, the impact of colour is not universal. Cultural background, personal experiences, and even gender can influence how colours are perceived. For example, in some Asian cultures, white is associated with mourning, whereas in Western cultures, it symbolises purity. Therefore, marketers must conduct thorough research into their target audience's cultural context to avoid misinterpretations. A colour that works well in one region might have an unintended negative connotation in another.

D. Beyond individual colours, combinations and contrasts also play a vital role. Complementary colours, when used together, can create a vibrant and energetic feel, while analogous colours offer a more harmonious and soothing effect. The strategic use of a brand's primary and secondary colour palettes helps in establishing brand identity and recognition. Consistency in colour usage across all marketing channels reinforces brand messaging.

E. Ultimately, while colour psychology provides valuable insights, it should not be the sole determinant of a marketing campaign. It works best when integrated with other elements of design, messaging, and overall brand strategy. A holistic approach, combining aesthetic appeal with psychological understanding, is key to creating a truly impactful and memorable brand experience.`,
    questions: [
      {
        id: "R27",
        type: "matching-headings",
        questionText: "Match the following headings to the paragraphs.",
        prompt:
          "Choose the correct heading for paragraphs A-E from the list below.",
        items: [
          "Paragraph A",
          "Paragraph B",
          "Paragraph C",
          "Paragraph D",
          "Paragraph E",
        ],
        options: [
          "I. The Importance of Colour Combinations",
          "II. Cultural Variations in Colour Perception",
          "III. The Foundational Role of Colour",
          "IV. Specific Emotional Associations of Colours",
          "V. A Holistic Marketing Approach",
          "VI. The Evolution of Colour Theory",
        ],
        correctMapping: {
          "Paragraph A": "III",
          "Paragraph B": "IV",
          "Paragraph C": "II",
          "Paragraph D": "I",
          "Paragraph E": "V",
        },
      },
      {
        id: "R32",
        type: "true-false-not-given",
        questionText: "The human brain processes words faster than colours.",
        statement: "The human brain processes words faster than colours.",
        correctAnswer: "False",
      },
      {
        id: "R33",
        type: "short-answer",
        questionText:
          "Which colour is often associated with trust and security?",
        correctAnswer: "blue",
      },
      {
        id: "R34",
        type: "fill-in-the-blank",
        questionText: "Yellow signifies __________ and warmth.",
        correctAnswer: "optimism",
      },
      {
        id: "R35",
        type: "multiple-choice",
        questionText: "What is a factor that can influence colour perception?",
        options: ["A. Climate", "B. Cultural background", "C. Economic status"],
        correctAnswer: "B",
      },
      {
        id: "R36",
        type: "sentence-completion",
        questionText:
          "In some Asian cultures, white is associated with __________.",
        correctAnswer: "mourning",
      },
      {
        id: "R37",
        type: "true-false-not-given",
        questionText: "Complementary colours always create a soothing effect.",
        statement: "Complementary colours always create a soothing effect.",
        correctAnswer: "False",
      },
      {
        id: "R38",
        type: "short-answer",
        questionText: "What does consistent colour usage help reinforce?",
        correctAnswer: "brand messaging",
      },
      {
        id: "R39",
        type: "fill-in-the-blank",
        questionText:
          "A __________ approach is key to creating an impactful brand experience.",
        correctAnswer: "holistic",
      },
    ],
  },
  {
    id: "R_M_2_P2",
    testId: "R_M_2",
    title: "The Science of Sleep",
    text: `A. Sleep is a fundamental human need, yet its importance is often underestimated in our fast-paced modern world. Far from being a passive state, sleep is an active process crucial for physical and mental restoration, memory consolidation, and emotional regulation. A lack of adequate sleep has profound negative impacts on health, productivity, and overall well-being.

B. The sleep cycle consists of two main types: Non-Rapid Eye Movement (NREM) sleep, which has three stages, and Rapid Eye Movement (REM) sleep. NREM sleep progresses from light sleep (Stage 1) to deeper sleep (Stage 3), where brain waves slow down significantly. During deep NREM sleep, the body repairs tissues, grows, and strengthens the immune system. REM sleep, characterised by rapid eye movements and vivid dreaming, is vital for cognitive functions such as memory consolidation and emotional processing. An adult typically cycles through these stages multiple times per night.

C. The body's internal clock, known as the circadian rhythm, regulates the sleep-wake cycle. This rhythm is primarily influenced by light and darkness. Exposure to natural light during the day helps to keep the circadian rhythm aligned, promoting alertness. Conversely, darkness triggers the release of melatonin, a hormone that induces sleepiness. Disruptions to this rhythm, often caused by shift work or excessive screen time before bed, can lead to sleep disorders and health problems.

D. Chronic sleep deprivation can have serious long-term consequences. It is linked to an increased risk of chronic diseases such as diabetes, heart disease, and obesity. Furthermore, it impairs cognitive functions like attention, concentration, and problem-solving abilities, leading to reduced academic and professional performance. Mood disturbances, including irritability and depression, are also common side effects.

E. Improving sleep hygiene is essential for addressing sleep problems. This involves establishing a regular sleep schedule, creating a comfortable sleep environment, avoiding caffeine and heavy meals before bed, and incorporating regular physical activity. While sleep aids can offer temporary relief, they do not address the underlying causes of sleep issues. Prioritising sleep as a non-negotiable component of a healthy lifestyle is crucial for optimal functioning and long-term health.`,
    questions: [
      {
        id: "R40",
        type: "multiple-choice",
        questionText: "What is the primary function of deep NREM sleep?",
        options: [
          "A. Vivid dreaming",
          "B. Memory consolidation",
          "C. Physical restoration",
        ],
        correctAnswer: "C",
      },
      {
        id: "R41",
        type: "fill-in-the-blank",
        questionText:
          "The body's internal clock is known as the __________ rhythm.",
        correctAnswer: "circadian",
      },
      {
        id: "R42",
        type: "true-false-not-given",
        questionText: "Melatonin is released in response to light.",
        statement: "Melatonin is released in response to light.",
        correctAnswer: "False",
      },
      {
        id: "R43",
        type: "short-answer",
        questionText:
          "Name one cognitive function impaired by chronic sleep deprivation.",
        correctAnswer: "attention",
      },
      {
        id: "R44",
        type: "sentence-completion",
        questionText:
          "Excessive screen time before bed can disrupt the __________.",
        correctAnswer: "circadian rhythm",
      },
      {
        id: "R45",
        type: "multiple-choice",
        questionText:
          "Which of the following is NOT a suggestion for improving sleep hygiene?",
        options: [
          "A. Avoiding caffeine before bed",
          "B. Using sleep aids regularly",
          "C. Establishing a regular sleep schedule",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: "R_M_2_P3",
    testId: "R_M_2",
    title: "The Impact of Artificial Intelligence on Society",
    text: `A. Artificial Intelligence (AI) is rapidly transforming various aspects of human society, from healthcare and education to transportation and entertainment. Defined as the simulation of human intelligence processes by machines, especially computer systems, AI encompasses machine learning, deep learning, natural language processing, and computer vision. Its potential to revolutionise industries and improve quality of life is immense, but it also presents significant challenges and ethical considerations.

B. In healthcare, AI is being used to analyse vast amounts of patient data, assisting in early disease detection, personalised treatment plans, and drug discovery. AI-powered diagnostic tools can identify patterns in medical images with greater accuracy than human eyes, leading to faster and more precise diagnoses. This has the potential to save countless lives and reduce healthcare costs.

C. The education sector is also experiencing AI's influence. AI-driven platforms can offer personalised learning experiences, adapting to individual student paces and styles. Intelligent tutoring systems provide instant feedback and identify areas where students need extra support. This promises to make education more accessible and effective, though concerns about data privacy and the role of human teachers persist.

D. However, the rise of AI is not without its drawbacks. A major concern is job displacement, as AI and automation take over tasks traditionally performed by humans, particularly in manufacturing, customer service, and data entry. This necessitates a focus on reskilling and upskilling the workforce to adapt to new roles that require human creativity, critical thinking, and emotional intelligence.

E. Ethical considerations are paramount in the development and deployment of AI. Issues such as algorithmic bias, privacy violations, and accountability for AI decisions require careful attention. For example, if an AI system used in hiring or lending exhibits bias based on race or gender, it could perpetuate societal inequalities. Establishing robust regulatory frameworks and ethical guidelines is crucial to ensure AI serves humanity responsibly and equitably.

F. Looking ahead, the trajectory of AI development suggests a future where AI becomes even more integrated into daily life. While the benefits are clear, navigating the complexities of job market changes, ethical dilemmas, and the need for continuous adaptation will be crucial. Public discourse, collaboration between policymakers, technologists, and ethicists, and a commitment to human-centric AI design will determine whether AI truly becomes a force for universal good.`,
    questions: [
      {
        id: "R46",
        type: "matching-headings",
        questionText: "Match the following headings to the paragraphs.",
        prompt:
          "Choose the correct heading for paragraphs A-F from the list below.",
        items: [
          "Paragraph A",
          "Paragraph B",
          "Paragraph C",
          "Paragraph D",
          "Paragraph E",
          "Paragraph F",
        ],
        options: [
          "I. AI's Role in Medical Advancements",
          "II. The Future Outlook and Challenges",
          "III. Defining Artificial Intelligence",
          "IV. AI in Educational Settings",
          "V. The Problem of Job Losses",
          "VI. Addressing Moral Questions",
          "VII. AI and Environmental Protection",
        ],
        correctMapping: {
          "Paragraph A": "III",
          "Paragraph B": "I",
          "Paragraph C": "IV",
          "Paragraph D": "V",
          "Paragraph E": "VI",
          "Paragraph F": "II",
        },
      },
      {
        id: "R52",
        type: "multiple-choice-multi",
        questionText: "Which TWO areas are mentioned as components of AI?",
        options: [
          "A. Robotics",
          "B. Natural language processing",
          "C. Quantum computing",
          "D. Deep learning",
          "E. Biotechnology",
        ],
        correctAnswer: ["B", "D"],
      },
      {
        id: "R54",
        type: "true-false-not-given",
        questionText:
          "AI diagnostic tools are always more accurate than human doctors.",
        statement:
          "AI diagnostic tools are always more accurate than human doctors.",
        correctAnswer: "Not Given",
      },
      {
        id: "R55",
        type: "short-answer",
        questionText:
          "What is a main concern regarding AI's impact on employment?",
        correctAnswer: "job displacement",
      },
      {
        id: "R56",
        type: "fill-in-the-blank",
        questionText:
          "AI-driven platforms can offer __________ learning experiences.",
        correctAnswer: "personalised",
      },
      {
        id: "R57",
        type: "sentence-completion",
        questionText: "One ethical concern with AI is __________ bias.",
        correctAnswer: "algorithmic",
      },
      {
        id: "R58",
        type: "multiple-choice",
        questionText:
          "What is crucial for ensuring AI serves humanity responsibly?",
        options: [
          "A. Rapid technological advancement",
          "B. Establishing regulatory frameworks",
          "C. Limiting AI research",
        ],
        correctAnswer: "B",
      },
      {
        id: "R59",
        type: "short-answer",
        questionText:
          "Name one quality humans will need for new roles created by AI.",
        correctAnswer: "creativity",
      },
      {
        id: "R60",
        type: "fill-in-the-blank",
        questionText:
          "Public discourse and collaboration are needed to ensure AI becomes a force for __________ good.",
        correctAnswer: "universal",
      },
    ],
  },
];

// --- 4. Writing Tasks ---
/**
 * Defines the prompts for IELTS Writing Task 1 and Task 2.
 * @type {Object}
 */
export const writingTasks = {
  task1: {
    prompt: `The chart below shows the percentage of the population aged 65 and over in three countries between 1940 and 2040.
Summarise the information by selecting and reporting the main features, and make comparisons where relevant.
Write at least 150 words.`,
    wordCountMin: 150,
    imageUrl:
      "https://placehold.co/600x350/ADD8E6/000000?text=IELTS+Task+1+Graph+Example%0APopulation+Aged+65+and+Over",
  },
  task2: {
    prompt: `Some people believe that the best way to improve public health is by increasing the number of sports facilities. Others, however, believe that this is not enough and that other measures are required.
Discuss both these views and give your own opinion.
Write at least 250 words.`,
    wordCountMin: 250,
  },
};

// --- 5. Speaking Questions ---
/**
 * Defines the questions for each part of the IELTS Speaking test.
 * Part 1: General questions.
 * Part 2: Cue card with preparation and talk time.
 * Part 3: Discussion questions related to Part 2.
 * @type {Object}
 */
export const speakingQuestions = {
  1: [
    "Let's talk about your hometown. Where are you from?",
    "What do you like most about your hometown?",
    "Is there anything you would like to change about your hometown?",
    "Do you think you will continue to live in your hometown in the future?",
    "Let's move on to the topic of hobbies. What are your main hobbies?",
    "How often do you engage in these hobbies?",
    "Did you have any hobbies when you were a child?",
    "Do you think it's important for people to have hobbies?",
  ],
  2: [
    {
      cueCard: `Describe a time you helped someone.
You should say:
- who the person was
- what the situation was
- how you helped them
and explain how you felt after helping this person.`,
      prepTime: 60, // seconds
      talkTime: 120, // seconds (1-2 minutes)
    },
  ],
  3: [
    "Let's discuss helping others in general. Why do you think people help others?",
    "Do you think people nowadays are less willing to help others than in the past?",
    "What are some ways schools can encourage students to help their community?",
    "Do you think governments should provide more support for volunteers?",
    "What kind of help do people usually need in modern society?",
    "How does technology influence the way people help each other?",
  ],
};

// --- 6. Utility Functions ---

/**
 * Formats a time in seconds into MM:SS format.
 * @param {number} seconds - The total number of seconds.
 * @returns {string} Formatted time string (e.g., "05:30").
 */
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const pad = (num) => num.toString().padStart(2, "0");
  return `${pad(minutes)}:${pad(remainingSeconds)}`;
}

/**
 * Calculates the word count of a given text string.
 * @param {string} text - The input text.
 * @returns {number} The number of words.
 */
export function calculateWordCount(text) {
  if (!text) return 0;
  const words = text.trim().split(/\s+/);
  return words.length;
}

// --- 7. Common Styles ---
/**
 * Common CSS styles to be injected into the HTML.
 * This helps maintain consistent styling across different modules.
 * @type {string}
 */
export const commonStyles = `
/* Inter Font - Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

body {
    font-family: 'Inter', sans-serif;
}

/* Basic Tailwind-like reset for consistency */
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb; /* gray-200 */
}
::before, ::after {
  --tw-content: '';
}
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}
body {
  margin: 0;
  line-height: inherit;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  text-decoration: underline dotted;
}
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b, strong {
  font-weight: bolder;
}
code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button, select {
  text-transform: none;
}
button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
textarea {
  resize: vertical;
}
input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af; /* gray-400 */
}
button, [role="button"] {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}
img, video {
  max-width: 100%;
  height: auto;
}
[hidden] {
  display: none;
}

/* Custom toast styles */
#toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.toast {
    background-color: #333;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    transform: translateY(-20px);
    animation: slideIn 0.3s forwards, fadeOut 0.5s 2.5s forwards;
}
.toast.success {
    background-color: #4CAF50; /* Green */
}
.toast.error {
    background-color: #F44336; /* Red */
}
.toast.info {
    background-color: #2196F3; /* Blue */
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes fadeOut {
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}
`;

// --- 8. SVG Icons ---
/**
 * Collection of SVG icons for consistent UI elements.
 * Using Lucide React for inspiration, but providing raw SVG for HTML.
 * @type {Object<string, string>}
 */
export const Icons = {
  Dashboard: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  Forum: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  SignIn: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
  SignOut: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="17 16 22 12 17 8"/><line x1="22" y1="12" x2="10" y2="12"/></svg>`,
  ChevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>`,
  Headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones"><path d="M18 18H6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7"/><path d="M3 9v2a6 6 0 0 0 6 6h2"/><path d="M21 9v2a6 6 0 0 1-6 6h-2"/><path d="M12 3v14"/></svg>`,
  Mic: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,
  FileText: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  Activity: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  Lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.8.7 3.3 1.5 4.5 1 .8 1.5 2 1.5 3.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 18v4"/></svg>`,
};
