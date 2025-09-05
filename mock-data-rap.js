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
  {
    id: "reading-test-1",
    moduleId: "reading",
    title: "READING TEST 1",
    description: "Academic Reading practice test with various question types.",
    duration: 60, // minutes
    // No audioUrl for reading tests
    sections: [
      {
        id: "reading-section-1",
        title: "Section 1",
        passageContent: "passage will be added later",
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-6</p>
              <p>Choose the most suitable headings for paragraphs B-G from the list of headings below.</p>
              <p>Write appropriate numbers (i-x) in boxes 1 -6 on your answer sheet.</p>
              <p>NB There are more headings than paragraphs, so you will not use them all.</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              { id: "i", text: "Sea turtles are found in unusual locations" },
              { id: "ii", text: "Unique features of the Leatherbacks" },
              { id: "iii", text: "The Leatherback’s contribution" },
              { id: "iv", text: "Methods used for routes tracking" },
              { id: "v", text: "Predict the migration routes" },
              { id: "vi", text: "Remains multiplicity within the species" },
              { id: "vii", text: "The progress of hatching" },
              { id: "viii", text: "The fate of the lost turtles" },
              { id: "ix", text: "How trips supposed to look like?" },
              { id: "x", text: "Factors leading to population decline" },
            ],
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                paragraphId: "B",
                correctAnswer: "i",
              },
              {
                id: "q2",
                questionNumber: 2,
                paragraphId: "C",
                correctAnswer: "iv",
              },
              {
                id: "q3",
                questionNumber: 3,
                paragraphId: "D",
                correctAnswer: "ix",
              },
              {
                id: "q4",
                questionNumber: 4,
                paragraphId: "E",
                correctAnswer: "viii",
              },
              {
                id: "q5",
                questionNumber: 5,
                paragraphId: "F",
                correctAnswer: "x",
              },
              {
                id: "q6",
                questionNumber: 6,
                paragraphId: "G",
                correctAnswer: "iii",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 7 -13</p>
              <p>Choose words from the passage to answer the questions 7-13. Write NO MORE THAN THREE WORDS for each answer.</p>
            `,
            questions: [
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank_passage",
                text: "How many Leatherback turtles are there in the world?",
                correctAnswer: "35",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank_passage",
                text:
                  "What is the most noticeable difference between other sea turtles and leatherbacks?",
                correctAnswer: "The bony carapace",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank_passage",
                text: "What can leatherback turtles to die in Irish waters?",
                correctAnswer: ["Cold water", "temperature"],
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank_passage",
                text: "Where did the four turtles probably come from?",
                correctAnswer: ["Florida, America", "The north American"],
              },
              {
                id: "q11",
                questionNumber: 11,
                type: "fill_in_the_blank_passage",
                text:
                  "By which means can sea turtles retrace their migratory paths?",
                correctAnswer: "(detecting) magnetic fields",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "fill_in_the_blank_passage",
                text:
                  "For what purpose are Green Sea turtles killed by people?",
                correctAnswer: "Its meat",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "fill_in_the_blank_passage",
                text:
                  "What kind of species will benefits from a decline in Leatherback populations?",
                correctAnswer: "Jellyfish",
              },
            ],
          },
        ],
      },
      {
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `
          passage-2 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-20</p>
              <p>The reading passage has seven paragraphs, A-G Choose the correct heading for paragraphs A-G from the list below. Write the correct number, i-xi, in boxes 14-20 on your answer sheet.</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              {
                id: "i",
                text: "Introducing new management concepts to postwar era",
              },
              { id: "ii", text: "Ideas that stood the test of time" },
              { id: "iii", text: "Early publications" },
              {
                id: "iv",
                text: "Lack of action by the state of social issues",
              },
              {
                id: "v",
                text: "Drives or pressures motivate companies to address",
              },
              {
                id: "vi",
                text:
                  "CSR the past illustrates business are responsible for future outcomes",
              },
              { id: "vii", text: "Companies applying CSR should be selective" },
              {
                id: "viii",
                text: "Reasons that business and society benefit each other",
              },
            ],
            questions: [
              {
                id: "q14",
                questionNumber: 14,
                paragraphId: "A",
                correctAnswer: "viii",
              },
              {
                id: "q15",
                questionNumber: 15,
                paragraphId: "B",
                correctAnswer: "v",
              },
              {
                id: "q16",
                questionNumber: 16,
                paragraphId: "C",
                correctAnswer: "iv",
              },
              {
                id: "q17",
                questionNumber: 17,
                paragraphId: "D",
                correctAnswer: "vii",
              },
              {
                id: "q18",
                questionNumber: 18,
                paragraphId: "E",
                correctAnswer: "ii",
              },
              {
                id: "q19",
                questionNumber: 19,
                paragraphId: "F",
                correctAnswer: "i",
              },
              {
                id: "q20",
                questionNumber: 20,
                paragraphId: "G",
                correctAnswer: "iii",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 21-22</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than two words from the Reading Passage for each answer. Write your answers in boxes 21-22 on your answer sheet.</p>
              <p>The implement of CSR, HOW?</p>
              <p>Promotion of CSR requires the understanding of interdependence between business and society. Corporations workers’ productivity generally needs health care, Education, and given 21...............Restrictions the imposed by government and companies both protect consumers from being treated unfairly. Improvement of safety standard can reduce the 22 ...............of accidents in the workplace. Similarly society becomes pool of more human needs and aspirations.</p>
            `,
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "summary_completion",
                text: "given [GAP]",
                correctAnswer: "working conditions",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "summary_completion",
                text: "reduce the [GAP] of accidents",
                correctAnswer: "cost",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 23-26</p>
              <p>Use the information in the passage to match the companies (listed A-C) with opinions or deeds below. Write the appropriate letters A, B or C in boxes 23 26 on your answer sheet.</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "General Electronics" },
              { id: "B", text: "Microsoft" },
              { id: "C", text: "Whole foods market" },
            ],
            questions: [
              {
                id: "q23",
                questionNumber: 23,
                statement: "The disposable waste",
                correctAnswer: "C",
              },
              {
                id: "q24",
                questionNumber: 24,
                statement: "The way company purchases as goods",
                correctAnswer: "C",
              },
              {
                id: "q25",
                questionNumber: 25,
                statement: "Helping the undeveloped",
                correctAnswer: "A",
              },
              {
                id: "q26",
                questionNumber: 26,
                statement: "ensuring the people have the latest information",
                correctAnswer: "B",
              },
            ],
          },
        ],
      },
      {
        id: "reading-section-3",
        title: "Section 3",
        passageContent: `
          passage-3 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 27-30 Do the following statements agree with the claims of the writer in Reading Passage?</p>
              <p>In boxes 27-30 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q27",
                questionNumber: 27,
                text:
                  "Even researcher find sometimes it is more interesting in watching TV than talking with others in personal experience",
                correctAnswer: "TRUE",
              },
              {
                id: "q28",
                questionNumber: 28,
                text:
                  "Information medium as TV has always been the priority for scientific research.",
                correctAnswer: "FALSE",
              },
              {
                id: "q29",
                questionNumber: 29,
                text:
                  "It is partially unscientific to use the term ‘TV addiction’.",
                correctAnswer: "TRUE",
              },
              {
                id: "q30",
                questionNumber: 30,
                text: "Children do not know why they exercise too little.",
                correctAnswer: "NOT GIVEN",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 31-33</p>
              <p>Choose THREE letters, A-F.</p>
              <p>Write the correct letters in boxes 31-33 on your answer sheet.</p>
              <p>Which THREE of the following are benefits of watching TV?</p>
            `,
            options: [
              { id: "A", text: "artistic inspiration" },
              { id: "B", text: "family reunion" },
              { id: "C", text: "relieve stress" },
              { id: "D", text: "learn knowledge and education" },
              { id: "E", text: "work efficiency" },
              { id: "F", text: "ease communicative conflict" },
            ],
            questions: [
              {
                id: "q31-33",
                type: "multiple_choice_multiple_answers",

                questionNumber: "31-33",
                text:
                  "Which THREE of the following are benefits of watching TV?",
                correctAnswer: ["A", "C", "D"],
              },
            ],
          },
          {
            instructions: `
              <p>Questions 34-37</p>
              <p>Look at the following researchers (Questions 34-37) and the list of statements below. Match each researcher with the correct statements.</p>
              <p>Write the correct letter A-G in boxes 34-37 on your answer sheets.</p>
            `,
            type: "matching_items",
            listItems: [
              {
                id: "A",
                text:
                  "It is the specific media formal characteristic that counts.",
              },
              {
                id: "B",
                text:
                  "TV distraction shows human physical reaction to a new and prompted stimulus",
              },
              {
                id: "C",
                text: "Conveying information is the most important thing.",
              },
              { id: "D", text: "It is hard to ignore the effects of TV." },
              {
                id: "E",
                text:
                  "Whether people can remember deeper of the content relates with the format.",
              },
              { id: "F", text: "The heart rate remains stable when watching." },
              {
                id: "G",
                text:
                  "Clinically reliance on TV does not meet the criteria of an addiction.",
              },
            ],
            questions: [
              {
                id: "q34",
                questionNumber: 34,
                statement: "Percy Tannenbaum",
                correctAnswer: "G",
              },
              {
                id: "q35",
                questionNumber: 35,
                statement: "Ivan Pavlov",
                correctAnswer: "B",
              },
              {
                id: "q36",
                questionNumber: 36,
                statement: "Byron Reeves and Esther Thorson",
                correctAnswer: "A",
              },
              {
                id: "q37",
                questionNumber: 37,
                statement: "Annie Lang",
                correctAnswer: "E",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 38-40</p>
              <p>Complete the following summary of the paragraphs of Reading Passage 1, using NO MORE THAN TWO WORDS from the Reading Passage for each answer.</p>
              <p>Write your answers in boxes 38-40 on your answer sheet</p>
            `,
            questions: [
              {
                id: "q38",
                questionNumber: 38,
                type: "summary_completion",
                text: "TV is becoming a worldwide [GAP]",
                correctAnswer: "phenomenon",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "summary_completion",
                text: "a small group even claim themselves as [GAP]",
                correctAnswer: "addicts",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "summary_completion",
                text:
                  "described as [GAP] which is built in part of our physiological evolution.",
                correctAnswer: "orienting response",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-2",
    moduleId: "reading",
    title: "READING TEST 2",
    description:
      "Academic Reading practice test with various question types for Test 2.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-2-section-1",
        title: "Section 1",
        passageContent: `
          passage-2-1 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-5</p>
              <p>The reading Passage has ten paragraphs A-I.</p>
              <p>Which paragraph contains the following information? Write the correct letter A-I, in boxes 1-5 on your answer sheet.</p>
              <p>NB: you may use any letter more than once</p>
            `,
            type: "which_paragraph_contains",
            questions: [
              {
                id: "q1-p1",
                questionNumber: 1,
                text: "Introduction of a millman under awards",
                correctAnswer: "F", // Placeholder
              },
              {
                id: "q2-p1",
                questionNumber: 2,
                text: "The definition of an important geographical term",
                correctAnswer: "B", // Placeholder
              },
              {
                id: "q3-p1",
                questionNumber: 3,
                text: "A rival against Harrison’s invention emerged",
                correctAnswer: "H", // Placeholder
              },
              {
                id: "q4-p1",
                questionNumber: 4,
                text:
                  "Problems of sailor encountered in identifying the position on the sea",
                correctAnswer: "C", // Placeholder
              },
              {
                id: "q5-p1",
                questionNumber: 5,
                text: "Economic assist from another counterpart",
                correctAnswer: "F", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 6-8</p>
              <p>Do the following statements agree with the information given in Reading Passage 1</p>
              <p>In boxes 6-8 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q6-p1",
                questionNumber: 6,
                text:
                  "It is with no great effort by sailors to calculate the position when in the center of the ocean theoretically.",
                correctAnswer: "TRUE", // Placeholder
              },
              {
                id: "q7-p1",
                questionNumber: 7,
                text:
                  "To determine the longitude, a measurement of distance from moon to a given star is a must.",
                correctAnswer: "FALSE", // Placeholder
              },
              {
                id: "q8-p1",
                questionNumber: 8,
                text:
                  "In theory, by calculating the longitude degrees covered by a sail journey, the distance between the start and the end points can be obtained.",
                correctAnswer: "NOT GIVEN", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 9-13</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than two words from the Reading Passage for each answer. Write your answers in boxes 9-13 on your answer sheet.</p>
              <p>Hundred years ago, sailors tried to identify their time by checking the sun or stars, but the trouble was that they did need a reliable clock which showed time of......9.......</p>
              <p>And the timekeeper required would be to precisely tell a tangible time lapse confined to......10...... An extraordinary craftsman, Harrison, once created a novel clock which did not rely on 11......to work properly.</p>
              <p>Later on, competitive mode of 12.........was another prominent device designed by Hadley, which calculated angle between sun and the earth. Base on Harrison's effort, Earns haw eventually implement key components for 13…...... which had been used ever since.</p>
            `,

            questions: [
              {
                id: "q9-p1",
                questionNumber: 9,
                type: "summary_completion",
                text: "time of [GAP]",
                correctAnswer: "Home", // Placeholder
              },
              {
                id: "q10-p1",
                questionNumber: 10,
                type: "summary_completion",
                text: "confined to [GAP]",

                correctAnswer: "2.8s", // Placeholder
              },
              {
                id: "q11-p1",
                questionNumber: 11,
                type: "summary_completion",
                text: "did not rely on [GAP] to work properly.",
                correctAnswer: ["Oil", "Lubrication"], // Placeholder
              },
              {
                id: "q12-p1",
                questionNumber: 12,
                type: "summary_completion",
                text: "competitive mode of [GAP]",
                correctAnswer: "Sextant", // Placeholder
              },
              {
                id: "q13-p1",
                questionNumber: 13,
                type: "summary_completion",
                text: "key components for [GAP]",
                correctAnswer: "Marine chronometer", // Placeholder
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-2-section-2",
        title: "Section 2",
        passageContent: `
          passage-2-2 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-19</p>
              <p>Reading Passage 2 has 6 paragraphs A-F. Choose die correct heading for paragraphs A-F from the list of headings below. Write the correct number: i-x, in boxes 14-19 on your answer sheet</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              {
                id: "i",
                text: "Introducing new management concepts to postwar era",
              },
              { id: "ii", text: "Ideas that stood the test of time" },
              { id: "iii", text: "Early publications" },
              {
                id: "iv",
                text: "Shifting the focus of management in modem manufactures",
              },
              {
                id: "v",
                text: "Thinker and scholar with world-wide popularity",
              },
              { id: "vi", text: "Drucker’s concepts are flawed" },
              {
                id: "vii",
                text: "The changing role of employees in management",
              },
              { id: "viii", text: "Find fault with Drucker" },
              { id: "ix", text: "Iconic view of “management by objectives”" },
            ],
            questions: [
              {
                id: "q14-p2",
                questionNumber: 14,
                paragraphId: "A",
                correctAnswer: "v", // Placeholder
              },
              {
                id: "q15-p2",
                questionNumber: 15,
                paragraphId: "B",
                correctAnswer: "iii", // Placeholder
              },
              {
                id: "q16-p2",
                questionNumber: 16,
                paragraphId: "C",
                correctAnswer: "ix", // Placeholder
              },
              {
                id: "q17-p2",
                questionNumber: 17,
                paragraphId: "D",
                correctAnswer: "vii", // Placeholder
              },
              {
                id: "q18-p2",
                questionNumber: 18,
                paragraphId: "E",
                correctAnswer: "viii", // Placeholder
              },
              {
                id: "q19-p2",
                questionNumber: 19,
                paragraphId: "F",
                correctAnswer: "ii", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 20-23</p>
              <p>Do the following statements agree with the information given in Reading Passage 2?</p>
              <p>In boxes 20-23 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q20-p2",
                questionNumber: 20,
                text:
                  "Drucker believed the employees should enjoy the same status as the employers in a company",
                correctAnswer: "NOT GIVEN", // Placeholder
              },
              {
                id: "q21-p2",
                questionNumber: 21,
                text:
                  "Middle management tasks will change since companies become more complicated and run business globally",
                correctAnswer: "TRUE", // Placeholder
              },
              {
                id: "q22-p2",
                questionNumber: 22,
                text:
                  "Drucker strongly support that economists of schools have resources to explain the problems of modem economies at least in a macroeconomics scope",
                correctAnswer: "FALSE", // Placeholder
              },
              {
                id: "q23-p2",
                questionNumber: 23,
                text:
                  "Drucker’s ideas proposed half a century ago are out of date in modem days",
                correctAnswer: "FALSE", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 24-25</p>
              <p>Choose TWO letters from A-E. Write your answers in boxes 24 and 25 on your answer sheet.</p>
              <p>Which TWO of the following are true of Drucker’s views?</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              {
                id: "A",
                text:
                  "Managers should be responsible for the common good of the whole society.",
              },
              {
                id: "B",
                text:
                  "Young executives should be given chances to start from low level jobs",
              },
              {
                id: "C",
                text:
                  "More emphasis should be laid on fostering the development of the union.",
              },
              {
                id: "D",
                text:
                  "Management should facilitate workers with tools of self-appraisal instead of controlling them from the outside.",
              },
              {
                id: "E",
                text:
                  "management should go beyond an isolate discipline as to incorporate ideas with many subjects",
              },
            ],
            questions: [
              {
                id: "q24-25-p2",
                questionNumber: "24-25",
                text: "Which TWO of the following are true of Drucker’s views?",
                correctAnswer: ["A", "E"], // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 26-27</p>
              <p>Choose TWO letters from A-E. Write your answers in boxes 26 and 27 on your answer sheet.</p>
              <p>Which TWO of the following are mentioned in the passage as criticisms to Drucker and his views?</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              {
                id: "A",
                text:
                  "He did not show enough respect to Japanese employees when he said English was the official language for all employees at Japan’s Mitsui trading company.",
              },
              {
                id: "B",
                text:
                  "His lectures are too broad and lack of being precise and accurate about the facts,",
              },
              {
                id: "C",
                text:
                  "His concepts helped corporate executives but not average workers.",
              },
              {
                id: "D",
                text:
                  "His ideas are sometimes impractical and result in opposite outcomes.",
              },
              {
                id: "E",
                text:
                  "He was overstating the case for knowledge workers when warning businesses to get prepared.",
              },
            ],
            questions: [
              {
                id: "q26-27-p2",
                questionNumber: "26-27",
                text:
                  "Which TWO of the following are mentioned in the passage as criticisms to Drucker and his views?",
                correctAnswer: ["B", "D"], // Placeholder
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-2-section-3",
        title: "Section 3",
        passageContent: `
          passage-2-3 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 28-32</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than three words from the Reading Passage for each answer. Write your answers in boxes 28-32 on your answer sheet.</p>
              <p>Having been preserved well in Europe and central Asia, the remains of the Irish elk was initially found approximately _______28____. Around _____29______, they were driven to live in the plain after being restricted to the Ural Mountains. Hunting was considered as one of the important factors of Irish elk's extinction, people have not started hunting until______30______ when Irish elk used to get through under a variety of climatic fluctuations. The huge antlers may possibly contribute to the reason why Irish elk extinct, which was highly controversial as they live pleasantly over the span of____31_____. Generally, it is well-known that, at the last maximum ice age, mammals become extinct about ______32_____. </p>
            `,

            questions: [
              {
                id: "q28-p3",
                questionNumber: 28,
                type: "summary_completion",
                text: "initially found approximately [GAP]",
                correctAnswer: ["400000 years ago", "400,000 years ago"], // Placeholder
              },
              {
                id: "q29-p3",
                questionNumber: 29,
                type: "summary_completion",
                text: "Around [GAP], they were driven to live in the plain",
                correctAnswer: "8000 years ago", // Placeholder
              },
              {
                id: "q30-p3",
                questionNumber: 30,
                type: "summary_completion",
                text: "people have not started hunting until [GAP]",
                correctAnswer: "7000 years ago", // Placeholder
              },
              {
                id: "q31-p3",
                questionNumber: 31,
                type: "summary_completion",
                text: "over the span of [GAP]",
                correctAnswer: "Wooded interglacials", // Placeholder
              },
              {
                id: "q32-p3",
                questionNumber: 32,
                type: "summary_completion",
                text: "mammals become extinct about [GAP]",
                correctAnswer: "10500 years ago", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 33-35</p>
              <p>Answer the questions below. Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.</p>
            `,

            questions: [
              {
                id: "q33-p3",
                type: "fill_in_the_blank_passage",
                questionNumber: 33,
                text:
                  "What kind of physical characteristics eventually contributed to the extinction of Irish elk?",
                correctAnswer: "Male's huge antlers", // Placeholder
              },
              {
                id: "q34-p3",
                questionNumber: 34,
                type: "fill_in_the_blank_passage",
                text:
                  "What kind of nutrient substance needed in maintaining the huge size of Irish elk?",
                correctAnswer: "Minerals", // Placeholder
              },
              {
                id: "q35-p3",
                questionNumber: 35,
                type: "fill_in_the_blank_passage",
                text:
                  "What geographical evidence suggested the advent of human resulted in the extinction of Irish elk?",
                correctAnswer: "Habitat destruction", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 36-39</p>
              <p>Matching choose the letter A-D and fill in box 36-39</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Eurasia" },
              { id: "B", text: "Australia" },
              { id: "C", text: "Asia" },
              { id: "D", text: "Africa" },
            ],
            questions: [
              {
                id: "q36-p3",
                questionNumber: 36,
                statement:
                  "the continents where humans imposed little impact on large mammals extinction",
                correctAnswer: "B", // Placeholder
              },
              {
                id: "q37-p3",
                questionNumber: 37,
                statement:
                  "the continents where the climatic change was mild and fauna remains",
                correctAnswer: "D", // Placeholder
              },
              {
                id: "q38-p3",
                questionNumber: 38,
                statement:
                  "the continents where both humans and climatic change are the causes",
                correctAnswer: "A", // Placeholder
              },
              {
                id: "q39-p3",
                questionNumber: 39,
                statement:
                  "the continents where the climatic change along caused a massive extinction",
                correctAnswer: "C", // Placeholder
              },
            ],
          },
          {
            questions: [
              {
                id: "q40-p3",
                type: "mcq",
                questionNumber: 40,
                text:
                  "Which statement is true according the Stuart team's finding?",
                options: [
                  "A. Neanderthals rather than modem humans caused the extinction in Europe",
                  "B. Paleolithic humans in Europe along kill the big animals such as Giant deer",
                  "C. climatic change was not solely responsible for the mega fauna extinction in Europe",
                  "D. moderate and staggered extinction was mainly the result of fundamental climatic change",
                ],
                correctAnswer: "C", // Placeholder
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-3",
    moduleId: "reading",
    title: "READING TEST 3",
    description:
      "Academic Reading practice test with various question types for Test 3.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-3-section-1",
        title: "Section 1",
        passageContent: `
          passage-3-1 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-6</p>
              <p>Use the information in the passage to match the people (listed A- C) with opinions or deeds (listed 1-6) below. Write the appropriate letter (A-C) in boxes 1-6 on your answer sheet.</p>
              <p>A. Paul Olsen</p>
              <p>B. Michael Benton</p>
              <p>C. Peter Ward</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Paul Olsen" },
              { id: "B", text: "Michael Benton" },
              { id: "C", text: "Peter Ward" },
            ],
            questions: [
              {
                id: "q1-p3s1",
                questionNumber: 1,
                statement:
                  "Large animals are in a disadvantageous position when disasters happen.",
                correctAnswer: "A",
              },
              {
                id: "q2-p3s1",
                questionNumber: 2,
                statement:
                  "Radical changes in carbon types are related to massive extinction of vegetation.",
                correctAnswer: "C",
              },
              {
                id: "q3-p3s1",
                questionNumber: 3,
                statement:
                  "The changes in earth's animal species become easier to identify by adding footprint investigation.",
                correctAnswer: "A",
              },
              {
                id: "q4-p3s1",
                questionNumber: 4,
                statement:
                  "Geochemical evidence suggests an asteroid impact before dinosaurs appeared.",
                correctAnswer: "A",
              },
              {
                id: "q5-p3s1",
                questionNumber: 5,
                statement: "Footprint study is a way of research.",
                correctAnswer: "C",
              },
              {
                id: "q6-p3s1",
                questionNumber: 6,
                statement:
                  "Persuasive clues of an iridium spike were discovered for the first time.",
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 7-13</p>
              <p>Do the following statements agree with the information given in Reading Passage?</p>
              <p>In boxes 7-13 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q7-p3s1",
                questionNumber: 7,
                text:
                  "The rare element, iridium, was presented both on earth and in meteorites.",
                correctAnswer: "TRUE",
              },
              {
                id: "q8-p3s1",
                questionNumber: 8,
                text:
                  "The meteor impact theory had been suspected before the discovery of the impact site and other supporting evidence.",
                correctAnswer: "TRUE",
              },
              {
                id: "q9-p3s1",
                questionNumber: 9,
                text:
                  "Footprints are of little value in providing information, in comparison to fossil bones, because individual species cannot be identified with footprints.",
                correctAnswer: "FALSE",
              },
              {
                id: "q10-p3s1",
                questionNumber: 10,
                text:
                  "According to scientists, the transition to a dinosaur-dominated era took place very quickly by geological time scales.",
                correctAnswer: "TRUE",
              },
              {
                id: "q11-p3s1",
                questionNumber: 11,
                text:
                  "The creatures that disappeared in the extinction were the dominantly the 15 foot-long rauisuchians and large crocodiles.",
                correctAnswer: "FALSE",
              },
              {
                id: "q12-p3s1",
                questionNumber: 12,
                text:
                  "Tyrannosaurus rex was larger in body size than other carnivorous dinosaurs.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q13-p3s1",
                questionNumber: 13,
                text:
                  "Large dinosaurs died out but small ones evolved and competed with birds and mammals.",
                correctAnswer: "NOT GIVEN",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-3-section-2",
        title: "Section 2",
        passageContent: `
          passage-3-2 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-18</p>
              <p>Do the following statements agree with the information given in Reading Passage 1?</p>
              <p>In boxes 14-18 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q14-p3s2",
                questionNumber: 14,
                text:
                  "With the investigation of the lake, scientist may predict the climate changes in the future.",
                correctAnswer: "TRUE",
              },
              {
                id: "q15-p3s2",
                questionNumber: 15,
                text:
                  "The crater resulted from a meteorite impact is the largest and most preserved one in the world.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q16-p3s2",
                questionNumber: 16,
                text:
                  "The water stored in Lake Bosumtwi was gone only by seeping through the lake sediments.",
                correctAnswer: "FALSE",
              },
              {
                id: "q17-p3s2",
                questionNumber: 17,
                text:
                  "Historical climate changes can be detected by the analysis of the sediment in the lake.",
                correctAnswer: "TRUE",
              },
              {
                id: "q18-p3s2",
                questionNumber: 18,
                text:
                  "The greatest obstacle to research of scientists had been the interference by the locals due to the indigenous believes.",
                correctAnswer: "FALSE",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 19 - 22</p>
              <p>There are three steps of collecting data from the lake as followings, please filling the blanks in the Flow Chart below:</p>
              <div class="map-image-container">
                  <img src="assets/reading-passage-3-img.png">
              </div>
            `,
            questions: [
              {
                id: "q19-p3s2",
                questionNumber: 19,
                type: "fill_in_the_blank",

                text: "Step 1: [GAP]",
                correctAnswer: "(high-pressure) air microphones",
              },
              {
                id: "q20-p3s2",
                questionNumber: 20,
                type: "fill_in_the_blank",

                text: "Step 2: [GAP]",
                correctAnswer: ["sound energy", "sound wave"],
              },
              {
                id: "q21-p3s2",
                questionNumber: 21,
                type: "fill_in_the_blank",

                text: "Step 3: [GAP]",
                correctAnswer: "cable",
              },
              {
                id: "q22-p3s2",
                questionNumber: 22,
                type: "fill_in_the_blank",

                text: "Step 4: [GAP]",
                correctAnswer: ["hydrophones", "underwater microphones"],
              },
            ],
          },
          {
            instructions: `
              <p>Questions 23-27</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than three words from the Reading Passage for each answer. Write your answers in boxes 23-27 on your answer sheet.</p>
              <p>The boat-double R/V Kilindi crossed the lake was dismantled and stored in a ........23........... The technology they used called........24......; they created sound energy in to 1000-2000 metres in to the bottom of the lake, and used separate equipment to collect the returned waves. Then the data had been analyzed and processed in the........25....... Scholz also added that they were now building ........26......view of the sediment or sub-image in the bottom of the lake. Whole set of equipment works well yet the ship should avoid physical barrier including tree stumps or........27......floating on the surface of the lake.</p>
            `,
            questions: [
              {
                id: "q23-p3s2",
                questionNumber: 23,
                type: "summary_completion",
                text: "dismantled and stored in a [GAP]",
                correctAnswer: "shipping container",
              },
              {
                id: "q24-p3s2",
                questionNumber: 24,
                type: "summary_completion",
                text: "technology they used called [GAP]",
                correctAnswer: "seismic reflection profiling",
              },
              {
                id: "q25-p3s2",
                questionNumber: 25,
                type: "summary_completion",
                text: "processed in the [GAP]",
                correctAnswer: "laboratory",
              },
              {
                id: "q26-p3s2",
                questionNumber: 26,
                type: "summary_completion",
                text: "building [GAP] view",
                correctAnswer: "three-dimensional",
              },
              {
                id: "q27-p3s2",
                questionNumber: 27,
                type: "summary_completion",
                text: "tree stumps or [GAP] floating",
                correctAnswer: "fishing nets",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-3-section-3",
        title: "Section 3",
        passageContent: `
          passage-3-3 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 28-34</p>
              <p>Use the information in the passage to match the company (listed A-F) with correct category or deeds below. Write the appropriate letters A-F in boxes 28-33 on your answer sheet.</p>
              <p>NB: you may use any letter more than once</p>
            `,
            type: "matching_items",
            listItems: [
              {
                id: "A",
                text: "legendary anecdote inspire employee successfully",
              },
              {
                id: "B",
                text:
                  "advertisement campaign inspire employees and ensure leading role in business",
              },
              { id: "C", text: "improper ads campaign brings negative effect" },
              {
                id: "D",
                text: "internal and external announcement are different",
              },
              {
                id: "E",
                text:
                  "campaign brings positive and realistic expectation internally",
              },
              {
                id: "F",
                text:
                  "a bad slogan that failed both to win support internally and raise standard to its poor service",
              },
            ],
            questions: [
              {
                id: "q28-p3s3",
                questionNumber: 28,
                statement:
                  "Company X (Placeholder for a company from the passage)",
                correctAnswer: "D",
              },
              {
                id: "q29-p3s3",
                questionNumber: 29,
                statement:
                  "Company Y (Placeholder for a company from the passage)",
                correctAnswer: "C",
              },
              {
                id: "q30-p3s3",
                questionNumber: 30,
                statement:
                  "Company Z (Placeholder for a company from the passage)",
                correctAnswer: "B",
              },
              {
                id: "q31-p3s3",
                questionNumber: 31,
                statement:
                  "Company A (Placeholder for a company from the passage)",
                correctAnswer: "F",
              },
              {
                id: "q32-p3s3",
                questionNumber: 32,
                statement:
                  "Company B (Placeholder for a company from the passage)",
                correctAnswer: "C",
              },
              {
                id: "q33-p3s3",
                questionNumber: 33,
                statement:
                  "Company C (Placeholder for a company from the passage)",
                correctAnswer: "A",
              },
              {
                id: "q34-p3s3",
                questionNumber: 34,
                statement:
                  "Company D (Placeholder for a company from the passage)",
                correctAnswer: "E",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 35-38</p>
              <p>Do the following statements agree with the information given in Reading Passage 3? In boxes 35-38 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q35-p3s3",
                questionNumber: 35,
                text:
                  "Employers in almost all companies successfully make their employees fully understand the outside campaign.",
                correctAnswer: "FALSE",
              },
              {
                id: "q36-p3s3",
                questionNumber: 36,
                text:
                  "Currently IBM is more prominent in the area of E-business",
                correctAnswer: "TRUE",
              },
              {
                id: "q37-p3s3",
                questionNumber: 37,
                text:
                  "United Airline finally gave up an ads slogan due to a survey in 1996.",
                correctAnswer: "TRUE",
              },
              {
                id: "q38-p3s3",
                questionNumber: 38,
                text:
                  "Nike had improved company performance through telling employees legendary corporation stories.",
                correctAnswer: "NOT GIVEN",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 39-40</p>
              <p>Choose two correct letters below</p>
              <p>Write your answers in boxes 39-40 on your answer sheet.</p>
              <p>Please choose TWO approaches in the passage mentioned that were employed as company strategy:</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              {
                id: "A",
                text:
                  "promoting the visual effect of their products’ advertisement",
              },
              { id: "B", text: "launching inspiring campaigns internally" },
              { id: "C", text: "introducing inner competition" },
              {
                id: "D",
                text: "learning how to tell stories among senior executives",
              },
              { id: "E", text: "applying an appropriate slogan" },
            ],
            questions: [
              {
                id: "q39-40-p3s3",
                questionNumber: "39-40",
                text:
                  "Please choose TWO approaches in the passage mentioned that were employed as company strategy:",
                correctAnswer: ["B", "E"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-4",
    moduleId: "reading",
    title: "READING TEST 4",
    description:
      "Academic Reading practice test with various question types for Test 4.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-4-section-1",
        title: "Section 1",
        passageContent: `
          passage-4-1 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-6</p>
              <p>The reading Passage has seven paragraphs A-G. Which paragraph contains the following information? Write the correct letter A-G, in boxes 1-6 on your answer sheet</p>
            `,
            type: "which_paragraph_contains",
            questions: [
              {
                id: "q1-p4s1",
                questionNumber: 1,
                text: "A new approach carried out in the UK",
                correctAnswer: "D",
              },
              {
                id: "q2-p4s1",
                questionNumber: 2,
                text: "Reasons why twisty path and dykes failed",
                correctAnswer: "B",
              },
              {
                id: "q3-p4s1",
                questionNumber: 3,
                text:
                  "Illustration of an alternative Plan in LA which seems much unrealistic",
                correctAnswer: "G",
              },
              {
                id: "q4-p4s1",
                questionNumber: 4,
                text: "Traditional way of tackling flood",
                correctAnswer: "A",
              },
              {
                id: "q5-p4s1",
                questionNumber: 5,
                text: "Effort made in Netherlands and Germany",
                correctAnswer: "F",
              },
              {
                id: "q6-p4s1",
                questionNumber: 6,
                text: "One project on a river benefits three nations",
                correctAnswer: "E",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 7-11</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than two words from the Reading Passage for each answer. Write your answers in boxes 7-11 on your answer sheet.</p>
              <p>Flood makes river shorter than it used to be, which means faster speed and more damage to constructions on flood plain. Not only European river poses such threat but the same things happens to the powerful____7_____in the US. In Europe, one innovative approach carried out by UK's Environment Agency, for example a wetland instead of concrete walls is generated not far from the city of____8_____to protect it from flooding. In 1995, Rhine flooded again and thousands of people left the country of_____9______. A league of engineers suggested that cities should be porous, _____10____set a good example for others. Another city devastated by heavy storms casually is ______11______, though its government pours billions of dollars each year in order to solve the problem.</p>
            `,
            questions: [
              {
                id: "q7-p4s1",
                questionNumber: 7,
                type: "summary_completion",
                text: "powerful [GAP] in the US.",
                correctAnswer: "Mississippi",
              },
              {
                id: "q8-p4s1",
                questionNumber: 8,
                type: "summary_completion",
                text:
                  "not far from the city of [GAP] to protect it from flooding.",
                correctAnswer: "London",
              },
              {
                id: "q9-p4s1",
                questionNumber: 9,
                type: "summary_completion",
                text: "thousands of people left the country of [GAP].",
                correctAnswer: ["Netherlands", "The Netherlands"],
              },
              {
                id: "q10-p4s1",
                questionNumber: 10,
                type: "summary_completion",
                text: "porous, [GAP] set a good example for others.",
                correctAnswer: "Berlin",
              },
              {
                id: "q11-p4s1",
                questionNumber: 11,
                type: "summary_completion",
                text:
                  "casually is [GAP], though its government pours billions of dollars each year in order to solve the problem.",
                correctAnswer: ["Los Angeles", "LA"],
              },
            ],
          },
          {
            instructions: `
              <p>Questions 12-13</p>
              <p>Choose TWO correct letter, write your answers in boxes 12-13 on your answer sheet</p>
              <p>What TWO benefits will the new approach in the UK and Austria bring to US according to this passage?</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              { id: "A", text: "We can prepare before flood comes" },
              {
                id: "B",
                text: "It may stop the flood involving the whole area",
              },
              {
                id: "C",
                text:
                  "Decrease strong rainfalls around Alps simply by engineering constructions",
              },
              { id: "D", text: "Reserve water to protect downstream towns" },
              { id: "E", text: "Store tons of water in downstream area" },
            ],
            questions: [
              {
                id: "q12-13-p4s1",
                questionNumber: "12-13",
                text:
                  "What TWO benefits will the new approach in the UK and Austria bring to US according to this passage?",
                correctAnswer: ["B", "D"],
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-4-section-2",
        title: "Section 2",
        passageContent: `
          passage-4-2 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-18</p>
              <p>The reading Passage has seven paragraphs A-I. Which paragraph contains the following information? Write the correct letter A-I, in boxes 14-18 on your answer sheet.</p>
            `,
            type: "which_paragraph_contains",
            questions: [
              {
                id: "q14-p4s2",
                questionNumber: 14,
                text:
                  "Difference between bubble burst impacts by tulip and by high-tech shares",
                correctAnswer: "I",
              },
              {
                id: "q15-p4s2",
                questionNumber: 15,
                text: "Spread of tulip before 17th century",
                correctAnswer: "D",
              },
              {
                id: "q16-p4s2",
                questionNumber: 16,
                text:
                  "Indication of money offered for rare bulb in 17th century",
                correctAnswer: "B",
              },
              {
                id: "q17-p4s2",
                questionNumber: 17,
                text: "Tulip was treated as money in Holland",
                correctAnswer: "G",
              },
              {
                id: "q18-p4s2",
                questionNumber: 18,
                text: "Comparison made between tulip and other plants",
                correctAnswer: "F",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 19-23</p>
              <p>Do the following statements agree with the information given in Reading Passage 2?</p>
              <p>In boxes 19-23 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q19-p4s2",
                questionNumber: 19,
                text:
                  "In 1624, all the tulip collection belonged to a man in Amsterdam.",
                correctAnswer: "TRUE",
              },
              {
                id: "q20-p4s2",
                questionNumber: 20,
                text:
                  "Tulip was first planted in Holland according to this passage.",
                correctAnswer: "FALSE",
              },
              {
                id: "q21-p4s2",
                questionNumber: 21,
                text:
                  "Popularity of Tulip in Holland was much higher than any other countries in 17th century.",
                correctAnswer: "TRUE",
              },
              {
                id: "q22-p4s2",
                questionNumber: 22,
                text:
                  "Holland was the wealthiest country in the world in 17th century.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q23-p4s2",
                questionNumber: 23,
                text:
                  "From 1630, Amsterdam Stock Exchange started to regulate Tulips exchange market.",
                correctAnswer: "FALSE",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 24-27</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than two words from the Reading Passage for each answer. Write your answers in boxes 24-27 on your answer sheet.</p>
              <p>Dutch concentrated on gaining independence by ____24____ against Spain in the early 17th century; consequently spare resources entered the area of _____25_____. Prosperous traders demonstrated their status by building great _____26____ and with gardens in surroundings. Attracted by the success of profit on tulip, traders kept looking for______27_____and speculator for sale.</p>
            `,
            questions: [
              {
                id: "q24-p4s2",
                questionNumber: 24,
                type: "summary_completion",
                text: "gaining independence by [GAP] against Spain",
                correctAnswer: "Fighting",
              },
              {
                id: "q25-p4s2",
                questionNumber: 25,
                type: "summary_completion",
                text: "entered the area of [GAP].",
                correctAnswer: "commerce",
              },
              {
                id: "q26-p4s2",
                questionNumber: 26,
                type: "summary_completion",
                text: "building great [GAP] and with gardens in surroundings.",
                correctAnswer: "estates",
              },
              {
                id: "q27-p4s2",
                questionNumber: 27,
                type: "summary_completion",
                text: "looking for [GAP] and speculator for sale.",
                correctAnswer: "flower lovers",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-4-section-3",
        title: "Section 3",
        passageContent: `
          passage-4-3 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 28-31</p>
              <p>Choose the correct letter. A, B, c or D. Write your answers in boxes 37-40 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q28-p4s3",
                questionNumber: 28,
                type: "mcq",
                text: "The main purpose of Ciadini’s research of writing is to",
                options: [
                  "A. explain the reason way researcher should investigate in person",
                  "B. explore the secret that why some people become the famous sales person",
                  "C. help people to sale products",
                  "D. prove maybe there is a science in the psychology of persuasion",
                ],
                correctAnswer: "D",
              },
              {
                id: "q29-p4s3",
                questionNumber: 29,
                type: "mcq",
                text:
                  "Which of statement is CORRECT according to Ciadini‘s research methodology",
                options: [
                  "A. he checked data in a lot of latest books",
                  "B. he conducted this experiment in laboratory",
                  "C. he interviewed and contact with many sales people",
                  "D. he made lot phone calls collecting what he wants to know",
                ],
                correctAnswer: "C",
              },
              {
                id: "q30-p4s3",
                questionNumber: 30,
                type: "mcq",
                text:
                  "Which of the followings is CORRECT according to towel experiment in the passage?",
                options: [
                  "A. Different hotel guests act in a different response",
                  "B. Most guests act by idea of environment preservation",
                  "C. more customers tend to cooperate as the message requires than simply act environmentally",
                  "D. people tend to follow the hotel’s original message more",
                ],
                correctAnswer: "C",
              },
              {
                id: "q31-p4s3",
                questionNumber: 31,
                type: "mcq",
                text:
                  "Which of the followings is CORRECT according to the candy shop experiment in the passage?",
                options: [
                  "A. Presenting way affects diner's tips",
                  "B. Regular customer gives tips more than irregulars",
                  "C. People give tips only when offered chocolate",
                  "D. Chocolate with bill got higher tips",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 32-35</p>
              <p>Do the following statements agree with the information given in Reading Passage 3? In boxes 32-35 on your answer sheet, write</p>
              <p><strong>YES</strong> if the statement agrees with the information</p>
              <p><strong>NO</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "yes_no_not_given",
            questions: [
              {
                id: "q32-p4s3",
                questionNumber: 32,
                text:
                  "Robert Cialdini experienced 'principles of influence' himself in realistic life.",
                correctAnswer: "YES",
              },
              {
                id: "q33-p4s3",
                questionNumber: 33,
                text:
                  "Principle of persuasion has different types in different countries.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q34-p4s3",
                questionNumber: 34,
                text:
                  "In New Zealand, people tend to give tips to attendants after being served a chocolate.",
                correctAnswer: "NO",
              },
              {
                id: "q35-p4s3",
                questionNumber: 35,
                text:
                  "Elder generation of New Zealand is easily attracted by extra service of restaurants by principle of reciprocity.",
                correctAnswer: "NOT GIVEN",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 36-40</p>
              <p>Use the information in the passage to match the category (listed A-E) with correct description below. Write the appropriate letters A-E in boxes 32-37 on answer sheet.</p>
              <p>NB You may use any letter more than once.</p>
              <p>A. Reciprocity of scarcity</p>
              <p>B. Authority</p>
              <p>C. previous comment</p>
              <p>D. Liking</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Reciprocity of scarcity" },
              { id: "B", text: "Authority" },
              { id: "C", text: "previous comment" },
              { id: "D", text: "Liking" },
            ],
            questions: [
              {
                id: "q36-p4s3",
                questionNumber: 36,
                statement:
                  "Some expert may reveal qualification in front of clients.",
                correctAnswer: "B",
              },
              {
                id: "q37-p4s3",
                questionNumber: 37,
                statement:
                  "Parents tend to say something that other kids are doing the same.",
                correctAnswer: "E",
              },
              {
                id: "q38-p4s3",
                questionNumber: 38,
                statement:
                  "Advertisers ruthlessly exploit the limitation of chances",
                correctAnswer: "A",
              },
              {
                id: "q39-p4s3",
                questionNumber: 39,
                statement: "Use a familiar name in a survey.",
                correctAnswer: "D",
              },
              {
                id: "q40-p4s3",
                questionNumber: 40,
                statement: "Ask colleagues to offer a helping hand",
                correctAnswer: "C",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-5",
    moduleId: "reading",
    title: "READING TEST 5",
    description:
      "Academic Reading practice test with various question types for Test 5.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-5-section-1",
        title: "Section 1",
        passageContent: `
          passage-5-1 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-5</p>
              <p>Do the following statements agree with the information given in Reading Passage 1</p>
              <p>In boxes 1-5 on your answer sheet, write</p>
              <p><strong>YES</strong> if the statement agrees with the information</p>
              <p><strong>NO</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "yes_no_not_given",
            questions: [
              {
                id: "q1-p5s1",
                questionNumber: 1,
                text:
                  "Mind Gym coach instructed employees to imagine that they are the building.",
                correctAnswer: "NO",
              },
              {
                id: "q2-p5s1",
                questionNumber: 2,
                text:
                  "Mind Gym uses the similar marketing theory that is used all round",
                correctAnswer: "YES",
              },
              {
                id: "q3-p5s1",
                questionNumber: 3,
                text: "Susan Greenfield is the founder of Mind Gym.",
                correctAnswer: "NO",
              },
              {
                id: "q4-p5s1",
                questionNumber: 4,
                text:
                  "All business and industries are using Mind Gym's session globally.",
                correctAnswer: "NO",
              },
              {
                id: "q5-p5s1",
                questionNumber: 5,
                text:
                  "According to Mind Gym, extensive scientific background supports their mental training sessions.",
                correctAnswer: "NOT GIVEN",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 6-13</p>
              <p>Use the information in the passage to match the people (listed A-D) with opinions or deeds below. Write the appropriate letters A-D in boxes 6-13 on your answer sheet.</p>
              <p>A. Guy Claxton</p>
              <p>B. Sebastian Bailey</p>
              <p>C. Susan Greenfield</p>
              <p>D. Lawrence Katz</p>
              <p>NB: You may use any letter more than once</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Guy Claxton" },
              { id: "B", text: "Sebastian Bailey" },
              { id: "C", text: "Susan Greenfield" },
              { id: "D", text: "Lawrence Katz" },
            ],
            questions: [
              {
                id: "q6-p5s1",
                questionNumber: 6,
                statement:
                  "We do not have enough inspiration to keep our brain fit.",
                correctAnswer: "D",
              },
              {
                id: "q7-p5s1",
                questionNumber: 7,
                statement:
                  "The more you exercise your brain like exercise in the gym, the more brain will grow.",
                correctAnswer: "C",
              },
              {
                id: "q8-p5s1",
                questionNumber: 8,
                statement:
                  "Exercise can keep your brain health instead of improving someone's IQ.",
                correctAnswer: "D",
              },
              {
                id: "q9-p5s1",
                questionNumber: 9,
                statement:
                  "It is valuable for schools to teach students about creative skills besides basic known knowledge.",
                correctAnswer: "A",
              },
              {
                id: "q10-p5s1",
                questionNumber: 10,
                statement:
                  "We can develop new neuron connections when we lose old connections via certain treatment.",
                correctAnswer: "D",
              },
              {
                id: "q11-p5s1",
                questionNumber: 11,
                statement:
                  "People usually mark themselves as not creative before figuring out there are approaches for each person.",
                correctAnswer: "B",
              },
              {
                id: "q12-p5s1",
                questionNumber: 12,
                statement:
                  "An instructor in Mind Gym who guided the employees to exercise.",
                correctAnswer: "B",
              },
              {
                id: "q13-p5s1",
                questionNumber: 13,
                statement:
                  "Majority of people don't have appropriate skills-training for brain.",
                correctAnswer: "A",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-5-section-2",
        title: "Section 2",
        passageContent: `
          passage-5-2 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-18</p>
              <p>Use the information in the passage to match the category of each navigation method (listed A-C) with correct statement. Write the appropriate letters A-C in boxes 14-18 on your answer sheet.</p>
              <p>NB you may use any letter more than once</p>
              <p>A. Guidance</p>
              <p>B. Path integration,</p>
              <p>C. Route following</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Guidance" },
              { id: "B", text: "Path integration" },
              { id: "C", text: "Route following" },
            ],
            questions: [
              {
                id: "q14-p5s2",
                questionNumber: 14,
                statement:
                  "Using basic direction from starting point and light intensity to move on.",
                correctAnswer: "B",
              },
              {
                id: "q15-p5s2",
                questionNumber: 15,
                statement:
                  "Using combination of place and direction heading for destination.",
                correctAnswer: "C",
              },
              {
                id: "q16-p5s2",
                questionNumber: 16,
                statement:
                  "Using an iconic building near your destination as orientation.",
                correctAnswer: "A",
              },
              {
                id: "q17-p5s2",
                questionNumber: 17,
                statement:
                  "Using a retrace method from a known place if a mistake happens.",
                correctAnswer: "C",
              },
              {
                id: "q18-p5s2",
                questionNumber: 18,
                statement:
                  "Using a passed spot as reference for a new integration.",
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 19-21</p>
              <p>Choose the correct letter, A, B, c or D. Write your answers in boxes 19-21 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q19-p5s2",
                questionNumber: 19,
                type: "mcq",
                text:
                  "What does the ant of Cataglyphis respond if it has been taken to another location according to the passage?",
                options: [
                  "A. Changes the orientation sensors improvingly",
                  "B. Releases biological scent for help from others",
                  "C. Continues to move by the original orientation",
                  "D. Totally gets lost once disturbed",
                ],
                correctAnswer: "C",
              },
              {
                id: "q20-p5s2",
                questionNumber: 20,
                type: "mcq",
                text:
                  "Which of the followings is true about 'cognitive map' in this passage?",
                options: [
                  "A. There is not obvious difference contrast by real map",
                  "B. It exists in our head and is always correct",
                  "C. It only exists under some cultures",
                  "D. It was managed by brain memory",
                ],
                correctAnswer: "D",
              },
              {
                id: "q21-p5s2",
                questionNumber: 21,
                type: "mcq",
                text:
                  "Which of following description of way findings correctly reflects the function of cognitive map?",
                options: [
                  "A. It visualises a virtual route in a large scope",
                  "B. It reproduces an exact details of every landmark",
                  "C. Observation plays a more important role",
                  "D. Store or supermarket is a must in file map",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 22-26</p>
              <p>Do the following statements agree with the information given in Reading Passage 2?</p>
              <p>In boxes 22-26 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q22-p5s2",
                questionNumber: 22,
                text: "Biological navigation has a state of flexibility.",
                correctAnswer: "TRUE",
              },
              {
                id: "q23-p5s2",
                questionNumber: 23,
                text:
                  "You will always receive good reaction when you ask direction.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q24-p5s2",
                questionNumber: 24,
                text:
                  "When someone follows a route, he or she collects comprehensive perceptional information in mind on the way.",
                correctAnswer: "TRUE",
              },
              {
                id: "q25-p5s2",
                questionNumber: 25,
                text:
                  "Path integration requires more thought from brain compared with route following.",
                correctAnswer: "FALSE",
              },
              {
                id: "q26-p5s2",
                questionNumber: 26,
                text:
                  "In a familiar surroundings, an exact map of where you are will automatically emerge in your head.",
                correctAnswer: "FALSE",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-5-section-3",
        title: "Section 3",
        passageContent: `
          passage-5-3 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 27-30</p>
              <p>The reading passage has seven paragraphs, A-G Choose the correct heading for paragraphs A-G from the list below. Write the correct number, i-xi, in boxes 27-31 on your answer sheet.</p>
              <p>NB There are more headings than paragraphs, so you will not use them</p>
              <p>List of Headings</p>
              <p>i The famous moai</p>
              <p>ii The status represented symbols of combined purposes</p>
              <p>iii The ancient spots which indicates scientific application</p>
              <p>iv The story of the name</p>
              <p>v Early immigrants, rise and prosperity</p>
              <p>vi The geology of Easter Island</p>
              <p>vii The begin of Thor Heyerdahl’s discovery</p>
              <p>viii The countering explaination to the misconceptions politaically manipulated</p>
              <p>ix Symbols of authority and power</p>
              <p>x The Navel of the World</p>
              <p>xi The norweigian Invaders’legacy</p>
            `,
            type: "matching_headings",
            listHeadings: [
              { id: "i", text: "The famous moai" },
              {
                id: "ii",
                text: "The status represented symbols of combined purposes",
              },
              {
                id: "iii",
                text:
                  "The ancient spots which indicates scientific application",
              },
              { id: "iv", text: "The story of the name" },
              { id: "v", text: "Early immigrants, rise and prosperity" },
              { id: "vi", text: "The geology of Easter Island" },
              { id: "vii", text: "The begin of Thor Heyerdahl’s discovery" },
              {
                id: "viii",
                text:
                  "The countering explaination to the misconceptions politaically manipulated",
              },
              { id: "ix", text: "Symbols of authority and power" },
              { id: "x", text: "The Navel of the World" },
              { id: "xi", text: "The norweigian Invaders’legacy" },
            ],
            questions: [
              {
                id: "q27-p5s3",
                questionNumber: 27,
                paragraphId: "B",
                correctAnswer: "v",
              },
              {
                id: "q28-p5s3",
                questionNumber: 28,
                paragraphId: "D",
                correctAnswer: "ii",
              },
              {
                id: "q29-p5s3",
                questionNumber: 29,
                paragraphId: "E",
                correctAnswer: "iii",
              },
              {
                id: "q30-p5s3",
                questionNumber: 30,
                paragraphId: "G",
                correctAnswer: "viii",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 31-36</p>
              <p>Do the following statements agree with the information given in Reading Passage 3?</p>
              <p>In boxes 31 -36on your answer sheet write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q31-p5s3-tfng",
                questionNumber: 31,
                text:
                  "The first inhabitants of Easter Island are Polynesian, from the Marquesas or Society islands.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q32-p5s3",
                questionNumber: 32,
                text:
                  "Construction of some moai statues on the island was not finished.",
                correctAnswer: "TRUE",
              },
              {
                id: "q33-p5s3",
                questionNumber: 33,
                text:
                  "The Moai can be found not only on Easter Island but also elsewhere in Polynesia.",
                correctAnswer: "FALSE",
              },
              {
                id: "q34-p5s3",
                questionNumber: 34,
                text:
                  "Most archeologists recognized the religious and astronomical functions for an ancient society",
                correctAnswer: "FALSE",
              },
              {
                id: "q35-p5s3",
                questionNumber: 35,
                text:
                  "The structures on Easter Island work as an astronomical outpost for extraterrestrial visitors.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q36-p5s3",
                questionNumber: 36,
                text:
                  "the theory that depleted natural resources leading to the fail of Easter Island actual has a distorted perspective",
                correctAnswer: "TRUE",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 37-40</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using NO MORE THAN THREE WORDS from the Reading Passage for each answer. Write your answers in boxes 37-40 on your answer sheet.</p>
              <p>Many theories speculated that Easter Island’s fall around the era of the initial European contact. Some say the resources are depleted by a 37............; The erroneous theories began with a root of the 38............ advanced by some scholars. Early writers did not have adequate 39.............understandings to comprehend the true result of 40………..nature of events on the island.</p>
              <p>The social devastation was in fact a direct of the first European settlers.</p>
            `,
            questions: [
              {
                id: "q37-p5s3",
                questionNumber: 37,
                type: "summary_completion",
                text: "depleted by a [GAP]",
                correctAnswer: "growing racist population",
              },
              {
                id: "q38-p5s3",
                questionNumber: 38,
                type: "summary_completion",
                text: "root of the [GAP] advanced by some scholars.",
                correctAnswer: "inhuman assumption",
              },
              {
                id: "q39-p5s3",
                questionNumber: 39,
                type: "summary_completion",
                text: "did not have adequate [GAP] understandings",
                correctAnswer: "archeological and historical",
              },
              {
                id: "q40-p5s3",
                questionNumber: 40,
                type: "summary_completion",
                text: "true result of [GAP] nature of events on the island.",
                correctAnswer: "inhuman behavior",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-6",
    moduleId: "reading",
    title: "READING TEST 6",
    description:
      "Academic Reading practice test with various question types for Test 6.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-6-section-1",
        title: "Section 1",
        passageContent: `
          passage-6-1 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-5</p>
              <p>Reading Passage 1 has eight paragraphs A-H. Which paragraph contains the following information? Write the correct letter A-H in boxes 1-5 on your answer sheet.</p>
            `,
            type: "which_paragraph_contains",
            questions: [
              {
                id: "q1-p6s1",
                questionNumber: 1,
                text: "Music influences brain development of baby.",
                correctAnswer: "D",
              },
              {
                id: "q2-p6s1",
                questionNumber: 2,
                text:
                  "Popularity of public to the introduction of Mozart Effect",
                correctAnswer: "G",
              },
              {
                id: "q3-p6s1",
                questionNumber: 3,
                text: "Description of the pioneer experiment of a person",
                correctAnswer: "B",
              },
              {
                id: "q4-p6s1",
                questionNumber: 4,
                text: "Music is helpful as a healing method in some places",
                correctAnswer: "A",
              },
              {
                id: "q5-p6s1",
                questionNumber: 5,
                text: "Learning needs other qualities though",
                correctAnswer: "F",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 6-8</p>
              <p>Complete the summary below.</p>
              <p>Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 6-8 on your answer sheet.</p>
              <p>In the experiment carried out by Frances Rauscher, participants were immersed in the music for a ............6..............period of time before they were tested. Rauscher suggested that enhancement of their performance is related to the............7..............nature of Mozart's music. After that, another parallel experiment was also conducted on............8..............</p>
            `,
            questions: [
              {
                id: "q6-p6s1",
                questionNumber: 6,
                type: "summary_completion",
                text: "immersed in the music for a [GAP] period of time",
                correctAnswer: "short",
              },
              {
                id: "q7-p6s1",
                questionNumber: 7,
                type: "summary_completion",
                text: "related to the [GAP] nature of Mozart's music.",
                correctAnswer: ["complex", "non-repetitive"],
              },
              {
                id: "q8-p6s1",
                questionNumber: 8,
                type: "summary_completion",
                text: "conducted on [GAP]",
                correctAnswer: "rats",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 9-13</p>
              <p>Do the following statements agree with the information given in Reading Passage 1</p>
              <p>In boxes 9-13 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement agrees with the information</p>
              <p><strong>FALSE</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q9-p6s1",
                questionNumber: 9,
                text:
                  "Music has the power to improve people's brain performance according to the passage.",
                correctAnswer: "TRUE",
              },
              {
                id: "q10-p6s1",
                questionNumber: 10,
                text:
                  "All neural connections are built up after a baby's born instead of the time he or she had born.",
                correctAnswer: "FALSE",
              },
              {
                id: "q11-p6s1",
                questionNumber: 11,
                text: "There is no one who questions Mozart Effect so far.",
                correctAnswer: "FALSE",
              },
              {
                id: "q12-p6s1",
                questionNumber: 12,
                text:
                  "Michael Linton carried out further experiment on Mozart's life to support his viewpoint",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q13-p6s1",
                questionNumber: 13,
                text:
                  "Not sufficient evidence supports Mozart Effect from the very first experiment till now.",
                correctAnswer: "TRUE",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-6-section-2",
        title: "Section 2",
        passageContent: `
          passage-6-2 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-17</p>
              <p>Choose FOUR letters, A-H. Write the correct letters in boxes 14-17 on your answer sheet.</p>
              <p>Which FOUR of the following situation were witnessed on the opening ceremony of the bridge?</p>
              <p>A The frequency of oscillation increased after some time.</p>
              <p>B All the engineers went to see the ceremony that day.</p>
              <p>C The design of the bridge astonished the people.</p>
              <p>D Unexpected sideways movement of the bridge occurred.</p>
              <p>E Pedesfrians had difficulty in walking on the deck.</p>
              <p>F The bridge fell down when people tried to retain their balance.</p>
              <p>G Vibration could be detected on the deck by the pedestrians.</p>
              <p>H It was raining when the ceremony began.</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              {
                id: "A",
                text: "The frequency of oscillation increased after some time.",
              },
              {
                id: "B",
                text: "All the engineers went to see the ceremony that day.",
              },
              {
                id: "C",
                text: "The design of the bridge astonished the people.",
              },
              {
                id: "D",
                text: "Unexpected sideways movement of the bridge occurred.",
              },
              {
                id: "E",
                text: "Pedesfrians had difficulty in walking on the deck.",
              },
              {
                id: "F",
                text:
                  "The bridge fell down when people tried to retain their balance.",
              },
              {
                id: "G",
                text:
                  "Vibration could be detected on the deck by the pedestrians.",
              },
              { id: "H", text: "It was raining when the ceremony began." },
            ],
            questions: [
              {
                id: "q14-17-p6s2",
                questionNumber: "14-17",
                text:
                  "Which FOUR of the following situation were witnessed on the opening ceremony of the bridge?",
                correctAnswer: ["A", "D", "E", "G"],
              },
            ],
          },
          {
            instructions: `
              <p>Questions 18-22</p>
              <p>Complete the following summary of the paragraphs of Reading Passage 2 using NO MORE THAN THREE WORDS from the Reading Passage for each answer. Write your answers in boxes 18-22 on your answer sheet</p>
              <p>After the opening ceremony, the embarrassed engineers tried to find out the reason of the bridge's wobbling. Judged from the videotape, they thought that 18..........and 19..........might create excessive force on the bridge. The distribution of 20..........resulted from human activities could cause 21..........throughout the structure. This swaying prompted people to start adjusting the way they walk, which in turn reinforced the 22..........</p>
            `,
            questions: [
              {
                id: "q18-p6s2",
                questionNumber: 18,
                type: "summary_completion",
                text:
                  "they thought that [GAP] and [GAP] might create excessive force on the bridge.",
                correctAnswer: "winds",
              },
              {
                id: "q19-p6s2",
                questionNumber: 19,
                type: "summary_completion",
                text:
                  "they thought that [GAP] and [GAP] might create excessive force on the bridge.",
                correctAnswer: "(the) pedestrians",
              },
              {
                id: "q20-p6s2",
                questionNumber: 20,
                type: "summary_completion",
                text:
                  "The distribution of [GAP] resulted from human activities",
                correctAnswer: "horizontal forces",
              },
              {
                id: "q21-p6s2",
                questionNumber: 21,
                type: "summary_completion",
                text: "could cause [GAP] throughout the structure.",
                correctAnswer: "(excessive dynamic) vibration",
              },
              {
                id: "q22-p6s2",
                questionNumber: 22,
                type: "summary_completion",
                text: "which in turn reinforced the [GAP]",
                correctAnswer: "motion",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 23-26</p>
              <p>Complete the table below. Choose NO MORE THAN THREE WORDS from Reading Passage 2 for each answer. Write your answers in boxes 23-26 on your answer sheet.</p>
              <p>Research programs launched by universities and organizations</p>
              <div class="map-image-container">
                  <img src="assets/Screenshot 2025-07-23 103255.png" alt="Container Diagram" class="rounded-lg">
              </div>
            `,
            questions: [
              {
                id: "q23-p6s2",
                questionNumber: 23,
                type: "fill_in_the_blank",

                text: "Test at [GAP]",
                correctAnswer: "Imperial College",
              },
              {
                id: "q24-p6s2",
                questionNumber: 24,
                type: "fill_in_the_blank",

                text: "Not enough data on [GAP]",
                correctAnswer: "normal forward walking",
              },
              {
                id: "q25-p6s2",
                questionNumber: 25,
                type: "fill_in_the_blank",

                text: "Crowd test conducted by [GAP]",
                correctAnswer: "(the) Arup engineers",
              },
              {
                id: "q26-p6s2",
                questionNumber: 26,
                type: "fill_in_the_blank",

                text: "Aim to verify",
                correctAnswer: "(the) design assumptions",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-6-section-3",
        title: "Section 3",
        passageContent: `
          passage-6-3 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 27-30</p>
              <p>Choose the correct letter A, B, C or D. Write your answers in boxes 27-30 on your answer sheet 27</p>
            `,
            questions: [
              {
                id: "q27-p6s3",
                questionNumber: 27,
                type: "mcq",
                text:
                  "Why does the writer have a mixed feeling about the book?",
                options: [
                  "A The guilty feeling made him so.",
                  "B The writer expected it to be better than it was.",
                  "C Sacks failed to include his personal stories in the book.",
                  "D This is the only book written by Sacks.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q28-p6s3",
                questionNumber: 28,
                type: "mcq",
                text: "What is the best part of the book?",
                options: [
                  "A the photo of Sacks listening to music",
                  "B the tone of voice of the book",
                  "C the autobiographical description in the book",
                  "D the description of Sacks’s wealth",
                ],
                correctAnswer: "C",
              },
              {
                id: "q29-p6s3",
                questionNumber: 29,
                type: "mcq",
                text: "In the preface, what did Sacks try to achieve?",
                options: [
                  "A make a herald introduction of the research work and technique applied",
                  "B give detailed description of various musical disorders",
                  "C explain how people understand music",
                  "D explain why he needs to do away with simple observation",
                ],
                correctAnswer: "A",
              },
              {
                id: "q30-p6s3",
                questionNumber: 30,
                type: "mcq",
                text: "What is disappointing about Tony Cicoria’s case?",
                options: [
                  "A He refuses to have further tests.",
                  "B He can’t determine the cause of his sudden musicality.",
                  "C He nearly died because of the lightening.",
                  "D His brain waves were too normal to show anything.",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 31-36</p>
              <p>Do the following statements agree with the views of the writer in Reading Passage 3? In boxes 31-36 on your answer sheet write</p>
              <p><strong>YES</strong> if the statement agrees with the information</p>
              <p><strong>NO</strong> if the statement contradicts the information</p>
              <p><strong>NOT GIVEN</strong> if there is no information on this</p>
            `,
            type: "yes_no_not_given",
            questions: [
              {
                id: "q31-p6s3",
                questionNumber: 31,
                text:
                  "It is difficult to give a well-reputable writer a less than totally favorable review.",
                correctAnswer: "YES",
              },
              {
                id: "q32-p6s3",
                questionNumber: 32,
                text:
                  "Beethoven's Pathetique Sonata is a good treatment for musical disorders.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q33-p6s3",
                questionNumber: 33,
                text:
                  "Sacks believes technological methods is of little importance compared with traditional observation when studying his patients.",
                correctAnswer: "NO",
              },
              {
                id: "q34-p6s3",
                questionNumber: 34,
                text:
                  "It is difficult to understand why music therapy is undervalued",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q35-p6s3",
                questionNumber: 35,
                text:
                  "Sacks held little skepticism when borrowing other theories and findings in describing reasons and notion for phenomena he depicts in the book.",
                correctAnswer: "YES",
              },
              {
                id: "q36-p6s3",
                questionNumber: 36,
                text:
                  "Sacks is in a rush to use new testing methods to do treatment for patients.",
                correctAnswer: "NO",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 37-40</p>
              <p>Complete each sentence with the correct ending, A-F, below. Write correct letter, A-F, in boxes 37-40 on your answer sheet</p>
              <p>A. show no music-brain disorders.</p>
              <p>B. indicates that medication can have varied results,</p>
              <p>C. is key for the neurological community to unravel the mysteries.</p>
              <p>D. should not be used in Isolation.</p>
              <p>E. indicate that not everyone can receive good education.</p>
              <p>F. show a misconception that there is function centre localized in the brain.</p>
            `,
            type: "matching_sentence_endings",
            listItems: [
              { id: "A", text: "show no music-brain disorders." },
              {
                id: "B",
                text: "indicates that medication can have varied results,",
              },
              {
                id: "C",
                text:
                  "is key for the neurological community to unravel the mysteries.",
              },
              { id: "D", text: "should not be used in Isolation." },
              {
                id: "E",
                text: "indicate that not everyone can receive good education.",
              },
              {
                id: "F",
                text:
                  "show a misconception that there is function centre localized in the brain.",
              },
            ],
            questions: [
              {
                id: "q37-p6s3",
                questionNumber: 37,
                statement:
                  "The content covered dissociations in understanding between harmony and melody",
                correctAnswer: "F",
              },
              {
                id: "q38-p6s3",
                questionNumber: 38,
                statement: "The study of treating musical disorders",
                correctAnswer: "B",
              },
              {
                id: "q39-p6s3",
                questionNumber: 39,
                statement: "The EEG scans of Sacks’s patients",
                correctAnswer: "A",
              },
              {
                id: "q40-p6s3",
                questionNumber: 40,
                statement: "Sacks believes testing based on new technologies",
                correctAnswer: "D",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-7",
    moduleId: "reading",
    title: "READING TEST 7",
    description:
      "Academic Reading practice test with various question types for Test 7.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-7-section-1",
        title: "Section 1",
        passageContent: `
          Passage 1 content for Reading Test 7 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-7</p>
              <p>Do the following statements agree with the information given in Reading Passage 1?</p>
              <p>In boxes 1-7 on your answer sheet, write TRUE, FALSE or NOT GIVEN.</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q1-r7s1",
                questionNumber: 1,
                text:
                  "The name for interrupted brome is very special as its head shaped like a sharp eye",
                correctAnswer: "FALSE",
              },
              {
                id: "q2-r7s1",
                questionNumber: 2,
                text:
                  "Interrupted brome thought to become extinct because there were no live seed even in a labs condition.",
                correctAnswer: "TRUE",
              },
              {
                id: "q3-r7s1",
                questionNumber: 3,
                text: "Philip Smith comes from University of Cambridge.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q4-r7s1",
                questionNumber: 4,
                text:
                  "Reborn of the interrupted brome is attributed more to scientific meaning than seemingly aesthetic or commercial ones",
                correctAnswer: "TRUE",
              },
              {
                id: "q5-r7s1",
                questionNumber: 5,
                text:
                  "English nature will operate to recover interrupted brome on the success of survival in Kew.",
                correctAnswer: "FALSE",
              },
              {
                id: "q6-r7s1",
                questionNumber: 6,
                text:
                  "Interrupted Brome grow poorly in some competing modern agricultural environment with other plants",
                correctAnswer: "TRUE",
              },
              {
                id: "q7-r7s1",
                questionNumber: 7,
                text:
                  "Media publicity plays a significant role to make interrupted brome continue to exist.",
                correctAnswer: "NOT GIVEN",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 8-13</p>
              <p>Use the information in the passage to match the people (listed A-F) with opinions or deeds below. Write the appropriate letters A-F in boxes 8-13 on your answer sheet.</p>
              <p>NB: you may use any letter more than once</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "George Claridge Druce" },
              { id: "B", text: "Nathaniel Fiennes" },
              { id: "C", text: "Professor Hackel" },
              { id: "D", text: "A. M. Barnard" },
              { id: "E", text: "Philip Smith" },
              { id: "F", text: "Joan Thirsk" },
            ],
            questions: [
              {
                id: "q8-r7s1",
                questionNumber: 8,
                statement: "reestablished the British unique plants",
                correctAnswer: "E",
              },
              {
                id: "q9-r7s1",
                questionNumber: 9,
                statement:
                  "identified the interrupted brome as just to its parent brome",
                correctAnswer: "C",
              },
              {
                id: "q10-r7s1",
                questionNumber: 10,
                statement:
                  "gave an independent taxonomy place to interrupted brome",
                correctAnswer: "A",
              },
              {
                id: "q11-r7s1",
                questionNumber: 11,
                statement:
                  "discovered and picked the first sample of interrupted brome",
                correctAnswer: "D",
              },
              {
                id: "q12-r7s1",
                questionNumber: 12,
                statement:
                  "recorded the first 'show up' of sainfoin plants in Britain",
                correctAnswer: "F",
              },
              {
                id: "q13-r7s1",
                questionNumber: 13,
                statement:
                  "collected the last seeds just before its extinction",
                correctAnswer: "A",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-7-section-2",
        title: "Section 2",
        passageContent: `
          Passage 2 content for Reading Test 7 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-18</p>
              <p>Complete the table below.</p>
              <p>Choose NO MORE THAN TWO WORDS from Reading Passage 2 for each answer. Write your answers in boxes 14-18 on your answer sheet.</p>
              <div class="map-image-container">
                  <img src="assets/Screenshot 2025-07-27 004427.png" alt="Container Diagram" class="rounded-lg">
              </div>
            `,
            questions: [
              {
                id: "q14-p6s2",
                questionNumber: 14,
                type: "fill_in_the_blank",

                text: "Collection of rhymes [GAP] and games",
                correctAnswer: "stories",
              },
              {
                id: "q15-p6s2",
                questionNumber: 15,
                type: "fill_in_the_blank",

                text: "A Little Pretty Pocket Book (exported to [GAP])",
                correctAnswer: "America",
              },
              {
                id: "q16-p6s2",
                questionNumber: 16,
                type: "fill_in_the_blank",

                text: "Growing interet in [GAP]",
                correctAnswer: "folklore",
              },
              {
                id: "q17-p6s2",
                questionNumber: 17,
                type: "fill_in_the_blank",

                text: "Nursery rhymes and [GAP]",
                correctAnswer: "fairy-stories",
              },
              {
                id: "q18-p6s2",
                questionNumber: 18,
                type: "fill_in_the_blank",

                text: "Stories of harm-free [GAP]",
                correctAnswer: "adventure",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 19-21</p>
              <p>Look at the following people and the list of statements below. Match each person with the correct statement. Write the correct letter A-E in boxes 19-21 on your answer sheet.</p>
            `,
            image:
              "https://placehold.co/600x400/cccccc/000000?text=Map+Image+for+Q19-21",
            type: "matching_items",
            listItems: [
              { id: "A", text: "Wrote criticisms of children’s literature" },
              {
                id: "B",
                text:
                  "Used animals to demonstrate the absurdity of fairy tales",
              },
              { id: "C", text: "Was not a writer originally" },
              { id: "D", text: "Translated a book into English" },
              { id: "E", text: "Didn’t write in the English language" },
            ],
            questions: [
              {
                id: "q19-r7s2",
                questionNumber: 19,
                statement: "Thomas Boreham",
                correctAnswer: "C",
              },
              {
                id: "q20-r7s2",
                questionNumber: 20,
                statement: "Mrs. Sarah Trimmer",
                correctAnswer: "A",
              },
              {
                id: "q21-r7s2",
                questionNumber: 21,
                statement: "Grimm Brother",
                correctAnswer: "E",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 22-26</p>
              <p>Do the following statements agree with the information given in Reading Passage 2? In boxes 22-26 on your answer sheet write TRUE, FALSE or NOT GIVEN.</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q22-r7s2",
                questionNumber: 22,
                text: "Children didn’t start to read books until 1700.",
                correctAnswer: "FALSE",
              },
              {
                id: "q23-r7s2",
                questionNumber: 23,
                text:
                  "Sarah Trimmer believed that children’s books should set good examples.",
                correctAnswer: "TRUE",
              },
              {
                id: "q24-r7s2",
                questionNumber: 24,
                text:
                  "Parents were concerned about the violence in children’s books.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q25-r7s2",
                questionNumber: 25,
                text:
                  "An interest in the folklore changed the direction of the development of children’s books.",
                correctAnswer: "TRUE",
              },
              {
                id: "q26-r7s2",
                questionNumber: 26,
                text:
                  "Today children’s book writers believe their works should appeal to both children and adults.",
                correctAnswer: "TRUE",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-7-section-3",
        title: "Section 3",
        passageContent: `
          Passage 3 content for Reading Test 7 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 27-31</p>
              <p>Complete the summary with the list of words A-L below.</p>
              <p>Write the correct letter A-L in boxes 27-31 on your answer sheet.</p>
              <p>The question, arisen from Captain Cook's expedition to Hawaii, and others derived from it, has fascinated researchers for a long time. However, a surprising archaeological find on Efate began to provide valuable information about the 27................On the excavating site, a 28................containing29................of Lapita was uncovered Later on, various researches and tests have been done to study the ancient people - Lapita and their 30.................... How could they manage to spread themselves so far over the vast ocean? All that is certain is that they were good at canoeing. And perhaps they could take well advantage of the trade wind But there is no 31.................of it.</p>
            `,

            listItems: [
              { id: "A", text: "A" },
              { id: "B", text: "B" },
              { id: "C", text: "C" },
              { id: "D", text: "D" },
              { id: "E", text: "E" },
              { id: "F", text: "F" },
              { id: "G", text: "G" },
              { id: "H", text: "H" },
              { id: "I", text: "I" },
              { id: "J", text: "J" },
              { id: "K", text: "K" },
              { id: "L", text: "L" },
            ],
            questions: [
              {
                id: "q27-r7s3",
                type: "summary_completion",
                questionNumber: 27,
                text: "about the [GAP]",
                correctAnswer: "B",
              },
              {
                id: "q28-r7s3",
                questionNumber: 28,
                type: "summary_completion",
                text: "a [GAP] containing",
                correctAnswer: "L",
              },
              {
                id: "q29-r7s3",
                questionNumber: 29,
                type: "summary_completion",
                text: "[GAP] of Lapita was uncovered",
                correctAnswer: "A",
              },
              {
                id: "q30-r7s3",
                questionNumber: 30,
                type: "summary_completion",
                text: "Lapita and their [GAP]",
                correctAnswer: "C",
              },
              {
                id: "q31-r7s3",
                questionNumber: 31,
                type: "summary_completion",
                text: "But there is no [GAP] of it.",
                correctAnswer: "F",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 32-35</p>
              <p>Choose the correct letter, A, B, C or D. Write your answers in boxes 32-35 on your answer sheet.</p>
            `,

            questions: [
              {
                id: "q32-r7s3",
                questionNumber: 32,
                type: "mcq",
                text: "The chemical tests indicate that",
                options: [
                  "A. the elements in one’s teeth varied from childhood to adulthood.",
                  "B. the isotope signatures of the elements remain the same in different places.",
                  "C. the result of the study is not fascinating.",
                  "D. these chemicals can’t conceal one’s origin.",
                ],
                correctAnswer: "D",
              },
              {
                id: "q33-r7s3",
                questionNumber: 33,
                type: "mcq",
                text: "The isotope analysis from the Lapita",
                options: [
                  "A. exactly locates their birth island.",
                  "B. reveals that the Lapita found the new place via straits.",
                  "C. helps researchers to find out answers about the islanders.",
                  "D. leaves more new questions for anthropologists to answer.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q34-r7s3",
                questionNumber: 34,
                type: "mcq",
                text: "According paragraph F, the offspring of Lapita",
                options: [
                  "A. were capable of voyages to land that is not accessible to view.",
                  "B. were able to have the farthest voyage of 230 miles,",
                  "C. worked their way through the archipelagoes of the western Pacific.",
                  "D. fully explored the horizons.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q35-r7s3",
                questionNumber: 35,
                type: "mcq",
                text: "Once out exploring the sea, the sailors",
                options: [
                  "A. always found the trade winds unsuitable for sailing.",
                  "B. could return home with various clues.",
                  "C. sometimes would overshoot their home port and sail off into eternity.",
                  "D. would sail in one direction.",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 36-40</p>
              <p>Do the following statements agree with the information given in Reading Passage 3? In boxes 36-40 on your answer sheet, write TRUE, FALSE or NOT GIVEN.</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q36-r7s3",
                questionNumber: 36,
                text: "The Lapita could canoe in the prevailing wind.",
                correctAnswer: "TRUE",
              },
              {
                id: "q37-r7s3",
                questionNumber: 37,
                text:
                  "It was difficult for the sailors to find ways back, once they were out.",
                correctAnswer: "FALSE",
              },
              {
                id: "q38-r7s3",
                questionNumber: 38,
                text:
                  "The reason why the Lapita stopped canoeing farther is still unknown.",
                correctAnswer: "TRUE",
              },
              {
                id: "q39-r7s3",
                questionNumber: 39,
                text: "The majority of the Lapita dwelled on Fiji.",
                correctAnswer: "FALSE",
              },
              {
                id: "q40-r7s3",
                questionNumber: 40,
                text:
                  "The navigators could take advantage of El Nino during their forth voyages.",
                correctAnswer: "NOT GIVEN",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-8",
    moduleId: "reading",
    title: "READING TEST 8",
    description:
      "Academic Reading practice test with various question types for Test 8.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-8-section-1",
        title: "Section 1",
        passageContent: `
          Passage 1 content for Reading Test 8 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-5</p>
              <p>Choose the correct letter, A, B, C or D. Write your answers in boxes 1-5 on your answer sheet.</p>
            `,

            questions: [
              {
                id: "q1-r8s1",
                questionNumber: 1,
                type: "mcq",
                text:
                  "In which way does author state translation at the beginning of the passage?",
                options: [
                  "A. abstract and concrete meaning",
                  "B. general and specific meaning",
                  "C. several examples of translation's meaning",
                  "D. different meaning in various profession",
                ],
                correctAnswer: "vi",
              },
              {
                id: "q2-r8s1",
                questionNumber: 2,
                type: "mcq",
                text:
                  "Application of headphone in a UN conference tells US that:",
                options: [
                  "A. TV show is being conducted",
                  "B. radio program is on the air",
                  "C. Two sides are debating",
                  "D. language practice is in the process",
                ],
                correctAnswer: "v",
              },
              {
                id: "q3-r8s1",
                questionNumber: 3,
                type: "mcq",
                text:
                  "In the passage, what is author's purpose of citing Tower of Babel?",
                options: [
                  "A. interpreting secret is stored in the Tower",
                  "B. interpreter emerged exactly from time of Tower of Babel",
                  "C. consecutive interpreting has a long history",
                  "D. consecutive interpreting should be abandoned",
                ],
                correctAnswer: "ix",
              },
              {
                id: "q4-r8s1",
                questionNumber: 4,
                type: "mcq",
                text:
                  "About simultaneous interpreting, which of the following is TRUE!",
                options: [
                  "A. it is an old and disposable interpretation method",
                  "B. it doesn’t need outstanding professional ability",
                  "C. it relies on professional equipment",
                  "D. it takes less than two seconds ear-voice span",
                ],
                correctAnswer: "iv",
              },
              {
                id: "q5-r8s1",
                text:
                  "In consecutive translation, if the section is longer than expected, what would an interpreter most probably do?",
                options: [
                  "A. he or she has to remember some parts ahead",
                  "B. he or she has to break them down first",
                  "C. he or she has to respond as quickly as possible",
                  "D. he or she has to remember all parts ahead",
                ],
                correctAnswer: "viii",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 6-9</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than two words or a number from the Reading Passage for each answer. Write your answers in boxes 6-9 on your answer sheet.</p>
              <p>The cycle from ear to voice normally lasts about..........6..........., which depends on sophistication of paper, for example, it could go up to..........7........sometimes. When expert took close research on affecting elements, they found appropriate speaking speed is somehow among.........8.........w.p.m. In a specific experiment, the accuracy of interpretation dropped while the ear-voice span speed increased between 95 to 164 w.p.m. However, the maximum of speed was about.........9..........w.p.m.</p>
            `,
            questions: [
              {
                id: "q6-r8s1",
                questionNumber: 6,
                type: "summary_completion",

                text: "normally lasts about[GAP]",
                correctAnswer: "iii",
              },
              {
                id: "q7-r8s1",
                questionNumber: 7,
                type: "summary_completion",

                text: "up to[GAP] sometimes.",
                correctAnswer: "vii",
              },
              {
                id: "q8-r8s1",
                questionNumber: 8,
                type: "summary_completion",

                text: "among[GAP] w.p.m.",
                correctAnswer: "Not Given",
              },
              {
                id: "q9-r8s1",
                questionNumber: 9,
                type: "summary_completion",

                text: "about[GAP] w.p.m.",
                correctAnswer: "TRUE",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 10-13</p>
              <p>Choose FOUR correct letters</p>
              <p>Write your answers in boxes 10-13 on your answer sheet.</p>
              <p>Which FOUR of the followings are the factors that affect interpreting?</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              {
                id: "A",
                text:
                  "mastery in structure and grammar of sentence in the script",
              },
              { id: "B", text: "speed of incoming sound source" },
              { id: "C", text: "noisy of background" },
              { id: "D", text: "emotional states of interpreter" },
              { id: "E", text: "culture of different backgrounds" },
              {
                id: "F",
                text: "understanding the significance of being precise",
              },
              { id: "G", text: "upper volume limit of speakers" },
            ],
            questions: [
              {
                id: "q10-13-r8s1",
                questionNumber: "10-13",
                text:
                  "Which FOUR of the followings are the factors that affect interpreting?",
                correctAnswer: ["FALSE", "FALSE", "Not Given", "TRUE"],
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-8-section-2",
        title: "Section 2",
        passageContent: `
          Passage 2 content for Reading Test 8 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-19</p>
              <strong>Complete the flow chart below.</strong>
              <p>Complete the flow chart, using NO MORE THAN TWO WORDS from the Reading Passage for each answer. Write your answers in boxes 14-19 on your answer sheet.</p>
              <strong>Guide to Making Water Filters Step one:</strong>
              <p>Combination of 14...........and organic material, with sufficient 15..........to create a thick mixture sun dried Step two: pack 16..........around the cylinders place them in 17...........which is as burning fuel for firing (maximum temperature: 18...........) filter being baked in under 19.......... </p>
            `,
            questions: [
              {
                id: "q14-r8s2",
                questionNumber: 14,
                type: "fill_in_the_blank",
                text: "Combination of [GAP] and organic material, with",
                correctAnswer: "clay",
              },
              {
                id: "q15-r8s2",
                questionNumber: 15,
                type: "fill_in_the_blank",
                text:
                  "sufficient [GAP] to create a thick mixture sun dried Step two:",
                correctAnswer: "water",
              },
              {
                id: "q16-r8s2",
                questionNumber: 16,
                type: "fill_in_the_blank",
                text: "pack [GAP] around the cylinders",
                correctAnswer: "straw",
              },
              {
                id: "q17-r8s2",
                questionNumber: 17,
                type: "fill_in_the_blank",
                text: "place them in [GAP] which is as burning fuel for firing",
                correctAnswer: "cow manure",
              },
              {
                id: "q18-r8s2",
                questionNumber: 18,
                type: "fill_in_the_blank",
                text: "(maximum temperature: [GAP])",
                correctAnswer: "950 degrees",
              },
              {
                id: "q19-r8s2",
                questionNumber: 19,
                type: "fill_in_the_blank",
                text: "filter being baked in under [GAP]",
                correctAnswer: "60 minutes",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 20-23</p>
              <p>Do the following statements agree with the information given in Reading Passage 2? In boxes 20-23 on your answer sheet, write TRUE if the statement is true FALSE if the statement is false NOT GIVEN if the information is not given in the passage</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q20-r8s2",
                questionNumber: 20,
                text:
                  "It takes half an hour for the manure to reach 950 degrees.",
                correctAnswer: "FALSE",
              },
              {
                id: "q21-r8s2",
                questionNumber: 21,
                text:
                  "Clay was initially found to be unsuitable for pot making.",
                correctAnswer: "TRUE",
              },
              {
                id: "q22-r8s2",
                questionNumber: 22,
                text:
                  "Coffee grounds are twice as effective as other materials.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q23-r8s2",
                questionNumber: 23,
                text: "E-coli is the most difficult bacteria to combat.",
                correctAnswer: "Not Given",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 24-26</p>
              <p>Choose the correct letter, A, B, C or D. Write your answers in boxes 24-26 on your answer sheet.</p>
            `,

            questions: [
              {
                id: "q24-r8s2",
                questionNumber: 24,
                type: "mcq",
                text: "When making the pot, the thickness of the wall",
                options: [
                  "A. is large enough to let the pathogens to pass.",
                  "B. varied according to the temperature of the fuel,",
                  "C. should be the same as an adult’s forefinger.",
                  "D. is not mentioned by Mr. Flynn.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q25-r8s2",
                questionNumber: 25,
                type: "mcq",
                text: "what is true about the charity, it",
                options: [
                  "A. failed in searching the appropriate materials.",
                  "B. successfully manufacture a kiln based ceramic filter to be sold worldwide",
                  "C. found that the local clay are good enough.",
                  "D. intended to help build a local filter production factory.",
                ],
                correctAnswer: "D",
              },
              {
                id: "q26-r8s2",
                questionNumber: 26,
                type: "mcq",
                text: "Mr. Flynn’s design is purposely not being patented",
                options: [
                  "A. because he hopes it can be freely used around the world.",
                  "B. because he doesn’t think the technology is perfect enough,",
                  "C. because there are some legal obstacles.",
                  "D. because the design has already been applied thoroughly.",
                ],
                correctAnswer: "A",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-8-section-3",
        title: "Section 3",
        passageContent: `
          Passage 3 content for Reading Test 8 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 27-31</p>
              <p>Reading Passage 3 has five sections A-E. Choose the correct heading for each section from the of headings below.</p>
              <p>List of Headings</p>
              <p>i Animal sometimes make music.</p>
              <p>ii Recent research on music</p>
              <p>iii Culture embedded in music</p>
              <p>iv Historical theories review</p>
              <p>v Communication in music with animals</p>
              <p>vi Contrast between music and language</p>
              <p>vii Questions on a biological link with human and music</p>
              <p>viii Music is good for babies.</p>
            `,
            type: "matching_headings",
            listHeadings: [
              { id: "i", text: "Animal sometimes make music." },
              { id: "ii", text: "Recent research on music" },
              { id: "iii", text: "Culture embedded in music" },
              { id: "iv", text: "Historical theories review" },
              { id: "v", text: "Communication in music with animals" },
              { id: "vi", text: "Contrast between music and language" },
              {
                id: "vii",
                text: "Questions on a biological link with human and music",
              },
              { id: "viii", text: "Music is good for babies." },
            ],
            questions: [
              {
                id: "q27-r8s3",
                questionNumber: 27,
                paragraphId: "A",
                correctAnswer: "vi",
              },
              {
                id: "q28-r8s3",
                questionNumber: 28,
                paragraphId: "B",
                correctAnswer: "iv",
              },
              {
                id: "q29-r8s3",
                questionNumber: 29,
                paragraphId: "C",
                correctAnswer: "ii",
              },
              {
                id: "q30-r8s3",
                questionNumber: 30,
                paragraphId: "D",
                correctAnswer: "vi",
              },
              {
                id: "q31-r8s3",
                questionNumber: 31,
                paragraphId: "E",
                correctAnswer: "vii",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 32-38</p>
              <p>Look at the following people and list of statements below. Match each person with the correct statement. Write the correct letter A-G in boxes 32-38 on your answer sheet.</p>
              <p>List of Statements</p>
              <p>A Music exists outside of the world in which it is created.</p>
              <p>B Music has a common feature though cultural influences affect</p>
              <p>C Humans need music.</p>
              <p>D Music priority connects to the disordered sound around.</p>
              <p>E Discovery of mathematical musical foundation.</p>
              <p>F Music is not treated equally well compared with language</p>
              <p>G Humans and monkeys have similar traits in perceiving sound.</p>
            `,
            type: "matching_items",
            listItems: [
              {
                id: "A",
                text:
                  "Music exists outside of the world in which it is created.",
              },
              {
                id: "B",
                text:
                  "Music has a common feature though cultural influences affect",
              },
              { id: "C", text: "Humans need music." },
              {
                id: "D",
                text: "Music priority connects to the disordered sound around.",
              },
              {
                id: "E",
                text: "Discovery of mathematical musical foundation.",
              },
              {
                id: "F",
                text:
                  "Music is not treated equally well compared with language",
              },
              {
                id: "G",
                text:
                  "Humans and monkeys have similar traits in perceiving sound.",
              },
            ],
            questions: [
              {
                id: "q32-r8s3",
                questionNumber: 32,
                statement: "Steven Pinker",
                correctAnswer: "F",
              },
              {
                id: "q33-r8s3",
                questionNumber: 33,
                statement: "Musicologists",
                correctAnswer: "B",
              },
              {
                id: "q34-r8s3",
                questionNumber: 34,
                statement: "Greek philosopher Pythagoras",
                correctAnswer: "E",
              },
              {
                id: "q35-r8s3",
                questionNumber: 35,
                statement: "Schwartz, Howe, and Purves",
                correctAnswer: "D",
              },
              {
                id: "q36-r8s3",
                questionNumber: 36,
                statement: "Marc Hauser and Josh McDermott",
                correctAnswer: "G",
              },
              {
                id: "q37-r8s3",
                questionNumber: 37,
                statement: "Charles Rosen",
                correctAnswer: "A",
              },
              {
                id: "q38-r8s3",
                questionNumber: 38,
                statement: "Sandra Trehub",
                correctAnswer: "C",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 39-40</p>
              <p>Choose the correct letter A, B, C or D Write your answers in boxes 39-40 on your answer sheet.</p>
            `,

            questions: [
              {
                id: "q39-r8s3",
                questionNumber: 39,
                type: "mcq",
                text: "Why was the study of animal's music uncertain?",
                options: [
                  "A Animals don't have the same auditory system as humans.",
                  "B Experiments on animal's music are limited,",
                  "C tunes are impossible for animal to make up.",
                  "D Animals don't have spontaneous ability for the tests.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q40-r8s3",
                questionNumber: 40,
                type: "mcq",
                text: "What is the main subject of this passage?",
                options: [
                  "A Language and psychology.",
                  "B Music formation,",
                  "C Role of music in human society.",
                  "D Music experiments for animals.",
                ],
                correctAnswer: "C",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-9",
    moduleId: "reading",
    title: "READING TEST 9",
    description:
      "Academic Reading practice test with various question types for Test 9.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-9-section-1",
        title: "Section 1",
        passageContent: `
          Passage 1 content for Reading Test 9 will be added here manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-7</p>
              <p>Do the following statements agree with the information given in Reading Passage 1?</p>
              <p>In boxes 1-7 on your answer sheet, write</p>
              <p><strong>YES</strong> if the statement is true</p>
              <p><strong>NO</strong> if the statement is false</p>
              <p><strong>NOT GIVEN</strong> if the information is not given in the passage</p>
            `,
            type: "yes_no_not_given",
            questions: [
              {
                id: "q1-r9s1",
                questionNumber: 1,
                text:
                  "Captain cook once expected the Hawaii might speak another language of people from other pacific islands.",
                correctAnswer: "YES",
              },
              {
                id: "q2-r9s1",
                questionNumber: 2,
                text:
                  "Captain cook depicted number of cultural aspects of Polynesians in his journal.",
                correctAnswer: "NO",
              },
              {
                id: "q3-r9s1",
                questionNumber: 3,
                text:
                  "Professor Spriggs and his research team went to the Efate to try to find the site of ancient cemetery.",
                correctAnswer: "NO",
              },
              {
                id: "q4-r9s1",
                questionNumber: 4,
                text:
                  "The Lapita completed a journey of around 2,000 miles in a period less than a centenary.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q5-r9s1",
                questionNumber: 5,
                text:
                  "The Lapita were the first inhabitants in many pacific islands.",
                correctAnswer: "YES",
              },
              {
                id: "q6-r9s1",
                questionNumber: 6,
                text:
                  "The unknown pots discovered in Efate had once been used for cooking.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q7-r9s1",
                questionNumber: 7,
                text:
                  "The um buried in Efate site was plain as it was without any decoration.",
                correctAnswer: "NO",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 8 -10</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than Two words from the Reading Passage for each answer. Write your answers in boxes 8-10 on your answer sheet.</p>
              <p>Scientific Evident found in Efate site</p>
              <p>Tests show the human remains and the charcoal found in the buried um are from the start of the Lapita period. Yet The .........8........ covering many of the Efate site did not come from that area. Then examinations carried out on the .........9........ discovered at Efate site reveal that not everyone buried there was a native living in the area. In fact, DNA could identify the Lapita's nearest.........10...........present-days.</p>
            `,

            questions: [
              {
                id: "q8-r9s1",
                questionNumber: 8,
                type: "summary_completion",
                text:
                  "The [GAP] covering many of the Efate site did not come from that area.",
                correctAnswer: "rock",
              },
              {
                id: "q9-r9s1",
                questionNumber: 9,
                type: "summary_completion",
                text:
                  "examinations carried out on the [GAP] discovered at Efate site",
                correctAnswer: "teeth",
              },
              {
                id: "q10-r9s1",
                questionNumber: 10,
                type: "summary_completion",
                text:
                  "DNA could identify the Lapita's nearest [GAP] present-days.",
                correctAnswer: "descendants",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 11-13</p>
              <p>Answer the questions below.</p>
              <p>Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.</p>
            `,

            questions: [
              {
                id: "q11-r9s1",
                questionNumber: 11,
                type: "fill_in_the_blank",
                text:
                  "What did the Lapita travel in when they crossed the oceans?",
                correctAnswer: "canoes",
              },
              {
                id: "q12-r9s1",
                questionNumber: 12,
                type: "fill_in_the_blank",
                text:
                  "In Irwins’s view, what would the Latipa have relied on to bring them fast back to the base?",
                correctAnswer: "trade winds",
              },
              {
                id: "q13-r9s1",
                questionNumber: 13,
                type: "fill_in_the_blank",
                text:
                  "Which sea creatures would have been an indication to the Lapita of where to find land?",
                correctAnswer: ["seabirds and turtles"],
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-9-section-2",
        title: "Section 2",
        passageContent: `
          Passage 2 content for Reading Test 9 will be added here manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-19</p>
              <p>Do the following statements agree with the information given in Reading Passage 2?</p>
              <p>In boxes 14-19 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement is true</p>
              <p><strong>FALSE</strong> if the statement is false</p>
              <p><strong>NOT GIVEN</strong> if the information is not given in the passage</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q14-r9s2",
                questionNumber: 14,
                text:
                  "The average summer temperature in 2003 is approximately four degrees higher than that of the past.",
                correctAnswer: "TRUE",
              },
              {
                id: "q15-r9s2",
                questionNumber: 15,
                text:
                  "Jones believes the temperature statistic is within the normal range.",
                correctAnswer: "FALSE",
              },
              {
                id: "q16-r9s2",
                questionNumber: 16,
                text:
                  "Human factor is one of the reasons that caused hot summer.",
                correctAnswer: "TRUE",
              },
              {
                id: "q17-r9s2",
                questionNumber: 17,
                text:
                  "In large city, people usually measure temperature twice a day.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q18-r9s2",
                questionNumber: 18,
                text:
                  "Global warming has obvious effect of warmer winter instead of hotter summer before 2003.",
                correctAnswer: "TRUE",
              },
              {
                id: "q19-r9s2",
                questionNumber: 19,
                text:
                  "New ski resorts are to be built on a high-altitude spot.",
                correctAnswer: "NOT GIVEN",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 20-21</p>
              <p>Answer the questions below using NO MORE THAN THREE WORDS AND/OR NUMBERS from the passage for each answer. Write your answers in boxes 20 21 on your answer sheet</p>
            `,
            questions: [
              {
                id: "q20-r9s2",
                questionNumber: 20,
                type: "fill_in_the_blank",
                text: "What are the two hottest years in Britain besides 2003?",
                correctAnswer: "1976 and 1995",
              },
              {
                id: "q21-r9s2",
                type: "fill_in_the_blank",
                questionNumber: 21,
                text:
                  "What will affect UK government policies besides climate change according to Hulme ?",
                correctAnswer: "2000 floods",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 22-26</p>
              <p>Complete the summary below using NO MORE THAN TWO WORDS from the passage. Write your answers in boxes 22-26 On your answer sheet</p>
              <p>In the summer of 2003, thousands of extra death occurred in the country of____22_____. Moreover, world-widely, the third record of hottest summer date from_____23____, after the year of______24_____. According to Jones, all the 10 hottest years happened from_____25____. However, summer of 2003 was at the peak of previous ____26____years, perhaps even more.</p>
            `,
            questions: [
              {
                id: "q22-r9s2",
                type: "summary_completion",
                questionNumber: 22,
                text:
                  "thousands of extra death occurred in the country of [GAP].",
                correctAnswer: "France",
              },
              {
                id: "q23-r9s2",
                type: "summary_completion",
                questionNumber: 23,
                text: "the third record of hottest summer date from [GAP].",
                correctAnswer: "1856",
              },
              {
                id: "q24-r9s2",
                type: "summary_completion",
                questionNumber: 24,
                text: "after the year of [GAP].",
                correctAnswer: ["1988 and 2002"],
              },
              {
                id: "q25-r9s2",
                type: "summary_completion",
                questionNumber: 25,
                text: "all the 10 hottest years happened from [GAP].",
                correctAnswer: "1990",
              },
              {
                id: "q26-r9s2",
                type: "summary_completion",
                questionNumber: 26,
                text:
                  "summer of 2003 was at the peak of previous [GAP] years, perhaps even more.",
                correctAnswer: "500",
              },
            ],
          },
          {
            instructions: `
              <p>Question 27</p>
              <p>Choose the correct letter A, B, c or D Write your answer in box 27 on your answer sheet</p>
            `,
            questions: [
              {
                id: "q27-r9s2",
                type: "mcq",
                questionNumber: 27,
                text:
                  "Which one can be best served as the title of this passage in the following options?",
                options: [
                  "A Global Warming effect",
                  "B Global Warming in Europe",
                  "C The Effects of hot temperature",
                  "D Hottest summer in Europe",
                ],
                correctAnswer: "D",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-9-section-3",
        title: "Section 3",
        passageContent: `
          Passage 3 content for Reading Test 9 will be added here manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 28-34</p>
              <p>Do the following statements agree with the information given in Reading Passage 3?</p>
              <p>Write your answers in boxes 28-34 on your answer sheet.</p>
              <p><strong>TRUE</strong> if the statement is true</p>
              <p><strong>FALSE</strong> if the statement is false</p>
              <p><strong>NOT GIVEN</strong> if the information is not given in the passage</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q28-r9s3",
                questionNumber: 28,
                text:
                  "Aries pointed out that children did different types of work as adults during the Middle Age.",
                correctAnswer: "FALSE",
              },
              {
                id: "q29-r9s3",
                questionNumber: 29,
                text:
                  "During the Middle Age, going to work necessarily means children were unloved indicated by Aries.",
                correctAnswer: "FALSE",
              },
              {
                id: "q30-r9s3",
                questionNumber: 30,
                text:
                  "Scientists think that overworked labour damages the health of young children",
                correctAnswer: "TRUE",
              },
              {
                id: "q31-r9s3",
                questionNumber: 31,
                text:
                  "the rise of trade union majorly contributed to the protection children from exploitation in 19th century",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q32-r9s3",
                questionNumber: 32,
                text:
                  "By the aid of half-time schools, most children went to school in the mid of 19 century.",
                correctAnswer: "FALSE",
              },
              {
                id: "q33-r9s3",
                questionNumber: 33,
                text:
                  "In 20 century almost all children need to go to school in full time schedule.",
                correctAnswer: "NOT GIVEN",
              },
              {
                id: "q34-r9s3",
                questionNumber: 34,
                text:
                  "Nowadays, children’s needs were much differentiated and categorised based on how old they are",
                correctAnswer: "TRUE",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 35-40</p>
              <p>Answer the questions below.</p>
              <p>Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 35-40 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q35-r9s3",
                type: "fill_in_the_blank",
                questionNumber: 35,
                text:
                  "what is the controversial topic arises with the French historian Philippe Ariès's concept",
                correctAnswer: "history of childhood",
              },
              {
                id: "q36-r9s3",
                type: "fill_in_the_blank",
                questionNumber: 36,
                text:
                  "what image for children did Aries believed to be like in Western Europe during the Middle Ages",
                correctAnswer: "(as) miniature adults",
              },
              {
                id: "q37-r9s3",
                type: "fill_in_the_blank",
                questionNumber: 37,
                text:
                  "what historical event generated the need for great amount child labour to work long time in 18 and 19 century",
                correctAnswer: "(with the) industrialization",
              },
              {
                id: "q38-r9s3",
                type: "fill_in_the_blank",
                questionNumber: 38,
                text:
                  "what legal format initiated the protection of children from exploitation in 19th centenary",
                correctAnswer: "The factory Act",
              },
              {
                id: "q39-r9s3",
                type: "fill_in_the_blank",
                questionNumber: 39,
                text:
                  "what the activities were more and more regarded as being preferable for almost all children time in 19th centenary",
                correctAnswer: "play and education",
              },
              {
                id: "q40-r9s3",
                type: "fill_in_the_blank",
                questionNumber: 40,
                text:
                  "where has been the central area for children to spend largily of their day as people's expectation in modern society",
                correctAnswer: "classroom",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-10",
    moduleId: "reading",
    title: "READING TEST 10",
    description:
      "Academic Reading practice test with various question types for Test 10.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-10-section-1",
        title: "Section 1",
        passageContent: `
          passage-10-1 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-4</p>
              <p>Choose the correct letter, A, B, c or D. Write the correct letter in boxes 1-4 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q1-r10s1",
                questionNumber: 1,
                type: "mcq",
                text:
                  "In the first paragraph, why does the writer say ‘This is not merely an academic debated’?",
                options: [
                  "A. Anthropologists’ theories need to be backed up by practical research.",
                  "B. There have been some important misunderstandings among anthropologists.",
                  "C. The attitudes of anthropologists towards adolescence are changing.",
                  "D. The work of anthropologists could inform our understanding of modem adolescence.",
                ],
                correctAnswer: "D", // Placeholder
              },
              {
                id: "q2-r10s1",
                questionNumber: 2,
                type: "mcq",
                text: "What was Susan Anton’s opinion of the Turkana boy?",
                options: [
                  "A. He would have experienced an adolescent phase had he lived.",
                  "B. His skull showed he had already reached adulthood",
                  "C. His skeleton and teeth could not be compared to those from a more modem age.",
                  "D. He must have grown much faster than others alive at the time.",
                ],
                correctAnswer: "A", // Placeholder
              },
              {
                id: "q3-r10s1",
                questionNumber: 3,
                type: "mcq",
                text: "What point does Steven Leigh make?",
                options: [
                  "A. Different parts of the human skeleton develop at different speeds.",
                  "B. The growth period of many apes is confined to times when there is enough food.",
                  "C. Humans have different rates of development from each other depending on living conditions.",
                  "D. The growth phase in most apes lasts longer if more food is available.",
                ],
                correctAnswer: "A", // Placeholder
              },
              {
                id: "q4-r10s1",
                questionNumber: 4,
                type: "mcq",
                text: "What can we learn from a mammal's teeth?",
                options: [
                  "A. A poor diet will cause them to grow more slowly.",
                  "B. They are a better indication of lifestyle than a skeleton",
                  "C. Their growing period is difficult to predict accurately.",
                  "D. Their speed of growth is directly related to the body’s speed of development.",
                ],
                correctAnswer: "D", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 5-10</p>
              <p>Do the following statements agree with the claims of the writer in Reading Passage 1? In boxes 5-10 on your answer sheet, write</p>
              <p><strong>YES</strong> if the statement agrees with the claims of the writer</p>
              <p><strong>NO</strong> if the statement contradicts the claims of the writer</p>
              <p><strong>NOT GIVEN</strong> if it is impossible to say what the writer thinks about this</p>
            `,
            type: "true_false_not_given", // Using "true_false_not_given" for YES/NO/NOT GIVEN
            questions: [
              {
                id: "q5-r10s1",
                questionNumber: 5,
                text:
                  "It is difficult for anthropologists to do research on human fossil because they are so rare.",
                correctAnswer: "YES", // Placeholder
              },
              {
                id: "q6-r10s1",
                questionNumber: 6,
                text:
                  "Modem methods mean it is possible to predict the age of a skeleton with accuracy.",
                correctAnswer: "NO", // Placeholder
              },
              {
                id: "q7-r10s1",
                questionNumber: 7,
                text:
                  "Susan Anton’s conclusion about the Turkana boy reinforces an established idea.",
                correctAnswer: "YES", // Placeholder
              },
              {
                id: "q8-r10s1",
                questionNumber: 8,
                text:
                  "Steen Leigh’s ideas are likely to be met with disbelief by many anthropologists.",
                correctAnswer: "NOT GIVEN", // Placeholder
              },
              {
                id: "q9-r10s1",
                questionNumber: 9,
                text:
                  "Researchers in France and Spain developed a unique method of analyzing teeth.",
                correctAnswer: "NOT GIVEN", // Placeholder
              },
              {
                id: "q10-r10s1",
                questionNumber: 10,
                text:
                  "There has been too little research comparing the brains of Homo erectus and Neanderthals.",
                correctAnswer: "NO", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 11-14</p>
              <p>Complete each sentence with the correct ending, A-G, below. Write the correct letter A-G, in boxesll-14 on your answer sheet.</p>
            `,
            type: "matching_items",
            listItems: [
              {
                id: "A",
                text:
                  "inconsistencies between heights, skeleton and dental evidence.",
              },
              { id: "B", text: "the fact that human beings walk on two legs," },
              { id: "C", text: "the way teeth grew." },
              {
                id: "D",
                text: "a need to be dependent on others foe survival.",
              },
              { id: "E", text: "difficult climatic conditions." },
              { id: "F", text: "increased quantities of food" },
              {
                id: "G",
                text: "the existence of much larger brains than preciously",
              },
            ],
            questions: [
              {
                id: "q11-r10s1",
                questionNumber: 11,
                statement:
                  "Until recently, delayed growth in humans until adolescence was felt to be due to",
                correctAnswer: "D", // Placeholder
              },
              {
                id: "q12-r10s1",
                questionNumber: 12,
                statement: "In her research, Margaret Clegg discovered",
                correctAnswer: "A", // Placeholder
              },
              {
                id: "q13-r10s1",
                questionNumber: 13,
                statement:
                  "Steven Leigh thought the existence of adolescence is connected to",
                correctAnswer: "G", // Placeholder
              },
              {
                id: "q14-r10s1",
                questionNumber: 14,
                statement:
                  "Research on Neanderthals suggests that they has short lives because of",
                correctAnswer: "E", // Placeholder
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-10-section-2",
        title: "Section 2",
        passageContent: `
          passage-10-2 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 15-21 Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer. Write your answers in boxes 15-21 on your answer sheet</p>
              <p>Answer the table below.</p>
              <div class="map-image-container">
                  <img src="assets/Screenshot 2025-07-27 135731.png" class="rounded-lg">
              </div>
            `,
            questions: [
              {
                id: "q15-r10s2",
                questionNumber: 15,
                type: "fill_in_the_blank",
                text: "performance of two groups is almost [GAP]",
                correctAnswer: "Harvard", // Placeholder
              },
              {
                id: "q16-r10s2",
                questionNumber: 16,
                type: "fill_in_the_blank",
                text:
                  "chose between two sets of [GAP] which are altered behaviour of female birds was objerved",
                correctAnswer: "Oxford", // Placeholder
              },
              {
                id: "q17-r10s2",
                questionNumber: 17,
                type: "fill_in_the_blank",
                text:
                  "chicks can do calculations in order to shoose larger group bird seems to have ablity to [GAP]",
                correctAnswer: "Cambridge", // Placeholder
              },
              {
                id: "q18-r10s2",
                questionNumber: 18,
                type: "fill_in_the_blank",
                text:
                  "offered clear tubes containing different quantities [GAP]",
                correctAnswer: "Stanford", // Placeholder
              },
              {
                id: "q19-r10s2",
                questionNumber: 19,
                type: "fill_in_the_blank",
                text: "Salmanders [GAP]",
                correctAnswer: "MIT", // Placeholder
              },
              {
                id: "q20-r10s2",
                questionNumber: 20,
                type: "fill_in_the_blank",
                text:
                  "these are used to check influence of total [GAP] and brightness",
                correctAnswer: "Yale", // Placeholder
              },
              {
                id: "q21-r10s2",
                questionNumber: 21,
                type: "fill_in_the_blank",
                text: "had to learn where [GAP] was stored",
                correctAnswer: "Princeton", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 22-27</p>
              <p>Do the following statements agree with the information given in Reading Passage 2? In boxes 22-27 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement true</p>
              <p><strong>FALSE</strong> if the statement false</p>
              <p><strong>NOT GIVEN</strong> if the information not given in the passage</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q22-r10s2",
                questionNumber: 22,
                text:
                  "Primates are better at identifying the larger of two numbers if one is much bigger than the other.",
                correctAnswer: "TRUE", // Placeholder
              },
              {
                id: "q23-r10s2",
                questionNumber: 23,
                text:
                  "Jurgen Tautz trained the insects in his experiment to recognise the shapes of individual numbers.",
                correctAnswer: "NOT GIVEN", // Placeholder
              },
              {
                id: "q24-r10s2",
                questionNumber: 24,
                text:
                  "The research involving young chicks took place over two separate days.",
                correctAnswer: "FALSE", // Placeholder
              },
              {
                id: "q25-r10s2",
                questionNumber: 25,
                text:
                  "The experiment with chicks suggests that some numerical ability exists in newborn animals.",
                correctAnswer: "TRUE", // Placeholder
              },
              {
                id: "q26-r10s2",
                questionNumber: 26,
                text:
                  "Researchers have experimented by altering quantities of nectar or fruit available to certain wild animals.",
                correctAnswer: "NOT GIVEN", // Placeholder
              },
              {
                id: "q27-r10s2",
                questionNumber: 27,
                text:
                  "When assessing the number of eggs in their nest, coots take into account those of other birds.",
                correctAnswer: "TRUE", // Placeholder
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-10-section-3",
        title: "Section 3",
        passageContent: `
          passage-10-3 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 28-31</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than three words from the Reading Passage for each answer. Write your answers in boxes 28-31 on your answer sheet.</p>
              <div class="map-image-container">
                  <img src="assets/Screenshot 2025-07-27 135921.png" class="rounded-lg">
              </div>
            `,
            questions: [
              {
                id: "q28-r10s3",
                questionNumber: 28,
                type: "summary_completion",
                text: "[GAP] bones in linner ear",
                correctAnswer: "Placeholder 28", // Placeholder
              },
              {
                id: "q29-r10s3",
                questionNumber: 29,
                type: "summary_completion",
                text: "an extremely large [GAP]",
                correctAnswer: "Placeholder 29", // Placeholder
              },
              {
                id: "q30-r10s3",
                questionNumber: 30,
                type: "summary_completion",
                text: "toe and fatty [GAP]",
                correctAnswer: "Placeholder 30", // Placeholder
              },
              {
                id: "q31-r10s3",
                questionNumber: 31,
                type: "summary_completion",
                text: "big sized brain skull with many [GAP]",
                correctAnswer: "Placeholder 31", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Question 32-38</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more three words or a number from the Reading Passage for each answer.</p>
              <p>Write your answers in boxes 32-38 on your answer sheet.</p>
              <p>How the elephants sense these sound vibrations is still unknown, but O’Connell Rodwell, a fresh graduate in entomology at the University of Hawaii, proposes that the elephants are “listening” with their 32............., by two kinds of nerve endings—that responds to vibrations with both 33 .............frequency and slightly higher frequencies, o’Connell-Rodwell work is at the combination of geophysics, neurophysiology and 34 .............and it also was the first to indicate that a large land animal also is sending and receiving 35 ............., O’Connell-Rodwell noticed the freezing behavior by putting a male planthopper communicative approach other than 36………… Scientists have determined that an elephant’s ability to communicate over long distances is essential, especially, when elephant herds are finding a 37............., or are warning of predators. Finally, the results of our 2002 study showed US that elephants can detect warning calls played through the 38.............”</p>
            `,
            questions: [
              {
                id: "q32-r10s3",
                questionNumber: 32,
                type: "summary_completion",
                text: "listening” with their [GAP]",
                correctAnswer: "feet", // Placeholder
              },
              {
                id: "q33-r10s3",
                questionNumber: 33,
                type: "summary_completion",
                text: "both [GAP] frequency",
                correctAnswer: "low", // Placeholder
              },
              {
                id: "q34-r10s3",
                questionNumber: 34,
                type: "summary_completion",
                text: "neurophysiology and [GAP]",
                correctAnswer: "bioacoustics", // Placeholder
              },
              {
                id: "q35-r10s3",
                questionNumber: 35,
                type: "summary_completion",
                text: "sending and receiving [GAP]",
                correctAnswer: "seismic signals", // Placeholder
              },
              {
                id: "q36-r10s3",
                questionNumber: 36,
                type: "summary_completion",
                text: "approach other than [GAP]",
                correctAnswer: "audible calls", // Placeholder
              },
              {
                id: "q37-r10s3",
                questionNumber: 37,
                type: "summary_completion",
                text: "finding a [GAP]",
                correctAnswer: "mate", // Placeholder
              },
              {
                id: "q38-r10s3",
                questionNumber: 38,
                type: "summary_completion",
                text: "through the [GAP]",
                correctAnswer: "ground", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Question 39-40</p>
              <p>Choose the correct letter. A, B, c or D. Write your answers in boxes 39-40 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q39-r10s3",
                questionNumber: 39,
                type: "mcq",
                text:
                  "According the passage, it is determined that an elephant need to communicate over long distances for its survival",
                options: [
                  "A. When a threatening predator appears.",
                  "B. When young elephants meet humans.",
                  "C. When older members of the herd want to flee from the group.",
                  "D. when a male elephant is in estrus.",
                ],
                correctAnswer: "A", // Placeholder
              },
              {
                id: "q40-r10s3",
                questionNumber: 40,
                type: "mcq",
                text:
                  "What is the author’s attitude toward the experiment by using three different recordings in the paragraph?",
                options: [
                  "A. the outcome is definitely out of the original expectation",
                  "B the data cannot be very clearly obtained",
                  "C. the result can be somewhat undecided or inaccurate",
                  "D the result can be unfamiliar to the public",
                ],
                correctAnswer: "C", // Placeholder
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-11",
    moduleId: "reading",
    title: "READING TEST 11",
    description:
      "Academic Reading practice test with various question types for Test 11.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-11-section-1",
        title: "Section 1",
        passageContent: `
          passage-11-1 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-4</p>
              <p>The reading Passage has seven paragraphs A-T. Which paragraphs contains the following information? Write the correct letter A-H, in boxesl-4 on your answer sheet. NB You may use a letter more than once.</p>
            `,
            type: "which_paragraph_contains",
            questions: [
              {
                id: "q1-r11s1",
                questionNumber: 1,
                text: "A reason for changing the exhibition programs.",
                correctAnswer: "Placeholder 1", // Placeholder
              },
              {
                id: "q2-r11s1",
                questionNumber: 2,
                text:
                  "The time people have to wait in a queue in order to enjoy exhibitions.",
                correctAnswer: "Placeholder 2", // Placeholder
              },
              {
                id: "q3-r11s1",
                questionNumber: 3,
                text: "Terms people used when referring to blockbuster",
                correctAnswer: "Placeholder 3", // Placeholder
              },
              {
                id: "q4-r11s1",
                questionNumber: 4,
                text:
                  "There was some controversy over confining target groups of blockbuster.",
                correctAnswer: "Placeholder 4", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 5-8</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than three words from the Reading Passage for each answer. Write your answers in boxes 5-8 on your answer sheet.</p>
              <p>Instead of being visitors, people turned out to be____5_____, who require the creation or hiring of blockbuster exhibitions as well as regular exhibition changes and innovations. Business nous and ____6_____simply summarized in a magazine are not only important factors for directors, but also an ability to attract a crowd of audiences. _____7_____ has contributed to the linking of museums, the heritage industry, and tourism, profit-making and pleasure-giving. There occurs some controversy over whether it is proper to consider museums mainly as_____8______. </p>
            `,
            questions: [
              {
                id: "q5-r11s1",
                type: "summary_completion",
                questionNumber: 5,
                text: "people turned out to be [GAP]",
                correctAnswer: "Placeholder 5", // Placeholder
              },
              {
                id: "q6-r11s1",
                type: "summary_completion",
                questionNumber: 6,
                text: "Business nous and [GAP] simply summarized in a magazine",
                correctAnswer: "Placeholder 6", // Placeholder
              },
              {
                id: "q7-r11s1",
                type: "summary_completion",
                questionNumber: 7,
                text: "[GAP] has contributed to the linking of museums",
                correctAnswer: "Placeholder 7", // Placeholder
              },
              {
                id: "q8-r11s1",
                type: "summary_completion",
                questionNumber: 8,
                text: "consider museums mainly as [GAP]",
                correctAnswer: "Placeholder 8", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 9-10</p>
              <p>Choose TWO letters A-E.</p>
              <p>Write your answer in boxes 9-10 on your answer sheet.</p>
              <p>The list below gives some advantages of blockbuster.</p>
              <p>Which TWO advantages are mentioned by the writer of the text?</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              {
                id: "A",
                text: "To offer sufficient money to repair architectures.",
              },
              { id: "B", text: "To maintain and increase visitor levels." },
              {
                id: "C",
                text:
                  "Presenting the mixture in the culture and commerce of art galleries and science centres worldwide.",
              },
              {
                id: "D",
                text: "Being beneficial for the development of local business.",
              },
              { id: "E", text: "Being beneficial for the directors." },
            ],
            questions: [
              {
                id: "q9-10-r11s1",
                questionNumber: "9-10",
                text:
                  "Which TWO advantages are mentioned by the writer of the text?",
                correctAnswer: ["Placeholder 9", "Placeholder 10"], // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 11 - 13</p>
              <p>Choose THREE letters A-F. Write your answer in boxes 11-13on your answer sheet.</p>
              <p>The list below gives some disadvantages of blockbuster.</p>
              <p>Which THREE disadvantages are mentioned by the writer of the text?</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              { id: "A", text: "People felt hesitated to choose exhibitions." },
              { id: "B", text: "Workers has become tired of workloads." },
              {
                id: "C",
                text:
                  "The content has become more entertaining rather than cultural.",
              },
              {
                id: "D",
                text:
                  "General Laborers are required to perform additional tasks",
              },
              {
                id: "E",
                text: "Huge amounts of capital invested in specialists.",
              },
              {
                id: "F",
                text:
                  "Exposing staff to the fantasies and pressures of the market place.",
              },
            ],
            questions: [
              {
                id: "q11-13-r11s1",
                questionNumber: "11-13",
                text:
                  "Which THREE disadvantages are mentioned by the writer of the text?",
                correctAnswer: [
                  "Placeholder 11",
                  "Placeholder 12",
                  "Placeholder 13",
                ], // Placeholder
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-11-section-2",
        title: "Section 2",
        passageContent: `
          passage-11-2 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-18</p>
              <p>Use the information in the passage to match the people (listed A-D) with opinions or deeds below. Write the appropriate letters A-D in boxes 14-18 on your answer sheet.</p>
              <p>NB you may use any letter more than once</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Jan Elsnera" },
              { id: "B", text: "Vanessa Stoykov Neil Plumridge" },
              { id: "C", text: "Gal Zauberman" },
              { id: "D", text: "Neil Plumridge" },
            ],
            questions: [
              {
                id: "q14-r11s2",
                questionNumber: 14,
                statement:
                  "Work stress usually happens in the high level of a business.",
                correctAnswer: "Placeholder 14", // Placeholder
              },
              {
                id: "q15-r11s2",
                questionNumber: 15,
                statement:
                  "More people's ideas involved would be beneficial for stress relief",
                correctAnswer: "Placeholder 15", // Placeholder
              },
              {
                id: "q16-r11s2",
                questionNumber: 16,
                statement:
                  "Temporary holiday sometimes doesn't mean less work.",
                correctAnswer: "Placeholder 16", // Placeholder
              },
              {
                id: "q17-r11s2",
                questionNumber: 17,
                statement:
                  "Stress leads to a wrong direction when trying to satisfy customers.",
                correctAnswer: "Placeholder 17", // Placeholder
              },
              {
                id: "q18-r11s2",
                questionNumber: 18,
                statement:
                  "It is not correct that stress in the future will be eased more than now",
                correctAnswer: "Placeholder 18", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 19-21</p>
              <p>Choose the correct letter, A, B, c or D.</p>
              <p>Write your answers in boxes 19-21 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q19-r11s2",
                type: "mcq",
                questionNumber: 19,
                text:
                  "Which of the following workplace stress is NOT mentioned according to Plumridge in the following options?",
                options: [
                  "A Not enough time spend on family",
                  "B Unable to concentrate on work",
                  "C Inadequate time of sleep",
                  "D Alteration of appointment",
                ],
                correctAnswer: "Placeholder 19", // Placeholder
              },
              {
                id: "q20-r11s2",
                type: "mcq",
                questionNumber: 20,
                text:
                  "Which of the following solution is NOT mentioned in helping reduce the work pressure according to Plumridgel",
                options: [
                  "A. Allocate more personnel",
                  "B. Increase more time",
                  "C. Lower expectation",
                  "D. Do sports and massage",
                ],
                correctAnswer: "Placeholder 20", // Placeholder
              },
              {
                id: "q21-r11s2",
                type: "mcq",
                questionNumber: 21,
                text:
                  "What is point of view of Jan Elsnera towards work stress?",
                options: [
                  "A Medical test can only reveal part of the data needed to cope with stress",
                  "B Index some body samples will be abnormal in a stressful experience",
                  "C Emotional and cognitive affection is superior to physical one",
                  "D One well designed solution can release all stress",
                ],
                correctAnswer: "Placeholder 21", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 22-27</p>
              <p>Summary</p>
              <p>Complete the following summary of the paragraphs of Reading Passage, using no more than two words from the Reading Passage for each answer. Write your answers in boxes 22-27 on your answer sheet.</p>
              <p>Statistics from National worker's compensation indicate stress plays the most important role in____22_____ which cause the time losses. Staffs take about ____23______ for absence from work caused by stress. Not just time is our main concern but great expenses generated consequently. An official insurer wrote sometime that about ____24_____ of all claims were mental issues whereas nearly 27% costs in all claims. Sports such as _____25______, as well as 26 could be a treatment to release stress; however, specialists recommended another practical way out, analyse _____27____once again.</p>
            `,
            questions: [
              {
                id: "q22-r11s2",
                type: "summary_completion",
                questionNumber: 22,
                text: "most important role in [GAP]",
                correctAnswer: "Placeholder 22", // Placeholder
              },
              {
                id: "q23-r11s2",
                type: "summary_completion",
                questionNumber: 23,
                text: "Staffs take about [GAP] for absence from work",
                correctAnswer: "Placeholder 23", // Placeholder
              },
              {
                id: "q24-r11s2",
                type: "summary_completion",
                questionNumber: 24,
                text: "about [GAP] of all claims were mental issues",
                correctAnswer: "Placeholder 24", // Placeholder
              },
              {
                id: "q25-r11s2",
                type: "summary_completion",
                questionNumber: 25,
                text: "Sports such as [GAP]",
                correctAnswer: "Placeholder 25", // Placeholder
              },
              {
                id: "q26-r11s2",
                type: "summary_completion",
                questionNumber: 26,
                text: "as well as [GAP] could be a treatment",
                correctAnswer: "Placeholder 26", // Placeholder
              },
              {
                id: "q27-r11s2",
                type: "summary_completion",
                questionNumber: 27,
                text: "analyse [GAP] once again.",
                correctAnswer: "Placeholder 27", // Placeholder
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-11-section-3",
        title: "Section 3",
        passageContent: `
          passage-11-3 will be added later manually.
        `,
        questionGroups: [
          {
            instructions: `
              <p>Questions 28-33</p>
              <p>The reading Passage has ten paragraphs A-J. Which paragraph contains the following information? Write the correct letter A-J, in boxes 28-33 on your answer sheet NB You may use any letter more than once.</p>
            `,
            type: "which_paragraph_contains",
            questions: [
              {
                id: "q28-r11s3",
                questionNumber: 28,
                text: "Approach to retain best employees",
                correctAnswer: "Placeholder 28", // Placeholder
              },
              {
                id: "q29-r11s3",
                questionNumber: 29,
                text: "Safeguarding expenses on innovative idea",
                correctAnswer: "Placeholder 29", // Placeholder
              },
              {
                id: "q30-r11s3",
                questionNumber: 30,
                text:
                  "Integrating outside firms might produce certain counter effect",
                correctAnswer: "Placeholder 30", // Placeholder
              },
              {
                id: "q31-r11s3",
                questionNumber: 31,
                text: "Example of three famous American companies' innovation",
                correctAnswer: "Placeholder 31", // Placeholder
              },
              {
                id: "q32-r11s3",
                questionNumber: 32,
                text: "Example of one company changing its focus",
                correctAnswer: "Placeholder 32", // Placeholder
              },
              {
                id: "q33-r11s3",
                questionNumber: 33,
                text:
                  "Example of a company resolving financial difficulties itself",
                correctAnswer: "Placeholder 33", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 34-37</p>
              <p>Do the following statements agree with the information given ỉ n Reading Passage 3? In boxes 34-37 on your answer sheet, write</p>
              <p><strong>TRUE</strong> if the statement is true</p>
              <p><strong>FALSE</strong> if the statement is false</p>
              <p><strong>NOT GIVEN</strong> if the information is not given in the passage</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q34-r11s3",
                questionNumber: 34,
                text:
                  "Umagic is the most successful innovative company in this new field.",
                correctAnswer: "Placeholder 34", // Placeholder
              },
              {
                id: "q35-r11s3",
                questionNumber: 35,
                text:
                  "Amazon and Wal-Mart exchanged their innovation experience.",
                correctAnswer: "Placeholder 35", // Placeholder
              },
              {
                id: "q36-r11s3",
                questionNumber: 36,
                text:
                  "New idea holder had already been known to take it to small company in the past.",
                correctAnswer: "Placeholder 36", // Placeholder
              },
              {
                id: "q37-r11s3",
                questionNumber: 37,
                text:
                  "IBM failed to understand Umagic's proposal of one new idea.",
                correctAnswer: "Placeholder 37", // Placeholder
              },
            ],
          },
          {
            instructions: `
              <p>Questions 38-40</p>
              <p>Choose the correct letter, A, B, c or D. Write your answers in boxes 38-40 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q38-r11s3",
                type: "mcq",
                questionNumber: 38,
                text:
                  "What is author’s opinion on the effect of innovation in paragraph c?",
                options: [
                  "A. It only works for big companies",
                  "B. Fortune magazine has huge influence globally",
                  "C. It is getting more important",
                  "D. Effect on American companies is more evident",
                ],
                correctAnswer: "Placeholder 38", // Placeholder
              },
              {
                id: "q39-r11s3",
                type: "mcq",
                questionNumber: 39,
                text: "What is Peter Chemin’s point of view on innovation?",
                options: [
                  "A. Small company is more innovative than big one",
                  "B. Film industry need more innovation than other industries",
                  "C. We need to cut the cost when risks occur",
                  "D. New ideas are more likely going to big companies",
                ],
                correctAnswer: "Placeholder 39", // Placeholder
              },
              {
                id: "q40-r11s3",
                type: "mcq",
                questionNumber: 40,
                text:
                  "What is author’s opinion on innovation at the end of this passage?",
                options: [
                  'A. Umagic success lies on the accidental "virtual experts"',
                  "B. Innovation is easy and straightforward",
                  "C. IBM sets a good example on innovation",
                  "D. The author’s attitude is uncertain on innovation",
                ],
                correctAnswer: "Placeholder 40", // Placeholder
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-12",
    moduleId: "reading",
    title: "READING TEST 12",
    description:
      "Academic Reading practice test with various question types for Test 12.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-12-section-1",
        title: "Section 1",
        passageContent: "passage-12-1 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-7</p>
              <p>Reading Passage 1 has ten paragraphs A-J.</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              { id: "i", text: "Limited success in suppressing the game" },
              {
                id: "ii",
                text: "Opposition to the role of football in schools",
              },
              { id: "iii", text: "A way of developing moral values" },
              { id: "iv", text: "Football matches between countries" },
              { id: "V", text: "A game that has survived" },
              { id: "VI", text: "Separation into two sports" },
              { id: "Vii", text: "Proposals for minor improvements" },
              { id: "viii", text: "Attempts to standardise the game" },
              { id: "ix", text: "Probably not an early version of football" },
              { id: "x", text: "A chaotic activity with virtually no rules" },
            ],
            questions: [
              {
                id: "q1-r12s1",
                questionNumber: 1,
                paragraphId: "D",
                correctAnswer: "Placeholder 1",
              },
              {
                id: "q2-r12s1",
                questionNumber: 2,
                paragraphId: "E",
                correctAnswer: "Placeholder 2",
              },
              {
                id: "q3-r12s1",
                questionNumber: 3,
                paragraphId: "F",
                correctAnswer: "Placeholder 3",
              },
              {
                id: "q4-r12s1",
                questionNumber: 4,
                paragraphId: "G",
                correctAnswer: "Placeholder 4",
              },
              {
                id: "q5-r12s1",
                questionNumber: 5,
                paragraphId: "H",
                correctAnswer: "Placeholder 5",
              },
              {
                id: "q6-r12s1",
                questionNumber: 6,
                paragraphId: "I",
                correctAnswer: "Placeholder 6",
              },
              {
                id: "q7-r12s1",
                questionNumber: 7,
                paragraphId: "J",
                correctAnswer: "Placeholder 7",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 8-13</p>
              <p>Complete each sentence with the correct ending A-l from the box below. Write the correct letter A-F in boxes 8-13 on your answer sheet.</p>
            `,
            type: "matching_items", // Using matching_items for "matching endings"
            listItems: [
              { id: "A", text: "Placeholder A (from passage)" },
              { id: "B", text: "Placeholder B (from passage)" },
              { id: "C", text: "Placeholder C (from passage)" },
              { id: "D", text: "Placeholder D (from passage)" },
              { id: "E", text: "Placeholder E (from passage)" },
              { id: "F", text: "Placeholder F (from passage)" },
              { id: "G", text: "Placeholder G (from passage)" },
              { id: "H", text: "Placeholder H (from passage)" },
              { id: "I", text: "Placeholder I (from passage)" },
            ],
            questions: [
              {
                id: "q8-r12s1",
                questionNumber: 8,
                statement: "Tsu'chu",
                correctAnswer: "Placeholder 8",
              },
              {
                id: "q9-r12s1",
                questionNumber: 9,
                statement: "Kemari",
                correctAnswer: "Placeholder 9",
              },
              {
                id: "q10-r12s1",
                questionNumber: 10,
                statement: "Harpastum",
                correctAnswer: "Placeholder 10",
              },
              {
                id: "q11-r12s1",
                questionNumber: 11,
                statement:
                  "From the 8th to the 19th centuries, football in the British Isles",
                correctAnswer: "Placeholder 11",
              },
              {
                id: "q12-r12s1",
                questionNumber: 12,
                statement:
                  "In the past, the authorities legitimately despised the football and acted on the belief that football",
                correctAnswer: "Placeholder 12",
              },
              {
                id: "q13-r12s1",
                questionNumber: 13,
                statement:
                  "When it was accepted in academic settings, football",
                correctAnswer: "Placeholder 13",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-12-section-2",
        title: "Section 2",
        passageContent: "passage-12-2 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Question 14-16</p>
              <p>Choose the correct letter, A, B, c or D. Write the correct letter in box 14-16 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q14-r12s2",
                type: "mcq",
                questionNumber: 14,
                text:
                  "The writer mentions the paintings in the first two paragraphs to illustrate",
                options: [
                  "A that the two paintings are immortalized.",
                  "B people’s different opinions.",
                  "C a possible climate change happened 12,000 years ago.",
                  "D the possibility of a small ice age in the future.",
                ],
                correctAnswer: "Placeholder 14",
              },
              {
                id: "q15-r12s2",
                type: "mcq",
                questionNumber: 15,
                text:
                  "Why is it hard for the poor to survive the next cooling period?",
                options: [
                  "A because people can’t remove themselves from the major safety nets.",
                  "B because politicians are voting against the movement,",
                  "C because migration seems impossible for the reason of closed borders.",
                  "D because climate changes accelerate the process of moving southward.",
                ],
                correctAnswer: "Placeholder 15",
              },
              {
                id: "q16-r12s2",
                type: "mcq",
                questionNumber: 16,
                text:
                  "Why is the winter temperature in continental Europe higher than that in North America?",
                options: [
                  "A because heat is brought to Europe with the wind flow.",
                  "B because the eastward movement of freshwater continues,",
                  "C because Boston and Rome are at the same latitude.",
                  "D because the ice formation happens in North America.",
                ],
                correctAnswer: "Placeholder 16",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 17-21</p>
              <p>Match each statement (Questions 17-21) with the correct person A-D in the box below.</p>
              <p>Write the correct letter A, B, C or D in boxes 17-21 on your answer sheet.</p>
              <p>NB: You may use any letter more than once.</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Bob Dickson" },
              { id: "B", text: "Terrence Joyce" },
              { id: "C", text: "William Curry" },
              { id: "D", text: "National Academy of Science" },
            ],
            questions: [
              {
                id: "q17-r12s2",
                questionNumber: 17,
                statement: "A quick climate change wreaks great disruption.",
                correctAnswer: "Placeholder 17",
              },
              {
                id: "q18-r12s2",
                questionNumber: 18,
                statement:
                  "Most Americans are not prepared for the next cooling period.",
                correctAnswer: "Placeholder 18",
              },
              {
                id: "q19-r12s2",
                questionNumber: 19,
                statement:
                  "A case of a change of ocean water is mentioned in a conference.",
                correctAnswer: "Placeholder 19",
              },
              {
                id: "q20-r12s2",
                questionNumber: 20,
                statement:
                  "Global warming urges the appearance of the ice age.",
                correctAnswer: "Placeholder 20",
              },
              {
                id: "q21-r12s2",
                questionNumber: 21,
                statement:
                  "The temperature will not drop to the same degree as it used to be.",
                correctAnswer: "Placeholder 21",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 22-26</p>
              <p>Complete the flow chart below.</p>
              <p>ChooseNO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 22-26 on your answer sheet.</p>
              <div class="map-image-container">
                  <img src="assets/Screenshot 2025-07-27 223421.png" alt="Container Diagram" class="rounded-lg">
              </div>

            `,
            questions: [
              {
                id: "q22-r12s2",
                type: "fill_in_the_blank",
                questionNumber: 22,
                text: "Flow chart item 1: [GAP]",
                correctAnswer: "Placeholder 22",
              },
              {
                id: "q23-r12s2",
                type: "fill_in_the_blank",
                questionNumber: 23,
                text: "Flow chart item 2: [GAP]",
                correctAnswer: "Placeholder 23",
              },
              {
                id: "q24-r12s2",
                type: "fill_in_the_blank",
                questionNumber: 24,
                text: "Flow chart item 3: [GAP]",
                correctAnswer: "Placeholder 24",
              },
              {
                id: "q25-r12s2",
                type: "fill_in_the_blank",
                questionNumber: 25,
                text: "Flow chart item 4: [GAP]",
                correctAnswer: "Placeholder 25",
              },
              {
                id: "q26-r12s2",
                type: "fill_in_the_blank",
                questionNumber: 26,
                text: "Flow chart item 5: [GAP]",
                correctAnswer: "Placeholder 26",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-12-section-3",
        title: "Section 3",
        passageContent: "passage-12-3 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 27-34</p>
              <p>The reading Passage has ten paragraphs A-J. Which paragraph contains the following information? Write the correct letter A-J, in boxes 27-34 on your answer sheet NB You may use any letter more than once.</p>
            `,
            type: "matching_headings",
            listHeadings: [
              {
                id: "i",
                text: "Benefits of the new scheme and its resistance",
              },
              { id: "ii", text: "Making use of the once wasted weekends" },
              { id: "iii", text: "Cutting work hours for better efficiency" },
              { id: "iv", text: "Optimism of the great future" },
              { id: "v", text: "Negative effects on production itself" },
              { id: "vi", text: "Soviet Union’s five year plan" },
              {
                id: "vii",
                text: "The abolishment of the new work-week scheme",
              },
              { id: "viii", text: "The Ford model" },
              {
                id: "ix",
                text: "Reaction from factory workers and their families",
              },
              { id: "x", text: "The color-coding scheme" },
              { id: "xi", text: "Establishing a three-shift system" },
              { id: "xii", text: "Foreign inspiration" },
            ],
            questions: [
              {
                id: "q27-r12s3",
                questionNumber: 27,
                paragraphId: "A",
                correctAnswer: "Placeholder 27",
              },
              {
                id: "q28-r12s3",
                questionNumber: 28,
                paragraphId: "B",
                correctAnswer: "Placeholder 28",
              },
              {
                id: "q29-r12s3",
                questionNumber: 29,
                paragraphId: "D",
                correctAnswer: "Placeholder 29",
              },
              {
                id: "q30-r12s3",
                questionNumber: 30,
                paragraphId: "E",
                correctAnswer: "Placeholder 30",
              },
              {
                id: "q31-r12s3",
                questionNumber: 31,
                paragraphId: "F",
                correctAnswer: "Placeholder 31",
              },
              {
                id: "q32-r12s3",
                questionNumber: 32,
                paragraphId: "G",
                correctAnswer: "Placeholder 32",
              },
              {
                id: "q33-r12s3",
                questionNumber: 33,
                paragraphId: "H",
                correctAnswer: "Placeholder 33",
              },
              {
                id: "q34-r12s3",
                questionNumber: 34,
                paragraphId: "I",
                correctAnswer: "Placeholder 34",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 35-37</p>
              <p>Choose the correct letter A, B, c or D. Write your answers in boxes 35-37 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q35-r12s3",
                type: "mcq",
                questionNumber: 35,
                text:
                  "According to paragraph A, Soviet’s five year plan was a success because",
                options: [
                  "A Bolsheviks built a strong fortress.",
                  "B Russia was weak and backward,",
                  "C industrial production increased.",
                  "D Stalin was confident about Soviet’s potential.",
                ],
                correctAnswer: "Placeholder 35",
              },
              {
                id: "q36-r12s3",
                type: "mcq",
                questionNumber: 36,
                text: "Daily working hours were cut from eight to seven to",
                options: [
                  "A improve the lives of all people.",
                  "B boost industrial productivity,",
                  "C get rid of undesirable work hours.",
                  "D change the already establish three-shift work system.",
                ],
                correctAnswer: "Placeholder 36",
              },
              {
                id: "q37-r12s3",
                type: "mcq",
                questionNumber: 37,
                text:
                  "Many factory managers claimed to have complied with the demands of the new work week because",
                options: [
                  "A they were pressurized by the state to do so.",
                  "B they believed there would not be any practical problems,",
                  "C they were able to apply it.",
                  "D workers hated the new plan.",
                ],
                correctAnswer: "Placeholder 37",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 38-40</p>
              <p>Answer the questions below using NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 38-40 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q38-r12s3",
                type: "fill_in_the_blank",
                questionNumber: 38,
                text:
                  "Whose idea of continuous work week did Stalin approve and helped to implement?",
                correctAnswer: "Placeholder 38",
              },
              {
                id: "q39-r12s3",
                type: "fill_in_the_blank",
                questionNumber: 39,
                text:
                  "What method was used to help workers to remember the rotation of theft off days?",
                correctAnswer: "Placeholder 39",
              },
              {
                id: "q40-r12s3",
                type: "fill_in_the_blank",
                questionNumber: 40,
                text:
                  "What was the most resistant force to the new work week scheme?",
                correctAnswer: "Placeholder 40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-13",
    moduleId: "reading",
    title: "READING TEST 13",
    description:
      "Academic Reading practice test with various question types for Test 13.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-13-section-1",
        title: "Section 1",
        passageContent: "passage-13-1 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-7</p>
              <p>Reading passage 1 has seven paragraphs, A-G Choose the correct heading for paragraphs A -G from the list of headings below. Write the correct number, i-x, in boxes 1-7 on your answer sheet.</p>
              <p>List of headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              {
                id: "i",
                text:
                  "Other experiments following Calhoun’s experiment offering a clearer indication",
              },
              {
                id: "ii",
                text: "The effects of crowding on people in the social scope",
              },
              { id: "iii", text: "Psychological reaction to crowding" },
              { id: "iv", text: "Problems that result in crowding" },
              { id: "v", text: "Responsibility does not work" },
              { id: "vi", text: "What cause the upset feel of crowding" },
              { id: "vii", text: "Definitions of crowding and density" },
              { id: "viii", text: "Advice for crowded work environment" },
              {
                id: "ix",
                text:
                  "Difference between male and females’ attractiveness in a crowd",
              },
              { id: "X", text: "Nature and results of Calboun’s experiment" },
            ],
            questions: [
              {
                id: "q1-r13s1",
                questionNumber: 1,
                paragraphId: "A",
                correctAnswer: "Placeholder 1",
              },
              {
                id: "q2-r13s1",
                questionNumber: 2,
                paragraphId: "B",
                correctAnswer: "Placeholder 2",
              },
              {
                id: "q3-r13s1",
                questionNumber: 3,
                paragraphId: "C",
                correctAnswer: "Placeholder 3",
              },
              {
                id: "q4-r13s1",
                questionNumber: 4,
                paragraphId: "D",
                correctAnswer: "Placeholder 4",
              },
              {
                id: "q5-r13s1",
                questionNumber: 5,
                paragraphId: "E",
                correctAnswer: "Placeholder 5",
              },
              {
                id: "q6-r13s1",
                questionNumber: 6,
                paragraphId: "F",
                correctAnswer: "Placeholder 6",
              },
              {
                id: "q7-r13s1",
                questionNumber: 7,
                paragraphId: "G",
                correctAnswer: "Placeholder 7",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 8-13</p>
              <p>Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 8-13 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q8-r13s1",
                type: "fill_in_the_blank",
                questionNumber: 8,
                text:
                  "Being disturbed repeatedly, the harried mother feels frustrated for the lack of [GAP]",
                correctAnswer: "Placeholder 8",
              },
              {
                id: "q9-r13s1",
                type: "fill_in_the_blank",
                questionNumber: 9,
                text:
                  "Inmates in high density settings were more aggressive in [GAP]",
                correctAnswer: "Placeholder 9",
              },
              {
                id: "q10-r13s1",
                type: "fill_in_the_blank",
                questionNumber: 10,
                text:
                  "The different result between male and female is associated with the varying need of [GAP]",
                correctAnswer: "Placeholder 10",
              },
              {
                id: "q11-r13s1",
                type: "fill_in_the_blank",
                questionNumber: 11,
                text:
                  "Especially for male, Baum and Greenberg found that [GAP] declined with high density.",
                correctAnswer: "Placeholder 11",
              },
              {
                id: "q12-r13s1",
                type: "fill_in_the_blank",
                questionNumber: 12,
                text:
                  "The idea of responsibility diffusion may explain a person's reluctant to [GAP]",
                correctAnswer: "Placeholder 12",
              },
              {
                id: "q13-r13s1",
                type: "fill_in_the_blank",
                questionNumber: 13,
                text:
                  "Schmidt and Keating suggest that if more [GAP] was present there would be a reduction in crowding stress.",
                correctAnswer: "Placeholder 13",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-13-section-2",
        title: "Section 2",
        passageContent: "passage-13-2 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-20</p>
              <p>Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for paragraphs, A-G from the list below. Write the correct number, i-x, in boxes 14-20 on your answer sheet.</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              { id: "i", text: "Financial hardship of community" },
              {
                id: "ii",
                text: "A good tendency of strengthening the supervision",
              },
              {
                id: "iii",
                text:
                  "Details of plans for the community’s makeover and upgrade",
              },
              {
                id: "iv",
                text: "Architecture suits families of various ethnic origins",
              },
              {
                id: "v",
                text:
                  "Problems arise then the mentality of alienation developed later",
              },
              {
                id: "vi",
                text:
                  "Introduction of a social housing community with unexpected high standard",
              },
              {
                id: "vii",
                text:
                  "A practical design and need assist and cooperate in future",
              },
              {
                id: "viii",
                text: "closer relationship among neighbors in original site",
              },
              {
                id: "ix",
                text:
                  "different need from a makeup of a low financial background should be considered",
              },
              { id: "x", text: "How to make the community feel safe" },
              { id: "xi", text: "a plan with details for house structure" },
            ],
            questions: [
              {
                id: "q14-r13s2",
                questionNumber: 14,
                paragraphId: "A",
                correctAnswer: "Placeholder 14",
              },
              {
                id: "q15-r13s2",
                questionNumber: 15,
                paragraphId: "B",
                correctAnswer: "Placeholder 15",
              },
              {
                id: "q16-r13s2",
                questionNumber: 16,
                paragraphId: "C",
                correctAnswer: "Placeholder 16",
              },
              {
                id: "q17-r13s2",
                questionNumber: 17,
                paragraphId: "D",
                correctAnswer: "Placeholder 17",
              },
              {
                id: "q18-r13s2",
                questionNumber: 18,
                paragraphId: "E",
                correctAnswer: "Placeholder 18",
              },
              {
                id: "q19-r13s2",
                questionNumber: 19,
                paragraphId: "F",
                correctAnswer: "Placeholder 19",
              },
              {
                id: "q20-r13s2",
                questionNumber: 20,
                paragraphId: "G",
                correctAnswer: "Placeholder 20",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 21-23</p>
              <p>List of people</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Michael Thompson" },
              { id: "B", text: "Graham Bodman" },
              { id: "C", text: "Stuart Bracey" },
              { id: "D", text: "James Lunday" },
              { id: "E", text: "Dene Busby" },
            ],
            questions: [
              {
                id: "q21-r13s2",
                questionNumber: 21,
                statement:
                  "Design should meet the need of mix-raced cultural background",
                correctAnswer: "Placeholder 21",
              },
              {
                id: "q22-r13s2",
                questionNumber: 22,
                statement:
                  "for better living environment, regulations and social control should be imperative",
                correctAnswer: "Placeholder 22",
              },
              {
                id: "q23-r13s2",
                questionNumber: 23,
                statement:
                  "organising more community's activities helps strengthening relationship in community",
                correctAnswer: "Placeholder 23",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 24-27</p>
              <p>Complete the folbwing summary of the paragraphs of Reading Passage 2 Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 24-27 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q24-r13s2",
                type: "fill_in_the_blank",
                questionNumber: 24,
                text: "people complain about the high living [GAP]",
                correctAnswer: "Placeholder 24",
              },
              {
                id: "q25-r13s2",
                type: "fill_in_the_blank",
                questionNumber: 25,
                text: "under the designs of many [GAP] together",
                correctAnswer: "Placeholder 25",
              },
              {
                id: "q26-r13s2",
                type: "fill_in_the_blank",
                questionNumber: 26,
                text:
                  "reconstruction program's major concern is to build a house within low [GAP]",
                correctAnswer: "Placeholder 26",
              },
              {
                id: "q27-r13s2",
                type: "fill_in_the_blank",
                questionNumber: 27,
                text: "conventional house in its own [GAP]",
                correctAnswer: "Placeholder 27",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-13-section-3",
        title: "Section 3",
        passageContent: "passage-13-3 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 28-31</p>
              <p>Choose the correct letter, A, B, c or D. Write your answers in boxes 28-31 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q28-r13s3",
                type: "mcq",
                questionNumber: 28,
                text: "What is the main purpose of paragraph ONE?",
                options: [
                  "A. Introduction of Professor James Paul Gee.",
                  "B. Introduction of the video game: Pajamas Sam.",
                  "C. Introduction of types of video games.",
                  "D. Introduction of the background of this passage.",
                ],
                correctAnswer: "Placeholder 28",
              },
              {
                id: "q29-r13s3",
                type: "mcq",
                questionNumber: 29,
                text:
                  "What does the author want to express in the second paragraph?",
                options: [
                  "A. Video games are widely considered harmful for children’s brain.",
                  "B. Most violent video games are the direct reason of juvenile delinquency,",
                  "C. Even there is a certain proportion of violence in most video games; scientists and psychologists see its benefits of children’s intellectual abilities.",
                  "D Many parents regard video games as time-wasters, which rot children’s brain.",
                ],
                correctAnswer: "Placeholder 29",
              },
              {
                id: "q30-r13s3",
                type: "mcq",
                questionNumber: 30,
                text: "What is correctly mentioned in paragraph four?",
                options: [
                  "A Some schools use video games to teach students abstract and high level thinking.",
                  "B Video games improves the brain ability in various aspects,",
                  "C Some surgeons have better skills because they play more video games.",
                  "D Skillful fighter pilots in this generation love to play video games.",
                ],
                correctAnswer: "Placeholder 30",
              },
              {
                id: "q31-r13s3",
                type: "mcq",
                questionNumber: 31,
                text:
                  "What is the expectation of the experiment the three researchers did?",
                options: [
                  "A Gamers have to make the best use of the limited resource.",
                  "B Gamers with better math skills will win in the end.",
                  "C Strategy game players have better ability to make quick decisions.",
                  "D Video games help increase the speed of players’ reaction effectively.",
                ],
                correctAnswer: "Placeholder 31",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 32-35</p>
              <p>Do the following statements agree with the information given in Reading Passage 3? In boxes 32-35 on your answer sheet, write</p>
              <p>TRUE if the statement is true</p>
              <p>FALSE if the statement is false</p>
              <p>NOT GIVEN if the information is not given in the passage</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q32-r13s3",
                questionNumber: 32,
                text:
                  "Most video games are popular because of their violent content.",
                correctAnswer: "Placeholder 32",
              },
              {
                id: "q33-r13s3",
                questionNumber: 33,
                text:
                  "The action game players minimized the percentage of making mistakes in the experiment.",
                correctAnswer: "Placeholder 33",
              },
              {
                id: "q34-r13s3",
                questionNumber: 34,
                text:
                  "It would be a good idea for schools to apply video games in their classrooms.",
                correctAnswer: "Placeholder 34",
              },
              {
                id: "q35-r13s3",
                questionNumber: 35,
                text:
                  "Those people who are addicted to video games have lots of dopamine in their brains.",
                correctAnswer: "Placeholder 35",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 36-40</p>
              <p>Use the information in the passage to match the people (listed A-F) with opinions or deeds below. Write the appropriate letters A-F in boxes 36-40 on your answer sheet.</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "The writer’s opinion" },
              { id: "B", text: "James Paul Gee" },
              { id: "C", text: "Shawn Green" },
              { id: "D", text: "Daphne Bavelier" },
              { id: "E", text: "Steven Johnson" },
              { id: "F", text: "Jacob Benjamin" },
            ],
            questions: [
              {
                id: "q36-r13s3",
                questionNumber: 36,
                statement:
                  "Video games as other daily life skills alter the brain’s physical structure.",
                correctAnswer: "Placeholder 36",
              },
              {
                id: "q37-r13s3",
                questionNumber: 37,
                statement:
                  "Brain is ready to make decisions without hesitation when players are immersed in playing stressful games.",
                correctAnswer: "Placeholder 37",
              },
              {
                id: "q38-r13s3",
                questionNumber: 38,
                statement:
                  "The purpose-motivated experience that video games offer plays an essential role in studying.",
                correctAnswer: "Placeholder 38",
              },
              {
                id: "q39-r13s3",
                questionNumber: 39,
                statement:
                  "Players are good at tackling prompt issues with future intensions.",
                correctAnswer: "Placeholder 39",
              },
              {
                id: "q40-r13s3",
                questionNumber: 40,
                statement:
                  "It helps children broaden their horizon in many aspects and gain self-confidence.",
                correctAnswer: "Placeholder 40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-14",
    moduleId: "reading",
    title: "READING TEST 14",
    description:
      "Academic Reading practice test with various question types for Test 14.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-14-section-1",
        title: "Section 1",
        passageContent: "passage-14-1 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-5 Do the following statements agree with the information given in Reading Passage 1? In boxes 1-5 on your answer sheet, write</p>
              <p>TRUE if the statement agrees with the information</p>
              <p>FALSE if the statement contradicts the information</p>
              <p>NOT GIVEN if the information is not given in the passage</p>
            `,
            type: "true_false_not_given",
            questions: [
              {
                id: "q1-r14s1",
                questionNumber: 1,
                text: "All living animals can lie.",
                correctAnswer: "Placeholder 1",
              },
              {
                id: "q2-r14s1",
                questionNumber: 2,
                text: "Some people tell lies for self-preservation.",
                correctAnswer: "Placeholder 2",
              },
              {
                id: "q3-r14s1",
                questionNumber: 3,
                text: "The fact of lying is more important than detecting one.",
                correctAnswer: "Placeholder 3",
              },
              {
                id: "q4-r14s1",
                questionNumber: 4,
                text:
                  "Researchers are using equipment to study which part of the brain is responsible for telling lies.",
                correctAnswer: "Placeholder 4",
              },
              {
                id: "q5-r14s1",
                questionNumber: 5,
                text:
                  "To be a good liar, one has to understand other people’s emotions.",
                correctAnswer: "Placeholder 5",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 6-9</p>
              <p>Choose the correct letter. A, B, c or D. Write the correct letter in box 6-9 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q6-r14s1",
                type: "mcq",
                questionNumber: 6,
                text: "How does a lie-detector work?",
                options: [
                  "A It analyzes one’s verbal response to a question.",
                  "B It records the changes in one’s facial expression,",
                  "C It illustrates the reasons about the emotional change when one is tested.",
                  "D It monitors several physical reactions in the person undergoing the test.",
                ],
                correctAnswer: "Placeholder 6",
              },
              {
                id: "q7-r14s1",
                type: "mcq",
                questionNumber: 7,
                text: "Why couldn’t lie detectors be used in a court of law?",
                options: [
                  "A because the nonverbal clues are misleading.",
                  "B because there could be other causes of a certain change in the equipment,",
                  "C because the lights are too hot.",
                  "D because the statistic data on the lie detectors are not accurate.",
                ],
                correctAnswer: "Placeholder 7",
              },
              {
                id: "q8-r14s1",
                type: "mcq",
                questionNumber: 8,
                text: "The writer quotes from the paralyzed patients",
                options: [
                  "A to exemplify people’s response to true feelings.",
                  "B to show the pathways for patients to recover,",
                  "C to demonstrate the paralyzed patient’s ability to smile.",
                  "D to emphasize that the patient is in a state of stroke.",
                ],
                correctAnswer: "Placeholder 8",
              },
              {
                id: "q9-r14s1",
                type: "mcq",
                questionNumber: 9,
                text: "According to the passage, politicians",
                options: [
                  "A can express themselves clearly.",
                  "B are good at making their emotions,",
                  "C are conscious of the surroundings.",
                  "D can think before action.",
                ],
                correctAnswer: "Placeholder 9",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 10-13</p>
              <p>Classify the following facial traits as referring to</p>
              <p>A Happiness</p>
              <p>B Anger</p>
              <p>C Sadness</p>
              <p>Write the correct letter A, B, C or D in boxes 10-13 on your answer sheet.</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Happiness" },
              { id: "B", text: "Anger" },
              { id: "C", text: "Sadness" },
            ],
            questions: [
              {
                id: "q10-r14s1",
                questionNumber: 10,
                statement: "Lines formed above eyebrows",
                correctAnswer: "Placeholder 10",
              },
              {
                id: "q11-r14s1",
                questionNumber: 11,
                statement: "Movement from muscle that orbits the eye",
                correctAnswer: "Placeholder 11",
              },
              {
                id: "q12-r14s1",
                questionNumber: 12,
                statement: "Eyebrows down",
                correctAnswer: "Placeholder 12",
              },
              {
                id: "q13-r14s1",
                questionNumber: 13,
                statement: "Inner comer of eyebrows raised",
                correctAnswer: "Placeholder 13",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-14-section-2",
        title: "Section 2",
        passageContent: "passage-14-2 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 14-19</p>
              <p>Use the information in the passage to match the options (listed A-C) with activities or features of ants below. Write the appropriate letters A-C in boxes 14-19 on your answer sheet.</p>
              <p>NB: you may use any letter more than once</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Option A (from passage)" },
              { id: "B", text: "Option B (from passage)" },
              { id: "C", text: "Option C (from passage)" },
            ],
            questions: [
              {
                id: "q14-r14s2",
                questionNumber: 14,
                statement:
                  "Build small nests and live with different foreign fungus.",
                correctAnswer: "Placeholder 14",
              },
              {
                id: "q15-r14s2",
                questionNumber: 15,
                statement: "Use toxic leaves to feed fungus o",
                correctAnswer: "Placeholder 15",
              },
              {
                id: "q16-r14s2",
                questionNumber: 16,
                statement:
                  "Raise fungus which don't live with other foreingers.",
                correctAnswer: "Placeholder 16",
              },
              {
                id: "q17-r14s2",
                questionNumber: 17,
                statement: "Use substance to fight against escovopsis.",
                correctAnswer: "Placeholder 17",
              },
              {
                id: "q18-r14s2",
                questionNumber: 18,
                statement: "Use dead vegetable to feed fungus.",
                correctAnswer: "Placeholder 18",
              },
              {
                id: "q19-r14s2",
                questionNumber: 19,
                statement: "Are free of parasites explained previously.",
                correctAnswer: "Placeholder 19",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 20-24</p>
              <p>The reading Passage has ten paragraphs A-J. Which paragraph contains the following information? Write the correct letter A-J, in boxes 20-24 on your answer sheet.</p>
            `,
            type: "which_paragraph_contains",
            questions: [
              {
                id: "q20-r14s2",
                questionNumber: 20,
                text: "Dangerous outcome of Escovopsis.",
                correctAnswer: "Placeholder 20",
              },
              {
                id: "q21-r14s2",
                questionNumber: 21,
                text: "Disadvantage of growing single fungus.",
                correctAnswer: "Placeholder 21",
              },
              {
                id: "q22-r14s2",
                questionNumber: 22,
                text: "Comparison of features of two different nests.",
                correctAnswer: "Placeholder 22",
              },
              {
                id: "q23-r14s2",
                questionNumber: 23,
                text: "Two achievements made by ants earlier than human.",
                correctAnswer: "Placeholder 23",
              },
              {
                id: "q24-r14s2",
                questionNumber: 24,
                text: "Advantage of growing new breed of fungus.",
                correctAnswer: "Placeholder 24",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 25-26</p>
              <p>Choose the correct letter, A, B, c or D. Write your answers in boxes 25-26 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q25-r14s2",
                type: "mcq",
                questionNumber: 25,
                text: "How does author think of Currie's opinion?",
                options: [
                  "A. his viewpoint was verified later.",
                  "B. earlier study has sufficient evidence,",
                  "C. no details mentioned in article.",
                  "D his opinion was proved to be wrong.",
                ],
                correctAnswer: "Placeholder 25",
              },
              {
                id: "q26-r14s2",
                type: "mcq",
                questionNumber: 26,
                text:
                  "What did scientists find on the skin of ants under microscope?",
                options: [
                  "A. some white cloud mold embed in their skin",
                  "B. that Wax is all over their skin,",
                  "C. a substance which is useful to humans.",
                  "D. a substance which suppresses growth of fungus.",
                ],
                correctAnswer: "Placeholder 26",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-14-section-3",
        title: "Section 3",
        passageContent: "passage-14-3 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 27-33 The reading passage has eight paragraphs, A-H Choose the correct heading for paragraphs A-H from the list below. Write the correct number, i-xi, in boxes 27-33 on your answer sheet.</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              { id: "i", text: "data consistency needed for language" },
              {
                id: "ii",
                text:
                  "consensus on an initiative recommendation for saving dying out languages",
              },
              { id: "iii", text: "positive gains for protection" },
              { id: "iv", text: "minimum requirement for saving a language" },
              { id: "v", text: "Potential threat to minority language" },
              {
                id: "vi",
                text: "a period when there was absent of real effort made",
              },
              { id: "vii", text: "native language programs launched" },
              {
                id: "viii",
                text:
                  "Lack in confidence in young speakers as a negative factor",
              },
              { id: "ix", text: "Practise in several developing countries" },
              { id: "x", text: "Value of minority language to linguists." },
              { id: "xi", text: "government participation in language field" },
            ],
            questions: [
              {
                id: "q27-r14s3",
                questionNumber: 27,
                paragraphId: "A",
                correctAnswer: "Placeholder 27",
              },
              {
                id: "q28-r14s3",
                questionNumber: 28,
                paragraphId: "B",
                correctAnswer: "Placeholder 28",
              },
              {
                id: "q29-r14s3",
                questionNumber: 29,
                paragraphId: "D",
                correctAnswer: "Placeholder 29",
              },
              {
                id: "q30-r14s3",
                questionNumber: 30,
                paragraphId: "E",
                correctAnswer: "Placeholder 30",
              },
              {
                id: "q31-r14s3",
                questionNumber: 31,
                paragraphId: "F",
                correctAnswer: "Placeholder 31",
              },
              {
                id: "q32-r14s3",
                questionNumber: 32,
                paragraphId: "G",
                correctAnswer: "Placeholder 32",
              },
              {
                id: "q33-r14s3",
                questionNumber: 33,
                paragraphId: "H",
                correctAnswer: "Placeholder 33",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 34-38</p>
              <p>Use the information in the passage to match the people (listed A-F) with opinions or deeds below. Write the appropriate letters A-F in boxes 34-38 on your answer sheet.</p>
            `,
            type: "matching_items",
            listItems: [
              { id: "A", text: "Nicholas Ostler" },
              { id: "B", text: "Michael Krauss" },
              { id: "C", text: "Joseph E. Grimes" },
              { id: "D", text: "Sarah G. Thomason" },
              { id: "E", text: "Keneth L. Hale" },
              { id: "F", text: "Douglas H. Whalen" },
            ],
            questions: [
              {
                id: "q34-r14s3",
                questionNumber: 34,
                statement: "Reported language conservation practice in Hawaii",
                correctAnswer: "Placeholder 34",
              },
              {
                id: "q35-r14s3",
                questionNumber: 35,
                statement: "Predicted that many languages would disappear soon",
                correctAnswer: "Placeholder 35",
              },
              {
                id: "q36-r14s3",
                questionNumber: 36,
                statement:
                  "Experienced process that languages die out personally",
                correctAnswer: "Placeholder 36",
              },
              {
                id: "q37-r14s3",
                questionNumber: 37,
                statement: "Raised language fund in England",
                correctAnswer: "Placeholder 37",
              },
              {
                id: "q38-r14s3",
                questionNumber: 38,
                statement: "Not enough effort on saving until recent work",
                correctAnswer: "Placeholder 38",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 39-40</p>
              <p>Choose the correct letter, A, B, c or D. Write your answers in boxes 39-40 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q39-r14s3",
                type: "mcq",
                questionNumber: 39,
                text:
                  "What is real result of master-apprentice program sponsored by The Ford Foundation?",
                options: [
                  "A Teach children how to speak",
                  "B Revive some endangered languages in California",
                  "C postpone the dying date for some endangered languages",
                  "D Increase communication between students",
                ],
                correctAnswer: "Placeholder 39",
              },
              {
                id: "q40-r14s3",
                type: "mcq",
                questionNumber: 40,
                text:
                  "What should majority language speakers do according to the last paragraph?",
                options: [
                  "A They should teach their children endangered language in free lessons",
                  "B They should learn at least four languages",
                  "C They should show their loyalty to a dying language",
                  "D They should be more tolerant to minority language speaker",
                ],
                correctAnswer: "Placeholder 40",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "reading-test-15",
    moduleId: "reading",
    title: "READING TEST 15",
    description:
      "Academic Reading practice test with various question types for Test 15.",
    duration: 60, // minutes
    sections: [
      {
        id: "reading-test-15-section-1",
        title: "Section 1",
        passageContent: "passage-15-1 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 1-7</p>
              <p>The reading passage has seven paragraphs, A-G Choose the correct heading for paragraphs A-G from the list below. Write the correct number, i-xi, in boxes 1-7 on your answer sheet.</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              { id: "i", text: "Why better food helps students’ learning" },
              { id: "ii", text: "A song for getting porridge" },
              { id: "iii", text: "Surprising use of school premises" },
              { id: "iv", text: "Global perspective" },
              { id: "V", text: "Brains can be starved" },
              { id: "vi", text: "Surprising academics outcome" },
              { id: "vii", text: "Girls are specially treated in the program" },
              { id: "viii", text: "How food program is operated" },
              { id: "ix", text: "How food program affects school attendance" },
              { id: "X", text: "None of the usual reasons" },
              { id: "xi", text: "How to maintain academic standard" },
            ],
            questions: [
              {
                id: "q1-r15s1",
                questionNumber: 1,
                paragraphId: "A",
                correctAnswer: "Placeholder 1",
              },
              {
                id: "q2-r15s1",
                questionNumber: 2,
                paragraphId: "B",
                correctAnswer: "Placeholder 2",
              },
              {
                id: "q3-r15s1",
                questionNumber: 3,
                paragraphId: "C",
                correctAnswer: "Placeholder 3",
              },
              {
                id: "q4-r15s1",
                questionNumber: 4,
                paragraphId: "D",
                correctAnswer: "Placeholder 4",
              },
              {
                id: "q5-r15s1",
                questionNumber: 5,
                paragraphId: "E",
                correctAnswer: "Placeholder 5",
              },
              {
                id: "q6-r15s1",
                questionNumber: 6,
                paragraphId: "F",
                correctAnswer: "Placeholder 6",
              },
              {
                id: "q7-r15s1",
                questionNumber: 7,
                paragraphId: "G",
                correctAnswer: "Placeholder 7",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 8-11</p>
              <p>Complete the sentences below using NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage?</p>
              <p>Write your answers in boxes 8-11 on your answer sheet</p>
            `,

            questions: [
              {
                id: "q8-r15s1",
                type: "fill_in_the_blank",
                questionNumber: 8,
                text:
                  "[GAP] are exclusively offered to girls in the feeding programme.",
                correctAnswer: "Placeholder 8",
              },
              {
                id: "q9-r15s1",
                type: "fill_in_the_blank",
                questionNumber: 9,
                text:
                  "Instead of going to school, many children in poverty are sent to collect [GAP] in the fields.",
                correctAnswer: "Placeholder 9",
              },
              {
                id: "q10-r15s1",
                type: "fill_in_the_blank",
                questionNumber: 10,
                text:
                  "The pass rate at Msekeni has risen to [GAP] with the help of the feeding programme.",
                correctAnswer: "Placeholder 10",
              },
              {
                id: "q11-r15s1",
                type: "fill_in_the_blank",
                questionNumber: 11,
                text:
                  "Since the industrial revolution, the size of the modern human has grown by[GAP]",
                correctAnswer: "Placeholder 11",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 12-13</p>
              <p>Choose TWO letters, A-F. Write your answers in boxes 12 and 13 on your answer sheet.</p>
              <p>Which TWO of the following statements are true?</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              { id: "A", text: "Some children are taught in the open air." },
              {
                id: "B",
                text: "Malawi have trouble to feed its large population.",
              },
              {
                id: "C",
                text: "No new staffs were recruited when attendance rose.",
              },
              {
                id: "D",
                text: "Girls enjoy a higher status than boys in the family",
              },
              {
                id: "E",
                text:
                  "Boys and girls experience the same improvement in the pass rate.",
              },
              {
                id: "F",
                text:
                  "WHO has cooperated with WFP to provide grain to the school at Msekeni.",
              },
            ],
            questions: [
              {
                id: "q12-13-r15s1",
                questionNumber: "12-13",
                text: "Which TWO of the following statements are true?",
                correctAnswer: ["Placeholder 12", "Placeholder 13"],
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-15-section-2",
        title: "Section 2",
        passageContent: "passage-15-2 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions14-20</p>
              <p>The reading passage has seven paragraphs, A-H</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              {
                id: "i",
                text: "research findings into habitats and decisions made",
              },
              { id: "ii", text: "fluctuation in bittern number" },
              { id: "iii", text: "protect the young bittern" },
              { id: "iv", text: "international cooperation works" },
              { id: "v", text: "Began in calculation of the number" },
              { id: "vi", text: "importance of food" },
              { id: "vii", text: "Research has been successful" },
              { id: "viii", text: "Research into the reedbed" },
              {
                id: "ix",
                text: "reserve established holding bittern in winter",
              },
            ],
            questions: [
              {
                id: "q14-r15s2",
                questionNumber: 14,
                paragraphId: "A",
                correctAnswer: "Placeholder 14",
              },
              {
                id: "q15-r15s2",
                questionNumber: 15,
                paragraphId: "B",
                correctAnswer: "Placeholder 15",
              },
              {
                id: "q16-r15s2",
                questionNumber: 16,
                paragraphId: "C",
                correctAnswer: "Placeholder 16",
              },
              {
                id: "q17-r15s2",
                questionNumber: 17,
                paragraphId: "D",
                correctAnswer: "Placeholder 17",
              },
              {
                id: "q18-r15s2",
                questionNumber: 18,
                paragraphId: "F",
                correctAnswer: "Placeholder 18",
              },
              {
                id: "q19-r15s2",
                questionNumber: 19,
                paragraphId: "G",
                correctAnswer: "Placeholder 19",
              },
              {
                id: "q20-r15s2",
                questionNumber: 20,
                paragraphId: "H",
                correctAnswer: "Placeholder 20",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 21-26</p>
              <p>Answer the questions below.</p>
              <p>Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.</p>
            `,
            questions: [
              {
                id: "q21-r15s2",
                type: "fill_in_the_blank",
                questionNumber: 21,
                text: "When did the bird of bitten reach its peak of number?",
                correctAnswer: "Placeholder 21",
              },
              {
                id: "q22-r15s2",
                type: "fill_in_the_blank",
                questionNumber: 22,
                text: "What does the author describe the bittern's character?",
                correctAnswer: "Placeholder 22",
              },
              {
                id: "q23-r15s2",
                type: "fill_in_the_blank",
                questionNumber: 23,
                text: "What is the main cause for the chick bittern's death?",
                correctAnswer: "Placeholder 23",
              },
              {
                id: "q24-r15s2",
                type: "fill_in_the_blank",
                questionNumber: 24,
                text: "What is the main food for chick bittern?",
                correctAnswer: "Placeholder 24",
              },
              {
                id: "q25-r15s2",
                type: "fill_in_the_blank",
                questionNumber: 25,
                text:
                  "What system does it secure the stability for bittern's population?",
                correctAnswer: "Placeholder 25",
              },
              {
                id: "q26-r15s2",
                type: "fill_in_the_blank",
                questionNumber: 26,
                text:
                  "Besides bittern and rare vegetation, what mammal does the protection plan benefit?",
                correctAnswer: "Placeholder 26",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 27</p>
              <p>Choose the correct letter, A, B, C or D. Write your answers in boxes 27 on your answer sheet.</p>
            `,
            questions: [
              {
                id: "q27-r15s2",
                type: "mcq",
                questionNumber: 27,
                text: "What is the main purpose of this passage?",
                options: [
                  "A Main characteristic of a bird called bittern.",
                  "B Cooperation can protect an endangered species,",
                  "C The difficulty of access information of bittern's habitat and diet.",
                  "D To save wetland and reed bed in UK.",
                ],
                correctAnswer: "Placeholder 27",
              },
            ],
          },
        ],
      },
      {
        id: "reading-test-15-section-3",
        title: "Section 3",
        passageContent: "passage-15-3 will be added later manually.",
        questionGroups: [
          {
            instructions: `
              <p>Questions 28-33</p>
              <p>The reading passage has seven paragraphs, A-F. Choose the correct heading for paragraphs A-F from the list below. Write the correct number, i-xi, in boxes 28-33 on your answer sheet.</p>
              <p>List of Headings</p>
            `,
            type: "matching_headings",
            listHeadings: [
              {
                id: "i",
                text:
                  "overview of the benefits for the application of E-training",
              },
              { id: "ii", text: "IBM's successful choice of training" },
              {
                id: "iii",
                text: "Future direction and a new style of teaching",
              },
              {
                id: "iv",
                text: "learners' achievement and advanced teaching materials",
              },
              {
                id: "v",
                text:
                  "limitations when E-training compares with traditional class",
              },
              {
                id: "vi",
                text: "multimedia over the Internet can be a solution",
              },
              { id: "vii", text: "technology can be a huge financial burden" },
              {
                id: "viii",
                text:
                  "the distance learners outperformed the traditional university learners in worldwide",
              },
              {
                id: "ix",
                text: "other advantages besides economic consideration",
              },
              {
                id: "x",
                text: "Training offered to help people learn using computers",
              },
            ],
            questions: [
              {
                id: "q28-r15s3",
                questionNumber: 28,
                paragraphId: "A",
                correctAnswer: "Placeholder 28",
              },
              {
                id: "q29-r15s3",
                questionNumber: 29,
                paragraphId: "B",
                correctAnswer: "Placeholder 29",
              },
              {
                id: "q30-r15s3",
                questionNumber: 30,
                paragraphId: "C",
                correctAnswer: "Placeholder 30",
              },
              {
                id: "q31-r15s3",
                questionNumber: 31,
                paragraphId: "D",
                correctAnswer: "Placeholder 31",
              },
              {
                id: "q32-r15s3",
                questionNumber: 32,
                paragraphId: "E",
                correctAnswer: "Placeholder 32",
              },
              {
                id: "q33-r15s3",
                questionNumber: 33,
                paragraphId: "F",
                correctAnswer: "Placeholder 33",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 34-37</p>
              <p>The reading Passage has seven paragraphs A-F. Which paragraph contains the following information? Write the correct letter A-F, in boxes 35-37 on your answer sheet.</p>
            `,
            type: "which_paragraph_contains",
            questions: [
              {
                id: "q34-r15s3",
                questionNumber: 34,
                text: "Projected Basic Blue in IBM achieved a great success.",
                correctAnswer: "Placeholder 34",
              },
              {
                id: "q35-r15s3",
                questionNumber: 35,
                text:
                  "E-learning wins as a priority for many corporations as its flexibility.",
                correctAnswer: "Placeholder 35",
              },
              {
                id: "q36-r15s3",
                questionNumber: 36,
                text:
                  "The combination of the traditional and c-training environments may prevail.",
                correctAnswer: "Placeholder 36",
              },
              {
                id: "q37-r15s3",
                questionNumber: 37,
                text:
                  "Example of a fast electronic delivery for a company’s products to its customers.",
                correctAnswer: "Placeholder 37",
              },
            ],
          },
          {
            instructions: `
              <p>Questions 38-40</p>
              <p>ChooseThree correct letters, among A-E</p>
              <p>Write your answers in boxes 38-40 on your answer sheet.</p>
            `,
            type: "multiple_choice_multiple_answers",
            options: [
              { id: "A", text: "Technical facilities are hardly obtained." },
              {
                id: "B",
                text:
                  "Presenting multimedia over the Internet is restricted due to the bandwidth limit,",
              },
              {
                id: "C",
                text:
                  "It is ineffective imparting a unique corporate value to fresh employees.",
              },
              {
                id: "D",
                text:
                  "Employees need block a long time leaving their position attending training.",
              },
              {
                id: "E",
                text:
                  "More preparation time is needed to keep the course at the suitable level.",
              },
            ],
            questions: [
              {
                id: "q38-40-r15s3",
                questionNumber: "38-40",
                text: "Choose Three correct letters, among A-E",
                correctAnswer: [
                  "Placeholder 38",
                  "Placeholder 39",
                  "Placeholder 40",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "writing-test-1",
    moduleId: "writing",
    title: "ACADEMIC WRITING TEST 1",
    description: "A full-length Academic Writing practice test.",
    duration: 60, // minutes (1 hour)
    sections: [
      {
        id: "writing-task-1",
        title: "Writing Task 1",
        instructions: `
          <p>You should spend about 20 minutes on this task.</p>
          <p>The tables below give information about sales of Fairtrade-labelled coffee and bananas in 1999 and 2004 in five European countries.</p>
          <p>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          <p><em>*Fairtrade: a category of products for which farmers from developing countries have been paid an officially agreed fair price.</em></p>
          <p>You should write at least 150 words.</p>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300 rounded-md">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b">Coffee</th>
                  <th class="py-2 px-4 border-b">1999 (millions of Euros)</th>
                  <th class="py-2 px-4 border-b">2004 (millions of Euros)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 px-4 border-b">UK</td>
                  <td class="py-2 px-4 border-b">1.5</td>
                  <td class="py-2 px-4 border-b">20</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Switzerland</td>
                  <td class="py-2 px-4 border-b">3</td>
                  <td class="py-2 px-4 border-b">6</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Denmark</td>
                  <td class="py-2 px-4 border-b">1.8</td>
                  <td class="py-2 px-4 border-b">2</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Belgium</td>
                  <td class="py-2 px-4 border-b">1</td>
                  <td class="py-2 px-4 border-b">1.7</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Sweden</td>
                  <td class="py-2 px-4 border-b">0.8</td>
                  <td class="py-2 px-4 border-b">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        type: "writing_task",
        wordCountMin: 150,
        questions: [], // No specific questions, user writes a free-form response
      },
      {
        id: "writing-task-2",
        title: "Writing Task 2",
        instructions: `
          <p>You should spend about 40 minutes on this task.</p>
          <p>Write about the following topic:</p>
          <p>Some people think that all university students should study whatever they like. Others believe that they should only be allowed to study subjects that will be useful in the future, such as those related to science and technology.</p>
          <p>Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
          <p>You should write at least 250 words.</p>
        `,
        type: "writing_task",
        wordCountMin: 250,
        questions: [], // No specific questions, user writes a free-form response
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
