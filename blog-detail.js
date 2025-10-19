import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  limit,
  getDocs,
  orderBy,
  addDoc, // Added for newsletter signup
  serverTimestamp, // Added for newsletter signup
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
// Removed: getAuth, signInAnonymously, signInWithCustomToken imports from global scope

// Initialize Highlight.js and Marked.js
hljs.configure({ ignoreUnescapedHTML: true });

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
// Removed: const auth = getAuth(app); // Auth instance is only needed for newsletter signup
const appId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;

// Removed: let isAuthReady = false; // No longer needed as we don't authenticate for reads
let currentBlogPost = null;

// --- STATIC FEATURED BLOG POSTS (Array of Objects) ---
// This array should precisely match the one in blog.js to ensure consistency
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

// --- Message Box Utility (Old) ---
// This message box is for critical errors/messages, the new pop-up is for transient success/info
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
      "closeMessageBoxBtn element not found during message box setup in blog-detail.js."
    );
  }
};

const showMessage = (message) => {
  if (!messageBox || !messageContent) {
    setupMessageBox();
    if (!messageBox || !messageContent) {
      console.error(
        "Message box elements are still not found. Cannot display message:",
        message
      );
      console.error("FALLBACK MESSAGE:", message);
      return;
    }
  }
  messageContent.textContent = message;
  messageBox.classList.remove("hidden");
};

// --- Transient Pop-up Notification Utility (New) ---
let notificationTimeout;

function createNotificationElement() {
  let notification = document.getElementById("temp-notification");
  if (!notification) {
    notification = document.createElement("div");
    notification.id = "temp-notification";
    notification.className =
      "fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-xl opacity-0 transition-opacity duration-300 z-500 hidden";
    notification.style.pointerEvents = "none"; // Allow clicks to pass through
    document.body.appendChild(notification);
  }
  return notification;
}

function showTempNotification(message) {
  const notification = createNotificationElement();
  notification.textContent = message;
  notification.classList.remove("hidden");
  notification.classList.add("opacity-100");

  if (notificationTimeout) {
    clearTimeout(notificationTimeout);
  }

  notificationTimeout = setTimeout(() => {
    notification.classList.remove("opacity-100");
    notification.classList.add("opacity-0");
    // Hide completely after fade out
    setTimeout(() => {
      notification.classList.add("hidden");
    }, 300);
  }, 3000); // Display for 3 seconds
}

