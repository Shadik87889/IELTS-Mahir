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
    title: "IELTS Listening Test 1",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 1/IELTS Listening Practice Test  1.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-6</p><p>Complete the form below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p><h3>PRIME RECRUITMENT</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Email: [GAP]@worldnet.com",
                correctAnswer: "EDWINARI",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Nationality: [GAP]",
                correctAnswer: "New Zealander",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text:
                  "Reference (professional)- Name: John Keen, Job: manager of [GAP]",
                correctAnswer: "Play centre",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "Reference (personal) - Name: Eileen Dorsini, Job: [GAP]",
                correctAnswer: "a professor",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "Special Qualifications: Current [GAP] certificate",
                correctAnswer: "first aid",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "certificate of competence in [GAP]",
                correctAnswer: "sailing",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 7-10</p><p>Complete the table below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p>",
            questions: [
              {
                id: "q7-10-table",
                questionNumber: 7,
                type: "table_fill_in_the_blank",
                tableData: [
                  ["Location", "Name", "Children", "Special Requirements"],
                  ["London", "Benton", "Girl and boy", "Be keen on 7. [INPUT]"],
                  [
                    "Near Oxford",
                    "Granger",
                    "8. [INPUT] boys",
                    "Be animal-lover",
                  ],
                  [
                    "9. [INPUT]",
                    "Campbell",
                    "four girls",
                    "Be willing to 10. [INPUT] when camping",
                  ],
                ],
                correctAnswer: {
                  q7: "sport",
                  q8: "two",
                  q9: "Scotland",
                  q10: "cook",
                },
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            type: "multiple_choice_multiple_answers", // Type at the group level
            instructions:
              "<p>Questions 11 and 12</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which <strong>TWO</strong> sources of funding helped build the facility?</p>",
            // A single question object represents the group
            questions: [
              {
                id: "q11-12",
                questionNumber: "11-12", // Correctly formatted question number
                text: "", // The main question text is in instructions
                correctAnswer: ["D", "E"], // The correct options
              },
            ],
            // Options are part of the group, not the question
            options: [
              { id: "A", text: "the central government" },
              { id: "B", text: "local government" },
              { id: "C", text: "a multinational company" },
              { id: "D", text: "a national company" },
              { id: "E", text: "city residents" },
            ],
          },
          {
            type: "multiple_choice_multiple_answers", // Type at the group level
            instructions:
              "<p>Questions 13 and 14</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which <strong>TWO</strong> pre-existing features of the site are now part of the new facilities?</p>",
            questions: [
              {
                id: "q13-14",
                questionNumber: "13-14", // Correctly formatted question number
                text: "",
                correctAnswer: ["B", "C"],
              },
            ],
            options: [
              { id: "A", text: "football stadium" },
              { id: "B", text: "playing fields" },
              { id: "C", text: "passenger hall" },
              { id: "D", text: "control tower" },
              { id: "E", text: "aircraft hangars" },
            ],
          },
          {
            instructions:
              "<p>Questions 15-20</p><p>Label the map below.</p><p>Write the correct letter, <strong>A-H</strong>, next to questions 15-20.</p><img src='listening_test/Listening_test_imgs/test-1-1.png' alt='Map of Cityscope Sports and Leisure' class='rounded-lg my-4'>",
            questions: [
              {
                id: "q15",
                questionNumber: 15,
                type: "fill_in_the_blank",
                text: "hotel [GAP]",
                correctAnswer: "E",
              },
              {
                id: "q16",
                questionNumber: 16,
                type: "fill_in_the_blank",
                text: "transport hub [GAP]",
                correctAnswer: "B",
              },
              {
                id: "q17",
                questionNumber: 17,
                type: "fill_in_the_blank",
                text: "cinema [GAP]",
                correctAnswer: "A",
              },
              {
                id: "q18",
                questionNumber: 18,
                type: "fill_in_the_blank",
                text: "fitness centre [GAP]",
                correctAnswer: "D",
              },
              {
                id: "q19",
                questionNumber: 19,
                type: "fill_in_the_blank",
                text: "shops [GAP]",
                correctAnswer: "F",
              },
              {
                id: "q20",
                questionNumber: 20,
                type: "fill_in_the_blank",
                text: "restaurant [GAP]",
                correctAnswer: "C",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-25</p><p>Choose the correct letter, <strong>A, B or C</strong>.</p>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "mcq",
                text: "What is Chloe concerned about?",
                options: [
                  "A. her knowledge of maths",
                  "B. her ability to write essays",
                  "C. her lack of business experience",
                ],
                correctAnswer: "B",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "mcq",
                text: "Which of the following does Ivan feel he has improved?",
                options: [
                  "A. his computer skills",
                  "B. his presentation skills",
                  "C. his time management",
                ],
                correctAnswer: "C",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "mcq",
                text: "What does Chloe especially like about the course?",
                options: [
                  "A. She won't have to do a final examination.",
                  "B. She can spend time working in a business.",
                  "C. She can study a foreign language.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "mcq",
                text: "Ivan is pleased that the university is going to have",
                options: [
                  "A. more lecture rooms.",
                  "B. a larger library.",
                  "C. more courses.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "mcq",
                text: "What does Ivan advise Chloe to do?",
                options: [
                  "A. contact his tutor",
                  "B. read about some other universities",
                  "C. visit the university",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 26-30</p><p>What does Chloe decide about the following subjects? Write the correct letter, <strong>A, B or C</strong>, next to questions 26-30.</p>",
            questions: [
              {
                id: "q26",
                questionNumber: 26,
                type: "mcq",
                text: "Public relations",
                options: [
                  "A. She will study it.",
                  "B. She won't study it.",
                  "C. She might study it.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q27",
                questionNumber: 27,
                type: "mcq",
                text: "Marketing",
                options: [
                  "A. She will study it.",
                  "B. She won't study it.",
                  "C. She might study it.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "mcq",
                text: "Taxation",
                options: [
                  "A. She will study it.",
                  "B. She won't study it.",
                  "C. She might study it.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q29",
                questionNumber: 29,
                type: "mcq",
                text: "Human resources",
                options: [
                  "A. She will study it.",
                  "B. She won't study it.",
                  "C. She might study it.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q30",
                questionNumber: 30,
                type: "mcq",
                text: "Information systems",
                options: [
                  "A. She will study it.",
                  "B. She won't study it.",
                  "C. She might study it.",
                ],
                correctAnswer: "C",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-35</p><p>Complete the notes below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p><h3>History of weather forecasting</h3><p><strong>Early methods</strong></p>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "Almanacs connected the weather with the positions of different [GAP] at particular times.",
                correctAnswer: "planets",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "A hydrometer showed Levels of [GAP] (Nicholas Cusa 1450)",
                correctAnswer: "humidity",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "Temperature variations - first measured by a thermometer containing [GAP] (Galileo Galilei 1595)",
                correctAnswer: "water",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "The use of the [GAP] allowed information to be passed around the world.",
                correctAnswer: "telegraph",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text: "Daily [GAP] were produced by the French from 1863.",
                correctAnswer: "weather maps",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 36-40</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p><h3>Producing a weather forecast</h3>",
            questions: [
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "Weather observation stations are found mostly at [GAP] around the country.",
                correctAnswer: "airports",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text: "Satellite images use the colour orange to show [GAP].",
                correctAnswer: "dry air",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "The satellites give so much detail that meteorologists can distinguish a particular [GAP].",
                correctAnswer: "cloud",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "Information about the upper atmosphere is sent from instruments attached to a [GAP].",
                correctAnswer: "balloon",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "Radar is particularly useful for following the movement of [GAP].",
                correctAnswer: "hurricanes",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-2",
    moduleId: "listening",
    title: "IELTS Listening Test 2",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 2/IELTS LISTENING PRACTICE TEST 2.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-2</p><p>Complete the notes below.</p><p>Write <strong>NO MORE THAN ONE WORD</strong> for each answer.</p><h3>Advice on plumbers and decorators</h3><p><strong>Example:</strong> Make sure the company is: <strong>local</strong></p>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Don't call a plumber during the [GAP]",
                correctAnswer: "weekend",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Look at trade website: www.[GAP].com",
                correctAnswer: "plasdeco",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 3-10</p><p>Complete the table below.</p><p>Write <strong>NO MORE THAN ONE WORD</strong> for each answer.</p>",
            questions: [
              {
                id: "q3-10-table",
                questionNumber: 3,
                type: "table_fill_in_the_blank",
                tableData: [
                  ["Name", "Positive points", "Negative points"],
                  [
                    "Peake's Plumbing",
                    "<li>Pleasant and friendly</li><li>Give <strong>3. [INPUT]</strong> information</li><li>Good quality work</li>",
                    "<li>Always <strong>4. [INPUT]</strong></li>",
                  ],
                  [
                    "John Damerol Plumbing Services",
                    "<li><strong>5. [INPUT]</strong> than other companies</li><li>Reliable</li>",
                    "<li>Not very polite</li><li>Tends to be <strong>6. [INPUT]</strong></li>",
                  ],
                  [
                    "Simonson Plasterers",
                    "<li>Able to do lots of different <strong>7. [INPUT]</strong></li>",
                    "<li>More <strong>8. [INPUT]</strong> than other companies</li>",
                  ],
                  [
                    "H.L. Plastering",
                    "<li>Reliable.</li><li>Also able to do <strong>9. [INPUT]</strong></li>",
                    "<li>Prefers not to use long <strong>10. [INPUT]</strong></li>",
                  ],
                ],
                correctAnswer: {
                  q3: "clear",
                  q4: "late",
                  q5: "cheaper",
                  q6: "messy",
                  q7: "designs",
                  q8: "expensive",
                  q9: "painting",
                  q10: "ladder",
                },
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-15</p><p>Choose the correct answer, <strong>A, B or C</strong>.</p><h3>Museum work placement</h3>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "mcq",
                text: "On Monday, what will be the students' working day?",
                options: [
                  "A. 9.00 a.m. - 5.00 p.m.",
                  "B. 8.45 a.m. - 5.00 p.m.",
                  "C. 9.00 a.m. - 4.45 p.m.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "mcq",
                text:
                  "While working in the museum, students are encouraged to wear",
                options: [
                  "A. formal clothing such as a suit.",
                  "B. a cap with the museum logo.",
                  "C. their own casual clothes.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "mcq",
                text:
                  "If students are ill or going to be late, they must inform",
                options: [
                  "A. the museum receptionist.",
                  "B. their museum supervisor.",
                  "C. their school placement tutor.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "mcq",
                text:
                  "The most popular task whilst on work placement is usually",
                options: [
                  "A. making presentations in local primary schools.",
                  "B. talking to elderly people in care homes.",
                  "C. conducting workshops in the museum.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text:
                  "The best form of preparation before starting their work placement is to read",
                options: [
                  "A. the history of the museum on the website.",
                  "B. the museum regulations and safety guidance.",
                  "C. notes made by previous work placement students.",
                ],
                correctAnswer: "C",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 16-20</p><p>Label the plan below.</p><img src='listening_test/Listening_test_imgs/test-2-1.png' alt='Map of the Museum' class='rounded-lg my-4'><p>Write the correct letter, <strong>A-I</strong>, next to questions 16-20.</p><p>Where in the museum are the following places?</p>",
            questions: [
              {
                id: "q16",
                questionNumber: 16,
                type: "fill_in_the_blank",
                text: "Sign-in office [GAP]",
                correctAnswer: "C",
              },
              {
                id: "q17",
                questionNumber: 17,
                type: "fill_in_the_blank",
                text: "Gallery [GAP]",
                correctAnswer: "I",
              },
              {
                id: "q18",
                questionNumber: 18,
                type: "fill_in_the_blank",
                text: "Key box [GAP]",
                correctAnswer: "H",
              },
              {
                id: "q19",
                questionNumber: 19,
                type: "fill_in_the_blank",
                text: "Kitchen area [GAP]",
                correctAnswer: "D",
              },
              {
                id: "q20",
                questionNumber: 20,
                type: "fill_in_the_blank",
                text: "Staff noticeboard [GAP]",
                correctAnswer: "G",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-26</p><p>What is the tutor's opinion of the following company projects?</p><p>Choose <strong>FIVE</strong> answers from the box, and write the correct letter, <strong>A-H</strong>, next to questions 21-26.</p>",
            type: "matching", // Type at the group level
            questions: [
              {
                id: "l2-q21-26",
                questionNumber: 21, // Anchor for palette scrolling
                // All matching logic is contained in the group
              },
            ],
            matchingOptions: {
              title: "Tutor's opinion",
              A: "It would be very rewarding for the student.",
              B: "It is too ambitious.",
              C: "It would be difficult to evaluate.",
              D: "It wouldn't be sufficiently challenging.",
              E: "It would involve extra costs.",
              F: "It is beyond the student's current ability.",
              G: "It is already being done by another student.",
              H: "It would probably have the greatest impact on the company.",
            },
            matchingItems: [
              { number: 21, text: "Customer database", correctAnswer: "D" },
              {
                number: 22,
                text: "Online sales catalogue",
                correctAnswer: "B",
              },
              { number: 23, text: "Payroll", correctAnswer: "A" },
              { number: 24, text: "Stock inventory", correctAnswer: "H" },
              { number: 25, text: "Internal security", correctAnswer: "F" },
              { number: 26, text: "Customer services", correctAnswer: "E" },
            ],
          },
          {
            type: "multiple_choice_multiple_answers",
            instructions:
              "<p>Questions 27-28</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which <strong>TWO</strong> problems do Sam and the tutor identify concerning group assignments?</p>",
            questions: [
              {
                id: "l2-q27-28",
                questionNumber: "27-28",
                text: "",
                correctAnswer: ["B", "E"],
              },
            ],
            options: [
              { id: "A", text: "Personal relationships" },
              { id: "B", text: "Cultural differences" },
              { id: "C", text: "Division of labour" },
              { id: "D", text: "Group leadership" },
              { id: "E", text: "Group size" },
            ],
          },
          {
            type: "multiple_choice_multiple_answers",
            instructions:
              "<p>Questions 29-30</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which <strong>TWO</strong> problems does Sam identify concerning the lecturers?</p>",
            questions: [
              {
                id: "l2-q29-30",
                questionNumber: "29-30",
                text: "",
                correctAnswer: ["A", "C"],
              },
            ],
            options: [
              { id: "A", text: "Punctuality" },
              { id: "B", text: "Organisation" },
              { id: "C", text: "Accessibility" },
              { id: "D", text: "Helpfulness" },
              { id: "E", text: "Teaching materials" },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-40</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p><h3>The Tawny Owl</h3>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text: "Most <strong> [GAP]</strong> owl species in UK",
                correctAnswer: "common",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "Mainly lives in <strong> [GAP]</strong>, but can also be seen in urban areas, e.g. parks.",
                correctAnswer: "woodland",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text: "Short wings and <strong> [GAP]</strong>, for navigation",
                correctAnswer: "tail",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "Brown and <strong> [GAP]</strong> feathers, for camouflage",
                correctAnswer: "grey",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "Large eyes (more effective than those of <strong> [GAP]</strong>), for good night vision",
                correctAnswer: "humans",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "Very good spatial <strong> [GAP]</strong>, for predicting where prey might be found",
                correctAnswer: "memory",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text:
                  "Excellent <strong> [GAP]</strong>, for locating prey from a perch",
                correctAnswer: "hearing",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "Main food is small mammals.<br>Owls in urban areas eat more <strong> [GAP]</strong>.",
                correctAnswer: "birds",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "Two thirds of young owls die within a <strong> [GAP]</strong>.",
                correctAnswer: "year",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "Owls seem to dislike flying over large areas of <strong> [GAP]</strong>.",
                correctAnswer: "water",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-3",
    moduleId: "listening",
    title: "IELTS Listening Test 3",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl: "Listening_tests_audio/Test 3/IELTS Listening Test 3 .mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-10</p><p>Complete the notes below.</p><p>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>Holiday Booking Form</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Name: Daniel [GAP]",
                correctAnswer: "HARRIS",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Departure date: July [GAP]",
                correctAnswer: "15TH",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text: "Length of stay: week(s) [GAP]",
                correctAnswer: "ONE",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "Destination country: [GAP]",
                correctAnswer: "PORTUGAL",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "Hotel: Hotel [GAP]",
                correctAnswer: "SEAVIEW",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "Total cost: £ [GAP]",
                correctAnswer: "680",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "Transfer cost: £ [GAP] per person",
                correctAnswer: "40",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "Facilities: swimming pool, gym, and free [GAP]",
                correctAnswer: "WI-FI",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "Extra charge from government: [GAP] tax",
                correctAnswer: "CITY",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "Contact number: [GAP]",
                correctAnswer: "07865 239410",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-15</p><p>Choose the correct letter, <strong>A, B or C</strong>.</p>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "mcq",
                text: "Where is the community centre located?",
                options: [
                  "A. On the High Street, inside the Town Hall",
                  "B. Next to the library, just off the High Street",
                  "C. Near the council offices on the main square",
                ],
                correctAnswer: "B",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "mcq",
                text:
                  "Which course at the community centre is especially popular?",
                options: ["A. Aerobics", "B. Yoga", "C. Photography"],
                correctAnswer: "C",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "mcq",
                text:
                  "Which park is recommended for adults as well as children?",
                options: [
                  "A. Riverbank Park",
                  "B. Greenfield Park",
                  "C. Station Park",
                ],
                correctAnswer: "B",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "mcq",
                text: "Where can residents watch live drama and comedy?",
                options: [
                  "A. Westford Playhouse",
                  "B. Westford Cinema",
                  "C. Town Hall",
                ],
                correctAnswer: "A",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text:
                  "What special benefit comes with membership at the sports complex?",
                options: [
                  "A. Access to squash courts",
                  "B. Free parking",
                  "C. Discounts at private gyms",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 16-20</p><p>Complete the sentences given below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>",
            questions: [
              {
                id: "q16",
                questionNumber: 16,
                type: "fill_in_the_blank",
                text: "The cycle hire scheme is operated by a [GAP].",
                correctAnswer: "LOCAL CHARITY",
              },
              {
                id: "q17",
                questionNumber: 17,
                type: "fill_in_the_blank",
                text: "The hospital does not usually accept [GAP].",
                correctAnswer: "VOLUNTEERS",
              },
              {
                id: "q18",
                questionNumber: 18,
                type: "fill_in_the_blank",
                text: "The town newsletter is published [GAP].",
                correctAnswer: "MONTHLY",
              },
              {
                id: "q19",
                questionNumber: 19,
                type: "fill_in_the_blank",
                text: "Students often eat cheaply at the [GAP].",
                correctAnswer: "CAFE",
              },
              {
                id: "q20",
                questionNumber: 20,
                type: "fill_in_the_blank",
                text: "The Westford Festival takes place every [GAP].",
                correctAnswer: "SEPTEMBER",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-25</p><p>Choose the correct letter, <strong>A, B or C</strong>.</p>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "mcq",
                text:
                  "What contradiction did the article highlight about interviews?",
                options: [
                  "A. Remote methods are less reliable",
                  "B. Remote methods can be as effective as face-to-face",
                  "C. Face-to-face methods are always superior",
                ],
                correctAnswer: "B",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "mcq",
                text: "Which topic is easier to discuss online?",
                options: [
                  "A. Technical subjects",
                  "B. Sensitive personal issues",
                  "C. Cultural differences",
                ],
                correctAnswer: "B",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "mcq",
                text: "What problem can arise if consent forms are too simple?",
                options: [
                  "A. Participants may feel patronised",
                  "B. The forms become legally invalid",
                  "C. Researchers overlook key details",
                ],
                correctAnswer: "A",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "mcq",
                text: "What unexpected result came from the dietary study?",
                options: [
                  "A. Gradual changes in diet over time",
                  "B. Data inconsistencies caused by poor reporting",
                  "C. Sudden large fluctuations in eating habits",
                ],
                correctAnswer: "C",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "mcq",
                text: "Why are surveys sometimes preferred?",
                options: [
                  "A. They cost less to conduct",
                  "B. They capture day-to-day changes",
                  "C. They avoid sample bias",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 26-30</p><p>Complete the sentences given below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>",
            questions: [
              {
                id: "q26",
                questionNumber: 26,
                type: "fill_in_the_blank",
                text:
                  "The article highlighted the importance of [GAP] than using only one method.",
                correctAnswer: "TRIANGULATION",
              },
              {
                id: "q27",
                questionNumber: 27,
                type: "fill_in_the_blank",
                text:
                  "Funding agencies often favour research with [GAP], they are easier to report.",
                correctAnswer: "QUANTITATIVE OUTPUTS",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "fill_in_the_blank",
                text:
                  "Projects that are purely numerical may gain funding but lose [GAP].",
                correctAnswer: "RICHNESS",
              },
              {
                id: "q29",
                questionNumber: 29,
                type: "fill_in_the_blank",
                text:
                  "Some students may claim that [GAP] are more important than words.",
                correctAnswer: "NUMBERS",
              },
              {
                id: "q30",
                questionNumber: 30,
                type: "fill_in_the_blank",
                text:
                  "Daniel suggests they may see the [GAP] of the opposing argument.",
                correctAnswer: "MERIT",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-40</p><p>Complete the sentences given below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p><h3>History of Building Railways</h3>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "Engineers in mountain areas faced higher costs due to unstable rock and [GAP].",
                correctAnswer: "UNPREDICTABLE WEATHER",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "The Semmering Railway succeeded thanks to bridges and carefully planned [GAP].",
                correctAnswer: "GRADIENTS",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "Dependence on private funding sometimes restrict public [GAP].",
                correctAnswer: "ACCESS",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "Tunnelling reduced [GAP] but exposed workers to dangers like toxic gases and flooding.",
                correctAnswer: "TRAVEL TIMES",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "High [GAP] were recorded, especially in tunnels with poor ventilation.",
                correctAnswer: "MORTALITY RATES",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "Railways improved access but caused damage to fragile [GAP].",
                correctAnswer: "ECOSYSTEMS",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text: "Many abandoned lines were left with unused [GAP].",
                correctAnswer: "STATIONS",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "Modern monitoring systems are also useful for finding [GAP] early on.",
                correctAnswer: "STRUCTURAL WEAKNESS",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "Some communities resist new railways to protect their [GAP].",
                correctAnswer: "TRADITION",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text: "Projects today must show a clear commitment to [GAP].",
                correctAnswer: "SUSTAINABILITY",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-4",
    moduleId: "listening",
    title: "IELTS Listening Test 4",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 4/IELTS LISTENING PRACTICE TEST 4.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-4</p><p>Complete the table below.</p><p>Write <strong>NO MORE THAN TWO WORDS OR A NUMBER</strong> for each answer.</p><h3>COMPLAINT RECORD FORM</h3><p>Name: Susan Yorke</p>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Address: Flat 1, 25 [GAP] Harchester HA6 5LD",
                correctAnswer: "Alpine Avenue",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Purchase reference number: [GAP] 8443",
                correctAnswer: "DMX",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text:
                  "Item description: Aqua Powershot digital camera in a [GAP] case",
                correctAnswer: "silver",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "Insurance: Yes, has a colour [GAP] policy",
                correctAnswer: "Four Star",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 5-10</p><p>Complete the form below.</p><p>Write <strong>NO MORE THAN TWO WORDS OR A NUMBER</strong> for each answer.</p><h3>Details of complaint:</h3>",
            questions: [
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "[GAP] missing should",
                correctAnswer: "memory card",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "[GAP] but isn't",
                correctAnswer: "waterproof",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "[GAP] on case",
                correctAnswer: "big scratch",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "If repair not possible, offered to provide a [GAP]",
                correctAnswer: "replacement",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "but customer requests a [GAP]",
                correctAnswer: "refund",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "Asked customer to send item to [GAP]",
                correctAnswer: "Customer services",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-15</p><p>Complete the diagram below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p><h3>THE ROTOGRAVURE PROCESS</h3><img src='https://i.imgur.com/gA3b3jY.png' alt='Rotogravure Process Diagram' class='rounded-lg my-4'>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "fill_in_the_blank",
                text: "[GAP]",
                correctAnswer: "Impression roller",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "fill_in_the_blank",
                text: "[GAP] of paper",
                correctAnswer: "Printed side",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "fill_in_the_blank",
                text: "gravure [GAP]",
                correctAnswer: "Cylinder",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "fill_in_the_blank",
                text: "[GAP]",
                correctAnswer: "Ink fountain",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "fill_in_the_blank",
                text: "[GAP]",
                correctAnswer: "Doctor blade",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 16-20</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.</p>",
            questions: [
              {
                id: "q16",
                questionNumber: 16,
                type: "fill_in_the_blank",
                text:
                  "The main advantage of rotogravure is the large [GAP] which is transferred.",
                correctAnswer: "Amount of ink",
              },
              {
                id: "q17",
                questionNumber: 17,
                type: "fill_in_the_blank",
                text:
                  "[GAP] and photographs reproduce well in the rotogravure process.",
                correctAnswer: "Fine art",
              },
              {
                id: "q18",
                questionNumber: 18,
                type: "fill_in_the_blank",
                text:
                  "Sunday newspapers often contain [GAP] produced by rotogravure",
                correctAnswer: "Advertising material",
              },
              {
                id: "q19",
                questionNumber: 19,
                type: "fill_in_the_blank",
                text:
                  "Apart from paper, floor coverings and [GAP] can be printed by rotogravure.",
                correctAnswer: "Consumer packaging",
              },
              {
                id: "q20",
                questionNumber: 20,
                type: "fill_in_the_blank",
                text:
                  "The main problem with rotogravure is that the [GAP] to the naked eye.",
                correctAnswer: "Dots are visible",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-23</p><p>Choose <strong>THREE</strong> letters, A-F.</p><p>Which <strong>THREE</strong> things are the students required to submit to their professor?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q21-23",
                questionNumber: "21-23",
                text: "",
                correctAnswer: ["A", "C", "E"],
              },
            ],
            options: [
              { id: "A", text: "a written summary" },
              { id: "B", text: "maps" },
              { id: "C", text: "a case study" },
              { id: "D", text: "charts and graphs" },
              { id: "E", text: "a list of resources used" },
              { id: "F", text: "a video" },
            ],
          },
          {
            instructions:
              "<p>Questions 24-25</p><p>Complete the information below.</p><p>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.</p>",
            questions: [
              {
                id: "q24",
                questionNumber: 24,
                type: "fill_in_the_blank",
                text:
                  "What two sources of information will the students use when preparing their presentation?",
                correctAnswer: "Interviews, journal articles",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "fill_in_the_blank",
                text: "What will the students show during their presentation?",
                correctAnswer: "Photos",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 26-30</p><p>Choose the correct letter, A-C.</p>",
            questions: [
              {
                id: "q26",
                questionNumber: 26,
                type: "mcq",
                text: "Only rescue birds that are",
                options: [
                  "A. all alone.",
                  "B. obviously hurt.",
                  "C. sitting on the ground.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q27",
                questionNumber: 27,
                type: "mcq",
                text: "Project yourself by wearing",
                options: ["A. gloves", "B. a hat", "C. protective glasses"],
                correctAnswer: "A",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "mcq",
                text: "Put the bird in a",
                options: ["A. cage", "B. box", "C. bag"],
                correctAnswer: "B",
              },
              {
                id: "q29",
                questionNumber: 29,
                type: "mcq",
                text: "Keep the bird calm by",
                options: [
                  "A. petting it.",
                  "B. talking to it.",
                  "C. leaving it alone.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q30",
                questionNumber: 30,
                type: "mcq",
                text: "When transporting the bird,",
                options: [
                  "A. speak quietly.",
                  "B. play music.",
                  "C. drive very slowly.",
                ],
                correctAnswer: "A",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-33</p><p>Choose the correct letter A-C.</p>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "mcq",
                text: "According Prof. Smith, a tutor",
                options: [
                  "A. is an important part of the teaching program",
                  "B. is responsible for students' academic problems only",
                  "C. instructs students in personal and academic problems",
                ],
                correctAnswer: "C",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "mcq",
                text:
                  "The pattern of tutorials for radiography students is the meet between the tutor and",
                options: [
                  "A. a group of 6 students weekly",
                  "B. a group of 10 students weekly",
                  "C. a group of 10 students every two weeks",
                ],
                correctAnswer: "C",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "mcq",
                text: "The tutorials in the 12th and 25th week",
                options: [
                  "A. without the presence of the tutor",
                  "B. selective for students",
                  "C. compulsory to everybody",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 34-40</p><p>Complete the table below.</p><p>Write <strong>no more than One word or A Number</strong> for each answer.</p>",
            questions: [
              {
                id: "q34-40-table",
                questionNumber: 34,
                type: "table_fill_in_the_blank",
                tableData: [
                  [
                    "Stages",
                    "Purposes / contents",
                    "Students tasks",
                    "Tutors duty",
                  ],
                  [
                    "Introduction (Period: 1st - 3rd)",
                    "Identify student with difficulty in joining in to the academic 34. [INPUT]",
                    "",
                    "Cheak the attendance; help solving work in a systematic and 35. [INPUT]",
                  ],
                  [
                    "Stage 2 (4th - 7th)",
                    "Half tutorials deal with course 36. [INPUT]",
                    "Weekly assignments for 37. [INPUT] hours With of written work 50%",
                    "Collect the written work and 38. [INPUT] And grade them in one week",
                  ],
                  [
                    "Stage 3 (8th - 10th)",
                    "Supporting work about 39. [INPUT] Programs and lab work",
                    "Accounts or notes; Short Speaking presentations on general 40. [INPUT]",
                    "",
                  ],
                ],
                correctAnswer: {
                  q34: "Program",
                  q35: "Effective",
                  q36: "Work",
                  q37: "2",
                  q38: "mark",
                  q39: "lecture",
                  q40: "physics",
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "listening-test-5",
    moduleId: "listening",
    title: "IELTS Listening Test 5",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 5/IELTS LISTENING PRACTICE TEST 5.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-3</p><p>Choose <strong>THREE</strong> letters A - G.</p><p>What topics must the assignment cover?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q1-3",
                questionNumber: "1-3",
                text: "",
                correctAnswer: ["C", "E", "F"],
              },
            ],
            options: [
              { id: "A", text: "zoo finances" },
              { id: "B", text: "public safety" },
              { id: "C", text: "the history of zoos" },
              { id: "D", text: "animal welfare" },
              { id: "E", text: "education and zoos" },
              { id: "F", text: "zoos for science" },
              { id: "G", text: "value for money" },
            ],
          },
          {
            instructions:
              "<p>Questions 4 and 5</p><p>Choose <strong>TWO</strong> letters A - E.</p><p>Which areas do the students decide to concentrate their efforts on?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q4-5",
                questionNumber: "4-5",
                text: "",
                correctAnswer: ["C", "D"],
              },
            ],
            options: [
              { id: "A", text: "science" },
              { id: "B", text: "history" },
              { id: "C", text: "entertainment" },
              { id: "D", text: "conservation" },
              { id: "E", text: "education" },
            ],
          },
          {
            instructions:
              "<p>Questions 6 - 10</p><p>Complete the summary below.</p><p>Write <strong>NO MORE THAN THREE WORDS OR A NUMBER</strong> for each answer.</p>",
            questions: [
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "The Arabian oryx is mainly [GAP] in colour.",
                correctAnswer: "white",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "It lives in a [GAP] climate.",
                correctAnswer: "hot(desert)",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "In [GAP] it became extinct.",
                correctAnswer: "1972",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "Now, there are about [GAP].",
                correctAnswer: "300",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "in Oman. A crash in the population was caused by [GAP].",
                correctAnswer: "Illegal hunting",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11 - 12</p><p>Choose the correct letter A - C.</p>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "mcq",
                text:
                  "What is one of the new advantages in the dining facilities?",
                options: [
                  "A. more students",
                  "B. more variety",
                  "C. more service",
                ],
                correctAnswer: "B",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "mcq",
                text: "What was one problem with the dining options last year?",
                options: [
                  "A. Students did not have enough to eat.",
                  "B. Students had to pay too much money.",
                  "C. Students had to eat whatever was served.",
                ],
                correctAnswer: "C",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 13 - 14</p><p>Complete the information below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p>",
            questions: [
              {
                id: "q13",
                questionNumber: 13,
                type: "fill_in_the_blank",
                text: "[GAP] and pasta are an example of Italian food.",
                correctAnswer: "pizza",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "fill_in_the_blank",
                text: "American food consists of [GAP] and hot dog.",
                correctAnswer: "Hamburgers",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 15-18</p><p>Choose the correct letter A-C</p>",
            questions: [
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text: "Why does the school say the food will be better?",
                options: [
                  "A. They hired real chefs",
                  "B. The food is more expensive.",
                  "C. They will make more kinds.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q16",
                questionNumber: 16,
                type: "mcq",
                text: "When will the dining facilities open and close?",
                options: [
                  "A. 6 am and 12 pm",
                  "B. 6 am and 12 am",
                  "C. 12 pm and 6 pm",
                ],
                correctAnswer: "A",
              },
              {
                id: "q17",
                questionNumber: 17,
                type: "mcq",
                text:
                  "What can students do if they are hungry in the Afternoon?",
                options: [
                  "A. go out and buy food on the street",
                  "B. wait till dinner time",
                  "C. go to the student store for snacks",
                ],
                correctAnswer: "C",
              },
              {
                id: "q18",
                questionNumber: 18,
                type: "mcq",
                text:
                  "What must you do to eat in the dining facilities if you are not a student?",
                options: [
                  "A. purchase a dinning facility card",
                  "B. purchase meals at the door",
                  "C. purchase meals from other students",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 19 - 20</p><p>Choose <strong>TWO</strong> correct letters A-E.</p><p>Which of the following are rules of the dinning facilities?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q19-20",
                questionNumber: "19-20",
                text: "",
                correctAnswer: ["A", "D"],
              },
            ],
            options: [
              { id: "A", text: "Do not waste food." },
              { id: "B", text: "You may bring friends in to eat." },
              { id: "C", text: "Bring your own plates and trays." },
              { id: "D", text: "Clean your own plates and trays." },
              { id: "E", text: "Don't litter." },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21 - 26</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "mcq",
                text: "What is Matthew considering a student work placement?",
                options: [
                  "A. He was informed about an interesting vacancy.",
                  "B. He needs some extra income.",
                  "C. He wants to try out a carrer option.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "mcq",
                text:
                  "Which part of the application process did Linda find most interesting?",
                options: [
                  "A. The psychometric test.",
                  "B. The group activity.",
                  "C. The individual task.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "mcq",
                text: "During her work placement, Linda helped find ways to",
                options: [
                  "A. speed up care assembly.",
                  "B. process waste materials.",
                  "C. calculate the cost of design faults.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "mcq",
                text: "Why did Linda find her work placement tiring?",
                options: [
                  "A. She wasn't used to full-time work.",
                  "B. The working hours were very long.",
                  "C. She felt she had to prove her worth.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "mcq",
                text: "What did Linda's employers give her formal feedback on?",
                options: [
                  "A. engineering ability",
                  "B. organisational skills",
                  "C. team working",
                ],
                correctAnswer: "B",
              },
              {
                id: "q26",
                questionNumber: 26,
                type: "mcq",
                text: "What was the main benefit of Linda;s work placement?",
                options: [
                  "A. Improved academic skills.",
                  "B. An offer of work.",
                  "C. The opportunity to use new software.",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 27 - 30</p><p>What does Linda think about the books on Matthew's reading list?</p><p>Write the correct letter, A - F, next to questions 27 - 30.</p>",
            type: "matching",
            questions: [{ id: "q27-30", questionNumber: 27 }],
            matchingOptions: {
              title: "Opinions",
              A: "helpful illustrations",
              B: "easy to understand",
              C: "up-to-date",
              D: "comprehensive",
              E: "specialised",
              F: "useful case studies",
            },
            matchingItems: [
              {
                number: 27,
                text: "The Science of Materials",
                correctAnswer: "B",
              },
              {
                number: 28,
                text: "Materials Engineering",
                correctAnswer: "A",
              },
              {
                number: 29,
                text: "Engineering Basics",
                correctAnswer: "D",
              },
              {
                number: 30,
                text: "Evolution of Materials",
                correctAnswer: "C",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31 - 35</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD OR A NUMBER</strong> for each answer.</p><h3>RESTORATION ECOLOGY PROGRAMME !!</h3>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "Influence - Leopold's concept that land should be viewed as a [GAP]",
                correctAnswer: "Community",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "Practice - Restore native plant [GAP] to original condition",
                correctAnswer: "Communities",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "Curtis Prairie is the [GAP] restored prairie in America.",
                correctAnswer: "Oldest",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text: "Edmond Moukala researched restoring ancient [GAP]",
                correctAnswer: "Wetlands",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "in the Congo based on the [GAP] in his homeland. found in the soil of these former communities",
                correctAnswer: "Seeds",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 36 - 40</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD OR A NUMBER</strong> for each answer.</p>",
            questions: [
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text: "Coursework in statistics, theory, ecology and [GAP]",
                correctAnswer: "Plant",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text:
                  "identification [GAP] help students gain practical experience.",
                correctAnswer: "Internships",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "Has so far granted [GAP] Masters Degrees and 122 Ph.D.'s",
                correctAnswer: "277",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "One former student is now the [GAP] of the World Wide Fund for Nature,",
                correctAnswer: "Director",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "while many others continue to conduct [GAP] in their own university programmes.",
                correctAnswer: "Research",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-6",
    moduleId: "listening",
    title: "IELTS Listening Test 6",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl: "Listening_tests_audio/Test 6/IELTS LISTENING PRACTICE 6.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-7</p><p>Choose the correct letter A, B or C.</p>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "mcq",
                text: "The librarian says that training always includes",
                options: [
                  "A. computer skills",
                  "B. basic medical skills",
                  "C. interpersonal skills",
                ],
                correctAnswer: "B",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "mcq",
                text: "All library service volunteers have to",
                options: [
                  "A. record their arrived and departure",
                  "B. stay within staff only sections",
                  "C. wear a uniform",
                ],
                correctAnswer: "A",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "mcq",
                text:
                  "The woman would be entitled to a contribution towards the cost",
                options: [
                  "A. transport by mini bus",
                  "B. parking at the library",
                  "C. public transport",
                ],
                correctAnswer: "C",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "mcq",
                text: "One recent library project involved",
                options: [
                  "A. labelling historical objects",
                  "B. protecting historical photographs",
                  "C. cataloging historical documents",
                ],
                correctAnswer: "B",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "mcq",
                text: "At present, the library is looking for people to",
                options: [
                  "A. record books into CD",
                  "B. tell stories to children",
                  "C. read books to the blind",
                ],
                correctAnswer: "A",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "mcq",
                text: "The woman says she is interested in a project involving",
                options: [
                  "A. talking library books to people in hospital",
                  "B. delivering library books to people at home",
                  "C. driving the disabled to the library",
                ],
                correctAnswer: "A",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "mcq",
                text: "The woman agrees to work for",
                options: [
                  "A. two hours per week",
                  "B. four hours per week",
                  "C. six hours per week",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 8 - 10</p><p>Choose <strong>THREE</strong> letters A-G.</p><p>Which THREE of the following must be provided by all volunteers?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q8-10",
                questionNumber: "8-10",
                text: "",
                correctAnswer: ["B", "D", "G"],
              },
            ],
            options: [
              { id: "A", text: "Civil convocation check" },
              { id: "B", text: "signed copy of commitment" },
              { id: "C", text: "certificates to indicate qualifications" },
              { id: "D", text: "emergency contact information" },
              { id: "E", text: "date of birth" },
              { id: "F", text: "signature of parent or guardian" },
              { id: "G", text: "referees" },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11 - 16</p><p>Label the flow-chart below.</p><p>Choose <strong>SIX</strong> answers from the box and write the correct letter, A-I, next to questions 11-16.</p><h3>Process of Becoming a Member</h3><p><strong>(A)</strong> sponsor <strong>(B)</strong> three cards <strong>(C)</strong> balance <strong>(D)</strong> inquest <strong>(E)</strong> interview <strong>(F)</strong> deposit <strong>(G)</strong> mentor <strong>(H)</strong> tests <strong>(I)</strong> form</p>",
            questions: [
              {
                id: "q11-16",
                type: "flow_chart",
                steps: [
                  {
                    questionNumber: 11,
                    text: "Find an application [GAP]",
                    correctAnswer: "A",
                  },
                  {
                    questionNumber: 12,
                    text: "Submit the membership [GAP]",
                    correctAnswer: "A",
                  },
                  {
                    questionNumber: 13,
                    text: "accompanied by the relevant [GAP]",
                    correctAnswer: "F",
                  },
                  {
                    questionNumber: 14,
                    text: "If required, present yourself for further [GAP]",
                    correctAnswer: "E",
                  },
                  {
                    questionNumber: 15,
                    text: "Settle remaining [GAP]",
                    correctAnswer: "C",
                  },
                  {
                    questionNumber: 16,
                    text: "To get a playing handicap, submit [GAP]",
                    correctAnswer: "B",
                  },
                ],
              },
            ],
          },
          {
            instructions:
              "<p>Questions 17-20</p><p>Choose the correct letter, A,B,C,D.</p><p>N.B: You may use any letter more than once.</p><p><strong>A.</strong> Full play rights</p><p><strong>B.</strong> Play by invitation</p><p><strong>C.</strong> Restricted play</p><p><strong>D.</strong> Cannot play at weekends</p>",
            questions: [
              {
                id: "q17-20-table",
                questionNumber: 17,
                type: "table_fill_in_the_blank",
                tableData: [
                  ["Member Type", "Playing Rights (competition)", "Costs"],
                  ["Full ordinary member", "Full playing rights", "$10,000"],
                  ["5-Day member", "17. [INPUT]", "$5000"],
                  ["Intermediate member", "18. [INPUT]", "$1800"],
                  ["Junior member", "19. [INPUT]", "$1800"],
                  ["Senior member", "Full playing rights", "$1800"],
                  ["Overseas member", "20. [INPUT]", "$1800"],
                ],
                correctAnswer: {
                  q17: "D",
                  q18: "B",
                  q19: "C",
                  q20: "B",
                },
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21 - 22</p><p>Choose <strong>TWO</strong> letters, A - E.</p><p>What TWO things do Brad and Helen agree to say about listening in groups?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q21-22",
                questionNumber: "21-22",
                text: "",
                correctAnswer: ["B", "E"],
              },
            ],
            options: [
              {
                id: "A",
                text:
                  "Listening skills are often overlooked in business training.",
              },
              {
                id: "B",
                text:
                  "Learning to listen well is a skill that's easy for most people to learn.",
              },
              {
                id: "C",
                text: "It's sometimes acceptable to argue against speakers.",
              },
              {
                id: "D",
                text: "Body language is very important when listening.",
              },
              {
                id: "E",
                text: "Listeners should avoid interrupting speakers.",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 23 - 24</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>What TWO things does the article say about goal-setting?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q23-24",
                questionNumber: "23-24",
                text: "",
                correctAnswer: ["B", "E"],
              },
            ],
            options: [
              {
                id: "A",
                text: "Meeting should start with a clear statement of goals.",
              },
              {
                id: "B",
                text:
                  "It's important for each individual's goals to be explained.",
              },
              {
                id: "C",
                text: "Everybody in the group should have the same goals.",
              },
              {
                id: "D",
                text: "Goals should be a mix of the realistic and the ideal.",
              },
              {
                id: "E",
                text: "Goals must always be achievable within a set time.",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 25-26</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>What TWO things do Brad and Helen agree weak points in the article's section on conflict resolution?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q25-26",
                questionNumber: "25-26",
                text: "",
                correctAnswer: ["B", "C"],
              },
            ],
            options: [
              {
                id: "A",
                text: "It doesn't explore the topic in enough detail.",
              },
              { id: "B", text: "It only discusses conservative views." },
              {
                id: "C",
                text: "It says nothing about the potential value of conflict.",
              },
              { id: "D", text: "It talks too much about winners and losers." },
              {
                id: "E",
                text: "It doesn't provide definitions of key terms.",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 27 - 30</p><p>What actions do Brad and Helen agree to do regarding the following preparation tasks?</p><p>Choose <strong>FOUR</strong> answers from the box and write the correct letter, A-F, next to the questions.</p>",
            type: "matching",
            questions: [
              {
                id: "q27-30",
                questionNumber: 27,
                text: "",
                correctAnswer: "",
              },
            ],
            matchingOptions: {
              title: "Actions",
              A: "Contact the tutor for clarification.",
              B: "Check the assignment specifications.",
              C: "Leave it unit the last task.",
              D: "Ask a course-mate to help.",
              E: "Find information on the Internet.",
              F: "Look through handbooks.",
            },
            matchingItems: [
              {
                number: 27,
                text: "Preparing the powerpoint",
                correctAnswer: "C",
              },
              {
                number: 28,
                text: "Using direct quotations",
                correctAnswer: "B",
              },
              { number: 29, text: "Creating a handout", correctAnswer: "D" },
              {
                number: 30,
                text: "Drawing up a bibliography",
                correctAnswer: "F",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31 - 40</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p><h3>British customs</h3>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "In Britain, there is a common saying, \"An Englishman's home is his [GAP].",
                correctAnswer: "Castle",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "It's important to cat thoughtfully if you are living in a British [GAP].",
                correctAnswer: "Home",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text: "There are a few British [GAP].",
                correctAnswer: "Customs",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text: "You should be [GAP] for meals.",
                correctAnswer: "punctual",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text: "Make your own bed keep you room clean and [GAP].",
                correctAnswer: "Tidy",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "When you stay with a British family for several days you should give a small [GAP] when you leave.",
                correctAnswer: "Present",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text:
                  "British people normally wait unit [GAP] has got their food before they start eating.",
                correctAnswer: "everyone",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "You'd better use their family [GAP] and title if you are unsure how to call them.",
                correctAnswer: "Name",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "At a formal meal, the host won't [GAP] expect guests to help with household.",
                correctAnswer: "Normally",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text: "[GAP]",
                correctAnswer: "Chores",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-7",
    moduleId: "listening",
    title: "IELTS Listening Test 7",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 7/IELTS LISTENING  Practice Test 7.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-6</p><p>Complete the form below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>Gym Membership Form</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Full name: Oliver [GAP]",
                correctAnswer: "BENNETT",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Membership start date: [GAP] October",
                correctAnswer: "3RD/THIRD",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text: "Duration: Until end of [GAP]",
                correctAnswer: "JULY",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "Membership type: [GAP] scheme",
                correctAnswer: "STUDENT",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "Branch: Katherine, [GAP] Street",
                correctAnswer: "KING",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "Distance from campus: [GAP] minutes",
                correctAnswer: "5",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 7-10</p><p>Complete the form below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>Gym Membership Form</h3>",
            questions: [
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "Monthly fee: £ [GAP]",
                correctAnswer: "35",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "Facilities include: pool and [GAP]",
                correctAnswer: "SAUNA",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "Most popular class: [GAP]",
                correctAnswer: "SPINNING",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "Email: oliver.bennett21@ [GAP]",
                correctAnswer: "GMAIL.COM",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-15</p><p>Choose the correct letter <strong>A, B, or C</strong>.</p>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "mcq",
                text: "The main aim of the Local History Trail Project is to",
                options: [
                  "A. attract international tourists.",
                  "B. build pride among residents.",
                  "C. increase ticket sales for museums.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "mcq",
                text: "Which is NOT mentioned as a possible volunteer role?",
                options: [
                  "A. Leading groups on guided walks.",
                  "B. Assisting with archival research.",
                  "C. Managing financial donations.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "mcq",
                text: "During training, new volunteers will",
                options: [
                  "A. observe experienced guides in action.",
                  "B. design their own historical trails.",
                  "C. practice advanced storytelling techniques.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "mcq",
                text: "What personal item must volunteers provide?",
                options: ["A. Maps", "B. Footwear", "C. Laminated sheets"],
                correctAnswer: "B",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text:
                  "What is expected of volunteers regarding language ability?",
                options: [
                  "A. They must be fluent in several languages.",
                  "B. They should be comfortable communicating in English.",
                  "C. They are required to translate tours.",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 16-20</p><p>Match each item with the correct description.</p><p>Write the correct letter <strong>A-E</strong> next to Questions 16-20.</p>",
            type: "matching",
            questions: [
              {
                id: "l7-q16-20",
                questionNumber: 16,
                text: "",
                correctAnswer: "",
              },
            ],
            matchingOptions: {
              title: "Descriptions",
              A: "Provided to ensure groups are visible during walks.",
              B: "A ceremony where efforts are recognised by the community.",
              C: "Basic skills for dealing with minor health issues.",
              D: "Written confirmation that volunteers will follow rules.",
              E: "Regular level of involvement required from helpers.",
            },
            matchingItems: [
              {
                number: 16,
                text: "At least one tour every fortnight",
                correctAnswer: "E",
              },
              {
                number: 17,
                text: "Participation agreement",
                correctAnswer: "D",
              },
              {
                number: 18,
                text: "High-visibility vests",
                correctAnswer: "A",
              },
              {
                number: 19,
                text: "First-aid introduction",
                correctAnswer: "C",
              },
              {
                number: 20,
                text: "Public acknowledgement",
                correctAnswer: "B",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-26</p><p>Choose correct, letter <strong>A, B, Or C</strong>.</p>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "mcq",
                text: "What issue did Dr. Bennett identify in Aisha's draft?",
                options: [
                  "A. It lacked sufficient background context",
                  "B. It attempted to cover too many areas",
                  "C. It focused too narrowly on technology",
                ],
                correctAnswer: "B",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "mcq",
                text:
                  "Why should Aisha avoid emphasising lecturers' use of technology?",
                options: [
                  "A. It would turn the project into a teaching methods study",
                  "B. It requires access she may not have",
                  "C. It would duplicate her survey material",
                ],
                correctAnswer: "A",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "mcq",
                text: "How should dropout rates be handled?",
                options: [
                  "A. Omit them entirely",
                  "B. Link them carefully to motivation and persistence",
                  "C. Replace them with statistical predictions",
                ],
                correctAnswer: "B",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "mcq",
                text: "What advice did Dr. Bennett give about methodology?",
                options: [
                  "A. Add more methods for credibility",
                  "B. Exclude surveys and interviews",
                  "C. Limit the study to two methods",
                ],
                correctAnswer: "C",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "mcq",
                text: "Why should Aisha avoid relying on just one U.S. study?",
                options: [
                  "A. It was not peer-reviewed",
                  "B. It may not apply in her context",
                  "C. It had flawed data collection",
                ],
                correctAnswer: "B",
              },
              {
                id: "q26",
                questionNumber: 26,
                type: "mcq",
                text: "What concern did Dr. Bennett raise about references?",
                options: [
                  "A. They are incomplete",
                  "B. They are outdated",
                  "C. They are irrelevant",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 27-30</p><p>Match each piece of advice from Dr. Bennett with the focus area.</p><p>Write the correct letter, <strong>A-E</strong>, next to Questions 27-30.</p>",
            type: "matching",
            questions: [
              {
                id: "l7-q27-30",
                questionNumber: 27,
                text: "",
                correctAnswer: "",
              },
            ],
            matchingOptions: {
              title: "Advice",
              A: "Conclusion",
              B: "Presentation of results",
              C: "Timeline",
              D: "Literature review",
              E: "Language accuracy",
            },
            matchingItems: [
              {
                number: 27,
                text: "Reduce data collection time",
                correctAnswer: "C",
              },
              {
                number: 28,
                text: "Use charts and graphs",
                correctAnswer: "B",
              },
              {
                number: 29,
                text: "Avoid sweeping statements",
                correctAnswer: "A",
              },
              {
                number: 30,
                text: "Proofread carefully",
                correctAnswer: "E",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-40</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>Development of Medical Innovations</h3>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "One of the earliest medical breakthroughs was the practice of [GAP]",
                correctAnswer: "HANDWASHING",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "Semmelweis recommended cleaning hands with a [GAP] solution.",
                correctAnswer: "CHLORINE",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "The first public demonstration of pain relief in surgery used [GAP]",
                correctAnswer: "COLOURLESS LIQUID",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "Joseph Lister used [GAP] to sterilise equipment and wounds.",
                correctAnswer: "CARBOLIC ACID",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "Fleming discovered penicillin after mould infected a [GAP]",
                correctAnswer: "CULTURE PLATE",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "in 1980 was a public health victory. The formal eradication of [GAP]",
                correctAnswer: "SMALLPOX",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text: "MRI scans provide clear images of [GAP]",
                correctAnswer: "SOFT TISSUE",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "In 1954, the first [GAP] transplant was performed successfully.",
                correctAnswer: "KIDNEY",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "Once production [GAP] were improved, insulin therapy became common.",
                correctAnswer: "METHODS",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "In future, medicine may be tailored using individual [GAP] profiles.",
                correctAnswer: "GENETIC",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-8",
    moduleId: "listening",
    title: "IELTS Listening Test 8",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 8/IELTS Listening Practice Test 8.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-5</p><p>Complete the notes below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Express train departs at [GAP] from platform 4.",
                correctAnswer: "8:10",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Closest railway station is [GAP].",
                correctAnswer: "CENTRAL STATION",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text:
                  "Bus number [GAP] goes to Maple Avenue Underground Station.",
                correctAnswer: "517",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "The direct walk to the station takes [GAP] minutes.",
                correctAnswer: "6",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "Trains run every [GAP] minutes.",
                correctAnswer: "SEVEN",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 6-10</p><p>Complete the table below.</p><p>Write <strong>No more than one word or a number</strong> for each answer.</p>",
            questions: [
              {
                id: "q6-10-table",
                questionNumber: 6,
                type: "table_fill_in_the_blank",
                tableData: [
                  ["Means of transport", "Normal fare", "Discounted fare"],
                  ["Bus", "$2.20", "6. [INPUT]"],
                  ["Train (morning peak)", "$12.50", "7. [INPUT]"],
                  ["Train (off-peak hour)", "$12.50", "8. [INPUT]"],
                  ["Regular Harbour Line ferry trip", "$5.80", "9. [INPUT]"],
                  ["Full-day sightseeing boat trip", "$10.00", "10. [INPUT]"],
                ],
                correctAnswer: {
                  q6: "1.50",
                  q7: "NO DISCOUNT",
                  q8: "6.40",
                  q9: "4.60",
                  q10: "10.78",
                },
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-16</p><p>Complete the table below.</p><p>Write <strong>No more than two words</strong> for each answer.</p>",
            questions: [
              {
                id: "q11-16-table",
                questionNumber: 11,
                type: "table_fill_in_the_blank",
                tableData: [
                  ["Services offered", "For individuals", "For groups"],
                  [
                    "Online support sessions",
                    "Write down their concerns\n\n11. [INPUT] at your own pace",
                    "",
                  ],
                  [
                    "In-person one-to-one appointments",
                    "Speak face-to-face at an\n\n12. [INPUT]",
                    "",
                  ],
                  [
                    "Group discussions",
                    "",
                    "Understand how you relate\n\n13. [INPUT]\n\nCommit to 14. [INPUT] personal growth",
                  ],
                  [
                    "Self-guided materials",
                    "Explore challenges in more depth 15. [INPUT] at any time. links to various resources.",
                    "",
                  ],
                  [
                    "Targeted skills sessions",
                    "",
                    "Learn about similar topics develop useful 16. [INPUT]",
                  ],
                ],
                correctAnswer: {
                  q11: "REFLECT",
                  q12: "ARRANGED TIME",
                  q13: "OTHER PEOPLE",
                  q14: "LONG TERM",
                  q15: "PRACTICAL STRATEGIES",
                  q16: "COPING TECHNIQUES",
                },
              },
            ],
          },
          {
            instructions:
              "<p>Questions 17-20</p><p>Which adviser should you see?</p><p>Write the correct letter, A, B or C, next to questions 17-20.</p>",
            type: "matching",
            questions: [
              {
                id: "l8-q17-20",
                questionNumber: 17,
              },
            ],
            matchingOptions: {
              title: "",
              A: "Harriet Lewis",
              B: "Jordan Miles",
              C: "Paula Grant",
            },
            matchingItems: [
              {
                number: 17,
                text:
                  "if you want to speak to someone without arranging it first",
                correctAnswer: "B",
              },
              {
                number: 18,
                text:
                  "if you are in your first year and need an introduction to the support process",
                correctAnswer: "A",
              },
              {
                number: 19,
                text:
                  "if you are finding it hard to cope with deadlines or anxiety",
                correctAnswer: "C",
              },
              {
                number: 20,
                text:
                  "if you are not able to see a professional during normal office",
                correctAnswer: "A",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-26</p><p>Complete the notes below.</p><p>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.</p><h3>HOW TO WRITE A HISTORY RESEARCH REPORT</h3><h4>Introductory Points</h4>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "fill_in_the_blank",
                text: "The most important feature of a strong report is [GAP].",
                correctAnswer: "CLARITY",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "fill_in_the_blank",
                text:
                  "Do not write a report that is only a repetition of [GAP] or other people's conclusions.",
                correctAnswer: "STATISTICS",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "fill_in_the_blank",
                text: "The second key factor is [GAP].",
                correctAnswer: "ORGANISATION",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "fill_in_the_blank",
                text: "Write [GAP] and arguments before starting.",
                correctAnswer: "ESSENTIAL POINTS",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "fill_in_the_blank",
                text: "Consider the [GAP] before you start writing.",
                correctAnswer: "BIGGER PICTURE",
              },
              {
                id: "q26",
                questionNumber: 26,
                type: "fill_in_the_blank",
                text:
                  "Know [GAP]. avoid the error of writing solely for yourself.",
                correctAnswer: "INTENDED AUDIENCE",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 27-30</p><p>Complete the notes below.</p><p>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.</p><h3>HOW TO WRITE A HISTORY RESEARCH REPORT</h3><h4>Report Structure</h4>",
            questions: [
              {
                id: "q27",
                questionNumber: 27,
                type: "fill_in_the_blank",
                text: "The maximum length of a single section is [GAP].",
                correctAnswer: "A4 PAGE",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "fill_in_the_blank",
                text:
                  "<strong>Flow</strong>\n\nEach point should [GAP] from the one before it.",
                correctAnswer: "FOLLOW NATURALLY",
              },
              {
                id: "q29",
                questionNumber: 29,
                type: "fill_in_the_blank",
                text:
                  "Use [GAP] and expressions to link sections where appropriate.",
                correctAnswer: "CONNECTIVE WORDS",
              },
              {
                id: "q30",
                questionNumber: 30,
                type: "fill_in_the_blank",
                text:
                  "<strong>Argument</strong>\n\nA good History report must present a clear argument. It should not be a [GAP] but should explore multiple viewpoints.",
                correctAnswer: "ONE-SIDED MONOLOGUE",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-35</p><p>Complete the sentence given below.</p><p>Write <strong>NO MORE THAN THREE WORDS</strong>.</p><h4>The influence of the blue colour</h4>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "Blue is a vivid colour. It has a number of powerful [GAP].",
                correctAnswer: "ASSOCIATIONS",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "It is often used internationally on signs that provide [GAP].",
                correctAnswer: "GUIDANCE OR INFORMATION",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text: "Our skin can turn [GAP] when we are very cold.",
                correctAnswer: "BLUE",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text: "When [GAP] our skin may turn blue due to fear.",
                correctAnswer: "FRIGHTENED",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "Traditional blue is the shade most often linked with loyalty; the best-known example is its use in [GAP].",
                correctAnswer: "POLICE UNIFORMS",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 36-40</p><p>Choose the correct letter, A, B, or C.</p>",
            questions: [
              {
                id: "q36",
                questionNumber: 36,
                type: "mcq",
                text:
                  "According to colour science, wearing blue clothing can influence",
                options: [
                  "A) our dietary habits.",
                  "B) our physical state.",
                  "C) our driving ability.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "mcq",
                text: "A large number of non-primate animals",
                options: [
                  "A) cannot tell the difference between blue and yellow.",
                  "B) evolved special eye receptors.",
                  "C) can easily find blue berries.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "mcq",
                text:
                  "The research conducted by Eleanor Price and Martin Cole suggested that humans might respond to blue",
                options: [
                  "A) with feelings of composure and authority.",
                  "B) in the same way as vervet monkeys avoid fights.",
                  "C) only in racquet sports.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "mcq",
                text:
                  "Which of the following is NOT mentioned as a possible reason for the effect of wearing blue in sport?",
                options: [
                  "A) Wearing blue increases an athlete's confidence and focus.",
                  "B) Wearing blue makes opponents less aggressive.",
                  "C) Wearing blue improves lung capacity.",
                ],
                correctAnswer: "C",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "mcq",
                text: "Colour science is",
                options: [
                  "A) still in its early stages.",
                  "B) a long-established discipline.",
                  "C) known for disproving traditional beliefs.",
                ],
                correctAnswer: "A",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-9",
    moduleId: "listening",
    title: "IELTS Listening Test 9",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 9/IELTS Listening Practice Test 9.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-5</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>Survey on: Leisure Centres</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Age: [GAP]",
                correctAnswer: "63",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Postcode: [GAP]",
                correctAnswer: "GL49PD",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text: "COMPUTER FACILITIES ALREADY USED Where?: [GAP]",
                correctAnswer: "COMMUNITY LIBRARY",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "SPORTS FACILITIES ALREADY USED Where?: [GAP]",
                correctAnswer: "POOL",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "EDUCATION FACILITIES ALREADY USED Where?: [GAP]",
                correctAnswer: "ADULT LEARNING CENTRE",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 6-10</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>SUGGESTIONS FOR IMPROVEMENTS AT LEISURE CENTRE</h3>",
            questions: [
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "New sports: [GAP]",
                correctAnswer: "YOGA AND TENNIS",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "Classes organised especially for: [GAP]",
                correctAnswer: "OLDER ADULTS",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "Type of education classes suggested: [GAP]",
                correctAnswer: "DANCING AND POTTERY",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "Willing to pay: £ [GAP] per class",
                correctAnswer: "3/THREE",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "Likely frequency of visits if changes made: [GAP]",
                correctAnswer: "FOUR TIMES",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-15</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "mcq",
                text: "The speaker describes Whitworth Park as",
                options: [
                  "A) a fairly modest open space.",
                  "B) a very large green area.",
                  "C) a small garden in the city.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "mcq",
                text: "According to the speaker, Oxford Road Station is",
                options: [
                  "A) among the busiest in Manchester.",
                  "B) the newest in the city.",
                  "C) the smallest station on the line.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "mcq",
                text:
                  "The speaker suggests that after the walk, people might want to",
                options: [
                  "A) return to look around the shops and cafés.",
                  "B) avoid Oxford Road because it is noisy.",
                  "C) go straight home as the area is not lively.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "mcq",
                text: "The houses in Whitworth Gardens are located",
                options: [
                  "A) beside a peaceful pond.",
                  "B) on the opposite side of the park.",
                  "C) at the very edge of the city.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text: "The speaker advises removing headphones to",
                options: [
                  "A) enjoy the natural sounds in the park.",
                  "B) make sure you don’t miss the right path.",
                  "C) experience the unusual silence in the park.",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 16-20</p><p>Which activity can be done at each of the following locations in Whitworth Park?</p><p>Choose <strong>FIVE</strong> answers from the list and write the correct letter, A-G, next to questions 16-20.</p>",
            type: "matching",
            questions: [
              {
                id: "l9-q16-20",
                questionNumber: 16,
              },
            ],
            matchingOptions: {
              title: "Activities",
              A: "enjoy a picnic",
              B: "for hunting",
              C: "see views of Manchester",
              D: "for boating and fishing",
              E: "attend concerts",
              F: "have light refreshments",
              G: "watch documentaries",
            },
            matchingItems: [
              {
                number: 16,
                text: "Whitworth Gallery",
                correctAnswer: "F",
              },
              {
                number: 17,
                text: "the sloping fields",
                correctAnswer: "A",
              },
              {
                number: 18,
                text: "the outdoor performance area",
                correctAnswer: "E",
              },
              {
                number: 19,
                text: "the ponds",
                correctAnswer: "D",
              },
              {
                number: 20,
                text: "Greenhill Point",
                correctAnswer: "C",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-25</p><p>How do the speakers describe the eco-friendly city planning ideas?</p><p>Choose <strong>FIVE</strong> descriptions from the box and write the correct letter, A-G, next to questions 21-25.</p>",
            type: "matching",
            questions: [
              {
                id: "l9-q21-25",
                questionNumber: 21,
              },
            ],
            matchingOptions: {
              title: "Descriptions",
              A: "no objections from the public",
              B: "too costly",
              C: "not realistic in practice",
              D: "caused noise or disruption",
              E: "oversimplified",
              F: "successful",
              G: "very safe",
            },
            matchingItems: [
              {
                number: 21,
                text: "green corridor",
                correctAnswer: "A",
              },
              {
                number: 22,
                text: "decentralization",
                correctAnswer: "C",
              },
              {
                number: 23,
                text: "new satellite towns",
                correctAnswer: "B",
              },
              {
                number: 24,
                text: "brownfield redevelopments",
                correctAnswer: "A",
              },
              {
                number: 25,
                text: "pedestrianization of central districts",
                correctAnswer: "D",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 26-28</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q26",
                questionNumber: 26,
                type: "mcq",
                text:
                  "Which part of the project is Amy struggling with the most?",
                options: [
                  "A) Understanding how the data is presented",
                  "B) Having enough reliable sources",
                  "C) Deciding which figures to include",
                ],
                correctAnswer: "C",
              },
              {
                id: "q27",
                questionNumber: 27,
                type: "mcq",
                text:
                  "What was the main reason Gothenburg succeeded in its development?",
                options: [
                  "A) Prompt action by national authorities",
                  "B) Incorporating feedback from residents",
                  "C) Relying on external consultants",
                ],
                correctAnswer: "B",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "mcq",
                text:
                  "Why is Gothenburg's public transport system so effective?",
                options: [
                  "A) It provides reduced fares for vulnerable groups",
                  "B) Cyclists are allowed to use tram and bus lanes",
                  "C) Car ownership levels are comparatively low",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 29-30</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which TWO areas does the tutor recommend Amy should focus more on?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q29-30",
                questionNumber: "29-30",
                text: "",
                correctAnswer: ["C", "D"],
              },
            ],
            options: [
              { id: "A", text: "Car parking facilities" },
              { id: "B", text: "Job creation programmes" },
              { id: "C", text: "Pedestrian-only districts" },
              { id: "D", text: "Waste recycling strategy" },
              { id: "E", text: "Suburban commuting distances" },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-40</p><p>Complete the notes below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p><h3>ECONOMICS COURSE GUIDELINES</h3><h4>During Lectures Students:</h4>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "will receive information about economics and the [GAP] to focus on.",
                correctAnswer: "MAIN AREAS",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "will be given a structure for independent study.\nwill have an opportunity to be taught by an [GAP] in the field.",
                correctAnswer: "EXPERT",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text: "will take part in the learning culture in [GAP].",
                correctAnswer: "UNIVERSITY EDUCATION",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "<strong>Common problems students have with techniques used in lectures.</strong>\nmay not develop deeper [GAP]: no immediate clarification",
                correctAnswer: "UNDERSTANDING",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text: "modern methods help improve [GAP] more than lectures.",
                correctAnswer: "OUTCOMES",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "<strong>How to avoid problems and make learning easier</strong>\nleave time to read [GAP] on the booklist.",
                correctAnswer: "TITLES",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text:
                  "test yourself with quizzes, if you have had a [GAP] review earlier principles",
                correctAnswer: "YEAR OFF",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text: "use the web to do extra [GAP]",
                correctAnswer: "BACKGROUND STUDY",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text: "check the sources of information on the web are [GAP]",
                correctAnswer: "TRUSTWORTHY",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text: "[GAP] with your classmates",
                correctAnswer: "TALK",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-10",
    moduleId: "listening",
    title: "IELTS Listening Test 10",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 10/IELTS Listening Practice Test 10.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-3</p><p>Complete the form below.</p><p>Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p><h3>Complaint to the airline</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Address: [GAP] Lane, Carlisle",
                correctAnswer: "OAKBRIDGE",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Postcode: [GAP]",
                correctAnswer: "BT904PK",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text: "Telephone: work: [GAP], home: 681474",
                correctAnswer: "643952",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 4-6</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q4",
                questionNumber: 4,
                type: "mcq",
                text: "What issue did the man face during the flight?",
                options: [
                  "A) Not enough legroom",
                  "B) Poor seating location",
                  "C) Broken air system",
                ],
                correctAnswer: "C",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "mcq",
                text: "What does the man say about the meal during the flight?",
                options: [
                  "A) Too small in portion",
                  "B) Tasteless",
                  "C) Too expensive",
                ],
                correctAnswer: "A",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "mcq",
                text: "What was the man's opinion about the staff service?",
                options: [
                  "A) Unfriendly staff",
                  "B) Very slow to respond",
                  "C) Helpful and quick",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 7-10</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>",
            questions: [
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text:
                  "The man was happy with the [GAP] process at the airport.",
                correctAnswer: "SECURITY",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text:
                  "During the flight, the [GAP] system helped him pass the time.",
                correctAnswer: "ENTERTAINMENT",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "The company offered a 25% discount on his next [GAP].",
                correctAnswer: "HOTEL BOOKING",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "He also received a [GAP] credit.",
                correctAnswer: "CALLING CARD",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-16</p><p>What is customers' attitude towards the following services?</p><p>Write the correct letter, A, B or C, next to Questions 11-16.</p>",
            type: "matching",
            questions: [
              {
                id: "l10-q11-16",
                questionNumber: 11,
              },
            ],
            matchingOptions: {
              title: "",
              A: "They are very interested.",
              B: "They might be less interested.",
              C: "They are not interested.",
            },
            matchingItems: [
              { number: 11, text: "a free gift", correctAnswer: "C" },
              {
                number: 12,
                text: "chauffeur for a small extra fee",
                correctAnswer: "C",
              },
              {
                number: 13,
                text: "delivery and collection service",
                correctAnswer: "A",
              },
              {
                number: 14,
                text: "offering stylish vehicles",
                correctAnswer: "B",
              },
              { number: 15, text: "online discount ads", correctAnswer: "A" },
              {
                number: 16,
                text: "launching a new branch",
                correctAnswer: "C",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 17-20</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q17",
                questionNumber: 17,
                type: "mcq",
                text: "What is the current issue with public transport?",
                options: [
                  "A) Traffic delays",
                  "B) Safety problems",
                  "C) Reduced effectiveness",
                ],
                correctAnswer: "C",
              },
              {
                id: "q18",
                questionNumber: 18,
                type: "mcq",
                text:
                  "Why does the speaker say he prefers using a cab sometimes?",
                options: [
                  "A) It is more affordable than other options.",
                  "B) It helps him arrive on time.",
                  "C) It is safer than trams.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q19",
                questionNumber: 19,
                type: "mcq",
                text: "What problem does Matthew mention about trams?",
                options: [
                  "A) They are dirty",
                  "B) They can be significantly delayed",
                  "C) They are too crowded",
                ],
                correctAnswer: "B",
              },
              {
                id: "q20",
                questionNumber: 20,
                type: "mcq",
                text: "What does Matthew say about tram ticket prices?",
                options: [
                  "A) They have recently increased",
                  "B) They are now falling",
                  "C) They've remained stable",
                ],
                correctAnswer: "B",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-25</p><p>Choose the correct letter, A, B, or C.</p>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "mcq",
                text:
                  "What was the most challenging part when the business was launched?",
                options: [
                  "A) The branding plan was unclear",
                  "B) There was no ready-made model to follow",
                  "C) The rental space wasn't ideal",
                ],
                correctAnswer: "B",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "mcq",
                text: "What issue did some of the employees raise?",
                options: [
                  "A) The kinds of tasks given to them",
                  "B) How the duties were shared",
                  "C) Feeling excluded from discussions",
                ],
                correctAnswer: "B",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "mcq",
                text: "What problem did the first manager have?",
                options: [
                  "A) He took on too many roles at once",
                  "B) He made major choices without approval",
                  "C) He recruited staff without permission",
                ],
                correctAnswer: "B",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "mcq",
                text: "What did employees think of the new manager?",
                options: [
                  "A) They didn't enjoy his longer meetings",
                  "B) They were surprised by how effective he was",
                  "C) They were unsure about his leadership style",
                ],
                correctAnswer: "B",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "mcq",
                text: "What achievement did Doctor Harris feel most proud of?",
                options: [
                  "A) A mural painted by students in the office",
                  "B) A local school donated artwork for display",
                  "C) A professional artist designed the workspace",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 26-30</p><p>Complete the summary below.</p><p>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.</p><h3>Major Problems of a Company</h3>",
            questions: [
              {
                id: "q26",
                questionNumber: 26,
                type: "fill_in_the_blank",
                text:
                  "Since the business was launched, recruitment has remained a major issue, as it is hard to find trained staff and there is no [GAP].",
                correctAnswer: "SOLUTION",
              },
              {
                id: "q27",
                questionNumber: 27,
                type: "fill_in_the_blank",
                text:
                  "Doctor Harris also needs to locate a space for the upcoming training session on finances. Time management is difficult, and the role of [GAP] has proved essential in staying organised.",
                correctAnswer: "MOTIVATION",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "fill_in_the_blank",
                text:
                  "To improve these skills, students are advised to check the section on [GAP] in the library,",
                correctAnswer: "WORKPLACE BEHAVIOUR",
              },
              {
                id: "q29",
                questionNumber: 29,
                type: "fill_in_the_blank",
                text:
                  "where valuable books can be found. The library also holds helpful content like video tutorials on time use, literature about [GAP]",
                correctAnswer: "SYSTEM ADAPTATION METHODS",
              },
              {
                id: "q30",
                questionNumber: 30,
                type: "fill_in_the_blank",
                text: "and journal articles on the [GAP].",
                correctAnswer: "COMMUNITY SERVICE ROLES",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-40</p><p>Complete the notes below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p><h3>CLIMATE AND ARCHITECTURE</h3><h4>Introduction</h4>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "Cases and examples are from practice conducted in [GAP] as well as rural areas.",
                correctAnswer: "CITIES",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "<strong>Acid Rain</strong>\nGovernmental efforts began in the 1970s to cut emissions. Financial support was received from a [GAP].",
                correctAnswer: "BANK",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "[GAP] face less risk due to lower pollution at high levels.",
                correctAnswer: "SKYSCRAPERS",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "In recent years, alter Project focuses on older buildings made of [GAP].",
                correctAnswer: "STONE",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "<strong>Pollution</strong>\nBuilding materials like concrete contribute to emissions. [GAP] was used in Sky Tower windows to reduce pollution.",
                correctAnswer: "RECYCLED GLASS",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "<strong>Water and Humidity</strong>\nRain in [GAP] makes construction timing difficult",
                correctAnswer: "WINTER",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text:
                  "in wood, which may result in serious damage Moisture leads to [GAP].",
                correctAnswer: "PHYSICAL CHANGES",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "<strong>Building Design & Technology</strong>\nFoundation issues can occur when [GAP] lacks proper density.",
                correctAnswer: "SOIL",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "Engineers now monitor the [GAP] of architectural structures.",
                correctAnswer: "MOVEMENTS",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "The government plans to provide [GAP] to support architects in seismic zones.",
                correctAnswer: "CHECKLIST",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-11",
    moduleId: "listening",
    title: "IELTS Listening Test 11",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 11/IELTS Listening Practice Test 11.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-4</p><p>Complete the form below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Open in: [GAP]",
                correctAnswer: "JUNE",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Length of exhibition: [GAP]",
                correctAnswer: "4 DAYS",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text:
                  "A broad variety of brands will be displayed.\nSome bikes are only for display: others can be used for [GAP].",
                correctAnswer: "RIDE",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text:
                  "[GAP] are not allowed inside the exhibition hall.\nEach ticket includes one free photograph.",
                correctAnswer: "PERSONAL PHONES",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 5-10</p><p>Complete the form below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p>",
            questions: [
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "Price of ticket: £ [GAP] (in advance)",
                correctAnswer: "105",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "Transfer to Sarah (Ticketing officer) [GAP]",
                correctAnswer: "PENDLETON",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "Venue this year: Grand [GAP]",
                correctAnswer: "PALACE",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "Located near [GAP]",
                correctAnswer: "CITY CENTER",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "Website: www.[GAP].net",
                correctAnswer: "DIRECTION",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "Best way to contact: [GAP]",
                correctAnswer: "ONLINE",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-15</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "mcq",
                text:
                  "How many patients does the clinic aim to treat annually?",
                options: ["A) 9,000", "B) 12,000", "C) 6,500"],
                correctAnswer: "C",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "mcq",
                text: "When can patients see female doctors?",
                options: [
                  "A) on weekday mornings",
                  "B) from 8 am to 11 am",
                  "C) any time during the weekend",
                ],
                correctAnswer: "A",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "mcq",
                text: "Who is the expert in auditory rehabilitation?",
                options: ["A) Dr. Raymond", "B) Dr. Foster", "C) Dr. Harrison"],
                correctAnswer: "C",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "mcq",
                text: "Where are patients encouraged to get their medication?",
                options: [
                  "A) local chemist in the town",
                  "B) online pharmacy delivery",
                  "C) the centre's in-house pharmacy",
                ],
                correctAnswer: "C",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text: "What are patients asked to consider during their visit?",
                options: [
                  "A) Allowing a medical student to be present",
                  "B) Participating in student-led treatments",
                  "C) Joining training sessions for students",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 16-20</p><p>Label the map below.</p><p>Write the correct letter, A-H, next to questions 16-20.</p><img src='listening_test/Listening_test_imgs/test-11-1.png' alt='Map of clinic layout' class='rounded-lg my-4'>",
            questions: [
              {
                id: "q16",
                questionNumber: 16,
                type: "fill_in_the_blank",
                text: "Reception Area [GAP]",
                correctAnswer: "F",
              },
              {
                id: "q17",
                questionNumber: 17,
                type: "fill_in_the_blank",
                text: "Dr. Harrison's Room [GAP]",
                correctAnswer: "H",
              },
              {
                id: "q18",
                questionNumber: 18,
                type: "fill_in_the_blank",
                text: "Records Department [GAP]",
                correctAnswer: "B",
              },
              {
                id: "q19",
                questionNumber: 19,
                type: "fill_in_the_blank",
                text: "Surgery Room [GAP]",
                correctAnswer: "G",
              },
              {
                id: "q20",
                questionNumber: 20,
                type: "fill_in_the_blank",
                text: "Director's Office [GAP]",
                correctAnswer: "C",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-25</p><p>What is the main opinion of each of the following people?</p><p>Choose <strong>FIVE</strong> answers from the box and write the correct letter, A-G, next to questions 21-25.</p>",
            type: "matching",
            questions: [
              {
                id: "l11-q21-25",
                questionNumber: 21,
              },
            ],
            matchingOptions: {
              title: "Opinions",
              A: "temperature restrictions",
              B: "sustainable heating alternatives",
              C: "reduction in invertebrate population",
              D: "reduction in species numbers",
              E: "loss of natural habitat",
              F: "impacts on animal development",
              G: "impacts on water quality",
            },
            matchingItems: [
              { number: 21, text: "Leon Davies", correctAnswer: "A" },
              { number: 22, text: "Peter Lawson", correctAnswer: "B" },
              { number: 23, text: "Rebecca Lim", correctAnswer: "F" },
              { number: 24, text: "Melissa Turner", correctAnswer: "G" },
              { number: 25, text: "David Shore", correctAnswer: "D" },
            ],
          },
          {
            instructions:
              "<p>Questions 26-27</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q26",
                questionNumber: 26,
                type: "mcq",
                text:
                  "What does Liam believe about using natural or artificial heating?",
                options: [
                  "A) It doesn't make a difference to species.",
                  "B) Natural heating causes more harm to species.",
                  "C) Artificial heating is worse for species.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q27",
                questionNumber: 27,
                type: "mcq",
                text:
                  "Why does Liam criticize some of the theories discussed in the lectures?",
                options: [
                  "A) Governments are not spending enough on those areas.",
                  "B) Most of the theories are unrelated to exam content.",
                  "C) The theories are vague and not well-supported.",
                ],
                correctAnswer: "C",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 28-30</p><p>Choose <strong>THREE</strong> letters, A-G.</p><p>Which <strong>THREE</strong> topics are they interested in studying in the future?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q28-30",
                questionNumber: "28-30",
                text: "",
                correctAnswer: ["B", "E", "F"],
              },
            ],
            options: [
              { id: "A", text: "quality of life of tourists" },
              { id: "B", text: "wildlife park animals" },
              { id: "C", text: "migration birds" },
              { id: "D", text: "animals living in rural areas" },
              { id: "E", text: "animals living in tropical climate" },
              {
                id: "F",
                text: "the impacts of different environment on animals",
              },
              { id: "G", text: "pandas in the zoo" },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-32</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which TWO aspects did the new rules at the end of the 19th century focus on?</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q31-32",
                questionNumber: "31-32",
                text: "",
                correctAnswer: ["C", "D"],
              },
            ],
            options: [
              { id: "A", text: "cooperation" },
              { id: "B", text: "competition" },
              { id: "C", text: "moral values" },
              { id: "D", text: "player's physical protection" },
              { id: "E", text: "business model" },
            ],
          },
          {
            instructions:
              "<p>Questions 33-40</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p><h3>Cricket in Australia</h3>",
            questions: [
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "In modern Australia, schools promote cricket mainly due to pressure from [GAP].",
                correctAnswer: "PARENTS",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "Before the 19th century, cricket games followed different [GAP].",
                correctAnswer: "RULES",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "A unified code was formed to consolidate rules across the [GAP].",
                correctAnswer: "NATION",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "Match attendance grew as a result of improvements in communication and the [GAP].",
                correctAnswer: "TRANSPORT",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text:
                  "Cricket evolved into a popular [GAP] activity for local communities.",
                correctAnswer: "COMMUNITY",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "Most of the funding and development for the sport was managed by [GAP] clubs.",
                correctAnswer: "CRICKET",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "These clubs also arranged [GAP] with other local and regional teams.",
                correctAnswer: "COMPETITIONS",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "In the early 1900s, [GAP] cricketers were formally accepted into the sport.",
                correctAnswer: "PROFESSIONALS",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-12",
    moduleId: "listening",
    title: "IELTS Listening Test 12",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 12/IELTS Listening Practice Test 12.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-5</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p><h3>Lakeside Sports Centre - Swimming Lessons</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Classes\nAge group: [GAP] years old",
                correctAnswer: "9",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "A minimum of [GAP] children needed to start a group",
                correctAnswer: "4",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text:
                  "Class length: 60 minutes\n\nInstructors and Staff\n\nLead Instructor: Daniel Stone - holds a degree in physical education\nMia Roberts - assistant instructor - award-winning [GAP]",
                correctAnswer: "SWIMMER",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "Emma White - coach - ex-professional [GAP]",
                correctAnswer: "DIVER",
              },
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text:
                  "Ben Green - nutritionist - helps children with healthy [GAP]",
                correctAnswer: "HABITS",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 6-10</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p><h3>Lakeside Sports Centre - Swimming Lessons</h3>",
            questions: [
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text:
                  "Fees\nAdults: £230 per year\nChildren under 15: £180 annually or attend for [GAP] if both parents join",
                correctAnswer: "FREE",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "Timings\nOpen daily from 8:00 AM to [GAP] PM",
                correctAnswer: "8",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text:
                  "Facilities\n3 indoor pools available all year\n2 [GAP] pools only for use from April to August",
                correctAnswer: "OUTDOOR",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "Dining area serves meals and [GAP].",
                correctAnswer: "DESSERTS",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text:
                  "The fitness studio provides a wide range of modern [GAP].",
                correctAnswer: "EQUIPMENT",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-16</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "mcq",
                text: "Some administrative workers are now able to",
                options: [
                  "A) leave their jobs permanently.",
                  "B) work partly outside the office.",
                  "C) change their profession entirely.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "mcq",
                text: "Who benefits most from flexible working hours?",
                options: [
                  "A) elderly employees",
                  "B) parents of young children",
                  "C) people with long shifts",
                ],
                correctAnswer: "B",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "mcq",
                text:
                  "One reason remote workers may feel less stressed is because they",
                options: [
                  "A) avoid daily travel.",
                  "B) take breaks frequently.",
                  "C) don't attend physical meetings.",
                ],
                correctAnswer: "A",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "mcq",
                text: "People may be more productive at home because they",
                options: [
                  "A) have comfortable furniture.",
                  "B) face fewer distractions.",
                  "C) control their work pace.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text:
                  "Feelings of loneliness in remote workers may be caused by",
                options: [
                  "A) poor work quality.",
                  "B) lack of social communication.",
                  "C) working overtime.",
                ],
                correctAnswer: "B",
              },
              {
                id: "q16",
                questionNumber: 16,
                type: "mcq",
                text:
                  "What does the speaker say is essential to avoid home distractions?",
                options: [
                  "A) being inventive",
                  "B) technical skills",
                  "C) self-discipline",
                ],
                correctAnswer: "C",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 17-20</p><p>What advice does the speaker give for working from home?</p><p>Choose <strong>FOUR</strong> answers from the box and write the correct letter, A-H, next to Questions 17-20.</p>",
            type: "multiple_choice_multiple_answers",
            questions: [
              {
                id: "q17-20",
                questionNumber: "17-20",
                text: "Advice for working from home",
                correctAnswer: ["A", "C", "F", "H"],
              },
            ],
            options: [
              { id: "A", text: "arrange time for break and meals" },
              {
                id: "B",
                text:
                  "avoid making any social arrangements during the working day",
              },
              {
                id: "C",
                text: "create separation between work and personal spaces",
              },
              { id: "D", text: "make sure your workspace has enough light" },
              { id: "E", text: "become involved in local activities" },
              { id: "F", text: "be disciplined about working time" },
              { id: "G", text: "plan the working day ahead" },
              { id: "H", text: "spend time interacting with colleagues" },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-25</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "mcq",
                text:
                  "What did Emily find surprising about her work experience?",
                options: [
                  "A) The number of animals being treated",
                  "B) The difficulty of handling animal injuries",
                  "C) The amount of paperwork involved",
                ],
                correctAnswer: "B",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "mcq",
                text: "What aspect of the internship shocked Josh the most?",
                options: [
                  "A) The early start each day",
                  "B) The behaviour of the animals",
                  "C) The length of the work shifts",
                ],
                correctAnswer: "A",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "mcq",
                text:
                  "According to Emily, which of the following was unexpected?",
                options: [
                  "A) How repetitive the tasks were",
                  "B) The scientific knowledge needed",
                  "C) The training given to new interns",
                ],
                correctAnswer: "B",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "mcq",
                text: "What is Josh's career preference?",
                options: [
                  "A) Working in conservation long-term",
                  "B) Becoming a ranger",
                  "C) Pursuing zoology",
                ],
                correctAnswer: "C",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "mcq",
                text:
                  "What does Emily say about the word count for the internship report?",
                options: [
                  "A) She needs to confirm the number",
                  "B) She thinks it should be shorter",
                  "C) She remembers it being 2,000 words",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 26-30</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>",
            questions: [
              {
                id: "q26",
                questionNumber: 26,
                type: "fill_in_the_blank",
                text:
                  "Josh plans to write a [GAP] for the performance skills workshop.",
                correctAnswer: "MONOLOGUE",
              },
              {
                id: "q27",
                questionNumber: 27,
                type: "fill_in_the_blank",
                text:
                  "Emily is preparing a talk on the use of [GAP] in storytelling.",
                correctAnswer: "MASKS",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "fill_in_the_blank",
                text:
                  "Emily's documentary clip features a teenager who writes [GAP].",
                correctAnswer: "BLOGS",
              },
              {
                id: "q29",
                questionNumber: 29,
                type: "fill_in_the_blank",
                text:
                  "The drummer in Emily's mini-documentary suffering with [GAP].",
                correctAnswer: "TEMPO CONTROL",
              },
              {
                id: "q30",
                questionNumber: 30,
                type: "fill_in_the_blank",
                text:
                  "The venue Emily selected for her presentation is located in [GAP].",
                correctAnswer: "WASHINGTON",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-40</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p><h3>Impact of artificial intelligence on employment</h3><h4>Introduction</h4>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "In manufacturing, for instance, AI-powered robots have transformed production lines.\nAI-powered robots improve efficiency by reducing human [GAP].",
                correctAnswer: "ERROR",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "<strong>Artificial intelligence in retail</strong>\nAI chatbots operate on websites to address [GAP].",
                correctAnswer: "QUESTIONS",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "<strong>AI in healthcare industry</strong>\nAI helps doctors reading medical [GAP].",
                correctAnswer: "IMAGES",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "while AI makes things more efficient, it won't make human [GAP] useless.",
                correctAnswer: "DOCTORS",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "<strong>AI in financial sector</strong>\nAI has raised concerns about job losses in [GAP].",
                correctAnswer: "BANKING",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "<strong>How AI affects the job market</strong>\nAI is growing tech, [GAP] and finance employment that didn't exist a decade ago.",
                correctAnswer: "HEALTHCARE",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text:
                  "Self-driving vehicles may affect [GAP] in the transportation industry.",
                correctAnswer: "JOBS",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "The skills [GAP] is a major concern regarding the effects of AI on the job market.",
                correctAnswer: "GAP",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "Although AI is changing many jobs and sectors, it may not be causing people to lose their [GAP] in large numbers.",
                correctAnswer: "JOBS",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text: "AI has the power to enhance our [GAP] and boost output.",
                correctAnswer: "LIVES",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-13",
    moduleId: "listening",
    title: "IELTS Listening Test 13",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 13/IELTS Listening Practice Test 13_P.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-4</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p><h3>The centre now has:</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text:
                  "a reading lounge with newspapers<br>a larger section with books on [GAP]",
                correctAnswer: "TRAVEL",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "a recently created area on local [GAP]",
                correctAnswer: "HISTORY",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text: "a room called the Heritage Room (can be used for [GAP])",
                correctAnswer: "WORK",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "a new collection of novels for [GAP]",
                correctAnswer: "TEENAGERS",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 5-10</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p>",
            questions: [
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text:
                  "<strong>For younger children:</strong><br>discovery workshop: activities using things from the [GAP]",
                correctAnswer: "KITCHEN",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text:
                  "book quest: children earn a badge by reading eight books<br><br><strong>For adults:</strong><br>on Wednesday: local writer gives a talk about a real [GAP]",
                correctAnswer: "MYSTERY",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "Monday mornings: tech help is offered no [GAP] needed",
                correctAnswer: "BOOKING",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text:
                  "free testing of blood [GAP] and pressure levels (age 65+ only)",
                correctAnswer: "SUGAR",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text:
                  "<strong>Other details:</strong><br>the centre shop sells planners, postcards, and [GAP]",
                correctAnswer: "STAMPS",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "parking is free during [GAP] and weekends",
                correctAnswer: "EVENINGS",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            type: "multiple_choice_multiple_answers",
            instructions:
              "<p>Questions 11 and 12</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which <strong>TWO</strong> age groups are booking more holidays with Horizon Escapes than before?</p>",
            questions: [
              {
                id: "q11-12",
                questionNumber: "11-12",
                text: "",
                correctAnswer: ["D", "E"],
              },
            ],
            options: [
              { id: "A", text: "18-29 years" },
              { id: "B", text: "33-45 years" },
              { id: "C", text: "40-52 years" },
              { id: "D", text: "50-59 years" },
              { id: "E", text: "Over 60 years" },
            ],
          },
          {
            type: "multiple_choice_multiple_answers",
            instructions:
              "<p>Questions 13 and 14</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which <strong>TWO</strong> reasons are mentioned for the rising interest in activity-based vacations?</p>",
            questions: [
              {
                id: "q13-14",
                questionNumber: "13-14",
                text: "",
                correctAnswer: ["C", "D"],
              },
            ],
            options: [
              { id: "A", text: "Travelers make business connections" },
              { id: "B", text: "Participants enjoy learning exciting sports" },
              {
                id: "C",
                text: "Trips offer a break from commercialized areas",
              },
              { id: "D", text: "Packages are cheaper than standard tours" },
              { id: "E", text: "Activities help travelers develop new skills" },
            ],
          },
          {
            instructions:
              "<p>Questions 15-17</p><p>Choose the correct letter, <strong>A, B or C</strong>.</p>",
            questions: [
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text:
                  "What is Horizon Escapes doing to grow its sculpture retreats?",
                options: [
                  "A. Adding new countries to the program",
                  "B. Expanding the range of difficulty levels",
                  "C. Hiring more instructors",
                ],
                correctAnswer: "C",
              },
              {
                id: "q16",
                questionNumber: 16,
                type: "mcq",
                text:
                  "How are Horizon Escapes' culinary holidays different from others?",
                options: [
                  "A. They focus on recipes from multiple cultures",
                  "B. They are exclusively vegetarian",
                  "C. They highlight cooking from the destination country",
                ],
                correctAnswer: "A",
              },
              {
                id: "q17",
                questionNumber: 17,
                type: "mcq",
                text:
                  "What does the speaker mention about the photography holidays?",
                options: [
                  "A. Participants get help with selling",
                  "B. Tutors offer personalized instruction",
                  "C. All trips are based in urban settings",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 18-20</p><p>Complete the table below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p>",
            questions: [
              {
                id: "q18-20-table",
                questionNumber: 18,
                type: "table_fill_in_the_blank",
                tableData: [
                  ["Location", "Main focus", "Other comments"],
                  [
                    "Austria and Spain",
                    "General health",
                    "Individual programs; Reduces 18. [INPUT]",
                  ],
                  ["Cyprus", "19. [INPUT]", "Outdoor classes on the beach"],
                  [
                    "Peru",
                    "Trail cycling",
                    "Several routes available; one version designed for 20. [INPUT]",
                  ],
                ],
                correctAnswer: {
                  q18: "STRESS",
                  q19: "WEIGHT",
                  q20: "FAMILIES",
                },
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-26</p><p>Complete the flow-chart below.</p><p>Choose <strong>SIX</strong> answers from the box and write the correct letter, <strong>A-H</strong>, next to Questions 21-26.</p><h3>STEPS FOR CONDUCTING THE CASE STUDY</h3><p><strong>(A)</strong> patterns <strong>(B)</strong> names <strong>(C)</strong> sources <strong>(D)</strong> questions <strong>(E)</strong> employees <strong>(F)</strong> recommendations <strong>(G)</strong> visuals <strong>(H)</strong> officials</p>",
            questions: [
              {
                id: "q21-26",
                type: "flow_chart",
                steps: [
                  {
                    questionNumber: 21,
                    text:
                      "Read relevant articles and summarise key points, also noting [GAP]",
                    correctAnswer: "F",
                  },
                  {
                    questionNumber: "",
                    text:
                      "<strong>Choose a particular issue to explore</strong>",
                  },
                  {
                    questionNumber: 22,
                    text: "Identify interviewees - these could be site [GAP],",
                    correctAnswer: "E",
                  },
                  {
                    questionNumber: 23,
                    text: "visitors, or tourism [GAP]",
                    correctAnswer: "H",
                  },
                  {
                    questionNumber: "",
                    text:
                      "Write and conduct interviews, and if possible, request statistical data",
                  },
                  {
                    questionNumber: 24,
                    text:
                      "Confirm whether [GAP] can be mentioned or if anonymity is preferred",
                    correctAnswer: "B",
                  },
                  {
                    questionNumber: "",
                    text: "<strong>ANALYSIS</strong>",
                  },
                  {
                    questionNumber: 25,
                    text:
                      "Review data of main issues and try to identify any [GAP]",
                    correctAnswer: "A",
                  },
                  {
                    questionNumber: 26,
                    text:
                      "Decide how to present the information clearly, using [GAP]",
                    correctAnswer: "G",
                  },
                ],
              },
            ],
          },
          {
            instructions:
              "<p>Questions 27-30</p><p>Choose the correct letter, <strong>A, B or C</strong>.</p>",
            questions: [
              {
                id: "q27",
                questionNumber: 27,
                type: "mcq",
                text:
                  "Emma and Leo agree one reason why visitor numbers to Redridge Fort are low is that",
                options: [
                  "A. the website is unappealing",
                  "B. transport to the site is unreliable",
                  "C. the site is lacking in interesting features",
                ],
                correctAnswer: "A",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "mcq",
                text:
                  "Emma and Leo agree that the biggest obstacle to a visitor centre would be",
                options: [
                  "A. securing enough funding",
                  "B. locating a suitable space",
                  "C. gaining the necessary approval",
                ],
                correctAnswer: "C",
              },
              {
                id: "q29",
                questionNumber: 29,
                type: "mcq",
                text:
                  "What does Leo say about the current situation in Redridge town?",
                options: [
                  "A. There's not much for locals to do",
                  "B. There's a lack of job training",
                  "C. Young professionals are staying longer",
                ],
                correctAnswer: "A",
              },
              {
                id: "q30",
                questionNumber: 30,
                type: "mcq",
                text:
                  "According to Emma, one way to protect the site from future environmental harm would be to",
                options: [
                  "A. restrict where visitors can go",
                  "B. reduce the number of tourists",
                  "C. introduce mandatory tours",
                ],
                correctAnswer: "A",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-40</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p><h3>The Impact of Environmental Change on Frogs</h3>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "<strong>Lead (Pb)</strong><br><ul><li>Once used in paints and pipes</li><li>Emitted into air during [GAP]</li>",
                correctAnswer: "SMELTING",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "<li>Was thought to affect only animals that eat fish</li><li>Now also known to affect those that eat [GAP]</li></ul>",
                correctAnswer: "INSECTS",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "<strong>Research by Dr. Hannah Cole</strong><br><ul><li>Studying subtle effects (e.g. changes in [GAP])</li>",
                correctAnswer: "BEHAVIOUR",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text:
                  "<li>Lead may affect brain function, especially [GAP]</li>",
                correctAnswer: "MEMORY",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text: "<li>Male frogs learn mating calls from older [GAP]</li>",
                correctAnswer: "MALES",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "<li>Contaminated frogs produce calls that are less [GAP]</li>",
                correctAnswer: "VARIED",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text: "<li>These frogs may be less [GAP] to females</li></ul>",
                correctAnswer: "APPEALING",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "<strong>Method</strong><br><ul><li>Combines controlled lab experiments with studies in [GAP]</li>",
                correctAnswer: "HABITATS",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "<li>Controlled settings reduce undetermined [GAP]</li></ul>",
                correctAnswer: "FACTORS",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "<strong>Human Impact</strong><br><ul><li>Frogs with lead may be eaten by humans. Lead can affect unborn babies if consumed by a [GAP]</li></ul>",
                correctAnswer: "WOMAN",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-14",
    moduleId: "listening",
    title: "IELTS Listening Test 14",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 14/IELTS Listening Practice Test 14.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-4</p><p>Complete the notes below.</p><p>Write <strong>TWO WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>WELLNESS CENTRE MEMBERSHIP</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text:
                  "Facilities include: <ul><li>gym</li><li>heated pool</li><li>no hot tub, but there's a [GAP]</li>",
                correctAnswer: "STEAM ROOM",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "<li>[GAP] court available (booking required)</li>",
                correctAnswer: "BASKETBALL",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text: "<li>[GAP] club not offered</li></ul>",
                correctAnswer: "CRICKET",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text:
                  "Opening hours:<ul><li>Weekdays... 6:45-22:15</li><li>Weekends... 7:30-19:30</li></ul><br>Cost to join:<ul><li>£60 deposit,</li><li>£[GAP] each year, paid in instalments.</li></ul>",
                correctAnswer: "420",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 5-10</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p><h3>WELLNESS CENTRE MEMBERSHIP</h3>",
            questions: [
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "<strong>Procedure:</strong><br>fill a [GAP]",
                correctAnswer: "FORM",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "choose a [GAP]",
                correctAnswer: "PASSWORD",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "receive a digital [GAP]",
                correctAnswer: "NEWSLETTER",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "you can meet on any day except [GAP]",
                correctAnswer: "WEDNESDAYS",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "Name: Claire Johnson<br>Website address: [GAP].org",
                correctAnswer: "WELLNESSCENTRE",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "Mobile no: [GAP]",
                correctAnswer: "07392042451",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-16</p><p>Choose the correct letter, <strong>A, B or C</strong>.</p><h3>Willow Park Estate Tour</h3>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "mcq",
                text: "What will visitors see during today's guided tour?",
                options: [
                  "A. The creamery and the barn",
                  "B. The grove and the barn",
                  "C. The creamery and the grove",
                ],
                correctAnswer: "C",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "mcq",
                text: "How has Willow Park helped the kea birds?",
                options: [
                  "A. By offering food in the winter",
                  "B. By stopping the use of chemicals",
                  "C. By preventing them from flying",
                ],
                correctAnswer: "B",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "mcq",
                text:
                  "What is mentioned as the main reason for the decline in farmland bird populations?",
                options: [
                  "A. Habitat destruction",
                  "B. Climate change",
                  "C. Illegal hunting",
                ],
                correctAnswer: "A",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "mcq",
                text: "What will the new bird sanctuary be called?",
                options: [
                  "A. The Harold Thompson Sanctuary",
                  "B. The Lillian Sanctuary",
                  "C. The Lia Sanctuary",
                ],
                correctAnswer: "C",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "mcq",
                text: "What are the visiting experts going to do?",
                options: [
                  "A. Give advice on supporting wildlife",
                  "B. Build bird shelters around the shrubs",
                  "C. Replace the existing vegetation",
                ],
                correctAnswer: "A",
              },
              {
                id: "q16",
                questionNumber: 16,
                type: "mcq",
                text:
                  "What advice does the speaker give for walking near the stream?",
                options: [
                  "A. Wear rubber boots",
                  "B. Roll up your trousers",
                  "C. Avoid the area completely",
                ],
                correctAnswer: "B",
              },
            ],
          },
          {
            type: "multiple_choice_multiple_answers",
            instructions:
              "<p>Questions 17-18</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which were the TWO main sources of income used to set up the project?</p>",
            questions: [
              {
                id: "q17-18",
                questionNumber: "17-18",
                text: "",
                correctAnswer: ["C", "D"],
              },
            ],
            options: [
              { id: "A", text: "The Australian Conservation Trust" },
              { id: "B", text: "The national government" },
              { id: "C", text: "Selling estate products" },
              { id: "D", text: "Local municipality" },
              { id: "E", text: "Tourist contributions" },
            ],
          },
          {
            type: "multiple_choice_multiple_answers",
            instructions:
              "<p>Questions 19-20</p><p>Choose <strong>TWO</strong> letters, A-E.</p><p>Which two regions do most of the tourists come from?</p>",
            questions: [
              {
                id: "q19-20",
                questionNumber: "19-20",
                text: "",
                correctAnswer: ["A", "D"],
              },
            ],
            options: [
              { id: "A", text: "Asia" },
              { id: "B", text: "Europe" },
              { id: "C", text: "North America" },
              { id: "D", text: "South Africa" },
              { id: "E", text: "South America" },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-26</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p><h3>Students' project on using statistics</h3><p><strong>Student A - Meera</strong></p>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "fill_in_the_blank",
                text: "Topic: The age of [GAP] in bicycle accidents.",
                correctAnswer: "RIDERS",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "fill_in_the_blank",
                text:
                  "Statistics are mainly based on data from [GAP] companies.",
                correctAnswer: "INSURANCE",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "fill_in_the_blank",
                text:
                  "Problem: Not all bike accidents are reported because people aren't obliged to report them. They need to include statistics that don't involve [GAP].",
                correctAnswer: "INJURIES",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "fill_in_the_blank",
                text:
                  "To find some good statistics, Meera should look at a variety of [GAP].",
                correctAnswer: "SOURCES",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "fill_in_the_blank",
                text:
                  "Method used for further research: sending out [GAP] to many different people.",
                correctAnswer: "SURVEYS",
              },
              {
                id: "q26",
                questionNumber: 26,
                type: "fill_in_the_blank",
                text:
                  "Meera now feels that she needs more guidance on analysing the [GAP].",
                correctAnswer: "DATA",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 27-30</p><p>Complete the flow-chart below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p>",
            questions: [
              {
                id: "q27-30",
                type: "flow_chart",
                steps: [
                  {
                    questionNumber: 27,
                    text:
                      "Refining Student B's project on weekly statistics for road accidents [GAP] for accidents in week",
                    correctAnswer: "SUNDAY",
                  },
                  {
                    questionNumber: 28,
                    text:
                      "Accidents in urban areas may increase because of the number of [GAP]",
                    correctAnswer: "PEDESTRIANS",
                  },
                  {
                    questionNumber: 29,
                    text: "Compare statistics for [GAP] and summer",
                    correctAnswer: "WINTER",
                  },
                  {
                    questionNumber: 30,
                    text: "Compare [GAP] and spring",
                    correctAnswer: "AUTUMN",
                  },
                  {
                    questionNumber: "",
                    text: "Conclusion: statistics are not as expected",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-40</p><p>Complete the notes below.</p><p>Write <strong>ONE WORD ONLY</strong> for each answer.</p><h3>The Impact of Weather on People's Mood</h3>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "fill_in_the_blank",
                text:
                  "<strong>Sunlight</strong><br>Encourages the production of a [GAP] which improves mood.",
                correctAnswer: "HORMONE",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "fill_in_the_blank",
                text:
                  "Lack of sunlight can lead to a condition called [GAP] causing sadness and fatigue.",
                correctAnswer: "SAD",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "fill_in_the_blank",
                text:
                  "<strong>Temperature:</strong><br>Mild warmth promotes [GAP] and relaxation.",
                correctAnswer: "FRIENDLINESS",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "fill_in_the_blank",
                text: "Intense heat may reduce [GAP] and increase aggression.",
                correctAnswer: "FOCUS",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "fill_in_the_blank",
                text:
                  "<strong>Humidity:</strong><br>-High humidity levels can make people feel [GAP].",
                correctAnswer: "SLUGGISH",
              },
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text: "Drier climates are linked to greater energy and [GAP].",
                correctAnswer: "CONCENTRATION",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text:
                  "<strong>Rain:</strong><br>The sound of rain can be [GAP] for some people to concentrate and relax.",
                correctAnswer: "CALMING",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "People in rainy regions adapt and are less affected by [GAP] weather changes.",
                correctAnswer: "SHORT-TERM",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text:
                  "<strong>Wind:</strong><br>Strong winds can lead to feelings of [GAP].",
                correctAnswer: "UNEASE",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text: "Gentle breezes are generally associated with [GAP].",
                correctAnswer: "CALM",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "listening-test-15",
    moduleId: "listening",
    title: "IELTS Listening Test 15",
    description: "A full-length Academic Listening practice test.",
    duration: 40,
    audioUrl:
      "Listening_tests_audio/Test 15/IELTS Listening Practice Test 15.mp3",
    sections: [
      {
        id: "section-1",
        title: "Section 1",
        questionGroups: [
          {
            instructions:
              "<p>Questions 1-4</p><p>Complete the form below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>Cambridge Language Centre – Registration</h3>",
            questions: [
              {
                id: "q1",
                questionNumber: 1,
                type: "fill_in_the_blank",
                text: "Caller's surname: [GAP]",
                correctAnswer: "KUMAR",
              },
              {
                id: "q2",
                questionNumber: 2,
                type: "fill_in_the_blank",
                text: "Recommended class: [GAP]",
                correctAnswer: "LOWER-INTERMEDIATE",
              },
              {
                id: "q3",
                questionNumber: 3,
                type: "fill_in_the_blank",
                text: "Class day: [GAP]",
                correctAnswer: "THURSDAY",
              },
              {
                id: "q4",
                questionNumber: 4,
                type: "fill_in_the_blank",
                text: "Course length: [GAP]",
                correctAnswer: "TWELVE WEEKS",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 5-10</p><p>Complete the form below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p><h3>Cambridge Language Centre – Registration</h3>",
            questions: [
              {
                id: "q5",
                questionNumber: 5,
                type: "fill_in_the_blank",
                text: "Full course fee: £[GAP]",
                correctAnswer: "240",
              },
              {
                id: "q6",
                questionNumber: 6,
                type: "fill_in_the_blank",
                text: "Students should bring: [GAP]",
                correctAnswer: "NOTEBOOK",
              },
              {
                id: "q7",
                questionNumber: 7,
                type: "fill_in_the_blank",
                text: "Needed for student card: [GAP]",
                correctAnswer: "PASSPORT PHOTO",
              },
              {
                id: "q8",
                questionNumber: 8,
                type: "fill_in_the_blank",
                text: "Placement test includes: [GAP] and interview",
                correctAnswer: "WRITTEN TEST",
              },
              {
                id: "q9",
                questionNumber: 9,
                type: "fill_in_the_blank",
                text: "Missed lessons can be watched as [GAP]",
                correctAnswer: "VIDEOS",
              },
              {
                id: "q10",
                questionNumber: 10,
                type: "fill_in_the_blank",
                text: "Parking spaces are [GAP]",
                correctAnswer: "LIMITED",
              },
            ],
          },
        ],
      },
      {
        id: "section-2",
        title: "Section 2",
        questionGroups: [
          {
            instructions:
              "<p>Questions 11-15</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p>",
            questions: [
              {
                id: "q11",
                questionNumber: 11,
                type: "fill_in_the_blank",
                text:
                  "Much of the rubbish collected on beaches is carried there by [GAP].",
                correctAnswer: "TIDES",
              },
              {
                id: "q12",
                questionNumber: 12,
                type: "fill_in_the_blank",
                text:
                  "Volunteers are provided with gloves but must bring their own sturdy [GAP].",
                correctAnswer: "FOOTWEAR",
              },
              {
                id: "q13",
                questionNumber: 13,
                type: "fill_in_the_blank",
                text:
                  "Participants should carry a [GAP] since no food is available nearby.",
                correctAnswer: "PACKED LUNCH",
              },
              {
                id: "q14",
                questionNumber: 14,
                type: "fill_in_the_blank",
                text:
                  "Volunteers should avoid touching sharp objects and instead inform a [GAP].",
                correctAnswer: "TEAM LEADER",
              },
              {
                id: "q15",
                questionNumber: 15,
                type: "fill_in_the_blank",
                text:
                  "Everyone is expected to be on site by [GAP] before the clean-up begins.",
                correctAnswer: "8:45",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 16-20</p><p>Match each feature of the programme with its correct explanation.</p><p>Write the correct letter, A-G, next to Questions 16-20.</p>",
            type: "matching",
            questions: [
              {
                id: "l15-q16-20",
                questionNumber: 16,
              },
            ],
            matchingOptions: {
              title: "Explanations",
              A: "Teaching young people about marine conservation issues",
              B: "Recording items gathered to inform national policies",
              C:
                "Sharing experiences with residents who know the coastline well",
              D: "Gaining practical skills by guiding teams",
              E:
                "Cooperating with environmental groups to address wildlife threats",
              F: "Encouraging punctual attendance for efficiency",
              G: "Providing financial rewards for outstanding service",
            },
            matchingItems: [
              {
                number: 16,
                text: "Community involvement",
                correctAnswer: "C",
              },
              {
                number: 17,
                text: "Educational outreach",
                correctAnswer: "A",
              },
              {
                number: 18,
                text: "Data collection",
                correctAnswer: "B",
              },
              {
                number: 19,
                text: "Partnerships",
                correctAnswer: "E",
              },
              {
                number: 20,
                text: "Volunteer development",
                correctAnswer: "D",
              },
            ],
          },
        ],
      },
      {
        id: "section-3",
        title: "Section 3",
        questionGroups: [
          {
            instructions:
              "<p>Questions 21-25</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q21",
                questionNumber: 21,
                type: "mcq",
                text: "Why did Emma criticise Raj's introduction?",
                options: [
                  "A) It was overloaded with statistics",
                  "B) It failed to emphasise the main focus",
                  "C) It relied too much on case studies",
                ],
                correctAnswer: "B",
              },
              {
                id: "q22",
                questionNumber: 22,
                type: "mcq",
                text:
                  "Why does Emma insist on defining “renewable transition”?",
                options: [
                  "A) People may assume it means only solar power",
                  "B) Many confuse it with overall energy efficiency",
                  "C) Some think it refers just to government subsidies",
                ],
                correctAnswer: "A",
              },
              {
                id: "q23",
                questionNumber: 23,
                type: "mcq",
                text:
                  "What is the drawback of relying on survey data, according to Emma?",
                options: [
                  "A) Respondents give answers too casually",
                  "B) Participants are reluctant to discuss personal opinions",
                  "C) Results are influenced by income levels",
                ],
                correctAnswer: "A",
              },
              {
                id: "q24",
                questionNumber: 24,
                type: "mcq",
                text:
                  "Why should Raj acknowledge the limited number of regions studied?",
                options: [
                  "A) To compare the results with international trends",
                  "B) To avoid appearing as though the scope was ignored",
                  "C) To explain why quantitative data was excluded",
                ],
                correctAnswer: "B",
              },
              {
                id: "q25",
                questionNumber: 25,
                type: "mcq",
                text:
                  "What guidance does Emma give about using interview transcripts?",
                options: [
                  "A) Select only brief extracts that demonstrate viewpoints",
                  "B) Avoid including interview material completely",
                  "C) Provide full transcripts as supplementary evidence",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 26-30</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>",
            questions: [
              {
                id: "q26",
                questionNumber: 26,
                type: "fill_in_the_blank",
                text:
                  "Emma advises Raj to keep only a few clear [GAP] instead of using too many graphs.",
                correctAnswer: "DIAGRAMS",
              },
              {
                id: "q27",
                questionNumber: 27,
                type: "fill_in_the_blank",
                text:
                  "Policies should be arranged according to [GAP] rather than chronological order.",
                correctAnswer: "THEMATIC GROUPING",
              },
              {
                id: "q28",
                questionNumber: 28,
                type: "fill_in_the_blank",
                text: "In the conclusion, the research must stress its [GAP].",
                correctAnswer: "ARGUMENTS",
              },
              {
                id: "q29",
                questionNumber: 29,
                type: "fill_in_the_blank",
                text: "Emma tells Raj to replace online blogs with [GAP].",
                correctAnswer: "ONLINE JOURNALS",
              },
              {
                id: "q30",
                questionNumber: 30,
                type: "fill_in_the_blank",
                text:
                  "Emma says that, with the revisions, their presentation will be both coherent and [GAP].",
                correctAnswer: "CONVINCING",
              },
            ],
          },
        ],
      },
      {
        id: "section-4",
        title: "Section 4",
        questionGroups: [
          {
            instructions:
              "<p>Questions 31-35</p><p>Choose the correct letter, A, B or C.</p>",
            questions: [
              {
                id: "q31",
                questionNumber: 31,
                type: "mcq",
                text: "What makes basil seeds popular in drinks and desserts?",
                options: [
                  "A) Their flavour resembles sesame",
                  "B) Their quick ability to form a gel",
                  "C) Their natural sweetness",
                ],
                correctAnswer: "B",
              },
              {
                id: "q32",
                questionNumber: 32,
                type: "mcq",
                text: "Why are basil seeds important for vegetarian diets?",
                options: [
                  "A) They contain essential omega-3 fatty acids",
                  "B) They are higher in protein than chia seeds",
                  "C) They are richer in minerals than most nuts",
                ],
                correctAnswer: "A",
              },
              {
                id: "q33",
                questionNumber: 33,
                type: "mcq",
                text: "What does modern research confirm about basil seeds?",
                options: [
                  "A) They are highly effective against respiratory problems",
                  "B) They assist with digestive processes",
                  "C) They reduce inflammation in most cases",
                ],
                correctAnswer: "B",
              },
              {
                id: "q34",
                questionNumber: 34,
                type: "mcq",
                text:
                  "What is a common traditional culinary use of basil seeds?",
                options: [
                  "A) Adding them to curries for spice",
                  "B) Mixing them into sweet drinks",
                  "C) Cooking them with rice and lentils",
                ],
                correctAnswer: "B",
              },
              {
                id: "q35",
                questionNumber: 35,
                type: "mcq",
                text: "Why must basil seeds not be eaten dry?",
                options: [
                  "A) They expand too quickly inside the body",
                  "B) They may lose their nutrients during digestion",
                  "C) They can create a bitter taste in the throat",
                ],
                correctAnswer: "A",
              },
            ],
          },
          {
            instructions:
              "<p>Questions 36-40</p><p>Complete the sentences below.</p><p>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>",
            questions: [
              {
                id: "q36",
                questionNumber: 36,
                type: "fill_in_the_blank",
                text:
                  "Basil seeds may help with weight control because they reduce [GAP].",
                correctAnswer: "APPETITE",
              },
              {
                id: "q37",
                questionNumber: 37,
                type: "fill_in_the_blank",
                text: "To maintain quality, seeds should be stored in [GAP].",
                correctAnswer: "AIRTIGHT CONTAINERS",
              },
              {
                id: "q38",
                questionNumber: 38,
                type: "fill_in_the_blank",
                text:
                  "The food industry often promotes basil seeds in products such as [GAP].",
                correctAnswer: "ENERGY DRINKS",
              },
              {
                id: "q39",
                questionNumber: 39,
                type: "fill_in_the_blank",
                text: "Basil requires less [GAP] to grow.",
                correctAnswer: "WATER",
              },
              {
                id: "q40",
                questionNumber: 40,
                type: "fill_in_the_blank",
                text:
                  "For many cultures, basil seeds have long been part of daily [GAP].",
                correctAnswer: "DIET",
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
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
            Save the Turtles
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-green-800">A.</span>
            Leatherback turtles follow the general sea turtle body plan of having a large,
            flattened, round body with two pairs of very large flippers and a short tail.
            Like other sea turtles, the leatherback's flattened forelimbs are adapted for
            swimming in the open ocean. Claws are absent from both pairs of flippers. The
            Leatherback's flippers are the largest in proportion to its body among extant
            sea turtles. Leatherback's front flippers can grow up to 2.7 meters (9 ft.) in
            large specimens, the largest flippers (even in comparison to its body) of any
            sea turtle. As the last surviving member of its family, the leatherback turtle
            has several distinguishing characteristics that differentiate it from other sea
            turtles. Its most notable feature is that it lacks the bony carapace of the
            other extant sea turtles.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-green-800">B.</span>
            During the past month, four turtles have washed up along Irish coasts from
            Wexford to Kerry. These turtles are more typical of warmer waters and only
            occur in Irish waters when they stray off course. It is likely that they may
            have originated from Florida, America. Two specimens have been taken to Coastal
            and Marine Resources Centre (stored at the National Maritime College),
            University College Cork, where a necropsy (post mortem for animals) will be
            conducted to establish their age, sex and their exact origin. During this same
            period, two leatherback turtles were found in Scotland, and a rare Kemp's
            Ridley turtle was found in Wales, thus making it an exceptional month for
            stranded turtles in Ireland and the UK.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-green-800">C.</span>
            Actually, there has been extensive research conducted regarding the sea
            turtles’ abilities to return to their nesting regions and sometimes exact
            locations from hundreds of miles away. In the water, their path is greatly
            affected by powerful currents. Despite their limited vision, and lack of
            landmarks in the open water, turtles are able to retrace their migratory paths.
            Some explanations of this phenomenon have found that sea turtles can detect the
            angle and intensity of the earth’s magnetic fields.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-green-800">D.</span>
            However, Loggerhead turtles are not normally found in Irish waters, because
            water temperatures here are far too cold for their survival. Instead, adult
            loggerheads prefer the warmer waters of the Mediterranean, the Caribbean and
            North America's east coast. The four turtles that were found have probably
            originated from the North American population of loggerheads. However it will
            require genetic analysis to confirm this assumption. It is thought that after
            leaving their nesting beach as hatchlings (when they measure 4.5 cm in length),
            these tiny turtles enter the North Atlantic Gyre (a giant circular ocean
            current) that takes them from America, across to Europe (Azores area), down
            towards North Africa, before being transported back again to America via a
            different current. This remarkable round trip may take many years during which
            these tiny turtles grow by several centimeters a year. Loggerheads may
            circulate around the North Atlantic several times before they settle in the
            coastal waters of Florida or the Caribbean.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-green-800">E.</span>
            These four turtles were probably on their way around the Atlantic when they
            strayed a bit too far north from the Gulf Stream. Once they did, their fate was
            sealed, as the cooler waters of the North East Atlantic are too cold for
            loggerheads (unlike leatherback turtles which have many anatomical and
            physiological adaptations to enable them to swim in our seas). Once in cool
            waters, the body of a loggerhead begins to shut down as they get 'cold
            stunned', then get hypothermia and die.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-green-800">F.</span>
            Leatherbacks are in (among others) is the imminent danger of extinction. A
            critical factor harvesting of eggs from nests. Valued as a food delicacy,
            Leatherback eggs are falsely touted to have aphrodisiacal properties in some
            cultures. The leatherback, unlike the Green Sea turtle, is not often killed for
            its meat; however, the increase in human populations coupled with the growing
            black market trade has escalated their egg depletion. Other critical factors
            causing the leatherbacks’ decline are pollution such as plastics (leatherbacks
            eat this debris thinking it is jellyfish; fishing practices such as long line
            fishing and gill nets, and development on habitat areas. Scientists have
            estimated that there are only about 35,000 Leatherback turtles in the world.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-green-800">G.</span>
            We are often unable to understand the critical impact a species has on the
            environment—that is, until that species becomes extinct. Even if we do not know
            the role a creature plays in the health of the environment, past lessons have
            taught US enough to know that every animal and plant is one important link in
            the integral chain of nature. Some scientists now speculate that the
            Leatherback may play an important role in the recovery of diminishing fish
            populations. Since the Leatherback consumes its weight in jellyfish per day, it
            helps to keep Jellyfish populations in check. Jellyfish consume large
            quantities of fish larvae. The rapid decline in Leatherback populations over
            the last 50 years has been accompanied by a significant increase in jellyfish
            and a marked decrease in fish in our oceans. Saving sea turtles is an
            International endeavor.
        </p>`,
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
          <!-- Main title for the document -->
        <h1 class="text-center text-3xl md:text-4xl font-extrabold text-indigo-800 mb-6">
            Corporate Social Responsibility
        </h1>

        <!-- Introduction -->
        <p class="mb-4">
            Broadly speaking, proponents of CSR have used four arguments to make their case: moral
            obligation, sustainability, license to operate, and reputation. The moral
            appeal—arguing that companies have a duty to be good citizens and to do the right thing—is prominent in the goal of Business for Social Responsibility,
            the leading nonprofit CSR business association in the United States. It asks
            that its members “achieve commercial success in ways that honor ethical values
            and respect people, communities, and the natural environment.” Sustainability
            emphasizes environmental and community stewardship.
        </p>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-indigo-700">A.</span>
            An excellent definition was developed in the 1980s by Norwegian Prime Minister
            Gro Harlem Brundtland and used by the World Business Council for Sustainable
            Development "Meeting the needs of the present without compromising the
            ability of future generations to meet their own needs.” The notion of license
            to operate derives from the fact that every company needs tacit or explicit
            permission from governments, communities, and numerous other stakeholders to do
            business. Finally, reputation is used by many companies to justify CSR
            initiatives on the grounds that they will improve a company's image, strengthen
            its brand, enliven morale, and even raise the value of its stock.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-indigo-700">B.</span>
            To advance CSR, we must root it in a broad understanding of the
            interrelationship between a corporation and society while at the same time
            anchoring it in the strategies and activities of specific companies. To say
            broadly that business and society need each other might seem like a cliché, but
            it is also the basic truth that will pull companies out of the muddle that
            their current corporate-responsibility thinking has created Successful
            corporations need a healthy society. Education, health care, and equal
            opportunity are essential to a productive workforce. Safe products and working
            conditions not only attract customers but lower the internal costs of
            accidents. Efficient utilization of land, water, energy, and other natural
            resources makes business more productive. Good government, the rule of law, and
            property rights are essential for efficiency and innovation. Strong regulatory
            standards protect both consumers and competitive companies from exploitation.
            Ultimately, a healthy society creates expanding demand for business, as more
            human needs are met and aspirations grow. Any business that pursues its ends at
            the expense of the society in which it operates will find its success to be
            illusory and ultimately temporary. At the same time, a healthy society needs
            successful companies. No social program can rival the business sector when it
            comes to creating the jobs, wealth, and innovation that improve standards of
            living and social conditions over time.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-indigo-700">C.</span>
            A company’s impact on society also changes over time, as social standards
            evolve and science progresses. Asbestos, now understood as a serious health
            risk, was thought to be safe in the early 1900s, given the scientific knowledge
            then available. Evidence of its risks gradually mounted for more than 50 years
            before any company was held liable for the harms it can cause. Many firms that
            failed to anticipate the consequences of this evolving body of research have
            been bankrupted by the results. No longer can companies be content to monitor
            only the obvious social impacts of today. Without a careful process for
            identifying evolving social effects of tomorrow, firms may risk their very
            survival.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-indigo-700">D.</span>
            No business can solve all of society’s problems or bear the cost of doing so.
            Instead, each company must select issues that intersect with its particular
            business. Other social agendas are best left to those companies in other
            industries, NGOs, or government institutions that are better positioned to
            address them. The essential test that should guide CSR is not whether a cause
            is worthy but whether it presents an opportunity to create shared value— that
            is, a meaningful benefit for society that is also valuable to the business.
            However, Corporations are not responsible for all the world’s problems, nor do
            they have the resources to solve them all Each company can identify the
            particular set of societal problems that it is best equipped to help resolve
            and from which it can gain the greatest competitive benefit. Addressing social
            issues by creating shared value will lead to self-sustaining solutions that do
            not depend on private or government subsidies. When a well-run business applies
            its vast resources, expertise, and management talent to problems that it
            understands and in which it has a stake, it can have a greater impact on social
            good than any other institution or philanthropic organization.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-indigo-700">E.</span>
            The best corporate citizenship initiatives involve far more than writing a
            check: They specify clear, measurable goals and track results over time. A good
            example is GE’s program to adopt underperforming public high schools near
            several of its major U.S. facilities. The company contributes between $250,000
            and $1 million over a five-year period to each school and makes in-kind
            donations as well GE managers and employees take an active role by working with
            school administrators to assess needs and mentor or tutor students. In an
            independent study of ten schools in the program between 1989 and 1999, nearly
            all showed significant improvement, while the graduation rate in four of the
            five worst performing schools doubled from an average of 30% to 60%. Effective
            corporate citizenship initiatives such as this one create goodwill and improve
            relations with local governments and other important constituencies. What's
            more, GE’s employees feel great pride in their participation. Their effect is
            inherently limited, however. No matter how beneficial the program is, it
            remains incidental to the company’s business, and the direct effect on GE's
            recruiting and retention is modest.
        </p>
        
        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-indigo-700">F.</span>
            Microsoft's Working Connections partnership with the American Association of
            Community Colleges (AACC) is a good example of a shared-value opportunity
            arising from investments in context. The shortage of information technology
            workers is a significant constraint on Microsoft’s growth; currently, there are
            more than 450,000 unfilled IT positions in the United States alone. Community
            colleges, with an enrollment of 11.6 million students, representing 45% of all
            U.S. undergraduates, could be a major solution. Microsoft recognizes, however,
            that community colleges face special challenges: IT curricula are not
            standardized, technology used in classrooms is often outdated, and there are no
            systematic professional development programs to keep faculty up to date.
            Microsoft's $50 million five-year initiative was aimed at all three problems.
            In addition to contributing money and products, Microsoft sent employee
            volunteers to colleges to assess needs, contribute to curriculum development,
            and create faculty development institutes. Note that in this case, volunteers
            and assigned staff were able to use their core professional skills to address a
            social need, a far cry from typical volunteer programs. Microsoft has achieved
            results that have benefited many communities while having a direct—and
            potentially significant—impact on the company.
        </p>
        
        <!-- Section G -->
        <p>
            <span class="font-bold text-indigo-700">G.</span>
            At the heart of any strategy is a unique value proposition: a set of needs a
            company can meet for its chosen customers that others cannot. The most
            strategic CSR occurs when a company adds a social dimension to its value
            proposition, making social impact integral to the overall strategy. Consider
            Whole Foods Market, whose value proposition is to sell organic, natural and
            healthy food products to customers who are passionate about food and the
            environment. The company's sourcing emphasizes purchases from local farmers
            through each store's procurement process. Buyers screen out foods containing
            any of nearly 100 common ingredients that the company considers unhealthy or
            environmentally damaging. The same standards apply to products made internally.
            Whole Foods’ commitment to natural and environmentally friendly operating
            practices extends well beyond sourcing. Stores are constructed using a minimum
            of virgin raw materials. Recently, the company purchased renewable wind energy
            credits equal to 100% of its electricity use in all of its stores and facilities,
            the only Fortune 500 Company to offset its electricity consumption entirely.
            Spoiled produce and biodegradable waste are trucked to regional centers for
            composting. Whole Foods' vehicles are being converted to run on biofuels. Even
            the cleaning products used in its stores are environmentally friendly. And
            through its philanthropy, the company has created the Animal Compassion
            Foundation to develop more natural and humane ways of raising farm animals. In
            short, nearly every aspect of the company’s value chain reinforces the social
            dimensions of its value proposition, distinguishing Whole Foods from its
            competitors. From Harvard business review 2007.
        </p>
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
          <!-- Main title for the document -->
        <h1 class="text-center text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
            TV Addiction 2
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">A.</span>
            Excessive cravings do not necessarily involve physical substances. Gambling can
            become compulsive; sex can become obsessive. One activity, however, stands out
            for its prominence and ubiquity—the world’s most popular pastime, television.
            Most people admit to having a love-hate relationship with it. They complain
            about the “boob tube” and “couch potatoes,” then they settle into their sofas
            and grab the remote control. Parents commonly fret about their children’s
            viewing (if not their own). Even researchers who study TV for a living marvel
            at the medium’s hold on them personally. Percy Tannenbaum of the University of
            California at Berkeley has written: “Among life’s more embarrassing moments
            have been countless occasions when I am engaged in conversation in a room while
            a TV set is on, and I cannot for the life of me stop from periodically glancing
            over to the screen. This occurs not only during dull conversations but during
            reasonably interesting ones just as well.”
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">B.</span>
            Scientists have been studying the effects of television for decades, generally
            focusing on whether watching violence on TV correlates with being violent in
            real life. Less attention has been paid to the basic allure of the small
            screen—the medium, as opposed to the message.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">C.</span>
            The term “TV addiction” is imprecise and laden with value judgments, but it
            captures the essence of a very real phenomenon. Psychologists and psychiatrists
            formally define substance dependence as a disorder characterized by criteria
            that include spending a great deal of time using the substance; using it more
            often than one intends; thinking about reducing use or making repeated
            unsuccessful efforts to reduce use; giving up important social, family or
            occupational activities to use it; and reporting withdrawal symptoms when one
            stops using it.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">D.</span>
            All these criteria can apply to people who watch a lot of television. That does
            not mean that watching television, in itself, is problematic. Television can
            teach and amuse; it can reach aesthetic heights; it can provide much needed
            distraction and escape. The difficulty arises when people strongly sense that
            they ought not to watch as much as they do and yet find themselves strangely
            unable to reduce their viewing. Some knowledge of how the medium exerts its
            pull may help heavy viewers gain better control over their lives.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">E.</span>
            The amount of time people spend watching television is astonishing. On average,
            individuals in the industrialized world devote three hours a day to the
            pursuit—fully half of their leisure time, and more than on any single activity
            save work and sleep. At this rate, someone who lives to 75 would spend nine
            years in front of the tube. To some commentators, this devotion means simply
            that people enjoy TV and make a conscious decision to watch it. But if that is
            the whole story, why do so many people experience misgivings about how much
            they view? In Gallup polls in 1992 and 1999, two out of five adult respondents
            and seven out of 10 teenagers said they spent too much time watching TV. Other
            surveys have consistently shown that roughly 10 percent of adults call
            themselves TV addicts.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">F.</span>
            What is it about TV that has such a hold on US? In part, the attraction seems
            to spring from our biological ‘orienting response.’ First described by Ivan
            Pavlov in 1927, the orienting response is our instinctive visual or auditory
            reaction to any sudden or novel stimulus. It is part of our evolutionary
            heritage, a built in sensitivity to movement and potential predatory threats.
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">G.</span>
            In 1986 Byron Reeves of Stanford University, Esther Thorson of the University
            of Missouri and their colleagues began to study whether the simple formal
            features of television-cuts, edits, zooms, pans, sudden noises—activate the
            orienting response, thereby keeping attention on the screen. By watching how
            brain waves were affected by formal features, the researchers concluded that
            these stylistic tricks can indeed trigger involuntary responses and ‘derive
            their attention-al value through the evolutionary significance of detecting
            movement.... It is the form, not the content, of television that is unique.’
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">H.</span>
            The orienting response may partly explain common viewer remarks such as: “If a
            television is on, I just can’t keep my eyes off it,” “I don’t want to watch as
            much as I do, but I can’t help it,” and “I feel hypnotized when I watch
            television.” In the years since Reeves and Thorson published then pioneering
            work, researchers have delved deeper. Annie Lang’s research team at Indiana
            University has shown that heart rate decreases for four to six seconds after an
            orienting stimulus. In ads, action sequences and music videos, formal features
            frequently come at a rate of one per second, thus activating the orienting
            response continuously.
        </p>
        
        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">I.</span>
            Lang and her colleagues have also investigated whether formal features affect
            people’s memory of what they have seen. In one of their studies, participants
            watched a program and then filled out a score sheet. Increasing the frequency
            of edits (defined here as a change from one camera angle to another in the same
            visual scene) improved memory recognition, presumably because it focused
            attention on the screen. Increasing the frequency of cuts—changes to a new
            visual scene-had a similar effect but only up to a point. If the number of cuts
            exceeded 10 in two minutes, recognition dropped off sharply.
        </p>

        <!-- Section J -->
        <p class="mb-4">
            <span class="font-bold text-slate-700">J.</span>
            Producers of educational television for children have found that formal
            features can help learning. But increasing the rate of cuts and edits
            eventually overloads the brain. Music videos and commercials that use rapid
            intercutting of unrelated scenes are designed to hold attention more than they
            are to convey information. People may remember the name of the product or band,
            but the details of the ad itself float in one ear and out the other. The
            orienting response is overworked. Viewers still attend to the screen, but they
            feel tired and worn out, with little compensating psychological reward. Our ESM
            findings show much the same thing.
        </p>

        <!-- Section K -->
        <p>
            <span class="font-bold text-slate-700">K.</span>
            Sometimes the memory of the product is very subtle. Many ads today are
            deliberately oblique: they have an engaging story line, but it is hard to tell
            what they are trying to sell. Afterward you may not remember the product
            consciously. Yet advertisers believe that if they have gotten your attention,
            when you later go to the store you will feel better or more comfortable with a
            given product because you have a vague recollection of having heard of it.
        </p>
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
            type: "multiple_choice_multiple_answers",

            questions: [
              {
                id: "q31-33",

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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-blue-700 mb-6">
            Timekeeper 2: Invention of Marine Chronometer
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">A.</span>
            It was, as Dava Sobel has described a phenomenon: ‘the greatest scientific
            problem of the age’. The reality was that in the 18th century no one had ever
            made a clock that could suffer the great rolling and pitching of a ship and the
            large changes in temperature whilst still keeping time accurately enough to be
            of any use. Indeed, most of the scientific community thought such clock
            impossibility. Knowing one's position on the earth requires two very simple but
            essential coordinates; rather like using a street map where one thinks in terms
            of how far one is up/down and how far side to side.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">B.</span>
            The longitude is a measure of how far around the world one has come from home
            and has no naturally occurring base line like the equator. The crew of a given
            ship was naturally only concerned with how far round they were from their own
            particular home base. Even when in the middle of the ocean, with no land in
            sight, knowing this longitude position is very simple in theory. The key to
            knowing how far around the world you are from home is to know, at that very
            moment, what time it is back home. A comparison with your local time (easily
            found by checking the position of the Sim) will then tell you the time
            difference between you and home, and thus how far round the Earth you are from
            home.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">C.</span>
            Up until the middle of the 18th century, navigators had been unable to
            determine their position at sea with accuracy and they faced the huge attendant
            risks of shipwreck or running out of supplies before reaching then destination.
            The angular position of Moon and other bright stars was recorded in three-hour
            intervals of Greenwich Time. In order to determine longitude, sailors had to
            measure the angle between Moon center and a given star - lunar distance
            together with height of both planets using the naval sextant. The sailors also
            had to calculate the Moon’s position if seen form the center of Earth. Time
            corresponding to Greenwich Time was determined using the nautical almanac. Then
            the difference between the obtained time and local time served for calculation
            in longitude from Greenwich. The great flaw in this ‘simple’ theory was - how
            does the sailor know time back home when he is in the middle of an ocean?
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">D.</span>
            The obvious and again simple answer
            is that he takes an accurate clock with him, which he sets to home time before
            leaving. All he has to do is keep it wound up and running, and he must never
            reset the hands throughout the voyage This clock then provides ‘home time’, so
            if, for example, it is midday on board your ship and your ‘home time’ clock says
            that at that same moment it is midnight at home, you know immediately there is
            a twelve hour time-difference and you must be exactly round the other side of
            the world, 180 degrees of longitude from home.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">E.</span>
            After 1714 when the British government offered the huge sum of £20,000 for a
            solution to the problem, with the prize to be administered by die splendidly
            titled Board of Longitude. The Government prize of £20,000 was the highest of
            three sums on offer for varying degrees of accuracy, the full prize only
            payable for a method that could find the longitude at sea within half a degree.
            If the solution was to be by timekeeper (and there were other methods since the
            prize was offered for any solution to the problem), then the timekeeping
            required to achieve this goal would have to be within 2.8 seconds a day, a
            performance considered impossible for any clock at sea and unthinkable for a
            watch, even under the very best conditions.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">F.</span>
            It was this prize, worth about £2 million today, which inspired the self-taught
            Yorkshire carpenter, John Harrison, to attempt a design for a practical marine
            clock. During the latter part of his early career, he worked with his younger
            brother James. Their first major project was a revolutionary turret clock for
            the stables at Brocklesby Park, seat of the Pelham family. The clock was
            revolutionary because it required no lubrication. 18th century clock oils were
            uniformly poor and one of the major causes of failure in clocks of the period.
            Rather than concentrating on improvements to the oil, Harrison designed a clock
            which didn't need it. In 1730 Harrison created a description and drawings for a
            proposed marine clock to compete for the Longitude Prize and went to London
            seeking financial assistance. He presented his ideas to Edmond Halley, the
            Astronomer Royal. Halley referred him to George Graham, the country's foremost
            clockmaker. He must have been impressed by Harrison, for Graham personally
            loaned Harrison money to build a model of his marine clock. It took Harrison
            five years to build Harrison Number One or HI. He demonstrated it to members of
            the Royal Society who spoke on his behalf to the Board of Longitude. The clock
            was the first proposal that the Board considered to be worthy of a sea trial.
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">G.</span>
            After several attempts to design a betterment of HI, Harrison believed that the
            ' solution to the longitude problem lay in an entirely different design. H4 is
            completely different from the other three timekeepers. It looks like a very
            large pocket watch. Harrison's son William set sail for the West Indies, with
            H4, aboard the ship Deptford on 18 November 1761. It was a remarkable
            achievement but it would be some time before the Board of Longitude was
            sufficiently satisfied to award Harrison the prize.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">H.</span>
            John Hadley, an English mathematician, developed sextant, who was a competitor
            of Harrison at that time for the luring prize. A sextant is an instrument used
            for measuring angles, for example between the sun and the horizon, so that the
            position of a ship or aeroplane can be calculated. Making this measurement is
            known as sighting the object, shooting the object, or taking a sight and it is
            an essential part of celestial navigation. The angle, and the time when it was
            measured, can be used to calculate a position line on a nautical or
            aeronautical chart. A sextant can also be used to measure the Lunar distance
            between the moon and another celestial object (e.g., star, planet) in order to
            determine Greenwich time which is important because it can then be used to
            determine the longitude.
        </p>

        <!-- Section I -->
        <p>
            <span class="font-bold text-blue-800">I.</span>
            The majority within this next generation of chronometer pioneers were English,
            but the story is by no means wholly that of English achievement. One French
            name, Pierre Le Roy of Paris, stands out as a major presence in the early
            history of the chronometer. Another great name in the story is that of the
            Lancastrian, Thomas Eamshaw, a slightly younger contemporary of John Arnold's.
            It was Eamshaw who created the final form of chronometer escapement, the spring
            detent escapement, and finalized the format and the production system for the
            marine chronometer, making it truly an article of commerce, and a practical
            means of safer navigation at sea over the next century and half.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
            Father of modern management
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-green-800">A.</span>
            It’s been said that Peter Drucker invented the discipline of management before
            he wrote his first book on the topic, he knew of only two companies in the
            world with management development programs. Ten years after the book’s
            publication, 3,000 companies were teaching the subject. Widely considered as
            the father of "modem management," he wrote 39 books and countless
            scholarly and popular articles exploring how humans are organized in all
            sectors of society—business, government and the nonprofit world. His writings
            have predicted many of the major developments of the late twentieth century,
            including privatization and decentralization; the rise of Japan to a world
            economic power; the decisive importance of marketing; and the emergence of the
            information society with its necessity of lifelong learning.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-green-800">B.</span>
            Drucker has said that writing is die foundation of everything he does. In 1937,
            he published his first book, which was written in Europe. The End of Economic
            Man: A Study of the New Totalitarianism examined the spiritual and social
            origins of fascism. In 1940, before the United States entered World War n, he
            wrote The Future of Industrial Man, in which he presented his social vision for
            the postwar world. In 1943, General Motors asked Drucker to study its
            management practices. Drucker accepted and spent 18 months researching and
            writing the 1945 book. Concept of the Corporation.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-green-800">C.</span>
            The concepts Drucker introduced in the 1940s and 1950s have endured. In 1954,
            Drucker wrote his first book that taught people how to manage. Tided The
            Practice of Management, it introduced the concept of "management by
            objectives”. Management by objectives require managers to establish goals for
            theft subordinates and devise means of measuring results. Workers are then left
            alone to perform as they will and measure theft performance. Drucker wrote,
            "It is not possible to be effective unless one first decides what one
            wants to accomplish. He went on to explain that every worker must be given the
            tools "to appraise himself, rather than be appraised and controlled from
            the outside. Management by objectives has become an accepted business concept
            and is probably Drucker's most important contribution. Drucker issued
            challenges to junior, middle and senior management: 'The very term "middle
            management" is becoming meaningless [as some] will have to learn how to
            work with people over whom they have no direct line control, to work
            transnationally, and to create, maintain, and run systems-none of which are
            traditionally middle management tasks. "It is top management that faces
            the challenge of setting directions for the enterprise, of managing the
            fundamentals.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-green-800">D.</span>
            Drucker interviewed executives and workers, visited plants, and attended board
            meetings. While the book focused on General Motors, Drucker went on to discuss
            the industrial corporation as a social institution and economic policy in the
            postwar era. He introduced previously unknown concepts such as cooperation
            between labor and management, decentralization of management, and viewing
            workers as resources rather than costs. Drucker saw people as a resource, and
            considered that they would be more able to satisfy customers if they had more
            involvement in then jobs and gained some satisfaction from doing them. Drucker
            claimed that an industrial society allows people to realize their dreams of
            personal achievement and equal opportunity-the need to manage business by
            balancing a variety of needs and goals, rather than subordinating an
            institution to a single value. This concept of management by objectives forms
            the keynote of his 1954 landmark The Practice of Management. He referred to
            decentralization as 'a system of local self-government, in which central
            management tells division managers what to do, but not how to do it. The young
            executives are given the freedom to make decisions — and mistakes — and learn
            from the experience. Top leaders at General Motors disliked the book and
            discouraged their executives from reading it. Many other American executives
            criticized Concept for its challenge to management authority.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-green-800">E.</span>
            Drucker wasn't immune to criticism. The Wall Street Journal researched several
            of his lectures in 1987 and reported that he was sometimes loose with facts.
            Drucker was off the mark, for example, when he told an audience that English
            was the official language for all employees at Japan's Mitsui trading company.
            And he was known for his prescience. Given the recent involvement of the US
            government with financial companies, he was probably correct in his forecast
            when he anticipated, for instance, that the nation’s financial center would
            shift from New York to Washington, others maintain that one of Drucker's core
            concepts—"management by objectives"—is flawed and has never really
            been proven to work effectively. Specifically, critics say that the system is
            difficult to implement, and that companies often wind up overemphasizing
            control, as opposed to fostering creativity, to meet their goals. Drucker
            didn't shy away from controversy, either.
        </p>

        <!-- Section F -->
        <p>
            <span class="font-bold text-green-800">F.</span>
            Throughout his career, Drucker expanded his
            position that management was "a liberal art” and he infused his management
            advice with interdisciplinary lessons including history, sociology, psychology,
            philosophy, culture and religion. He also strongly believed that all
            institutions, including those in the private sector, had a responsibility for
            the whole society. "The fact is," Drucker wrote in 1973, "that
            in modem society there is no other leadership group but managers. If the
            managers of our major institutions, especially in business, do not take
            responsibility for the common good, no one else can or will." In his
            books, lectures and interviews, the emergence of knowledge workers is only one
            of the demographic changes Drucker warns businesses to prepare for. Others
            include a decreasing birth rate in developed countries, a shift in population
            from rural to urban centers, shifts in distribution of disposable income and
            global competitiveness. Drucker believes these changes will have a tremendous
            impact on business. Drucker held a profound skepticism of macroeconomic theory
            and contended that economists of all schools fail to explain significant
            aspects of modem economies. Business "gums" have come and gone during
            the last 50 years, but Drucker's message continues to inspire managers. During
            the 1990s, Drucker wrote about social, political and economic changes of the” post
            capitalist” era, which he says are as profound as those of the industrial
            revolution. In Managing for the Future: The 1990s and Beyond (1992), Drucker
            discussed the emergence of the "knowledge worker" — whose resources
            include specialized learning or competency rather than land, labor or other
            forms of capital.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-indigo-700 mb-6">
            Extinct: the Giant Deer
        </h1>
        <p class="mb-4">
            Toothed
            cats, mastodons, giant sloths, woolly rhinos, and many other big, shaggy
            mammals are widely thought to have died out around the end of the last ice age,
            some 10,500 years ago.
        </p>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">A.</span>
            The Irish elk is also known as the giant deer (Megaloceros giganteus). Analysis
            of ancient bones and teeth by scientists based in Britain and Russia show the
            huge herbivore survived until about 5,000 B.C.—more than three millennia later
            than previously believed. The research team says this suggests additional
            factors, besides climate change, probably hastened the giant deer's eventual
            extinction. The factors could include hunting or habitat destruction by humans.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">B.</span>
            The Irish elk, so-called because its well-preserved remains are often found in
            lake sediments under peat bogs in Ireland, first appeared about 400,000 years
            ago in Europe and central Asia. Through a combination of radiocarbon dating of
            skeletal remains and the mapping of locations where the remains were unearthed,
            the team shows the Irish elk was widespread across Europe before the last
            "big freeze." The deer's range later contracted to the Ural
            Mountains, in modern-day Russia, which separate Europe from Asia.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">C.</span>
            The giant deer made its last stand in western Siberia, some 3,000 years after
            the ice sheets receded, said the study's co-author, Adrian Lister, professor of
            palaeobiology at University College London, England. "The eastern
            foothills of the Urals became very densely forested about 8,000 years ago,
            which could have pushed them on to the plain," he said. He added that
            pollen analysis indicates the region then became very dry in response to
            further climactic change, leading to the loss of important food plants.
            "In combination with human pressures, this could have finally snuffed them
            out," Lister said.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">D.</span>
            Hunting by humans has often been put forward as a contributory cause of
            extinctions of the Pleistocene mega fauna. The team, though, said their new
            date for the Irish elk's extinction hints at an additional human-made
            problem—habitat destruction. Lister said, "We haven't got just hunting
            7,000 years ago—this was also about the time the first Neolithic people settled
            in the region. They were farmers who would have cleared the land." The
            presence of humans may help explain why the Irish elk was unable to tough out
            the latest of many climatic fluctuations—periods it had survived in the past.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">E.</span>
            Meanwhile, Lister cast doubt on another possible explanation for the deer's
            demise—the male's huge antlers. Some scientists have suggested this exaggerated
            feature—the result of females preferring stags with the largest antlers,
            possibly because they advertised a male's fitness —contributed to the mammal's
            downfall. They say such antlers would have been a serious inconvenience in the
            dense forests that spread northward after the last ice age. But, Lister said,
            "That's a hard argument to make, because the deer previously survived
            perfectly well through wooded interglacials [warmer periods between ice
            ages]." Some research has suggested that a lack of sufficient high-quality
            forage caused the extinction of the elk. High amounts of calcium and phosphate
            compounds are required to form antlers, and therefore large quantities of these
            minerals are required for the massive structures of the Irish Elk. The males
            (and male deer in general) met this requirement partly from their bones,
            replenishing them from food plants after the antlers were grown or reclaiming
            the nutrients from discarded antlers (as has been observed in extant deer).
            Thus, in the antler growth phase. Giant Deer were suffering from a condition
            similar to osteoporosis. When the climate changed at the end of the last
            glacial period, the vegetation in the animal's habitat also changed towards
            species that presumably could not deliver sufficient amounts of the required
            minerals, at least in the western part of its range.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">F.</span>
            The extinction of mega fauna around the world was almost completed by the end
            of the last ice age. It is believed that mega fauna initially came into
            existence in response to glacial conditions and became extinct with the onset
            of warmer climates. Tropical and subtropical areas have experienced less
            radical climatic change. The most dramatic of these changes was the
            transformation of a vast area of North Africa into the world's largest desert.
            Significantly, Africa escaped major faunal extinction as did tropical and
            sub-tropical Asia. The human exodus from Africa and our entrance into the
            Americas and Australia were also accompanied by climate change. Australia's
            climate changed from cold-dry to warm-dry. As a result, surface water became
            scarce. Most inland lakes became completely dry or dry in the warmer seasons.
            Most large, predominantly browsing animals lost their habitat and retreated to
            a narrow band in eastern Australia, where there was permanent water and better
            vegetation. Some animals may have survived until about 7000 years ago. If
            people have been in Australia for up to 60 000 years, then megafauna must have
            co-existed with humans for at least 30 000 years. Regularly hunted modem
            kangaroos survived not only 10 000 years of Aboriginal hunting, but also an
            onslaught of commercial shooters.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-indigo-800">G.</span>
            The group of scientists led by A.J. Stuart
            focused on northern Eurasia, which he was taking as Europe, plus Siberia,
            essentially, where they’ve got the best data that animals became extinct in
            Europe during the Late Pleistocene. Some cold-adapted animals, go through into
            the last part of the cold stage, and then become extinct up there. So you've
            actually got two phases of extinction. Now, neither of these coincide — these
            are Neanderthals here being replaced by modem humans. There's no obvious
            coincidence between the arrival of humans or climatic change alone and these
            extinctions. There's a climatic change here, so there's a double effect here.
            Again, as animals come through to the last part of the cold stage, here there's
            a fundamental change in the climate, reorganization of vegetation, and the
            combination of the climatic change and the presence of humans -- of advanced
            Paleolithic humans — causes this wave of extinction. There's a profound
            difference between the North American data and that of Europe, which summarize
            that the extinctions in northern Eurasia, in Europe, are moderate and
            staggered, and in North America severe and sudden. And these things relate to
            the differences in the timing of human arrival. The extinctions follow from
            human predation, but only at times of fundamental changes in the environment.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-red-700 mb-6">
            Terminated Dinosaur Era
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-red-800">A.</span>
            The age of dinosaurs, which ended with the cataclysmic bang of a meteor impact 65 million
            years ago, may also have begun with one. Researchers found recently the first
            direct, though tentative, geological evidence of a meteor impact 200 million
            years ago, coinciding with a mass extinction that eliminated half of the major
            groups of life and opened the evolutionary1 door for what was then a relatively
            small group of animals: dinosaurs.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-red-800">B.</span>
            The cause and timing of the ascent of dinosaurs has have been much debated. It has been
            impossible to draw any specific conclusions because the transition between the
            origin of dinosaurs and their ascent to dominance has not been sampled in
            detail. "There is a geochemical signature of something important
            happening, probably an asteroid impact, just before the time in which familiar
            dinosaur-dominated communities appear," said Dr. Paul E. Olsen, a
            professor of earth and environmental sciences at Columbia University's
            Lamont-Doherty Earth Observatory in Palisades, N.Y.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-red-800">C.</span>
            Olsen and his colleagues studied vertebrate fossils from 80 sites in four different ancient
            rift basins, part of a chain of rifts that formed as North America began to
            split apart from the supercontinent that existed 230-190 million years ago. In
            the layer of rock corresponding to the extinction, the scientists found
            elevated amounts of the rare element iridium. A precious metal belonging to the
            platinum group of elements, iridium is more abundant in meteorites than in
            rocks.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-red-800">D.</span>
            On Earth, A similar spike of iridium in 65 million year-old rocks gave rise in the 1970s to
            the theory that a meteor caused the demise of the dinosaurs. That theory
            remained controversial for years until it was corroborated by other evidence
            and the impact site was found off the Yucatan Peninsula. Scientists will need
            to examine the new iridium anomaly similarly. The levels are only about
            one-tenth as high as those found at the later extinction. That could mean that
            the meteor was smaller or contained less iridium or that a meteor was not
            involved—iridium can also come from the Earth's interior, belched out by
            volcanic eruptions. Dr. Michael J. Benton, a professor of vertebrate
            paleontology at the University of Bristol in England, described the data as "the
            first reasonably convincing evidence of an iridium spike".
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-red-800">E.</span>
            The scientists found more evidence of rapid extinction in a database of 10,000 fossilized
            footprints in former lake basins from Virginia to Nova Scotia. Although
            individual species cannot usually be identified solely from their footprints —
            the tracks of a house cat, for example, resemble those of a baby tiger —
            footprints are much more plentiful than fossil bones and can provide a more
            complete picture of the types of animals walking around. "It makes it very
            easy for us to tell the very obvious signals of massive fauna change," Dr.
            Olsen said. Because the sediment piles up quickly in lake basins, the
            researchers were able to assign a date to each footprint, based on the layer of
            rock where it was found. They determined that the mix of animals walking across
            what is now the East Coast of North America changed suddenly about 200 million
            years ago.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-red-800">F.</span>
            The tracks of several major reptile groups continue almost up to the layer of rock marking
            the end of the Triassic geologic period 202 million years ago, and then vanish
            in younger layers from the Jurassic period. "I think the footprint
            methodology is very novel and very exciting," said Dr. Peter D. Ward, a
            professor of geology at the University of Washington. He called the data
            "very required more research. Last year, researchers led by Dr. Ward
            reported that the types of carbon in rock changed abruptly at this time,
            indicating a sudden dying off of plants over less than 50,000 years. The
            footprint research reinforces the hypothesis that the extinction was sudden.
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-red-800">G.</span>
            Several groups of dinosaurs survived that extinction, and the footprints show that new groups
            emerged soon afterward. Before the extinction, about one-fifth of the
            footprints were left by dinosaurs; after the extinction, more than half were
            from dinosaurs. The changes, the researchers said, occurred within 30,000 years
            a geological blink of an eye. The scientists postulate that the asteroid or
            comet impact and the resulting death of Triassic competitors allowed a few
            groups of carnivorous dinosaurs to evolve in size very quickly and dominate the
            top of the terrestrial food chain globally.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-red-800">H.</span>
            Among the creatures that disappeared in the extinction were the dominant predators at the
            time: 15-foot long rauisuchians with great knife-like teeth and phytosaurs that
            resembled large crocodiles. Dinosaurs first evolved about 230 million years
            ago, but they were small, competing in a crowded ecological niche. Before the
            extinction 200 million years ago. the largest of the meat-eating dinosaurs were
            about the see of large dogs. Not terribly impressive." Dr. Olsen said. The
            dinosaurs quickly grew. The toe-to-heel length of the foot of a meat eater from
            the Jurassic period was on average 20 percent longer than its Triassic
            ancestor. Larger feet can carry bigger bodies; the scientists infer the
            dinosaurs doubled in weight, eventually evolving into fearsome velociraptors,
            Tyrannosaurus rex and other large carnivorous dinosaurs.
        </p>

        <!-- Section I -->
        <p>
            <span class="font-bold text-red-800">I.</span>
            The spurt in evolution is similar to the rise of mammals after the extinction of dinosaurs.
            Mammals, no larger than small dogs during the age of dinosaurs, diversified
            into tigers, elephants, whales and people after the reptilian competition died
            away. The success of the dinosaurs after the Triassic-Jurassic extinction may
            be why they did not survive the second extinction. "Small animals always
            do better in catastrophic situations. Dr. Olsen said, because they can survive
            on smaller amounts of food." He also pointed out that scientists now
            believe the small dinosaurs did survive. "We just call them birds,"
            he said.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
            Detection of a meteorite Lake
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">A.</span>
            AS THE SUN rose over picturesque Lake Bosumtwi, a team of Syracuse University
            researchers prepared for another day of using state-of the-art equipment to
            help unlock the mysteries hidden below the lake bottom. Nestled in the heart of
            Ghana, the lake holds an untapped reservoir of information that could help
            scientists predict future climate changes by looking at evidence from the past.
            This information will also improve the scientists' understanding of the changes
            that occur in a region struck by a massive meteorite.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">B.</span>
            The project, led by earth sciences professor Christopher Scholz of the College
            of Arts and Sciences and funded by the National Science Foundation (NSF), is
            the first large-scale effort to study Lake Bosumtwi, which formed 1.1 million
            years ago when a giant meteor crashed into the Earth's surface. The resulting
            crater is one of the largest and most well preserved geologically young craters
            in the world, says Scholz, who is collaborating on the project with researchers
            from the University of Arizona, the University of South Carolina, the
            University of Rhode Island, and several Ghanaian institutions. "Our data
            should provide information about what happens when an impact hits hard,
            pre-Cambrian, crystalline rocks that are a billion years old," he says.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">C.</span>
            Equally important is the fact that the lake, which is about 8 kilometers in
            diameter, has no natural outlet. The rim of the crater rises about 250 meters
            above the water's surface. Streams flow into the lake, Scholz says, but the
            water leaves only by evaporation, or by seeping through the lake sediments. For
            the past million years, the lake has acted as a tropical rain, filling and
            drying with changes in precipitation and the tropical climate. The record of
            those changes is hidden in sediment below the lake bottom. "The lake is
            one of the best sites in the world for the study of ropical climate
            changes," Scholz says. "The tropics are the heat engine for the
            Earth's climate. To understand global climate, we need to have records of
            climate changes from many sites around the world, including the tropics."
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">D.</span>
            Before the researchers could explore the lakes subsurface, they needed a boat
            with a large, working deck area that could carry eight tons of scientific
            equipment. The boat dubbed R/V Kilindi was built in Florida last year. It was
            constructed in modules that were dismantled, packed inside a shipping container,
            and reassembled over a 10-day period in late November and early December 1999
            in the rural village of Abono, Ghana. The research team then spent the next two
            weeks testing the boat and equipment before returning to the United States for
            the holidays.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">E.</span>
            In mid-January, five members of the team—Keely Brooks, an earth sciences
            graduate student; Peter Cattaneo, a research analyst; and Kiram Lezzar, a
            postdoctoral scholar, all from SU; James McGill, a geophysical field engineer;
            and Nick Peters, a Ph.D. student in geophysics from the University of
            Miami—returned to Abono to begin collecting data about the lake's subsurface
            using a technique called seismic reflection profiling. In this process, a
            high-pressure air gun is used to create small, pneumatic explosions in the
            water. The sound energy penetrates about 1,000 to 2,000 meters into the lake's
            subsurface before bouncing back to the surface of the water.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">F.</span>
            The reflected sound energy is detected by underwater microphones-called
            hydrophones—embedded in a 50-meter-long cable that is towed behind the boat as
            it crosses the lake in a carefully designed grid pattern. On-board computers
            record the signals, and the resulting data are then processed and analyzed in
            the laboratory. “The results will give US a good idea of the shape of the
            basin, how thick the layers of sediment are, and when and where there were
            major changes in sediment accumulation,” Scholz says. “We are now developing
            three-dimensional perspective of the lake’s subsurface and the layers of
            sediment that have been laid down.”
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">G.</span>
            Team members spent about four weeks in Ghana collecting the data. They worked
            seven, days a week/ arriving at the lake just after sunrise. On a good day,
            when everything went as planned, the team could collect data and be back at the
            dock by early afternoon. Except for a few relatively minor adjustments, the
            equipment and the boat worked well. Problems that arose were primarily
            non-scientific—tree stumps, fishing nets, cultural barriers, and occasional
            misunderstandings with local villagers.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">H.</span>
            Lake Bosumtwi, the largest natural freshwater lake in the country, is sacred to
            the Ashanti people, who believe their souls come to the lake to bid farewell to
            their god. The lake is also the primary source of fish for the 26 surrounding
            villages. Conventional canoes and boats are forbidden. Fishermen travel on the
            lake by floating on traditional planks they propel with small paddles. Before
            die research project could begin, Scholz and his Ghanaian counterparts had to
            secure special permission from tribal chiefs to put the R/V Kilindi on the
            lake.
        </p>

        <!-- Section I -->
        <p>
            <span class="font-bold text-purple-800">I.</span>
            When the team began gathering data, rumors flew around the lake as to why the
            researchers were there. "Some thought we were dredging the lake for gold,
            others thought we were going to drain the lake or that we had bought the
            lake," Cattaneo says. "But once the local people understood why we
            were there, they were very helpful"
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-amber-700 mb-6">
            Internal and External Marketing
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">A.</span>
            Employees need to hear the same messages that you send out to the marketplace.
            At most companies, however, internal and external communications are often
            mismatched. This can be very confusing, and it threatens employees' perceptions
            of the company's integrity: They are told one thing by management but observe
            that a different message is being sent to the public. One health insurance
            company, for instance, advertised that the welfare of patients was the
            company's number one priority, while employees were told that theft main goal
            was to increase the value of theft stock options through cost reductions. And
            one major financial services institution told customers that it was making a
            major shift in focus from being a financial retailer to a financial adviser,
            but, a year later, research showed that the customer experience with the
            company had not changed. It turned out that company leaders had not made an
            effort to sell the change internally, so employees were still churning out
            transactions and hadn't changed theft behavior to match theft new adviser role.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">B.</span>
            Enabling employees to deliver on customer expectations is important, of course,
            but it's not the only reason a company needs to match internal and external
            messages. Another reason is to help push the company to achieve goals that
            might otherwise be out of reach. In 1997, when IBM launched its e-business
            campaign (which is widely credited for turning around the company's image), it
            chose to ignore research that suggested consumers were unprepared to embrace
            IBM as a leader in e-business. Although to the outside world this looked like
            an external marketing effort, IBM was also using the campaign to align
            employees around the idea of the Internet as the future of technology. The
            internal campaign changed the way employees thought about everything they did,
            from how they named products to how they organized staff to how they approached
            selling. The campaign was successful largely because it gave employees a sense
            of direction and purpose, which in turn restored theft confidence in IBM's
            ability to predict the future and lead the technology industry. Today, research
            shows that people are four times more likely to associate the term
            "e-business" with IBM than with its nearest competitor, Microsoft.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">C.</span>
            The type of "two-way branding" that IBM did so successfully
            strengthens both sides of the equation. Internal marketing becomes stronger
            because it can draw on the same "big idea" as advertising. Consumer
            marketing becomes stronger because the messages are developed based on
            employees' behavior and attitudes, as well as on the company's strengths and
            capabilities— indeed, the themes are drawn from the company's very soul. This
            process can result in a more distinct advertising idea because marketers are more
            likely to create a message that's unique to the company.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">D.</span>
            Perhaps even more important, by taking employees into account, a company can
            avoid creating a message that doesn't resonate with staff or, worse, one that
            builds resentment. In 1996, United Airlines shelved its "Come Fly the
            Friendly Skies" slogan when presented with a survey that revealed the
            depth of customer resentment toward the airline industry. In an effort to own
            up to the industry's shortcomings. United launched a new campaign,
            "Rising," in which it sought to differentiate itself by acknowledging
            poor service and promising incremental improvements such as better meals. While
            this was a logical premise for the campaign given the tenor of the times, a
            campaign focusing on customers' distaste for flying was deeply discouraging to
            the staff. Employee resentment ultimately made it impossible for United to
            deliver the improvements it was promising, which in turn undermined the
            "Rising" pledge. Three years later. United decided employee
            opposition was undermining its success and pulled the campaign. It has since
            moved to a more inclusive brand message with the line "United," which
            both audiences can embrace. Here, a fundamental principle of advertising—find
            and address a customer concern—failed United because it did not consider the
            internal market.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">E.</span>
            When it comes to execution, the most common and effective way to link internal
            and external marketing campaigns is to create external advertising that targets
            both audiences. IBM used this tactic very effectively when it launched its
            e-business campaign. It took out an eight-page ad in the Wall Street Journal
            declaring its new vision, a message directed at both customers and internal
            stakeholders. This is an expensive way to capture attention, but if used
            sparingly, it is the most powerful form of communication; in fact, you need do
            it only once for everyone in the company to read it. There's a symbolic
            advantage as well. Such a tactic signals that the company is taking its pledge
            very seriously; it also signals transparency—the same message going out to both
            audiences.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">F.</span>
            Advertising isn't the only way to link internal and external marketing. At
            Nike, a number of senior executives now hold the additional title of
            "Corporate Storyteller." They deliberately avoid stories of financial
            successes and concentrate on parables of "just doing it," reflecting
            and reinforcing the company's ad campaigns. One tale, for example, recalls how
            legendary coach and Nike cofounder Bill Bowerman, in an effort to build a
            better shoe for his team, poured rubber into the family waffle iron, giving
            birth to the prototype of Nike's famous Waffle Sole. By talking about such
            inventive moves, the company hopes to keep the spirit of innovation that
            characterizes its ad campaigns alive and well within the company.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-amber-800">G.</span>
            But while their messages must be aligned, companies must also keep external
            promises a little ahead of internal realities. Such promises provide incentives
            for employees and give them something to live up to. In the 1980s, Ford turned
            "Quality is Job" from an internal rallying cry into a consumer slogan
            in response to the threat from cheaper, more reliable Japanese cars. It did so
            before the claim was fully justified, but by placing it in the public arena, it
            gave employees an incentive to match the Japanese. If the promise is pushed too
            far ahead, however, it loses credibility. When a beleaguered British Rail
            launched a campaign announcing service improvement under the banner "We're
            Getting There," it did so prematurely. By drawing attention to the gap
            between the promise and the reality, it prompted destructive press coverage.
            This, in turn, demoralized staff, who had been legitimately proud of the
            service advances they had made.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-blue-700 mb-6">
            Can We Hold Back the Flood?
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">A.</span>
            LAST winter's floods on the rivers of central Europe were among the worst since
            the Middle Ages, and as winter storms return, the spectre of floods is
            returning too. Just weeks ago, the river Rhone in south-east France burst its
            banks, driving 15,000 people from their homes, and worse could be on the way.
            Traditionally, river engineers have gone for Plan A: get rid of the water fast,
            draining it off the land and down to the sea in tall-sided rivers re-engineered
            as high-performance drains. But however big they dig city drains, however wide
            and straight they make the rivers, and however high they build the banks, the
            floods keep coming back to taunt them, from the Mississippi to the Danube. And
            when the floods come, they seem to be worse than ever.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">B.</span>
            No wonder engineers are turning to Plan B: sap the water's destructive strength
            by dispersing it into fields, forgotten lakes, flood plains and aquifers. Back
            in the days when rivers took a more tortuous path to the sea, flood waters lost
            impetus and volume while meandering across flood plains and idling through
            wetlands and inland deltas. But today the water tends to have an unimpeded
            journey to the sea. And this means that when it rams in the uplands, the water
            comes down all at once. Worse, whenever we close off more flood plain, the
            river’s flow farther downstream becomes more violent and uncontrollable. Dykes
            are only as good as their weakest link - and the water will unerringly find it.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">C.</span>
            Today, the river has lost 7 per cent of its original length and runs up to a third faster. When it rains hard in the Alps, the peak flows from several
            tributaries coincide in the main river, where once they arrived separately. And
            with four-fifths of the lower Rhine's flood plain barricaded off, the waters
            rise ever higher. The result is more frequent flooding that does ever-greater
            damage to the homes, offices and roads that sit on the flood plain. Much the
            same has happened in the US on the mighty Mississippi, which drains the world's
            second largest river catchment into the Gulf of Mexico.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">D.</span>
            The European Union is trying to improve rain forecasts and more accurately model
            how intense rains swell rivers. That may help cities prepare, but it won't stop
            the floods. To do that, say hydrologists, you need a new approach to
            engineering not just Agency - country £1 billion - puts it like this: "The
            focus is now on working with the forces of nature. Towering concrete walls are
            out, and new wetlands are in." To help keep London's upstream and
            reflooding 10 square k outside Oxford. Nearer to London it has spent £100
            million creating new wetlands and a relief channel across 16 kilometres.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">E.</span>
            The same is taking place on a much grander scale in Austria, in one of Europe's
            largest river restorations to date. Engineers are regenerating flood plains
            along 60 kilometres of the river Drava as it exits the Alps. They are also
            widening the river bed and channelling it back into abandoned meanders, oxbow
            lakes and backwaters overhung with willows. The engineers calculate that the
            restored flood plain can now store up to 10 million cubic metres of flood
            waters and slow storm surges coming out of the Alps by more than an hour,
            protecting towns as far downstream as Slovenia and Croatia.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">F.</span>
            "Rivers have to be allowed to take more space. They have to be turned from
            flood-chutes into flood-foilers," says Nienhuis. And the Dutch, for whom
            preventing floods is a matter of survival, have gone furthest. A nation built
            largely on drained marshes and seabed had the fright of its life in 1993 when
            the Rhine almost overwhelmed it. The same happened again in 1995, when a
            quarter of a million people were evacuated from the Netherlands. But a new
            breed of "soft engineers" wants our cities to become porous, and
            Berlin is theft governed by tough new rules to prevent its drains becoming
            overloaded after heavy rains. Harald Kraft, an architect working in the city,
            says: "We now see rainwater as giant Potsdamer Platz, a huge new
            commercial redevelopment by DaimlerChrysler in the heart of the city.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-blue-800">G.</span>
            Los Angeles has spent billions of dollars digging huge drains and concreting
            river beds to carry away the water from occasional intense storms. "In LA
            we receive half the water we need in rainfall, and we throw it away. Then we
            spend hundreds of millions to import water," says Andy Lipkis, an LA
            environmentalist who kick-started the idea of the porous city by showing it
            could work on one house. Lipkis, along with citizens groups like Friends of the
            Los Angeles River and Unpaved LA, want to beat the urban flood hazard and fill
            the taps by holding onto the city's flood water. And it's not just a pipe
            dream. The authorities this year launched a $100 million scheme to road-test
            the porous city in one flood-hit community in Sun Valley. The plan is to catch
            the rain that falls on thousands of driveways, parking lots and rooftops in the
            valley. Trees will soak up water from parking lots. Homes and public buildings
            will capture roof water to irrigate gardens and parks. And road drains will
            empty into old gravel pits and other leaky places that should recharge the
            city's underground water reserves. Result: less flooding and more water for the
            city. Plan B says every city should be porous, every river should have room to
            flood naturally and every coastline should be left to build its own defences.
            It sounds expensive and utopian, until you realise how much we spend trying to
            drain cities and protect our watery margins - and how bad we are at it.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-orange-700 mb-6">
            When the Tulip Bubble Burst
        </h1>
        <p class="mb-4">
            Tulips
            are spring-blooming perennials that grow from bulbs. Depending on the species,
            tulip plants can grow as short as 4 inches (10 cm) or as high as 28 inches (71
            cm). The tulip's large flowers usually bloom on scapes or sub-scapose stems
            that lack bracts. Most tulips produce only one flower per stem, but a few
            species bear multiple flowers on their scapes (e.g. Tulipa turkestanica). The
            showy, generally cup or star-shaped tulip flower has three petals and three
            sepals, which are often termed tepals because they are nearly identical. These
            six tepals are often marked on the interior surface near the bases with darker
            colorings. Tulip flowers come in a wide variety of colors, except pure blue
            (several tulips with "blue" in the name have a faint violet hue).
        </p>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">A.</span>
            Long before anyone ever heard of Qualcomm, CMGI, Cisco Systems, or the other
            high-tech stocks that have soared during the current bull market, there was
            Semper Augustus. Both more prosaic and more sublime than any stock or bond, it
            was a tulip of extraordinary beauty, its midnight-blue petals topped by a band
            of pure white and accented with crimson flares. To denizens of 17th century
            Holland, little was as desirable.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">B.</span>
            Around 1624, the Amsterdam man who owned the only dozen specimens was offered
            3,000 guilders for one bulb. While there's no accurate way to render that in
            today's greenbacks, the sum was roughly equal to the annual income of a wealthy
            merchant. (A few years later, Rembrandt received about half that amount for
            painting The Night Watch.) Yet the bulb's owner, whose name is now lost to
            history, nixed the offer.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">C.</span>
            Who was crazier, the tulip lover who refused to sell for a small fortune or the
            one who was willing to splurge. That's a question that springs to mind after
            reading Tulip mania: The Story of the World's Most Coveted Flower and the
            Extraordinary Passions It Aroused by British journalist Mike Dash. In recent
            years, as investors have intentionally forgotten everything they learned in
            Investing 101 in order to load up on unproved, unprofitable dot com issues,
            tulip mania has been invoked frequently. In this concise, artfully written
            account, Dash tells the real history behind the buzzword and in doing so,
            offers a cautionary tale for our times.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">D.</span>
            The Dutch were not the first to go gaga over the tulip. Long before the first
            tulip bloomed in Europe-in Bavaria, it turns out, in 1559-the flower had
            enchanted the Persians and bewitched the rulers of the Ottoman Empire. It was
            in Holland, however, that the passion for tulips found its most fertile ground,
            for reasons that had little to do with horticulture.
        </p>
        
        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">E.</span>
            Holland in the early 17th century was embarking on its Golden Age. Resources
            that had just a few years earlier gone toward fighting for independence from
            Spain now flowed into commerce. Amsterdam merchants were at the center of the
            lucrative East Indies trade, where a single voyage could yield profits of 400%.
            They displayed their success by erecting grand estates surrounded by flower
            gardens. The Dutch population seemed tom by two contradictory impulses: a
            horror of living beyond one's means and the love of a long shot.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">F.</span>
            Enter the tulip. "It is impossible to comprehend the tulip mania without
            understanding just how different tulips were from every other flower known to
            horticulturists in the 17th century," says Dash. "The colors they
            exhibited were more intense and more concentrated than those of ordinary
            plants." Despite the outlandish prices commanded by rare bulbs, ordinary
            tulips were sold by the pound. Around 1630, however, a new type of tulip
            fancier appeared, lured by tales of fat profits. These "florists," or
            professional tulip traders, sought out flower lovers and speculators alike. But
            if the supply of tulip buyers grew quickly, the supply of bulbs did not. The
            tulip was a conspirator in the supply squeeze: It takes seven years to grow one
            from seed. And while bulbs can produce two or three clones, or
            "offsets," annually, the mother bulb only lasts a few years.
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">G.</span>
            Bulb prices rose steadily throughout the 1630s, as ever more speculators into
            the market. Weavers and farmers mortgaged whatever they could to raise cash to
            begin trading. In 1633, a farmhouse in Hoorn changed hands for three rare
            bulbs. By 1636 any tulip-even bulbs recently considered garbage-could be sold
            off, often for hundreds of guilders. A futures market for bulbs existed, and
            tulip traders could be found conducting their business in hundreds of Dutch
            taverns. Tulip mania reached its peak during the winter of 1636-37, when some
            bulbs were changing hands ten times in a day. The zenith came early that
            winter, at an auction to benefit seven orphans whose only asset was 70 fine
            tulips left by then father. One, a rare Violetten Admirael van Enkhuizen bulb
            that was about to split in two, sold for 5,200 guilders, the all-time record.
            All told, the flowers brought in nearly 53,000 guilders.
        </p>
        
        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">H.</span>
            Soon after, the
            tulip market crashed utterly, spectacularly. It began in Haarlem, at a routine
            bulb auction when, for the first time, the greater fool refused to show up and
            pay. Within days, the panic had spread across the country. Despite the efforts
            of traders to prop up demand, the market for tulips evaporated. Flowers that
            had commanded 5,000 guilders a few weeks before now fetched one-hundredth that
            amount. Tulip mania is not without flaws. Dash dwells too long on the tulip's
            migration from Asia to Holland. But he does a service with this illuminating,
            accessible account of incredible financial folly.
        </p>
        
        <!-- Section I -->
        <p>
            <span class="font-bold text-orange-800">I.</span>
            Tulip mania differed in one crucial aspect from the dot-com craze that grips
            our attention today: Even at its height, the Amsterdam Stock Exchange, well
            established in 1630, wouldn't touch tulips. "The speculation in tulip
            bulbs always existed at the margins of Dutch economic life," Dash writes.
            After the market crashed, a compromise was brokered that let most traders
            settle then debts for a fraction of the liability. The overall fallout on the
            Dutch economy was negligible. Will we say the same when Wall Street's current
            obsession finally runs its course?
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">
            The Secrets of Persuasion
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">A.</span>
            Our mother may have told you the secret to getting what you ask for was to say
            please. The reality is rather more surprising. Adam Dudding talks to a
            psychologist who has made a life's work from the science of persuasion. Some
            scientists peer at things through high-powered microscopes. Others goad rats
            through mazes, or mix bubbling fluids in glass beakers. Robert Cialdini, for
            his part, does curious things with towels, and believes that by doing so he is
            discovering important insights into how society works.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">B.</span>
            Cialdini's towel experiments (more of them later), are part of his research
            into how we persuade others to say yes. He wants to know why some people have a
            knack for bending the will of others, be it a telephone cold-caller talking to
            you about timeshares, or a parent whose children are compliant even without
            threats of extreme violence. While he's anxious not to be seen as the man who's
            written the bible for snake-oil salesmen, for decades the Arizona State
            University social psychology professor has been creating systems for the
            principles and methods of persuasion, and writing bestsellers about them. Some
            people seem to be born with the skills; Cialdini's claim is that by applying a
            little science, even those of US who aren't should be able to get our own way
            more often. "All my life I've been an easy mark for the blandishment of
            salespeople and fundraisers and I'd always wondered why they could get me to
            buy things I didn't want and give to causes I hadn't heard of," says
            Cialdini on the phone from London, where he is plugging his latest book.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">C.</span>
            He found that laboratory experiments on the psychology of persuasion were
            telling only part of the story, so he began to research influence in the real
            world, enrolling in sales-training programmes: "I learn how to sell
            automobiles from a lot, how to sell insurance from an office, how to sell
            encyclopedias door to door." He concluded there were six general
            "principles of influence" and has since put them to the test under
            slightly more scientific conditions. Most recently, that has meant messing
            about with towels. Many hotels leave a little card in each bathroom asking
            guests to reuse towels and thus conserve water and electricity and reduce
            pollution. Cialdini and his colleagues wanted to test the relative
            effectiveness of different words on those cards. Would guests be motivated to
            co-operate simply because it would help save the planet, or were other factors
            more compelling? To test this, the researchers changed the card's message from
            an environmental one to the simple (and truthful) statement that the majority
            of guests at the hotel had reused their towel at least once. Guests given this
            message were 26% more likely to reuse their towels than those given the old
            message. In Cialdini's book "Yes! 50 Secrets from the Science of
            Persuasion", co-written with another social scientist and a business
            consultant, he explains that guests were responding to the persuasive force of
            "social proof', the idea that our decisions are strongly influenced by
            what we believe other people like US are doing.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">D.</span>
            So much for towels. Cialdini has also learnt a lot from confectionery. Yes!
            cites the work of New Jersey behavioural scientist David Strohmetz, who wanted
            to see how restaurant patrons would respond to a ridiculously small favour from
            their food server, in the form of an after-dinner chocolate for each diner. The
            secret, it seems, is in how you give the chocolate. When the chocolates arrived
            in a heap with the bill, tips went up a miserly 3% compared to when no
            chocolate was given. But when the chocolates were dropped individually in front
            of each diner, tips went up 14%. The scientific breakthrough, though, came when
            the waitress gave each diner one chocolate, headed away from the table then
            doubled back to give them one more each, as if such generosity had only just
            occurred to her. Tips went up 23%. This is "reciprocity" in action:
            we want to return favours done to US, often without bothering to calculate the
            relative value of what is being received and given.
        </p>
        
        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">E.</span>
            Geeling Ng, operations manager at Auckland's Soul Bar, says she's never heard
            of Kiwi waiting staff using such a cynical trick, not least because New Zealand
            tipping culture is so different from that of the US: "If you did that in
            New Zealand, as diners were leaving they'd say 'can we have some more?" 'But
            she certainly understands the general principle of reciprocity. The way to a
            diner's heart is "to give them something they're not expecting in the way
            of service. It might be something as small as leaving a mint on their plate, or
            it might be remembering that last time they were in they wanted their water
            with no ice and no lemon. "In America it would translate into an instant
            tip. In New Zealand it translates into a huge smile and thank you." And no
            doubt, return visits. THE FIVE PRINCIPLES OF PERSUASION
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">F.</span>
            Reciprocity: People want to give
            back to those who have given to them. The trick here is to get in first. That's
            why charities put a crummy pen inside a mailout, and why smiling women in
            supermarkets hand out dollops of free food. Scarcity: People want more of things
            they can have less of. Advertisers ruthlessly exploit scarcity ("limit
            four per customer", "sale must end soon"), and Cialdini suggests
            parents do too: "Kids want things that are less available, so say 'this is
            an unusual opportunity; you can only have this for a certain time'."
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">G.</span>
            Authority: We trust people who know
            what they're talking about. So inform people honestly of your credentials
            before you set out to influence them. "You'd be surprised how many people
            fail to do that," says Cialdini. "They feel it's impolite to talk
            about then expertise." In one study, therapists whose patients wouldn't do
            then exercises were advised to display then qualification certificates
            prominently. They did, and experienced an immediate leap in patient compliance.
        </p>
        
        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">H.</span>
            Commitment/consistency: We want to act in a way that is
            consistent with the commitments we have already made. Exploit this to get a
            higher sign-up rate when soliciting charitable donations. Ffrst ask workmates
            if they think they will sponsor you on your egg-and-spoon marathon. Later,
            return with the sponsorship form to those who said yes and remind them of their
            earlier commitment.
        </p>

        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">I.</span>
            Liking: We say yes more often to people we like.
            Obvious enough, but reasons for "liking" can be weird. In one study,
            people were sent survey forms and asked to return them to a named researcher.
            When the researcher gave a fake name resembling that of the subject (eg,
            Cynthia Johnson is sent a survey by "Cindy Johansen"), surveys were
            twice as likely to be completed. We favour people who resemble US, even if the
            resemblance is as minor as the sound of their name.
        </p>

        <!-- Section J -->
        <p>
            <span class="font-bold text-teal-800">J.</span>
            Social proof: We decide what to do by looking around to see
            what others just like US are doing. Useful for parents, says Cialdini.
            "Find groups of children who are behaving in a way that you would like
            your child to, because the child looks to the side, rather than at you."
            More perniciously, social proof is the force underpinning the competitive
            materialism of "keeping up with the Joneses"
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
            MENTAL GYMNASTICS
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-green-800">A.</span>
            THE working day has just started at the head office of Barclays Bank in London.
            Seventeen staff are helping themselves to a buffet breakfast as young
            psychologist Sebastian Bailey enters the room to begin the morning's framing
            session. But this is no ordinary training session. He's not here to sharpen
            their finance or management skills. He's here to exercise their brains.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-green-800">B.</span>
            Today’s workout, organised by a company called the Mind Gym in London, is
            entitled "having presence". What follows is an intense 90-minute
            session in which this rather abstract concept is gradually broken down into a
            concrete set of feelings, mental tricks and behaviours. At one point the
            bankers are instructed to shut then eyes and visualise themselves filling the
            room and then the building. They finish up by walking around the room acting
            out various levels of presence, from low-key to over the top.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-green-800">C.</span>
            It's easy to poke fun. Yet similar mental workouts are happening in corporate
            seminar rooms around the globe. The Mind Gym alone offers some 70 different
            sessions, including ones on mental stamina, creativity for logical thinkers and
            "zoom learning". Other outfits draw more directly on the exercise
            analogy, offering "neurobics" courses with names like "brain
            sets" and "cerebral fitness". Then there are books with titles
            like Pumping Ions, full of brainteasers that claim to "flex your
            mind", and software packages offering memory and spatial awareness games.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-green-800">D.</span>
            But whatever the style, the companies' sales pitch is invariably the same—
            follow our routines to shape and sculpt your brain or mind, just as you might
            tone and train your body. And, of course, they nearly all claim that their
            mental workouts draw on serious scientific research and thinking into how the
            brain works.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-green-800">E.</span>
            One outfit, Brainergy of Cambridge, Massachusetts (motto:
            "Because your grey matter matters") puts it like this: "Studies
            have shown that mental exercise can cause changes in brain anatomy and brain
            chemistry which promote increased mental efficiency and clarity. The
            neuroscience is cutting-edge." And on its website, Mind Gym trades on a
            quote from Susan Greenfield, one of Britain's best known neuroscientists:
            "It's a bit like going to the gym, if you exercise your brain it will
            grow."
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-green-800">F.</span>
            Indeed, die Mind Gym originally planned to hold its sessions in a local health
            club, until its founders realised where the real money was to be made. Modem
            companies need flexible, bright thinkers and will seize on anything that claims
            to create them, especially if it looks like a quick fix backed by science. But
            are neurobic workouts really backed by science? And do we need them?
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-green-800">G.</span>
            Nor is there anything remotely high-tech about what Lawrence Katz, co author of
            Keep Your Brain Alive, recommends. Katz, a neurobiologist at Duke University
            Medical School in North Carolina, argues that just as many of US fail to get
            enough physical exercise, so we also lack sufficient mental stimulation to keep
            our brain in trim. Sine we are busy with jobs, family and housework. But most
            of this activity is repetitive routine. And any leisure time is spent slumped
            in front of the TV.
        </p>
        
        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-green-800">H.</span>
            So, read a book upside down. Write or brush your teeth with your wrong hand.
            Feel your way around the room with your eyes shut. Sniff vanilla essence while
            listening intently to orchestral music. Anything, says Katz, to break your
            normal mental routine. It will help invigorate your brain, encouraging its
            cells to make new connections and pump out neuroteophins, substances that feed
            and sustain brain circuits.
        </p>
        
        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-green-800">I.</span>
            Well, up to a point it will. "What I'm really talking about is brain
            maintenance rather than bulking up your IQ," Katz adds. Neurobics, in
            other words, is about letting your brain fulfill its potential. It cannot
            create super-brains. Can it achieve even that much, though? Certainly the brain
            is an organ that can adapt to the demands placed on it. Tests on anim al brain
            tissue, for example, have repeatedly shown that electrically stimulating the
            synapses that connect nerve cells thought to be crucial to learning and
            reasoning, makes them stronger and more responsive. Brain scans suggest we use
            a lot more of our grey matter when carrying out new or strange tasks than when
            we're doing well-rehearsed ones. Rats raised in bright cages with toys sprout
            more neural connections than rats raised in bare cages— suggesting perhaps that
            novelty and variety could be crucial to a developing brain. Katz, And
            neurologists have proved time and again that people who lose brain cells
            suddenly during a stroke often sprout new connections to compensate for the
            loss—especially if they undergo extensive therapy to overcome any paralysis.
        </p>
        
        <!-- Section J -->
        <p class="mb-4">
            <span class="font-bold text-green-800">J.</span>
            Guy Claxton, an educational psychologist at the University of Bristol,
            dismisses most of the neurological approaches as "neuro-babble".
            Nevertheless, there are specific mental skills we can learn, he contends.
            Desirable attributes such as creativity, mental flexibility, and even
            motivation, are not the fixed faculties that most of US think. They are thought
            habits that can be learned. The problem, says Claxton, is that most of US never
            get proper training in these skills. We develop our own private set of mental
            strategies for tackling tasks and never learn anything explicitly. Worse still,
            because any learned skill— even driving a car or brushing our teeth-quickly
            sinks out of consciousness, we can no longer see the very thought habits we're
            relying upon. Our mental tools become invisible to US.
        </p>

        <!-- Section K -->
        <p class="mb-4">
            <span class="font-bold text-green-800">K.</span>
            Claxton is the academic adviser to the Mind Gym. So not surprisingly, the
            company espouses his solution-that we must return our thought patterns to a
            conscious level, becoming aware of the details of how we usually think. Only
            then can we start to practise better thought patterns, until eventually these
            become our new habits. Switching metaphors, picture not gym classes, but tennis
            or football coaching.
        </p>

        <!-- Section L -->
        <p class="mb-4">
            <span class="font-bold text-green-800">L.</span>
            In practice, the training can seem quite mundane. For example, in one of the
            eight different creativity workouts offered by the Mind Gym—entitled
            "creativity for logical thinkers" one of the mental strategies taught
            is to make a sensible suggestion, then immediately pose its opposite. So, asked
            to spend five minutes inventing a new pizza, a group soon comes up with no
            topping, sweet topping, cold topping, price based on time of day, flat-rate
            prices and so on.
        </p>

        <!-- Section M -->
        <p class="mb-4">
            <span class="font-bold text-green-800">M.</span>
            Bailey agrees that the trick is simple. But it is surprising how few such
            tricks people have to call upon when they are suddenly asked to be creative:
            "They tend to just label themselves as uncreative, not realising that
            there are techniques that every creative person employs." Bailey says the
            aim is to introduce people to half a dozen or so such strategies in a session
            so that what at first seems like a dauntingly abstract mental task becomes a
            set of concrete, learnable behaviors. He admits this is not a short cut to
            genius. Neurologically, some people do start with quicker circuits or greater
            handling capacity. However, with the right kind of training he thinks we can
            dramatically increase how efficiently we use it.
        </p>

        <!-- Section N -->
        <p>
            <span class="font-bold text-green-800">N.</span>
            It is hard to prove that the training itself is effective. How do you measure a
            change in an employee's creativity levels, or memory skills? But staff
            certainly report feeling that such classes have opened their eyes. So,
            neurological boosting or psychological training? At the moment you can pay your
            money and take your choice. Claxton for one believes there is no reason why
            schools and universities shouldn't spend more time teaching basic thinking
            skills, rather than trying to stuff heads with facts and hoping that effective
            thought habits are somehow absorbed by osmosis.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
            Finding Our Way
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">A.</span>
            "Drive 200 yards, and then turn right,” says the car’s computer voice. You
            relax in the driver's seat, follow the directions and reach your destination
            without error. It’s certainly nice to have the Global Positioning System (GPS)
            to direct you to within a few yards of your goal. Yet if the satellite
            service's digital maps become even slightly outdated, you can become lost. Then
            you have to rely on the ancient human skill of navigating in three-dimensional
            space. Luckily, your biological finder has an important advantage over GPS: it
            does not go awry if only one part of the guidance system goes wrong, because it
            works in various ways. You can ask questions of people on the sidewalk. Or
            follow a street that looks familiar. Or rely on a navigational rubric: "If
            I keep the East River on my left, I will eventually cross 34th Street."
            The human positioning system is flexible and capable of learning. Anyone who
            knows the way from point A to point B—and from A to C—can probably figure out
            how to get from B to c, too.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">B.</span>
            But how does this complex cognitive system really work? Researchers are looking
            at several strategies people use to orient themselves in space: guidance, path
            integration and route following. We may use all three or combinations thereof.
            And as experts learn more about these navigational skills, they are making the
            case that our abilities may underlie our powers of memory and logical thinking.
            Grand Central, Please Imagine that you have arrived in a place you have never
            visited-New York City. You get off the train at Grand Central Terminal in
            midtown Manhattan. You have a few hours to explore before you must return for
            your ride home. You head uptown to see popular spots you have been told about:
            Rockefeller Center, Central Park, and the Metropolitan Museum of Art. You
            meander in and out of shops along the way. Suddenly, it is time to get back to
            the station. But how?
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">C.</span>
            If you ask passersby for help, most likely you will receive information in many
            different forms. A person who orients herself by a prominent landmark would
            gesture southward: "Look down there. See the tall, broad MetLife Building?
            Head for that “the station is right below it." Neurologists call this
            navigational approach "guidance," meaning that a landmark visible
            from a distance serves as the marker for one's destination.
        </p>
        
        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">D.</span>
            Another city dweller might say: "What places do you remember passing? ...
            Okay. Go toward the end of Central Park, then walk down to St. Patrick's
            Cathedral. A few more blocks, and Grand Central will be off to your left."
            In this case, you are pointed toward the most recent place you recall, and you
            aim for it. Once there you head for the next notable place and so on, retracing
            your path. Your brain is adding together the individual legs of your trek into
            a cumulative progress report. Researchers call this strategy "path
            integration." Many animals rely primarily on path integration to get
            around, including insects, spiders, crabs and rodents. The desert ants of the
            genus Cataglyphis employ this method to return from foraging as far as 100 yards
            away. They note the general direction they came from and retrace then steps,
            using the polarization of sunlight to orient themselves even under overcast
            skies. On their way back they are faithful to this inn er homing vector. Even
            when a scientist picks up an ant and puts it in a totally different spot, the
            insect stubbornly proceeds in the originally determined direction until it has
            gone "back" all of the distance it wandered from its nest. Only then
            does the ant realize it has not succeeded, and it begins to walk in
            successively larger loops to find its way home.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">E.</span>
            Whether it is trying to get back to the anthill or the train station, any
            animal using path integration must keep track of its own movements so it knows,
            while returning, which segments it has already completed. As you move, your
            brain gathers data from your environment—sights, sounds, smells, lighting,
            muscle contractions, a sense of time passing—to determine which way your body
            has gone. The church spire, the sizzling sausages on that vendor's grill, the
            open courtyard, and the train station—all represent snapshots of memorable
            junctures during your journey.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">F.</span>
            In addition to guidance and path integration, we use a third method for finding
            our way. An office worker you approach for help on a Manhattan street comer
            might say: "Walk straight down Fifth, turn left on 47th, turn right on
            Park, go through the walkway under the Helmsley Building, then cross the street
            to the MetLife Building into Grand Central." This strategy, called route
            following, uses landmarks such as buildings and street names, plus
            directions-straight, turn, go through—for reaching intermediate points. Route
            following is more precise than guidance or path integration, but if you forget
            the details and take a wrong turn, the only way to recover is to backtrack
            until you reach a familiar spot, because you do not know the general direction
            or have a reference landmark for your goal. The route-following navigation
            strategy truly challenges the brain. We have to keep all the landmarks and
            intermediate directions in our head. It is the most detailed and therefore most
            reliable method, but it can be undone by routine memory lapses. With path
integration, our cognitive memory is less burdened; it has to deal with only a
            few general instructions and the homing vector. Path integration works because
            it relies most fundamentally on our knowledge of our body's general direction
            of movement, and we always have access to these inputs. Nevertheless, people
            often choose to give route-following directions, in part because saying
            "Go straight that way!" just does not work in our complex, man-made
            surroundings.
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">G.</span>
            Road Map or Metaphor? On your next visit to Manhattan you will rely on your
            memory to get around. Most likely you will use guidance, path integration and
            route following in various combinations. But how exactly do these constructs
            deliver concrete directions? Do we humans have, as an image of the real world,
            a kind of road map in our heads—with symbols for cities, train stations and
            churches; thick lines for highways; narrow lines for local streets?
            Neurobiologists and cognitive psychologists do call the portion of our memory
            that controls navigation a "cognitive map." The map metaphor is
            obviously seductive: maps are the easiest way to present geographic information
            for convenient visual inspection. In many cultures, maps were developed before
            writing, and today they are used in almost every society. It is even possible
            that maps derive from a universal way in which our spatial-memory networks are
            wired.
        </p>
        
        <!-- Section H -->
        <p>
            <span class="font-bold text-purple-800">H.</span>
            Yet the notion of a literal map in our heads may be misleading; a growing body
            of research implies that the cognitive map is mostly a metaphor. It may be more
            like a hierarchical structure of relationships. To get back to Grand Central,
            you first envision the large scale-that is, you visualize the general direction
            of the station. Within that system you then imagine the route to the last place
            you remember. After that, you observe your nearby surroundings to pick out a
            recognizable storefront or street comer that will send you toward that place.
            In this hierarchical, or nested, scheme, positions and distances are relative,
            in contrast with a road map, where the same information is shown in a
            geometrically precise scale.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-amber-700 mb-6">
            Mystery in Easter
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">A.</span>
            One of the world's
            most famous yet least visited archaeological sites, Easter Island is a small,
            hilly, now treeless island of volcanic origin. Located in the Pacific Ocean at
            27 degrees south of the equator and some 2200 miles (3600 kilometers) off the
            coast of Chile, it is considered to be the world's most remote inhabited
            island. The island is, technically speaking, a single massive volcano rising
            over ten thousand feet from the Pacific Ocean floor. The island received its
            most well-known current name, Easter Island, from the Dutch sea captain Jacob
            Roggeveen who became the first European to visit Easter Sunday, April 5,1722.
        </p>
        
        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">B.</span>
            In the early
            1950s, the Norwegian explorer Thor Heyerdahl popularized the idea that the
            island had been originally settled by advanced societies of Indians from the
            coast of South America. Extensive archaeological, ethnographic and linguistic
            research has conclusively shown this hypothesis to be inaccurate. It is now
            recognized that the original inhabitants of Easter Island are of Polynesian
            stock (DNA extracts from skeletons have confirmed this, that they most probably
            came from the Marquesas or Society islands, and that they arrived as early as
            318 AD (carbon dating of reeds from a grave confirms this). At the time of
            their arrival, much of the island was forested, was teeming with land birds,
            and was perhaps the most productive breeding site for seabirds in the Polynesia
            region. Because of the plentiful bird, fish and plant ' food sources, the human
            population grew and gave rise to a rich religious and artistic culture.
        </p>
        
        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">C.</span>
            That culture's most famous features are its enormous stone statues called moai,
            at least 288 of which once stood upon massive stone platforms called ahu. There
            are some 250 of these ahu platforms spaced approximately one half mile apart
            and creating an almost unbroken line around the perimeter of the island.
            Another 600 moai statues, in various stages of completion, are scattered around
            the island, either in quarries or along ancient roads between the quarries and
            the coastal areas where the statues were most often erected. Nearly all the
            moai are carved from the tough stone of the Rano Raraku volcano. The average
            statue is 14 feet and 6 inches tall and weighs 14 tons. Some moai were as large
            as 33 feet and weighed more than 80 tons. Depending upon the size of the
            statues, it has been estimated that between 50 and 150 people were needed to
            drag them across the countryside on sleds and rollers made from the island's
            trees.
        </p>
        
        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">D.</span>
            Scholars are unable to definitively explain the function and use of the moai
            statues. It is assumed that their carving and erection derived from an idea
            rooted in similar practices found elsewhere in Polynesia but which evolved in a
            unique way on Easter Island. Archaeological and iconographic analysis indicates
            that the statue cult was based on an ideology of male, lineage based authority
            incorporating anthropomorphic symbolism. The statues were thus symbols of
            authority and power, both religious and political. But they were not only
            symbols. To the people who erected and used them, they were actual repositories
            of sacred spirit. Carved stone and wooden objects in ancient Polynesian
            religions, when properly fashioned and ritually prepared, were believed to be
            charged by a magical spiritual essence called mana. The ahu platforms of Easter
            Island were the sanctuaries of the people, and the moai statues were the
            ritually charged sacred objects of those sanctuaries.
        </p>
        
        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">E.</span>
            Besides its more well-known name, Easter Island is also known as Te-Pito-O
            Te-Henua, meaning 'The Navel of the World', and as Mata-Ki-Te-Rani, meaning '
            Eyes Looking at Heaven '. These ancient name and a host of mythological details
            ignored by mainstream archaeologists, point to the possibility that the remote
            island may once have been a geodetic marker and the site of an astronomical
            observatory of a long forgotten civilization. In his book. Heaven's Mirror,
            Graham Hancock suggests that Easter Island may once have been a significant
            scientific outpost of this antediluvian civilization and that its location had
            extreme importance in a planet-spanning, mathematically precise grid of sacred
            sites. Two other alternative scholars, Christopher Knight and Robert Lomas,
            have extensively studied the location and possible function of these geodetic
            markers. In their fascinating book, Uriel's Machine, they suggest that one
            purpose of the geodetic markers was as part of global network of sophisticated
            astronomical observatories dedicated to predicting and preparing for future
            commentary impacts and crystal displacement cataclysms.
        </p>
        
        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">F.</span>
            In the latter years of the 20th century and the first years of the 21st century
            various writers and scientists have advanced theories regarding the rapid
            decline of Easter Island's magnificent civilization around the time of the
            first European contact. Principal among these theories, and now shown to be
            inaccurate, is that postulated by Jared Diamond in his book Collapse: How
            Societies Choose to or Survive. Basically these theories state that a few
            centuries after Easter Island's initial colonization the resource needs of the
            growing population had begun to outpace the island's capacity to renew itself
            ecologically. By the 1400s the forests had been entirely cut, the rich ground
            cover had eroded away, the springs had dried up, and the vast flocks of birds
            coming to roost on the island had disappeared. With no logs to build canoes for
            offshore fishing, with depleted bird and wildlife food sources, and with
            declining crop yields because of the erosion of good soil, the nutritional
            intake of the people plummeted. First famine, then cannibalism, set in. Because
            the island could no longer feed the chiefs, bureaucrats and priests who kept
            the complex society running, the resulting chaos triggered a social and
            cultural collapse. By 1700 the population dropped to between one-quarter and
            one-tenth of its former number, and many of the statues were toppled during
            supposed "clan wars " of the 1600 and 1700s.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-amber-800">G.</span>
            The faulty notions presented in these theories began with the racist
            assumptions of Thor Heyerdahl and have been perpetuated by writers, such as
            Jared Diamond, who do not have sufficient archaeological and historical
            understanding of the actual events which occurred on Easter Island. The real
            truth regarding the tremendous social devastation which occurred on Easter
            Island is that it was a direct consequence of the inhumane behavior of many of
            the first European visitors, particularly the slavers who raped and murdered
            the islanders, introduced small pox and other diseases, and brutally removed
            the natives to mainland South America.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-rose-700 mb-6">
            The Mozart Effect
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">A.</span>
            Music has been used for centuries to heal the body. In the Ebers Papyrs (one of
            the earliest medical documents, circa 1500 B.C.), it was recorded that
            physicians chanted to heal the sick (Castleman, 1994). In various cultures, we
            have observed singing as part of healing rituals. In the world of Western
            medicine, however, using music in medicine lost popularity until the
            introduction of the radio. Researchers then started to notice that listening to
            music could have significant physical effects. Therapists noticed music could
            help calm anxiety and researchers saw that listening to music could cause a
            drop in blood pressure. In addition to these two areas, music has been used
            with cancer chemotherapy to reduce nausea, during surgery to reduce stress
            hormone production, during childbirth, and in stroke recovery (Castleman, 1994
            and Westley, 1998). It has been shown to decrease pain as well as enhance the
            effectiveness of the immune system. In Japan, compilations of music are used as
            medication, of sorts. For example, if you want to cure a headache or migraine,
            the album suggested Mendelssohn's "Spring Song," Dvorak's
            "Humoresque," or part of George Gershwin's "An American in
            Paris" (Campbell, 1998). Music is also being used to assist in learning,
            in a phenomenon called the Mozart Effect.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">B.</span>
            Frances H. Rauscher, Ph.D., first demonstrated the correlation between music
            and learning in an experiment in 1993. His experiments indicated that a 10
            minute dose of Mozart could temporarily boost intelligence. Groups of students
            were given intelligence tests after listening to silence, relaxation tapes, or
            Mozart's Sonata for Two Pianos in D Major for a short time. He found that after
            silence, the average IQ score was 110, and after the relaxation tape, scores
            rose a point. After listening to Mozart, however, the scores jumped to 119
            (Westley, 1998). Even students who did not like the music still had an
            increased score on the IQ test. Rauscher hypothesized that "listening to
            complex, non-repetitive music, like Mozart, may simulate neural pathways that
            are important in thinking" (Castleman, 1994).
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">C.</span>
            The same experiment was repeated on rats by Rauscher and Hong Hua Li from
            Stanford. Rats also demonstrated enhancement in their intelligence performance.
            These new studies indicate that rats that were exposed to Mozart showed
            "increased gene expression of BDNF (a neural growth factor), CREB (a
            learning and memory compound), and Synapsin I(a synaptic growth protein)"
            in the brain's hippocampus, compared with rats in the control group, which
            heard only white noise (e.g. the whooshing sound of a radio tuned between
            stations).
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">D.</span>
            How exactly does the Mozart affect work? Researchers are still trying to
            determine the actual mechanisms for the formation of these enhanced learning
            pathways. Neuroscientists suspect that music can actually help build and
            strengthen connections between neurons in the cerebral cortex in a process
            similar to what occurs in brain development despite its type. When a baby is
            born, certain connections have already been made - like connections for
            heartbeat and breathing. As new information is learned and motor skills
            develop, new neural connections are formed. Neurons that are not used will
            eventually die while those used repeatedly will form strong connections.
            Although a large number of these neural connections require experience, they
            also must occur within a certain time frame. For example, a child born with
            cataracts cannot develop connections within the visual cortex. If the cataracts
            are removed by surgery right away, the child's vision develops normally.
            However, after the age of 2, if the cataracts are removed, the child will
            remain blind because those pathways cannot establish themselves.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">E.</span>
            Music seems to work in the same way. In October of 1997, researchers at the
            University of Konstanz in Germany found that music actually rewires neural
            circuits (Begley, 1996). Although some of these circuits are formed for
            physical skills needed to play an instrument, just listening to music
            strengthens connection used in higher-order thinking. Listening to music can
            then be thought of as "exercise" for the brain, improving
            concentration and enhancing intuition.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">F.</span>
            If you're a little skeptical about the claims made by supporters of the Mozart
            Effect, you're not alone. Many people accredit the advanced learning of some
            children who take music lessons to other personality traits, such as motivation
            and persistence, which is required in all types of learning. There have also
            been claims of that influencing the results of some experiments.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">G.</span>
            Furthermore, many people are critical of the role the media had in turning an
            isolated study into a trend for parents and music educators. After Mozart
            Effect was published to the public, the sales of Mozart CDs stayed on the top
            of the hit list for three weeks. In an article by Michael Linton, he wrote that
            the research that began this phenomenon (the study by researchers at the
            University of California Irvine) showed only a temporary boost in IQ, which was
            not significant enough to even last throughout the course of the experiment.
            Using music to influence intelligence was used in Confucian civilization and
            Plato alluded to Pythagorean music when he described is ideal state in The
            Republic. In both of these examples, music did not have caused any overwhelming
            changes, and the theory eventually died out. Linton also asks, "If
            Mozart's Music were able to improve health, why was Mozart himself so
            frequently sick? If listening to Mozart's music increases intelligence and
            encourages spirituality, why aren't the world's smartest and most spiritual
            people Mozart specialists?" Linton raises an interesting point, if the
            Mozart Effect causes such significant changes, why isn't there more documented
            evidence?
        </p>
        
        <!-- Section H -->
        <p>
            <span class="font-bold text-rose-800">H.</span>
            The "trendiness" of the Mozart Effect
            may have died out somewhat, but there are still strong supporters (and
            opponents) of the claims made in 1993. Since that initial experiment, there has
            not been a surge of supporting evidence. However, many parents, after playing
            classical music while pregnant or when theft children are young, will swear by
            the Mozart Effect. A classmate of mine once told me that listening to classical
            music while studying will help with memorization. If we approach this controversy
            from a scientific aspect, although there has been some evidence that music does
            increase brain activity, actual improvements in learning and memory have not
            been adequately demonstrated.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-cyan-700 mb-6">
            London Swaying Footbridge
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">A.</span>
            In September 1996 a competition was organized by the Financial Times in
            association with the London Borough of Southwark to design a new footbridge
            across the Thames. The competition attracted over 200 entries and was won by a
            team comprising Arup (engineers), Foster and Partners (architects) and the
            sculptor Sir Anthony Caro.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">B.</span>
            The bridge opened to the public on 10 June 2000. Up to 100,000 people crossed
            it that day with up to 2000 people on the bridge at any one time. At first, the
            bridge was still. Then it began to sway just slightly. Then, almost from one
            moment to the next, when large groups of people were crossing, the wobble
            intensified. This movement became sufficiently large for people to stop walking
            to retain their balance and sometimes to hold onto the hand rails for support.
            It was decided immediately to limit the number of people on the bridge, but
            even so the deck movement was sufficient to be uncomfortable and to raise
            concern for public safety so that on 12 June the bridge was closed until the
            problem could be solved.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">C.</span>
            The embarrassed engineers found the videotape that day which showed the center
            span swaying about 3 inches side to side every second. The engineers first
            thought that winds might be exerting excessive force on the many large flags
            and banners bedecking the bridge for its gala premiere. What’s more, they also
            discovered that the pedestrians also played a key role. Human activities, such
            as walking, running, jumping, swaying, etc. could cause horizontal force which
            in turn could cause excessive dynamic vibration in the lateral direction in the
            bridge. As the structure began moving, pedestrians adjusted their gait to the
            same lateral rhythm as the bridge. The adjusted footsteps magnified the motion
            just like when four people all stand up in a small boat at the same time. As
            more pedestrians locked into the same rhythm, the increasing oscillations led
            to the dramatic swaying captured on film.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">D.</span>
            In order to design a method of reducing the movements, the force exerted by the
            pedestrians had to be quantified and related to the motion of the bridge.
            Although there are some descriptions of this phenomenon in existing literature,
            none of these actually quantifies the force. So there was no quantitative
            analytical way to design the bridge against this effect. An immediate research
            program was launched by the bridge's engineering designers Ove Arup, supported
            by a number of universities and research organizations.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">E.</span>
            The tests at the University of Southampton involved a person walking ‘on the
            spot’ on a small shake table. The tests at Imperial College involved persons
            walking along a specially built, 7.2m-long platform which could be driven
            laterally at different frequencies (n and amplitudes. Each type of test had its
            limitations. The Imperial College tests were only able to capture 7-8
            footsteps, and the ‘walking on the spot’ tests, although monitoring many
            footsteps, could not investigate normal forward walking. Neither test could
            investigate any influence of other people in a crowd on the behavior of the
            individual being tested.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">F.</span>
            The results of the laboratory tests provided information which enabled the
            initial design of a retro- fit to be progressed. However, the limitations of
            these tests was clear and it was felt that the only way to replicate properly
            the precise conditions of the Millennium Bridge was to carry out crowd tests on
            the bridge deck itself. These tests done by the Arup engineers could
            incorporate factors not possible in the laboratory tests. The first of these
            was carried out with 100 people in July 2000. The results of these tests were
            used to refine the load model for the pedestrians. A second series of crowd
            tests was carried out on the bridge in December 2000. The purpose of these
            tests was to further validate the design assumptions and to load test a prototype
            damper installation. The test was carried out with 275 people.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-cyan-800">G.</span>
            Unless the usage of the bridge was to be
            greatly restricted, only two generic options to improve its performance were
            considered feasible. The first was to increase the stiffness of the bridge to
            move all its lateral natural frequencies out of the range that could be excited
            by the lateral footfall forces, and the second was to increase the damping of
            the bridge to reduce the resonant response.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-slate-700 mb-6">
            Book review on Musiccophilia
        </h1>

        <p class="mb-4">
            Norman
            M. Weinberger reviews the latest work of Oliver Sacks
        </p>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">A.</span>
            Music and the brain are both endlessly fascinating subjects, and as a
            neuroscientist specialising in auditory learning and memory, I find them
            especially intriguing. So I had high expectations of Musicophilia, the latest
            offering from neurologist and prolific author Oliver Sacks. And I confess to
            feeling a little guilty reporting that my reactions to the book are mixed.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">B.</span>
            Sacks himself is the best part of Musicophilia. He richly documents his own
            life in the book and reveals highly personal experiences. The photograph of him
            on the cover of the book-which shows him wearing headphones, eyes closed,
            clearly enchanted as he listens to Alfred Brendel perform Beethoven’s
            Pathetique Sonata-makes a positive impression that is home out by the contents
            of the book. Sacks’s voice throughout is steady and erudite but never
            pontifical. He is neither self-conscious nor self-promoting.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">C.</span>
            The preface gives a good idea of what the book will deliver. In it Sacks
            explains that he wants to convey the insights gleaned from the “enormous and
            rapidly growing body of work on the neural underpinnings of musical perception
            and imagery, and the complex and often bizarre disorders to which these are
            prone.” He also stresses the importance of “the simple art of observation” and
            “the richness of the human context.” He wants to combine “observation and
            description with the latest in technology,” he says, and to imaginatively enter
            into the experience of his patients and subjects. The reader can see that
            Sacks, who has been practicing neurology for 40 years, is tom between the ‘
            old-fashioned path o observation and the new fangled, high-tech approach: He
            knows that he needs to take heed of the latter, but his heart lies with the
            former.
        </p>
        
        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">D.</span>
            The book consists mainly of detailed descriptions of cases, most of them
            involving patients whom Sacks has seen in his practice. Brief discussions of
            contemporary neuroscientific reports are sprinkled liberally throughout the
            text. Part, “Haunted by Music,” begins with the strange case of Tony Cicoria, a
            nonmusical, middle-aged surgeon who was consumed by a love of music after being
            hit by lightning. He suddenly began to crave listening to piano music, which he
            had never cared for in the past. He started to play the piano and then to
            compose music, which arose spontaneously in his mind in a “torrent” of notes.
            How could this happen? Was the cause psychological? (He had had a near-death
            experience when the lightning struck him.) Or was it the direct result of a
            change in the auditory regions of his cerebral cortex? Electroencephalography
            (EEG) showed his brain waves to be normal in the mid-1990s, just after his,
            trauma and subsequent “conversion” to music. There are now more sensitive
            tests, but Cicoria, has declined to undergo them; he does not want to delve
            into the causes of his musicality. What a shame!
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">E.</span>
            Part II, “A Range of Musicality,” covers a wider variety of topics, but
            unfortunately, some of the chapters offer little or nothing that is new. For
            example, chapter 13, which is five pages long, merely notes that the blind
            often have better hearing than the sighted. The most interesting chapters are
            those that present the strangest cases. Chapter 8 is about “amusia,” an
            inability to hear sounds as music, and “dysharmonia,” a highly specific
            impairment of the ability to hear harmony, with the ability to understand
            melody left intact. Such specific “dissociations” are found throughout the
            cases Sacks recounts.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">F.</span>
            To Sacks’ credit, part III, “Memory, Movement and Music,”
            brings US into the underappreciated realm of music therapy. Chapter 16 explains
            how “melodic intonation therapy” is being used to help expressive aphasic
            patients (those unable to express their thoughts verbally following a stroke or
            other cerebral incident) once again become capable of fluent speech. In chapter
            20, Sacks demonstrates the near-miraculous power of music to animate
            Parkinson’s patients and other people with severe movement disorders, even
            those who are frozen into odd postures. Scientists cannot yet explain how music
            achieves this effect
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">G.</span>
            To readers who are unfamiliar with neuroscience and music behavior,
            Musicophilia may be something of a revelation. But the book will not satisfy
            those seeking the causes and implications of the phenomena Sacks describes. For
            one thing, Sacks appears to be more at ease discussing patients than discussing
            experiments. And he tends to be rather uncritical in accepting scientific
            findings and theories.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">H.</span>
            It’s true that the causes of music-brain oddities remain poorly understood.
            However, Sacks could have done more to draw out some of the implications of the
            careful observations that he and other neurologists have made and of the
            treatments that have been successful. For example, he might have noted that the
            many specific dissociations among components of music comprehension, such as
            loss of the ability to perceive harmony but not melody, indicate that there is
            no music center in the brain. Because many people who read the book are likely
            to believe in the brain localisation of all mental functions, this was a missed
            educational opportunity.
        </p>

        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-slate-800">I.</span>
            Another conclusion one could draw is that there seem to be no “cures” for
            neurological problems involving music. A drug can alleviate a symptom in one
            patient and aggravate it in another, or can have both positive and negative
            effects in the same patient. Treatments mentioned seem to be almost exclusively
            antiepileptic medications, which “damp down” the excitability of the brain in
            general; their effectiveness varies widely.
        </p>

        <!-- Section J -->
        <p>
            <span class="font-bold text-slate-800">J.</span>
            Finally, in many of the cases described here the patient with music-brain
            symptoms is reported to have “normal” EEG results. Although Sacks recognises
            the existence of new technologies, among them far more sensitive ways to
            analyze brain waves than the standard neurological EEG test, he does not call
            for their use. In fact, although he exhibits the greatest compassion for
            patients, he conveys no sense of urgency about the pursuit of new avenues in
            the diagnosis and treatment of music-brain disorders. This absence echoes the
            book’s preface, in which Sacks expresses fear that “the simple art of
            observation may be lost” if we rely too much on new technologies. He does call
            for both approaches, though, and we can only hope that the neurological
            community will respond.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-lime-700 mb-6">
            The coming back of the “Extinct” Grass in Britain
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">A.</span>
            It's Britain's dodo, called interrupted brome because of its gappy seed-head,
            this unprepossessing grass was found nowhere else in the world. Sharp-eyed
            Victorian botanists were the first to notice it, and by the 1920s the odd
            looking grass had been found across much of southern England. Yet its decline
            was just as dramatic. By 1972 it had vanished from its last toehold-two hay
            fields at Pampisford, near Cambridge. Even the seeds stored at the Cambridge
            University Botanic Garden as an insurance policy were dead, having been
            mistakenly kept at room temperature. Botanists mourned: a unique living entity
            was gone forever.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">B.</span>
            Yet reports of its demise proved premature. Interrupted brome has come back
            from the dead, and not through any fancy genetic engineering. Thanks to one
            green-fingered botanist, interrupted brome is alive and well and living as a
            pot plant. Britain's dodo is about to become a phoenix, as conservationists set
            about relaunching its career in the wild.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">C.</span>
            At first, Philip Smith was unaware that the scrawny pots of grass on his bench
            were all that remained of a uniquely British species. But when news of the
            "extinction" of Bromus interruptus finally reached him, he decided to
            astonish his colleagues. He seized his opportunity at a meeting of the
            Botanical Society of the British Isles in Manchester in 1979, where he was
            booked to talk about his research on the evolution of the brome grasses. It was
            sad, he said, that interrupted brome had become extinct, as there were so many
            interesting questions botanists could have investigated. Then he whipped out
            two enormous pots of it. The extinct grass was very much alive.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">D.</span>
            It turned out that Smith had collected seeds from the brome's last refuge at
            Pampisford in 1963, shortly before the species disappeared from the wild
            altogether. Ever since then, Smith had grown the grass on, year after year. So
            in the end the hapless grass survived not through some high-powered
            conservation scheme or fancy genetic manipulation, but simply because one man
            was interested in it. As Smith points out, interrupted brome isn't particularly
            attractive and has no commercial value. But to a plant taxonomist, that's not
            what makes a plant interesting.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">E.</span>
            The brome's future, at least in cultivation, now seems assured. Seeds from
            Smith's plants have been securely stored in the state-of-the-art Millennium
            Seed Bank at Wakehurst Place in Sussex. And living plants thrive at the botanic
            gardens at Kew, Edinburgh and Cambridge. This year, "bulking up" is
            under way to make sure there are plenty of plants in all the gardens, and
            sackfuls of seeds are being stockpiled at strategic sites throughout the
            country.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">F.</span>
            The brome's relaunch into the British countryside is next on the agenda.
            English Nature has included interrupted brome in its Species Recovery
            Programme, and it is on track to be reintroduced into the agricultural
            landscape, if friendly farmers can be found. Alas, the grass is neither pretty
            nor useful-in fact, it is undeniably a weed, and a weed of a crop that nobody
            grows these days, at that. The brome was probably never common enough to
            irritate farmers, but no one would value it today for its productivity or its
            nutritious qualities. As a grass, it leaves agriculturalists cold.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">G.</span>
            So where did it come from? Smith's research into the
            taxonomy of the brome grasses suggests that interruptus almost certainly
            mutated from another weedy grass, soft brome, hordeaceus. So close is the
            relationship that interrupted brome was originally deemed to be a mere variety
            of soft brome by the great Victorian taxonomist Professor Hackel. But in 1895,
            George Claridge Druce, a 45-year-old Oxford pharmacist with a shop on the High
            Street, decided that it deserved species status, and convinced the botanical
            world. Druce was by then well on his way to fame as an Oxford don, mayor of the
            city, and a fellow of the Royal Society. A poor boy from Northamptonshire and a
            self-educated man, Druce became the leading field botanist of his generation.
            When Druce described a species, botanists took note.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">H.</span>
            The brome's parentage may be clear, but the timing of its birth is more
            obscure. According to agricultural historian Joan Thirsk, sainfoin and its
            friends made their first modest appearance in Britain in the early 1600s. Seeds
            brought in from the Continent were sown in pastures to feed horses and other
            livestock. But in those early days, only a few enthusiasts-mostly gentlemen
            keen to pamper theft best horses—took to the new crops.
        </p>

        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">I.</span>
            Although the credit for the "discovery" of interrupted brome goes to
            a Miss A. M. Barnard, who collected the first specimens at Odsey, Bedfordshire,
            in 1849. The grass had probably lurked undetected in the English countryside
            for at least a hundred years. Smith thinks the botanical dodo probably evolved
            in the late 17th or early 18th century, once sainfoin became established.
        </p>

        <!-- Section J -->
        <p>
            <span class="font-bold text-lime-800">J.</span>
            Like many once-common arable weeds, such as the corncockle, interrupted brome
            seeds cannot survive long in the soil. Each spring, the brome relied on farmers
            to resow its seeds; in the days before weedkillers and sophisticated seed
            sieves, an ample supply would have contaminated stocks of crop seed. But
            fragile seeds are not the brome's only problem: this species is also reluctant
            to release its seeds as they ripen. Show it a ploughed field today and this
            grass will struggle to survive, says Smith. It will be difficult to establish
            in today's "improved" agricultural landscape, inhabited by
            notoriously vigorous competitors.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-emerald-700 mb-6">
            CHILDREN’S LITERATURE
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">A.</span>
            Stories and poems aimed at children have an exceedingly long history:
            lullabies, for example, were sung in Roman times, and a few nursery games and
            rhymes are almost as ancient. Yet so far as written-down literature is
            concerned, while there were stories in print before 1700 that children often
            seized on when they had the chance, such as translations of Aesop’s fables,
            fairy-stories and popular ballads and romances, these were not aimed at young
            people in particular. Since the only genuinely child-oriented literature at
            this time would have been a few instructional works to help with reading and
            general knowledge, plus the odd Puritanical tract as an aid to morality, the
            only course for keen child readers was to read adult literature. This still
            occurs today, especially with adult thrillers or romances that include more
            exciting, graphic detail than is normally found in the literature for younger
            readers.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">B.</span>
            By the middle of the 18th century there were enough eager child readers, and
            enough parents glad to cater to this interest, for publishers to specialize in
            children’s books whose first aim was pleasure rather than education or
            morality. In Britain, a London merchant named Thomas Boreham produced Cajanus,
            The Swedish Giant in 1742, while the more famous John Newbery published A
            Little Pretty Pocket Book in 1744.1ts contents rhymes, stories, children’s
            games plus a free gift (‘A ball and a pincushion’) in many ways anticipated the
            similar lucky-dip contents of children’s annuals this century. It is a tribute
            to Newbery’s flair that he hit upon a winning formula quite so quickly, to be
            pirated almost immediately in America.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">C.</span>
            Such pleasing levity was not to last. Influenced by Rousseau, whose (1762)
            decreed that all books for children save Robinson Crusoe were a dangerous
            diversion, contemporary critics saw to it that children’s literature should be
            instructive and uplifting. Prominent among such voices was Mrs. Sarah Trimmer,
            whose magazine The Guardian of Education (1802) carried the first regular
            reviews of children’s books. It was she who condemned fairy-tales for their
            violence and general absurdity; her own stories, Fabulous Histories (1786)
            described talking animals who were always models of sense and decorum.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">D.</span>
            So the moral story for children was always threatened from within, given the
            way children have of drawing out entertainment from the sternest moralist. But
            the greatest blow to the improving children’s book was to come from an unlikely
            source indeed: early 19th-century interest in folklore. Both nursery rhymes,
            selected by James Orchard Halliwell for a folklore society in 1842, and
            collection of fairy-stories by the scholarly Grimm brothers, swiftly translated
            into English in 1823, soon rocket to popularity with the young, quickly leading
            to new editions, each one more child-centered than the last. From now on
            younger children could expect stories written for their particular interest and
            with the needs of their own limited experience of life kept well to the fore.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">E.</span>
            What eventually determined the reading of older children was often not the
            availability of special children’s literature as such but access to books that
            contained characters, such as young people or animals, with whom they could
            more easily empathize, or action, such as exploring or fighting that made few
            demands on adult maturity or understanding.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">F.</span>
            The final apotheosis of literary
            childhood as something to be protected from unpleasant reality came with the
            arrival in the late 1930s of child-centered best sellers intend on
            entertainment at its most escapist. In Britain novelist such as Enid Blyton and
            Richmal Crompton described children who were always free to have the most
            unlikely adventures, secure in the knowledge that nothing bad could ever happen
            to them in the end. The fact that war broke out again during her books’
            greatest popularity fails to register at all in the self-enclosed world
            inhabited by Enid Blyton’s young characters. Reaction against such dream-worlds
            was inevitable after World War II, coinciding with the growth of paperback
            sales, children’s libraries and a new spirit of moral and social concern. Urged
            on by committed publishers and progressive librarians, writers slowly began to
            explore new areas of interest while also shifting the settings of their plots
            from the middle-class world to which their chiefly adult patrons had always
            previously belonged.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-emerald-800">G.</span>
            Critical emphasis, during this development, has been divided. For some the most
            important task was to rid children’s books of the social prejudice and
            exclusiveness no longer found acceptable. Others concentrated more on the
            positive achievements of contemporary children’s literature. That writers of
            these works are now often recommended to the attentions of adult as well as
            child readers echoes the 19th-century belief that children’s literature can be
            shared by the generations, rather than being a defensive barrier between
            childhood and the necessary growth towards adult understanding.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-sky-700 mb-6">
            Beyond the Blue Line
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">A.</span>
            Much of the thrill of venturing to the far side of the world rests on the
            romance of difference. So one feels certain sympathy for Captain James Cook on
            the day in 1778 that he ’’discovered” Hawaii. Then on his third expedition to
            the Pacific, the British navigator had explored scores of islands across the
            breadth of the sea, from lush New Zealand to the lonely wastes of Easter
            Island. This latest voyage had taken him thousands of miles north from the
            Society Islands to an irchipelago so remote that even the old Polynesians back
            on Tahiti knew nothing about it. Imagine Cook’s surprise, then, when the
            natives of Hawaii came paddling out in their canoes and greeted him in a
            familiar tongue, one he had heard on virtually every mote of inhabited land he
            had visited. Marveling at the ubiquity of this Pacific language and culture, he
            later wondered in his journal: "How shall we account for this Nation
            spreading itself so far over this vast ocean?”
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">B.</span>
            That question, and others that flow from it, has tantalized inquiring minds for
            centuries: Who were these amazing seafarers? Where did they come from, starting
            more than 3,000 years ago? And how could a Neolithic people with simple canoes
            and no navigation gear manage to find, let alone colonize, hundreds of
            far-flung island specks scattered across an ocean that spans nearly a third of
            the globe? Answers have been slow in coming. But now a startling archaeological
            find on the island of Efate, in the Pacific nation of Vanuatu, has revealed an
            ancient seafaring people, the distant ancestors of today’s Polynesians, taking
            their first steps into the unknown. The discoveries there have also opened a
            window into the shadowy world of those early voyagers.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">C.</span>
            ’’What we have is a first- or second-generation site containing the graves of
            some of the Pacific’s first explorers," says Spriggs, professor of
            archaeology at the Australian National University and co-leader of an
            international team excavating the site. It came to light only by luck. A
            backhoe operator, digging up topsoil on the grounds of a derelict coconut
            plantation, scraped open a grave— the first of dozens in a burial ground some
            3,000 years old. It is the oldest cemetery ever found in the Pacific islands,
            and it harbors the bones of an ancient people archaeologists call the Lapita, a
            label that derives from a beach in New Caledonia where a landmark cache of
            their pottery was found in the 1950s.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">D.</span>
            They were daring blue-water adventurers who oved the sea not just as explorers
            but also as pioneers, bringing along everything they would need to build new
            lives—their families and livestock, taro seedlings and stone tools. Within the
            span of a few centuries the Lapita stretched the boundaries of their world from
            the jungle-clad volcanoes of Papua New Guinea to the loneliest coral outliers
            of Tonga, at least 2,000 miles eastward in the Pacific. Along the way they
            explored millions of square miles of unknown sea, discovering and colonizing
            scores of tropical islands never before seen by human eyes: Vanuatu, New
            Caledonia, Fiji, Samoa. It was their descendants, centuries later, who became
            the great Polynesian navigators we all tend to think of: the Tahitians and
            Hawaiians, the New Zealand Maori, and the curious people who erected those
            statues on Easter Island. But it was the Lapita who laid the foundation—who
            bequeathed to the islands the language, customs, and cultures that their more
            famous descendants carried around the Pacific.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">E.</span>
            While the Lapita left a glorious legacy, they also left precious few clues
            about themselves. A particularly intriguing clue comes from chemical tests on
            the teeth of several skeletons. Then as now, the food and water you consume as
            a child deposits oxygen, carbon, strontium, and other elements in your
            still-forming adult teeth. The isotope signatures of these elements vary subtly
            from place to place, so that if you grow up in, say, Buffalo, New York, then
            spend your adult life in California, tests on the isotopes in your teeth will
            always reveal your eastern roots. Isotope analysis indicates that several of
            the Lapita buried on Efate didn't spend their childhoods here but came from
            somewhere else. And while isotopes can't pinpoint their precise island of
            origin, this much is clear: At some point in their lives, these people left the
            villages of their birth and made a voyage by seagoing canoe, never to return.
            DNA teased from these ancient bones may also help answer one of the most
            puzzling questions in Pacific anthropology: Did all Pacific islanders spring
            from one source or many? Was there only one outward migration from a single
            point in Asia, or several from different points? "This represents the best
            opportunity we've had yet," says Spriggs, "to find out who the Lapita
            actually were, where they came from, and who their closest descendants are
            today."
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">F.</span>
            There is one stubborn question for which archaeology has yet to provide any
            answers: How did the Lapita accomplish the ancient equivalent of a moon
            landing, many times over? No one has found one of their canoes or any rigging,
            which could reveal how the canoes were sailed. Nor do the oral histories and
            traditions of later Polynesians offer any insights. "All we can say for
            certain is that the Lapita had canoes that were capable of ocean voyages, and
            they had the ability to sail them," says Geoff Irwin, a professor of
            archaeology at the University of Auckland and an avid yachtsman. Those sailing
            skills, he says, were developed and passed down over thousands of years by
            earlier mariners who worked their way through the archipelagoes of the 
            western Pacific
            making short crossings to islands within sight of each other. The real
            adventure didn't begin, however, until their Lapita descendants neared the end
            of the Solomons chain, for this was the edge of the world. The nearest
            landfall, the Santa Cruz Islands, is almost 230 miles away, and for at least
            150 of those miles the Lapita sailors would have been out of sight of land,
            with empty horizons on every side.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">G.</span>
            The Lapita’s thrust into the Pacific was eastward, against the prevailing trade
            winds, Irwin notes. Those nagging headwinds, he argues, may have been the key
            to their success. 'They could sail out for days into the unknown and
            reconnoiter, secure in the knowledge that if they didn't find anything, they
            could turn about and catch a swift ride home on the trade winds. It's what made
            the whole thing work." Once out there, skilled seafarers would detect
            abundant leads to follow to land: seabirds and turtles, coconuts and twigs
            carried out to sea by the tides, and the afternoon pileup of clouds on the
            horizon that often betokens an island in the distance. All this presupposes one
            essential detail, says Atholl Anderson, professor of prehistory at the Australian
            National University and, like Irwin, a keen yachtsman: that the Lapita had
            mastered the advanced art of tacking into the wind. "And there's no proof
            that they could do any such thing," Anderson says. "There has been
            this assumption that they must have done so, and people have built canoes to
            re-create those early voyages based on that assumption. But nobody has any idea
            what their canoes looked like or how they were rigged."
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">H.</span>
            However they did it, the Lapita spread themselves a third of the way across the
            Pacific, then called it quits for reasons known only to them. Ahead lay the
            vast emptiness of the central Pacific, and perhaps they were too thinly
            stretched to venture farther. They probably never numbered more than a few
            thousand in total, and in their rapid migration eastward they encountered
            hundreds of islands —more than 300 in Fiji alone. Supplied with such an
            embarrassment of riches, they could settle down and enjoy what for a time were
            Earth's last Edens.
        </p>

        <!-- Section I -->
        <p>
            <span class="font-bold text-sky-800">I.</span>
            Rather than give all the credit to human skill and daring, Anderson invokes the
            winds of chance. El Nino, the same climate disruption that affects the Pacific
            today, may have helped scatter the first settlers to the ends of the ocean,
            Anderson suggests. Climate data obtained from slow-growing corals around the
            Pacific and from lake-bed sediments in the Andes of South America point to a
            series of unusually frequent El Ninos around the time of the Lapita expansion,
            and again between 1,600 and 1,200 years ago, when the second wave of pioneer
            navigators made their voyages farther east, to the remotest comers of the
            Pacific. By reversing the regular east-to-west flow of the trade winds for
            weeks at a time, these "super El Ninos" might have sped the Pacific's
            ancient mariners on long, unplanned voyages far over the horizon. The volley of
            El Ninos that coincided with the second wave of voyages could have been key to
            launching Polynesians across the wide expanse of open water between Tonga,
            where the Lapita stopped, and the distant archipelagoes of eastern Polynesia.
            "Once they crossed that gap, they could island hop throughout the region,
            and from the Marquesas it's mostly downwind to Hawaii," Anderson says. It
            took another 400 years for mariners to reach Easter Island, which lies in the
            opposite direction—normally upwind. "Once again this was during a period
            of frequent El Nino activity."
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-indigo-700 mb-6">
            Consecutive and Simultaneous Translation
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">A.</span>
            When people are faced with a foreign-language barrier, the usual way round it
            is to find someone to interpret or translate for them. The term 'translation',
            is the neutral term used for all tasks where the meaning or expressions in one
            language (the source language) is turned into the meaning of another (the
            ‘target’ language), whether the medium is spoken, written, or signed. In
            specific professional contexts, however, a distinction is drawn between people
            who work with the spoken or signed language (interpreters), and those who work
            with the written language (translators). There are certain tasks that blur this
            distinction, as when source speeches turned into target writing. But usually
            the two roles are seen as quite distinct, and it is unusual to find one person
            who is equally happy with both occupations. Some writers on translation,
            indeed, consider the interpreting task to be more suitable for extrovert
            personalities, and the translating task for introverts
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">B.</span>
            Interpreting is today widely known from its use in international political
            life. When senior ministers from different language backgrounds meet, the
            television record invariably shows a pair of interpreters hovering in the
            background. At major conferences, such as the United Nations General Assembly,
            the presence of headphones is a clear indication that a major linguistic
            exercise is taking place. In everyday circumstances, too, interpreters are
            frequently needed, especially in cosmopolitan societies formed by new
            reiterations of immigrants and Gastarbeiter. Often, the business of law courts,
            hospitals, local health clinics, classrooms, or industrial tribunals cannot be
            carried on without the presence of an interpreter. Given the importance and
            frequency of this task, therefore, it is remarkable that so little study has
            been made of what actually happens when interpreting takes place, and of how
            successful an exercise it is.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">C.</span>
            There are two main kinds of oral translation consecutive and. In consecutive
            translation the translating starts after the original speech or some part of it
            has been completed. Here the interpreter’s strategy and the final results
            depend, to a great extent on the length of the segment to be translated. If the
            segment is just a sentence or two the interpreter closely follows the original
            speech. As often as not, however, the interpreter is expected to translate a
            long speech which has lasted for scores of minutes or even longer. In this case
            he has to remember a great number of messages; and keep them in mind until he
            begins his translation. To make this possible the interpreter has to take notes
            of the original messages, various systems of notation having been suggested for
            the purpose. The study of, and practice in, such notation is the integral part
            of the interpreter’s training as are special exercises to develop his memory.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">D.</span>
            Doubtless the recency of developments in the field partly explains this
            neglect. One procedure, consecutive interpreting, is very old — and presumably
            dates from the Tower of Babel! Here, the interpreter translates after the
            speaker has finished speaking. This approach is widely practiced in informal
            situations, as well as in committees and small conferences. In larger and more
            formal settings, however, it has been generally replaced by simultaneous
            interpreting — a recent development that arose from the availability of modem
            audiological equipment and the advent of increased international interaction
            following the Second World War.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">E.</span>
            Of the two procedures, it is the second that has attracted
            most interest, because of the complexity of the task and the remarkable skills
            required. In no other context of human communication is anyone routinely
            required to listen and speak at the same time, preserving an exact semantic
            correspondence between the two modes. Moreover, there is invariably a delay of
            a few words between the stimulus and the response, because of the time it takes
            to assimilate what is being said in the source language and to translate it
            into an acceptable form in the target language. This ‘ear-voice span’ is
            usually about 2 or 3 seconds, but it may be as much as 10 seconds or so, if the
            text is complex. The brain has to remember what has just been said, attend to
            what is currently being said, and anticipate the construction of what is about
            to be said. As you start a sentence you are taking a leap in the dark, you are
            mortgaging your grammatical future; the original sentence may suddenly be
            turned in such a way that your translation of its end cannot easily be
            reconciled with your translation of its start. Great is called for
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-indigo-800">F.</span>
            How it is all done is not at all clear. That it is done at all is a source of
            some wonder, given the often lengthy periods of interpreting required, the
            confined environment of an interpreting booth, the presence of background
            noise, and the awareness that major decisions may depend upon the accuracy of
            the work. Other consideration such as cultural background also makes it aim to
            pay full attention to the backgrounds of the authors and the recipients, and to
            take into account differences between source and target language.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-indigo-800">G.</span>
            Research projects have now begun to look at these factors - to determine, for
            example, how far successful interpreting is affected by poor listening
            conditions, or the speed at which the source language is spoken. It seems that
            an input speed of between 100 and 120 words per minute is a comfortable rate
            for interpreting, with an upper limit of around 200 w.p.m. But even small
            increases in speed can dramatically affect the accuracy of output. In one
            controlled study, when speeds were gradually increased in a series of stages
            from 95 to 164 w.p.m., the ear voice span also increased with each stage, and
            the amount correctly interpreted showed a clear decline. Also, as the
            translating load increases, not only are there more errors of commission
            (mistranslations, cases of vagueness replacing precision), there are also more
            errors of omission, as words and segments of meaning are filtered out. These
            are important findings, given the need for accuracy in international
            communication. What is needed is a more detailed identification of the problem
            areas, and of the strategies speakers, listeners, and interpreters use to solve
            them. There is urgent need to expand what has so far been one of the most
            neglected fields of communication research.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">
            Water Filter
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">A.</span>
            An ingenious invention is set to bring clean water to the third world, and
            while the science may be cutting edge, the materials are extremely down to
            earth. A handful of clay yesterday’s coffee grounds and some cow manure are the
            ingredients that could bring clean, safe drinking water to much of the third
            world.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">B.</span>
            The simple new technology, developed by ANU materials scientist Mr. Tony Flynn,
            allows water filters to be made from commonly available materials and fired on
            the ground using cow manure as the source of heat, without the need for a kiln.
            The filters have been tested and shown to remove common pathogens
            (disease-producing organisms) including E-coli. Unlike other water filtering
            devices, the filters are simple and inexpensive to make. “They are very simple
            to explain and demonstrate and can be made by anyone, anywhere,” says Mr.
            Flynn. “They don’t require any western technology. All you need is terracotta
            clay, a compliant cow and a match.”
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">C.</span>
            The production of the filters is extremely simple. Take a handful of dry,
            crushed clay, mix it with a handful of organic material, such as used tea
            leaves, coffee grounds or rice hulls, add enough water to make a stiff
            biscuit-like mixture and form a cylindrical pot that has one end closed, then
            dry it in the sun. According to Mr. Flynn, used coffee grounds have given the
            best results to date. Next, surround the pots with straw; put them in a mound
            of cow manure, light the straw and then top up the burning manure as required.
            In less than 60 minutes the filters are finished. The walls of the finished pot
            should be about as thick as an adult’s index. The properties of cow manure are
            vital as the fuel can reach a temperature of 700 degrees in half an hour and
            will be up to 950 degrees after another 20 to 30 minutes. The manure makes a
            good fuel because it is very high in organic material that bums readily and
            quickly; the manure has to be dry and is best used exactly as found in the
            field, there is no need to break it up or process it any further.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">D.</span>
            “A potter’s din is an expensive item and can could take up to four or five
            hours to get upto 800 degrees. It needs expensive or scarce fuel, such as gas
            or wood to heat it and experience to run it. With no technology, no insulation
            and nothing other than a pile of cow manure and a match, none of these
            restrictions apply,” Mr. Flynn says.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">E.</span>
            It is also helpful that, like terracotta clay and organic material, cow dung is
            freely available across the developing world. “A cow is a natural fuel factory.
            My understanding is that cow dung as a fuel would be pretty much the same
            wherever you would find it.” Just as using manure as a fuel for domestic uses
            is not a new idea, the porosity of clay is something that potters have known
            about for years, and something that as a former ceramics lecturer in the ANU
            School of Art, Mr. Flynn is well aware of. The difference is that rather than
            viewing the porous nature of the material as a problem — after all not many
            people want a pot that won’t hold water — his filters capitalize on this
            property.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">F.</span>
            Other commercial ceramic filters do exist, but, even if available, with prices
            starting at US$5 each, they are often outside the budgets of most people in the
            developing world. The filtration process is simple, but effective. The basic
            principle is that there are passages through the filter that are wide enough
            for water droplets to pass through, but too narrow for pathogens. Tests with
            the deadly E-coli bacterium have seen the filters remove 96.4 to 99.8 per cent
            of the pathogen — well within safe levels. Using only one filter it takes two
            hours to filter a litre of water. The use of organic material, which burns away
            after firing, helps produce the structure in which pathogens will become
            trapped. It overcomes the potential problems of finer clays that may not let
            water through and also means that cracks are soon halted. And like clay and cow
            dung, it is universally available.
        </p>
        
        <!-- Section G -->
        <p>
            <span class="font-bold text-teal-800">G.</span>
            The invention was born out of a World Vision project involving the Manatuto
            community in East Timor The charity wanted to help set up a small industry
            manufacturing water filters, but initial research found the local clay to be
            too fine — a problem solved by the addition of organic material. While the AF
            problems of producing a working ceramic filter in East Timor were overcome, the
            solution was kiln-based and particular to that community’s materials and
            couldn’t be applied elsewhere. Manure firing, with no requirement for a kiln,
            has made this zero technology approach available anywhere it is needed. With
            all the components being widely available, Mr. Flynn says there is no reason
            the technology couldn’t be applied throughout the developing world, and with no
            plans to patent his idea, there will be no legal obstacles to it being adopted
            in any community that needs it. “Everyone has a right to clean water, these
            filters have the potential to enable anyone in the world to drink water
            safely,” says Mr. Flynn.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-orange-700 mb-6">
            Music: Language We All Speak
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">A.</span>
            Music is one of the human
            specie’s relatively few universal abilities. Without formal training, any
            individual, from Stone Age tribesman to suburban teenager has the ability to
            recognize music and, in some fashion, to make it. Why this should be so is a
            mystery. After all, music isn't necessary for getting through the day, and if
            it aids in reproduction, it does so only in highly indirect ways. Language, by
            contrast, is also everywhere- but for reasons that are more obvious. With
            language, you and the members of your tribe can organize a migration across
            Africa, build reed boats and cross the seas, and communicate at night even when
            you can’t see each other. Modem culture, in all its technological extravagance,
            springs directly from the human talent for manipulating symbols and syntax.
            Scientists have always been intrigued by the connection between music and
            language. Yet over the years, words and melody have acquired a vastly different
            status in the lab and the seminar room. While language has long been considered
            essential to unlocking the mechanisms of human intelligence, music is generally
            treated as an evolutionary frippery - mere’’auditory cheesecake,” as the
            Harvard cognitive scientist Steven Pinker puts it.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">B.</span>
            But thanks to a decade-long wave of
            neuroscience research, that tune is changing. A flurry of recent publications
            suggests that language and music may equally be able to tell US who we are and
            where we’re from - not just emotionally, but biologically. In July, the journal
            Nature Neuroscience devoted a special issue to the topic. And in an article in
            the August 6 issue of the Journal of Neuroscience, David Schwartz, Catherine
            Howe, and Dale Purves of Duke University argued that the sounds of music and
            the sounds of language are intricately connected. To grasp the originality of
            this idea, it’s necessary to realize two things about how music has
            traditionally been understood. First, musicologists have long emphasized that
            while each culture stamps a special identity onto its music; music itself has
            some universal qualities. For example, in virtually all cultures sound is
            divided into some or all of the 12 intervals that make up the chromatic scale -
            that is, the scale represented by the keys on a piano. For centuries, observers
            have attributed this preference for certain combinations of tones to the
            mathematical properties of sound itself. Some 2,500 years ago, Pythagoras was
            the first to note a direct relationship between the harmoniousness of a tone
            combination and the physical dimensions of the object that produced it. For
            example, a plucked string will always play an octave lower than a similar
            string half its size, and a fifth lower than a similar string two-thirds its
            length. This link between simple ratios and harmony has influenced music theory
            ever since.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">C.</span>
            This music-is-moth idea is often accompanied
            by the notion that music formally speaking at least, exists apart from the
            world in which it was created. Writing recently in The New York Review of
            Books, pianist and critic Charles Rosen discussed the long-standing notion that
            while painting and sculpture reproduce at least some aspects of the natural
            world, and writing describes thoughts and feelings we are all familiar with,
            music is entirely abstracted from the world in which we live. Neither idea is
            right, according to David Schwartz and his colleagues. Human musical
            preferences are fundamentally shaped not by elegant algorithms or ratios but by
            the messy sounds of real life, and of speech in particular -which in turn is
            shaped by our evolutionary heritage.” The explanation of music, like the
            explanation of any product of the mind, must be rooted in biology, not in
            numbers per se," says Schwartz. Schwartz, Howe, and Purves analyzed a vast
            selection of speech sounds from a variety of languages to reveal the underlying
            patterns common to all utterances. In order to focus only on the raw sound,
            they discarded all theories about speech and meaning and sliced sentences into
            random bites. Using a database of over 100,000 brief segments of speech, they noted
            which frequency had the greatest emphasis in each sound. The resulting set of
            frequencies, they discovered, corresponded closely to the chromatic scale. In
            short, the building blocks of music are to be found in speech Far from being
            abstract, music presents a strange analog to the patterns created by the sounds
            of speech. "Music, like the visual arts, is rooted in our experience of
            the natural world," says Schwartz. " It emulates our sound
            environment in the way that visual arts emulate the visual environment. "
            In music we hear the echo of our basic sound-making instrument- the vocal
            tract. The explanation for human music is simple; still than Pythagoras’s
            mathematical equations. We like the sounds that are familiar to us-specifically,
            we like sounds that remind us of us. This brings up some chicken-or-egg
            evolutionary questions. It may be that music imitates speech directly, the
            researchers say, in which case it would seem that language evolved first. It’s
            also conceivable that music came first and language is in effect an Imitation
            of song - that in everyday speech we hit the musical notes we especially like.
            Alternately, it may be that music imitates the general products of the human
            sound-making system, which just happens to be mostly speech. "We can't
            know this," says Schwartz. "What we do know is that they both come
            from the same system, and it is this that shapes our preferences."
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">D.</span>
            Schwartz's study also casts light on the
            long-running question of whether animals understand or appreciate music.
            Despite the apparent abundance of "music" in the natural world-
            birdsong, whalesong, wolf howls, synchronized chimpanzee hooting previous
            studies have found that many laboratory animals don't show a great affinity for
            the human variety of music making. Marc Hauser and Josh McDermott of Harvard
            argued in the July issue of Nature Neuroscience that animals don't create or
            perceive music the way we do. The act that laboratory monkeys can show
            recognition of human tunes is evidence, they say, of shared general features of
            the auditory system, not any specific chimpanzee musical ability. As for birds,
            those most musical beasts, they generally recognize their own tunes - a narrow
            repertoire - but don't generate novel melodies like we do. There are no avian
            Mozarts. But what's been played to the animals, Schwartz notes, is human music.
            If animals evolve preferences for sound as we do - based upon the soundscape in
            which they live -then their "music" would be fundamentally different
            from ours. In the same way our scales derive from human utterances, a cat's
            idea of a good tune would derive from yowls and meows. To demonstrate that animals
            don't appreciate sounds the way we do, we'd need evidence that they don't
            respond to "music" constructed from their own sound environment.
        </p>

        <!-- Section E -->
        <p>
            <span class="font-bold text-orange-800">E.</span>
            No matter how the connection between language
            and music is parsed, what is apparent is that our sense of music, even our love
            for it, is as deeply rooted in our biology and in our brains as language is.
            This is most obvious with babies, says Sandra Trehub at the University of
            Toronto, who also published a paper in the Nature Neuroscience special issue.
            For babies, music and speech are on a continuum. Mothers use musical speech to
            "regulate infants' emotional states." Trehub says. Regardless of what
            language they speak, the voice all mothers use with babies is the same:
            "something between speech and song." This kind of communication
            "puts the baby in a trance-like state, which may proceed to sleep or
            extended periods of rapture." So if the babies of the world could
            understand the latest research on language and music, they probably wouldn't be
            very surprised. The upshot, says Trehub, is that music may be even more of a
            necessity than we realize.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-cyan-700 mb-6">
            Voyage of going: beyond the blue line 2
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">A.</span>
            One feels a
            certain sympathy for Captain James Cook on the day in 1778 that he
            "discovered" Hawaii. Then on his third expedition to the Pacific, the
            British navigator had explored scores of islands across the breadth of the sea,
            from lush New Zealand to the lonely wastes of Easter Island This latest voyage
            had taken him thousands of miles north from the Society Islands to an
            archipelago so remote that even the ok! Polynesians back on Tahiti knew nothing
            about it. Imagine Cook's surprise, then, when the natives of Hawaii came
            paddling out in their canoes and greeted him in a familiar tongue, one he had
            heard on virtually every mote of inhabited land he had visited Marveling at the
            ubiquity of this Pacific language and culture, he later wondered in his journal:
            "How shall we account for this Nation spreading it self so far over this
            Vast ocean?"
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">B.</span>
            Answers have been slow in coming. But now a startling archaeological find on
            the island of Efate, in the Pacific nation of Vanuatu, has revealed an ancient
            seafaring people, the distant ancestors of today's Polynesians, taking their
            first steps into the unknown. The discoveries there have also opened a window
            into the shadowy work! of those early voyagers. At the same time, other pieces
            of this human puzzle are turning up in unlikely places. Climate data gleaned
            from slow-growing corals around the Pacific and from sediments in alpine lakes
            in South America may help explain how, more than a thousand years later, a
            second wave of seafarers beat their way across the entire Pacific.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">C.</span>
            What we have is a first- or second-generation site containing the graves of
            some of the Pacific's first explorers," says Spriggs, professor of
            archaeology at the Australian National University and co-leader of an
            international team excavating the site. It came to light only by luck A backhoe
            operator, digging up topsoil on the grounds of a derelict coconut plantation,
            scraped open a grave— the first of dozens in a burial ground some 3,000 years
            old It is the oldest cemetery ever found in the Pacific islands, and it harbors
            the bones of an ancient people archaeologists call the Lapita, a label that
            derives from a beach in New Caledonia where a landmark cache of their pottery
            was found in the 1950s. They were daring blue-water adventurers who roved the
            sea not just as expbrers but also as pioneers, bringing abng everything they
            would need to build new lives— their families and livestock, taro seedlings and
            stone tools.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">D.</span>
            Within the span of a few centuries the Lapita stretched the boundaries of their
            world from the jungle-clad vokanoes of Papua New Guinea to the bneliest coral
            outliers of Tonga, at feast 2,000 miles eastward in the Pacific. Abng the way
            they expbred millions of square miles of unknown sea, discovering and cobnizing
            scores of tropical islands never before seen by human eyes: Vanuatu, New
            Caledonia, Fiji, Samoa.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">E.</span>
            What little is known or surmised about them has been pieced together from
            fragments of pottery, animal bones, obsidian flakes, and such oblique sources
            as comparative linguistics and geochemistry. Although their voyages can be
            traced back to the northern islands of Papua New Guinea, their language
            variants of which are still spoken across the Pacific came from Taiwan. And
            their peculiar style of pottery decoration, created by pressing a carved stamp
            into the clay, probably had its roots in the northern Philippines. With the
            discovery of the Lapita cemetery on Efate, the volume of data available to
            researchers has expanded dramatically. The bones of at feast 62 individuals
            have been uncovered so far including old men, young women, even babies—and more
            skeletons are known to be in the ground Archaeobgists were also thrilled to
            discover six complete Lapita pots. It's an important find, Spriggs says, for it
            conclusively identifies the remains as Lapita. "It would be hard for
            anyone to argue that these aren't Lapita when you have human bones enshrined
            inside what is unmistakably a Lapita urn."
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">F.</span>
            Several lines of evidence also undergird Spriggs's conclusion that this was a
            community of pioneers making their first voyages into the remote reaches of
            Oceania. For one thing, the radiocarbon dating of bones and charcoal places
            them early in the Lapita expansion. For another, the chemical makeup of the
            obsidian flakes littering the site indicates that the rock wasn't local;
            instead it was imported from a large island in Papua New Guinea's Bismarck
            Archipelago, the springboard for the Lapita's thrust into the Pacific. A
            particularly intriguing clue comes from chemical tests on the teeth of several
            skeletons. DNA teased from these ancient bones may also help answer one of the
            most puzzling questions in Pacific anthropobgy: Did all Pacific islanders spring
            from one source or many? Was there only one outward migration from a single
            point in Asia, or several from different points? "This represents the best
            opportunity we've had yet," says Spriggs, "to find out who the Lapita
            actually were, where they came from, and who their cbsest descendants are
            today.
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">G.</span>
            "There is one stubborn question for which archaeobgy has yet to provide
            any answers: How did the Lapita accomplish the ancient equivalent of a moon
            landing, many times over? No one has found one of their canoes or any rigging,
            which could reveal how the canoes were sailed Nor do the oral histories and
            traditions of later Polynesians offer any insights, for they segue into myth
            long before they reach as far back in time as the Lapita." All we can say
            for certain is that the Lapita had canoes that were capable of ocean voyages,
            and they had the ability to sail them," says Geoff Irwin, a professor of
            archaeology at the University of Auckland and an avid yachtsman. Those sailing
            skills, he says, were developed and passed down over thousands of years by
            earlier mariners who worked their way through the archipelagoes of the western
            Pacific making short crossings to islands within sight of each other. Reaching
            Fiji, as they did a century or so later, meant crossing more than 500 miles of
            ocean, pressing on day after day into the great blue void of the Pacific. What
            gave them the courage to launch out on such a risky voyage?
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">H.</span>
            The Lapita's thrust into the Pacific was eastward, against the prevailing trade
            winds, Irwin notes. Those nagging headwinds, he argues, may have been the key
            to their success. "They could sail out for days into the unknown and
            reconnoiter, secure in the knowledge that if they didn't find anything, they
            could turn about and catch a swift ride home on the trade winds. It's what made
            the whole thing work." Once out there, skilled seafarers would detect
            abundant leads to follow to land: seabirds and turtles, coconuts and twigs
            carried out to sea by the tides, and the afternoon pileup of clouds on the
            horizon that often betokens an island in the distance. Some islands may have
            broadcast their presence with far less subtlety than a cloud bank. Some of the
            most violent eruptions anywhere on the planet during the past 10,000 years
            occurred in Melanesia, which sits nervously in one of the most explosive
            volcanic regions on Earth. Even less spectacular eruptions would have sent
            plumes of smoke bilbwing into the stratosphere and rained ash for hundreds of
            miles. It's possible that the Lapita saw these signs of distant islands and
            later sailed off in their direction, knowing they would find land For returning
            explorers, successful or not, the geography of their own archipelagoes provided
            a safety net to keep them from overshooting their home ports and sailing off
            into eternity.
        </p>

        <!-- Section I -->
        <p>
            <span class="font-bold text-cyan-800">I.</span>
            However they did it, the Lapita spread themselves a third of the way across the
            Pacific, then called it quits for reasons known only to them. Ahead lay the
            vast emptiness of the central Pacific, and perhaps they were too thinly
            stretched to venture farther. They probably never numbered more than a few
            thousand in total, and in their rapid migration eastward they encountered
            hundreds of islands more than 300 in Fiji alone. Still, more than a millennium
            would pass before the Lapita's descendants, a people we now call the
            Polynesians, struck out in search of new territory.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-amber-700 mb-6">
            European Heat Wave
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">A.</span>
            IT WAS the summer, scientists now realise, when felt. We knew that summer 2003
            was remarkable: global warming at last made itself unmistakably Britain
            experienced its record high temperature and continental Europe saw forest fires
            raging out of control, great rivers drying of a trickle and thousands of heat
            related deaths. But just how remarkable is only now becoming clean.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">B.</span>
            The three months of June, July and August were the warmest ever recorded in
            western and central Europe, with record national highs in Portugal, Germany and
            Switzerland as well as Britain. And they were the warmest by a very long way
            Over a great rectangular block of the earth stretching from west of Paris to
            northern Italy, taking in Switzerland and southern Germany, the average
            temperature for the summer months was 3.78°c above the long-term norm, said the
            Climatic Research Unit (CRU) of the University of East Anglia in Norwich, which
            is one of the world's lending institutions for the monitoring and analysis of
            temperature records.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">C.</span>
            That excess might not seem a lot until you are aware of the context - but then
            you realise it is enormous. There is nothing like this in previous data,
            anywhere. It is considered so exceptional that Professor Phil Jones, the CRU's
            (Erector, is prepared to say openly - in a way few scientists have done before
            - that the 2003 extreme may be directly attributed, not to natural climate
            variability, but to global warming caused by human actions.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">D.</span>
            Meteorologists have hitherto contented themselves with the formula that recent
            high temperatures are consistent with predictions" of climate change. For
            the great block of the map - that stretching between 35-50N and 0 20E - the CRU
            has reliable temperature records dating back to 1781. Using as a baseline the
            average summer temperature recorded between 1961 andl990, departures from the
            temperature norm, or "anomalies': over the area as a whole can easily be
            plotted. As the graph shows, such is the variability of our climate that over
            the past 200 years, there have been at least half a dozen anomalies, in terms
            of excess temperature - the peaks on the graph denoting very hot years
            approaching, or even exceeding, 20 °c. But there has been nothing remotely like
            2003, when the anomaly is nearly four degrees.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">E.</span>
            "This is quite remarkable," Professor Jones told The Independent.
            "It's very unusual in a statistical sense. If this series had a normal
            statistical distribution, you wouldn't get this number. There turn period “how
            often it could be expected to recur” would be something like one in a thou-sand
            years. If we look at an excess above the average of nearly four degrees, then
            perhaps nearly three degrees of that is natural variability, because we’ve seen
            that in past summers. But the final degree of it is likely to be due to global
            warming, caused by human actions.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">F.</span>
            The summer of 2003 has, in a sense, been one that climate scientists have long
            been expecting. Until now, the warming has been manifesting itself mainly in
            winters that have been less cold than in summers that have been much hotter.
            Last week, the United Nations predicted that winters were warming so quickly
            that winter sports would die out in Europe's lower-level ski resorts. But
            sooner or later the unprecedented hot summer was bound to come, and this year
            it did.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">G.</span>
            One of the most dramatic features of the summer was the hot nights, especially
            in the first half of August. In Paris, the temperature never dropped below
            230°c (73.40T) at all between 7 and 14August, and the city recorded its
            warmest-ever night on 11-12 August, when the mercury did not drop below 25.50°c
            (77.90°F). Germany recorded its warmest-ever night at Weinbiet in the Rhine
            valley with a lowest figure of 27.60°c (80.60T) on 13 August, and similar
            record-breaking night-time temperatures were recorded in Switzerland and Italy.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">H.</span>
            The 15,000 excess deaths in France during August, compared with previous years,
            have been related to the high night-time temperatures. The number gradually
            increased during the first 12days of the month, peaking at about 2,000 per day
            on the night of 12-13 August, then fell off dramatically after 14 August when
            the minimum temperatures fell by about 50C. The elderly were most affected,
            with a 70 per cent increase in mortality rate in those aged 75-94.
        </p>

        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-amber-800">I.</span>
            For Britain, the year as a whole is likely to be the warmest ever recorded, but
            despite the high temperature record on 10 August, the summer itself - defined
            as the June, July and August period - still comes behind 1976 and 1995, when
            there were longer periods of intense heat. At the moment, the year is on course
            to be the third-hottest ever in the global temperature record, which goes back
            to 1856, behind 1998 and 2002 but when all the records for October, November
            and December are collated, it might move into second place, Professor Jones
            said. The 10 hottest years in the record have all now occurred since 1990.
            Professor Jones is in no doubt about the astonishing nature of European summer
            of 2003.’The temperatures recorded were out of all proportion to the previous
            record," he said. "It was the warmest summer in the past 500 years
            and probably way beyond that It was enormously exceptional."
        </p>
        
        <!-- Section J -->
        <p>
            <span class="font-bold text-amber-800">J.</span>
            His colleagues at the University of East Anglia's Tyndall Centre for Climate
            Change Research are now planning a special study of it. "It was a summer
            that has not: been experienced before, either in terms of the temperature
            extremes that were reached, or the range and diversity of the impacts of the
            extreme heat," said the centre’s executive director, Professor Mike Hulme.
            "It will certainly have left its mark on a number of countries, as to how
            they think and plan for climate change in the future, much as the 2000 floods
            have revolutionised the way the Government is thinking about flooding in the
            UK. "The 2003 heat wave will have similar repercussions across
            Europe."
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-violet-700 mb-6">
            The concept of childhood in the western countries
        </h1>

        <p class="mb-4">
            The
            history of childhood has been a topic of interest in social history since the
            highly influential 1960 book Centuries of Childhood, written by French
            historian Aries. He argued that "childhood" is a concept created by
            modern society.
        </p>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-violet-800">A.</span>
            One of the most hotly debated issues in the history of childhood has been
            whether childhood is itself a recent invention. The historian Philippe Aries
            argued that in Western Europe during the Middle Ages (up to about the end of
            the fifteenth century) children were regarded as miniature adults, with all the
            intellect and personality that this implies. He scrutinized medieval pictures
            and diaries, and found no distinction between children and adults as they
            shared similar leisure activities and often the same type of work. Aries,
            however, pointed out that this is not to suggest that children were neglected,
            forsaken or despised. The idea of childhood is not to be confused with
            affection for children; it corresponds to an awareness of the particular nature
            of childhood, that particular nature which distinguishes the child from the
            adult, even the young adult.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-violet-800">B.</span>
            There is a long tradition of the children of the poor playing a functional role
            in contributing to the family income by working either inside or outside the
            home. In this sense children are seen as 'useful. Back in the Middle Ages,
            children as young as 5 or 6 did important chores for their parents and, from
            the sixteenth century, were often encouraged (or forced) to leave the family by
            the age of 9 or 10 to work as servants for wealthier families or to be
            apprenticed to a trade.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-violet-800">C.</span>
            With industrialization in the eighteenth and nineteenth centuries, a new demand
            for child labour was created, and many children were forced to work for long
            hours, in mines, workshops and factories. Social reformers began to question
            whether labouring long hours from an early age would harm children's growing
            bodies. They began to recognize the potential of carrying out systematic
            studies to monitor how far these early deprivations might be affecting
            children's development.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-violet-800">D.</span>
            Gradually, the concerns of the reformers began to impact on the working
            conditions of children. In Britain, the Factory Act of 1833 signified the
            beginning of legal protection of children from exploitation and was linked to
            the rise of schools for factory children. The worst forms of child exploitation
            were gradually eliminated, partly through factory reform but also through the
            influence of trade unions and economic changes during the nineteenth century
            which made some forms of child labour redundant. Childhood was increasingly
            seen as a time for play and education for all children, not just for a
            privileged minority. Initiating children into work as 'useful' children became
            less of a priority. As the age for starting full-time work was delayed, so childhood
            was increasingly understood as a more extended phase of dependency, development
            and learning. Even so, work continued to play a significant, if less central
            role in children's lives throughout the later nineteenth and twentieth century.
            And the 'useful child' has become a controversial image during the first decade
            of the twenty-first century especially in the context of global concern about
            large numbers of the world's children engaged in child labour.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-violet-800">E.</span>
            The Factory Act of 1833 established half-time schools which allowed children to
            work and attend school. But in the 1840s, a large proportion of children never
            went to school, and if they did, they left by the age of 10 or 11. The
            situation was very different by the end of the nineteenth century in Britain.
            The school became central to images of 'a normal' childhood .
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-violet-800">F.</span>
            Attending school was no longer a privilege and all children were expected to
            spend a significant part of their day in a classroom. By going to school,
            children's lives were now separated from domestic life at home and from the
            adult world of work. School became an institution dedicated to shaping the
            minds, behaviour and morals of the young. Education dominated the management of
            children's waking hours, not just through the hours spent in classrooms but
            through 'home' work, the growth of 'after school' activities and the importance
            attached to 'parental involvement.
        </p>

        <!-- Section G -->
        <p>
            <span class="font-bold text-violet-800">G.</span>
            Industrialization, urbanization and mass schooling also set new challenges for
            those responsible for protecting children's welfare, and promoting their
            learning. Increasingly, children were being treated as a group with distinctive
            needs and they were organized into groups according to their age. For example,
            teachers needed to know what to expect of children in their classrooms, what
            kinds of instruction were appropriate for different age groups and how best to
            assess children's progress. They also wanted tools that could enable them to
            sort and select children according to their abilities and potential.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-rose-700 mb-6">
            Have Teenagers Always Existed
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">A.</span>
            Our ancestor. Homo erectus, may not have had culture or even language, but did
            they have teenagers? That question has been contested in the past few years,
            with some anthropologists claiming evidence of an adolescent phase in human
            fossil. This is not merely an academic debate. Humans today are the only
            animals on Earth to have a teenage phase, yet we have very little idea why.
            Establishing exactly when adolescence first evolved and finding out what sorts
            of changes in our bodies and lifestyles it was associated with could help US
            understand its purpose. Why do we, uniquely' have a growth spurt so late in
            life?
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">B.</span>
            Until recently, the dominant explanation was that physical growth is delayed by
            our need to grow large brains and to learn all the behavior patterns associated
            with humanity - speaking, social interaction and so on. While such behaviour is
            still developing, humans cannot easily fend for themselves, so it is best to
            stay small and look youthful. That way your parents and other members of the
            social group are motivated to continue looking after you. What's more, studies
            of mammals show a strong relationship between brain size and the rate of
            development, with larger-brained animals taking longer to reach adulthood.
            Humans are at the far end of this spectrum. If this theory is correct, and the
            development of large brains accounts for the teenage growth spurt, the origin
            of adolescence should have been with the evolution of our* own species (Homo
            sapiens) and Neanderthals, starting almost 200,000 years ago. The trouble is,
            some of the fossil evidence seems to tell a different story.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">C.</span>
            The human fossil record is extremely sparse, and the number
            of fossilised children minuscule. Nevertheless, in the past few years
            anthropologists have begun to look at what can be learned of lives of our
            ancestors from these youngsters, of the most studied is the famous Turkana boy,
            an almost complete skeleton of Homo erectus f 1.6 million years ago found in
            Kenya in 1984. Accurately assessing how old someone is from their skeleton is a
            tricky business. Even with a modern human, you can only make a rough estimate
            based on the developmental stage of teeth and bones and the skeleton's general
            size.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">D.</span>
            You need as many developmental markers as possible to get an estimate of age.
            The Turkana's teeth made him 10 or 11 years old. The features of his skeleton
            put him at 13, but he as tall as a modem 15-year-old. Susan Anton of New York
            University points to research by Margaret Clegg who studied a collection of
            18th- century 19th- century skeletons whose ages at death were known. When she
            tried to age the skeletons without checking the records, she found similar
            discrepancies to those of the Turkana boy. One 10-year-old boy, for example,
            had a dental age of 9, the skeleton of a 6-year-old but was tall enough to be
            11. 'The Turkana kid still has a rounded skull, and needs more growth to reach
            the adult shape/ Anton adds. She thinks that Homo erectus already developed
            modern human patterns growth, with a late, if not quite so extreme, adolescent
            spurt. She believes Turkana boy was just about to enter it.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">E.</span>
            If Anton is right, that theory contradicts the orthodox idea linking late
            growth with development of a large brain. Anthropologist Steven Leigh from the
            University of Illinois goes further. He believes the idea of adolescence as
            catch up growth does not explain why the growth rate increases so dramatically.
            He says that many apes have growth spurts in particular body regions that are
            associated with reaching maturity, and this makes sense because by timing the
            short but crucial spells of maturation to coincide with the seasons when food
            is plentiful, they minimise the risk of being without adequate food supplies
            while growing. What makes humans unique is that the whole skeleton is involved.
            For Leigh, this is the key.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">F.</span>
            According to his theory, adolescence evolved as an integral part of efficient
            upright locomotion, as well as to accommodate more complex brains. Fossil
            evidence suggests that our ancestors first walked on two legs six million years
            ago. If proficient walking was important for survival, perhaps the teenage
            growth spurt has very ancient origins. While many anthropologists will consider
            Leigh's theory a step too far, he is not the only one with new ideas about the
            evolution of teenagers.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-rose-800">G.</span>
            Another approach, which has produced a surprising result, relies on the minute
            analysis of tooth growth. Every nine days or so the growing teeth of both apes
            and humans acquire ridges on their enamel surface. These are like rings in a
            tree trunk: the number of them tells you how long the crown of a tooth took to
            form. Across mammals' the rate at which teeth develop is closely related to how
            fast the brain grows and the age you mature. Teeth are good indicators of life
            history because thefr growth is less related to the environment and nutrition
            than is the growth of the skeleton.
        </p>

        <!-- Section H -->
        <p>
            <span class="font-bold text-rose-800">H.</span>
            A more decisive
            piece of evidence came last year, when researchers in France and Spain
            published their findings from a study of Neanderthal teeth. Neanderthals had
            much faster tooth growth than erectus who went before them, and hence,
            possibly, a shorter childhood. Lead researcher Fernando Ramirez Rozzi thinks
            Neanderthals died young-about 25 years old - primarily because of the cold,
            harsh environment they had to endure in glacial Europe. They evolved to grow up
            quicker than their immediate ancestors. Neanderthals and Homo erectus probably
            had to reach adulthood fairly quickly, without delaying for an adolescent
            growth spurt. So it still looks as though we are the original teenagers.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-fuchsia-700 mb-6">
            Numeracy: can animals tell numbers?
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-fuchsia-800">A.</span>
            Prime among basic numerical faculties is the ability to distinguish between a
            larger and a smaller number, says psychologist Elizabeth Brannon. Humans can do
            this with ease - providing the ratio is big enough - but do other animals share
            this ability? In one experiment, rhesus monkeys and university students
            examined two sets of geometrical objects that appeared briefly on a computer
            monitor. They had to decide which set contained more objects. Both groups
            performed successfully but, importantly, Brannon's team found that monkeys,
            like humans, make more errors when two sets of objects are close in number. The
            students' performance ends up looking just like a monkey's. It's practically
            identical, 'she says.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-fuchsia-800">B.</span>
            Humans and monkeys are mammals, in the animal family known as primates. These
            are not the only animals whose numerical capacities rely on ratio, however. The
            same seems to apply to some amphibians. Psychologist Claudia Uller's team
            tempted salamanders with two sets of fruit flies held in clear tubes. In a
            series of trials, the researchers noted which tube the salamanders scampered
            towards, reasoning that if they had a capacity to recognise number, they would
            head for the larger number. The salamanders successfully discriminated between
            tubes containing 8 and 16 flies respectively, but not between 3 and 4, 4 and 6,
            or 8 and 12. So it seems that for the salamanders to discriminate between two
            numbers, the larger must be at least twice as big as the smaller. However, they
            could differentiate between 2 and 3 flies just as well as between 1 and 2
            flies, suggesting they recognise small numbers in a different way from larger
            numbers.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-fuchsia-800">C.</span>
            Further support for this theory comes from studies of mosquitofish, which
            instinctively join the biggest shoal they can. A team at the University of
            Padova found that while mosquitofish can tell the difference between a group
            containing 3 shoal-mates and a group containing 4, they did not show a
            preference between groups of 4 and 5. The team also found that mosquitofish can
            discriminate between numbers up to 16, but only if the ratio between the fish
            in each shoal was greater than 2:1. This indicates that the fish, like
            salamanders, possess both the approximate and precise number systems found in
            more intelligent animals such as infant humans and other primates.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-fuchsia-800">D.</span>
            While these findings are highly suggestive, some critics argue that the animals
            might be relying on other factors to complete the tasks, without considering
            the number itself. 'Any study that's claiming an animal is capable of
            representing number should also be controlling for other factors, ' says
            Brannon. Experiments have confirmed that primates can indeed perform numerical
            feats without extra clues, but what about the more primitive animals?
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-fuchsia-800">E.</span>
            To consider this possibility, the mosquito fish tests were repeated, this time
            using varying geometrical shapes in place of fish. The team arranged these
            shapes so that they had the same overall surface area and luminance even though
            they contained a different number of objects. Across hundreds of trials on 14
            different fish, the team found they consistently discriminated 2 objects from
            3. The team is now testing whether mosquito fish can also distinguish 3
            geometric objects from 4.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-fuchsia-800">F.</span>
            Even more primitive organisms may share this ability. Entomologist Jurgen Tautz
            sent a group of bees down a corridor, at the end of which lay two chambers -
            one which contained sugar water, which they like, while the other was empty. To
            test the bees' numeracy, the team marked each chamber with a different number
            of geometrical shapes - between 2 and 6. The bees quickly learned to match the
            number of shapes with the correct chamber. Like the salamanders and fish, there
            was a limit to the bees' mathematical prowess - they could differentiate up to
            4 shapes, but failed with 5 or 6 shapes.
        </p>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-fuchsia-800">G.</span>
            These studies still do not show whether animals learn to count through
            training, or whether they are born with the skills already intact. If the
            latter is true, it would suggest there was a strong evolutionary advantage to a
            mathematical mind. Proof that this may be the case has emerged from an
            experiment testing the mathematical ability of three- and four-day-old chicks.
            Like mosquitofish, chicks prefer to be around as many of their siblings as
            possible, so they will always head towards a larger number of their kin. If
            chicks spend their first few days surrounded by certain objects, they become
            attached to these objects as if they were family. Researchers placed each chick
            in the middle of a platform and showed it two groups of balls of paper. Next,
            they hid the two piles behind screens, changed the quantities and revealed them
            to the chick. This forced the chick to perform simple computations to decide
            which side now contained the biggest number of its "brothers'7. Without
            any prior coaching, the chicks scuttled to the larger quantity at a rate well
            above chance. They were doing some very simple arithmetic, claim the
            researchers.
        </p>

        <!-- Section H -->
        <p>
            <span class="font-bold text-fuchsia-800">H.</span>
            Why these skills evolved is not hard to imagine, since it would help almost any
            animal forage for food. Animals on the prowl for sustenance must constantly
            decide which tree has the most fruit, or which patch of flowers will contain
            the most nectar. There are also other, less obvious, advantages of numeracy. In
            one compelling example, researchers in America found that female coots appear
            to calculate how many eggs they have laid - and add any in the nest laid by an
            intruder - before making any decisions about adding to them. Exactly how
            ancient these skills are is difficult to determine, however. Only by studying
            the numerical abilities of more and more creatures using standardized
            procedures can we hope to understand the basic preconditions for the evolution
            of number.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
            Elephant communication
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">A.</span>
            A postdoctoral
            fellow at Stanford University, O'Connell Rodwell has come to Namibia's premiere
            wildlife sanctuary to explore the mysterious and complex world of elephant
            communication. She and her colleagues are part of a scientific revolution that
            began nearly two decades ago with the stunning revelation that elephants
            communicate over long distances using low-frequency sounds, also called infrasound’s
            that are too deep to be heard by most humans.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">B.</span>
            As might be expected, the African elephant's ability to sense seismic sound may
            begin in the ears. The hammer bone of the elephant's inner ear is
            proportionally very large for a mammal, but typical for animals that use
            vibrational signals. It may therefore be a sign that elephants can communicate
            with seismic sounds. Also, the elephant and its relative the manatee are unique
            among mammals in having reverted to a reptilian-like cochlear structure in the
            inner ear. The cochlea of reptiles facilitates a keen sensitivity to vibrations
            and may do the same in elephants.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">C.</span>
            But other aspects of elephant anatomy also support that ability. First, then
            enormous bodies, which allow them to generate low-frequency sounds almost as
            powerful as those of a jet takeoff, provide ideal frames for receiving ground
            vibrations and conducting them to the inner ear. Second, the elephant's toe
            bones rest on a fatty pad that might help focus vibrations from the ground into
            the bone. Finally, the elephant's enormous brain lies in the cranial cavity
            behind the eyes in line with the auditory canal. The front of the skull is
            riddled with sinus cavities that may function as resonating chambers for
            vibrations from the ground.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">D.</span>
            How the elephants sense these vibrations is still unknown, but O'Connell
            Rodwell who just earned a graduate degree in entomology at the University of
            Hawaii at Manoa, suspects the pachyderms are "listening" with then
            trunks and feet. The trunk may be the most versatile appendage in nature. Its
            uses include drinking, bathing, smelling, feeding and scratching. Both trunk
            and feet contain two kinds of pressure-sensitive nerve endings—one that detects
            infrasonic vibrations and another that responds to vibrations with slightly
            higher frequencies. For O'Connell-Rodwell, the future of the research is
            boundless and unpredictable: "Our work is really at the interface of
            geophysics, neurophysiology and ecology," she says. "We're asking
            questions that no one has really dealt with before."
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">E.</span>
            Scientists have long known that seismic communication is common in small
            animals, including spiders, scorpions, insects and a number of vertebrate
            species such as white-lipped frogs, blind mole rats, kangaroo rats and golden
            moles. They also have found evidence of seismic sensitivity in elephant
            seals—2-ton marine mammals that are not related to elephants. But
            O'Connell-Rodwell was the first to suggest that a large land animal also is
            sending and receiving seismic messages. O'Connell-Rodwell noticed something
            about the freezing behavior of Etosha's six-ton bulls that reminded her of the
            tiny insects back in her lab. "I did my masters 
            thesis on seismic
            communication in planthoppers," she says. "I'd put a male planthopper
            on a stem and play back a female call, and the male would do the same thing the
            elephants were doing: He would freeze, then press down on his legs, go forward
            a little bit, then freeze again. It was just so fascinating to me, and it's
            what got me to think, maybe there's something else going on other than acoustic
            communication."
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">F.</span>
            Scientists have determined that an elephant's ability to communicate over long
            distances is essential for its survival, particularly in a place like Etosha,
            where more than 2,400 savanna elephants range over an area larger than New
            Jersey. The difficulty of finding a mate in this vast wilderness is compounded
            by ... elephant reproductive biology. Females breed only when nestrus a period
            of sexual arousal that occurs every two years and lasts just a few days.
            "Females in estrus make these very low, long calls that bulls home in on,
            because it's such a rare event," O'Connell-Rodwell says. These powerful
            estrus calls carry more than two miles in the air and may be accompanied by
            long-distance seismic signals, she adds. Breeding herds also use low-frequency
            vocalizations to warn of predators. Adult bulls and cows have no enemies,
            except for humans, but young elephants are susceptible to attacks by lions and
            hyenas. When a predator appears, older members of the herd emit intense warning
            calls that prompt the rest of the herd to clump together for protection, then
            lee. In 1994, O'Connell-Rodwell recorded the dramatic cries of a breeding herd
            threatened by lions at Mushara. "The elephants got really scared, and the
            matriarch made these very powerful warning calls, and then the herd took off
            screaming and trumpeting," she recalls. "Since then, every time we've
            played that particular call at the water hole, we get the same response the
            elephants take off."
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">G.</span>
            Reacting to a warning call played hi the air is one thing, but could the
            elephants detect calls transmitted only through the ground? To find out, the
            research team in 2002 devised an experiment using electronic equipment that
            allowed them to send signals through the ground at Mushara. The results of our
            2002 study showed US that elephants do indeed detect warning calls played
            through the ground," O'Connell-Rodwell observes. "We expected them to
            clump up into tight groups and leave the area, and that's in fact what they
            did. But since we only played back one type of call, we couldn't really say
            whether they were interpreting it correctly. Maybe they thought it was a
            vehicle or something strange instead of a predator warning."
        </p>

        <!-- Section H -->
        <p>
            <span class="font-bold text-purple-800">H.</span>
            An experiment last year was designed to solve that problem by using three
            different recordings—the 1994 warning call from Mushara, an anti-predator call
            recorded by scientist Joyce Poole in Kenya and an artificial warble tone.
            Although still analyzing data from this experiment, O'Connell-Rodwell is able
            to make a few preliminary observations: "The data I've seen so far suggest
            that the elephants were responding like I had expected, when the '94 warning
            call was played back, they tended to clump together and leave the water hole
            sooner. But what's really interesting is that the unfamiliar anti-predator call
            from Kenya also caused them to clump up, get nervous and aggressively
            rumble—but they didn't necessarily leave. I didn't think it was going to be that
            clear cut.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">
            Museum Blockbuster
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">A.</span>
            Since the 1980s, the term "blockbuster" has become the fashionable
            word for special spectacular museum, art gallery or science centre exhibitions.
            These exhibitions have the ability to attract large crowds and often large
            corporate sponsors. Here is one of some existing definitions of blockbuster:
            Put by Elsen (1984), a blockbuster is a "... large scale loan exhibition
            that people who normally don't go to museums will stand in line for hours to
            see ..."James Rosenfield, writing in Direct Marketing in 1993, has
            described a successful blockbuster exhibition as a "... triumph of both
            curatorial and marketing skills ..." My own definition for blockbuster is
            "a popular, high profile exhibition on display for a limited period, that
            attracts the general public, who are prepared to both stand in line and pay a
            fee in order to partake in the exhibition." What both Elsen and Rosenfield
            omit in the ữ descriptions of blockbusters, is that people are prepared to pay
            a fee to see a blockbuster, and that the term blockbuster can just as easily
            apply to a movie or a museum exhibition.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">B.</span>
            Merely naming an exhibition or movie a blockbuster however, does not make it a
            blockbuster. The term can only apply when the item in question has had an
            overwhelmingly successful response from the public. However, in literature from
            both the UK and USA the other words that also start to appear in descriptions
            of blockbusters are "less scholarly", "non-elitist" and
            "popularist". Detractors argue that blockbusters are designed to
            appeal to the lowest common denominator, while others extol the virtues of encouraging
            scholars to cooperate on projects, and to provide exhibitions that cater for a
            broad selection of the community rather than an elite sector.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">C.</span>
            Maintaining and increasing visitor levels is paramount in the new museology.
            This requires continued product development. Not only the creation or hiring of
            blockbuster exhibitions, but regular exhibition changes and innovations. In
            addition, the visiting publics have become customers rather than visitors, and
            the skills that are valued in museums, science centres and galleries to keep
            the new customers coming through the door have changed. High on the list of
            requirements are commercial, business, marketing and entrepreneurial skills.
            Curators are now administrators. Being a director of an art gallery no longer
            requires an Art Degree. As succinctly summarised in the Economist in 1994
            "business nous and public relation skills" were essential requirements
            for a director, and the ability to compete with other museums to stage
            travelling exhibitions which draw huge crowds.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">D.</span>
            The new museology has resulted in the convergence of museums, the heritage
            industry, and tourism, profit-making and pleasure-giving. This has given rise
            to much debate about the appropriateness of adapting the activities of
            institutions so that they more closely reflect the priorities of the market
            place and whether it is appropriate to see museums primarily as tourist
            attractions. At many institutions you can now hold office functions in the
            display areas, or have dinner with the dinosaurs. Whatever commentators may
            think, managers of museums, art galleries and science centres worldwide are
            looking for artful ways to blend culture and commerce, and blockbuster
            exhibitions are at the top of the list. But while blockbusters are all part of
            the new museology, there is proof that you don't need a museum, science centre
            or art gallery to benefit from the drawing power of a blockbuster or to stage a
            blockbuster.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">E.</span>
            But do blockbusters held in public institutions really create a surplus to fund
            other activities? If the bottom line is profit, then according to the
            accounting records of many major museums and galleries, blockbusters do make
            money. For some museums overseas, it may be the money that they need to update
            parts of their collections or to repair buildings that are in need of
            attention. For others in Australia, it may be the opportunity to illustrate
            that they are attempting to pay their way, by recovering part of their
            operating costs, or funding other operating activities with off-budget revenue.
            This makes the economic rationalists cheerful. However, not all exhibitions
            that are hailed to be blockbusters will be blockbusters, and some will not make
            money. It is also unlikely that the accounting systems of most institutions
            will recognise the real cost of either creating or hiring a blockbuster.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">F.</span>
            Blockbusters requ ừ e large capital expenditure, and draw on resources across
            all branches of an organisation; however, the costs don't end there. There is a
            Human Resource Management cost in addition to a measurable 'real' dollar cost.
            Receiving a touring exhibition involves large expenditure as well, and draws
            resources from across functional management structures in project management
            style. Everyone from a general labourer to a building servicing unit, the front
            of house, technical, promotion, education and administration staff, are
            required to perform additional tasks. Furthermore, as an increasing number of
            institutions in Australia fry their hand at increasing visitor numbers,
            memberships (and therefore revenue), by staging blockbuster exhibitions, it may
            be less likely that blockbusters will continue to provide a surplus to
            subsidise other activities due to the competitive nature of the market. There
            are only so many consumer dollars to go around, and visitors will need to
            choose between blockbuster products.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">G.</span>
            Unfortunately, when the bottom-line is the most important objective to the
            mounting of blockbuster exhibitions, this same objective can be hard to
            maintain. Creating, mounting or hiring blockbusters is exhausting for staff,
            with the real costs throughout an institution difficult to calculate. Although
            the direct aims may be financial, creating or hiring a blockbuster has many
            positive spin offs; by raising their profile through a popular blockbuster
            exhibition, a museum will be seen in a more favorable light at budget time.
            Blockbusters mean crowds, and crowds are good for the local economy, providing
            increased employment for shops, hotels, restaurants, the transport industry and
            retailers. Blockbusters expose staff to the vagaries and pressures of the market
            place, and may lead to creative excellence. Either the success or failure of a
            blockbuster may highlight the need for managers and policy makers to rethink
            their strategies. However, the new museology and the apparent trend towards
            blockbusters make it likely that museums, art galleries and particularly
            science centres will be seen as part of the entertainment and tourism industry,
            rather than as cultural icons deserving of government and philanthropic
            support.
        </p>

        <!-- Section H -->
        <p>
            <span class="font-bold text-teal-800">H.</span>
            Perhaps the best pathway to take is one that balances both blockbusters and
            regular exhibitions. However, this easy middle ground may only work if you have
            enough space, and have alternate sources of funding to continue to support the
            regular less exciting fare. Perhaps the advice should be to make sure that your
            regular activities and exhibitions are more enticing, and find out what your
            local community wants from you. The question (trend) now at most museums and
            science centres, is "What blockbusters can we tour to overseas venues and
            will it be cost effective?"
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-orange-700 mb-6">
            Stress of Workplace
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">A.</span>
            How busy is too busy? For some it means having to miss the occasional long
            lunch; for others it means missing lunch altogether. For a few, it is not being
            able to take a "sickie" once a month. Then there is a group of people
            for whom working every evening and weekend is normal, and frantic is the tempo
            of their lives. For most senior executives, workloads swing between extremely
            busy and frenzied. The vice-president of the management consultancy AT Kearney
            and its head of telecommunications for the Asia-Pacific region, Neil Plumridge,
            says his work weeks vary from a "manageable" 45 horns to 80 hours,
            but average 60 hours.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">B.</span>
            Three warning signs alert Plumridge about his workload: sleep, scheduling and
            family. He knows he has too much on when he gets less than six hours of sleep
            for three consecutive nights; when he is constantly having to reschedule
            appointments; "and the third one is on the family side", says
            Plumridge, the father of a three-year-old daughter, and expecting a second
            child in October. "If I happen to miss a birthday or anniversary, I know
            things are out of control." Being "too busy" is highly
            subjective. But for any individual, the perception of being too busy over a
            prolonged period can start showing up as stress: disturbed sleep, and declining
            mental and physical health. National workers' compensation figures show stress
            causes the most lost time of any workplace injury. Employees suffering stress
            are off work an average of 16.6 weeks. The effects of stress are also
            expensive. Comcare, the Federal Government insurer, reports that in 2003-04,
            claims for psychological injury accounted for 7% of claims but almost 27% of
            claim costs. Experts say the key to dealing with stress is not to focus on
            relief - a game of golf or a massage - but to reassess workloads. Neil
            Plumridge says he makes it a priority to work out what has to change; that
            might mean allocating extra resources to a job, allowing more time or changing
            expectations. The decision may take several days. He also relies on the advice
            of colleagues, saying his peers coach each other with business problems.
            "Just a fresh pair of eyes over an issue can help,” he says.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">C.</span>
            Executive stress is not confined to big organisations. Vanessa Stoykov has been
            running her own advertising and public relations business for seven years,
            specialising in work for financial and professional services firms. Evolution
            Media has grown so fast that it debuted on the BRW Fast 100 list of
            fastest-growing small enterprises last year - just after Stoykov had her first
            child. Stoykov thrives on the mental stimulation of running her own business.
            "Like everyone, I have the occasional day when I think my head’s going to
            blow off," she says. Because of the growth phase the business is in,
            Stoykov has to concentrate on short-term stress relief - weekends in the
            mountains, the occasional "mental health" day - rather than
            delegating more work. She says: "We're hiring more people, but you need to
            train them, teach them about the culture and the clients, so it's actually more
            work rather than less."
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">D.</span>
            Identify the causes: Jan Elsnera, Melbourne psychologist who specialises in
            executive coaching, says thriving on a demanding workload is typical of senior
            executives and other high-potential business people. She says there is no one
            size-fits-all approach to stress: some people work best with high-adrenalin
            periods followed by quieter patches, while others thrive under sustained
            pressure. "We could take urine and blood hormonal measures and pass a
            judgement of whether someone's physiologically stressed or not," she says.
            "But that's not going to give US an indicator of what their experience of
            stress is, and what the emotional and cognitive impacts of stress are going to
            be."
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">E.</span>
            Eisner's practice is informed by a movement known as positive psychology, a
            school of thought that argues "positive" experiences - feeling
            engaged, challenged, and that one is making a contribution to something
            meaningful - do not balance out negative ones such as stress; instead, they
            help people increase their resilience over time. Good stress, or positive
            experiences of being challenged and rewarded, is thus cumulative in the same
            way as bad stress. Eisner says many of the senior business people she coaches
            are relying more on regulating bad stress through methods such as meditation
            and yoga. She points to research showing that meditation can alter the
            biochemistry of the brain and actually help people "retrain" the way
            their brains and bodies react to stress. "Meditation and yoga enable you
            to shift the way that your brain reacts, so if you get proficient at it you're
            in control.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">F.</span>
            The Australian vice-president of AT Kearney, Neil Plumridge, says: "Often
            stress is caused by our setting unrealistic expectations of ourselves. I'll
            promise a client I'll do something tomorrow, and then [promise] another client
            the same thing, when I really know it's not going to happen. I've put stress on
            myself when I could have said to the clients: 'Why don't I give that to you in
            48 hours?' The client doesn't care." Overcommitting is something people
            experience as an individual problem. We explain it as the result of
            procrastination or Parkinson's law: that work expands to fill the time
            available. New research indicates that people may be hard-wired to do it.
        </p>
        
        <!-- Section G -->
        <p>
            <span class="font-bold text-orange-800">G.</span>
            A study in the February issue of the Journal of Experimental Psychology shows
            that people always believe they will be less busy in the future than now. This
            is a misapprehension, according to the authors of the report, Professor Gal
            Zauberman, of the University of North Carolina, and Professor John Lynch, of
            Duke University. "On average, an individual will be just as busy two weeks
            or a month from now as he or she is today. But that is not how it appears to be
            in everyday life," they wrote. "People often make commitments long in
            advance that they would never make if the same commitments required immediate
            action. That is, they discount future time investments relatively
            steeply." Why do we perceive a greater "surplus" of time in the
            future than in the present? The researchers suggest that people underestimate
            completion times for tasks stretching into the future, and that they are bad at
            imagining future competition for their time.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-lime-700 mb-6">
            Company Innovation
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">A.</span>
            IN A scruffy office in midtown Manhattan, a team of 30 artificial-intelligence
            programmers is trying to simulate the brains of an eminent sexologist, a well
            known dietician, a celebrity fitness trainer and several other experts. Umagic
            Systems is a young firm, setting up websites that will allow clients to consult
            the virtual versions of these personalities. Subscribers will feed in details
            about themselves and their goals; Umagic's software will come up with the
            advice that the star expert would give. Although few people have lost money
            betting on the neuroses of the American consumer, Umagic's prospects are hard
            to gauge (in ten years' time, consulting a computer about your sex life might
            seem natural, or it might seem absurd). But the company and others like it are
            beginning to spook large American firms, because they see such half-barmy
            “innovative” ideas as the key to their own future success.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">B.</span>
            Innovation has become the buzz-word of American management. Firms have found
            that most of the things that can be outsourced or re-engineered have been
            (worryingly, by their competitors as well). The stars of American business tend
            today to be innovators such as Dell, Amazon and Wal-Mart, which have produced
            ideas or products that have changed their industries.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">C.</span>
            A new book by two consultants from Arthur D. Little records that, over the past
            15 years, the top 20% of firms in an annual innovation poll by Fortune magazine
            have achieved double the shareholder returns of their peers. Much of today's
            merger boom is driven by a desperate search for new ideas. So is the fortune
            now spent on licensing and buying others' intellectual property. According to
            the Pasadena-based Patent & Licence Exchange, trading in intangible assets
            in the United States has risen from $15 billion in 1990 to $100 billion in
            1998, with an increasing proportion of the rewards going to small firms and
            individuals.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">D.</span>
            And therein lies the terror for big companies: that innovation seems to work
            best outside them. Several big established “ideas factories”, including 3M,
            Procter & Gamble and Rubbermaid, have had dry spells recently. Gillette
            spent ten years and $1 billion developing its new Mach 3 razor; it took a
            British supermarket only a year or so to produce a reasonable imitation. “In
            the management of creativity, size is your enemy,” argues Peter Chemin, who
            runs the Fox TV and film empire for News Corporation. One person managing 20
            movies is never going to be as involved as one doing five movies. He has thus
            tried to break down the studio into smaller units—even at the risk of incurring
            higher costs.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">E.</span>
            It is easier for ideas to thrive outside big firms these days. In the past, if
            a clever scientist had an idea he wanted to commercialise, he would take it
            first to a big company. Now, with plenty of cheap venture capital, he is more
            likely to set up on his own. Umagic has already raised $5m and is about to
            raise $25m more. Even in capital-intensive businesses such as pharmaceuticals,
            entrepreneurs can conduct early-stage research, selling out to the big firms
            when they reach expensive, risky clinical trials. Around a third of drug firms'
            total revenue now comes from licensed-in technology.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">F.</span>
            Some giants, including General Electric and Cisco, have been remarkably
            successful at snapping up and integrating scores of small companies. But many
            others — T ^ worry about the prices they have to pay and the difficulty in
            hanging on to the talent that dreamt up the idea. Everybody would like to
            develop more ideas in-house. Procter & Gamble is now shifting its entire
            business focus from countries to products; one aim is to get innovations
            accepted across the company. Elsewhere, the search for innovation has led to a
            craze for “intrapreneurship”—devolving power and setting up internal
            ideas-factories and tracking stocks so that talented staff will not leave.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">G.</span>
            Some people think that such restructuring is not enough. In a new book Clayton
            Christensen argues that many things which established firms do well, such as
            looking after their current customers, can hinder the sort of innovative
            behaviour needed to deal with disruptive technologies. Hence the fashion for
            cannibalisation—setting up businesses that will actually fight your existing
            ones. Bank One, for instance, has established Wingspan, an Internet bank that
            competes with its real branches (see article). Jack Welch’s Internet initiative
            at General Electric is called “Destroyyourbusiness.com”.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">H.</span>
            Nobody could doubt that innovation matters. But need large firms be quite so
            pessimistic? A recent survey of the top 50 innovations in America, by Industry
            Week, a journal, suggested that ideas are as likely to come from big firms as
            from small ones. Another skeptical note is sounded by Amar Bhidé, a colleague
            of Mr Christensen’s at the Harvard Business School and the author of another
            book on entrepreneurship. Rather than having to reinvent themselves, big
            companies, he believes, should concentrate on projects with high costs and low
            uncertainty, leaving those with low costs and high uncertainty to small
            entrepreneurs. As ideas mature and the risks and rewards become more
            quantifiable, big companies can adopt them.
        </p>

        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-lime-800">I.</span>
            At Kimberly-Clark, Mr Sanders had to discredit the view that jobs working on
            new products were for “those who couldn't hack it in the real business.” He has
            tried to change the culture not just by preaching fuzzy concepts but also by
            introducing hard incentives, such as increasing the rewards for those who come
            up with successful new ideas and, particularly, not punishing those whose
            experiments fail. The genesis of one of the firm's current hits, Depend, a more
            dignified incontinence garment, lay in a previous miss, Kotex Personals, a form
            of disposable underwear for menstruating women.
        </p>

        <!-- Section J -->
        <p>
            <span class="font-bold text-lime-800">J.</span>
            Will all this creative destruction, cannibalisation and culture tweaking make
            big firms more creative? David Post, the founder of Umagic, is sceptical: “The
            only successful intrapreneurs are ones who leave and become entrepreneurs.” He
            also recalls with glee the looks of total incomprehension when he tried to hawk
            his “virtual experts” idea three years ago to the idea labs of firms such as
            IBM though, as he cheerfully adds, “of course, they could have been right.”
            Innovation unlike, apparently, sex, parenting and fitness is one area where a
            computer cannot tell you what to do.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-sky-700 mb-6">
            The Beginning of Football
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">A.</span>
            Football as we now know it developed in Britain in the 19th century, but the
            game is far older than this. In fact, the term has historically been applied to
            games played on foot, as opposed to those played on horseback, so 'football'
            hasn't always involved kicking a ball. It has generally been played by men,
            though at the end of the 17th century, games were played between married and
            single women in a town in Scotland. The married women regularly won.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">B.</span>
            The very earliest form of football for which we have evidence is the 'tsu'chu',
            which was played in China and may date back 3,000 years. It was performed in
            front of the Emperor during festivities to mark his birthday. It involved
            kicking a leather ball through a 30-40cm opening into a small net fixed onto
            long bamboo canes - a feat that demanded great skill and excellent technique.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">C.</span>
            Another form of the game, also originating from the Far East, was the Japanese
            'kemari' which dates from about the fifth century and is still played today.
            This is a type of circular football game, a more dignified and ceremonious
            experience requiring certain skills, but not competitive in the way the Chinese
            game was, nor is there the slightest sign of struggle for possession of the
            ball. The players had to pass the ball to each other, in a relatively small
            space, trying not to let it touch the ground.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">D.</span>
            The
            Romans had a much livelier game, 'harpastum'. Each team member had his own
            specific tactical assignment took a noisy interest in the proceedings and the
            score. The role of the feet was so small as scarcely to be of consequence. The
            game remained popular for 700 or 800 years, but, although it was taken to
            England, it is doubtful whether it can be considered as a forerunner of
            contemporary football.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">E.</span>
            The game that flourished in Britain from the 8th to the 19th centuries was
            substantially different from all the previously known forms - more
            disorganised, more violent, more spontaneous and usually played by an
            indefinite number of players. Frequently, the games took the form of a heated
            contest between whole villages. Kicking opponents was allowed, as in fact was
            almost everything else.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">F.</span>
            There was tremendous enthusiasm for football, even though the authorities
            repeatedly intervened to restrict it, as a public nuisance. In the 14th and
            15th centuries, England, Scotland and France all made football punishable by
            law, because of the disorder that commonly accompanied it, or because the well
            loved recreation prevented subjects from practising more useful military
            disciplines. None of these efforts had much effect.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">G.</span>
            The English passion for football was particularly strong in the 16th century,
            influenced by the popularity of the rather better organised Italian game of
            'calcio'. English football was as rough as ever, but it found a prominent
            supporter in the school headmaster Richard Mulcaster. He pointed out that it
            had positive educational value and promoted health and strength. Mulcaster
            claimed that all that was needed was to refine it a little, limit the number of
            participants in each team and, more importantly, have a referee to oversee the
            game.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">H.</span>
            The game persisted in a disorganised form until the early 19th century, when a
            number of influential English schools developed thefr own adaptations. In some,
            including Rugby School, the ball could be touched with the hands or carried;
            opponents could be tripped up and even kicked. It was recognised in educational
            circles that, as a team game, football helped to develop such fine qualities as
            loyalty, selflessness, cooperation, subordination and deference to the team
            spirit. A 'games cult' developed in schools, and some form of football became
            an obligatory part of the curriculum.
        </p>

        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-sky-800">I.</span>
            In 1863, developments reached a climax. At Cambridge University, an initiative
            began to establish some uniform standards and rules that would be accepted by
            everyone, but there were essentially two camps: the minority Rugby School and
            some others - wished to continue with their own form of the game, in particular
            allowing players to carry the ball. In October of the same year, eleven London
            clubs and schools sent representatives to establish a set of fundamental rules
            to govern the matches played amongst them. This meeting marked the both of the
            Football Association.
        </p>
        
        <!-- Section J -->
        <p>
            <span class="font-bold text-sky-800">J.</span>
            The dispute concerning kicking and tripping opponents and carrying the ball was
            discussed thoroughly at this and subsequent meetings, until eventually, on 8
            December, the die-hard exponents of the Rugby style withdrew, marking a final
            split between rugby and football. Within eight years, the Football Association
            already had 50 member clubs, and the first football competition in the world
            was started - the FA Cup.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-cyan-700 mb-6">
            A New Ice Age
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">A.</span>
            William Curry is a serious, sober climate scientist, not an
            art critic. But he has spent a lot of time perusing Emanuel Gottlieb Leutze's
            famous painting "George Washington Crossing the Delaware," which
            depicts a boatload of colonial American soldiers making their way to attack
            English and Hessian troops the day after Christmas in 1776. "Most people
            think these other guys in the boat are rowing, but they are actually pushing
            the ice away," says Curry, tapping his finger on a reproduction of the
            painting. Sure enough, the lead oarsman is bashing the frozen river with his
            boot. "I grew up in Philadelphia. The place in this painting is 30 minutes
            away by car. I can tell you, this kind of thing just doesn't happen
            anymore."
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">B.</span>
            But it may again soon. And ice-choked
            scenes, similar to those immortalized by the 16th-century Flemish painter
            Pieter Brueghel the Elder, may also return to Europe. His works, including the
            1565 masterpiece "Hunters in the Snow," make the now-temperate
            European landscapes look more like Lapland. Such frigid settings were
            commonplace during a period dating roughly from 1300 to 1850 because much of
            North America and Europe was in the throes of a little ice age. And now there
            is mounting evidence that the chill could return. A growing number of
            scientists believe conditions are ripe for another prolonged cooldown, or small
            ice age. While no one is predicting a brutal ice sheet like the one that
            covered the Northern Hemisphere with glacier about 12,000 years ago, the next
            cooling trend could drop average temperatures 5 degrees Fahrenheit over much of
            the United States and 10 degrees in the Northeast, northern Europe, and
            northern Asia.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">C.</span>
            "It could happen in 10
            years," says Tenence Joyce, who cha ừ s the Woods Hole Physical
            Oceanography Department. "Once it does, it can take hundreds of years to
            reverse." And he is alarmed that Americans have yet to take the threat
            seriously.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">D.</span>
            A drop of 5 to 10 degrees entails much
            more than simply bumping up the thermostat and carrying on. Both economically
            and ecologically, such quick, persistent chilling could have devastating
            consequences. A 2002 report titled "Abrupt Climate Change: Inevitable
            Surprises," produced by the National Academy of Sciences, pegged the cost
            from agricultural losses alone at $100 billion to $250 billion while also
            predicting that damage to ecologies could be vast and incalculable. A grim
            sampler: disappearing forests, increased housing expenses, dwindling
            freshwater, lower crop fields and accelerated species extinctions.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">E.</span>
            Political changes since the last ice
            age could make survival far more difficult for the world's poor. During
            previous cooling periods, whole tribes simply picked up and moved south, but
            that option doesn't work in the modem, tense world of closed borders. "To
            the extent that abrupt climate change may cause rapid and extensive changes of
            fortune for those who live off the land, the inability to migrate may remove
            one of the major safety nets for distressed people," says the report.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">F.</span>
            But first things first. Isn't the earth
            actually warming? Indeed it is, says Joyce. In his cluttered office, full of
            soft light from the foggy Cape Cod morning, he explains how such warming could
            actually be the surprising culprit of the next mini-ice age. The paradox is a
            result of the appearance over the past 30 years in the North Atlantic of huge
            rivers of freshwater the equivalent of a 10-foot-thick layer mixed into the
            salty sea. No one is certain where the fresh torrents are coming from, but a prime
            suspect is meltin ị Arctic ice, caused by a buildup of carbon dioxide in the
            atmosphere that traps solar energy.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">G.</span>
            The freshwater trend is major news in
            ocean-science circles. Bob Dickson, a British oceanographer who sounded an
            alarm at a February conference in Honolulu, has termed the drop in salinity and
            temperature in the Labrador Sea— a body of water between northeastern Canada
            and Greenland that adjoins the Atlantic—"arguably the largest full-depth
            changes observed in the modem instrumental oceanographic record." could
            cause a little ice age by subverting the northern
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">H.</span>
            The trend penetration of Gulf Stream
            waters. Normally, the Gulf Stream, laden with heat soaked up in the tropics,
            meanders up the east coasts of the United States and Canada. As it flows
            northward, the stream surrenders heat to the. Because the prevailing North
            Atlantic winds blow eastward, a lot of the heat wafts to Europe. That's why
            many scientists believe winter temperatures on the Continent are as much as 36
            degrees Fahrenheit warmer than those in North America at the same latitude.
            Frigid Boston, for example, lies at almost precisely the same latitude as balmy
            Rome. And some scientists say the heat also warms Americans and Canadians.
            "It's a real mistake to think of this solely as a European
            phenomenon," says Joyce.
        </p>

        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">I.</span>
            Having given up its heat to the air,
            the now-cooler water becomes denser and sinks into the North Atlantic by a mile
            or more in a process oceanographers call thermohaline circulation. This massive
            column of cascading cold is the main engine powering a deepwater current called
            the Great Ocean Conveyor that snakes through all the world's oceans. But as the
            North Atlantic fills with freshwater, it grows less dense, making the waters
            carried northward by the Gulf Stream less able to sink. The new mass of relatively
            freshwater sits on top of the ocean like a big thermal blanket, threatening the
            thermohaline circulation. That in turn could make the Gulf Stream slow or veer
            southward. At some point, the whole system could simply shut down, and do so
            quickly. "There is increasing evidence that we are getting closer to a
            transition point, from which we can jump to a new state. Small changes, such as
            a couple of years of heavy precipitation or melting ice at high latitudes,
            could yield a big response,” says Joyce.
        </p>
        
        <!-- Section J -->
        <p>
            <span class="font-bold text-cyan-800">J.</span>
            “You have all this freshwater sitting
            at high latitudes, and it can literally take hundreds of years to get rid of
            it,” Joyce says. So while the globe as a whole gets warmer by tiny fractions of
            1 degree Fahrenheit annually, the North Atlantic region could, in a decade, get
            up to 10 degrees colder. What worries researchers at Woods Hole is that history
            is on the side of rapid shutdown. They know it has happened before.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-emerald-700 mb-6">
            Soviet’s New Working Week
        </h1>
        <p class="mb-4">
            Historian investigates how Stalin changed the calendar to
            keep the Soviet people continually at work.
        </p>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">A.</span>
            “There are no fortresses that
            Bolsheviks cannot storm”. With these words, Stalin expressed the dynamic
            self-confidence of the Soviet Union’s Five Year Plan: weak and backward Russia
            was to turn overnight into a powerful modem industrial country. Between 1928
            and 1932, production of coal, iron and steel increased at a fantastic rate, and
            new industrial cities sprang up, along with the world’s biggest dam. Everyone’s
            life was affected, as collectivised farming drove millions from the land to
            swell the industrial proletariat. Private enterprise disappeared in city and
            country, leaving the State supreme under the dictatorship of Stalin. Unlimited
            enthusiasm was the mood of the day, with the Communists believing that iron
            will and hard-working manpower alone would bring about a new world.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">B.</span>
            Enthusiasm spread to tune itself, in
            the desire to make the state a huge efficient machine, where not a moment would
            be wasted, especially in the workplace. Lenin had already been intrigued by the
            ideas of the American Frederick Winslow Taylor (1856-1915), whose time-motion
            studies had discovered ways of stream-lining effort so that every worker could
            produce the maximum. The Bolsheviks were also great admir ers of Henry Ford’s
            assembly line mass production and of his Fordson tractors that were imported by
            the thousands. The engineers who came with them to train their users helped
            spread what became a real cult of Ford. Emulating and surpassing such
            capitalist models formed part of the training of the new Soviet Man, a heroic
            figure whose unlimited capacity for work would benefit everyone in the dynamic
            new society. All this culminated in the Plan, which has been characterized as
            the triumph of the machine, where workers would become supremely efficient
            robot-like creatures.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">C.</span>
            Yet this was Communism whose goals had
            always included improving the lives of the proletariat. One major step in that
            direction was the sudden announcement in 1927 that reduced the working day from
            eight to seven hours. In January 1929, all Indus-tries were ordered to adopt
            the shorter day by the end of the Plan. Workers were also to have an extra hour
            off on the eve of Sundays and holidays. Typically though, the state took away
            more than it gave, for this was part of a scheme to increase production by establishing
            a three-shift system. This meant that the factories were open day and night and
            that many had to work at highly undesfrable hours.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">D.</span>
            Hardly had that policy been announced,
            though, than Yuri Larin, who had been a close associate of Lenin and architect
            of his radical economic policy, came up with an idea for even greater
            efficiency. Workers were free and plants were closed on Sundays. Why not
            abolish that wasted day by instituting a continuous work week so that the
            machines could operate to their full capacity every day of the week? When Larin
            presented his idea to the Congress of Soviets in May 1929, no one paid much
            attention. Soon after, though, he got the ear of Stalin, who approved.
            Suddenly, in June, the Soviet press was filled with articles praising the new
            scheme. In August, the Council of Peoples’ Commissars ordered that the
            continuous work week be brought into immediate effect, during the height of
            enthusiasm for the Plan, whose goals the new schedule seemed guaranteed to
            forward.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">E.</span>
            The idea seemed simple enough, but
            turned out to be very complicated in practice. Obviously, the workers couldn’t
            be made to work seven days a week, nor should their total work hours be
            increased. The Solution was ingenious: a new five-day week would have the
            workers on the job for four days, with the fifth day free; holidays would be
            reduced from ten to five, and the extra hour off on the eve of rest days would
            be abolished. Staggering the rest-days between groups of workers meant that
            each worker would spend the same number of hours on the job, but the factories
            would be working a full 360 days a year instead of 300. The 360 divided neatly
            into 72 five-day weeks. Workers in each establishment (at first factories, then
            stores and offices) were divided into five groups, each assigned a colour which
            appeared on the new Uninterrupted Work Week calendars distributed all over the
            country. Colour-coding was a valuable mnemonic device, since workers might have
            trouble remembering what their day off was going to be, for it would change
            every week. A glance at the colour on the calendar would reveal the free day,
            and allow workers to plan their activities. This system, however, did not apply
            to construction or seasonal occupations, which followed a six-day week, or to
            factories or mines which had to close regularly for maintenance: they also had
            a six-day week, whether interrupted (with the same day off for everyone) or
            continuous. In all cases, though, Sunday was treated like any other day.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">F.</span>
            Official propaganda touted the material
            and cultural benefits of the new scheme. Workers would get more rest;
            production and employment would increase (for more workers would be needed to
            keep the factories running continuously); the standard of living would improve.
            Leisure time would be more rationally employed, for cultural activities
            (theatre, clubs, sports) would no longer have to be crammed into a weekend, but
            could flourish every day, with their facilities far less crowded. Shopping
            would be easier for the same reasons. Ignorance and superstition, as
            represented by organized religion, would suffer a mortal blow, since 80 per
            cent of the workers would be on the job on any given Sunday. The only objection
            concerned the family, where normally more than one member was working: well,
            the Soviets insisted, the narrow family was far less important than the vast
            common good and besides, arrangements could be made for husband and wife to
            share a common schedule. In fact, the regime had long wanted to weaken or
            sideline the two greatest potential threats to its total dominance: organised
            religion and the nuclear family. Religion succumbed, but the family, as even
            Stalin finally had to admit, proved much more resistant.
        </g>

        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">G.</span>
            The continuous work week, hailed as a
            Utopia where time itself was conquered and the sluggish Sunday abolished
            forever, spread like an epidemic. According to official figures, 63 per cent of
            industrial workers were so employed by April 1930; in June, all industry was
            ordered to convert during the next year. The fad reached its peak in October
            when it affected 73 per cent of workers. In fact, many managers simply claimed
            that their factories had gone over to the new week, without actually applying
            it. Conforming to the demands of the Plan was important; practical matters
            could wait. By then, though, problems were becoming obvious. Most serious
            (though never officially admitted), the workers hated it. Coordination of
            family schedules was virtually impossible and usually ignored, so husbands and
            wives only saw each other before or after work; rest days were empty without
            any loved ones to share them — even friends were likely to be on a different
            schedule. Confusion reigned: the new plan was introduced haphazardly, with some
            factories operating five-, six- and seven-day weeks at the same time, and the
            workers often not getting their rest days at all.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-emerald-800">H.</span>
            The Soviet government might have
            ignored all that (It didn’t depend on public approval), but the new week was
            far from having the vaunted effect on production. With the complicated rotation
            system, the work teams necessarily found themselves doing different kinds of
            work in successive weeks. Machines, no longer consistently in the hands of
            people who knew how to tend them, were often poorly maintained or even broken.
            Workers lost a sense of responsibility for the special tasks they had normally
            performed.
        </p>

        <!-- Section I -->
        <p>
            <span class="font-bold text-emerald-800">I.</span>
            As a result, the new week started to
            lose ground. Stalin's speech of June 1931, which criticised the “depersonalised
            labor” its too hasty application had brought, marked the beginning of the end.
            In November, the government ordered the widespread adoption of the six-day
            week, which had its own calendar, with regular breaks on the 6th, 12th, 18th,
            24th, and 30th, with Sunday usually as a working day. By July 1935, only 26 per
            cent of workers still followed the continuous schedule, and the six-day week was
            soon on its way out. Finally, in 1940, as part of the general reversion to more
            traditional methods, both the continuous five-day week and the novel six-day
            week were abandoned, and Sunday returned as the universal day of rest. A bold
            but typically ill-conceived experiment was at an end.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-red-700 mb-6">
            Density and Crowding
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-red-800">A.</span>
            Of
            the great myriad of problems which man and the world face today, there are
            three significant fiends which stand above all others in importance: the
            uprecedented population growth throughout the world a net increase of 1,400,000
            people per week and all of its associations and consequences; the increasing
            urbanization of these people, so that more and more of them are rushing into
            cities and urban areas of the world; and the tremendous explosion of
            communication and social contact throughout the world, so that every part of
            the world is now aware of every other part. All of these fiends are producing
            increased crowding and the perception of crowding.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-red-800">B.</span>
            It
            is important to emphasize at the outset that crowding and density are not
            necessarily the same. Density is the number of individuals per unit area or
            unit space. It is a simple physical measurement. Crowding is a product of
            density, communication, contact, and activity. It implies a pressure, a force,
            and a psychological reaction. It may occur at widely different densities. The
            frontiersman may have felt crowded when someone built a homestead a mile away.
            The suburbanite may feel relatively uncrowded in a small house on a half-acre
            lot if it is surrounded by trees, bushes, and a hedgerow, even though he lives
            under much higher physical density than did the frontiersman. Hence, crowding
            is very much a psychological and ecological phenomenon, and not just a physical
            condition.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-red-800">C.</span>
            A
            classic crowding study was done by Calhoun (1962), who put rats into a physical
            environment designed to accommodate 50 rats and provided enough food, water,
            and nesting materials for the number of rats in the environment. The rat
            population peaked at 80, providing a look at ramped living conditions. Although
            the rats experienced no resource limitations other than space restriction, a
            number of negative conditions developed: the two most dominant males took
            harems of several female rats and occupied more than their share of space,
            leaving other rats even more crowded; many females stopped building nests and
            abandoned their infant rats; the pregnancy rate declined; infant and adult
            mortality rates increased; more aggressive and physical attacks occurred;
            sexual variation increased, including hypersexuality, inhibited sexuality,
            homosexuality, and bisexuality.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-red-800">D.</span>
            Calhoun's results have led to other research on crowding's effects on human
            beings, and these research findings have suggested that high density is not the
            single cause of negative effects on humans. When crowding is defined only in
            terms of spatial density (the amount of space per person), the effects of
            crowding are variable. However, if crowding is defined in terms of social
            density, or the number of people who must interact, then crowding better
            predicts negative psychological and physical effects.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-red-800">E.</span>
            There are several reasons why crowding makes US feel uncomfortable. One reason
            is related to stimulus overload - there are just too many stimuli competing for
            our attention. We cannot notice or respond to all of them. This feeling is
            typical of the harried mother, who has several children competing for her
            attention, while she is on the phone and the doorbell is ringing. This leaves
            her feeling confused, fatigued and yearning to withdraw from the situation.
            There are strong feelings of a lack of privacy - being unable to pay attention
            to what you want without being repeatedly interrupted or observed by others.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-red-800">F.</span>
            Field studies done in a variety of settings illustrate that social density is
            associated with negative effects on human beings. In prison studies, males
            generally became more aggressive with increases in density. In male prison,
            inmate; living in conditions of higher densities were more likely to suffer
            from fight. Males rated themselves as more aggressive in small rooms (a
            situation of high spatial density), whilst the females rated themselves as more
            aggressive in large rooms (Stokols et al., 1973). These differences relate to
            the different personal space requirements of the genders. Besides, Baum and
            Greenberg found that high density leads to decreased attraction, both physical
            attraction and liking towards others and it appears to have gender differences
            in the impact that density has on attraction levels, with males experiencing a
            more extreme reaction. Also, the greater the density is, the less the helping
            behavior. One reason why the level of helping behavior may be reduced in
            crowded situations links to the concept of diffusion of responsibility. The
            more people that are present in a situation that requires help, the less often
            help is given. This may be due to the fact that people diffuse responsibility
            among themselves with no-one feeling that they ought to be the one to help.
        </p>
        
        <!-- Section G -->
        <p>
            <span class="font-bold text-red-800">G.</span>
            Facing all these problems, what are we going to do with them? The more control
            a person has over the crowded environment the less negatively they experience
            it, thus the perceived crowding is less (Schmidt and Keating). The ability to
            cope with crowding is also influenced by the relationship the individual has
            with the other people in the situation. The high density will be interpreted
            less negatively if the individual experiences it with people he likes. One of
            the main coping strategies employed to limit the impact of high density is
            social withdrawal. This includes behaviors such as averting the gaze and using
            negative body language to attempt to block any potential intrusions.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-yellow-700 mb-6">
            The reconstruction of community in Talbot Park, Auckland
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-yellow-800">A.</span>
            An
            architecture of disguise is almost complete at Talbot Park in the heart of
            Auckland's Glen Innes. The place was once described as a state housing ghetto,
            rife with crime, vandalism and other social problems. But today after a $48
            million urban renewal makeover, the site is home to 700 residents — 200 more
            than before — and has people regularly inquiring whether they can buy or rent
            there. "It doesn't look like social housing," Housing New Zealand
            housing services manager Dene Busby says of the tidy brick and weatherboard
            apartments and townhouses which would look just as much at home in "there
            is no reason why public housing should look cheap in my view," says Design
            Group architect Neil of the eight three-bedroom terrace houses his firm designed.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-yellow-800">B.</span>
            Talbot Park is a triangle of government-owned land bounded by Apirana Ave,
            Pilkington Rd and Point England Rd. In the early 1960s it was developed for
            state housing built around a linear park that ran through the middle.
            Initially, there was a strong sense of a family-friendly community. Former
            residents recall how the Talbot Park reserve played a big part in their
            childhoods — a place where the kids in the block came together to play
            softball, cricket, tiggy, leapfrog and bullrush. Sometimes they'd play
            "Maoris against Pakehas" but without any animosity. "It was all
            just good fun", says Georgie Thompson in Ben Schrader's We Call it Home: A
            History of State Housing in New Zealand. "We had respect for our
            neighbours and addressed them by title Mr. and Mrs. so-and-so," she
            recalls.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-yellow-800">C.</span>
            Quite what went wrong with Talbot Park is not clear. We call it Home Records
            that the community began to change in the late 1970s as more Pacific Islanders
            and Europeans moved in. The new arrivals didn't readily integrate with the
            community, a "them and us" mentality developed, and residents
            interacted with their neighbours less. What was clear was the buildings were
            deteriorating and becoming dilapidated, petty crime was on the rise and the
            reserve — focus of fond childhood memories — had become a wasteland and was
            considered unsafe.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-yellow-800">D.</span>
            But
            it wasn't until 2002 that Housing New Zealand decided the properties needed
            upgrading. The master renewal plan didn't take advantage of the maximum
            accommodation density allowable (one unit per 100 sq metres ) but did increase
            density to one emit per 180 sq m by refurbishing all 108 star flat units,
            removing the multis and building 111 new home. The Talbot strategy can be
            summed up as mix, match and manage. Mix up the housing with variety plans from
            a mix of architects, match house styles to what7 s built by the private sector,
            match tenants to the mix, and manage their occupancy. Inevitably cost comes
            into the equation." If you're going to build low cost homes, you've got to
            keep them simple and you can't afford a fancy bit on them. " says Michael
            Thompson of Architectus which designed the innovative three level Atrium
            apartments lining two sides of a covered courtyard. At $300,000 per two bedroom
            unit, the building is more expensive but provides for independent disabled
            accommodation as well as offering solar hot water heating and rainwater
            collection for toilet cisterns and outside taps.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-yellow-800">E.</span>
            The
            renewal project budget at $1.5 million which will provide park pathways,
            planting, playgrounds, drinking fountains, seating, skateboard rails, a
            half-size basketball hard court, and a pavilion. But if there was any doubt
            this is a low socio-economic area, the demographics for the surrounding Tamaki
            area are sobering. Of the 5000 households there, 55 per cent are state houses,
            28 per cent privately owned (compared to about 65 per cent nationally) and 17
            per cent are private rental. The area has a high concentration of
            households with incomes in the $5000 to $15,000 range and very few with an income over
            $70,000. That's in sharp contrast to the more affluent suburbs like Kohimarama
            and St John's that surround the area.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-yellow-800">F.</span>
            "The design is for people with different culture background," says
            architect James Lunday of Common Ground which designed the 21 large family
            homes. "Architecturally we decided to be relatively conservative — nice
            house in its own garden with a bit of space and good indoor outdoor flow."
            There's a slight reflection of the whare and a Pacific fale, but not overplayed
            "The private sector is way behind in urban design and sustainable
            futures," says Bracey. "Redesigning sheets and parks is a big deal
            and very difficult to do. The private sector won't do it, because It's so
            hard."
        </p>
        
        <!-- Section G -->
        <p>
            <span class="font-bold text-yellow-800">G.</span>
            There's no doubt good urban design and good architecture play a significant
            part in the scheme. But probably more important is a new standard of social
            control. Housing New Zealand calls it "intensive tenancy management".
            Others view it as social engineering. "It's a model that we are looking at
            going forward," according to Housing New Zealand's central Auckland
            regional manager Graham Bodman.1 The focus is on frequent inspections, helping
            tenants to get to know each other and trying to create an environment of
            respect for neighbours, " says Bodman. That includes some strict rules —
            no loud parties after 10 pm, no dogs, no cats in the apartments, no washing
            hung over balcony rails and a requirement to mow lawns and keep the property
            tidy. Housing New Zealand has also been active in organising morning teas and
            sheet barbecues for residents to meet their neighbours. "IVs all based on
            the intensification," says Community Renewal project manager Stuart
            Bracey. "We acknowledge if you are going to put more people living closer
            together, you have to actually help them to live closer together because it
            creates tension — especially for people that aren't used to it."
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
            Video Game’s Unexpected Benefits to Human Brain
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-green-800">A.</span>
            James Paul Gee, professor of education at the University of Wisconsin Madison,
            played his first video game years ago when his six-year-old son Sam was playing
            Pajama Sam: No Need to Hide When It’s Dark Outside. He wanted to play the game
            so he could support Sam’s problem solving. Though Pajama Sam is not an
            “educational game”, it is replete with the types of problems psychologists
            study when they study thinking and learning. When he saw how well the game held
            Sam’s attention, he wondered what sort of beast a more mature video game might
            be.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-green-800">B.</span>
            Video and computer games, like many other popular, entertaining and addicting
            kid’s activities, are looked down upon by many parents as time wasters, and
            worse, parents think that these games rot the brain. Violent video games are
            readily blamed by the media and some experts as the reason why some youth
            become violent or commit extreme anti-social behavior. Recent content analyses
            of video games show that as many as 89% of games contain some violent content,
            but there is no form of aggressive content for 70% of popular games. Many
            scientists and psychologists, like James Paul Gee, find that video games
            actually have many benefits - the main one being making kids smart. Video games
            may actually teach kids high-level thinking skills that they will need in the
            future.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-green-800">C.</span>
            "Video games change your brain," according to University of Wisconsin
            psychologist Shawn Green. Video games change the brain’s physical structure the
            same way as do learning to read, playing the piano, or navigating using a map.
            Much like exercise can build muscle, the powerful combination of concentration
            and rewarding surges of neurotransmitters like dopamine, which strengthens
            neural circuits, can build the player’s brain.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-green-800">D.</span>
            Video games give your child’s brain a real workout. In many video games, the
            skills requ ừ ed to win involve abstract and high level thinking. These skills
            are not even taught at school. Some of the mental skills trained by video games
            include: following instructions, problem solving, logic, hand-eye coordination,
            fine motor and spatial skills. Research also suggests that people can learn
            iconic, spatial, and visual attention skills from video games. There have been
            even studies with adults showing that experience with video games is related to
            better surgical skills. Jacob Benjamin, doctor from Beth Israel Medical Center
            NY, found a direct link between skill at video gaming and skill at keyhole or
            laparoscopic surgery. Also, a reason given by experts as to why fighter pilots
            of today are more skillful is that this generation’s pilots are being weaned on
            video games.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-green-800">E.</span>
            The
            players learn to manage resources that are limited, and decide the best use of
            resources, the same way as in real life. In strategy games, for instance, whi
            le developing a city, an unexpected surprise like an enemy might emerge. This
            forces the player to be flexible and quickly change tactics. Sometimes the
            player does this almost every second of the game giving the brain a real
            workout. According to researchers at the University of Rochester, led by Daphne
            Bavelier, a cognitive scientist, games simulating stressful events such as
            those found in battle or action games could be a training tool for real-world
            situations. The study suggests that playing action video games primes the brain
            to make quick decisions. Video games can be used to train soldiers and
            surgeons, according to the study. Steven Johnson, author of Everything Bad is
            Good For You: How Today's Popular Culture, says gamers must deal with immediate
            problems while keeping their long-term goals on their horizon. Young gamers
            force themselves to read to get instructions, follow storylines of games, and
            get information from the game texts.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-green-800">F.</span>
            James Paul Gee, professor of education at the University of Wisconsin Madison,
            says that playing a video game is similar to working through a science problem.
            Like students in a laboratory, gamers must come up with a hypothesis. For
            example, players in some games constantly try out combinations of weapons and
            powers to use to defeat an enemy. If one does not work, they change hypothesis
            and try the next one. Video games are goal-driven experiences, says Gee, which
            are fundamental to learning. Also, using math skills is important to win in
            many games that involve quantitative analysis like managing resources. In
            higher levels of a game, players usually fail the first time around, but they
            keep on trying until they succeed and move on to the next level.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-green-800">G.</span>
            Many games are played online and involve cooperation with other online players
            in order to win. Video and computer games also help children gain self
            confidence and many games are based on history, city building, and governance
            and so on. Such games indirectly teach children about aspects of life on earth.
        </p>
        
        <!-- Section H -->
        <p>
            <span class="font-bold text-green-800">H.</span>
            In
            an upcoming study in the journal Current Biology, authors Daphne Bavelier,
            Alexandre Pouget, and C. Shawn Green report that video games could provide a
            potent training regimen for speeding up reactions in many types of real-life
            situations. The researchers tested dozens of 18- to 25-year-olds who were not
            ordinarily video game players. They split the subjects into two groups. One
            group played 50 hours of the fast-paced action video games "Call of Duty
            2" and "Unreal Tournament," and the other group played 50 hours
            of the slow moving strategy game "The Sims 2." After this training
            period, all of the subjects were asked to make quick decisions in several tasks
            designed by the researchers. The action game players were up to 25 percent
            faster at coming to a conclusion and answered just as many questions correctly
            as their strategy game playing peers.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-purple-700 mb-6">
            Lie Detector
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">A.</span>
            However much we may abhor it, deception comes naturally to all living things.
            Birds do it by feigning injury to lead hungry predators away from nesting
            young. Spider crabs do it by disguise: adorning themselves with strips of kelp
            and other debris, they pretend to be something they are not-and so escape their
            enemies. Nature amply rewards successful deceivers by allowing them to survive
            long enough to mate and reproduce. So it may come as no surprise to learn that
            human beings-who, according to psychologist Gerald Jellison of the University
            of South California, are lied to about 200 ti mes a day, roughly one untruth
            every five minutes—often deceive for exactly the same reasons: to save their
            own skins or to get something they can't get by other means.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">B.</span>
            But knowing how to catch deceit can be just as important a survival skill as
            knowing how to tell a lie and get away with it. A person able to spot falsehood
            quickly is unlikely to be swindled by an unscrupulous business associate or
            hoodwinked by a devious spouse. Luckily, nature provides more than enough clues
            to trap dissemblers in then own tangled webs-if you know where to look. By
            closely observing facial expressions, body language and tone of voice,
            practically anyone can recognize the telltale signs of lying. Researchers are
            even programming computers-like those used on Lie Detector-to get at the truth
            by analyzing the same physical cues available to the naked eye and ear.
            "With the proper training, many people can learn to reliably detect lies,"
            says Paul Ekman, professor of psychology at the University of California, San
            Francisco, who has spent the past 15 years studying the secret art of
            deception.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">C.</span>
            In order to know what kind of lies work best, successful liars need to
            accurately assess other people's emotional states. Ekman's research shows that
            this same emotional intelligence is essential for good lie detectors, too. The
            emotional state to watch out for is stress, the conflict most liars feel
            between the truth and what they actually say and do.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">D.</span>
            Even high-tech lie detectors don't detect lies as such; they merely detect the
            physical cues of emotions, which may or may not correspond to what the person
            being tested is saying. Polygraphs, for instance, measure respiration, heart
            rate and skin conductivity, which tend to increase when people are nervous as
            they usually are when lying. Nervous people typically perspire, and the salts
            contained in perspiration conduct electricity. That's why a sudden leap in skin
            conductivity indicates nervousness about getting caught, perhaps? -- which
            might, in turn, suggest that someone is being economical with the truth. On the
            other hand, it might also mean that the lights in the television studio are too
            hot-which is one reason polygraph tests are inadmissible in court. "Good
            lie detectors don't rely on a single sign," Ekman says, "but
            interpret clusters of verbal and nonverbal clues that suggest someone might be
            lying."
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">E.</span>
            Those clues are written all over the face. Because the musculature of the face
            is directly connected to the areas of the brain that process emotion, the
            countenance can be a window to the soul. Neurological studies even suggest that
            genuine emotions travel different pathways through the brain than insincere
            ones. If a patient paralyzed by stroke on one side of the face, for example, is
            asked to smile deliberately, only the mobile side of the mouth is raised. But
            tell that same person a funny joke, and the patient breaks into a full and
            spontaneous smile. Very few people-most notably, actors and politicians-are
            able to consciously control all of their facial expressions. Lies can often be
            caught when the liar's true feelings briefly leak through the mask of
            deception. "We don't think before we feel," Ekman says.
            "Expressions tend to show up on the face before we're even conscious of
            experiencing an emotion."
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-purple-800">F.</span>
            One of the most difficult facial expressions to fake—or conceal, if it is
            genuinely felt—is sadness. When someone is truly sad, the forehead wrinkles
            with grief and the inner comers of the eyebrows are pulled up. Fewer than 15%
            of the people Ekman tested were able to produce this eyebrow movement
            voluntarily. By contrast, the lowering of the eyebrows associated with an angry
            scowl can be replicated at will by almost everybody. "If someone claims
            they are sad and the inner comers of their eyebrows don't go up," Ekman
            says, "the sadness is probably false."
        </p>
        
        <!-- Section G -->
        <p>
            <span class="font-bold text-purple-800">G.</span>
            The smile, on the other hand, is one of the easiest facial expressions to
            counterfeit. It takes just two muscles-the zygomaticus major muscles that
            extend from the cheekbones to the comers of the lips-to produce a grin. But
            there's a catch. A genuine smile affects not only the comers of the lips but
            also the orbicularis oculi, the muscle around the eye that produces the
            distinctive "crow's-feet" associated with people who laugh a lot. A
            counterfeit grin can be unmasked if the lip comers go up, the eyes crinkle but
            the inner comers of the eyebrows are not lowered, a movement controlled by the
            orbicularis oculi that is difficult to fake. The absence of lowered eyebrows is
            one reason why false smiles look so strained and stiff.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-brown-700 mb-6">
            Leaf-Cutting Ants and Fungus
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">A.</span>
            The ants and then agriculture have been extensively studied over the years, but
            the recent research has uncovered intriguing new findings about the fungus they
            cultivate, how they domesticated it and how they cultivate it and preserve it
            from pathogens. For example, the fungus farms, which the ants were thought to
            keep free of pathogens, turn out to be vulnerable to a devastating mold, found
            nowhere else but in ants' nests. To keep the mold in check, the ants long ago
            made a discovery that would do credit to any pharmaceutical laboratory.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">B.</span>
            Leaf-cutting ants and then fungus farms are a marvel of nature and perhaps the
            best known example of symbiosis, the mutual dependence of two species. The
            ants' achievement is remarkable - the biologist Edward o. Wilson has called it
            "one of the major breakthroughs in animal evolution" — because it
            allows them to eat, courtesy of their mushroom's digestive powers, the
            otherwise poisoned harvest of tropical forests whose leaves are laden with
            terpenoids, alkaloids and other chemicals designed to sicken browsers.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">C.</span>
            Fungus growing seems to have originated only once in evolution, because all
            gardening ants belong to a single tribe, the descendants of the first fungus
            farmer. There are more than 200 known species of the attine ant tribe, divided
            into 12 groups, or genera. The leaf-cutters use fresh vegetation; the other
            groups, known as the lower attines because their nests are smaller and their
            techniques more primitive, feed their gardens with detritus like dead leaves,
            insects and feces.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">D.</span>
            The leaf-cutters' fungus was indeed descended from a single strain, propagated
            clonally, or just by budding, for at least 23 million years. But the lower
            attine ants used different varieties of the fungus, and in one case a quite
            separate species, the four biologists discovered. The pure strain of fungus
            grown by the leaf-cutters, it seemed to Mr. Currie, resembled the monocultures
            of various human crops, that are very productive for a while and then succumb
            to some disastrous pathogen, such as the Irish potato blight. Monocultures,
            which lack the genetic diversity to respond to changing environmental threats,
            are sitting ducks for parasites. Mr. Currie felt there had to be a parasite in
            the ant-fungus system. But a century of ant research offered no support for the
            idea. Textbooks describe how leaf-cutter ants scrupulously weed their gardens
            of all foreign organisms. "People kept telling me, 'You know the ants keep
            then gardens free of parasites, don't you?'" Mr. Currie said of his
            efforts to find a hidden interloper.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">E.</span>
            But after three years of sifting through attine ant gardens, Mr. Currie
            discovered they are far from free of infections. In last month's issue of the
            Proceedings of the National Academy of Sciences, he and two colleagues, Dr.
            Mueller and David Mairoch, isolated several alien organisms, particularly a
            family of parasitic molds called Escovopsis.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">F.</span>
            Escovopsis turns out to be a highly virulent pathogen that can devastate a
            fungus garden in a couple of days. It blooms like a white cloud, with the
            garden dimly visible underneath. In a day or two the whole garden is enveloped.
            "Other ants won't go near it and the ants associated with the garden just
            starve to death," Dr. Rehner said. "They just seem to give up, except
            for those that have rescued their larvae." The deadly mold then turns
            greenish-brown as it enters its spore forming stage.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">G.</span>
            Evidently the ants usually manage to keep Escovopsis and other parasites under
            control. But with any lapse in control, or if the ants are removed, Escovopsis
            will quickly burst forth. Although new leaf-cutter gardens start off free of
            Escovopsis, within two years some 60 percent become infected. The discovery of
            Escovopsis's role brings a new level of understanding to the evolution of the
            attine ants. "In the last decade, evolutionary biologists have been
            increasingly aware of the role of parasites as driving forces in
            evolution," Dr. Schultz said. There is now a possible reason to explain
            why the lower attine species keep changing the variety of fungus in their
            mushroom gardens, and occasionally domesticating new ones — to stay one step
            ahead of the relentless Escovopsis.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">H.</span>
            Interestingly, Mr. Currie found that the leaf-cutters had in general fewer
            alien molds in their gardens than the lower attines, yet they had more
            Escovopsis infections. It seems that the price they pay for cultivating a pure
            variety of fungus is a higher risk from Escovopsis. But the leaf-cutters may
            have little alternative: they cultivate a special variety of fungus which,
            unlike those grown by the lower attines, produces nutritious swollen tips for
            the ants to eat.
        </p>

        <!-- Section I -->
        <p class="mb-4">
            <span class="font-bold text-brown-800">I.</span>
            Discovery of a third partner in the ant-fungus symbiosis raises the question of
            how the attine ants, especially the leaf-cutters, keep this dangerous
            interloper under control. Amazingly enough, Mr. Currie has again provided the
            answer. "People have known for a hundred years that ants have a whitish
            growth on the cuticle," said Dr. Mueller, referring to the insects' body
            surface. "People would say this is like a cuticular wax. But Cameron was
            the first one in a hundred years to put these things under a microscope. He saw
            it was not inert wax. It is alive." Mr. Currie discovered a specialized
            patch on the ants' cuticle that harbors a particular kind of bacterium, one
            well known to the pharmaceutical industry, because it is the source of half the
            antibiotics used in medicine. From each of 22 species of attine ant studied,
            Mr. Cameron and colleagues isolated a species of Streptomyces bacterium, they
            reported in Nature in April. The Streptomyces does not have much effect on
            ordinary laboratory funguses. But it is a potent poisoner of Escovopsis,
            inhibiting its growth and suppressing spore formation. It also stimulates
            growth of the ants' mushroom fungus. The bacterium is carried by virgin queens
            when they leave to establish new nests, but is not found on male ants, playboys
            who take no responsibility in nest-making or gardening.
        </p>
        
        <!-- Section J -->
        <p>
            <span class="font-bold text-brown-800">J.</span>
            Because both the leaf-cutters and the lower attines use Streptomyces, the
            bacterium may have been part of their symbiosis for almost as long as the
            Escovopsis mold. If so, some Alexander Fleming of an ant discovered antibiotics
            millions of years before people did. Even now, the ants are accomplishing two
            feats beyond the powers of human technology. The leaf cutters are growing a
            monocultural crop year after year without disaster, and they are using an
            antibiotic apparently so wisely and prudently that, unlike people, they are not
            provoking antibiotic resistance in the target pathogen.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-blue-700 mb-6">
            Save Endangered Language
        </h1>
        <p class="italic text-center mb-6">"Obviously
            we must do some serious rethinking of our priorities, lest linguistics go down
            in history as the only science that presided obviously over the disappearance
            of 90 percent of the very field to which It is dedicated." - Michael
            Krauss, The World’s Languages in Crisis" 
        </p>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">A.</span>
            Ten years ago Michael Krauss sent a shudder through the discipline of
            linguistics with his prediction that half the 6,000 or so languages spoken in
            the world would cease to be uttered within a century. Unless scientists and
            community leaders directed a worldwide effort to stabilize the decline of local
            languages, he warned, nine tenths of the linguistic diversity of humankind
            would probably be doomed to extinction. Krauss’s prediction was little more
            than an educated guess, but other respected linguists had been clanging out
            similar alarms. Keneth L. Hale of the Massachusetts Institute of Technology
            noted in the same journal issue that eight languages on which he bad done
            fieldwork had since passed into extinction. A 1990 survey in Australia found
            that 70 of the 90 surviving Aboriginal languages were no longer used regularly
            by all age groups. The same was true for all but 20 of the 175 Native American
            languages spoken or remembered in the US., Krauss told a congressional panel in
            1992.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">B.</span>
            Many experts in the field mourn the loss of rare languages, for several
            reasons. To start, there is scientific self-interest; some of the most basic
            questions in linguistics have to do with the limits of human speech, which are
            far from fully explored. Many researchers would like to know which structural
            elements of grammar and vocabulary—if any—are truly universal and probably
            therefore hardwired into the human brain. Other scientists try to reconstruct
            ancient migration patterns by comparing borrowed words that appear in otherwise
            unrelated languages, in each of these cases, the wider the portfolio of
            languages you study, the more likely you are to get the right answers.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">C.</span>
            Despite the near constant buzz in linguistics about endangered languages over
            the past 10 years, the field has accomplished depressingly little. “You would
            think that there would be some organized response to this dire situation’ some
            attempt to determine which language can be saved and which should be documented
            before they disappear, says Sarah G. Thomason, a linguist at the University of
            Michigan at Ann Arbor. “But there isn’t any such effort organized in the
            profession. It is only recently that it has become fashionable enough to work
            on endangered languages.” Six years ago, recalls Douglas H. Whalen of Yale
            University, “when I asked linguists who was raising money to deal with these
            problems, I mostly got blank stares.” So Whalen and a few other linguists
            founded the Endangered Languages Fund. In the five years to 2001 they were able
            to collect only $80,000 for research grants. A similar foundation in England,
            directed by Nicholas Ostler, has raised just $8,000 since 1995.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">D.</span>
            But there are encouraging signs that the field has turned a comer. The
            Volkswagen Foundation, a German charity, just issued its second round of grants
            totaling more than $2 million. It has created a multimedia archive at the Max
            Planck Institute for Psycholinguistics in the Netherlands that can house
            recordings, grammars, dictionaries and other data on endangered languages. To
            fill the archive, the foundation has dispatched field linguists to document
            Aweti (100 or so speakers in Brazil), Ega (about 300 speakers in Ivory Coast),
            Waima’a (a few hundred speakers in East Timor), and a dozen or so other
            languages unlikely to survive the century. The Ford Foundation has also edged
            into the arena. Its contributions helped to reinvigorate a master-apprentice program
            created in 1992 by Leanne Hinton of Berkeley and Native Americans worried about
            the imminent demise of about 50 indigenous languages in California. Fluent
            speakers receive $3,000 to teach a younger relative (who is also paid) their
            native tongue through 360 hours of shared activities, spread over six months.
            So far about 5 teams have completed the program, Hinton says, transmitting at
            least some knowledge of 25 languages. “It’s too early to call this language
            revitalization,” Hinton admits. “In California the death rate of elderly
            speakers will always be greater than the recruitment rate of young speakers.
            But at least we prolong the survival of the language.” That will give linguists
            more time to record these tongues before they vanish.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">E.</span>
            But the master-apprentice approach hasn’t caught on outside the U.S., and
            Hinton’s effort is a drop in the sea. At least 440 languages have been reduced
            to a mere handful of elders, according to the Ethnologue, a catalogue of
            languages produced by the Dallas-based group SIL International that comes
            closest to global coverage. For the vast majority of these languages, there is
            little or no record of their grammar, vocabulary, pronunciation or use in daily
            life. Even if a language has been fully documented, all that remains once it
            vanishes from active use is a fossil skeleton, a scattering of features that
            the scientist was lucky and astute enough to capture. Linguists may be able to
            sketch an outline of the forgotten language and fix its place on the evolutionary
            tree, but little more. “How did people start conversations and talk to babies?
            How did husbands and wives converse?” Hinton asks. “Those are the first things
            you want to learn when you want to revitalize the language.”
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">F.</span>
            But there is as yet no discipline of “conservation linguistics,” as there is
            for biology. Almost every strategy tried so far has succeeded in some places
            but failed in others, and there seems to be no way to predict with certainty
            what will work where. Twenty years ago in New Zealand, Maori speakers set up
            “language nests,” in which preschoolers were immersed in the native language.
            Additional Maori-only classes were added as the children progressed through
            elementary and secondary school. A similar approach was tried in Hawaii, with
            some success—the number of native speakers has stabilized at 1,000 or so,
            reports Joseph E. Grimes of SIL International, who is working on Oahu. Students
            can now get instruction in Hawaiian all the way through university.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-blue-800">G.</span>
            One factor that always seems to occur in the demise of a language is that the
            speakers begin to have collective doubts about the usefulness of language
            loyalty. Once they start regarding their own language as inferior to the
            majority language, people stop using it for all situations. Kids pick up on the
            attitude and prefer the dominant language. In many cases, people don’t notice
            until they suddenly realize that their kids never speak the language, even at
            home. This is how Cornish and some dialects of Scottish Gaelic is still only
            rarely used for daily home life in Ireland, 80 years after the republic was
            founded with Irish as its first official language.
        </p>
        
        <!-- Section H -->
        <p>
            <span class="font-bold text-blue-800">H.</span>
            Linguists agree that ultimately, the answer to the problem of language
            extinction is multilingualism. Even uneducated people can learn several
            languages, as long as they start as children. Indeed, most people in the world
            speak more than one tongue, and in places such as Cameroon (279 languages),
            Papua New Guinea (823) and India (387) it is common to speak three or four
            distinct languages and a dialect or two as well. Most Americans and Canadians,
            to the west of Quebec, have a gut reaction that anyone speaking another
            language in front of them is committing an immoral act. You get the same
            reaction in Australia and Russia. It is no coincidence that these are the areas
            where languages are disappearing the fastest. The first step in saving dying
            languages is to persuade the world’s majorities to allow the minorities among
            them to speak with theft own voices.
        </p>`,
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
        id: "reading-section-1",
        title: "Section 1",
        passageContent: ` <h1 class="text-center text-3xl md:text-4xl font-extrabold text-orange-700 mb-6">
            Food for thought 2
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">A.</span>
            There are not enough classrooms at the Msekeni primary school, so half the
            lessons take place in the shade of yellow-blossomed acacia trees. Given this
            shortage, it might seem odd that one of the school's purpose-built classrooms
            has been emptied of pupils and turned into a storeroom for sacks of grain. But
            it makes sense. Food matters more than shelter.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">B.</span>
            Msekeni is in one of the poorer parts of Malawi, a landlocked southern African
            country of exceptional beauty and great poverty. No war lays waste Malawi, nor
            is the land unusually crowded or infertile, but Malawians still have trouble
            finding enough to eat. Half of the children under five are underfed to the
            point of stunting. Hunger blights most aspects of Malawian life, so the country
            is as good a place as any to investigate how nutrition affects development, and
            vice versa.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">C.</span>
            The headmaster at Msekeni, Bernard Kumanda, has strong views on the subject. He
            thinks food is a priceless teaching aid. Since 1999, his pupils have received
            free school lunches. Donors such as the World Food Programme (WFP) provide the
            food: those sacks of grain (mostly mixed maize and soyabean flour, enriched
            with vitamin A) in that converted classroom. Local volunteers do the
            cooking—turning the dry ingredients into a bland but nutritious slop, and
            spooning it out on to plastic plates. The children line up in large crowds,
            cheerfully singing a song called "We are getting porridge".
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">D.</span>
            When the school's feeding programme was introduced, enrolment at Msekeni
            doubled. Some of the new pupils had switched from nearby schools that did not
            give out free porridge, but most were children whose families had previously
            kept them at home to work. These families were so pool that the long-term
            benefits of education seemed unattractive when set against the short-term gain
            of sending children out to gather firewood or help in the fields. One plate of
            porridge a day completely altered the calculation A child fed at school will
            not howl so plaintively for food at home. Girls, who are more likely than boys
            to be kept out of school, are given extra snacks to take home.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">E.</span>
            When a school takes in a horde of extra students from the poorest homes, you
            would expect standards to drop. Anywhere in the world, poor kids tend to
            perform worse than their better-off classmates. When the influx of new pupils
            is not accompanied by any increase in the number of teachers, as was the case
            at Msekeni, you would expect standards to fall even further. But they have not
            Pass rates at Msekenl improved dramatically, from 30% to 65%. Although this was
            an exceptional example, the nationwide results of school feeding programmes
            were still pretty good. On average, after a Malawian school started handing out
            free food it attracted 38% more girls and 24% more boys. The pass rate for boys
            stayed about die same, while for girls it improved by 93%.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-orange-800">F.</span>
            Better nutrition makes for brighter children. Most immediately, well-fed
            children find it easier to concentrate. It is hard to focus the mind on long
            division when your stomach is screaming for food. Mr Kumanda says that it used
            to be easy to spot the kids who were really undernourished. "They were the
            ones who stared into space and didn?t respond when you asked them
            questions," he says. More crucially, though, more and better food helps
            brains grow and develop. Like any other organ in the body, the brain needs
            nutrition and exercise. But if it is starved of the necessary calories,
            proteins and micronutrients. It Is stunted, perhaps not as severely as a muscle
            would be, but stunted nonetheless. That is why feeding children at schools
            works so well. And the fact that the effect of feeding was more pronounced on
            girls than on boys gives a clue to who eats first In rural Malawian households.
            It isn't the girls.
        </p>
        
        <!-- Section G -->
        <p>
            <span class="font-bold text-orange-800">G.</span>
            On a global scale, the good news Is that people are eating better than ever
            before. Homo sapiens has grown 50% bigger since the industrial revolution.
            Three centuries ago, chronic malnutrition was more or less universal. Now, it
            Is extremely rare in rich countries. In developing countries, where most people
            live, plates and rice bowls are also fuller than ever before. The proportion of
            children under five in the developing world who are malnourished to the point
            of stunting fell from 39% in 1990 to 30% in 2000, says the World Health
            Organisation (WHO). In other places, the battle against hunger is steadily
            being won. Better nutrition is making people cleverer and more energetic, which
            will help them grow more prosperous. And when they eventually join the ranks of
            the well off, they can start fretting about growing too fat.
        </p>`,
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
        id: "reading-section-2",
        title: "Section 2",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">
            Saving the British Bitterns
        </h1>

        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">A.</span>
            Breeding bitterns became extinct in the UK by 1886 but, following
            re-colonisation early last century, numbers rose to a peak of about 70 booming
            (singing) males in the 1950s, falling to fewer than 20 by the 1990s. In the
            late 1980s it was clear that the bittern was in trouble, but there was little
            information on which to base recovery actions.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">B.</span>
            Bitterns have cryptic plumage and a shy nature, usually remaining hidden within
            the cover of reedbed vegetation. Our first challenge was to develop standard
            methods to monitor their numbers. The boom of the male bittern is its most
            distinctive feature during the breeding season, and we developed a method to
            count them using the sound patterns unique to each individual. This not only
            allows US to be much more certain of the number of booming males in the UK, but
            also enables us to estimate local survival of males from one year to the next.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">C.</span>
            Our first direct understanding of the habitat needs of breeding bitterns came
            from comparisons of reedbedsites that had lost their booming birds with those
            that retained them. This research showed that bitterns had been retained in
            reedbeds where the natural process of succession, or drying out, had been
            slowed through management. Based on this work, broad recommendations on how to
            manage and rehabilitate reedbeds for bitterns were made, and funding was
            provided through the EU LIFE Fund to manage 13 sites within the core breeding
            range. This project, though led by the RSPB, involved many other organisations.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">D.</span>
            To refine these recommendations and provide fine-scale, quantitative habitat
            prescriptions on the bitterns' preferred feeding habitat, we radio-tracked male
            bitterns on the RSPB's Minsmere and Leighton Moss reserves. This showed clear
            preferences for feeding in the wetter reedbed margins, particularly within the
            reedbed next to larger open pools. The average home range sizes of the male
            bitterns we followed (about 20 hectares) provided a good indication of the area
            of reedbed needed when managing or creating habitat for this species. Female
            bitterns undertake all the incubation and care of the young, so it was
            important to understand then needs as well. Over the course of our research, we
            located 87 bittern nests and found that female bitterns preferred to nest in
            areas of continuous vegetation, well into the reedbed, but where water was
            still present during the driest part of the breeding season.
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">E.</span>
            The success of the habitat prescriptions developed from this research has been
            spectacular. For instance, at Minsmere, booming bittern numbers gradually
            increased from one to 10 following reedbed lowering, a management technique
            designed to halt the drying out process. After a low point of 11 booming males
            in 1997, bittern numbers in Britain responded to all the habitat management
            work and started to increase for the first time since the 1950s.
        </p>

        <!-- Section F -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">F.</span>
            The final phase of research involved understanding the diet, survival and
            dispersal of bittern chicks. To do this we fitted small radio tags to young
            bittern chicks in the nest, to determine their fate through to fledgingand
            beyond. Many chicks did not survive to fledging and starvation was found to be
            the most likely reason for their demise. The fish prey fed to chicks was
            dominated by those species penetrating into the reed edge. So, an important
            element of recent studies (including a PhD with the University of Hull) has
            been the development of recommendations on habitat and water conditions to
            promote healthy native fish populations.
        </p>
        
        <!-- Section G -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">G.</span>
            Once independent, radio-tagged young bitterns were found to seek out new sites
            during their first winter; a proportion of these would remain on new sites to
            breed if the conditions were suitable. A second EU LIFE funded project aims to
            provide these suitable sites in new areas. A network of 19 sites developed
            through this partnership project will secure a more sustainable UK bittern
            population with successful breeding outside of the core area, less vulnerable
            to chance events and sea level rise.
        </p>

        <!-- Section H -->
        <p class="mb-4">
            <span class="font-bold text-teal-800">H.</span>
            By 2004, the number of booming male bitterns in the UK had increased to 55,
            with almost all of the increase being on those sites undertaking management
            based on advice derived from our research. Although science has been at the
            core of the bittern story, success has only been achieved through the trust,
            hard work and dedication of all the managers, owners and wardens of sites that
            have implemented, in some cases very drastic, management to secure the future
            of this wetland species in the UK. The constructed bunds and five major sluices
            now control the water level over 82 ha, with a further 50 ha coming under
            control in the winter of 2005/06. Reed establishment has principally used
            natural regeneration or planted seedlings to provide small core areas that will
            in time expand to create a bigger reed area. To date nearly 275,000 seedlings
            have been planted and reed cover is extensive. Over 3 km of new ditches have
            been formed, 3.7 km of existing ditch have been re-profiled and 2.2 km of old
            meander (former estuarine out. features) have been cleaned
        </p>
        
        <!-- Section I -->
        <p>
            <span class="font-bold text-teal-800">I.</span>
            Bitterns now regularly winter on the site with some indication that they are
            staying longer into the spring. No breeding has yet occurred but a booming male
            was present in the spring of 2004. A range of wildfowl breed, as well as a good
            number of reedbed passerines including reed bunting, reed, sedge and
            grasshopper warblers. Numbers of wintering shoveler have increased so that the
            site now holds a UK important wintering population. Malltraeth Reserve now
            forms part of the UK network of key sites for water vole (a UK priority
            species) and 12 monitoring transectshave been established. Otter and brown-hare
            occur on the site as does the rare plant, pillwort.
        </p>`,
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
        id: "reading-section-3",
        title: "Section 3",
        passageContent: `<h1 class="text-center text-3xl md:text-4xl font-extrabold text-cyan-700 mb-6">
            E- Training
        </h1>
        
        <!-- Section A -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">A.</span>
            E-leaming is the unifying term to describe the fields of online learning,
            web-based training, and technology-delivered instruction, which can be a great
            benefit to corporate e-learning. IBM, for instance, claims that the institution
            of its e-training program, Basic Blue, whose purpose is to train new managers,
            saved the company in the range of $200 million in 1999. Cutting the travel
            expenses required to bring employees and instructors to a central classroom
            accounts for the lion's share of the savings. With an online course, employees
            can learn from any Internet-connected PC, anywhere in the world. Ernst and
            Young reduced training costs by 35 percent while improving consistency and
            scalability.
        </p>

        <!-- Section B -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">B.</span>
            In addition to generally positive economic benefits, other advantages such as
            convenience, standardized delivery, self-paced learning, and variety of
            available content, have made e-learning a high priority for many corporations.
            E-learning is widely believed to offer flexible "any time, any place"
            learning. The claim for "any place" is valid in principle and is a
            great development. Many people can engage with rich learning materials that
            simply were not possible in a paper or broadcast distance learning era. For
            teaching specific information and skills, e-training holds great promise. It
            can be especially effective at helping employees prepare for IT certification
            programs. E-learning also seems to effectively address topics such as sexual
            harassment education,’ safety training and management training — all areas
            where a clear set of objectives can be identified. Ultimately, training experts
            recommend a "blended" approach that combines both online and
            in-person framing as the instruction requires. E learning is not an end-all
            solution. But if it helps decrease costs and windowless classrooms filled with
            snoring students, it definitely has its advantages.
        </p>

        <!-- Section C -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">C.</span>
            Much of the discussion about implementing e-learning has focused on the
            technology, but as Driscoll and others have reminded us, e-learning is not just
            about the technology, but also many human factors. As any capable manager
            knows, teaching employees new skills is critical to a smoothly run business.
            Having said that, however, the traditional route of classroom instruction runs
            the risk of being expensive, slow and, often times, ineffective. Perhaps the
            classroom's greatest disadvantage is the fact that it takes employees out of
            their jobs. Every minute an employee is sitting in a classroom training session
            is a minute they're not out on the floor working. It now looks as if there is a
            way to circumvent these traditional training drawbacks. E-training promises
            more effective teaching techniques by integrating audio, video, animation, text
            and interactive materials with the intent of teaching each student at his or
            her own pace. In addition to higher performance results, there are other
            immediate benefits to students such as increased time on task, higher levels of
            motivation, and reduced test anxiety for many learners. A California State
            University Northridge study reported that e-learners performed 20 percent
            better than traditional learners. Nelson reported a significant difference
            between the mean grades of 406 university students earned in traditional and
            distance education classes, where the distance learners outperformed the
            traditional learners.
        </p>

        <!-- Section D -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">D.</span>
            On the other hand, nobody said E-training technology would be cheap. E training
            service providers, on the average, charge from $10,000 to $60,000 to develop
            one hour of online instruction. This price varies depending on the complexity
            of the training topic and the media used. HTML pages are a little cheaper to
            develop while streaming-video presentations or flash animations cost more.
            Course content is just the starting place for cost. A complete e-learning
            solution also includes the technology platform (the computers, applications and
            network connections that are used to deliver the courses). This technology
            platform, known as a learning management system (LMS), can either be installed
            onsite or outsourced. Add to that cost the necessary investments in network
            bandwidth to deliver multimedia courses, and you're left holding one heck of a
            bill. For the LMS infrastructure and a dozen or so online courses, costs can
            top $500,000 in the first year. These kinds of costs mean that custom e
            training is, for the time being, an option only for large organizations. For
            those companies that have a large enough staff, the e-training concept pays for
            itself. Aware of this fact, large companies are investing heavily in online
            training. Today, over half of the 400-plus courses that Rockwell Collins offers
            are delivered instantly to its clients in an e-learning format/ a change that
            has reduced its annual training costs by 40%. Many other success stories exist
        </p>

        <!-- Section E -->
        <p class="mb-4">
            <span class="font-bold text-cyan-800">E.</span>
            E-learning isn't expected to replace the classroom entirely. For one thing,
            bandwidth limitations are still an Issue in presenting multimedia over the
            Internet Futhermore, e-training isn't suited to every mode of instruction or
            topic. For instance, it's rather ineffective impasting cultural values or
            building teams. If your company has a unique corporate culture it would be
            difficult to convey that to first time employees through a computer monitor.
            Group training sessions are more ideal for these purposes. In addition, there
            is a perceived loss of research time because of the work involved in developing
            and teaching online classes. Professor Wallin estimated that It required
            between 500 and 1000 person-hours, that is, Wallin-hours, to keep the course at
            the appropriate level of currency and usefulness, (Distance learning
            instructors often need technical skills, no matter how advanced the courseware
            system.) That amounts to between a quarter and half of a person-year. Finally,
            teaching materials require computer literacy and access to equipment Any
            e-Learning system Involves basic equipment and a minimum level of computer
            knowledge in order to perform the tasks required by the system. A student that
            does not possess these skills, or have access to these tools, cannot succeed in
            an e Learning program.
        </p>
        
        <!-- Section F -->
        <p>
            <span class="font-bold text-cyan-800">F.</span>
            While few people debate the obvious advantages of e-learning, systematic
            research is needed to confirm that learners are actually acquiring and using
            -the skills that are being taught online, and that e-learning is the best way
            to achieve the outcomes in a corporate environment. Nowadays, a go-between
            style of the Blended learning, which refers to a mixing of different learning
            environments, is gaining popularity. It combines traditional face-to-face
            classroom methods with more modem computer-mediated activities. According to
            its proponents, the strategy creates a more integrated approach for both
            instructors and learners. Formerly, technology-based materials played a
            supporting role to face-to-face instruction. Through a blended learning
            approach, technology will be more important
        </p>`,
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
  // {
  //   id: "writing-test-1",
  //   moduleId: "writing",
  //   title: "ACADEMIC WRITING TEST 1",
  //   description: "A full-length Academic Writing practice test.",
  //   duration: 60, // minutes (1 hour)
  //   sections: [
  //     {
  //       id: "writing-task-1",
  //       title: "Writing Task 1",
  //       instructions: `
  //         <p>You should spend about 20 minutes on this task.</p>
  //         <p>The tables below give information about sales of Fairtrade-labelled coffee and bananas in 1999 and 2004 in five European countries.</p>
  //         <p>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
  //         <p><em>*Fairtrade: a category of products for which farmers from developing countries have been paid an officially agreed fair price.</em></p>
  //         <p>You should write at least 150 words.</p>
  //         <div class="overflow-x-auto">
  //           <table class="min-w-full bg-white border border-gray-300 rounded-md">
  //             <thead>
  //               <tr>
  //                 <th class="py-2 px-4 border-b">Coffee</th>
  //                 <th class="py-2 px-4 border-b">1999 (millions of Euros)</th>
  //                 <th class="py-2 px-4 border-b">2004 (millions of Euros)</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               <tr>
  //                 <td class="py-2 px-4 border-b">UK</td>
  //                 <td class="py-2 px-4 border-b">1.5</td>
  //                 <td class="py-2 px-4 border-b">20</td>
  //               </tr>
  //               <tr>
  //                 <td class="py-2 px-4 border-b">Switzerland</td>
  //                 <td class="py-2 px-4 border-b">3</td>
  //                 <td class="py-2 px-4 border-b">6</td>
  //               </tr>
  //               <tr>
  //                 <td class="py-2 px-4 border-b">Denmark</td>
  //                 <td class="py-2 px-4 border-b">1.8</td>
  //                 <td class="py-2 px-4 border-b">2</td>
  //               </tr>
  //               <tr>
  //                 <td class="py-2 px-4 border-b">Belgium</td>
  //                 <td class="py-2 px-4 border-b">1</td>
  //                 <td class="py-2 px-4 border-b">1.7</td>
  //               </tr>
  //               <tr>
  //                 <td class="py-2 px-4 border-b">Sweden</td>
  //                 <td class="py-2 px-4 border-b">0.8</td>
  //                 <td class="py-2 px-4 border-b">1</td>
  //               </tr>
  //             </tbody>
  //           </table>
  //         </div>
  //       `,
  //       type: "writing_task",
  //       wordCountMin: 150,
  //       questions: [], // No specific questions, user writes a free-form response
  //     },
  //     {
  //       id: "writing-task-2",
  //       title: "Writing Task 2",
  //       instructions: `
  //         <p>You should spend about 40 minutes on this task.</p>
  //         <p>Write about the following topic:</p>
  //         <p>Some people think that all university students should study whatever they like. Others believe that they should only be allowed to study subjects that will be useful in the future, such as those related to science and technology.</p>
  //         <p>Discuss both these views and give your own opinion.</p>
  //         <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
  //         <p>You should write at least 250 words.</p>
  //       `,
  //       type: "writing_task",
  //       wordCountMin: 250,
  //       questions: [], // No specific questions, user writes a free-form response
  //     },
  //   ],
  // },
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
