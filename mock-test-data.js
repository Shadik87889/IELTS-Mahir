// mock-test-data.js

// All available mock tests, categorized by module
export const allMockTests = [
  {
    id: "L_M_1",
    module: "listening",
    title: "Listening Mock Test 1 (Basic)",
    topic: "Academic - Everyday Conversations",
    source: "IDP",
    audioFiles: [
      "mock-listening-audio/ielts-mahir-lis-02-pt-01.mp3", // Part 1 audio
      "mock-listening-audio/ielts-mahir-lis-02-pt-02.mp3", // Part 2 audio
      "mock-listening-audio/ielts-mahir-lis-02-pt-03.mp3", // Part 3 audio
      "mock-listening-audio/ielts-mahir-lis-02-pt-04.mp3", // Part 4 audio
    ],
  },
  {
    id: "L_BC_1",
    module: "listening",
    title: "Listening Practice Test 2 (Intermediate)",
    topic: "General Training - Public Announcements",
    source: "British Council",
    audioFiles: [
      "mock-listening-audio/ielts-mahir-lis-02-pt-01.mp3", // Placeholder for BC_1, ideally new audio
      "mock-listening-audio/ielts-mahir-lis-02-pt-02.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-03.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-04.mp3",
    ],
  },
  {
    id: "L_IDP_3",
    module: "listening",
    title: "Listening Exam Prep (Advanced)",
    topic: "Academic - University Lecture",
    source: "IDP",
    audioFiles: [
      "mock-listening-audio/ielts-mahir-lis-02-pt-01.mp3", // Placeholder for IDP_3, ideally new audio
      "mock-listening-audio/ielts-mahir-lis-02-pt-02.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-03.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-04.mp3",
    ],
  },
  {
    id: "L_BC_4",
    module: "listening",
    title: "Listening Advanced (Challenging)",
    topic: "General Training - News Report",
    source: "British Council",
    audioFiles: [
      "mock-listening-audio/ielts-mahir-lis-02-pt-01.mp3", // Placeholder for BC_4, ideally new audio
      "mock-listening-audio/ielts-mahir-lis-02-pt-02.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-03.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-04.mp3",
    ],
  },
  {
    id: "L_IDP_5",
    module: "listening",
    title: "Listening Focus Test (Accent Training)",
    topic: "Academic - Multiple Accents",
    source: "IDP",
    audioFiles: [
      "mock-listening-audio/ielts-mahir-lis-02-pt-01.mp3", // Placeholder for IDP_5, ideally new audio
      "mock-listening-audio/ielts-mahir-lis-02-pt-02.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-03.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-04.mp3",
    ],
  },
  {
    id: "L_M_2", // New entry for Test 2
    module: "listening",
    title: "Listening Mock Test 2 (General)",
    topic: "General Training - Everyday Situations & Presentations",
    source: "IELTS Mahir Academy",
    audioFiles: [
      "mock-listening-audio/ielts-mahir-lis-02-pt-01.mp3", // Reusing for now, user can provide new ones
      "mock-listening-audio/ielts-mahir-lis-02-pt-02.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-03.mp3",
      "mock-listening-audio/ielts-mahir-lis-02-pt-04.mp3",
    ],
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

// Listening Test Questions
export const listeningQuestions = [
  // Part 1: Questions 1-10 (Fill in the blank/Short Answer) - from WhatsApp Image 2025-07-08 at 20.14.22_54572f2a.jpg
  {
    id: "L1",
    type: "fill-in-the-blank",
    audioPrompt:
      "Section 1: You will hear a conversation about the Buckworth Conservation Group. Questions 1-10.",
    questionText:
      "1. Regular activities: Beach - making sure the beach does not have __________ on it.",
    correctAnswer: "sand", // Placeholder, actual answer depends on audio
  },
  {
    id: "L2",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText: "2. Regular activities: Beach - no __________.",
    correctAnswer: "litter", // Placeholder
  },
  {
    id: "L3",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "3. Nature reserve - next task is taking action to attract __________ to the place.",
    correctAnswer: "wildlife", // Placeholder
  },
  {
    id: "L4",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText: "4. Nature reserve - identifying types of __________.",
    correctAnswer: "habitats", // Placeholder
  },
  {
    id: "L5",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText: "5. Nature reserve - building a new __________.",
    correctAnswer: "hide", // Placeholder
  },
  {
    id: "L6",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "6. Forthcoming events: Saturday - walk across the sands and reach the __________.",
    correctAnswer: "beach", // Placeholder
  },
  {
    id: "L7",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "7. Forthcoming events: Saturday - wear appropriate __________.",
    correctAnswer: "clothing", // Placeholder
  },
  {
    id: "L8",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "8. Woodwork session - suitable for __________ to participate in.",
    correctAnswer: "all ages", // Placeholder
  },
  {
    id: "L9",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText: "9. Woodwork session - making __________ out of wood.",
    correctAnswer: "bird boxes", // Placeholder
  },
  {
    id: "L10",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "10. Woodwork session - cost of session (no camping): £__________.",
    correctAnswer: "10", // Placeholder
  },

  // Part 2: Questions 11-14 (Multiple Choice) - from WhatsApp Image 2025-07-08 at 20.14.23_e7e77f58.jpg
  {
    id: "L11",
    type: "multiple-choice",
    audioPrompt:
      "Section 2: You will hear a tour guide talking about a boat trip around Tasmania. Questions 11-20.",
    questionText:
      "11. What is the maximum number of people who can stand on each side of the boat?",
    options: ["a) 9", "b) 15", "c) 18"],
    correctAnswer: "", // Placeholder
  },
  {
    id: "L12",
    type: "multiple-choice",
    audioPrompt: "Choose the correct option.",
    questionText: "12. What colour are the tour boats?",
    options: ["a) dark red", "b) jet black", "c) light green"],
    correctAnswer: "", // Placeholder
  },
  {
    id: "L13",
    type: "multiple-choice",
    audioPrompt: "Choose the correct option.",
    questionText:
      "13. Which lunchbox is suitable for someone who doesn't eat meat or fish?",
    options: ["a) Lunchbox 1", "b) Lunchbox 2", "c) Lunchbox 3"],
    correctAnswer: "", // Placeholder
  },
  {
    id: "L14",
    type: "multiple-choice",
    audioPrompt: "Choose the correct option.",
    questionText: "14. What should people do with their litter?",
    options: [
      "a) take it home",
      "b) hand it to a member of staff",
      "c) put it in the bins provided on the boat",
    ],
    correctAnswer: "", // Placeholder
  },

  // Part 2: Questions 15-20 (Choose TWO letters) - from WhatsApp Image 2025-07-08 at 20.14.23_2be4c7f6.jpg
  {
    id: "L15-16",
    type: "multiple-choice", // This type will need adjustment in the rendering logic to allow multiple selections
    audioPrompt:
      "Questions 15 and 16. Choose TWO features of the lighthouse Lou mentions.",
    questionText:
      "15 & 16. Which TWO features of the lighthouse does Lou mention?",
    options: [
      "A why it was built",
      "B who built it",
      "C how long it took to build",
      "D who staffed it",
      "E what it was built with",
    ],
    correctAnswer: [], // Placeholder for two correct answers, e.g., ["A", "C"]
  },
  {
    id: "L17-18",
    type: "multiple-choice", // This type will need adjustment in the rendering logic to allow multiple selections
    audioPrompt:
      "Questions 17 and 18. Choose TWO types of creature might come close to the boat?",
    questionText:
      "17 & 18. Which TWO types of creature might come close to the boat?",
    options: [
      "A sea eagles",
      "B fur seals",
      "C dolphins",
      "D whales",
      "E penguins",
    ],
    correctAnswer: [], // Placeholder for two correct answers
  },
  {
    id: "L19-20",
    type: "multiple-choice", // This type will need adjustment in the rendering logic to allow multiple selections
    audioPrompt:
      "Questions 19 and 20. Choose TWO points Lou makes about the caves.",
    questionText: "19 & 20. Which TWO points does Lou make about the caves?",
    options: [
      "A Only large tourist boats can visit them.",
      "B The entrances to them are often blocked.",
      "C It is too dangerous for individuals to go near them.",
      "D Someone will explain what is inside them.",
      "E They cannot be reached on foot.",
    ],
    correctAnswer: [], // Placeholder for two correct answers
  },

  // Part 3: Questions 21-26 (Multiple Choice) - from WhatsApp Image 2025-07-08 at 20.14.23_3bab17d2.jpg
  {
    id: "L21",
    type: "multiple-choice",
    audioPrompt:
      "Section 3: Questions 21-30. You will hear a conversation about work experience for veterinary science students.",
    questionText:
      "21. What problem did both Diana and Tim have when arranging their work experience?",
    options: [
      "A making initial contact with suitable farms",
      "B organising transport to and from the farm",
      "C finding a placement for the required length of time",
    ],
    correctAnswer: "", // Placeholder
  },
  {
    id: "L22",
    type: "multiple-choice",
    audioPrompt: "Choose the correct option.",
    questionText: "22. Tim was pleased to be able to help",
    options: [
      "A a lamb that had a broken leg.",
      "B a sheep that was having difficulty giving birth.",
      "C a newly born lamb that was having trouble feeding.",
    ],
    correctAnswer: "", // Placeholder
  },
  {
    id: "L23",
    type: "multiple-choice",
    audioPrompt: "Choose the correct option.",
    questionText: "23. Diana says the sheep on her farm",
    options: [
      "A were of various different varieties.",
      "B were mainly reared for their meat.",
      "C had better quality wool than sheep on the hills.",
    ],
    correctAnswer: "", // Placeholder
  },
  {
    id: "L24",
    type: "multiple-choice",
    audioPrompt: "Choose the correct option.",
    questionText:
      "24. What did the students learn about adding supplements to chicken feed?",
    options: [
      "A These should only be given if specially needed.",
      "B It is worth paying extra for the most effective ones.",
      "C The amount given at one time should be limited.",
    ],
    correctAnswer: "", // Placeholder
  },
  {
    id: "L25",
    type: "multiple-choice",
    audioPrompt: "Choose the correct option.",
    questionText: "25. What happened when Diana was working with dairy cows?",
    options: [
      "A She identified some cows incorrectly.",
      "B She accidentally threw some milk away.",
      "C She made a mistake when storing milk.",
    ],
    correctAnswer: "", // Placeholder
  },
  {
    id: "L26",
    type: "multiple-choice",
    audioPrompt: "Choose the correct option.",
    questionText: "26. What did both farmers mention about vets and farming?",
    options: [
      "A Vets are failing to cope with some aspects of animal health.",
      "B There needs to be a fundamental change in the training of vets.",
      "C Some jobs could be done by the farmer rather than by a vet.",
    ],
    correctAnswer: "", // Placeholder
  },

  // Part 3: Questions 27-30 (Matching) - from WhatsApp Image 2025-07-08 at 20.14.24_40da4e05.jpg
  {
    id: "L27-30",
    type: "matching",
    audioPrompt:
      "Questions 27-30. Choose FOUR answers from the box and write the correct letter, A-F, next to questions 27-30.",
    questionText:
      "Match the following opinions (A-F) to the modules on the Veterinary Science course (27-30):",
    items: [
      { key: "27. Medical terminology", value: "" },
      { key: "28. Diet and nutrition", value: "" },
      { key: "29. Animal disease", value: "" },
      { key: "30. Wildlife medication", value: "" },
    ],
    options: [
      "A Tim found this easier than expected.",
      "B Tim thought this was not very clearly organised.",
      "C Diana may do some further study on this.",
      "D They both found the reading required for this was difficult.",
      "E Tim was shocked at something he learned on this module.",
      "F They were both surprised how little is known about some aspects of this.",
    ],
    correctMapping: {
      "27": "", // Placeholder
      "28": "", // Placeholder
      "29": "", // Placeholder
      "30": "", // Placeholder
    },
  },

  // Part 4: Questions 31-40 (Fill in the blank) - from WhatsApp Image 2025-07-08 at 20.14.24_8e5e7ea5.jpg
  {
    id: "L31",
    type: "fill-in-the-blank",
    audioPrompt:
      "Section 4: Questions 31-40. You will hear a lecture about Labyrinths.",
    questionText:
      "31. Labyrinths compared with mazes: Mazes are a type of __________.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L32",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText: "32. __________ is needed to navigate through a maze.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L33",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "33. The word 'maze' is derived from a word meaning a feeling of __________.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L34",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "34. Labyrinths represent a journey through life - they have frequently been used in __________ and prayer.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L35",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "35. Early examples of the labyrinth spiral: Ancient carvings on __________ have been found across many cultures.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L36",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "36. Early examples of the labyrinth spiral: Ancient Greeks used the symbol on __________.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L37",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "37. Walking labyrinths: The largest surviving example of a turf labyrinth once had a big __________ at its centre.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L38",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "38. Labyrinths nowadays: Believed to have a beneficial impact on mental and physical health, e.g., walking a maze can reduce a person's __________ rate.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L39",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "39. Labyrinths nowadays: patients who can't walk can use 'finger labyrinths' made from __________.",
    correctAnswer: "", // Placeholder
  },
  {
    id: "L40",
    type: "fill-in-the-blank",
    audioPrompt: "Complete the notes.",
    questionText:
      "40. Labyrinths nowadays: research has shown that Alzheimer's sufferers experience less __________.",
    correctAnswer: "", // Placeholder
  },
];

// Reading Test Passages and Questions
export const readingPassages = [
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
        correctAnswer: "False",
      },
      {
        id: "R1Q3",
        type: "summary-completion",
        prompt: "3. Complete the summary below:",
        summaryText:
          "AI is changing various sectors, offering increased efficiency and precision through automation. However, this raises concerns about job displacement, necessitating investments in ___________ and the development of new roles.",
        correctAnswer: "education",
      },
      {
        id: "R1Q4",
        type: "short-answer",
        questionText: "4. Name one ethical concern regarding AI.",
        correctAnswer: "data privacy",
      },
      {
        id: "R1Q5",
        type: "multiple-choice",
        questionText:
          "5. Which sector is NOT mentioned as being transformed by AI?",
        options: [
          "a) Healthcare",
          "b) Agriculture",
          "c) Transportation",
          "d) Education",
        ],
        correctAnswer: "b",
      },
      {
        id: "R1Q6",
        type: "matching-headings",
        prompt: "6. Match the following headings to the paragraphs:",
        headings: [
          "I. Ethical Considerations",
          "II. Automation and Industry",
          "III. AI in Daily Life",
        ],
        correctMapping: {
          "Paragraph 2": "II",
          "Paragraph 3": "I",
          "Paragraph 4": "III",
        },
      },
      {
        id: "R1Q7",
        type: "fill-in-the-blank",
        prompt:
          "7. AI algorithms are used in logistics to optimize __________ routes.",
        summaryText:
          "AI algorithms are used in logistics to optimize __________ routes.",
        correctAnswer: "delivery",
      },
      {
        id: "R1Q8",
        type: "true-false-not-given",
        statement:
          "8. Virtual assistants are still in the early stages of development.",
        correctAnswer: "False",
      },
      {
        id: "R1Q9",
        type: "short-answer",
        questionText: "9. What is needed to ensure public trust in AI systems?",
        correctAnswer: "fairness and transparency",
      },
      {
        id: "R1Q10",
        type: "multiple-choice",
        questionText: "10. What is a long-term goal of AI integration?",
        options: [
          "a) To completely replace humans",
          "b) To augment human capabilities",
          "c) To reduce economic growth",
          "d) To eliminate human interaction",
        ],
        correctAnswer: "b",
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
        id: "R2Q11",
        type: "matching-headings",
        prompt: "11. Match the following headings to the paragraphs:",
        headings: [
          "I. The Ancient Origins",
          "II. Modern Revival and Growth",
          "III. Olympic Legacy Beyond Sport",
        ],
        correctMapping: {
          "Paragraph 1": "I",
          "Paragraph 2": "II",
          "Paragraph 3": "III",
        },
      },
      {
        id: "R2Q12",
        type: "short-answer",
        questionText:
          "12. Who is credited with the revival of the modern Olympic Games?",
        correctAnswer: "Pierre de Coubertin",
      },
      {
        id: "R2Q13",
        type: "multiple-choice",
        questionText:
          "13. When were the first recorded ancient Olympic Games held?",
        options: ["a) 393 AD", "b) 1896", "c) 776 BC", "d) 1894"],
        correctAnswer: "c",
      },
      {
        id: "R2Q14",
        type: "true-false-not-given",
        statement:
          "14. The ancient Olympics were abolished due to financial difficulties.",
        correctAnswer: "False",
      },
      {
        id: "R2Q15",
        type: "fill-in-the-blank",
        prompt:
          "15. Ancient Olympic winners were crowned with __________ wreaths.",
        summaryText:
          "Ancient Olympic winners were crowned with __________ wreaths.",
        correctAnswer: "olive",
      },
      {
        id: "R2Q16",
        type: "short-answer",
        questionText:
          "16. What was the main purpose of Coubertin's vision for the modern Games?",
        correctAnswer: "promote peace and understanding",
      },
      {
        id: "R2Q17",
        type: "multiple-choice",
        questionText: "17. Which city hosted the first modern Olympic Games?",
        options: ["a) Paris", "b) Olympia", "c) Athens", "d) London"],
        correctAnswer: "c",
      },
      {
        id: "R2Q18",
        type: "true-false-not-given",
        statement:
          "18. The modern Olympics have never faced political challenges.",
        correctAnswer: "False",
      },
      {
        id: "R2Q19",
        type: "fill-in-the-blank",
        prompt:
          "19. The Games now include both Summer and __________ editions.",
        summaryText:
          "The Games now include both Summer and __________ editions.",
        correctAnswer: "Winter",
      },
      {
        id: "R2Q20",
        type: "short-answer",
        questionText:
          "20. Name one area outside of sport influenced by the Olympics.",
        correctAnswer: "urban development",
      },
    ],
  },
  {
    id: "R3",
    title: "The Benefits of Bilingualism",
    text: `Bilingualism, the ability to speak two languages, is increasingly common around the world and offers a wide array of cognitive, social, and economic benefits. Far from hindering development, as was once believed, research now indicates that being bilingual can actually enhance cognitive functions, providing a mental edge over monolingual individuals.

One significant cognitive advantage is improved executive function. This includes better problem-solving skills, enhanced multitasking abilities, and greater cognitive flexibility. Bilingual individuals constantly switch between two language systems, a mental exercise that strengthens their brain's ability to manage attention, ignore distractions, and move between different tasks. Studies have also shown that bilingualism can delay the onset of age-related cognitive decline, such as dementia, by several years.

Beyond cognitive benefits, bilingualism fosters a deeper understanding of different cultures. Language is intimately connected with culture, and learning a new language opens a window into new perspectives, traditions, and ways of thinking. This cultural sensitivity and empathy are invaluable in an increasingly globalized world, leading to more successful cross-cultural communication and relationships.

Economically, bilingual individuals often have a competitive edge in the job market. Many international companies seek employees who can communicate effectively with diverse clients and partners. Proficiency in multiple languages can lead to better job opportunities, higher salaries, and greater career mobility in various fields, from international business and diplomacy to tourism and education. Therefore, embracing bilingualism is not just about communication; it's about unlocking a richer life and broader opportunities.`,
    questions: [
      {
        id: "R3Q21",
        type: "multiple-choice",
        questionText: "21. What was a past misconception about bilingualism?",
        options: [
          "a) It enhances social skills.",
          "b) It delays cognitive decline.",
          "c) It hinders development.",
          "d) It improves economic prospects.",
        ],
        correctAnswer: "c",
      },
      {
        id: "R3Q22",
        type: "fill-in-the-blank",
        prompt: "22. Bilingualism can improve __________ functions.",
        summaryText: "Bilingualism can improve __________ functions.",
        correctAnswer: "cognitive",
      },
      {
        id: "R3Q23",
        type: "short-answer",
        questionText: "23. Name one component of improved executive function.",
        correctAnswer: "problem-solving skills",
      },
      {
        id: "R3Q24",
        type: "true-false-not-given",
        statement:
          "24. Bilingual individuals rarely switch between their two languages.",
        correctAnswer: "False",
      },
      {
        id: "R3Q25",
        type: "matching-headings",
        prompt: "25. Match the following headings to the paragraphs:",
        headings: [
          "I. Cognitive Advantages",
          "II. Cultural Insights",
          "III. Economic Opportunities",
        ],
        correctMapping: {
          "Paragraph 2": "I",
          "Paragraph 3": "II",
          "Paragraph 4": "III",
        },
      },
      {
        id: "R3Q26",
        type: "multiple-choice",
        questionText:
          "26. What does the text suggest about the connection between language and culture?",
        options: [
          "a) They are unrelated.",
          "b) Language hinders cultural understanding.",
          "c) They are intimately connected.",
          "d) Culture replaces language learning.",
        ],
        correctAnswer: "c",
      },
      {
        id: "R3Q27",
        type: "fill-in-the-blank",
        prompt:
          "27. Learning a new language opens a window into new __________.",
        summaryText:
          "Learning a new language opens a window into new __________.",
        correctAnswer: "perspectives",
      },
      {
        id: "R3Q28",
        type: "short-answer",
        questionText: "28. What type of decline can bilingualism delay?",
        correctAnswer: "age-related cognitive decline",
      },
      {
        id: "R3Q29",
        type: "true-false-not-given",
        statement:
          "29. All international companies require employees to be bilingual.",
        correctAnswer: "Not Given",
      },
      {
        id: "R3Q30",
        type: "multiple-choice",
        questionText:
          "30. Which job sector is specifically mentioned as benefiting from bilingualism?",
        options: [
          "a) Manufacturing",
          "b) Construction",
          "c) Diplomacy",
          "d) Retail",
        ],
        correctAnswer: "c",
      },
    ],
  },
  {
    id: "R4",
    title: "The Evolution of Communication",
    text: `Communication has undergone a remarkable evolution throughout human history, transforming from rudimentary gestures and sounds to complex digital interactions. Each technological leap has dramatically reshaped how individuals connect, share information, and organize societies. Understanding this progression is key to appreciating our current communicative landscape.

Early forms of communication were primarily oral, relying on spoken language and storytelling to transmit knowledge across generations. The invention of writing systems, dating back to ancient Mesopotamia around 3500 BC, marked a pivotal shift. It allowed for the preservation of information beyond human memory and made possible the spread of ideas over vast distances and time, laying the groundwork for complex civilizations and organized record-keeping.

The advent of the printing press in the 15th century by Johannes Gutenberg revolutionized the dissemination of information. Books and pamphlets could be mass-produced, leading to increased literacy rates and the widespread exchange of ideas during the Renaissance and the Scientific Revolution. This era fostered critical thinking and decentralized knowledge, moving it from the exclusive domain of scribes and clergy to a broader populace.

The 19th and 20th centuries witnessed an explosion of electrical communication technologies: the telegraph, telephone, radio, and television. These innovations dramatically reduced the time and distance barriers, enabling near-instantaneous global communication. The late 20th century then ushered in the digital age with the internet and mobile technologies, creating an interconnected world where information is accessible instantly and communication is pervasive, continually evolving with new platforms and tools.`,
    questions: [
      {
        id: "R4Q31",
        type: "multiple-choice",
        questionText: "31. What was the primary mode of early communication?",
        options: [
          "a) Writing",
          "b) Gestures and sounds",
          "c) Telegraph",
          "d) Printing",
        ],
        correctAnswer: "b",
      },
      {
        id: "R4Q32",
        type: "fill-in-the-blank",
        prompt:
          "32. The invention of writing systems allowed for the preservation of information beyond human __________.",
        summaryText:
          "The invention of writing systems allowed for the preservation of information beyond human __________.",
        correctAnswer: "memory",
      },
      {
        id: "R4Q33",
        type: "short-answer",
        questionText:
          "33. Which civilization is associated with early writing systems?",
        correctAnswer: "Mesopotamia",
      },
      {
        id: "R4Q34",
        type: "true-false-not-given",
        statement: "34. The printing press was invented in the 16th century.",
        correctAnswer: "False",
      },
      {
        id: "R4Q35",
        type: "matching-headings",
        prompt: "35. Match the following headings to the paragraphs:",
        headings: [
          "I. The Digital Age",
          "II. Early Oral Tradition",
          "III. The Printing Revolution",
          "IV. Electrical Innovations",
        ],
        correctMapping: {
          "Paragraph 1": "II",
          "Paragraph 2": "III",
          "Paragraph 3": "IV",
          "Paragraph 4": "I",
        },
      },
      {
        id: "R4Q36",
        type: "multiple-choice",
        questionText: "36. What was a key outcome of the printing press?",
        options: [
          "a) Decreased literacy rates",
          "b) Centralized knowledge",
          "c) Widespread exchange of ideas",
          "d) Limited information access",
        ],
        correctAnswer: "c",
      },
      {
        id: "R4Q37",
        type: "fill-in-the-blank",
        prompt:
          "37. The telegraph and telephone dramatically reduced __________ barriers.",
        summaryText:
          "The telegraph and telephone dramatically reduced __________ barriers.",
        correctAnswer: "distance",
      },
      {
        id: "R4Q38",
        type: "short-answer",
        questionText: "38. Name one 20th-century communication technology.",
        correctAnswer: "radio",
      },
      {
        id: "R4Q39",
        type: "true-false-not-given",
        statement: "39. The internet was developed in the early 1900s.",
        correctAnswer: "False",
      },
      {
        id: "R4Q40",
        type: "multiple-choice",
        questionText:
          "40. What characterizes communication in the digital age?",
        options: [
          "a) Slow information spread",
          "b) Limited accessibility",
          "c) Instant access to information",
          "d) Manual data transfer",
        ],
        correctAnswer: "c",
      },
    ],
  },
];