// Function to get query parameter from URL
function getQueryParameter(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to generate Table of Contents (TOC)
function generateTableOfContents(contentHtml) {
  const tocList = document.getElementById("toc-list");
  const tocSection = document.getElementById("table-of-contents");
  if (!tocList || !tocSection) return;

  tocList.innerHTML = "";
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = contentHtml;

  const headings = tempDiv.querySelectorAll("h2, h3, h4"); // Include H4
  let tocFound = false;

  headings.forEach((heading, index) => {
    tocFound = true;
    const id =
      heading.id || `section-${heading.tagName.toLowerCase()}-${index}`;
    heading.id = id;

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = heading.textContent;

    if (heading.tagName === "H2") {
      link.classList.add("h2-level");
    } else if (heading.tagName === "H3") {
      link.classList.add("h3-level");
    } else if (heading.tagName === "H4") {
      link.classList.add("h4-level");
    }
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });

  if (tocFound) {
    tocSection.classList.remove("hidden");
  } else {
    tocSection.classList.add("hidden");
  }

  const blogFullContent = document.getElementById("blog-full-content");
  if (blogFullContent) {
    blogFullContent.innerHTML = tempDiv.innerHTML;
  }
}

// Function to render Featured Blog (from static list, excluding current)
async function renderFeaturedBlog(currentBlogId) {
  const featuredSection = document.getElementById("featured-article-sidebar");
  const featuredImg = document.getElementById("featured-article-img");
  const featuredTitle = document.getElementById("featured-article-title");
  const featuredExcerpt = document.getElementById("featured-article-excerpt");
  const featuredLink = document.getElementById("featured-article-link");

  if (!featuredSection) return;
  featuredSection.classList.add("hidden"); // Hide by default

  let featuredPost = null;

  // Try to find a static featured post that isn't the current one
  // Prioritize the first static post that isn't the current one
  for (const post of staticFeaturedPosts) {
    if (post.id !== currentBlogId) {
      featuredPost = post;
      break; // Found a suitable static featured post
    }
  }

  if (featuredPost) {
    featuredSection.classList.remove("hidden");
    if (featuredImg)
      featuredImg.src =
        featuredPost.image ||
        "https://placehold.co/400x200/cccccc/white?text=Featured";
    if (featuredTitle) featuredTitle.textContent = featuredPost.title;
    if (featuredExcerpt) {
      featuredExcerpt.textContent =
        featuredPost.content.substring(0, 80) + "...";
    }
    if (featuredLink) featuredLink.href = `blog-detail?id=${featuredPost.id}`;
  } else {
    // Fallback: If the only static post is the current one being viewed,
    // or staticFeaturedPosts is empty, the sidebar will remain hidden.
    console.log(
      "No suitable static featured post found for sidebar (either current post is static, or no static posts defined)."
    );
  }
}

// Function to render Most Recent Posts (excluding current)
async function renderMostRecentPosts(currentBlogId) {
  const recentPostsSection = document.getElementById(
    "most-recent-posts-section"
  );
  const recentPostsList = document.getElementById("most-recent-posts-list");
  if (!recentPostsSection || !recentPostsList) return;

  recentPostsList.innerHTML = "";
  recentPostsSection.classList.add("hidden"); // Hide by default

  try {
    const q = query(
      collection(db, "artifacts", appId, "public", "data", "blogPosts"),
      where("status", "==", "published"),
      orderBy("timestamp", "desc"),
      limit(5) // Fetch a few more to ensure we get 3-4 unique posts
    );
    const snapshot = await getDocs(q);
    let recentPosts = [];
    snapshot.forEach((doc) => {
      // Exclude the current blog post and any static posts from the recent list
      const isStaticPost = staticFeaturedPosts.some(
        (staticPost) => staticPost.id === doc.id
      );
      if (doc.id !== currentBlogId && !isStaticPost) {
        recentPosts.push({ id: doc.id, ...doc.data() });
      }
    });

    recentPosts = recentPosts.slice(0, 4); // Display up to 4 recent posts

    if (recentPosts.length > 0) {
      recentPostsSection.classList.remove("hidden");
      recentPosts.forEach((post) => {
        const dateObj = post.timestamp ? post.timestamp.toDate() : new Date();
        const formattedDate = dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        const item = document.createElement("a");
        item.href = `blog-detail?id=${post.id}`;
        item.classList.add("recent-post-item", "block");
        item.innerHTML = `
                        <img src="${
                          post.image ||
                          "https://placehold.co/60x45/cccccc/white?text=Post"
                        }" alt="${
          post.title
        }" onerror="this.src='https://placehold.co/60x45/cccccc/white?text=Post'">
                        <div class="info">
                            <div class="title">${post.title}</div>
                            <div class="date">${formattedDate}</div>
                        </div>
                    `;
        recentPostsList.appendChild(item);
      });
    }
  } catch (error) {
    console.error("Error fetching most recent posts:", error);
  }
}

// Function to calculate estimated reading time
function calculateReadingTime(contentHtml) {
  const WORDS_PER_MINUTE = 200;
  const textContent = contentHtml.replace(/<[^>]*>/g, "");
  const wordCount = textContent.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / WORDS_PER_MINUTE);
  return `${readingTime} min read`;
}

// Function to update reading progress bar
function updateProgressBar() {
  const progressBar = document.getElementById("reading-progress-bar");
  if (!progressBar) return;

  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
}

// Function to handle Scroll-to-Top button
function setupScrollToTopButton() {
  const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
  if (!scrollToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Function to generate JSON-LD Structured Data for SEO
function generateJsonLd(blogPost) {
  const jsonLdSchema = document.getElementById("json-ld-schema");
  if (!jsonLdSchema || !blogPost) return;

  const url = window.location.href;
  const imageUrl =
    blogPost.image ||
    "https://placehold.co/1200x630/cccccc/white?text=IELTS+Mahir+Blog";
  // Ensure timestamp is a Date object for toISOString()
  const publishedDate = blogPost.timestamp
    ? (blogPost.timestamp.toDate
        ? blogPost.timestamp.toDate()
        : blogPost.timestamp
      ).toISOString()
    : new Date().toISOString();
  const modifiedDate = blogPost.lastModified
    ? (blogPost.lastModified.toDate
        ? blogPost.lastModified.toDate()
        : blogPost.lastModified
      ).toISOString()
    : publishedDate;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogPost.title,
    image: [imageUrl],
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Person",
      name: blogPost.author,
    },
    publisher: {
      "@type": "Organization",
      name: "IELTS Mahir Blog",
      logo: {
        "@type": "ImageObject",
        url:
          window.location.origin +
          "/assets/278115481_106536582034386_7446598694214552893_n-removebg-preview.png",
      },
    },
    description: blogPost.content.substring(0, 160) + "...",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleBody: blogPost.content,
  };

  jsonLdSchema.textContent = JSON.stringify(schema, null, 2);
}

