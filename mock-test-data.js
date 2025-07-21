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
    id: "listening-test-5",
    moduleId: "listening",
    title: "Listening Test 5",
    description: "Another full IELTS Listening practice test.",
    duration: 40, // 30 mins listening + 10 mins transfer time
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Placeholder audio
    sections: [
      {
        id: "part1",
        title: "PART 1",
        instructions: "Questions 1-10",
        subInstructions:
          "Complete the form below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        questions: [
          // Questions 1-8 are handled in the context HTML for this part
          {
            id: "q9",
            type: "multiple_choice_single",
            questionNumber: 9,
            text: "What is the minimum recommended cover by delivered?",
            options: [
              { key: "A", text: "Premium" },
              { key: "B", text: "Standard" },
              { key: "C", text: "Economy" },
            ],
            answerKey: "B",
          },
          {
            id: "q10",
            type: "multiple_choice_single",
            questionNumber: 10,
            text: "Where does the customer want the goods the agency?",
            options: [
              { key: "A", text: "Port" },
              { key: "B", text: "Home" },
              { key: "C", text: "Business" },
            ],
            answerKey: "B",
          },
        ],
        context: `
          <div class="mb-0 p-6 bg-white border border-gray-200 rounded-xl shadow-lg font-inter text-gray-800">
            <h3 class="font-bold text-xl mb-4 text-gray-900">DENHAM'S SHIPPING AGENCY</h3>
            <p class="font-semibold text-lg mb-3 text-blue-700">Customer quotation form</p>
            <ul class="list-none pl-0 space-y-2">
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-user"></i></span>
                <span>Name: Tim 1. <input type="text" id="answer-q1" name="q1" onchange="handleAnswerChange(event, 'q1', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> </span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-map-pin"></i></span>
                <span>Address to be collected from: 2. <input type="text" id="answer-q2" name="q2" onchange="handleAnswerChange(event, 'q2', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> University</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-city"></i></span>
                <span>Town: Brighton</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-hash"></i></span>
                <span>Postcode: 3. <input type="text" id="answer-q3" name="q3" onchange="handleAnswerChange(event, 'q3', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
            </ul>
            <p class="font-semibold text-lg mt-6 mb-3 text-blue-700">Size of container:</p>
            <!-- UPDATED STRUCTURE FOR SIZE OF CONTAINER -->
            <div class="size-container-section mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-around gap-4 w-full">
                    <div class="flex flex-col items-center flex-shrink-0">
                        <img src="assets/pexels-nguyendesigner-239548.jpg" alt="Container Diagram" class="container-diagram rounded-md shadow-inner" onerror="this.onerror=null; this.src='https://placehold.co/100x75/E0E0E0/333333?text=Container';">
                        <p class="text-sm text-gray-600 mt-2">Diagram</p>
                    </div>
                    <div class="size-details flex-grow">
                        <div class="flex items-center gap-2">
                            <label for="answer-length" class="text-gray-700 w-20 text-right">Length:</label>
                            <span class="text-gray-800 font-semibold">2.5m</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <label for="answer-q4" class="text-gray-700 w-20 text-right">4. Width:</label>
                            <span><input type="text" id="answer-q4" name="q4" onchange="handleAnswerChange(event, 'q4', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
                        </div>
                        <div class="flex items-center gap-2">
                            <label for="answer-q5" class="text-gray-700 w-20 text-right">5. Depth:</label>
                            <span><input type="text" id="answer-q5" name="q5" onchange="handleAnswerChange(event, 'q5', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END UPDATED STRUCTURE -->

            <p class="font-semibold text-lg mt-6 mb-3 text-blue-700">Contents:</p>
            <ul class="list-none pl-0 space-y-2">
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-book"></i></span>
                <span>Books</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-shirt"></i></span>
                <span>6. <input type="text" id="answer-q6" name="q6" onchange="handleAnswerChange(event, 'q6', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-teddy-bear"></i></span>
                <span>7. <input type="text" id="answer-q7" name="q7" onchange="handleAnswerChange(event, 'q7', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
            </ul>
            <p class="font-semibold text-lg mt-6 mb-3 text-blue-700">Total estimated value: £ 8. <input type="text" id="answer-q8" name="q8" onchange="handleAnswerChange(event, 'q8', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></p>
            <p class="font-semibold text-lg mt-6 mb-3 text-blue-700">Questions 9-10</p>
            <p class="text-md text-gray-500 mb-4">Choose the correct letter, A, B or C.</p>
            <div class="space-y-4">
              <div class="question-block">
                <div class="flex items-baseline mb-3">
                  <span class="question-number">9.</span>
                  <p class="question-text flex-grow">What is the minimum recommended cover by delivered?</p>
                </div>
                <div class="ml-8">
                  <label class="multiple-choice-option">
                    <input type="radio" name="q9" value="A" onchange="handleAnswerChange(event, 'q9', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">A. Premium</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q9" value="B" onchange="handleAnswerChange(event, 'q9', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">B. Standard</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q9" value="C" onchange="handleAnswerChange(event, 'q9', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">C. Economy</span>
                  </label>
                </div>
              </div>
              <div class="question-block">
                <div class="flex items-baseline mb-3">
                  <span class="question-number">10.</span>
                  <p class="question-text flex-grow">Where does the customer want the goods the agency?</p>
                </div>
                <div class="ml-8">
                  <label class="multiple-choice-option">
                    <input type="radio" name="q10" value="A" onchange="handleAnswerChange(event, 'q10', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">A. Port</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q10" value="B" onchange="handleAnswerChange(event, 'q10', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">B. Home</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q10" value="C" onchange="handleAnswerChange(event, 'q10', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">C. Business</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        `,
      },
      {
        id: "part2",
        title: "PART 2",
        instructions: "Questions 11-20",
        subInstructions:
          "What does the tour guide tell her tour group about each of the following places on the day’s itinerary? Write the correct letter, A, B or C next to questions 16-20 below. N.B: You may choose any letter more than once.",
        questions: [
          // Questions 11-15 are handled in the context HTML for this part
          {
            id: "q16-20",
            type: "matching_information",
            questionNumbers: "16-20",
            instructions:
              "Which way of reducing staff turnover was used in each of the following hotels?",
            options: [
              { key: "A", text: "They'll definitely go there." },
              { key: "B", text: "They might go there if time allows." },
              { key: "C", text: "They certainly won't go there." },
            ],
            itemsToMatch: [
              { number: 16, text: "The Aquarium", answerKey: "A" },
              { number: 17, text: "Solheim Country Club", answerKey: "C" },
              { number: 18, text: "Milltown Winery", answerKey: "B" },
              { number: 19, text: "The Zoological Gardens", answerKey: "A" },
              { number: 20, text: "The Stout Brewery", answerKey: "C" },
            ],
          },
        ],
        context: `
          <div class="mb-4 p-6 bg-white border border-gray-200 rounded-xl shadow-lg font-inter text-gray-800">
            <h3 class="font-bold text-xl mb-4 text-gray-900">Map of the Tour</h3>
            <div class="flex justify-center mb-4">
              <img src="https://placehold.co/400x250/E0E0E0/333333?text=Map" alt="Tour Map" class="rounded-lg shadow-md">
            </div>
            <p class="font-semibold text-lg mb-3 text-blue-700">Questions 11-15</p>
            <p class="text-md text-gray-500 mb-4">Label the plan below. Write NO MORE THAN THREE WORDS for each answer.</p>
            <ul class="list-none pl-0 space-y-2">
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-map-pin"></i></span>
                <span>11. <input type="text" id="answer-q11" name="q11" onchange="handleAnswerChange(event, 'q11', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-map-pin"></i></span>
                <span>12. <input type="text" id="answer-q12" name="q12" onchange="handleAnswerChange(event, 'q12', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-map-pin"></i></span>
                <span>13. <input type="text" id="answer-q13" name="q13" onchange="handleAnswerChange(event, 'q13', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-map-pin"></i></span>
                <span>14. <input type="text" id="answer-q14" name="q14" onchange="handleAnswerChange(event, 'q14', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-map-pin"></i></span>
                <span>15. <input type="text" id="answer-q15" name="q15" onchange="handleAnswerChange(event, 'q15', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
            </ul>
          </div>
        `,
      },
      {
        id: "part3",
        title: "PART 3",
        instructions: "Questions 21-30",
        subInstructions:
          "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        questions: [
          {
            id: "q21",
            type: "note_completion",
            questionNumber: 21,
            text:
              "Gyroscopes are used in laser devices and are found in many consumer 21. ___________.",
            blankCount: 1,
            answerKey: "products",
          },
          {
            id: "q22",
            type: "note_completion",
            questionNumber: 22,
            text:
              "The purpose of the project is to design a functional 22. ___________ and beneficial consumer product.",
            blankCount: 1,
            answerKey: "new",
          },
          {
            id: "q23",
            type: "note_completion",
            questionNumber: 23,
            text:
              "The gyroscopic exercise ball can be set in motion by movements of the 23. ___________ and wrist together in synch.",
            blankCount: 1,
            answerKey: "hand",
          },
          {
            id: "q24",
            type: "note_completion",
            questionNumber: 24,
            text:
              "The gyroscopic ball could help people in 24. ___________ who have lower-arm injuries.",
            blankCount: 1,
            answerKey: "rehabilitation",
          },
          {
            id: "q25",
            type: "note_completion",
            questionNumber: 25,
            text:
              "The product could also be aimed at 25. ___________ for whom lower-arm strength is very important.",
            blankCount: 1,
            answerKey: "athletes",
          },
          {
            id: "q26",
            type: "note_completion",
            questionNumber: 26,
            text: "Estimated Cost: £ 26. ___________",
            blankCount: 1,
            answerKey: "3000",
          },
          {
            id: "q27",
            type: "note_completion",
            questionNumber: 27,
            text: "Number of Weeks: 27. ___________",
            blankCount: 1,
            answerKey: "4",
          },
          {
            id: "q28",
            type: "note_completion",
            questionNumber: 28,
            text: "Number of test subjects: 28. ___________",
            blankCount: 1,
            answerKey: "5",
          },
          {
            id: "q29",
            type: "note_completion",
            questionNumber: 29,
            text:
              "Breakdown of test subjects: 5 professional athletes, 29. ___________",
            blankCount: 1,
            answerKey: "20",
          },
          {
            id: "q30",
            type: "note_completion",
            questionNumber: 30,
            text: "30. ___________",
            blankCount: 1,
            answerKey: "25",
          },
        ],
        context: `
          <div class="mb-4 p-6 bg-white border border-gray-200 rounded-xl shadow-lg font-inter text-gray-800">
            <h3 class="font-bold text-xl mb-4 text-gray-900">Questions 21-25</h3>
            <p class="text-md text-gray-500 mb-4">Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.</p>
            <ul class="list-none pl-0 space-y-2">
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>Gyroscopes are used in laser devices and are found in many consumer 21. <input type="text" id="answer-q21" name="q21" onchange="handleAnswerChange(event, 'q21', 'note_completion')" class="note-completion-inline-input" placeholder="Type here">.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>The purpose of the project is to design a functional 22. <input type="text" id="answer-q22" name="q22" onchange="handleAnswerChange(event, 'q22', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> and beneficial consumer product.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>The gyroscopic exercise ball can be set in motion by movements of the 23. <input type="text" id="answer-q23" name="q23" onchange="handleAnswerChange(event, 'q23', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> and wrist together in synch.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>The gyroscopic ball could help people in 24. <input type="text" id="answer-q24" name="q24" onchange="handleAnswerChange(event, 'q24', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> who have lower-arm injuries.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>The product could also be aimed at 25. <input type="text" id="answer-q25" name="q25" onchange="handleAnswerChange(event, 'q25', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> for whom lower-arm strength is very important.</span>
              </li>
            </ul>
            <h3 class="font-bold text-xl mt-6 mb-4 text-gray-900">Questions 26-30</h3>
            <p class="text-md text-gray-500 mb-4">Complete the table below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.</p>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr class="bg-gray-100 border-b">
                    <th class="py-3 px-4 text-left text-sm font-semibold text-gray-700">Prototype Design</th>
                    <th class="py-3 px-4 text-left text-sm font-semibold text-gray-700">Testing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-3 px-4">Estimated Cost</td>
                    <td class="py-3 px-4">£ 26. <input type="text" id="answer-q26" name="q26" onchange="handleAnswerChange(event, 'q26', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"></td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-3 px-4">Number of Weeks</td>
                    <td class="py-3 px-4">27. <input type="text" id="answer-q27" name="q27" onchange="handleAnswerChange(event, 'q27', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"></td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-3 px-4">Number of test subjects</td>
                    <td class="py-3 px-4">28. <input type="text" id="answer-q28" name="q28" onchange="handleAnswerChange(event, 'q28', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"></td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-3 px-4">Breakdown of test subjects</td>
                    <td class="py-3 px-4">5 professional athletes</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-3 px-4"></td>
                    <td class="py-3 px-4">29. <input type="text" id="answer-q29" name="q29" onchange="handleAnswerChange(event, 'q29', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"></td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4"></td>
                    <td class="py-3 px-4">30. <input type="text" id="answer-q30" name="q30" onchange="handleAnswerChange(event, 'q30', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
      },
      {
        id: "part4",
        title: "PART 4",
        instructions: "Questions 31-40",
        subInstructions: "Choose the correct letter, A, B or C.",
        questions: [
          {
            id: "q31",
            type: "multiple_choice_single",
            questionNumber: 31,
            text: "Speakers have to know",
            options: [
              { key: "A", text: "Their material." },
              { key: "B", text: "Their audience." },
              { key: "C", text: "Their limitations." },
            ],
            answerKey: "A",
          },
          {
            id: "q32",
            type: "multiple_choice_single",
            questionNumber: 32,
            text: "Experienced speakers",
            options: [
              { key: "A", text: "always try to wing it." },
              { key: "B", text: "Never arrive unprepared." },
              { key: "C", text: "Give the best presentations." },
            ],
            answerKey: "B",
          },
          {
            id: "q33",
            type: "multiple_choice_single",
            questionNumber: 33,
            text: "You should always rehearse",
            options: [
              { key: "A", text: "With friends who can advise you." },
              { key: "B", text: "With all the equipment you plan on using." },
              { key: "C", text: "More than once." },
            ],
            answerKey: "C",
          },
          {
            id: "q34",
            type: "multiple_choice_single",
            questionNumber: 34,
            text: "It is a good idea to",
            options: [
              { key: "A", text: "Be discreet with your audience." },
              { key: "B", text: "Meet your fans." },
              { key: "C", text: "Meet and welcome your audience." },
            ],
            answerKey: "C",
          },
          {
            id: "q35",
            type: "multiple_choice_single",
            questionNumber: 35,
            text: "Taking a few deep breaths before you begin",
            options: [
              { key: "A", text: "Will stop you having a panic attack." },
              { key: "B", text: "Will guarantee that you feel more relaxed." },
              {
                key: "C",
                text: "Will help turn your tension into enthusiasm.",
              },
            ],
            answerKey: "C",
          },
          {
            id: "q36",
            type: "note_completion",
            questionNumber: 36,
            text:
              "Try to 36. ___________ yourself making a speech and imagine your voice loud and confident.",
            blankCount: 1,
            answerKey: "visualize",
          },
          {
            id: "q37",
            type: "note_completion",
            questionNumber: 37,
            text: "Even if you make mistakes avoid making 37. ___________",
            blankCount: 1,
            answerKey: "excuses",
          },
          {
            id: "q38",
            type: "note_completion",
            questionNumber: 38,
            text:
              "Pay attention to your 38. ___________ - your words carry less meaning than your delivery.",
            blankCount: 1,
            answerKey: "body language",
          },
          {
            id: "q39",
            type: "note_completion",
            questionNumber: 39,
            text:
              "People usually remember less than 39. ___________ of what they hear.",
            blankCount: 1,
            answerKey: "half",
          },
          {
            id: "q40",
            type: "note_completion",
            questionNumber: 40,
            text:
              "Be 40. ___________ about yourself; you don't become a perfect speaker overnight.",
            blankCount: 1,
            answerKey: "patient",
          },
        ],
        context: `
          <div class="mb-4 p-6 bg-white border border-gray-200 rounded-xl shadow-lg font-inter text-gray-800">
            <h3 class="font-bold text-xl mb-4 text-gray-900">Useful Tips for a Successful Presentation</h3>
            <p class="font-semibold text-lg mb-3 text-blue-700">Questions 31-35</p>
            <p class="text-md text-gray-500 mb-4">Choose the correct letter, A, B or C.</p>
            <div class="space-y-4">
              <div class="question-block">
                <div class="flex items-baseline mb-3">
                  <span class="question-number">31.</span>
                  <p class="question-text flex-grow">Speakers have to know</p>
                </div>
                <div class="ml-8">
                  <label class="multiple-choice-option">
                    <input type="radio" name="q31" value="A" onchange="handleAnswerChange(event, 'q31', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">A. Their material.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q31" value="B" onchange="handleAnswerChange(event, 'q31', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">B. Their audience.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q31" value="C" onchange="handleAnswerChange(event, 'q31', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">C. Their limitations.</span>
                  </label>
                </div>
              </div>
              <div class="question-block">
                <div class="flex items-baseline mb-3">
                  <span class="question-number">32.</span>
                  <p class="question-text flex-grow">Experienced speakers</p>
                </div>
                <div class="ml-8">
                  <label class="multiple-choice-option">
                    <input type="radio" name="q32" value="A" onchange="handleAnswerChange(event, 'q32', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">A. always try to wing it.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q32" value="B" onchange="handleAnswerChange(event, 'q32', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">B. Never arrive unprepared.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q32" value="C" onchange="handleAnswerChange(event, 'q32', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">C. Give the best presentations.</span>
                  </label>
                </div>
              </div>
              <div class="question-block">
                <div class="flex items-baseline mb-3">
                  <span class="question-number">33.</span>
                  <p class="question-text flex-grow">You should always rehearse</p>
                </div>
                <div class="ml-8">
                  <label class="multiple-choice-option">
                    <input type="radio" name="q33" value="A" onchange="handleAnswerChange(event, 'q33', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">A. With friends who can advise you.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q33" value="B" onchange="handleAnswerChange(event, 'q33', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">B. With all the equipment you plan on using.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q33" value="C" onchange="handleAnswerChange(event, 'q33', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">C. More than once.</span>
                  </label>
                </div>
              </div>
              <div class="question-block">
                <div class="flex items-baseline mb-3">
                  <span class="question-number">34.</span>
                  <p class="question-text flex-grow">It is a good idea to</p>
                </div>
                <div class="ml-8">
                  <label class="multiple-choice-option">
                    <input type="radio" name="q34" value="A" onchange="handleAnswerChange(event, 'q34', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">A. Be discreet with your audience.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q34" value="B" onchange="handleAnswerChange(event, 'q34', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">B. Meet your fans.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q34" value="C" onchange="handleAnswerChange(event, 'q34', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">C. Meet and welcome your audience.</span>
                  </label>
                </div>
              </div>
              <div class="question-block">
                <div class="flex items-baseline mb-3">
                  <span class="question-number">35.</span>
                  <p class="question-text flex-grow">Taking a few deep breaths before you begin</p>
                </div>
                <div class="ml-8">
                  <label class="multiple-choice-option">
                    <input type="radio" name="q35" value="A" onchange="handleAnswerChange(event, 'q35', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">A. Will stop you having a panic attack.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q35" value="B" onchange="handleAnswerChange(event, 'q35', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">B. Will guarantee that you feel more relaxed.</span>
                  </label>
                  <label class="multiple-choice-option">
                    <input type="radio" name="q35" value="C" onchange="handleAnswerChange(event, 'q35', 'multiple_choice_single')" class="form-radio h-5 w-5 text-blue-600" />
                    <span class="ml-2">C. Will help turn your tension into enthusiasm.</span>
                  </label>
                </div>
              </div>
            </div>
            <p class="font-semibold text-lg mt-6 mb-3 text-blue-700">Questions 36-40</p>
            <p class="text-md text-gray-500 mb-4">Complete the sentences below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.</p>
            <ul class="list-none pl-0 space-y-2">
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>Try to 36. <input type="text" id="answer-q36" name="q36" onchange="handleAnswerChange(event, 'q36', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> yourself making a speech and imagine your voice loud and confident.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>Even if you make mistakes avoid making 37. <input type="text" id="answer-q37" name="q37" onchange="handleAnswerChange(event, 'q37', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"></span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>Pay attention to your 38. <input type="text" id="answer-q38" name="q38" onchange="handleAnswerChange(event, 'q38', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> - your words carry less meaning than your delivery.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>People usually remember less than 39. <input type="text" id="answer-q39" name="q39" onchange="handleAnswerChange(event, 'q39', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> of what they hear.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500"><i class="ph-bold ph-dot-outline"></i></span>
                <span>Be 40. <input type="text" id="answer-q40" name="q40" onchange="handleAnswerChange(event, 'q40', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> about yourself; you don't become a perfect speaker overnight.</span>
              </li>
            </ul>
          </div>
        `,
      },
    ],
  },
  {
    id: "reading-test-1",
    moduleId: "reading",
    title: "Reading Test 1",
    description: "A full IELTS Reading practice test.",
    duration: 60, // Reading tests are typically 60 minutes
    audioUrl: null, // No audio for reading tests
    sections: [
      {
        id: "part1",
        title: "PART 1",
        instructions: "Questions 1-13",
        subInstructions:
          "You should spend about 20 minutes on Questions 1 -13, which are based on Reading Passage 1 below.",
        questions: [
          {
            id: "q1",
            type: "note_completion",
            questionNumber: 1,
            text: "Categorizations of fish by swimming speed (Paragraph: ____)",
            blankCount: 1,
            answerKey: "G", // Actual answer
          },
          {
            id: "q2",
            type: "note_completion",
            questionNumber: 2,
            text:
              "An example of fish capable of maintaining fast swimming for a long time (Paragraph: ____)",
            blankCount: 1,
            answerKey: "G", // Actual answer
          },
          {
            id: "q3",
            type: "note_completion",
            questionNumber: 3,
            text: "How fish control stability (Paragraph: ____)",
            blankCount: 1,
            answerKey: "E", // Actual answer
          },
          {
            id: "q4",
            type: "note_completion",
            questionNumber: 4,
            text: "Frequency of the muscle movement of fish (Paragraph: ____)",
            blankCount: 1,
            answerKey: "C", // Actual answer
          },
          {
            id: "q5",
            type: "note_completion",
            questionNumber: 5,
            text: "A mechanical model of fish skeleton (Paragraph: ____)",
            blankCount: 1,
            answerKey: "B", // Actual answer
          },
          {
            id: "q6",
            type: "note_completion",
            questionNumber: 6,
            text: "Energy storage devices in a fish (Paragraph: ____)",
            blankCount: 1,
            answerKey: "D", // Actual answer
          },
          {
            id: "q7",
            type: "note_completion",
            questionNumber: 7,
            text:
              "7. <input type='text' id='answer-q7' name='q7' onchange='handleAnswerChange(event, \"q7\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "tail fin",
          },
          {
            id: "q8",
            type: "note_completion",
            questionNumber: 8,
            text:
              "8. <input type='text' id='answer-q8' name='q8' onchange='handleAnswerChange(event, \"q8\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "median fins",
          },
          {
            id: "q9",
            type: "note_completion",
            questionNumber: 9,
            text:
              "9. <input type='text' id='answer-q9' name='q9' onchange='handleAnswerChange(event, \"q9\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "paired fins",
          },
          {
            id: "q10",
            type: "note_completion",
            questionNumber: 10,
            text:
              "10. <input type='text' id='answer-q10' name='q10' onchange='handleAnswerChange(event, \"q10\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "pectoral fins",
          },
          {
            id: "q11",
            type: "note_completion",
            questionNumber: 11,
            text:
              "The majority of a fish’s body comprises the 11. <input type='text' id='answer-q11' name='q11' onchange='handleAnswerChange(event, \"q11\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "white muscle",
          },
          {
            id: "q12",
            type: "note_completion",
            questionNumber: 12,
            text:
              "For most of its routine movements, the fish uses a lot of its 12. <input type='text' id='answer-q12' name='q12' onchange='handleAnswerChange(event, \"q12\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'> saved in body",
            blankCount: 1,
            answerKey: "fat and glycogen",
          },
          {
            id: "q13",
            type: "note_completion",
            questionNumber: 13,
            text:
              "white muscle is mostly used for short-term, fast swimming, such as escaping from 13. <input type='text' id='answer-q13' name='q13' onchange='handleAnswerChange(event, \"q13\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "a predator",
          },
        ],
        context: `
          <div class="mb-4 p-6 bg-white border border-gray-200 rounded-xl shadow-lg font-inter text-gray-800">
            <h3 class="font-bold text-xl mb-4 text-gray-900">READING PASSAGE 1: Undersea Movement</h3>
            <p class="text-md text-gray-500 mb-4">A. The underwater world holds many challenges. The most basic of these is movement. The density of water
makes it difficult for animals to move. Forward movement is a complex interaction of underwater forces.
Additionally, water itself has movement. Strong currents carry incredible power that can easily sweep creatures
away. The challenges to aquatic movement result in a variety of swimming methods, used by a wide range of
animals. The result is a dazzling underwater ballet.</p>
            <p class="text-md text-gray-500 mb-4">B. Fish rely on their skeleton, fins, and muscles to move. The primary function of the skeleton is to aid movement
of other parts. Their skull acts as a fulcrum and their vertebrae act as levers. The vertebral column consists of a
series of vertebrae held together by ligaments, but not so tightly as to prevent slight sideways movement between
each pair of vertebrae. The whole spine is, therefore, flexible. The skull is the only truly fixed part of a fish. It
does not move in and off itself but acts as a point of stability for other bones. These other bones act as levers that
cause movement of the fish’s body.</p>
            <p class="text-md text-gray-500 mb-4">C. While the bones provide the movement, the muscles supply the power. A typical fish has hundreds of muscles
running in all directions around its body. This is why a fish can turn and twist and change directions quickly. The
muscles on each side of the spine contract in a series from head to tail and down each side alternately, causing a
wave-like movement to pass down the body. Such a movement may be very pronounced in fish such as eels, but
hardly perceptible in others, e.g. mackerel. The frequency of the waves varies from about 50/min in the dogfish
to 170/min in the mackerel. The sideways and backward thrust of the head and body against the water results in
the resistance of the water pushing the fish sideways and forwards in a direction opposed to the thrust. When the
corresponding set of muscles on the other side contracts, the fish experiences a similar force from the water on
that side. The two sideways forces are equal and opposite unless the fish is making a turn, so they cancel out,
leaving the sum of the two forward forces</p>
            <p class="text-md text-gray-500 mb-4">D. The muscles involved in swimming are of two main types. The bulk of a fish’s body is composed of the so-
called white muscle, while the much smaller areas at the roots of the fins and in a strip along the centre of each

flank comprise red muscle. The red muscle receives a good supply of blood and contains ampler quantities of fat
and glycogen, the storage form of glucose, which is used for most day-to-day swimming movements. In contrast,
the white muscle has a poor blood supply and few energy stores, and it is used largely for short-term, fast
swimming. It might seem odd that the body of an animal which adapts adapted so efficiently to its environment
should be composed almost entirely of a type of muscle it rarely uses. However, this huge auxiliary power pack
carried by a fish is of crucial significance if the life of the fish is threatened-by a predator, for instance-because it
enables the fish to swim rapidly away from danger.</p>
            <p class="text-md text-gray-500 mb-4">E. The fins are the most distinctive features of a fish, composed of bony spines protruding from the body with
skin covering them and joining them together, either in a webbed fashion, as seen in most bony fish, or more
similar to a flipper, as seen in sharks. These usually serve as a means for the fish to swim. But it must be
emphasized that the swimming movements are produced by the whole of the muscular body, and in only a few
fish do the fins contribute any propulsive force! Their main function is to control the stability and direction of the
fish: as water passes over its body, a fish uses its fins to thrust in the direction it wishes to go.</p>
            <p class="text-md text-gray-500 mb-4">F. Fins located in different places on a fish serve different purposes, such as moving forward, turning, and keeping
an upright position. The tail fin, in its final lash may contribute as much as 40 per cent of the forward thrust. The
median fins, that is, the dorsal, anal and ventral fins, control the rolling and yawing movements of the fish by
increasing the vertical surface area presented to the water. The paired fins, pectoral and pelvic act as hydroplanes
and control the pitch of the ash, causing it to swim downwards or upwards according to the angle to the water at
which they are held by their muscles. The pectoral fins lie in front of the centre of gravity and, being readily
mobile, are chiefly responsible for sending the ash up or down. The paired ins are also the means by which the
fish slows down and stops.</p>
            <p class="text-md text-gray-500 mb-4">G. The swimming speed of fish is not so fast as one would expect from watching their rapid movements in aquaria
or ponds. Tuna seems to be the fastest at 44 mph, trout are recorded as doing 23 mph, pike 20 mph for short bursts
and roach about 10 mph, while the majority of small fish probably do not exceed 2 or 3 mph. Many people have
attempted to make accurate measurements of the speed at which various fish swim, either by timing them over
known distances in their natural environment or by determining their performance in man-made swimming
channels. From these studies, we can broadly categorise fish into four groups: “sneakers”, such as eels that are
only capable of slow speeds but possess some staying power; “stayers”, that can swim quite fast over long periods;
“sprinters” that can generate fast bursts of speed (e.g. pike); and “crawlers” that are sluggish swimmers, although
they can accelerate slightly (bream, for example).</p>
            <p class="text-md text-gray-500 mb-4">H. One type of sailfish is considered to be the fastest species of fish over short distances, achieving 68 mph over
a three-second period, and anglers have recorded speeds in excess of 40 mph over longer periods for several
species of tuna. One is likely to consider a fish’s swimming capabilities in relation to its size. However, it is
generally true that a small fish is a more able swimmer than a much larger one. On the other hand in terms of
speed in miles per hour, a big fish will, all other things being equal, be able to swim faster than a smaller fish.</p>
            <p class="font-semibold text-lg mb-3 text-blue-700">Questions 7-10</p>
            <p class="text-md text-gray-500 mb-4">The diagram below gives information about fish fins and their purposes. Complete the diagram with NO MORE THAN THREE WORDS from the passage for each blank.</p>
            <div class="flex justify-center items-center flex-col my-6">
                <img src="https://placehold.co/400x300/E0E0E0/333333?text=Fish+Fin+Diagram" alt="Fish Fin Diagram" class="rounded-lg shadow-md mb-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                    <div class="flex items-center gap-2">
                        <span class="font-semibold">7. Tail Fin:</span> <input type="text" id="answer-q7" name="q7" onchange="handleAnswerChange(event, 'q7', 'note_completion')" class="note-completion-inline-input flex-grow" placeholder="Type here">
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-semibold">8. Median Fins:</span> <input type="text" id="answer-q8" name="q8" onchange="handleAnswerChange(event, 'q8', 'note_completion')" class="note-completion-inline-input flex-grow" placeholder="Type here">
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-semibold">9. Paired Fins:</span> <input type="text" id="answer-q9" name="q9" onchange="handleAnswerChange(event, 'q9', 'note_completion')" class="note-completion-inline-input flex-grow" placeholder="Type here">
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-semibold">10. Pectoral Fins:</span> <input type="text" id="answer-q10" name="q10" onchange="handleAnswerChange(event, 'q10', 'note_completion')" class="note-completion-inline-input flex-grow" placeholder="Type here">
                    </div>
                </div>
            </div>
            <p class="font-semibold text-lg mt-6 mb-3 text-blue-700">Questions 11-13</p>
            <p class="text-md text-gray-500 mb-4">Complete the summary below using NO MORE THAN THREE WORDS from the passage for each blank.</p>
            <p class="text-gray-800 leading-relaxed">
                Two types of muscles are involved in fish swimming. The majority of a fish’s body comprises the 11. <input type="text" id="answer-q11" name="q11" onchange="handleAnswerChange(event, 'q11', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> and the red muscle is found only at the roots of the fins and in a strip along the centre of each flank. For most of its routine movements, the fish uses a lot of its 12. <input type="text" id="answer-q12" name="q12" onchange="handleAnswerChange(event, 'q12', 'note_completion')" class="note-completion-inline-input" placeholder="Type here"> saved in body, and white muscle is mostly used for short-term, fast swimming, such as escaping from 13. <input type="text" id="answer-q13" name="q13" onchange="handleAnswerChange(event, 'q13', 'note_completion')" class="note-completion-inline-input" placeholder="Type here">.
            </p>
          </div>
        `,
      },
      {
        id: "part2",
        title: "PART 2",
        instructions: "Questions 14-27",
        subInstructions:
          "You should spend about 20 minutes on Questions 14-26, which are based on Reading Passage 2 below.",
        questions: [
          {
            id: "q14",
            type: "note_completion",
            questionNumber: 14,
            text:
              "Symptoms of a 14. <input type='text' id='answer-q14' name='q14' onchange='handleAnswerChange(event, \"q14\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'> and tiredness",
            blankCount: 1,
            answerKey: "bad cough",
          },
          {
            id: "q15",
            type: "note_completion",
            questionNumber: 15,
            text:
              "Doctor’s measurement by taking 15. <input type='text' id='answer-q15' name='q15' onchange='handleAnswerChange(event, \"q15\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'> and temperature",
            blankCount: 1,
            answerKey: "blood pressure",
          },
          {
            id: "q16",
            type: "note_completion",
            questionNumber: 16,
            text:
              "Common judgment from around you (e.g., 'you do look ill' or 'that’s a bad cough')",
            blankCount: 0, // No blank for this one, just a placeholder for the row
            answerKey: "",
          },
          {
            id: "q17",
            type: "note_completion",
            questionNumber: 17,
            text:
              "Medical knowledge from the general 17. <input type='text' id='answer-q17' name='q17' onchange='handleAnswerChange(event, \"q17\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "practitioner",
          },
          {
            id: "q18",
            type: "note_completion",
            questionNumber: 18,
            text:
              "e.g. doctor’s medical 18. <input type='text' id='answer-q18' name='q18' onchange='handleAnswerChange(event, \"q18\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "training and experience",
          },
          {
            id: "q19",
            type: "note_completion",
            questionNumber: 19,
            text:
              "Examine the medical hypothesis with the previous drill and 19. <input type='text' id='answer-q19' name='q19' onchange='handleAnswerChange(event, \"q19\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>.",
            blankCount: 1,
            answerKey: "interpret it",
          },
          {
            id: "q20",
            type: "note_completion",
            questionNumber: 20,
            text:
              "the contrast between the nature of personal judgment and the nature of doctor’s diagnosis (Paragraph: ____)",
            blankCount: 1,
            answerKey: "D",
          },
          {
            id: "q21",
            type: "note_completion",
            questionNumber: 21,
            text: "a reference of culture about pressure (Paragraph: ____)",
            blankCount: 1,
            answerKey: "F",
          },
          {
            id: "q22",
            type: "note_completion",
            questionNumber: 22,
            text:
              "sick leave will not be permitted without the professional diagnosis (Paragraph: ____)",
            blankCount: 1,
            answerKey: "H",
          },
          {
            id: "q23",
            type: "note_completion",
            questionNumber: 23,
            text:
              "how doctors’ opinions are regarded in society (Paragraph: ____)",
            blankCount: 1,
            answerKey: "H",
          },
          {
            id: "q24",
            type: "note_completion",
            questionNumber: 24,
            text:
              "the illness of patients can become part of new knowledge (Paragraph: ____)",
            blankCount: 1,
            answerKey: "I",
          },
          {
            id: "q25",
            type: "note_completion",
            questionNumber: 25,
            text:
              "a description of knowledge drawn from non-specialized sources other than personal knowledge (Paragraph: ____)",
            blankCount: 1,
            answerKey: "G",
          },
          {
            id: "q26",
            type: "note_completion",
            questionNumber: 26,
            text:
              "an example of collective judgment from personal experience and professional doctor (Paragraph: ____)",
            blankCount: 1,
            answerKey: "D",
          },
          {
            id: "q27",
            type: "note_completion",
            questionNumber: 27,
            text:
              "a reference that some people do not realize they are ill (Paragraph: ____)",
            blankCount: 1,
            answerKey: "B",
          },
        ],
        context: `
          <div class="mb-4 p-6 bg-white border border-gray-200 rounded-xl shadow-lg font-inter text-gray-800">
            <h3 class="font-bold text-xl mb-4 text-gray-900">READING PASSAGE 2: Knowledge in medicine</h3>
            <p class="text-md text-gray-500 mb-4">A. What counts as knowledge? What do we mean when we say that we know something? What is the status of
different kinds of knowledge? In order to explore these questions, we are going to focus on one particular area of
knowledge – medicine.</p>
            <p class="text-md text-gray-500 mb-4">B. How do you know when you are ill? This may seem to be an absurd question. You know you are ill because
you feel ill; your body tells you that you are ill. You may know that you feel pain or discomfort but knowing you
are ill is a bit more complex. At times, people experience the symptoms of illness, but in fact, they are simply
tired or over-worked or they may just have a hangover. At other times, people may be suffering from a disease
and fail to be aware of the illness until it has reached a late stage in its development. So how do we know we are
ill, and what counts as knowledge?</p>
            <p class="text-md text-gray-500 mb-4">C. Think about this example. You feel unwell. You have a bad cough and always seem to be tired. Perhaps it
could be stress at work, or maybe you should give up smoking. You feel worse. You visit the doctor who listens
to your chest and heart, takes your temperature and blood pressure, and then finally prescribes antibiotics for your
cough.</p>
            <p class="text-md text-gray-500 mb-4">D. Things do not improve but you struggle on thinking you should pull yourself together, perhaps things will ease
off at work soon. A return visit to your doctor shocks you. This time the doctor, drawing on years of training and
experience, diagnoses pneumonia. This means that you will need bed rest and a considerable time off work. The
scenario is transformed. Although you still have the same symptoms, you no longer think that these are caused
by pressure at work. You know have proof that you are ill. This is the result of the combination of your own
subjective experience and the diagnosis of someone who has the status of a medical expert. You have a medically
authenticated diagnosis and it appears that you are seriously ill; you know you are ill and have the evidence upon
which to base this knowledge.</p>
            <p class="text-md text-gray-500 mb-4">E. This scenario shows many different sources of knowledge. For example, you decide to consult the doctor in
the first place because you feel unwell – this is personal knowledge about your own body. However, the doctor’s
expert diagnosis is based on experience and training, with sources of knowledge as diverse as other experts,
laboratory reports, medical textbooks and years of experience.</p>
            <p class="text-md text-gray-500 mb-4">F. One source of knowledge is the experience of our own bodies; the personal knowledge we have of changes
that might be significant, as well as the subjective experiences are mediated by other forms of knowledge such as
the words we have available to describe our experience, and the common sense of our families and friends as well
as that drawn from popular culture. Over the past decade, for example, Western culture has seen a significant
emphasis on stress-related illness in the media. Reference to being ‘stressed out’ has become a common response
in daily exchanges in the workplace and has become part of popular common-sense knowledge. It is thus not
surprising that we might seek such an explanation of physical symptoms of discomfort.</p>
            <p class="text-md text-gray-500 mb-4">G. We might also rely on the observations of others who know us. Comments from friends and family such as
‘you do look ill’ or ‘that’s a bad cough’ might be another source of knowledge. Complementary health practices,
such as holistic medicine, produce their own sets of knowledge upon which we might also draw in deciding the
nature and degree of our ill health and about possible treatments.</p>
            <p class="text-md text-gray-500 mb-4">H. Perhaps the most influential and authoritative source of knowledge is the medical knowledge provided by the
general practitioner. We expect the doctor to have access to expert knowledge. This is socially sanctioned. It
would not be acceptable to notify our employer that we simply felt too unwell to turn up for work or that our faith
healer, astrologer, therapist or even our priest thought it was not a good idea. We need an expert medical diagnosis
in order to obtain the necessary certificate if we need to be off work for more than the statutory self-certification
period. The knowledge of the medical sciences is privileged in this respect in contemporary Western culture.
Medical practitioners are also seen as having the required expert knowledge that permits them legally to prescribe
drugs and treatment to which patients would not otherwise have access. However, there is a range of different
knowledge upon which we draw when making decisions about our own state of health.</p>
            <p class="text-md text-gray-500 mb-4">I. However, there is more than existing knowledge in this little story; new knowledge is constructed within it.
Given the doctor’s medical training and background, she may hypothesize ‘is this now pneumonia?’ and then
proceed to look for evidence about it. She will use observations and instruments to assess the evidence and –
critically – interpret it in light of her training and experience. This results in new knowledge and new experience
both for you and for the doctor. This will then be added to the doctor’s medical knowledge and may help in the
future diagnosis of pneumonia.</p>
            <p class="font-semibold text-lg mb-3 text-blue-700">Questions 14-19</p>
            <p class="text-md text-gray-500 mb-4">Complete the table. Choose NO MORE THAN THREE WORDS from the passage for each blank.</p>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr class="bg-gray-100 border-b">
                    <th class="py-3 px-4 text-left text-sm font-semibold text-gray-700">Source of knowledge</th>
                    <th class="py-3 px-4 text-left text-sm font-semibold text-gray-700">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-3 px-4">Personal experience</td>
                    <td class="py-3 px-4">Symptoms of a 14. <input type="text" id="answer-q14" name="q14" onchange="handleAnswerChange(event, 'q14', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"> and tiredness</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-3 px-4">Doctor’s measurement</td>
                    <td class="py-3 px-4">by taking 15. <input type="text" id="answer-q15" name="q15" onchange="handleAnswerChange(event, 'q15', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"> and temperature</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-3 px-4">Common judgment from around you</td>
                    <td class="py-3 px-4">e.g. 'you do look ill' or 'that’s a bad cough'</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-3 px-4">Scientific evidence</td>
                    <td class="py-3 px-4">Medical knowledge from the general 17. <input type="text" id="answer-q17" name="q17" onchange="handleAnswerChange(event, 'q17', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"></td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-3 px-4"></td>
                    <td class="py-3 px-4">e.g. doctor’s medical 18. <input type="text" id="answer-q18" name="q18" onchange="handleAnswerChange(event, 'q18', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here"></td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4"></td>
                    <td class="py-3 px-4">Examine the medical hypothesis with the previous drill and 19. <input type="text" id="answer-q19" name="q19" onchange="handleAnswerChange(event, 'q19', 'note_completion')" class="note-completion-inline-input w-24" placeholder="Type here">.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
      },
      {
        id: "part3",
        title: "PART 3",
        instructions: "Questions 28-40",
        subInstructions:
          "You should spend about 20 minutes on Questions 28 - 40, which are based on Reading Passage 3 below.",
        questions: [
          {
            id: "q28",
            type: "note_completion",
            questionNumber: 28,
            text:
              "A comparison of the ways two materials are used to replace silk-producing glands (Paragraph: ____)",
            blankCount: 1,
            answerKey: "E",
          },
          {
            id: "q29",
            type: "note_completion",
            questionNumber: 29,
            text:
              "Predictions regarding the availability of the synthetic silk (Paragraph: ____)",
            blankCount: 1,
            answerKey: "H",
          },
          {
            id: "q30",
            type: "note_completion",
            questionNumber: 30,
            text:
              "Ongoing research into other synthetic materials (Paragraph: ____)",
            blankCount: 1,
            answerKey: "I",
          },
          {
            id: "q31",
            type: "note_completion",
            questionNumber: 31,
            text:
              "The research into the part of the spider that manufactures silk (Paragraph: ____)",
            blankCount: 1,
            answerKey: "D",
          },
          {
            id: "q32",
            type: "note_completion",
            questionNumber: 32,
            text:
              "The possible application of the silk in civil engineering (Paragraph: ____)",
            blankCount: 1,
            answerKey: "G",
          },
          {
            id: "q33",
            type: "note_completion",
            questionNumber: 33,
            text:
              "Synthetic gene grown in 33. <input type='text' id='answer-q33' name='q33' onchange='handleAnswerChange(event, \"q33\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "yeast",
          },
          {
            id: "q34",
            type: "note_completion",
            questionNumber: 34,
            text:
              "or 34. <input type='text' id='answer-q34' name='q34' onchange='handleAnswerChange(event, \"q34\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "bacteria",
          },
          {
            id: "q35",
            type: "note_completion",
            questionNumber: 35,
            text:
              "globules of 35. <input type='text' id='answer-q35' name='q35' onchange='handleAnswerChange(event, \"q35\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "protein",
          },
          {
            id: "q36",
            type: "note_completion",
            questionNumber: 36,
            text:
              "dissolved in 36. <input type='text' id='answer-q36' name='q36' onchange='handleAnswerChange(event, \"q36\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "chemical solvents",
          },
          {
            id: "q37",
            type: "note_completion",
            questionNumber: 37,
            text:
              "passed through 37. <input type='text' id='answer-q37' name='q37' onchange='handleAnswerChange(event, \"q37\", \"note_completion\")' class='note-completion-inline-input' placeholder='Type here'>",
            blankCount: 1,
            answerKey: "small holes",
          },
          {
            id: "q38",
            type: "multiple_choice_single",
            questionNumber: 38,
            text:
              "Biosilk has already replaced nylon in parachute manufacture.",
            options: [
              { key: "A", text: "TRUE" },
              { key: "B", text: "FALSE" },
              { key: "C", text: "NOT GIVEN" },
            ],
            answerKey: "B",
          },
          {
            id: "q39",
            type: "multiple_choice_single",
            questionNumber: 39,
            text: "The spider produces silk of varying strengths.",
            options: [
              { key: "A", text: "TRUE" },
              { key: "B", text: "FALSE" },
              { key: "C", text: "NOT GIVEN" },
            ],
            answerKey: "A",
          },
          {
            id: "q40",
            type: "multiple_choice_single",
            questionNumber: 40,
            text:
              "Lewis and Dorsch co-operated in the synthetic production of silk.",
            options: [
              { key: "A", text: "TRUE" },
              { key: "B", text: "FALSE" },
              { key: "C", text: "NOT GIVEN" },
            ],
            answerKey: "C",
          },
        ],
        context: `
          <div class="mb-4 p-6 bg-white border border-gray-200 rounded-xl shadow-lg font-inter text-gray-800">
            <h3 class="font-bold text-xl mb-4 text-gray-900">READING PASSAGE 3: Spider silk 2</h3>
            <p class="text-md text-gray-500 mb-4">A. Scientists have succeeded in copying the silk-producing genes of the Golden Orb Weaver spider and are using
them to create a synthetic material which they believe is the model for a new generation of advanced bio-materials.
The new material, biosilk, which has been spun for the first time by researchers at DuPont, has an enormous range
of potential uses in construction and manufacturing.</p>
            <p class="text-md text-gray-500 mb-4">B. The attraction of the silk spun by the spider is a combination of great strength and enormous elasticity, which
man-made fibres have been unable to replicate. On an equal-weight basis, spider silk is far stronger than steel and
it is estimated that if a single strand could be made about 10m in diameter, it would be strong enough to stop a
jumbo jet in flight. A third important factor is that it is extremely light. Army scientists are already looking at the
possibilities of using it for lightweight, bulletproof vests and parachutes.</p>
            <p class="text-md text-gray-500 mb-4">C. For some time, biochemists have been trying to synthesise the drag-line silk of the Golden Orb Weaver. The
drag-line silk, which forms the radial arms of the web, is stronger than the other parts of the web and some
biochemists believe a synthetic version could prove to be as important a material as nylon, which has been around
for 50 years, since the discoveries of Wallace Carothers and his team ushered in the age of polymers.</p>
            <p class="text-md text-gray-500 mb-4">D. To recreate the material, scientists, including Randolph Lewis at the University of Wyoming, first examined
the silk-producing gland of the spider. ‘We took out the glands that produce the silk and looked at the coding for
the protein material they make, which is spun into a web. We then went looking for clones with the right DNA,’
he says.</p>
            <p class="text-md text-gray-500 mb-4">E. At DuPont, researchers have used both yeast and bacteria as hosts to grow the raw material, which they have
spun into fibres. Robert Dorsch, DuPont’s director of biochemical development, says the globules of protein,
comparable with marbles in an egg, are harvested and processed. ‘We break open the bacteria, separate out the
globules of protein and use them as the raw starting material. With yeast, the gene system can be designed so that
the material excretes the protein outside the yeast for better access,’ he says.</p>
            <p class="text-md text-gray-500 mb-4">F. ‘The bacteria and the yeast produce the same protein, equivalent to that which the spider uses in the draglines
of the web. The spider mixes the protein into a water-based solution and then spins it into a solid fibre in one go.

Since we are not as clever as the spider and we are not using such sophisticated organisms, we substituted man-
made approaches and dissolved the protein in chemical solvents, which are then spun to push the material through

small holes to form the solid fibre.’</p>
            <p class="text-md text-gray-500 mb-4">G. Researchers at DuPont say they envisage many possible uses for a new biosilk material. They say that
earthquake-resistant suspension bridges hung from cables of synthetic spider silk fibres may become a reality.
Stronger ropes, safer seat belts, shoe soles that do not wear out so quickly and tough new clothing are among the
other applications. Biochemists such as Lewis see the potential range of uses of biosilk as almost limitless. ‘It is
very strong and retains elasticity: there are no man-made materials that can mimic both these properties. It is also
a biological material with all the advantages that have over petrochemicals,’ he says.</p>
            <p class="text-md text-gray-500 mb-4">H. At DuPont’s laboratories, Dorsch is excited by the prospect of new super-strong materials but he warns they
are many years away. ‘We are at an early stage but theoretical predictions are that we will wind up with a very
strong, tough material, with an ability to absorb shock, which is stronger and tougher than the man-made materials
that are conventionally available to us,’ he says.</p>
            <p class="text-md text-gray-500 mb-4">I. The spider is not the only creature that has aroused the interest of material scientists. They have also become
envious of the natural adhesive secreted by the sea mussel. It produces a protein adhesive to attach itself to rocks.
It is tedious and expensive to extract the protein from the mussel, so researchers have already produced a synthetic
gene for use in surrogate bacteria.</p>
            <p class="font-semibold text-lg mb-3 text-blue-700">Questions 33-37</p>
            <p class="text-md text-gray-500 mb-4">Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the passage for each blank.</p>
            <div class="flex flex-col items-center justify-center space-y-4 my-6">
                <div class="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 text-center">
                    <p class="font-semibold">Synthetic gene grown in 33. <input type="text" id="answer-q33" name="q33" onchange="handleAnswerChange(event, 'q33', 'note_completion')" class="note-completion-inline-input w-32" placeholder="Type here"> or 34. <input type="text" id="answer-q34" name="q34" onchange="handleAnswerChange(event, 'q34', 'note_completion')" class="note-completion-inline-input w-32" placeholder="Type here"></p>
                </div>
                <i class="ph-bold ph-arrow-down text-blue-500 text-2xl"></i>
                <div class="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 text-center">
                    <p class="font-semibold">globules of 35. <input type="text" id="answer-q35" name="q35" onchange="handleAnswerChange(event, 'q35', 'note_completion')" class="note-completion-inline-input w-32" placeholder="Type here"></p>
                </div>
                <i class="ph-bold ph-arrow-down text-blue-500 text-2xl"></i>
                <div class="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 text-center">
                    <p class="font-semibold">dissolved in 36. <input type="text" id="answer-q36" name="q36" onchange="handleAnswerChange(event, 'q36', 'note_completion')" class="note-completion-inline-input w-32" placeholder="Type here"></p>
                </div>
                <i class="ph-bold ph-arrow-down text-blue-500 text-2xl"></i>
                <div class="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 text-center">
                    <p class="font-semibold">passed through 37. <input type="text" id="answer-q37" name="q37" onchange="handleAnswerChange(event, 'q37', 'note_completion')" class="note-completion-inline-input w-32" placeholder="Type here"></p>
                </div>
                <i class="ph-bold ph-arrow-down text-blue-500 text-2xl"></i>
                <div class="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 text-center">
                    <p class="font-semibold">to produce a solid fibre</p>
                </div>
            </div>
          </div>
        `,
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