// Writing Test Details
export const writingTasks = {
  task1: {
    prompt: `*The graph below shows the percentage of the population aged 65 and over in three countries between 1980 and 2040. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.*`,
    imageUrl: "https://i.ibb.co/hL4g6hJ/ielts-task1-graph.png",
    wordCountMin: 150,
  },
  task2: {
    prompt: `*Some people believe that the best way to improve public health is by increasing the number of sports facilities. Others, however, believe that this is not enough and that other measures are required. Discuss both these views and give your own opinion.*`,
    wordCountMin: 250,
  },
};

// Speaking Test Questions
export const speakingQuestions = {
  1: [
    "Let's talk about your hometown. Where are you from?",
    "Do you like living there? Why or why not?",
    "What is your favorite place in your hometown?",
    "How has your hometown changed over the years?",
  ],
  2: [
    {
      cueCard:
        "Describe a successful person you know. You should say: who this person is; what they do; what makes them successful; and explain why you admire them.",
      prepTime: 60, // seconds
      talkTime: 120, // seconds (1-2 minutes)
    },
  ],
  3: [
    "Let's discuss success in general. What qualities do you think are essential for success in modern society?",
    "Do you think success is always about wealth and status?",
    "How important is education in achieving success?",
  ],
};

// Utility functions (can be moved to a separate 'utils.js' later if needed across many files)
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, 0)}`;
}

export function calculateWordCount(text) {
  const words = text.trim().split(/\s+/);
  return words.filter((word) => word !== "").length;
}

// SVG Icons (converted from Lucide React components) - kept identical
export const Icons = {
  Mic: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  Headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 3 0 0 1-2 2H3a2 3 0 0 1-2-2v-3a2 3 0 0 1 2-2Z"/><path d="M18 14h3a2 2 0 0 1 2 2v3a2 3 0 0 1-2 2h-3a2 3 0 0 1-2-2v-3a2 3 0 0 1 2-2Z"/><path d="M7 14v-3a9 9 0 0 1 18 0v3"/></svg>`,
  BookOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  FileText: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  Activity: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  ChevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>`,
  Lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-5 h-5 mr-2 text-blue-500"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M7 14h10"/><path d="M12 22v-4"/><path d="M8 22h8"/></svg>`,
  // Font Awesome icons for auth.js (already defined there, but good to have a consistent place)
  User: `<i class="fas fa-user-circle"></i>`,
  SignIn: `<i class="fas fa-sign-in-alt"></i>`,
  SignOut: `<i class="fas fa-sign-out-alt"></i>`,
  Dashboard: `<i class="fas fa-chart-line"></i>`,
  Forum: `<i class="fas fa-comments"></i>`,
};

// Common CSS styles (can be imported or embedded)
export const commonStyles = `
/* Import Inter font for consistency */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap");

body {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Custom form-radio style for consistency with React app's checked state */
.form-radio:checked {
    background-color: #3b82f6; /* blue-500 */
    border-color: #3b82f6;
}

/* Animations from React app */
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
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes zoomIn {
    from {
        transform: scale(0.9);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes pulse-slow {
    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
}
@keyframes pulse-fast {
    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.02);
        opacity: 0.9;
    }
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

/* Toast notification styles (from auth.html) */
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
    padding: 12px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: white;
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    min-width: 250px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.toast.show {
    opacity: 1;
    transform: translateY(0);
}
.toast.success {
    background-color: #28a745;
}
.toast.error {
    background-color: #dc3545;
}
.toast.info {
    background-color: #007bff;
}
`;