// Function to update SEO meta tags (Open Graph & Twitter Cards)
function updateSeoMetaTags(blogPost) {
  const currentUrl = window.location.href;
  const ogTitle = blogPost.title || "IELTS Mahir Blog Post";
  const ogDescription = blogPost.content
    ? blogPost.content.substring(0, 160) + "..."
    : "Read the full article here.";
  const ogImage =
    blogPost.image ||
    "https://placehold.co/1200x630/cccccc/white?text=IELTS+Mahir+Blog";

  document
    .querySelector('meta[property="og:url"]')
    .setAttribute("content", currentUrl);
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", ogTitle);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", ogDescription);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute("content", ogImage);

  document
    .querySelector('meta[property="twitter:url"]')
    .setAttribute("content", currentUrl);
  document
    .querySelector('meta[property="twitter:title"]')
    .setAttribute("content", ogTitle);
  document
    .querySelector('meta[property="twitter:description"]')
    .setAttribute("content", ogDescription);
  document
    .querySelector('meta[property="twitter:image"]')
    .setAttribute("content", ogImage);
}

// Function to setup social sharing links
function setupSocialSharing(blogPost) {
  const articleUrl = encodeURIComponent(window.location.href);
  const articleTitle = encodeURIComponent(
    blogPost.title || "IELTS Mahir Blog Post"
  );
  const articleText = encodeURIComponent(
    blogPost.content ? blogPost.content.substring(0, 100) + "..." : ""
  );

  document.getElementById(
    "share-facebook"
  ).href = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
  document.getElementById(
    "share-twitter"
  ).href = `https://twitter.com/intent/tweet?url=${articleUrl}&text=${articleTitle}`;
  document.getElementById(
    "share-linkedin"
  ).href = `https://www.linkedin.com/shareArticle?mini=true&url=${articleUrl}&title=${articleTitle}&summary=${articleText}&source=${encodeURIComponent(
    window.location.origin
  )}`;
  document.getElementById(
    "share-whatsapp"
  ).href = `https://api.whatsapp.com/send?text=${articleTitle}%20${articleUrl}`;
  document.getElementById(
    "share-email"
  ).href = `mailto:?subject=${articleTitle}&body=Check out this article: ${articleTitle} - ${articleUrl}\n\n${articleText}`;
}

// Function to handle Copy Link button
function setupCopyLinkButton() {
  const copyLinkBtn = document.getElementById("copy-link-button");
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", async () => {
      try {
        // Use the modern clipboard API
        await navigator.clipboard.writeText(window.location.href);
        showTempNotification("Link copied to clipboard!");
      } catch (err) {
        // Fallback for older browsers or if clipboard API not available (e.g., in some iframe environments)
        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        showTempNotification("Link copied to clipboard! (Fallback)");
      }
    });
  }
}

// Function to handle Newsletter Signup
function setupNewsletterSignup() {
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value.trim() : "";

      if (!email) {
        showTempNotification("Please enter your email address.");
        return;
      }

      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showTempNotification("Please enter a valid email address.");
        return;
      }

      try {
        // Dynamically import getAuth only when needed for newsletter signup
        const authModule = await import(
          "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js"
        );
        const getAuthInstance = authModule.getAuth;
        const auth = getAuthInstance(app); // Get auth instance using the already initialized app

        const userId = auth.currentUser ? auth.currentUser.uid : null; // Get user ID if available, otherwise null

        // Add the email to a Firestore collection
        await addDoc(
          collection(
            db,
            `artifacts/${appId}/public/data/newsletterSubscribers`
          ),
          {
            email: email,
            subscribedAt: serverTimestamp(),
            userId: userId, // Record user ID if authenticated, otherwise null
          }
        );
        showTempNotification(`Thank you for subscribing, ${email}!`);
        emailInput.value = ""; // Clear input
      } catch (error) {
        console.error("Error saving newsletter subscription:", error);
        showTempNotification(`Failed to subscribe: ${error.message}.`);
      }
    });
  }
}

