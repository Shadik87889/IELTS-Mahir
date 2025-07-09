// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase configuration (use the same config as your admin panel)
// IMPORTANT: For security, never hardcode API keys in production client-side code.
// This is for demonstration in the Canvas environment.
const defaultAppId = "ielts-mahir-community-forum"; // Replace with your actual __app_id if different
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const appId = typeof __app_id !== "undefined" ? __app_id : defaultAppId;

// Reference to the contact form
const contactForm = document.querySelector(".contact-form");

// --- Message Box Utility ---
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
        messageBox.classList.remove("show"); // Trigger fade-out
        // After transition, hide completely
        setTimeout(() => {
          messageBox.classList.add("hidden");
        }, 350); // Match CSS transition duration
      }
    });
  } else {
    console.warn(
      "closeMessageBoxBtn element not found during message box setup."
    );
  }
};

const showUserMessage = (message, isError = false) => {
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
  messageBox.style.backgroundColor = isError ? "#ef4444" : "#10b981"; // Red for error, green for success

  // Remove 'hidden' class and add 'show' class to trigger fade-in and slide-up
  messageBox.classList.remove("hidden");
  // Use a small delay before adding 'show' to ensure 'hidden' is fully processed by the browser
  // This helps trigger the transition correctly if 'hidden' was just removed.
  setTimeout(() => {
    messageBox.classList.add("show");
  }, 10); // Small delay, e.g., 10ms

  setTimeout(() => {
    // Remove 'show' class to trigger fade-out and slide-down
    messageBox.classList.remove("show");
    // After the transition completes, add 'hidden' to ensure it's fully out of flow
    // The timeout here should match or be slightly longer than your CSS transition duration (0.3s + a buffer)
    setTimeout(() => {
      messageBox.classList.add("hidden");
    }, 350); // Adjust this timeout to be slightly longer than your CSS transition
  }, 4000); // Message visible duration
};

// Handle contact form submission
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !phone || !email || !subject || !message) {
      showUserMessage("Please fill in all fields.", true);
      return;
    }

    try {
      // Add a new document to the 'contactMessages' collection
      const docRef = await addDoc(
        collection(db, "artifacts", appId, "public", "data", "contactMessages"),
        {
          name,
          phone,
          email,
          subject,
          message,
          timestamp: serverTimestamp(), // Record the time of submission
          status: "pending", // Initial status of the message
        }
      );

      console.log("Contact message sent with ID: ", docRef.id);
      showUserMessage(
        "Your message has been sent successfully! We will get back to you soon."
      );
      contactForm.reset(); // Clear the form
    } catch (e) {
      console.error("Error adding document: ", e);
      showUserMessage(`Failed to send message: ${e.message}`, true);
    }
  });
}

// Setup message box elements and event listener when DOM is ready
document.addEventListener("DOMContentLoaded", setupMessageBox);
