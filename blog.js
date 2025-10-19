import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy, // For sorting by timestamp
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
// Removed: getAuth, signInAnonymously, signInWithCustomToken imports

// Firebase configuration
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
// Removed: const auth = getAuth(app);
const appId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;

// Removed: let isAuthReady = false;
let allBlogPosts = []; // Stores all published blog posts from Firebase
let filteredAndSortedArticles = []; // Stores posts after search/filter/sort
let currentPage = 1;

// --- STATIC FEATURED BLOG POSTS (Array of Objects) ---
const staticFeaturedPosts = [
  {
    id: "ielts-static-guide-001", // A unique ID for this static post
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
-   Practice Regularly: Consistency is key. Make IELTS preparation a daily habit.
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

// --- Message Box Utility (moved inside DOMContentLoaded for safer access) ---
let messageBox;
let messageContent;
let closeMessageBoxBtn;

const setupMessageBox = () => {
  messageBox = document.getElementById("message-box");
  messageContent = document.getElementById("message-content");
  closeMessageBoxBtn = document.getElementById("close-message-box");
  if (closeMessageBoxBtn) {
    closeMessageBoxBtn.addEventListener("click", () => {
      if (messageBox) {
        messageBox.classList.add("hidden");
      }
    });
  } else {
    console.warn(
      "closeMessageBoxBtn element not found during message box setup."
    );
  }
};

const showMessage = (message) => {
  // Ensure message box elements are available
  if (!messageBox || !messageContent) {
    // If message box elements weren't found during setup, try to find them again
    setupMessageBox();
    if (!messageBox || !messageContent) {
      console.error(
        "Message box elements are still not found. Cannot display message:",
        message
      );
      // Fallback to console if UI message box is truly unavailable
      console.error("FALLBACK MESSAGE:", message);
      return;
    }
  }
  messageContent.textContent = message;
  messageBox.classList.remove("hidden");
};

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

// Removed: authenticateFirebase function and its related isAuthReady flag.

// --- Render Top Feature ---
function renderTopFeature(featuredPost) {
  const topFeatureDiv = document.getElementById("top-feature-js");
  if (!topFeatureDiv) return;
  if (!featuredPost) {
    topFeatureDiv.innerHTML =
      '<p class="text-gray-500 text-center w-full">No featured article available.</p>';
    return;
  }
  const readingTime = calculateReadingTime(featuredPost.content);
  topFeatureDiv.innerHTML = `
    <div class="top-feature">
      <img class="page2-grapic-el page5-grapic-el" src="assets/Homepage-2@3x-BCRznU7a.png" alt="" onerror="this.src='https://placehold.co/80x80/cccccc/white?text=Graphic'" />
      <div class="feature-left">
        <h2>${featuredPost.title}</h2>
        <p>${featuredPost.content.substring(0, 200)}...</p>
        <a href="blog-detail?id=${featuredPost.id}" class="read-btn">
          <span class="blog-card-arrow">➜</span> Read full article (${readingTime})
        </a>
      </div>
      <div class="feature-right">
        <img src="${
          featuredPost.image ||
          "https://placehold.co/400x300/cccccc/white?text=Featured+Image"
        }" alt="Illustration" onerror="this.src='https://placehold.co/400x300/cccccc/white?text=Featured+Image'" />
      </div>
    </div>
  `;
}

// --- Pagination Logic ---
const ARTICLES_PER_PAGE = 6;

function renderArticles(page = 1) {
  currentPage = page;
  const start = (page - 1) * ARTICLES_PER_PAGE;
  const end = start + ARTICLES_PER_PAGE;
  const pagedArticles = filteredAndSortedArticles.slice(start, end);
  const articleCardsDiv = document.getElementById("article-cards-js");
  if (!articleCardsDiv) return;
  if (pagedArticles.length === 0) {
    articleCardsDiv.innerHTML =
      '<p class="text-gray-500 text-center col-span-full">No articles found matching your criteria.</p>';
    createPagination(0, 1); // Reset pagination
    return;
  }
  articleCardsDiv.innerHTML = `
    <div class="article-cards">
      ${pagedArticles
        .map((article) => {
          const dateObj = article.timestamp
            ? article.timestamp.toDate()
            : new Date();
          const formattedDate = dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          const readingTime = calculateReadingTime(article.content); // Calculate reading time for each article
          return `
              <a href="blog-detail?id=${
                article.id
              }" class="card cursor-pointer">
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
    </div>
  `;
  const totalPages = Math.ceil(
    filteredAndSortedArticles.length / ARTICLES_PER_PAGE
  );
  createPagination(totalPages, currentPage);
}

function createPagination(totalPages, currentPage) {
  const ul = document.querySelector(".pagination");
  if (!ul) return;
  ul.innerHTML = "";
  function pageItem(page, text = null, opts = {}) {
    const li = document.createElement("li");
    li.className = "page-item";
    if (opts.active) li.classList.add("active");
    if (opts.disabled) li.classList.add("disabled");
    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.tabIndex = opts.disabled ? -1 : 0;
    if (opts.disabled) a.setAttribute("aria-disabled", "true");
    a.innerHTML = text !== null ? text : page;
    if (!opts.disabled && !opts.dots) a.dataset.page = page;
    if (opts.dots) {
      a.classList.add("dots");
      a.tabIndex = -1;
      a.innerHTML = "…";
    }
    li.appendChild(a);
    return li;
  }
  ul.appendChild(
    pageItem(currentPage - 1, "<span>&laquo;</span>", {
      disabled: currentPage === 1,
    })
  );
  let pageNumbers = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    if (currentPage <= 4) {
      pageNumbers = [1, 2, 3, 4, 5, "dots", totalPages];
    } else if (currentPage >= totalPages - 3) {
      pageNumbers = [
        1,
        "dots",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pageNumbers = [
        1,
        "dots",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "dots",
        totalPages,
      ];
    }
  }
  for (const n of pageNumbers) {
    if (n === "dots") {
      ul.appendChild(pageItem(null, "…", { dots: true, disabled: true }));
    } else {
      ul.appendChild(
        pageItem(n, null, {
          active: n === currentPage,
        })
      );
    }
  }
  ul.appendChild(
    pageItem(currentPage + 1, "<span>&raquo;</span>", {
      disabled: currentPage === totalPages,
    })
  );
  // Re-attach event listener after pagination is re-rendered
  ul.removeEventListener("click", handlePaginationClick); // Remove existing to prevent duplicates
  ul.addEventListener("click", handlePaginationClick);
}

function handlePaginationClick(e) {
  const link = e.target.closest(".page-link");
  if (
    !link ||
    link.classList.contains("dots") ||
    link.getAttribute("aria-disabled") === "true"
  )
    return;
  e.preventDefault();
  const totalPages = Math.ceil(
    filteredAndSortedArticles.length / ARTICLES_PER_PAGE
  );
  let gotoPage = null;
  if (link.innerHTML.includes("&laquo;")) {
    gotoPage = Math.max(1, currentPage - 1);
  } else if (link.innerHTML.includes("&raquo;")) {
    gotoPage = Math.min(totalPages, currentPage + 1);
  } else {
    gotoPage = Number(link.dataset.page);
  }
  if (gotoPage && gotoPage !== currentPage) {
    renderArticles(gotoPage);
    window.scrollTo({
      top: document.getElementById("article-cards-js").offsetTop - 80,
      behavior: "smooth",
    });
  }
}

// --- Search, Filter, Sort Logic ---
function applyFiltersAndSort() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const categorySelect = document.getElementById("category-select").value;
  const sortSelect = document.getElementById("sort-select").value;
  let tempArticles = [...allBlogPosts]; // Start with all fetched posts
  // Apply search filter
  if (searchInput) {
    tempArticles = tempArticles.filter(
      (post) =>
        post.title.toLowerCase().includes(searchInput) ||
        post.content.toLowerCase().includes(searchInput) ||
        post.author.toLowerCase().includes(searchInput) ||
        post.category.toLowerCase().includes(searchInput)
    );
  }
  // Apply category filter
  if (categorySelect) {
    tempArticles = tempArticles.filter(
      (post) => post.category === categorySelect
    );
  }
  // Apply sorting
  if (sortSelect === "newest") {
    tempArticles.sort(
      (a, b) => (b.timestamp?.toDate() || 0) - (a.timestamp?.toDate() || 0)
    );
  } else if (sortSelect === "oldest") {
    tempArticles.sort(
      (a, b) => (a.timestamp?.toDate() || 0) - (b.timestamp?.toDate() || 0)
    );
  }
  // "Most Popular" sorting is not implemented as there's no 'popularity' data in Firestore.
  filteredAndSortedArticles = tempArticles; // Update global array
  renderArticles(1); // Re-render articles from the first page
}

// --- Main Document Ready Logic ---
document.addEventListener("DOMContentLoaded", async () => {
  const loadingMessageTopFeature = document.getElementById("top-feature-js");
  const loadingMessageArticles = document.getElementById("article-cards-js");

  // Setup message box elements and event listener here, ensures DOM is ready
  setupMessageBox();

  // Removed: await authenticateFirebase(); and if (!isAuthReady) block.
  // No authentication is needed as per your security rules for these public reads.

  // Set up real-time listener for published blog posts
  const blogPostsRef = query(
    collection(db, "artifacts", appId, "public", "data", "blogPosts"),
    where("status", "==", "published"),
    orderBy("timestamp", "desc") // Order by newest first by default
  );

  onSnapshot(
    blogPostsRef,
    (snapshot) => {
      console.log("Blog posts snapshot received for public display.");
      const fetchedPosts = [];
      snapshot.forEach((doc) => {
        fetchedPosts.push({ id: doc.id, ...doc.data() });
      });
      allBlogPosts = fetchedPosts; // Update the master list of posts

      // Clear loading messages and remove their specific styling
      if (loadingMessageTopFeature) {
        loadingMessageTopFeature.classList.remove(
          "min-h-[200px]",
          "flex",
          "items-center",
          "justify-center",
          "text-gray-500"
        );
        loadingMessageTopFeature.innerHTML = ""; // Clear content
      }
      if (loadingMessageArticles) {
        loadingMessageArticles.classList.remove(
          "min-h-[300px]",
          "flex",
          "items-center",
          "justify-center",
          "text-gray-500"
        );
        loadingMessageArticles.innerHTML = ""; // Clear content
      }

      if (allBlogPosts.length === 0) {
        if (loadingMessageTopFeature)
          loadingMessageTopFeature.innerHTML =
            '<p class="text-gray-500 text-center w-full">No featured article available.</p>';
        if (loadingMessageArticles)
          loadingMessageArticles.innerHTML =
            '<p class="text-gray-500 text-center col-span-full">No published articles available yet.</p>';
        createPagination(0, 1); // Reset pagination if no posts
        return;
      }

      // --- Option for Dynamic Top Feature (uncomment to use) ---
      // This will render the newest blog post fetched from Firebase as the top feature.
      // if (allBlogPosts.length > 0) {
      //   renderTopFeature(allBlogPosts[0]);
      // }
      // --- Option for Static Top Feature (currently active) ---
      // This will always render the first post from the 'staticFeaturedPosts' array.
      if (staticFeaturedPosts.length > 0) {
        renderTopFeature(staticFeaturedPosts[0]);
      } else {
        // Fallback if the staticFeaturedPosts array is empty
        if (loadingMessageTopFeature) {
          loadingMessageTopFeature.innerHTML =
            '<p class="text-gray-500 text-center w-full">No static featured article configured.</p>';
        }
      }

      // Apply initial filters and sorting, then render articles
      applyFiltersAndSort();
    },
    (error) => {
      console.error("Error fetching blog posts for public display:", error);
      if (loadingMessageTopFeature)
        loadingMessageTopFeature.innerHTML =
          '<p class="text-red-500 text-center w-full">Error loading featured article.</p>';
      if (loadingMessageArticles)
        loadingMessageArticles.innerHTML = `<p class="text-red-500 text-center col-span-full">Error loading articles: ${error.message}.</p>`;
      showMessage(
        `Error loading blog posts: ${error.message}. Please try again.`
      );
    }
  );
  // Event listeners for search, filter, and sort
  document
    .getElementById("blog-search-form")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      applyFiltersAndSort();
    });
  document
    .getElementById("category-select")
    ?.addEventListener("change", applyFiltersAndSort);
  document
    .getElementById("sort-select")
    ?.addEventListener("change", applyFiltersAndSort);
  // Expose showMessage globally for inline onclick attributes
  window.showMessage = showMessage;
});