// Function to render the blog post details (now checks static first)
async function renderBlogPostDetail(blogId) {
  const blogPostContainer = document.getElementById("blog-post-container");
  const articleNavigation = document.getElementById("article-navigation");

  if (!blogPostContainer) return;

  blogPostContainer.innerHTML =
    '<p id="loading-message" class="loading-message">Loading blog post...</p>';
  if (articleNavigation) articleNavigation.classList.add("hidden");

  // Removed: if (!isAuthReady) check. Public reads don't need auth.

  let blogPostToRender = null;

  // 1. First, try to find the blog post in the staticFeaturedPosts array
  blogPostToRender = staticFeaturedPosts.find((post) => post.id === blogId);

  try {
    if (blogPostToRender) {
      console.log("Rendering static blog post:", blogPostToRender);
      // If found in static posts, ensure timestamp is a Date object for .toDate() calls (if applicable)
      if (
        blogPostToRender.timestamp &&
        !(blogPostToRender.timestamp instanceof Date)
      ) {
        blogPostToRender.timestamp = new Date(blogPostToRender.timestamp);
      }
    } else {
      // 2. If not found in static posts, try to fetch from Firestore
      console.log(
        "Attempting to fetch blog post from Firestore with ID:",
        blogId
      );
      const blogDocRef = doc(
        db,
        "artifacts",
        appId,
        "public",
        "data",
        "blogPosts",
        blogId
      );
      const docSnap = await getDoc(blogDocRef);

      if (docSnap.exists()) {
        blogPostToRender = { id: docSnap.id, ...docSnap.data() };
        console.log("Fetched dynamic blog post:", blogPostToRender);
      }
    }

    if (blogPostToRender) {
      currentBlogPost = blogPostToRender; // Set the current blog post globally

      const renderedContentHtml = marked.parse(blogPostToRender.content || "");
      const readingTime = calculateReadingTime(renderedContentHtml);

      updateSeoMetaTags(blogPostToRender);
      generateJsonLd(blogPostToRender);

      const dateObj = blogPostToRender.timestamp
        ? blogPostToRender.timestamp.toDate
          ? blogPostToRender.timestamp.toDate()
          : blogPostToRender.timestamp // Handle both Firebase timestamp and JS Date
        : new Date();
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      blogPostContainer.innerHTML = `
        <article>
          <section class="article-hero-section">
            <img src="${
              blogPostToRender.image ||
              "https://placehold.co/900x400/cccccc/white?text=Blog+Hero+Image"
            }" alt="${
        blogPostToRender.title
      }" onerror="this.src='https://placehold.co/900x400/cccccc/white?text=Blog+Hero+Image'">
            <div class="meta-info">
                <div class="category-date">
                    <span class="badge">${blogPostToRender.category}</span>
                    <span>${formattedDate}</span>
                </div>
                <span class="reading-time">${readingTime}</span>
            </div>
            <h1>${blogPostToRender.title}</h1>
            <div class="author-info">
                <div class="author-details">
                    <img src="${
                      blogPostToRender.authorImg ||
                      "https://placehold.co/48x48/9CA3AF/white?text=A"
                    }" alt="${
        blogPostToRender.author
      }" onerror="this.src='https://placehold.co/48x48/9CA3AF/white?text=A'">
                    <span>By ${blogPostToRender.author}</span>
                </div>
                <button id="copy-link-button" class="copy-link-button">
                    <i class="fas fa-link mr-1"></i> Copy Link
                </button>
            </div>
          </section>
          <section id="blog-full-content" class="blog-full-content">
            ${renderedContentHtml}
          </section>
        </article>
      `;

      document
        .querySelectorAll("#blog-full-content pre code")
        .forEach((block) => {
          hljs.highlightElement(block);
        });

      generateTableOfContents(renderedContentHtml);
      // Pass current ID to exclude from both featured and recent posts
      renderFeaturedBlog(blogId);
      renderMostRecentPosts(blogId);
      setupCopyLinkButton();

      if (articleNavigation) articleNavigation.classList.remove("hidden");
      // Only attempt previous/next navigation for dynamic posts
      // Static posts don't have a natural 'next'/'previous' in the Firestore order
      if (!staticFeaturedPosts.some((post) => post.id === blogId)) {
        setupPrevNextNavigation(
          blogPostToRender.id,
          blogPostToRender.timestamp
        );
      } else {
        // Hide navigation if it's a static post, or if no adjacent dynamic posts are found
        if (articleNavigation) articleNavigation.classList.add("hidden");
      }
    } else {
      // If blogPostToRender is still null, it means neither static nor Firestore yielded a post
      blogPostContainer.innerHTML =
        '<p class="error-message">Blog post not found. Please navigate from the main blog page.</p>';
      document.title = "Blog Not Found - IELTS Mahir Blog";
      showMessage(
        "The requested blog post does not exist. Redirecting to blog home."
      );
      setTimeout(() => {
        window.location.href = "blog";
      }, 3000);
    }
  } catch (error) {
    console.error("Error fetching or rendering blog post details:", error);
    blogPostContainer.innerHTML = `<p class="error-message">Error loading blog post: ${error.message}. Please try again.</p>`;
    showMessage(`Failed to load blog post: ${error.message}.`);
  }
}

