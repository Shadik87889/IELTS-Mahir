

export const MockTestModules = [ { id: "listening", name: "Listening",
description: "Practice your listening comprehension skills.", icon: '', image:
"https://placehold.co/400x200/60a5fa/ffffff?text=Listening", color:
"bg-blue-500", }, { id: "reading", name: "Reading", description: "Improve your
reading speed and comprehension.", icon: '', image:
"https://placehold.co/400x200/34d399/ffffff?text=Reading", color:
"bg-green-500", }, { id: "writing", name: "Writing", description: "Develop your
essay and report writing abilities.", icon: '', image:
"https://placehold.co/400x200/fcd34d/ffffff?text=Writing", color:
"bg-yellow-500", }, { id: "speaking", name: "Speaking", description: "Enhance
your fluency and pronunciation.", icon: '', image:
"https://placehold.co/400x200/fb7185/ffffff?text=Speaking", color: "bg-red-500",
}, ];

export const allMockTests = [ { id: "listening-test-1", moduleId: "listening",
title: "IELTS Listening Test 1", description: "A full-length Academic Listening
practice test.", duration: 40, audioUrl: "Listening_tests_audio/Test 1/IELTS
Listening Practice Test 1.mp3", sections: [ { id: "section-1", title:
"Section 1", questionGroups: [ { instructions: "Questions 1-6Complete the form
below.Write NO MORE THAN TWO WORDS for each answer.PRIME RECRUITMENT",
questions: [ { id: "q1", questionNumber: 1, type: "fill_in_the_blank", text:
"Email: [GAP]@worldnet.com", correctAnswer: ["EDWINARI", "Edwinari",
"edwinari"], }, { id: "q2", questionNumber: 2, type: "fill_in_the_blank", text:
"Nationality: [GAP]", correctAnswer: ["NEW ZEALANDER", "New Zealander", "new
zealander"], }, { id: "q3", questionNumber: 3, type: "fill_in_the_blank", text:
"Reference (professional)- Name: John Keen, Job: manager of [GAP]",
correctAnswer: ["PLAY CENTRE", "Play Centre", "Play centre", "play centre"], },
{ id: "q4", questionNumber: 4, type: "fill_in_the_blank", text: "Reference
(personal) - Name: Eileen Dorsini, Job: [GAP]", correctAnswer: ["(A) PROFESSOR",
"(A) Professor", "(a) professor", "A PROFESSOR", "A Professor", "PROFESSOR",
"Professor", "a professor", "professor"], }, { id: "q5", questionNumber: 5,
type: "fill_in_the_blank", text: "Special Qualifications: Current [GAP]
certificate", correctAnswer: ["FIRST AID", "First Aid", "first aid"], }, { id:
"q6", questionNumber: 6, type: "fill_in_the_blank", text: "certificate of
competence in [GAP]", correctAnswer: ["SAILING", "Sailing", "sailing"], }, ], },
{ instructions: "Questions 7-10Complete the table below.Write ONE WORD ONLY for
each answer.", questions: [ { id: "q7-10-table", questionNumber: 7, type:
"table_fill_in_the_blank", tableData: [ ["Location", "Name", "Children",
"Special Requirements"], ["London", "Benton", "Girl and boy", "Be keen on 7.
[INPUT]"], [ "Near Oxford", "Granger", "8. [INPUT] boys", "Be animal-lover", ],
[ "9. [INPUT]", "Campbell", "four girls", "Be willing to 10. [INPUT] when
camping", ], ], correctAnswer: { q7: ["SPORT", "Sport", "sport"], q8: ["TWIN",
"Twin", "twin", "TWO", "Two", "two"], q9: ["SCOTLAND", "Scotland", "scotland"],
q10: ["COOK", "Cook", "cook"], }, }, ], }, ], }, { id: "section-2", title:
"Section 2", questionGroups: [ { type: "multiple_choice_multiple_answers", //
Type at the group level instructions: "Questions 11 and 12Choose TWO letters,
A-E.Which TWO sources of funding helped build the facility?", // A single
question object represents the group questions: [ { id: "q11-12",
questionNumber: "11-12", // Correctly formatted question number text: "", // The
main question text is in instructions correctAnswer: ["D", "E"], // The correct
options }, ], // Options are part of the group, not the question options: [ {
id: "A", text: "the central government" }, { id: "B", text: "local government"
}, { id: "C", text: "a multinational company" }, { id: "D", text: "a national
company" }, { id: "E", text: "city residents" }, ], }, { type:
"multiple_choice_multiple_answers", // Type at the group level instructions:
"Questions 13 and 14Choose TWO letters, A-E.Which TWO pre-existing features of
the site are now part of the new facilities?", questions: [ { id: "q13-14",
questionNumber: "13-14", // Correctly formatted question number text: "",
correctAnswer: ["B", "C"], }, ], options: [ { id: "A", text: "football stadium"
}, { id: "B", text: "playing fields" }, { id: "C", text: "passenger hall" }, {
id: "D", text: "control tower" }, { id: "E", text: "aircraft hangars" }, ], }, {
instructions: "Questions 15-20Label the map below.Write the correct letter, A-H,
next to questions 15-20.", questions: [ { id: "q15", questionNumber: 15, type:
"fill_in_the_blank", text: "hotel [GAP]", correctAnswer: ["E", "e"], }, { id:
"q16", questionNumber: 16, type: "fill_in_the_blank", text: "transport hub
[GAP]", correctAnswer: ["B", "b"], }, { id: "q17", questionNumber: 17, type:
"fill_in_the_blank", text: "cinema [GAP]", correctAnswer: ["A", "a"], }, { id:
"q18", questionNumber: 18, type: "fill_in_the_blank", text: "fitness centre
[GAP]", correctAnswer: ["D", "d"], }, { id: "q19", questionNumber: 19, type:
"fill_in_the_blank", text: "shops [GAP]", correctAnswer: ["F", "f"], }, { id:
"q20", questionNumber: 20, type: "fill_in_the_blank", text: "restaurant [GAP]",
correctAnswer: ["C", "c"], }, ], }, ], }, { id: "section-3", title: "Section 3",
questionGroups: [ { instructions: "Questions 21-25Choose the correct letter, A,
B or C.", questions: [ { id: "q21", questionNumber: 21, type: "mcq", text: "What
is Chloe concerned about?", options: [ "A. her knowledge of maths", "B. her
ability to write essays", "C. her lack of business experience", ],
correctAnswer: "B", }, { id: "q22", questionNumber: 22, type: "mcq", text:
"Which of the following does Ivan feel he has improved?", options: [ "A. his
computer skills", "B. his presentation skills", "C. his time management", ],
correctAnswer: "C", }, { id: "q23", questionNumber: 23, type: "mcq", text: "What
does Chloe especially like about the course?", options: [ "A. She won't have to
do a final examination.", "B. She can spend time working in a business.", "C.
She can study a foreign language.", ], correctAnswer: "A", }, { id: "q24",
questionNumber: 24, type: "mcq", text: "Ivan is pleased that the university is
going to have", options: [ "A. more lecture rooms.", "B. a larger library.", "C.
more courses.", ], correctAnswer: "C", }, { id: "q25", questionNumber: 25, type:
"mcq", text: "What does Ivan advise Chloe to do?", options: [ "A. contact his
tutor", "B. read about some other universities", "C. visit the university", ],
correctAnswer: "A", }, ], }, { instructions: "Questions 26-30What does Chloe
decide about the following subjects? Write the correct letter, A, B or C, next
to questions 26-30.", questions: [ { id: "q26", questionNumber: 26, type: "mcq",
text: "Public relations", options: [ "A. She will study it.", "B. She won't
study it.", "C. She might study it.", ], correctAnswer: "C", }, { id: "q27",
questionNumber: 27, type: "mcq", text: "Marketing", options: [ "A. She will
study it.", "B. She won't study it.", "C. She might study it.", ],
correctAnswer: "A", }, { id: "q28", questionNumber: 28, type: "mcq", text:
"Taxation", options: [ "A. She will study it.", "B. She won't study it.", "C.
She might study it.", ], correctAnswer: "A", }, { id: "q29", questionNumber: 29,
type: "mcq", text: "Human resources", options: [ "A. She will study it.", "B.
She won't study it.", "C. She might study it.", ], correctAnswer: "B", }, { id:
"q30", questionNumber: 30, type: "mcq", text: "Information systems", options: [
"A. She will study it.", "B. She won't study it.", "C. She might study it.", ],
correctAnswer: "C", }, ], }, ], }, { id: "section-4", title: "Section 4",
questionGroups: [ { instructions: "Questions 31-35Complete the notes below.Write
NO MORE THAN TWO WORDS for each answer.History of weather forecastingEarly
methods", questions: [ { id: "q31", questionNumber: 31, type:
"fill_in_the_blank", text: "Almanacs connected the weather with the positions of
different [GAP] at particular times.", correctAnswer: ["PLANETS", "Planets",
"planets"], }, { id: "q32", questionNumber: 32, type: "fill_in_the_blank", text:
"A hydrometer showed Levels of [GAP] (Nicholas Cusa 1450)", correctAnswer:
["HUMIDITY", "Humidity", "humidity"], }, { id: "q33", questionNumber: 33, type:
"fill_in_the_blank", text: "Temperature variations - first measured by a
thermometer containing [GAP] (Galileo Galilei 1595)", correctAnswer: ["WATER",
"Water", "water"], }, { id: "q34", questionNumber: 34, type:
"fill_in_the_blank", text: "The use of the [GAP] allowed information to be
passed around the world.", correctAnswer: ["(ELECTRIC) TELEGRAPH", "(Electric)
Telegraph", "(electric) telegraph", "TELEGRAPH", "Telegraph", "telegraph"], }, {
id: "q35", questionNumber: 35, type: "fill_in_the_blank", text: "Daily [GAP]
were produced by the French from 1863.", correctAnswer: ["(WEATHER) MAPS",
"(Weather) Maps", "(weather) maps", "WEATHER MAPS", "Weather Maps", "weather
maps", "MAPS", "Maps", "maps"], }, ], }, { instructions:
"Questions 36-40Complete the sentences below.Write NO MORE THAN TWO WORDS for
each answer.Producing a weather forecast", questions: [ { id: "q36",
questionNumber: 36, type: "fill_in_the_blank", text: "Weather observation
stations are found mostly at [GAP] around the country.", correctAnswer:
["AIRPORTS", "Airports", "airports"], }, { id: "q37", questionNumber: 37, type:
"fill_in_the_blank", text: "Satellite images use the colour orange to show
[GAP].", correctAnswer: ["DRY AIR", "Dry Air", "dry air"], }, { id: "q38",
questionNumber: 38, type: "fill_in_the_blank", text: "The satellites give so
much detail that meteorologists can distinguish a particular [GAP].",
correctAnswer: ["CLOUD", "Cloud", "cloud"], }, { id: "q39", questionNumber: 39,
type: "fill_in_the_blank", text: "Information about the upper atmosphere is sent
from instruments attached to a [GAP].", correctAnswer: ["BALLOON", "Balloon",
"balloon"], }, { id: "q40", questionNumber: 40, type: "fill_in_the_blank", text:
"Radar is particularly useful for following the movement of [GAP].",
correctAnswer: ["HURRICANES", "Hurricanes", "hurricanes"], }, ], }, ], }, ], },
{ id: "listening-test-2", moduleId: "listening", title: "IELTS Listening
Test 2", description: "A full-length Academic Listening practice test.",
duration: 40, audioUrl: "Listening_tests_audio/Test 2/IELTS LISTENING PRACTICE
TEST 2.mp3", sections: [ { id: "section-1", title: "Section 1", questionGroups:
[ { instructions: "Questions 1-2Complete the notes below.Write NO MORE THAN ONE
WORD for each answer.Advice on plumbers and decoratorsExample: Make sure the
company is: local", questions: [ { id: "q1", questionNumber: 1, type:
"fill_in_the_blank", text: "Don't call a plumber during the [GAP]",
correctAnswer: ["WEEKEND(S)", "Weekend(S)", "weekend(s)", "WEEKEND", "Weekend",
"weekend", "WEEKENDS", "Weekends", "weekends"], }, { id: "q2",
questionNumber: 2, type: "fill_in_the_blank", text: "Look at trade website:
www.[GAP].com", correctAnswer: ["PLASDECO", "Plasdeco", "plasdeco"], }, ], }, {
instructions: "Questions 3-10Complete the table below.Write NO MORE THAN ONE
WORD for each answer.", questions: [ { id: "q3-10-table", questionNumber: 3,
type: "table_fill_in_the_blank", tableData: [ ["Name", "Positive points",
"Negative points"], [ "Peake's Plumbing", "Pleasant and friendlyGive 3. [INPUT]
informationGood quality work", "Always 4. [INPUT]", ], [ "John Damerol Plumbing
Services", "5. [INPUT] than other companiesReliable", "Not very politeTends to
be 6. [INPUT]", ], [ "Simonson Plasterers", "Able to do lots of different 7.
[INPUT]", "More 8. [INPUT] than other companies", ], [ "H.L. Plastering",
"Reliable.Also able to do 9. [INPUT]", "Prefers not to use long 10. [INPUT]", ],
], correctAnswer: { q3: ["CLEAR", "Clear", "clear"], q4: ["LATE", "Late",
"late"], q5: ["CHEAPER", "Cheaper", "cheaper"], q6: ["MESSY", "Messy", "messy"],
q7: ["DESIGNS", "Designs", "designs"], q8: ["EXPENSIVE", "Expensive",
"expensive"], q9: ["PAINTING", "Painting", "painting"], q10: ["LADDER(S)",
"Ladder(S)", "ladder(s)", "LADDER", "Ladder", "ladder", "LADDERS", "Ladders",
"ladders"], }, }, ], }, ], }, { id: "section-2", title: "Section 2",
questionGroups: [ { instructions: "Questions 11-15Choose the correct answer, A,
B or C.Museum work placement", questions: [ { id: "q11", questionNumber: 11,
type: "mcq", text: "On Monday, what will be the students' working day?",
options: [ "A. 9.00 a.m. - 5.00 p.m.", "B. 8.45 a.m. - 5.00 p.m.", "C. 9.00 a.m.
- 4.45 p.m.", ], correctAnswer: "B", }, { id: "q12", questionNumber: 12, type:
"mcq", text: "While working in the museum, students are encouraged to wear",
options: [ "A. formal clothing such as a suit.", "B. a cap with the museum
logo.", "C. their own casual clothes.", ], correctAnswer: "C", }, { id: "q13",
questionNumber: 13, type: "mcq", text: "If students are ill or going to be late,
they must inform", options: [ "A. the museum receptionist.", "B. their museum
supervisor.", "C. their school placement tutor.", ], correctAnswer: "A", }, {
id: "q14", questionNumber: 14, type: "mcq", text: "The most popular task whilst
on work placement is usually", options: [ "A. making presentations in local
primary schools.", "B. talking to elderly people in care homes.", "C. conducting
workshops in the museum.", ], correctAnswer: "B", }, { id: "q15",
questionNumber: 15, type: "mcq", text: "The best form of preparation before
starting their work placement is to read", options: [ "A. the history of the
museum on the website.", "B. the museum regulations and safety guidance.", "C.
notes made by previous work placement students.", ], correctAnswer: "C", }, ],
}, { instructions: "Questions 16-20Label the plan below.Write the correct
letter, A-I, next to questions 16-20.Where in the museum are the following
places?", questions: [ { id: "q16", questionNumber: 16, type:
"fill_in_the_blank", text: "Sign-in office [GAP]", correctAnswer: ["C", "c"], },
{ id: "q17", questionNumber: 17, type: "fill_in_the_blank", text: "Gallery
[GAP]", correctAnswer: ["I", "i"], }, { id: "q18", questionNumber: 18, type:
"fill_in_the_blank", text: "Key box [GAP]", correctAnswer: ["H", "h"], }, { id:
"q19", questionNumber: 19, type: "fill_in_the_blank", text: "Kitchen area
[GAP]", correctAnswer: ["D", "d"], }, { id: "q20", questionNumber: 20, type:
"fill_in_the_blank", text: "Staff noticeboard [GAP]", correctAnswer: ["G", "g"],
}, ], }, ], }, { id: "section-3", title: "Section 3", questionGroups: [ {
instructions: "Questions 21-26What is the tutor's opinion of the following
company projects?Choose FIVE answers from the box, and write the correct letter,
A-H, next to questions 21-26.", type: "matching", // Type at the group level
questions: [ { id: "l2-q21-26", questionNumber: 21, // Anchor for palette
scrolling // All matching logic is contained in the group }, ], matchingOptions:
{ title: "Tutor's opinion", A: "It would be very rewarding for the student.", B:
"It is too ambitious.", C: "It would be difficult to evaluate.", D: "It wouldn't
be sufficiently challenging.", E: "It would involve extra costs.", F: "It is
beyond the student's current ability.", G: "It is already being done by another
student.", H: "It would probably have the greatest impact on the company.", },
matchingItems: [ { number: 21, text: "Customer database", correctAnswer: "D" },
{ number: 22, text: "Online sales catalogue", correctAnswer: "B", }, {
number: 23, text: "Payroll", correctAnswer: "A" }, { number: 24, text: "Stock
inventory", correctAnswer: "H" }, { number: 25, text: "Internal security",
correctAnswer: "F" }, { number: 26, text: "Customer services", correctAnswer:
"E" }, ], }, { type: "multiple_choice_multiple_answers", instructions:
"Questions 27-28Choose TWO letters, A-E.Which TWO problems do Sam and the tutor
identify concerning group assignments?", questions: [ { id: "l2-q27-28",
questionNumber: "27-28", text: "", correctAnswer: ["B", "E"], }, ], options: [ {
id: "A", text: "Personal relationships" }, { id: "B", text: "Cultural
differences" }, { id: "C", text: "Division of labour" }, { id: "D", text: "Group
leadership" }, { id: "E", text: "Group size" }, ], }, { type:
"multiple_choice_multiple_answers", instructions: "Questions 29-30Choose TWO
letters, A-E.Which TWO problems does Sam identify concerning the lecturers?",
questions: [ { id: "l2-q29-30", questionNumber: "29-30", text: "",
correctAnswer: ["A", "C"], }, ], options: [ { id: "A", text: "Punctuality" }, {
id: "B", text: "Organisation" }, { id: "C", text: "Accessibility" }, { id: "D",
text: "Helpfulness" }, { id: "E", text: "Teaching materials" }, ], }, ], }, {
id: "section-4", title: "Section 4", questionGroups: [ { instructions:
"Questions 31-40Complete the notes below.Write ONE WORD ONLY for each answer.The
Tawny Owl", questions: [ { id: "q31", questionNumber: 31, type:
"fill_in_the_blank", text: "Most  [GAP] owl species in UK", correctAnswer:
["COMMON", "Common", "common"], }, { id: "q32", questionNumber: 32, type:
"fill_in_the_blank", text: "Mainly lives in  [GAP], but can also be seen in
urban areas, e.g. parks.", correctAnswer: ["WOODLAND", "Woodland", "woodland",
"WOODS", "Woods", "woods", "FOREST(S)", "Forest(S)", "forest(s)", "FOREST",
"Forest", "forest", "FORESTS", "Forests", "forests"], }, { id: "q33",
questionNumber: 33, type: "fill_in_the_blank", text: "Short wings and  [GAP],
for navigation", correctAnswer: ["TAIL", "Tail", "tail"], }, { id: "q34",
questionNumber: 34, type: "fill_in_the_blank", text: "Brown and  [GAP] feathers,
for camouflage", correctAnswer: ["GREY", "Grey", "grey", "GRAY", "Gray",
"gray"], }, { id: "q35", questionNumber: 35, type: "fill_in_the_blank", text:
"Large eyes (more effective than those of  [GAP]), for good night vision",
correctAnswer: ["HUMANS", "Humans", "humans", "PEOPLE", "People", "people"], },
{ id: "q36", questionNumber: 36, type: "fill_in_the_blank", text: "Very good
spatial  [GAP], for predicting where prey might be found", correctAnswer:
["MEMORY", "Memory", "memory"], }, { id: "q37", questionNumber: 37, type:
"fill_in_the_blank", text: "Excellent  [GAP], for locating prey from a perch",
correctAnswer: ["HEARING", "Hearing", "hearing"], }, { id: "q38",
questionNumber: 38, type: "fill_in_the_blank", text: "Main food is small
mammals.Owls in urban areas eat more  [GAP].", correctAnswer: ["BIRDS", "Birds",
"birds"], }, { id: "q39", questionNumber: 39, type: "fill_in_the_blank", text:
"Two thirds of young owls die within a  [GAP].", correctAnswer: ["YEAR", "Year",
"year"], }, { id: "q40", questionNumber: 40, type: "fill_in_the_blank", text:
"Owls seem to dislike flying over large areas of  [GAP].", correctAnswer:
["WATER", "Water", "water"], }, ], }, ], }, ], }, { id: "listening-test-3",
moduleId: "listening", title: "IELTS Listening Test 3", description: "A
full-length Academic Listening practice test.", duration: 40, audioUrl:
"Listening_tests_audio/Test 3/IELTS Listening Test 3 .mp3", sections: [ { id:
"section-1", title: "Section 1", questionGroups: [ { instructions:
"Questions 1-10Complete the notes below.Write NO MORE THAN THREE WORDS AND/OR A
NUMBER for each answer.Holiday Booking Form", questions: [ { id: "q1",
questionNumber: 1, type: "fill_in_the_blank", text: "Name: Daniel [GAP]",
correctAnswer: ["HARRIS", "Harris", "harris"], }, { id: "q2", questionNumber: 2,
type: "fill_in_the_blank", text: "Departure date: July [GAP]", correctAnswer:
["15", "15TH", "15Th", "15th"], }, { id: "q3", questionNumber: 3, type:
"fill_in_the_blank", text: "Length of stay: week(s) [GAP]", correctAnswer:
["ONE", "One", "one", "1"], }, { id: "q4", questionNumber: 4, type:
"fill_in_the_blank", text: "Destination country: [GAP]", correctAnswer:
["PORTUGAL", "Portugal", "portugal"], }, { id: "q5", questionNumber: 5, type:
"fill_in_the_blank", text: "Hotel: Hotel [GAP]", correctAnswer: ["SEAVIEW",
"Seaview", "seaview"], }, { id: "q6", questionNumber: 6, type:
"fill_in_the_blank", text: "Total cost: £ [GAP]", correctAnswer: ["680"], }, {
id: "q7", questionNumber: 7, type: "fill_in_the_blank", text: "Transfer cost: £
[GAP] per person", correctAnswer: ["40"], }, { id: "q8", questionNumber: 8,
type: "fill_in_the_blank", text: "Facilities: swimming pool, gym, and free
[GAP]", correctAnswer: ["WI-FI", "Wi-Fi", "wi-fi", "WIFI", "Wifi", "wifi"], }, {
id: "q9", questionNumber: 9, type: "fill_in_the_blank", text: "Extra charge from
government: [GAP] tax", correctAnswer: ["CITY", "City", "city"], }, { id: "q10",
questionNumber: 10, type: "fill_in_the_blank", text: "Contact number: [GAP]",
correctAnswer: ["07865 239410"], }, ], }, ], }, { id: "section-2", title:
"Section 2", questionGroups: [ { instructions: "Questions 11-15Choose the
correct letter, A, B or C.", questions: [ { id: "q11", questionNumber: 11, type:
"mcq", text: "Where is the community centre located?", options: [ "A. On the
High Street, inside the Town Hall", "B. Next to the library, just off the High
Street", "C. Near the council offices on the main square", ], correctAnswer:
"B", }, { id: "q12", questionNumber: 12, type: "mcq", text: "Which course at the
community centre is especially popular?", options: ["A. Aerobics", "B. Yoga",
"C. Photography"], correctAnswer: "C", }, { id: "q13", questionNumber: 13, type:
"mcq", text: "Which park is recommended for adults as well as children?",
options: [ "A. Riverbank Park", "B. Greenfield Park", "C. Station Park", ],
correctAnswer: "B", }, { id: "q14", questionNumber: 14, type: "mcq", text:
"Where can residents watch live drama and comedy?", options: [ "A. Westford
Playhouse", "B. Westford Cinema", "C. Town Hall", ], correctAnswer: "A", }, {
id: "q15", questionNumber: 15, type: "mcq", text: "What special benefit comes
with membership at the sports complex?", options: [ "A. Access to squash
courts", "B. Free parking", "C. Discounts at private gyms", ], correctAnswer:
"B", }, ], }, { instructions: "Questions 16-20Complete the sentences given
below.Write NO MORE THAN TWO WORDS for each answer.", questions: [ { id: "q16",
questionNumber: 16, type: "fill_in_the_blank", text: "The cycle hire scheme is
operated by a [GAP].", correctAnswer: ["LOCAL CHARITY", "Local Charity", "local
charity"], }, { id: "q17", questionNumber: 17, type: "fill_in_the_blank", text:
"The hospital does not usually accept [GAP].", correctAnswer: ["VOLUNTEERS",
"Volunteers", "volunteers"], }, { id: "q18", questionNumber: 18, type:
"fill_in_the_blank", text: "The town newsletter is published [GAP].",
correctAnswer: ["MONTHLY", "Monthly", "monthly"], }, { id: "q19",
questionNumber: 19, type: "fill_in_the_blank", text: "Students often eat cheaply
at the [GAP].", correctAnswer: ["CAFE", "Cafe", "cafe"], }, { id: "q20",
questionNumber: 20, type: "fill_in_the_blank", text: "The Westford Festival
takes place every [GAP].", correctAnswer: ["SEPTEMBER", "September",
"september"], }, ], }, ], }, { id: "section-3", title: "Section 3",
questionGroups: [ { instructions: "Questions 21-25Choose the correct letter, A,
B or C.", questions: [ { id: "q21", questionNumber: 21, type: "mcq", text: "What
contradiction did the article highlight about interviews?", options: [ "A.
Remote methods are less reliable", "B. Remote methods can be as effective as
face-to-face", "C. Face-to-face methods are always superior", ], correctAnswer:
"B", }, { id: "q22", questionNumber: 22, type: "mcq", text: "Which topic is
easier to discuss online?", options: [ "A. Technical subjects", "B. Sensitive
personal issues", "C. Cultural differences", ], correctAnswer: "B", }, { id:
"q23", questionNumber: 23, type: "mcq", text: "What problem can arise if consent
forms are too simple?", options: [ "A. Participants may feel patronised", "B.
The forms become legally invalid", "C. Researchers overlook key details", ],
correctAnswer: "A", }, { id: "q24", questionNumber: 24, type: "mcq", text: "What
unexpected result came from the dietary study?", options: [ "A. Gradual changes
in diet over time", "B. Data inconsistencies caused by poor reporting", "C.
Sudden large fluctuations in eating habits", ], correctAnswer: "C", }, { id:
"q25", questionNumber: 25, type: "mcq", text: "Why are surveys sometimes
preferred?", options: [ "A. They cost less to conduct", "B. They capture
day-to-day changes", "C. They avoid sample bias", ], correctAnswer: "B", }, ],
}, { instructions: "Questions 26-30Complete the sentences given below.Write NO
MORE THAN TWO WORDS for each answer.", questions: [ { id: "q26",
questionNumber: 26, type: "fill_in_the_blank", text: "The article highlighted
the importance of [GAP] than using only one method.", correctAnswer:
["TRIANGULATION", "Triangulation", "triangulation"], }, { id: "q27",
questionNumber: 27, type: "fill_in_the_blank", text: "Funding agencies often
favour research with [GAP], they are easier to report.", correctAnswer:
["QUANTITATIVE OUTPUTS", "Quantitative Outputs", "quantitative outputs"], }, {
id: "q28", questionNumber: 28, type: "fill_in_the_blank", text: "Projects that
are purely numerical may gain funding but lose [GAP].", correctAnswer:
["RICHNESS", "Richness", "richness"], }, { id: "q29", questionNumber: 29, type:
"fill_in_the_blank", text: "Some students may claim that [GAP] are more
important than words.", correctAnswer: ["NUMBERS", "Numbers", "numbers"], }, {
id: "q30", questionNumber: 30, type: "fill_in_the_blank", text: "Daniel suggests
they may see the [GAP] of the opposing argument.", correctAnswer: ["MERIT",
"Merit", "merit"], }, ], }, ], }, { id: "section-4", title: "Section 4",
questionGroups: [ { instructions: "Questions 31-40Complete the sentences given
below.Write NO MORE THAN TWO WORDS for each answer.History of Building
Railways", questions: [ { id: "q31", questionNumber: 31, type:
"fill_in_the_blank", text: "Engineers in mountain areas faced higher costs due
to unstable rock and [GAP].", correctAnswer: ["UNPREDICTABLE WEATHER",
"Unpredictable Weather", "unpredictable weather"], }, { id: "q32",
questionNumber: 32, type: "fill_in_the_blank", text: "The Semmering Railway
succeeded thanks to bridges and carefully planned [GAP].", correctAnswer:
["GRADIENTS", "Gradients", "gradients"], }, { id: "q33", questionNumber: 33,
type: "fill_in_the_blank", text: "Dependence on private funding sometimes
restrict public [GAP].", correctAnswer: ["ACCESS", "Access", "access"], }, { id:
"q34", questionNumber: 34, type: "fill_in_the_blank", text: "Tunnelling reduced
[GAP] but exposed workers to dangers like toxic gases and flooding.",
correctAnswer: ["TRAVEL TIMES", "Travel Times", "travel times"], }, { id: "q35",
questionNumber: 35, type: "fill_in_the_blank", text: "High [GAP] were recorded,
especially in tunnels with poor ventilation.", correctAnswer: ["MORTALITY
RATES", "Mortality Rates", "mortality rates"], }, { id: "q36",
questionNumber: 36, type: "fill_in_the_blank", text: "Railways improved access
but caused damage to fragile [GAP].", correctAnswer: ["ECOSYSTEMS",
"Ecosystems", "ecosystems"], }, { id: "q37", questionNumber: 37, type:
"fill_in_the_blank", text: "Many abandoned lines were left with unused [GAP].",
correctAnswer: ["STATIONS", "Stations", "stations"], }, { id: "q38",
questionNumber: 38, type: "fill_in_the_blank", text: "Modern monitoring systems
are also useful for finding [GAP] early on.", correctAnswer: ["STRUCTURAL
WEAKNESS", "Structural Weakness", "structural weakness"], }, { id: "q39",
questionNumber: 39, type: "fill_in_the_blank", text: "Some communities resist
new railways to protect their [GAP].", correctAnswer: ["TRADITION", "Tradition",
"tradition"], }, { id: "q40", questionNumber: 40, type: "fill_in_the_blank",
text: "Projects today must show a clear commitment to [GAP].", correctAnswer:
["SUSTAINABILITY", "Sustainability", "sustainability"], }, ], }, ], }, ], }, {
id: "listening-test-4", moduleId: "listening", title: "IELTS Listening Test 4",
description: "A full-length Academic Listening practice test.", duration: 40,
audioUrl: "Listening_tests_audio/Test 4/IELTS LISTENING PRACTICE TEST 4.mp3",
sections: [ { id: "section-1", title: "Section 1", questionGroups: [ {
instructions: "Questions 1-4Complete the table below.Write NO MORE THAN TWO
WORDS OR A NUMBER for each answer.COMPLAINT RECORD FORMName: Susan Yorke",
questions: [ { id: "q1", questionNumber: 1, type: "fill_in_the_blank", text:
"Address: Flat 1, 25 [GAP] Harchester HA6 5LD", correctAnswer: ["ALPINE AVENUE",
"Alpine Avenue", "alpine avenue"], }, { id: "q2", questionNumber: 2, type:
"fill_in_the_blank", text: "Purchase reference number: [GAP] 8443",
correctAnswer: ["DMX", "Dmx", "dmx"], }, { id: "q3", questionNumber: 3, type:
"fill_in_the_blank", text: "Item description: Aqua Powershot digital camera in a
[GAP] case", correctAnswer: ["SILVER", "Silver", "silver"], }, { id: "q4",
questionNumber: 4, type: "fill_in_the_blank", text: "Insurance: Yes, has a
colour [GAP] policy", correctAnswer: ["FOUR STAR", "Four Star", "four star"], },
], }, { instructions: "Questions 5-10Complete the form below.Write NO MORE THAN
TWO WORDS OR A NUMBER for each answer.Details of complaint:", questions: [ { id:
"q5", questionNumber: 5, type: "fill_in_the_blank", text: "[GAP] missing
should", correctAnswer: ["MEMORY CARD", "Memory Card", "memory card"], }, { id:
"q6", questionNumber: 6, type: "fill_in_the_blank", text: "[GAP] but isn't",
correctAnswer: ["WATERPROOF", "Waterproof", "waterproof"], }, { id: "q7",
questionNumber: 7, type: "fill_in_the_blank", text: "[GAP] on case",
correctAnswer: ["BIG SCRATCH", "Big Scratch", "big scratch"], }, { id: "q8",
questionNumber: 8, type: "fill_in_the_blank", text: "If repair not possible,
offered to provide a [GAP]", correctAnswer: ["REPLACEMENT", "Replacement",
"replacement"], }, { id: "q9", questionNumber: 9, type: "fill_in_the_blank",
text: "but customer requests a [GAP]", correctAnswer: ["REFUND", "Refund",
"refund"], }, { id: "q10", questionNumber: 10, type: "fill_in_the_blank", text:
"Asked customer to send item to [GAP]", correctAnswer: ["CUSTOMER SERVICES",
"Customer Services", "Customer services", "customer services", "CUSTOMER
SERVICE", "Customer Service", "Customer service", "customer service"], }, ], },
], }, { id: "section-2", title: "Section 2", questionGroups: [ { instructions:
"Questions 11-15Complete the diagram below.Write NO MORE THAN TWO WORDS for each
answer.THE ROTOGRAVURE PROCESS", questions: [ { id: "q11", questionNumber: 11,
type: "fill_in_the_blank", text: "[GAP]", correctAnswer: ["IMPRESSION ROLLER",
"Impression Roller", "Impression roller", "impression roller"], }, { id: "q12",
questionNumber: 12, type: "fill_in_the_blank", text: "[GAP] of paper",
correctAnswer: ["PRINTED SIDE", "Printed Side", "Printed side", "printed side",
"PRINTED SIDE", "Printed Side", "Printed side", "printed side"], }, { id: "q13",
questionNumber: 13, type: "fill_in_the_blank", text: "gravure [GAP]",
correctAnswer: ["CYLINDER", "Cylinder", "cylinder"], }, { id: "q14",
questionNumber: 14, type: "fill_in_the_blank", text: "[GAP]", correctAnswer:
["INK FOUNTAIN", "Ink Fountain", "Ink fountain", "ink fountain"], }, { id:
"q15", questionNumber: 15, type: "fill_in_the_blank", text: "[GAP]",
correctAnswer: ["DOCTOR BLADE", "Doctor Blade", "Doctor blade", "doctor blade"],
}, ], }, { instructions: "Questions 16-20Complete the sentences below.Write NO
MORE THAN THREE WORDS for each answer.", questions: [ { id: "q16",
questionNumber: 16, type: "fill_in_the_blank", text: "The main advantage of
rotogravure is the large [GAP] which is transferred.", correctAnswer: ["AMOUNT
OF INK", "Amount Of Ink", "Amount of ink", "amount of ink"], }, { id: "q17",
questionNumber: 17, type: "fill_in_the_blank", text: "[GAP] and photographs
reproduce well in the rotogravure process.", correctAnswer: ["FINE ART", "Fine
Art", "Fine art", "fine art"], }, { id: "q18", questionNumber: 18, type:
"fill_in_the_blank", text: "Sunday newspapers often contain [GAP] produced by
rotogravure", correctAnswer: ["ADVERTISING MATERIAL", "Advertising Material",
"Advertising material", "advertising material"], }, { id: "q19",
questionNumber: 19, type: "fill_in_the_blank", text: "Apart from paper, floor
coverings and [GAP] can be printed by rotogravure.", correctAnswer: ["CONSUMER
PACKAGING", "Consumer Packaging", "Consumer packaging", "consumer packaging"],
}, { id: "q20", questionNumber: 20, type: "fill_in_the_blank", text: "The main
problem with rotogravure is that the [GAP] to the naked eye.", correctAnswer:
["DOTS ARE VISIBLE", "Dots Are Visible", "Dots are visible", "dots are
visible"], }, ], }, ], }, { id: "section-3", title: "Section 3", questionGroups:
[ { instructions: "Questions 21-23Choose THREE letters, A-F.Which THREE things
are the students required to submit to their professor?", type:
"multiple_choice_multiple_answers", questions: [ { id: "q21-23", questionNumber:
"21-23", text: "", correctAnswer: ["A", "C", "E"], }, ], options: [ { id: "A",
text: "a written summary" }, { id: "B", text: "maps" }, { id: "C", text: "a case
study" }, { id: "D", text: "charts and graphs" }, { id: "E", text: "a list of
resources used" }, { id: "F", text: "a video" }, ], }, { instructions:
"Questions 24-25Complete the information below.Write NO MORE THAN THREE WORDS
for each answer.", questions: [ { id: "q24", questionNumber: 24, type:
"fill_in_the_blank", text: "What two sources of information will the students
use when preparing their presentation?", correctAnswer: ["INTERVIEWS, JOURNAL
ARTICLES", "Interviews, Journal Articles", "Interviews, journal articles",
"interviews, journal articles", "INTERVIEWS ,JOURNAL ARTICLES", "Interviews
,Journal Articles", "Interviews ,journal articles", "interviews ,journal
articles"], }, { id: "q25", questionNumber: 25, type: "fill_in_the_blank", text:
"What will the students show during their presentation?", correctAnswer:
["PHOTOS", "Photos", "photos"], }, ], }, { instructions: "Questions 26-30Choose
the correct letter, A-C.", questions: [ { id: "q26", questionNumber: 26, type:
"mcq", text: "Only rescue birds that are", options: [ "A. all alone.", "B.
obviously hurt.", "C. sitting on the ground.", ], correctAnswer: "B", }, { id:
"q27", questionNumber: 27, type: "mcq", text: "Project yourself by wearing",
options: ["A. gloves", "B. a hat", "C. protective glasses"], correctAnswer: "A",
}, { id: "q28", questionNumber: 28, type: "mcq", text: "Put the bird in a",
options: ["A. cage", "B. box", "C. bag"], correctAnswer: "B", }, { id: "q29",
questionNumber: 29, type: "mcq", text: "Keep the bird calm by", options: [ "A.
petting it.", "B. talking to it.", "C. leaving it alone.", ], correctAnswer:
"C", }, { id: "q30", questionNumber: 30, type: "mcq", text: "When transporting
the bird,", options: [ "A. speak quietly.", "B. play music.", "C. drive very
slowly.", ], correctAnswer: "A", }, ], }, ], }, { id: "section-4", title:
"Section 4", questionGroups: [ { instructions: "Questions 31-33Choose the
correct letter A-C.", questions: [ { id: "q31", questionNumber: 31, type: "mcq",
text: "According Prof. Smith, a tutor", options: [ "A. is an important part of
the teaching program", "B. is responsible for students' academic problems only",
"C. instructs students in personal and academic problems", ], correctAnswer:
"C", }, { id: "q32", questionNumber: 32, type: "mcq", text: "The pattern of
tutorials for radiography students is the meet between the tutor and", options:
[ "A. a group of 6 students weekly", "B. a group of 10 students weekly", "C. a
group of 10 students every two weeks", ], correctAnswer: "C", }, { id: "q33",
questionNumber: 33, type: "mcq", text: "The tutorials in the 12th and 25th
week", options: [ "A. without the presence of the tutor", "B. selective for
students", "C. compulsory to everybody", ], correctAnswer: "B", }, ], }, {
instructions: "Questions 34-40Complete the table below.Write no more than One
word or A Number for each answer.", questions: [ { id: "q34-40-table",
questionNumber: 34, type: "table_fill_in_the_blank", tableData: [ [ "Stages",
"Purposes / contents", "Students tasks", "Tutors duty", ], [ "Introduction
(Period: 1st - 3rd)", "Identify student with difficulty in joining in to the
academic 34. [INPUT]", "", "Cheak the attendance; help solving work in a
systematic and 35. [INPUT]", ], [ "Stage 2 (4th - 7th)", "Half tutorials deal
with course 36. [INPUT]", "Weekly assignments for 37. [INPUT] hours With of
written work 50%", "Collect the written work and 38. [INPUT] And grade them in
one week", ], [ "Stage 3 (8th - 10th)", "Supporting work about 39. [INPUT]
Programs and lab work", "Accounts or notes; Short Speaking presentations on
general 40. [INPUT]", "", ], ], correctAnswer: { q34: ["PROGRAM", "Program",
"program"], q35: ["EFFECTIVE", "Effective", "effective"], q36: ["WORK", "Work",
"work"], q37: ["2", "TWO", "Two", "two"], q38: ["MARK", "Mark", "mark"], q39:
["LECTURE", "Lecture", "lecture"], q40: ["PHYSICS", "Physics", "physics"], }, },
], }, ], }, ], },

{ id: "listening-test-5", moduleId: "listening", title: "IELTS Listening
Test 5", description: "A full-length Academic Listening practice test.",
duration: 40, audioUrl: "Listening_tests_audio/Test 5/IELTS LISTENING PRACTICE
TEST 5.mp3", sections: [ { id: "section-1", title: "Section 1", questionGroups:
[ { instructions: "Questions 1-3Choose THREE letters A - G.What topics must the
assignment cover?", type: "multiple_choice_multiple_answers", questions: [ { id:
"q1-3", questionNumber: "1-3", text: "", correctAnswer: ["C", "E", "F"], }, ],
options: [ { id: "A", text: "zoo finances" }, { id: "B", text: "public safety"
}, { id: "C", text: "the history of zoos" }, { id: "D", text: "animal welfare"
}, { id: "E", text: "education and zoos" }, { id: "F", text: "zoos for science"
}, { id: "G", text: "value for money" }, ], }, { instructions: "Questions 4
and 5Choose TWO letters A - E.Which areas do the students decide to concentrate
their efforts on?", type: "multiple_choice_multiple_answers", questions: [ { id:
"q4-5", questionNumber: "4-5", text: "", correctAnswer: ["C", "D"], }, ],
options: [ { id: "A", text: "science" }, { id: "B", text: "history" }, { id:
"C", text: "entertainment" }, { id: "D", text: "conservation" }, { id: "E",
text: "education" }, ], }, { instructions: "Questions 6 - 10Complete the summary
below.Write NO MORE THAN THREE WORDS OR A NUMBER for each answer.", questions: [
{ id: "q6", questionNumber: 6, type: "fill_in_the_blank", text: "The Arabian
oryx is mainly [GAP] in colour.", correctAnswer: ["WHITE", "White", "white"], },
{ id: "q7", questionNumber: 7, type: "fill_in_the_blank", text: "It lives in a
[GAP] climate.", correctAnswer: ["HOT(DESERT)", "Hot(Desert)", "hot(desert)",
"HOT DESERT", "Hot Desert", "hot desert", "HOT", "Hot", "hot"], }, { id: "q8",
questionNumber: 8, type: "fill_in_the_blank", text: "In [GAP] it became
extinct.", correctAnswer: ["1972"], }, { id: "q9", questionNumber: 9, type:
"fill_in_the_blank", text: "Now, there are about [GAP].", correctAnswer:
["300"], }, { id: "q10", questionNumber: 10, type: "fill_in_the_blank", text:
"in Oman. A crash in the population was caused by [GAP].", correctAnswer:
["ILLEGAL HUNTING", "Illegal Hunting", "Illegal hunting", "illegal hunting"], },
], }, ], }, { id: "section-2", title: "Section 2", questionGroups: [ {
instructions: "Questions 11 - 12Choose the correct letter A - C.", questions: [
{ id: "q11", questionNumber: 11, type: "mcq", text: "What is one of the new
advantages in the dining facilities?", options: [ "A. more students", "B. more
variety", "C. more service", ], correctAnswer: "B", }, { id: "q12",
questionNumber: 12, type: "mcq", text: "What was one problem with the dining
options last year?", options: [ "A. Students did not have enough to eat.", "B.
Students had to pay too much money.", "C. Students had to eat whatever was
served.", ], correctAnswer: "C", }, ], }, { instructions: "Questions 13
- 14Complete the information below.Write ONE WORD ONLY for each answer.",
questions: [ { id: "q13", questionNumber: 13, type: "fill_in_the_blank", text:
"[GAP] and pasta are an example of Italian food.", correctAnswer: ["PIZZA",
"Pizza", "pizza"], }, { id: "q14", questionNumber: 14, type:
"fill_in_the_blank", text: "American food consists of [GAP] and hot dog.",
correctAnswer: ["HAMBURGERS", "Hamburgers", "hamburgers"], }, ], }, {
instructions: "Questions 15-18Choose the correct letter A-C", questions: [ { id:
"q15", questionNumber: 15, type: "mcq", text: "Why does the school say the food
will be better?", options: [ "A. They hired real chefs", "B. The food is more
expensive.", "C. They will make more kinds.", ], correctAnswer: "A", }, { id:
"q16", questionNumber: 16, type: "mcq", text: "When will the dining facilities
open and close?", options: [ "A. 6 am and 12 pm", "B. 6 am and 12 am", "C. 12 pm
and 6 pm", ], correctAnswer: "A", }, { id: "q17", questionNumber: 17, type:
"mcq", text: "What can students do if they are hungry in the Afternoon?",
options: [ "A. go out and buy food on the street", "B. wait till dinner time",
"C. go to the student store for snacks", ], correctAnswer: "C", }, { id: "q18",
questionNumber: 18, type: "mcq", text: "What must you do to eat in the dining
facilities if you are not a student?", options: [ "A. purchase a dinning
facility card", "B. purchase meals at the door", "C. purchase meals from other
students", ], correctAnswer: "B", }, ], }, { instructions: "Questions 19
- 20Choose TWO correct letters A-E.Which of the following are rules of the
dinning facilities?", type: "multiple_choice_multiple_answers", questions: [ {
id: "q19-20", questionNumber: "19-20", text: "", correctAnswer: ["A", "D"], },
], options: [ { id: "A", text: "Do not waste food." }, { id: "B", text: "You may
bring friends in to eat." }, { id: "C", text: "Bring your own plates and trays."
}, { id: "D", text: "Clean your own plates and trays." }, { id: "E", text:
"Don't litter." }, ], }, ], }, { id: "section-3", title: "Section 3",
questionGroups: [ { instructions: "Questions 21 - 26Choose the correct letter,
A, B or C.", questions: [ { id: "q21", questionNumber: 21, type: "mcq", text:
"What is Matthew considering a student work placement?", options: [ "A. He was
informed about an interesting vacancy.", "B. He needs some extra income.", "C.
He wants to try out a carrer option.", ], correctAnswer: "A", }, { id: "q22",
questionNumber: 22, type: "mcq", text: "Which part of the application process
did Linda find most interesting?", options: [ "A. The psychometric test.", "B.
The group activity.", "C. The individual task.", ], correctAnswer: "B", }, { id:
"q23", questionNumber: 23, type: "mcq", text: "During her work placement, Linda
helped find ways to", options: [ "A. speed up care assembly.", "B. process waste
materials.", "C. calculate the cost of design faults.", ], correctAnswer: "A",
}, { id: "q24", questionNumber: 24, type: "mcq", text: "Why did Linda find her
work placement tiring?", options: [ "A. She wasn't used to full-time work.", "B.
The working hours were very long.", "C. She felt she had to prove her worth.",
], correctAnswer: "C", }, { id: "q25", questionNumber: 25, type: "mcq", text:
"What did Linda's employers give her formal feedback on?", options: [ "A.
engineering ability", "B. organisational skills", "C. team working", ],
correctAnswer: "B", }, { id: "q26", questionNumber: 26, type: "mcq", text: "What
was the main benefit of Linda;s work placement?", options: [ "A. Improved
academic skills.", "B. An offer of work.", "C. The opportunity to use new
software.", ], correctAnswer: "B", }, ], }, { instructions: "Questions 27
- 30What does Linda think about the books on Matthew's reading list?Write the
correct letter, A - F, next to questions 27 - 30.", type: "matching", questions:
[{ id: "q27-30", questionNumber: 27 }], matchingOptions: { title: "Opinions", A:
"helpful illustrations", B: "easy to understand", C: "up-to-date", D:
"comprehensive", E: "specialised", F: "useful case studies", }, matchingItems: [
{ number: 27, text: "The Science of Materials", correctAnswer: "B", }, {
number: 28, text: "Materials Engineering", correctAnswer: "A", }, { number: 29,
text: "Engineering Basics", correctAnswer: "D", }, { number: 30, text:
"Evolution of Materials", correctAnswer: "C", }, ], }, ], }, { id: "section-4",
title: "Section 4", questionGroups: [ { instructions: "Questions 31 - 35Complete
the notes below.Write ONE WORD OR A NUMBER for each answer.RESTORATION ECOLOGY
PROGRAMME !!", questions: [ { id: "q31", questionNumber: 31, type:
"fill_in_the_blank", text: "Influence - Leopold's concept that land should be
viewed as a [GAP]", correctAnswer: ["COMMUNITY", "Community", "community"], }, {
id: "q32", questionNumber: 32, type: "fill_in_the_blank", text: "Practice -
Restore native plant [GAP] to original condition", correctAnswer:
["COMMUNITIES", "Communities", "communities"], }, { id: "q33",
questionNumber: 33, type: "fill_in_the_blank", text: "Curtis Prairie is the
[GAP] restored prairie in America.", correctAnswer: ["OLDEST", "Oldest",
"oldest"], }, { id: "q34", questionNumber: 34, type: "fill_in_the_blank", text:
"Edmond Moukala researched restoring ancient [GAP]", correctAnswer: ["WETLANDS",
"Wetlands", "wetlands"], }, { id: "q35", questionNumber: 35, type:
"fill_in_the_blank", text: "in the Congo based on the [GAP] in his homeland.
found in the soil of these former communities", correctAnswer: ["SEEDS",
"Seeds", "seeds"], }, ], }, { instructions: "Questions 36 - 40Complete the notes
below.Write ONE WORD OR A NUMBER for each answer.", questions: [ { id: "q36",
questionNumber: 36, type: "fill_in_the_blank", text: "Coursework in statistics,
theory, ecology and [GAP]", correctAnswer: ["PLANT", "Plant", "plant"], }, { id:
"q37", questionNumber: 37, type: "fill_in_the_blank", text: "identification
[GAP] help students gain practical experience.", correctAnswer: ["INTERNSHIPS",
"Internships", "internships"], }, { id: "q38", questionNumber: 38, type:
"fill_in_the_blank", text: "Has so far granted [GAP] Masters Degrees and 122
Ph.D.'s", correctAnswer: ["277"], }, { id: "q39", questionNumber: 39, type:
"fill_in_the_blank", text: "One former student is now the [GAP] of the World
Wide Fund for Nature,", correctAnswer: ["DIRECTOR", "Director", "director"], },
{ id: "q40", questionNumber: 40, type: "fill_in_the_blank", text: "while many
others continue to conduct [GAP] in their own university programmes.",
correctAnswer: ["RESEARCH", "Research", "research"], }, ], }, ], }, ], }, { id:
"listening-test-6", moduleId: "listening", title: "IELTS Listening Test 6",
description: "A full-length Academic Listening practice test.", duration: 40,
audioUrl: "Listening_tests_audio/Test 6/IELTS LISTENING PRACTICE 6.mp3",
sections: [ { id: "section-1", title: "Section 1", questionGroups: [ {
instructions: "Questions 1-7Choose the correct letter A, B or C.", questions: [
{ id: "q1", questionNumber: 1, type: "mcq", text: "The librarian says that
training always includes", options: [ "A. computer skills", "B. basic medical
skills", "C. interpersonal skills", ], correctAnswer: "B", }, { id: "q2",
questionNumber: 2, type: "mcq", text: "All library service volunteers have to",
options: [ "A. record their arrived and departure", "B. stay within staff only
sections", "C. wear a uniform", ], correctAnswer: "A", }, { id: "q3",
questionNumber: 3, type: "mcq", text: "The woman would be entitled to a
contribution towards the cost", options: [ "A. transport by mini bus", "B.
parking at the library", "C. public transport", ], correctAnswer: "C", }, { id:
"q4", questionNumber: 4, type: "mcq", text: "One recent library project
involved", options: [ "A. labelling historical objects", "B. protecting
historical photographs", "C. cataloging historical documents", ], correctAnswer:
"B", }, { id: "q5", questionNumber: 5, type: "mcq", text: "At present, the
library is looking for people to", options: [ "A. record books into CD", "B.
tell stories to children", "C. read books to the blind", ], correctAnswer: "A",
}, { id: "q6", questionNumber: 6, type: "mcq", text: "The woman says she is
interested in a project involving", options: [ "A. talking library books to
people in hospital", "B. delivering library books to people at home", "C.
driving the disabled to the library", ], correctAnswer: "A", }, { id: "q7",
questionNumber: 7, type: "mcq", text: "The woman agrees to work for", options: [
"A. two hours per week", "B. four hours per week", "C. six hours per week", ],
correctAnswer: "B", }, ], }, { instructions: "Questions 8 - 10Choose THREE
letters A-G.Which THREE of the following must be provided by all volunteers?",
type: "multiple_choice_multiple_answers", questions: [ { id: "q8-10",
questionNumber: "8-10", text: "", correctAnswer: ["B", "D", "G"], }, ], options:
[ { id: "A", text: "Civil convocation check" }, { id: "B", text: "signed copy of
commitment" }, { id: "C", text: "certificates to indicate qualifications" }, {
id: "D", text: "emergency contact information" }, { id: "E", text: "date of
birth" }, { id: "F", text: "signature of parent or guardian" }, { id: "G", text:
"referees" }, ], }, ], }, { id: "section-2", title: "Section 2", questionGroups:
[ { instructions: "Questions 11 - 16Label the flow-chart below.Choose SIX
answers from the box and write the correct letter, A-I, next to
questions 11-16.Process of Becoming a Member(A) sponsor (B) three cards (C)
balance (D) inquest (E) interview (F) deposit (G) mentor (H) tests (I) form",
questions: [ { id: "q11-16", type: "flow_chart", steps: [ { questionNumber: 11,
text: "Find an application [GAP]", correctAnswer: ["A", "a"], }, {
questionNumber: 12, text: "Submit the membership [GAP]", correctAnswer: ["I",
"i"], }, { questionNumber: 13, text: "accompanied by the relevant [GAP]",
correctAnswer: ["F", "f"], }, { questionNumber: 14, text: "If required, present
yourself for further [GAP]", correctAnswer: ["E", "e"], }, { questionNumber: 15,
text: "Settle remaining [GAP]", correctAnswer: ["C", "c"], }, {
questionNumber: 16, text: "To get a playing handicap, submit [GAP]",
correctAnswer: ["B", "b"], }, ], }, ], }, { instructions: "Questions 17-20Choose
the correct letter, A,B,C,D.N.B: You may use any letter more than once.A. Full
play rightsB. Play by invitationC. Restricted playD. Cannot play at weekends",
questions: [ { id: "q17-20-table", questionNumber: 17, type:
"table_fill_in_the_blank", tableData: [ ["Member Type", "Playing Rights
(competition)", "Costs"], ["Full ordinary member", "Full playing rights",
"10,000"],
["5-Day member", "17. [INPUT]", "5000"], ["Intermediate member", "18. [INPUT]",
"1800"],
["Junior member", "19. [INPUT]", "1800"], ["Senior member", "Full playing
rights", "1800"],
["Overseas member", "20. [INPUT]", "1800"], ], correctAnswer: { q17: ["D", "d"],
q18: ["B", "b"], q19: ["C", "c"], q20: ["B", "b"], }, }, ], }, ], }, { id:
"section-3", title: "Section 3", questionGroups: [ { instructions: "Questions 21
- 22Choose TWO letters, A - E.What TWO things do Brad and Helen agree to say
about listening in groups?", type: "multiple_choice_multiple_answers",
questions: [ { id: "q21-22", questionNumber: "21-22", text: "", correctAnswer:
["B", "E"], }, ], options: [ { id: "A", text: "Listening skills are often
overlooked in business training.", }, { id: "B", text: "Learning to listen well
is a skill that's easy for most people to learn.", }, { id: "C", text: "It's
sometimes acceptable to argue against speakers.", }, { id: "D", text: "Body
language is very important when listening.", }, { id: "E", text: "Listeners
should avoid interrupting speakers.", }, ], }, { instructions: "Questions 23
- 24Choose TWO letters, A-E.What TWO things does the article say about
goal-setting?", type: "multiple_choice_multiple_answers", questions: [ { id:
"q23-24", questionNumber: "23-24", text: "", correctAnswer: ["B", "E"], }, ],
options: [ { id: "A", text: "Meeting should start with a clear statement of
goals.", }, { id: "B", text: "It's important for each individual's goals to be
explained.", }, { id: "C", text: "Everybody in the group should have the same
goals.", }, { id: "D", text: "Goals should be a mix of the realistic and the
ideal.", }, { id: "E", text: "Goals must always be achievable within a set
time.", }, ], }, { instructions: "Questions 25-26Choose TWO letters, A-E.What
TWO things do Brad and Helen agree weak points in the article's section on
conflict resolution?", type: "multiple_choice_multiple_answers", questions: [ {
id: "q25-26", questionNumber: "25-26", text: "", correctAnswer: ["B", "C"], },
], options: [ { id: "A", text: "It doesn't explore the topic in enough detail.",
}, { id: "B", text: "It only discusses conservative views." }, { id: "C", text:
"It says nothing about the potential value of conflict.", }, { id: "D", text:
"It talks too much about winners and losers." }, { id: "E", text: "It doesn't
provide definitions of key terms.", }, ], }, { instructions: "Questions 27
- 30What actions do Brad and Helen agree to do regarding the following
preparation tasks?Choose FOUR answers from the box and write the correct letter,
A-F, next to the questions.", type: "matching", questions: [ { id: "q27-30",
questionNumber: 27, text: "", correctAnswer: "", }, ], matchingOptions: { title:
"Actions", A: "Contact the tutor for clarification.", B: "Check the assignment
specifications.", C: "Leave it unit the last task.", D: "Ask a course-mate to
help.", E: "Find information on the Internet.", F: "Look through handbooks.", },
matchingItems: [ { number: 27, text: "Preparing the powerpoint", correctAnswer:
"C", }, { number: 28, text: "Using direct quotations", correctAnswer: "B", }, {
number: 29, text: "Creating a handout", correctAnswer: "D" }, { number: 30,
text: "Drawing up a bibliography", correctAnswer: "F", }, ], }, ], }, { id:
"section-4", title: "Section 4", questionGroups: [ { instructions: "Questions 31
- 40Complete the notes below.Write ONE WORD ONLY for each answer.British
customs", questions: [ { id: "q31", questionNumber: 31, type:
"fill_in_the_blank", text: "In Britain, there is a common saying, "An
Englishman's home is his [GAP].", correctAnswer: ["CASTLE", "Castle", "castle"],
}, { id: "q32", questionNumber: 32, type: "fill_in_the_blank", text: "It's
important to cat thoughtfully if you are living in a British [GAP].",
correctAnswer: ["HOME", "Home", "home"], }, { id: "q33", questionNumber: 33,
type: "fill_in_the_blank", text: "There are a few British [GAP].",
correctAnswer: ["CUSTOMS", "Customs", "customs"], }, { id: "q34",
questionNumber: 34, type: "fill_in_the_blank", text: "You should be [GAP] for
meals.", correctAnswer: ["PUNCTUAL", "Punctual", "punctual"], }, { id: "q35",
questionNumber: 35, type: "fill_in_the_blank", text: "Make your own bed keep you
room clean and [GAP].", correctAnswer: ["TIDY", "Tidy", "tidy"], }, { id: "q36",
questionNumber: 36, type: "fill_in_the_blank", text: "When you stay with a
British family for several days you should give a small [GAP] when you leave.",
correctAnswer: ["PRESENT", "Present", "present"], }, { id: "q37",
questionNumber: 37, type: "fill_in_the_blank", text: "British people normally
wait unit [GAP] has got their food before they start eating.", correctAnswer:
["EVERYONE", "Everyone", "everyone"], }, { id: "q38", questionNumber: 38, type:
"fill_in_the_blank", text: "You'd better use their family [GAP] and title if you
are unsure how to call them.", correctAnswer: ["NAME", "Name", "name"], }, { id:
"q39", questionNumber: 39, type: "fill_in_the_blank", text: "At a formal meal,
the host won't [GAP] expect guests to help with household.", correctAnswer:
["NORMALLY", "Normally", "normally"], }, { id: "q40", questionNumber: 40, type:
"fill_in_the_blank", text: "[GAP]", correctAnswer: ["CHORES", "Chores",
"chores"], }, ], }, ], }, ], }, { id: "listening-test-7", moduleId: "listening",
title: "IELTS Listening Test 7", description: "A full-length Academic Listening
practice test.", duration: 40, audioUrl: "Listening_tests_audio/Test 7/IELTS
LISTENING Practice Test 7.mp3", sections: [ { id: "section-1", title:
"Section 1", questionGroups: [ { instructions: "Questions 1-6Complete the form
below.Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.Gym
Membership Form", questions: [ { id: "q1", questionNumber: 1, type:
"fill_in_the_blank", text: "Full name: Oliver [GAP]", correctAnswer: ["BENNETT",
"Bennett", "bennett"], }, { id: "q2", questionNumber: 2, type:
"fill_in_the_blank", text: "Membership start date: [GAP] October",
correctAnswer: ["3RD", "3Rd", "3rd", "THIRD", "Third", "third", "3"], }, { id:
"q3", questionNumber: 3, type: "fill_in_the_blank", text: "Duration: Until end
of [GAP]", correctAnswer: ["JULY", "July", "july"], }, { id: "q4",
questionNumber: 4, type: "fill_in_the_blank", text: "Membership type: [GAP]
scheme", correctAnswer: ["STUDENT", "Student", "student"], }, { id: "q5",
questionNumber: 5, type: "fill_in_the_blank", text: "Branch: Katherine, [GAP]
Street", correctAnswer: ["KING", "King", "king"], }, { id: "q6",
questionNumber: 6, type: "fill_in_the_blank", text: "Distance from campus: [GAP]
minutes", correctAnswer: ["5", "FIVE", "Five", "five"], }, ], }, { instructions:
"Questions 7-10Complete the form below.Write NO MORE THAN TWO WORDS AND/OR A
NUMBER for each answer.Gym Membership Form", questions: [ { id: "q7",
questionNumber: 7, type: "fill_in_the_blank", text: "Monthly fee: £ [GAP]",
correctAnswer: ["35"], }, { id: "q8", questionNumber: 8, type:
"fill_in_the_blank", text: "Facilities include: pool and [GAP]", correctAnswer:
["SAUNA", "Sauna", "sauna"], }, { id: "q9", questionNumber: 9, type:
"fill_in_the_blank", text: "Most popular class: [GAP]", correctAnswer:
["SPINNING", "Spinning", "spinning"], }, { id: "q10", questionNumber: 10, type:
"fill_in_the_blank", text: "Email: oliver.bennett21@ [GAP]", correctAnswer:
["GMAIL.COM", "Gmail.Com", "gmail.com"], }, ], }, ], }, { id: "section-2",
title: "Section 2", questionGroups: [ { instructions: "Questions 11-15Choose the
correct letter A, B, or C.", questions: [ { id: "q11", questionNumber: 11, type:
"mcq", text: "The main aim of the Local History Trail Project is to", options: [
"A. attract international tourists.", "B. build pride among residents.", "C.
increase ticket sales for museums.", ], correctAnswer: "B", }, { id: "q12",
questionNumber: 12, type: "mcq", text: "Which is NOT mentioned as a possible
volunteer role?", options: [ "A. Leading groups on guided walks.", "B. Assisting
with archival research.", "C. Managing financial donations.", ], correctAnswer:
"C", }, { id: "q13", questionNumber: 13, type: "mcq", text: "During training,
new volunteers will", options: [ "A. observe experienced guides in action.", "B.
design their own historical trails.", "C. practice advanced storytelling
techniques.", ], correctAnswer: "A", }, { id: "q14", questionNumber: 14, type:
"mcq", text: "What personal item must volunteers provide?", options: ["A. Maps",
"B. Footwear", "C. Laminated sheets"], correctAnswer: "B", }, { id: "q15",
questionNumber: 15, type: "mcq", text: "What is expected of volunteers regarding
language ability?", options: [ "A. They must be fluent in several languages.",
"B. They should be comfortable communicating in English.", "C. They are required
to translate tours.", ], correctAnswer: "B", }, ], }, { instructions:
"Questions 16-20Match each item with the correct description.Write the correct
letter A-E next to Questions 16-20.", type: "matching", questions: [ { id:
"l7-q16-20", questionNumber: 16, text: "", correctAnswer: "", }, ],
matchingOptions: { title: "Descriptions", A: "Provided to ensure groups are
visible during walks.", B: "A ceremony where efforts are recognised by the
community.", C: "Basic skills for dealing with minor health issues.", D:
"Written confirmation that volunteers will follow rules.", E: "Regular level of
involvement required from helpers.", }, matchingItems: [ { number: 16, text: "At
least one tour every fortnight", correctAnswer: "E", }, { number: 17, text:
"Participation agreement", correctAnswer: "D", }, { number: 18, text:
"High-visibility vests", correctAnswer: "A", }, { number: 19, text: "First-aid
introduction", correctAnswer: "C", }, { number: 20, text: "Public
acknowledgement", correctAnswer: "B", }, ], }, ], }, { id: "section-3", title:
"Section 3", questionGroups: [ { instructions: "Questions 21-26Choose correct,
letter A, B, Or C.", questions: [ { id: "q21", questionNumber: 21, type: "mcq",
text: "What issue did Dr. Bennett identify in Aisha's draft?", options: [ "A. It
lacked sufficient background context", "B. It attempted to cover too many
areas", "C. It focused too narrowly on technology", ], correctAnswer: "B", }, {
id: "q22", questionNumber: 22, type: "mcq", text: "Why should Aisha avoid
emphasising lecturers' use of technology?", options: [ "A. It would turn the
project into a teaching methods study", "B. It requires access she may not
have", "C. It would duplicate her survey material", ], correctAnswer: "A", }, {
id: "q23", questionNumber: 23, type: "mcq", text: "How should dropout rates be
handled?", options: [ "A. Omit them entirely", "B. Link them carefully to
motivation and persistence", "C. Replace them with statistical predictions", ],
correctAnswer: "B", }, { id: "q24", questionNumber: 24, type: "mcq", text: "What
advice did Dr. Bennett give about methodology?", options: [ "A. Add more methods
for credibility", "B. Exclude surveys and interviews", "C. Limit the study to
two methods", ], correctAnswer: "C", }, { id: "q25", questionNumber: 25, type:
"mcq", text: "Why should Aisha avoid relying on just one U.S. study?", options:
[ "A. It was not peer-reviewed", "B. It may not apply in her context", "C. It
had flawed data collection", ], correctAnswer: "B", }, { id: "q26",
questionNumber: 26, type: "mcq", text: "What concern did Dr. Bennett raise about
references?", options: [ "A. They are incomplete", "B. They are outdated", "C.
They are irrelevant", ], correctAnswer: "B", }, ], }, { instructions:
"Questions 27-30Match each piece of advice from Dr. Bennett with the focus
area.Write the correct letter, A-E, next to Questions 27-30.", type: "matching",
questions: [ { id: "l7-q27-30", questionNumber: 27, text: "", correctAnswer: "",
}, ], matchingOptions: { title: "Advice", A: "Conclusion", B: "Presentation of
results", C: "Timeline", D: "Literature review", E: "Language accuracy", },
matchingItems: [ { number: 27, text: "Reduce data collection time",
correctAnswer: "C", }, { number: 28, text: "Use charts and graphs",
correctAnswer: "B", }, { number: 29, text: "Avoid sweeping statements",
correctAnswer: "A", }, { number: 30, text: "Proofread carefully", correctAnswer:
"E", }, ], }, ], }, { id: "section-4", title: "Section 4", questionGroups: [ {
instructions: "Questions 31-40Complete the sentences below.Write NO MORE THAN
TWO WORDS AND/OR A NUMBER for each answer.Development of Medical Innovations",
questions: [ { id: "q31", questionNumber: 31, type: "fill_in_the_blank", text:
"One of the earliest medical breakthroughs was the practice of [GAP]",
correctAnswer: ["HANDWASHING", "Handwashing", "handwashing"], }, { id: "q32",
questionNumber: 32, type: "fill_in_the_blank", text: "Semmelweis recommended
cleaning hands with a [GAP] solution.", correctAnswer: ["CHLORINE", "Chlorine",
"chlorine"], }, { id: "q33", questionNumber: 33, type: "fill_in_the_blank",
text: "The first public demonstration of pain relief in surgery used [GAP]",
correctAnswer: ["COLOURLESS LIQUID", "Colourless Liquid", "colourless liquid"],
}, { id: "q34", questionNumber: 34, type: "fill_in_the_blank", text: "Joseph
Lister used [GAP] to sterilise equipment and wounds.", correctAnswer: ["CARBOLIC
ACID", "Carbolic Acid", "carbolic acid"], }, { id: "q35", questionNumber: 35,
type: "fill_in_the_blank", text: "Fleming discovered penicillin after mould
infected a [GAP]", correctAnswer: ["CULTURE PLATE", "Culture Plate", "culture
plate"], }, { id: "q36", questionNumber: 36, type: "fill_in_the_blank", text:
"in 1980 was a public health victory. The formal eradication of [GAP]",
correctAnswer: ["SMALLPOX", "Smallpox", "smallpox"], }, { id: "q37",
questionNumber: 37, type: "fill_in_the_blank", text: "MRI scans provide clear
images of [GAP]", correctAnswer: ["SOFT TISSUE", "Soft Tissue", "soft tissue"],
}, { id: "q38", questionNumber: 38, type: "fill_in_the_blank", text: "In 1954,
the first [GAP] transplant was performed successfully.", correctAnswer:
["KIDNEY", "Kidney", "kidney"], }, { id: "q39", questionNumber: 39, type:
"fill_in_the_blank", text: "Once production [GAP] were improved, insulin therapy
became common.", correctAnswer: ["METHODS", "Methods", "methods"], }, { id:
"q40", questionNumber: 40, type: "fill_in_the_blank", text: "In future, medicine
may be tailored using individual [GAP] profiles.", correctAnswer: ["GENETIC",
"Genetic", "genetic"], }, ], }, ], }, ], }, { id: "listening-test-8", moduleId:
"listening", title: "IELTS Listening Test 8", description: "A full-length
Academic Listening practice test.", duration: 40, audioUrl:
"Listening_tests_audio/Test 8/IELTS Listening Practice Test 8.mp3", sections: [
{ id: "section-1", title: "Section 1", questionGroups: [ { instructions:
"Questions 1-5Complete the notes below.Write NO MORE THAN TWO WORDS AND/OR A
NUMBER for each answer.", questions: [ { id: "q1", questionNumber: 1, type:
"fill_in_the_blank", text: "Express train departs at [GAP] from platform 4.",
correctAnswer: ["8:10"], }, { id: "q2", questionNumber: 2, type:
"fill_in_the_blank", text: "Closest railway station is [GAP].", correctAnswer:
["CENTRAL STATION", "Central Station", "central station"], }, { id: "q3",
questionNumber: 3, type: "fill_in_the_blank", text: "Bus number [GAP] goes to
Maple Avenue Underground Station.", correctAnswer: ["517"], }, { id: "q4",
questionNumber: 4, type: "fill_in_the_blank", text: "The direct walk to the
station takes [GAP] minutes.", correctAnswer: ["6", "SIX", "Six", "six"], }, {
id: "q5", questionNumber: 5, type: "fill_in_the_blank", text: "Trains run every
[GAP] minutes.", correctAnswer: ["7", "SEVEN", "Seven", "seven"], }, ], }, {
instructions: "Questions 6-10Complete the table below.Write No more than one
word or a number for each answer.", questions: [ { id: "q6-10-table",
questionNumber: 6, type: "table_fill_in_the_blank", tableData: [ ["Means of
transport", "Normal fare", "Discounted fare"], ["Bus", "2.20", "6. [INPUT]"],
["Train (morning peak)", "12.50", "7. [INPUT]"], ["Train (off-peak hour)",
"12.50", "8. [INPUT]"],
["Regular Harbour Line ferry trip", "5.80", "9. [INPUT]"], ["Full-day
sightseeing boat trip", "$10.00", "10. [INPUT]"], ], correctAnswer: { q6:
["1.50"], q7: ["NO DISCOUNT", "No Discount", "no discount"], q8: ["6.40"], q9:
["4.60"], q10: ["10.78", "78"], }, }, ], }, ], }, { id: "section-2", title:
"Section 2", questionGroups: [ { instructions: "Questions 11-16Complete the
table below.Write No more than two words for each answer.", questions: [ { id:
"q11-16-table", questionNumber: 11, type: "table_fill_in_the_blank", tableData:
[ ["Services offered", "For individuals", "For groups"], [ "Online support
sessions", "Write down their concerns\n\n11. [INPUT] at your own pace", "", ], [
"In-person one-to-one appointments", "Speak face-to-face at an\n\n12. [INPUT]",
"", ], [ "Group discussions", "", "Understand how you relate\n\n13.
[INPUT]\n\nCommit to 14. [INPUT] personal growth", ], [ "Self-guided materials",
"Explore challenges in more depth 15. [INPUT] at any time. links to various
resources.", "", ], [ "Targeted skills sessions", "", "Learn about similar
topics develop useful 16. [INPUT]", ], ], correctAnswer: { q11: ["REFLECT",
"Reflect", "reflect"], q12: ["ARRANGED TIME", "Arranged Time", "arranged time"],
q13: ["OTHER PEOPLE", "Other People", "other people"], q14: ["LONG-TERM",
"Long-Term", "long-term", "LONG TERM", "Long Term", "long term", "LONG -TERM",
"Long -Term", "long -term"], q15: ["PRACTICAL STRATEGIES", "Practical
Strategies", "practical strategies"], q16: ["COPING TECHNIQUES", "Coping
Techniques", "coping techniques"], }, }, ], }, { instructions:
"Questions 17-20Which adviser should you see?Write the correct letter, A, B or
C, next to questions 17-20.", type: "matching", questions: [ { id: "l8-q17-20",
questionNumber: 17, }, ], matchingOptions: { title: "", A: "Harriet Lewis", B:
"Jordan Miles", C: "Paula Grant", }, matchingItems: [ { number: 17, text: "if
you want to speak to someone without arranging it first", correctAnswer: "B", },
{ number: 18, text: "if you are in your first year and need an introduction to
the support process", correctAnswer: "A", }, { number: 19, text: "if you are
finding it hard to cope with deadlines or anxiety", correctAnswer: "C", }, {
number: 20, text: "if you are not able to see a professional during normal
office", correctAnswer: "A", }, ], }, ], }, { id: "section-3", title:
"Section 3", questionGroups: [ { instructions: "Questions 21-26Complete the
notes below.Write NO MORE THAN THREE WORDS for each answer.HOW TO WRITE A
HISTORY RESEARCH REPORTIntroductory Points", questions: [ { id: "q21",
questionNumber: 21, type: "fill_in_the_blank", text: "The most important feature
of a strong report is [GAP].", correctAnswer: ["CLARITY", "Clarity", "clarity"],
}, { id: "q22", questionNumber: 22, type: "fill_in_the_blank", text: "Do not
write a report that is only a repetition of [GAP] or other people's
conclusions.", correctAnswer: ["STATISTICS", "Statistics", "statistics"], }, {
id: "q23", questionNumber: 23, type: "fill_in_the_blank", text: "The second key
factor is [GAP].", correctAnswer: ["ORGANISATION", "Organisation",
"organisation"], }, { id: "q24", questionNumber: 24, type: "fill_in_the_blank",
text: "Write [GAP] and arguments before starting.", correctAnswer: ["ESSENTIAL
POINTS", "Essential Points", "essential points"], }, { id: "q25",
questionNumber: 25, type: "fill_in_the_blank", text: "Consider the [GAP] before
you start writing.", correctAnswer: ["BIGGER PICTURE", "Bigger Picture", "bigger
picture"], }, { id: "q26", questionNumber: 26, type: "fill_in_the_blank", text:
"Know [GAP]. avoid the error of writing solely for yourself.", correctAnswer:
["INTENDED AUDIENCE", "Intended Audience", "intended audience"], }, ], }, {
instructions: "Questions 27-30Complete the notes below.Write NO MORE THAN THREE
WORDS for each answer.HOW TO WRITE A HISTORY RESEARCH REPORTReport Structure",
questions: [ { id: "q27", questionNumber: 27, type: "fill_in_the_blank", text:
"The maximum length of a single section is [GAP].", correctAnswer: ["A4 PAGE",
"A4 Page", "a4 page"], }, { id: "q28", questionNumber: 28, type:
"fill_in_the_blank", text: "Flow\n\nEach point should [GAP] from the one before
it.", correctAnswer: ["FOLLOW NATURALLY", "Follow Naturally", "follow
naturally"], }, { id: "q29", questionNumber: 29, type: "fill_in_the_blank",
text: "Use [GAP] and expressions to link sections where appropriate.",
correctAnswer: ["CONNECTIVE WORDS", "Connective Words", "connective words"], },
{ id: "q30", questionNumber: 30, type: "fill_in_the_blank", text: "Argument\n\nA
good History report must present a clear argument. It should not be a [GAP] but
should explore multiple viewpoints.", correctAnswer: ["ONE-SIDED MONOLOGUE",
"One-Sided Monologue", "one-sided monologue", "ONE SIDED MONOLOGUE", "One Sided
Monologue", "one sided monologue", "ONE -SIDED MONOLOGUE", "One -Sided
Monologue", "one -sided monologue"], }, ], }, ], }, { id: "section-4", title:
"Section 4", questionGroups: [ { instructions: "Questions 31-35Complete the
sentence given below.Write NO MORE THAN THREE WORDS.The influence of the blue
colour", questions: [ { id: "q31", questionNumber: 31, type:
"fill_in_the_blank", text: "Blue is a vivid colour. It has a number of powerful
[GAP].", correctAnswer: ["ASSOCIATIONS", "Associations", "associations"], }, {
id: "q32", questionNumber: 32, type: "fill_in_the_blank", text: "It is often
used internationally on signs that provide [GAP].", correctAnswer: ["GUIDANCE OR
INFORMATION", "Guidance Or Information", "guidance or information"], }, { id:
"q33", questionNumber: 33, type: "fill_in_the_blank", text: "Our skin can turn
[GAP] when we are very cold.", correctAnswer: ["BLUE", "Blue", "blue"], }, { id:
"q34", questionNumber: 34, type: "fill_in_the_blank", text: "When [GAP] our skin
may turn blue due to fear.", correctAnswer: ["FRIGHTENED", "Frightened",
"frightened"], }, { id: "q35", questionNumber: 35, type: "fill_in_the_blank",
text: "Traditional blue is the shade most often linked with loyalty; the
best-known example is its use in [GAP].", correctAnswer: ["POLICE UNIFORMS",
"Police Uniforms", "police uniforms"], }, ], }, { instructions:
"Questions 36-40Choose the correct letter, A, B, or C.", questions: [ { id:
"q36", questionNumber: 36, type: "mcq", text: "According to colour science,
wearing blue clothing can influence", options: [ "A) our dietary habits.", "B)
our physical state.", "C) our driving ability.", ], correctAnswer: "B", }, { id:
"q37", questionNumber: 37, type: "mcq", text: "A large number of non-primate
animals", options: [ "A) cannot tell the difference between blue and yellow.",
"B) evolved special eye receptors.", "C) can easily find blue berries.", ],
correctAnswer: "A", }, { id: "q38", questionNumber: 38, type: "mcq", text: "The
research conducted by Eleanor Price and Martin Cole suggested that humans might
respond to blue", options: [ "A) with feelings of composure and authority.", "B)
in the same way as vervet monkeys avoid fights.", "C) only in racquet sports.",
], correctAnswer: "A", }, { id: "q39", questionNumber: 39, type: "mcq", text:
"Which of the following is NOT mentioned as a possible reason for the effect of
wearing blue in sport?", options: [ "A) Wearing blue increases an athlete's
confidence and focus.", "B) Wearing blue makes opponents less aggressive.", "C)
Wearing blue improves lung capacity.", ], correctAnswer: "C", }, { id: "q40",
questionNumber: 40, type: "mcq", text: "Colour science is", options: [ "A) still
in its early stages.", "B) a long-established discipline.", "C) known for
disproving traditional beliefs.", ], correctAnswer: "A", }, ], }, ], }, ], }, {
id: "listening-test-9", moduleId: "listening", title: "IELTS Listening Test 9",
description: "A full-length Academic Listening practice test.", duration: 40,
audioUrl: "Listening_tests_audio/Test 9/IELTS Listening Practice Test 9.mp3",
sections: [ { id: "section-1", title: "Section 1", questionGroups: [ {
instructions: "Questions 1-5Complete the sentences below.Write NO MORE THAN
THREE WORDS AND/OR A NUMBER for each answer.Survey on: Leisure Centres",
questions: [ { id: "q1", questionNumber: 1, type: "fill_in_the_blank", text:
"Age: [GAP]", correctAnswer: ["63"], }, { id: "q2", questionNumber: 2, type:
"fill_in_the_blank", text: "Postcode: [GAP]", correctAnswer: ["GL49PD",
"Gl49Pd", "gl49pd"], }, { id: "q3", questionNumber: 3, type:
"fill_in_the_blank", text: "COMPUTER FACILITIES ALREADY USED Where?: [GAP]",
correctAnswer: ["COMMUNITY LIBRARY", "Community Library", "community library"],
}, { id: "q4", questionNumber: 4, type: "fill_in_the_blank", text: "SPORTS
FACILITIES ALREADY USED Where?: [GAP]", correctAnswer: ["POOL", "Pool", "pool"],
}, { id: "q5", questionNumber: 5, type: "fill_in_the_blank", text: "EDUCATION
FACILITIES ALREADY USED Where?: [GAP]", correctAnswer: ["ADULT LEARNING CENTRE",
"Adult Learning Centre", "adult learning centre"], }, ], }, { instructions:
"Questions 6-10Complete the sentences below.Write NO MORE THAN THREE WORDS
AND/OR A NUMBER for each answer.SUGGESTIONS FOR IMPROVEMENTS AT LEISURE CENTRE",
questions: [ { id: "q6", questionNumber: 6, type: "fill_in_the_blank", text:
"New sports: [GAP]", correctAnswer: ["YOGA AND TENNIS", "Yoga And Tennis", "yoga
and tennis"], }, { id: "q7", questionNumber: 7, type: "fill_in_the_blank", text:
"Classes organised especially for: [GAP]", correctAnswer: ["OLDER ADULTS",
"Older Adults", "older adults"], }, { id: "q8", questionNumber: 8, type:
"fill_in_the_blank", text: "Type of education classes suggested: [GAP]",
correctAnswer: ["DANCING AND POTTERY", "Dancing And Pottery", "dancing and
pottery"], }, { id: "q9", questionNumber: 9, type: "fill_in_the_blank", text:
"Willing to pay: £ [GAP] per class", correctAnswer: ["3", "THREE", "Three",
"three"], }, { id: "q10", questionNumber: 10, type: "fill_in_the_blank", text:
"Likely frequency of visits if changes made: [GAP]", correctAnswer: ["FOUR
TIMES", "Four Times", "four times"], }, ], }, ], }, { id: "section-2", title:
"Section 2", questionGroups: [ { instructions: "Questions 11-15Choose the
correct letter, A, B or C.", questions: [ { id: "q11", questionNumber: 11, type:
"mcq", text: "The speaker describes Whitworth Park as", options: [ "A) a fairly
modest open space.", "B) a very large green area.", "C) a small garden in the
city.", ], correctAnswer: "B", }, { id: "q12", questionNumber: 12, type: "mcq",
text: "According to the speaker, Oxford Road Station is", options: [ "A) among
the busiest in Manchester.", "B) the newest in the city.", "C) the smallest
station on the line.", ], correctAnswer: "A", }, { id: "q13",
questionNumber: 13, type: "mcq", text: "The speaker suggests that after the
walk, people might want to", options: [ "A) return to look around the shops and
cafés.", "B) avoid Oxford Road because it is noisy.", "C) go straight home as
the area is not lively.", ], correctAnswer: "A", }, { id: "q14",
questionNumber: 14, type: "mcq", text: "The houses in Whitworth Gardens are
located", options: [ "A) beside a peaceful pond.", "B) on the opposite side of
the park.", "C) at the very edge of the city.", ], correctAnswer: "A", }, { id:
"q15", questionNumber: 15, type: "mcq", text: "The speaker advises removing
headphones to", options: [ "A) enjoy the natural sounds in the park.", "B) make
sure you don’t miss the right path.", "C) experience the unusual silence in the
park.", ], correctAnswer: "A", }, ], }, { instructions: "Questions 16-20Which
activity can be done at each of the following locations in Whitworth Park?Choose
FIVE answers from the list and write the correct letter, A-G, next to
questions 16-20.", type: "matching", questions: [ { id: "l9-q16-20",
questionNumber: 16, }, ], matchingOptions: { title: "Activities", A: "enjoy a
picnic", B: "for hunting", C: "see views of Manchester", D: "for boating and
fishing", E: "attend concerts", F: "have light refreshments", G: "watch
documentaries", }, matchingItems: [ { number: 16, text: "Whitworth Gallery",
correctAnswer: "F", }, { number: 17, text: "the sloping fields", correctAnswer:
"A", }, { number: 18, text: "the outdoor performance area", correctAnswer: "E",
}, { number: 19, text: "the ponds", correctAnswer: "D", }, { number: 20, text:
"Greenhill Point", correctAnswer: "C", }, ], }, ], }, { id: "section-3", title:
"Section 3", questionGroups: [ { instructions: "Questions 21-25How do the
speakers describe the eco-friendly city planning ideas?Choose FIVE descriptions
from the box and write the correct letter, A-G, next to questions 21-25.", type:
"matching", questions: [ { id: "l9-q21-25", questionNumber: 21, }, ],
matchingOptions: { title: "Descriptions", A: "no objections from the public", B:
"too costly", C: "not realistic in practice", D: "caused noise or disruption",
E: "oversimplified", F: "successful", G: "very safe", }, matchingItems: [ {
number: 21, text: "green corridor", correctAnswer: "A", }, { number: 22, text:
"decentralization", correctAnswer: "C", }, { number: 23, text: "new satellite
towns", correctAnswer: "B", }, { number: 24, text: "brownfield redevelopments",
correctAnswer: "A", }, { number: 25, text: "pedestrianization of central
districts", correctAnswer: "D", }, ], }, { instructions: "Questions 26-28Choose
the correct letter, A, B or C.", questions: [ { id: "q26", questionNumber: 26,
type: "mcq", text: "Which part of the project is Amy struggling with the most?",
options: [ "A) Understanding how the data is presented", "B) Having enough
reliable sources", "C) Deciding which figures to include", ], correctAnswer:
"C", }, { id: "q27", questionNumber: 27, type: "mcq", text: "What was the main
reason Gothenburg succeeded in its development?", options: [ "A) Prompt action
by national authorities", "B) Incorporating feedback from residents", "C)
Relying on external consultants", ], correctAnswer: "B", }, { id: "q28",
questionNumber: 28, type: "mcq", text: "Why is Gothenburg's public transport
system so effective?", options: [ "A) It provides reduced fares for vulnerable
groups", "B) Cyclists are allowed to use tram and bus lanes", "C) Car ownership
levels are comparatively low", ], correctAnswer: "A", }, ], }, { instructions:
"Questions 29-30Choose TWO letters, A-E.Which TWO areas does the tutor recommend
Amy should focus more on?", type: "multiple_choice_multiple_answers", questions:
[ { id: "q29-30", questionNumber: "29-30", text: "", correctAnswer: ["C", "D"],
}, ], options: [ { id: "A", text: "Car parking facilities" }, { id: "B", text:
"Job creation programmes" }, { id: "C", text: "Pedestrian-only districts" }, {
id: "D", text: "Waste recycling strategy" }, { id: "E", text: "Suburban
commuting distances" }, ], }, ], }, { id: "section-4", title: "Section 4",
questionGroups: [ { instructions: "Questions 31-40Complete the notes below.Write
NO MORE THAN TWO WORDS for each answer.ECONOMICS COURSE GUIDELINESDuring
Lectures Students:", questions: [ { id: "q31", questionNumber: 31, type:
"fill_in_the_blank", text: "will receive information about economics and the
[GAP] to focus on.", correctAnswer: ["MAIN AREAS", "Main Areas", "main areas"],
}, { id: "q32", questionNumber: 32, type: "fill_in_the_blank", text: "will be
given a structure for independent study.\nwill have an opportunity to be taught
by an [GAP] in the field.", correctAnswer: ["EXPERT", "Expert", "expert"], }, {
id: "q33", questionNumber: 33, type: "fill_in_the_blank", text: "will take part
in the learning culture in [GAP].", correctAnswer: ["UNIVERSITY EDUCATION",
"University Education", "university education"], }, { id: "q34",
questionNumber: 34, type: "fill_in_the_blank", text: "Common problems students
have with techniques used in lectures.\nmay not develop deeper [GAP]: no
immediate clarification", correctAnswer: ["UNDERSTANDING", "Understanding",
"understanding"], }, { id: "q35", questionNumber: 35, type: "fill_in_the_blank",
text: "modern methods help improve [GAP] more than lectures.", correctAnswer:
["OUTCOMES", "Outcomes", "outcomes"], }, { id: "q36", questionNumber: 36, type:
"fill_in_the_blank", text: "How to avoid problems and make learning
easier\nleave time to read [GAP] on the booklist.", correctAnswer: ["TITLES",
"Titles", "titles"], }, { id: "q37", questionNumber: 37, type:
"fill_in_the_blank", text: "test yourself with quizzes, if you have had a [GAP]
review earlier principles", correctAnswer: ["YEAR OFF", "Year Off", "year off"],
}, { id: "q38", questionNumber: 38, type: "fill_in_the_blank", text: "use the
web to do extra [GAP]", correctAnswer: ["BACKGROUND STUDY", "Background Study",
"background study"], }, { id: "q39", questionNumber: 39, type:
"fill_in_the_blank", text: "check the sources of information on the web are
[GAP]", correctAnswer: ["TRUSTWORTHY", "Trustworthy", "trustworthy"], }, { id:
"q40", questionNumber: 40, type: "fill_in_the_blank", text: "[GAP] with your
classmates", correctAnswer: ["TALK", "Talk", "talk"], }, ], }, ], }, ], }, { id:
"listening-test-10", moduleId: "listening", title: "IELTS Listening Test 10",
description: "A full-length Academic Listening practice test.", duration: 40,
audioUrl: "Listening_tests_audio/Test 10/IELTS Listening Practice Test 10.mp3",
sections: [ { id: "section-1", title: "Section 1", questionGroups: [ {
instructions: "Questions 1-3Complete the form below.Write ONE WORD AND/OR A
NUMBER for each answer.Complaint to the airline", questions: [ { id: "q1",
questionNumber: 1, type: "fill_in_the_blank", text: "Address: [GAP] Lane,
Carlisle", correctAnswer: ["OAKBRIDGE", "Oakbridge", "oakbridge"], }, { id:
"q2", questionNumber: 2, type: "fill_in_the_blank", text: "Postcode: [GAP]",
correctAnswer: ["BT904PK", "Bt904Pk", "bt904pk"], }, { id: "q3",
questionNumber: 3, type: "fill_in_the_blank", text: "Telephone: work: [GAP],
home: 681474", correctAnswer: ["643952"], }, ], }, { instructions:
"Questions 4-6Choose the correct letter, A, B or C.", questions: [ { id: "q4",
questionNumber: 4, type: "mcq", text: "What issue did the man face during the
flight?", options: [ "A) Not enough legroom", "B) Poor seating location", "C)
Broken air system", ], correctAnswer: "C", }, { id: "q5", questionNumber: 5,
type: "mcq", text: "What does the man say about the meal during the flight?",
options: [ "A) Too small in portion", "B) Tasteless", "C) Too expensive", ],
correctAnswer: "A", }, { id: "q6", questionNumber: 6, type: "mcq", text: "What
was the man's opinion about the staff service?", options: [ "A) Unfriendly
staff", "B) Very slow to respond", "C) Helpful and quick", ], correctAnswer:
"B", }, ], }, { instructions: "Questions 7-10Complete the sentences below.Write
NO MORE THAN TWO WORDS for each answer.", questions: [ { id: "q7",
questionNumber: 7, type: "fill_in_the_blank", text: "The man was happy with the
[GAP] process at the airport.", correctAnswer: ["SECURITY", "Security",
"security"], }, { id: "q8", questionNumber: 8, type: "fill_in_the_blank", text:
"During the flight, the [GAP] system helped him pass the time.", correctAnswer:
["ENTERTAINMENT", "Entertainment", "entertainment"], }, { id: "q9",
questionNumber: 9, type: "fill_in_the_blank", text: "The company offered a 25%
discount on his next [GAP].", correctAnswer: ["HOTEL BOOKING", "Hotel Booking",
"hotel booking"], }, { id: "q10", questionNumber: 10, type: "fill_in_the_blank",
text: "He also received a [GAP] credit.", correctAnswer: ["CALLING CARD",
"Calling Card", "calling card"], }, ], }, ], }, { id: "section-2", title:
"Section 2", questionGroups: [ { instructions: "Questions 11-16What is
customers' attitude towards the following services?Write the correct letter, A,
B or C, next to Questions 11-16.", type: "matching", questions: [ { id:
"l10-q11-16", questionNumber: 11, }, ], matchingOptions: { title: "", A: "They
are very interested.", B: "They might be less interested.", C: "They are not
interested.", }, matchingItems: [ { number: 11, text: "a free gift",
correctAnswer: "C" }, { number: 12, text: "chauffeur for a small extra fee",
correctAnswer: "C", }, { number: 13, text: "delivery and collection service",
correctAnswer: "A", }, { number: 14, text: "offering stylish vehicles",
correctAnswer: "B", }, { number: 15, text: "online discount ads", correctAnswer:
"A" }, { number: 16, text: "launching a new branch", correctAnswer: "C", }, ],
}, { instructions: "Questions 17-20Choose the correct letter, A, B or C.",
questions: [ { id: "q17", questionNumber: 17, type: "mcq", text: "What is the
current issue with public transport?", options: [ "A) Traffic delays", "B)
Safety problems", "C) Reduced effectiveness", ], correctAnswer: "C", }, { id:
"q18", questionNumber: 18, type: "mcq", text: "Why does the speaker say he
prefers using a cab sometimes?", options: [ "A) It is more affordable than other
options.", "B) It helps him arrive on time.", "C) It is safer than trams.", ],
correctAnswer: "B", }, { id: "q19", questionNumber: 19, type: "mcq", text: "What
problem does Matthew mention about trams?", options: [ "A) They are dirty", "B)
They can be significantly delayed", "C) They are too crowded", ], correctAnswer:
"B", }, { id: "q20", questionNumber: 20, type: "mcq", text: "What does Matthew
say about tram ticket prices?", options: [ "A) They have recently increased",
"B) They are now falling", "C) They've remained stable", ], correctAnswer: "B",
}, ], }, ], }, { id: "section-3", title: "Section 3", questionGroups: [ {
instructions: "Questions 21-25Choose the correct letter, A, B, or C.",
questions: [ { id: "q21", questionNumber: 21, type: "mcq", text: "What was the
most challenging part when the business was launched?", options: [ "A) The
branding plan was unclear", "B) There was no ready-made model to follow", "C)
The rental space wasn't ideal", ], correctAnswer: "B", }, { id: "q22",
questionNumber: 22, type: "mcq", text: "What issue did some of the employees
raise?", options: [ "A) The kinds of tasks given to them", "B) How the duties
were shared", "C) Feeling excluded from discussions", ], correctAnswer: "B", },
{ id: "q23", questionNumber: 23, type: "mcq", text: "What problem did the first
manager have?", options: [ "A) He took on too many roles at once", "B) He made
major choices without approval", "C) He recruited staff without permission", ],
correctAnswer: "B", }, { id: "q24", questionNumber: 24, type: "mcq", text: "What
did employees think of the new manager?", options: [ "A) They didn't enjoy his
longer meetings", "B) They were surprised by how effective he was", "C) They
were unsure about his leadership style", ], correctAnswer: "B", }, { id: "q25",
questionNumber: 25, type: "mcq", text: "What achievement did Doctor Harris feel
most proud of?", options: [ "A) A mural painted by students in the office", "B)
A local school donated artwork for display", "C) A professional artist designed
the workspace", ], correctAnswer: "A", }, ], }, { instructions:
"Questions 26-30Complete the summary below.Write NO MORE THAN THREE WORDS for
each answer.Major Problems of a Company", questions: [ { id: "q26",
questionNumber: 26, type: "fill_in_the_blank", text: "Since the business was
launched, recruitment has remained a major issue, as it is hard to find trained
staff and there is no [GAP].", correctAnswer: ["SOLUTION", "Solution",
"solution"], }, { id: "q27", questionNumber: 27, type: "fill_in_the_blank",
text: "Doctor Harris also needs to locate a space for the upcoming training
session on finances. Time management is difficult, and the role of [GAP] has
proved essential in staying organised.", correctAnswer: ["MOTIVATION",
"Motivation", "motivation"], }, { id: "q28", questionNumber: 28, type:
"fill_in_the_blank", text: "To improve these skills, students are advised to
check the section on [GAP] in the library,", correctAnswer: ["WORKPLACE
BEHAVIOUR", "Workplace Behaviour", "workplace behaviour"], }, { id: "q29",
questionNumber: 29, type: "fill_in_the_blank", text: "where valuable books can
be found. The library also holds helpful content like video tutorials on time
use, literature about [GAP]", correctAnswer: ["SYSTEM ADAPTATION METHODS",
"System Adaptation Methods", "system adaptation methods"], }, { id: "q30",
questionNumber: 30, type: "fill_in_the_blank", text: "and journal articles on
the [GAP].", correctAnswer: ["COMMUNITY SERVICE ROLES", "Community Service
Roles", "community service roles"], }, ], }, ], }, { id: "section-4", title:
"Section 4", questionGroups: [ { instructions: "Questions 31-40Complete the
notes below.Write NO MORE THAN TWO WORDS for each answer.CLIMATE AND
ARCHITECTUREIntroduction", questions: [ { id: "q31", questionNumber: 31, type:
"fill_in_the_blank", text: "Cases and examples are from practice conducted in
[GAP] as well as rural areas.", correctAnswer: ["CITIES", "Cities", "cities"],
}, { id: "q32", questionNumber: 32, type: "fill_in_the_blank", text: "Acid
Rain\nGovernmental efforts began in the 1970s to cut emissions. Financial
support was received from a [GAP].", correctAnswer: ["BANK", "Bank", "bank"], },
{ id: "q33", questionNumber: 33, type: "fill_in_the_blank", text: "[GAP] face
less risk due to lower pollution at high levels.", correctAnswer:
["SKYSCRAPERS", "Skyscrapers", "skyscrapers"], }, { id: "q34",
questionNumber: 34, type: "fill_in_the_blank", text: "In recent years, alter
Project focuses on older buildings made of [GAP].", correctAnswer: ["STONE",
"Stone", "stone"], }, { id: "q35", questionNumber: 35, type:
"fill_in_the_blank", text: "Pollution\nBuilding materials like concrete
contribute to emissions. [GAP] was used in Sky Tower windows to reduce
pollution.", correctAnswer: ["RECYCLED GLASS", "Recycled Glass", "recycled
glass"], }, { id: "q36", questionNumber: 36, type: "fill_in_the_blank", text:
"Water and Humidity\nRain in [GAP] makes construction timing difficult",
correctAnswer: ["WINTER", "Winter", "winter"], }, { id: "q37",
questionNumber: 37, type: "fill_in_the_blank", text: "in wood, which may result
in serious damage Moisture leads to [GAP].", correctAnswer: ["PHYSICAL CHANGES",
"Physical Changes", "physical changes"], }, { id: "q38", questionNumber: 38,
type: "fill_in_the_blank", text: "Building Design & Technology\nFoundation
issues can occur when [GAP] lacks proper density.", correctAnswer: ["SOIL",
"Soil", "soil"], }, { id: "q39", questionNumber: 39, type: "fill_in_the_blank",
text: "Engineers now monitor the [GAP] of architectural structures.",
correctAnswer: ["MOVEMENTS", "Movements", "movements"], }, { id: "q40",
questionNumber: 40, type: "fill_in_the_blank", text: "The government plans to
provide [GAP] to support architects in seismic zones.", correctAnswer:
["CHECKLIST", "Checklist", "checklist"], }, ], }, ], }, ], }, { id:
"listening-test-11", moduleId: "listening", title: "IELTS Listening Test 11",
description: "A full-length Academic Listening practice test.", duration: 40,
audioUrl: "Listening_tests_audio/Test 11/IELTS Listening Practice Test 11.mp3",
sections: [ { id: "section-1", title: "Section 1", questionGroups: [ {
instructions: "Questions 1-4Complete the form below.Write NO MORE THAN TWO WORDS
AND/OR A NUMBER for each answer.", questions: [ { id: "q1", questionNumber: 1,
type: "fill_in_the_blank", text: "Open in: [GAP]", correctAnswer: ["JUNE",
"June", "june"], }, { id: "q2", questionNumber: 2, type: "fill_in_the_blank",
text: "Length of exhibition: [GAP]", correctAnswer: ["4 DAYS", "4 Days", "4
days"], }, { id: "q3", questionNumber: 3, type: "fill_in_the_blank", text: "A
broad variety of brands will be displayed.\nSome bikes are only for display:
others can be used for [GAP].", correctAnswer: ["RIDE", "Ride", "ride"], }, {
id: "q4", questionNumber: 4, type: "fill_in_the_blank", text: "[GAP] are not
allowed inside the exhibition hall.\nEach ticket includes one free photograph.",
correctAnswer: ["PERSONAL PHONES", "Personal Phones", "personal phones"], }, ],
}, { instructions: "Questions 5-10Complete the form below.Write NO MORE THAN TWO
WORDS AND/OR A NUMBER for each answer.", questions: [ { id: "q5",
questionNumber: 5, type: "fill_in_the_blank", text: "Price of ticket: £ [GAP]
(in advance)", correctAnswer: ["105"], }, { id: "q6", questionNumber: 6, type:
"fill_in_the_blank", text: "Transfer to Sarah (Ticketing officer) [GAP]",
correctAnswer: ["PENDLETON", "Pendleton", "pendleton"], }, { id: "q7",
questionNumber: 7, type: "fill_in_the_blank", text: "Venue this year: Grand
[GAP]", correctAnswer: ["PALACE", "Palace", "palace"], }, { id: "q8",
questionNumber: 8, type: "fill_in_the_blank", text: "Located near [GAP]",
correctAnswer: ["CITY CENTER", "City Center", "city center", "CITY CENTRE",
"City Centre", "city centre"], }, { id: "q9", questionNumber: 9, type:
"fill_in_the_blank", text: "Website: www.[GAP].net", correctAnswer:
["DIRECTION", "Direction", "direction"], }, { id: "q10", questionNumber: 10,
type: "fill_in_the_blank", text: "Best way to contact: [GAP]", correctAnswer:
["ONLINE", "Online", "online"], }, ], }, ], }, { id: "section-2", title:
"Section 2", questionGroups: [ { instructions: "Questions 11-15Choose the
correct letter, A, B or C.", questions: [ { id: "q11", questionNumber: 11, type:
"mcq", text: "How many patients does the clinic aim to treat annually?",
options: ["A) 9,000", "B) 12,000", "C) 6,500"], correctAnswer: "C", }, { id:
"q12", questionNumber: 12, type: "mcq", text: "When can patients see female
doctors?", options: [ "A) on weekday mornings", "B) from 8 am to 11 am", "C) any
time during the weekend", ], correctAnswer: "A", }, { id: "q13",
questionNumber: 13, type: "mcq", text: "Who is the expert in auditory
rehabilitation?", options: ["A) Dr. Raymond", "B) Dr. Foster", "C) Dr.
Harrison"], correctAnswer: "C", }, { id: "q14", questionNumber: 14, type: "mcq",
text: "Where are patients encouraged to get their medication?", options: [ "A)
local chemist in the town", "B) online pharmacy delivery", "C) the centre's
in-house pharmacy", ], correctAnswer: "C", }, { id: "q15", questionNumber: 15,
type: "mcq", text: "What are patients asked to consider during their visit?",
options: [ "A) Allowing a medical student to be present", "B) Participating in
student-led treatments", "C) Joining training sessions for students", ],
correctAnswer: "A", }, ], }, { instructions: "Questions 16-20Label the map
below.Write the correct letter, A-H, next to questions 16-20.", questions: [ {
id: "q16", questionNumber: 16, type: "fill_in_the_blank", text: "Reception Area
[GAP]", correctAnswer: ["F", "f"], }, { id: "q17", questionNumber: 17, type:
"fill_in_the_blank", text: "Dr. Harrison's Room [GAP]", correctAnswer: ["H",
"h"], }, { id: "q18", questionNumber: 18, type: "fill_in_the_blank", text:
"Records Department [GAP]", correctAnswer: ["B", "b"], }, { id: "q19",
questionNumber: 19, type: "fill_in_the_blank", text: "Surgery Room [GAP]",
correctAnswer: ["G", "g"], }, { id: "q20", questionNumber: 20, type:
"fill_in_the_blank", text: "Director's Office [GAP]", correctAnswer: ["C", "c"],
}, ], }, ], }, { id: "section-3", title: "Section 3", questionGroups: [ {
instructions: "Questions 21-25What is the main opinion of each of the following
people?Choose FIVE answers from the box and write the correct letter, A-G, next
to questions 21-25.", type: "matching", questions: [ { id: "l11-q21-25",
questionNumber: 21, }, ], matchingOptions: { title: "Opinions", A: "temperature
restrictions", B: "sustainable heating alternatives", C: "reduction in
invertebrate population", D: "reduction in species numbers", E: "loss of natural
habitat", F: "impacts on animal development", G: "impacts on water quality", },
matchingItems: [ { number: 21, text:
