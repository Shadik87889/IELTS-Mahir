// homeBlog.js - UPDATED CODE (No Authentication Attempted)

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs, // Using getDocs for one-time fetch
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
// REMOVED ALL AUTH-RELATED IMPORTS as they are not needed for public reads

// Firebase configuration (should match blog.js)
const defaultAppId = "ielts-mahir-community-forum";
const defaultFirebaseConfig = {
  apiKey: "AIzaSyAxsd0CnLsh7t7yFy3ZPp6saGD_YpLL1mY",
  authDomain: "ielts-mahir-community-forum.firebaseapp.com",
  projectId: "ielts-mahir-community-forum",
  storageBucket: "ielts-mahir-community-forum.firebasestorage.app",
  messagingSenderId: "1036043607546",
  appId: "1:1036043607546:web:bd217e04cc0ec5f296d843",
  measurementId: "G-YC4CG1WKD3",
};

const firebaseConfig =
  typeof __firebase_config !== "undefined"
    ? JSON.parse(__firebase_config)
    : defaultFirebaseConfig;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app); // REMOVED: auth instance is no longer needed in this file
const appId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;

// REMOVED: authReadyPromise and ensureFirebaseAuth function entirely.
// No authentication check is necessary as per your security rules for these public reads.

// --- STATIC FEATURED BLOG POSTS (Array of Objects) ---
// ... (Your staticFeaturedPosts array remains the same) ...
const staticFeaturedPosts = [
  {
    id: "ielts-static-guide-001",
    title: "Mastering IELTS: Your Ultimate Guide to Success",
    content: `
Unlock your full potential in the IELTS exam with our comprehensive, expert-designed guide! The IELTS (International English Language Testing System) is a crucial step for many looking to study, work, or migrate to English-speaking countries. This ultimate guide breaks down each section, offering **actionable strategies, practical tips, and invaluable insights** to help you achieve your desired band score.

---

### Introduction: Your IELTS Journey Begins Here

The IELTS exam assesses your English language proficiency across four key skills: Listening, Reading, Writing, and Speaking. Each section presents unique challenges, but with the right preparation and strategies, success is well within your reach. This guide is your roadmap to understanding the exam format, mastering time management, and avoiding common pitfalls.

---

### Section 1: Listening - Sharpen Your Ears

The Listening section tests your ability to understand spoken English in various contexts. It is about more than just hearing; it is about **comprehension and identifying key information**.

-   **Understanding the Format:**
-   4 Sections: Each with increasing difficulty.
-   10 Questions per section: Total 40 questions.
-   30 Minutes Audio: Plus 10 minutes to transfer answers (for paper-based).
-   Contexts: Conversations, monologues, academic lectures, and more.

-   **Key Strategies for Success:**
-   Predicting Answers: Before the audio starts, read the questions carefully and try to anticipate the type of information you need to listen for (e.g., a name, a number, a place).
-   Listen for Keywords: Focus on specific words or phrases mentioned in the questions. These are often clues to the answers.
-   Synonym Recognition: Be aware that the audio might use synonyms or paraphrases of the words in the questions.
-   Distractors: The audio often includes information designed to distract you. Listen for contrasting words like "but," "however," or "although."
-   Spelling Matters: Especially for names and places, ensure your spelling is accurate when transferring answers.
-   Practice with Variety: Listen to a wide range of English accents and speaking speeds (podcasts, news, documentaries).

---

### Section 2: Reading - Deciphering the Text

The Reading section evaluates your ability to understand a variety of English texts, from factual to analytical. It is less about deep understanding of every word and more about **efficiently extracting information**.

-   **Understanding the Format:**
-   3 Sections: Each with one or more long texts.
-   40 Questions: Different question types (Multiple Choice, True/False/Not Given, Matching Headings, Sentence Completion, etc.).
-   60 Minutes: No extra time to transfer answers.

-   **Key Strategies for Success:**
-   Skimming and Scanning:
-   Skimming: Read quickly to get the main idea of each paragraph.
-   Scanning: Look for specific keywords or phrases to locate answers.
-   Identify Question Types: Each question type requires a slightly different approach. Master them all.
-   Paragraph Headings First: For matching headings, read the headings before the text to get a sense of the main themes.
-   Location, Location, Location: Questions usually follow the order of information in the text.
-   Time Management: Allocate approximately 20 minutes per section. If you are stuck, move on and come back.
-   Vocabulary Building: A strong vocabulary is invaluable, but do not let unknown words stop you. Focus on context.

---

### Section 3: Writing - Crafting Your Response

The Writing section assesses your ability to produce coherent, well-structured, and grammatically correct English. This is where your **ideas, organization, and language accuracy** shine.

-   **Understanding the Format:**
-   Task 1 (20 minutes):
-   Academic: Describe a graph, chart, table, or diagram (minimum 150 words).
-   General Training: Write a letter (minimum 150 words).
-   Task 2 (40 minutes):
-   Write an essay on a given topic, presenting an argument or opinion (minimum 250 words).

-   **Key Strategies for Success:**
-   Understand the Question: Deconstruct the prompt to identify what exactly you need to write about. Address all parts of the question.
-   Plan Your Essay: Before you write, brainstorm ideas and create a clear outline (introduction, body paragraphs with topic sentences and supporting details, conclusion).
-   Cohesion and Coherence: Use linking words (e.g., "however," "therefore," "in addition") to connect ideas smoothly. Ensure logical flow.
-   Grammar and Vocabulary: Aim for accuracy and a range of complex structures and vocabulary, but do not overcomplicate it. Use what you are confident with.
-   Practice Under Timed Conditions: This is crucial. Stick to the 20/40 minute breakdown.
-   Review and Edit: Always leave a few minutes to proofread for errors in grammar, spelling, and punctuation.

---

### Section 4: Speaking - Express Yourself Confidently

The Speaking section is an interactive face-to-face interview that tests your ability to communicate effectively in English. It is about **fluency, coherence, lexical resource, and grammatical range & accuracy**.

-   **Understanding the Format:**
-   Part 1 (4-5 minutes): Interview – general questions about yourself, your hobbies, work/study, etc.
-   Part 2 (3-4 minutes): Long Turn – speak about a given topic for 1-2 minutes after 1 minute of preparation.
-   Part 3 (4-5 minutes): Discussion – abstract discussion related to the Part 2 topic.

-   **Key Strategies for Success:**
-   Be Natural and Fluent: Do not memorize answers. Speak naturally and try to extend your answers beyond just "yes" or "no."
-   Expand Your Answers (ELL): Elaborate, give Examples, and provide Reasons.
-   Vocabulary and Idioms: Use a range of vocabulary and natural idioms, but only if you are confident in their usage.
-   Grammatical Range: Show that you can use different tenses and complex sentence structures.
-   Develop Your Ideas: In Part 2 and 3, clearly structure your thoughts and provide supporting details.
-   Practice with a Partner: The best way to improve is to speak regularly. Engage in conversations and simulate exam conditions.
-   Pronunciation: Focus on clear articulation and intonation.

---

### General Tips for Overall IELTS Success

-   Know the Exam: Understand the format, question types, and scoring criteria inside out.
-   Time Management: Practice all sections under strict time limits.
-   Build Vocabulary: Keep a vocabulary notebook and learn words in context.
-   Stay Calm: Manage stress on exam day. A clear mind performs best.
-   Utilize Official Resources: Use Cambridge IELTS books and official IELTS websites for authentic practice materials.

---

### Conclusion: Your Path to IELTS Mastery

Mastering IELTS is an achievable goal with dedication and the right strategies. By focusing on each section's demands, practicing effectively, and honing your language skills, you can confidently approach the exam and secure the band score you need for your future endeavors.

**Ready to start your journey? Explore more resources on our blog or contact us for personalized coaching!**
`,
    image: "assets/robert-bye-CyvK_Z2pYXg-unsplash.jpg", // This path should be correct relative to your HTML files
    category: "IELTS Prep",
    author: "IELTS Mahir Team",
    authorImg: "assets/teacher-mahir.jpg", // Example author image
    timestamp: new Date("2024-01-15T10:00:00Z"), // A specific timestamp
  },
];

/**
 * Calculates the estimated reading time of an article based on its content.
 * Assumes an average reading speed of 200 words per minute.
 * @param {string} content The text content of the article.
 * @returns {string} The formatted reading time (e.g., "5 min read").
 */
function calculateReadingTime(content) {
  if (!content) return "0 min read";
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length; // Split by whitespace and count
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// --- Render Blog Posts into the existing HTML structure ---
async function renderBlogContent() {
  const topFeatureDiv = document.querySelector("#page5 .top-feature");
  const articleCardsDiv = document.querySelector("#page5 .article-cards");

  if (!topFeatureDiv || !articleCardsDiv) {
    console.warn(
      "Required blog display elements (#page5 .top-feature or #page5 .article-cards) not found on home.html."
    );
    return;
  }

  // Set initial loading messages
  topFeatureDiv.innerHTML =
    '<p class="text-gray-500 text-center w-full py-8">Loading featured article...</p>';
  articleCardsDiv.innerHTML =
    '<p class="text-gray-500 text-center col-span-full py-8">Loading recent articles...</p>';

  // NO AUTHENTICATION CHECK OR ATTEMPT IS DONE HERE
  // Your security rules 'allow read: if true;' means no auth is needed for these reads.

  // --- Render Top Feature (ALWAYS the static one) ---
  const staticFeaturedPost = staticFeaturedPosts[0];
  if (staticFeaturedPost) {
    const readingTime = calculateReadingTime(staticFeaturedPost.content);
    topFeatureDiv.innerHTML = `
      <img class="page2-grapic-el page5-grapic-el" src="assets/Homepage-2@3x-BCRznU7a.png" alt="" onerror="this.src='https://placehold.co/80x80/cccccc/white?text=Graphic'" />
      <div class="feature-left">
        <h2>${staticFeaturedPost.title}</h2>
        <p>${staticFeaturedPost.content.substring(0, 200)}...</p>
        <a href="blog-detail.html?id=${staticFeaturedPost.id}" class="read-btn">
          <span class="blog-card-arrow">➜</span> Read full article (${readingTime})
        </a>
      </div>
      <div class="feature-right">
        <img src="${
          staticFeaturedPost.image ||
          "https://placehold.co/400x300/cccccc/white?text=Featured+Image"
        }" alt="Illustration" onerror="this.src='https://placehold.co/400x300/cccccc/white?text=Featured+Image'" />
      </div>
    `;
  } else {
    topFeatureDiv.innerHTML =
      '<p class="text-gray-500 text-center w-full py-8">No static featured article configured.</p>';
  }

  // --- Fetch and Render Dynamic Article Cards ---
  try {
    const q = query(
      collection(db, "artifacts", appId, "public", "data", "blogPosts"),
      where("status", "==", "published"),
      orderBy("timestamp", "desc"),
      limit(5) // Fetch a few more in case some need to be filtered out
    );

    const snapshot = await getDocs(q);
    let dynamicPosts = [];
    snapshot.forEach((doc) => {
      dynamicPosts.push({ id: doc.id, ...doc.data() });
    });

    // Filter out the static post from the dynamic list to prevent duplication
    const postsForCards = dynamicPosts
      .filter((post) =>
        staticFeaturedPost ? post.id !== staticFeaturedPost.id : true
      )
      .slice(0, 3); // Take the top 3 truly dynamic and distinct posts

    if (postsForCards.length > 0) {
      articleCardsDiv.innerHTML = `
        ${postsForCards
          .map((article, index) => {
            const dateObj = article.timestamp
              ? article.timestamp.toDate
                ? article.timestamp.toDate()
                : article.timestamp
              : new Date();
            const formattedDate = dateObj.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const readingTime = calculateReadingTime(article.content);
            const tabletEliminationClass =
              index === 2 ? "tablet-elimination" : ""; // Apply to the 3rd card only

            return `
              <a href="blog-detail.html?id=${
                article.id
              }" class="card cursor-pointer no-underline ${tabletEliminationClass}">
                <img src="${
                  article.image ||
                  "https://placehold.co/400x200/cccccc/white?text=Blog+Image"
                }" alt="Card" class="card-img" onerror="this.src='https://placehold.co/400x200/cccccc/white?text=Blog+Image'" />
                <div class="card-meta">
                  <span class="badge">${article.category}</span>
                  <span class="date">${formattedDate}</span>
                </div>
                <h3>${article.title}</h3>
                <div class="author">
                  <img src="${
                    article.authorImg ||
                    "https://placehold.co/40x40/9CA3AF/white?text=A"
                  }" alt="${
              article.author
            }" onerror="this.src='https://placehold.co/40x40/9CA3AF/white?text=A'"/>
                  <span>${article.author}</span>
                  <span class="reading-time ml-auto text-gray-500 text-sm">${readingTime}</span>
                </div>
              </a>
            `;
          })
          .join("")}
      `;
    } else {
      articleCardsDiv.innerHTML =
        '<p class="text-gray-500 text-center col-span-full py-8">No recent articles available from Firebase.</p>';
    }
  } catch (error) {
    console.error(
      "Error fetching or rendering recent blog posts for cards:",
      error
    );
    articleCardsDiv.innerHTML =
      '<p class="text-red-500 text-center col-span-full py-8">Error loading articles.</p>';
  }
}

// --- Main Document Ready Logic ---
document.addEventListener("DOMContentLoaded", () => {
  renderBlogContent();
});

// IMPORTANT: Remember to apply the `DOMContentLoaded` and null-check for `playBtn`
// in the relevant file (likely `app.js` or directly in `home.html` if it's there).
// This specific fix is not part of homeBlog.js but addresses a separate error
// you initially reported.