// --- Previous/Next Article Navigation Logic ---
// Note: This logic assumes dynamic posts. Static posts are excluded from this flow.
async function setupPrevNextNavigation(currentBlogId, currentTimestamp) {
  const prevLink = document.getElementById("prev-article-link");
  const nextLink = document.getElementById("next-article-link");
  const articleNavigation = document.getElementById("article-navigation");

  if (!prevLink || !nextLink || !articleNavigation) return;

  prevLink.href = "#";
  prevLink.classList.add("disabled");
  nextLink.href = "#";
  nextLink.classList.add("disabled");

  try {
    const allPublishedPostsQuery = query(
      collection(db, "artifacts", appId, "public", "data", "blogPosts"),
      where("status", "==", "published"),
      orderBy("timestamp", "desc")
    );
    const allPostsSnapshot = await getDocs(allPublishedPostsQuery);
    const allPosts = allPostsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const currentIndex = allPosts.findIndex(
      (post) => post.id === currentBlogId
    );

    if (currentIndex > -1) {
      // Ensure current post was found in dynamic list
      if (currentIndex > 0) {
        const prevDoc = allPosts[currentIndex - 1];
        prevLink.href = `blog-detail?id=${prevDoc.id}`;
        prevLink.classList.remove("disabled");
      }

      if (currentIndex < allPosts.length - 1) {
        const nextDoc = allPosts[currentIndex + 1];
        nextLink.href = `blog-detail?id=${nextDoc.id}`;
        nextLink.classList.remove("disabled");
      }
    }

    if (
      !prevLink.classList.contains("disabled") ||
      !nextLink.classList.contains("disabled")
    ) {
      articleNavigation.classList.remove("hidden");
    } else {
      articleNavigation.classList.add("hidden");
    }
  } catch (error) {
    console.error("Error setting up previous/next navigation:", error);
    articleNavigation.classList.add("hidden");
  }
}

// Main execution on DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
  setupMessageBox(); // Keep the old message box for critical errors
  window.showMessage = showMessage; // Expose old message box globally

  // Create and setup the new temporary notification pop-up
  createNotificationElement();

  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);

  setupScrollToTopButton();
  setupNewsletterSignup(); // Setup newsletter form with Firestore integration

  // This line was the culprit causing the re-authentication. It is now removed.
  // await authenticateFirebase();

  const blogId = getQueryParameter("id");

  if (blogId) {
    renderBlogPostDetail(blogId);
  } else {
    const blogPostContainer = document.getElementById("blog-post-container");
    if (blogPostContainer) {
      blogPostContainer.innerHTML =
        '<p class="error-message">No blog post ID provided. Please navigate from the main blog page.</p>';
      document.title = "Error - IELTS Mahir Blog";
    }
    showMessage(
      "No blog post ID provided in the URL. Redirecting to blog home."
    );
    setTimeout(() => {
      window.location.href = "blog";
    }, 3000);
  }
});
