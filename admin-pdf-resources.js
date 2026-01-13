/**
 * Admin PDF Resources Manager
 * Injects a UI to add PDF resources to the Firestore collection.
 * Automatically detects Firebase instance or initializes if needed.
 */

(function () {
  // 1. Wait for Firebase SDK to be available
  const waitForFirebase = setInterval(() => {
    if (typeof firebase !== "undefined") {
      clearInterval(waitForFirebase);
      // Give a small buffer for the main admin.html to initialize its auth/app
      setTimeout(initPDFAdmin, 1500);
    }
  }, 500);

  function initPDFAdmin() {
    console.log("Initializing PDF Admin Module...");

    // 2. Resolve Dependencies (DB and AppID) internally
    let db;
    let currentAppId;

    try {
      // Try to grab the default app initialized by admin.html (preserves Auth state)
      const app = firebase.app();
      db = firebase.firestore(app);
      console.log("PDF Admin: Attached to existing Firebase App.");
    } catch (e) {
      console.warn(
        "PDF Admin: No default app found. Using fallback config.",
        e
      );
      // Fallback Config (taken from your project settings)
      const config = {
        apiKey: "AIzaSyAxsd0CnLsh7t7yFy3ZPp6saGD_YpLL1mY",
        authDomain: "ielts-mahir-community-forum.firebaseapp.com",
        projectId: "ielts-mahir-community-forum",
        storageBucket: "ielts-mahir-community-forum.firebasestorage.app",
        messagingSenderId: "1036043607546",
        appId: "1:1036043607546:web:bd217e04cc0ec5f296d843",
      };
      // Only init if not exists to avoid duplicate error
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      db = firebase.firestore();
    }

    // Try to find global app ID or use default
    if (typeof window.currentAppId !== "undefined") {
      currentAppId = window.currentAppId;
    } else if (typeof __app_id !== "undefined") {
      currentAppId = __app_id;
    } else {
      currentAppId = "ielts-mahir-community-forum";
    }

    if (!db) {
      console.error("PDF Admin: CRITICAL - Could not initialize Firestore.");
      return;
    }

    // 3. Start UI Injection
    injectStyles();
    injectUI();
    attachListeners(db, currentAppId);
  }

  // Inject CSS
  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
            #pdf-admin-fab {
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: linear-gradient(135deg, #2d7cff, #0056b3);
                color: white;
                width: 65px;
                height: 65px;
                border-radius: 50%;
                border: none;
                box-shadow: 0 6px 20px rgba(45, 124, 255, 0.4);
                font-size: 26px;
                cursor: pointer;
                z-index: 2147483647; /* Max Z-Index to ensure visibility */
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s, box-shadow 0.2s;
            }
            #pdf-admin-fab:hover {
                transform: scale(1.1) rotate(90deg);
                box-shadow: 0 8px 25px rgba(45, 124, 255, 0.5);
            }
            #pdf-admin-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.6);
                z-index: 2147483647;
                align-items: center;
                justify-content: center;
                backdrop-filter: blur(4px);
            }
            #pdf-admin-modal.active {
                display: flex;
            }
            .pdf-form-container {
                background: white;
                padding: 35px;
                border-radius: 20px;
                width: 90%;
                max-width: 550px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                font-family: 'Segoe UI', system-ui, sans-serif;
                position: relative;
                animation: pdfModalPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            @keyframes pdfModalPop {
                from { transform: scale(0.9) translateY(20px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
            }
            .pdf-form-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 25px;
                border-bottom: 2px solid #f0f2f5;
                padding-bottom: 15px;
            }
            .pdf-form-header h2 { margin: 0; color: #1a1a1a; font-size: 1.5rem; }
            .pdf-close-btn {
                background: #f0f2f5;
                border: none;
                font-size: 20px;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                cursor: pointer;
                color: #555;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.2s;
            }
            .pdf-close-btn:hover { background: #e4e6e9; color: #000; }
            
            .pdf-form-group { margin-bottom: 18px; }
            .pdf-form-group label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #374151;
                font-size: 0.9rem;
            }
            .pdf-form-group input, 
            .pdf-form-group select,
            .pdf-form-group textarea {
                width: 100%;
                padding: 12px;
                border: 2px solid #e5e7eb;
                border-radius: 10px;
                font-size: 14px;
                box-sizing: border-box;
                transition: border-color 0.2s;
                background: #f9fafb;
            }
            .pdf-form-group input:focus, .pdf-form-group select:focus, .pdf-form-group textarea:focus {
                outline: none;
                border-color: #2d7cff;
                background: white;
            }
            .pdf-submit-btn {
                background: #2d7cff;
                color: white;
                border: none;
                padding: 14px 24px;
                border-radius: 10px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                width: 100%;
                margin-top: 10px;
                transition: background 0.2s;
                box-shadow: 0 4px 12px rgba(45, 124, 255, 0.2);
            }
            .pdf-submit-btn:hover { background: #1a63d9; transform: translateY(-1px); }
            .pdf-submit-btn:disabled { background: #9ca3af; cursor: not-allowed; transform: none; }
            
            #pdf-toast {
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                background: #1f2937;
                color: white;
                padding: 12px 28px;
                border-radius: 50px;
                font-size: 14px;
                opacity: 0;
                transition: opacity 0.3s, transform 0.3s;
                z-index: 2147483648;
                pointer-events: none;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                margin-bottom: -20px;
            }
            #pdf-toast.show { opacity: 1; margin-bottom: 0; }
            #pdf-toast.success { background: #10b981; }
            #pdf-toast.error { background: #ef4444; }
        `;
    document.head.appendChild(style);
  }

  // Inject HTML
  function injectUI() {
    const container = document.createElement("div");
    container.innerHTML = `
            <button id="pdf-admin-fab" title="Add PDF Resource">
                <i class="fa fa-plus"></i>
            </button>

            <div id="pdf-admin-modal">
                <div class="pdf-form-container">
                    <div class="pdf-form-header">
                        <h2>Add PDF Resource</h2>
                        <button class="pdf-close-btn">&times;</button>
                    </div>
                    
                    <form id="add-pdf-form">
                        <div class="pdf-form-group">
                            <label>Document Title</label>
                            <input type="text" name="title" required placeholder="e.g. Cambridge 18 Writing Task 2">
                        </div>
                        
                        <div class="pdf-form-group">
                            <label>Category</label>
                            <select name="category" required>
                                <option value="practice tests">Practice Tests</option>
                                <option value="vocabulary">Vocabulary</option>
                                <option value="grammar">Grammar</option>
                                <option value="speaking cue cards">Speaking Cue Cards</option>
                                <option value="writing samples">Writing Samples</option>
                                <option value="listening scripts">Listening Scripts</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="pdf-form-group">
                            <label>PDF Link (Direct URL)</label>
                            <input type="url" name="link" required placeholder="https://firebasestorage... or https://drive...">
                        </div>

                        <div class="pdf-form-group">
                            <label>Cover Image URL</label>
                            <input type="url" name="img" placeholder="https://... (Leave empty for default)">
                        </div>

                        <div style="display:flex; gap:15px;">
                            <div class="pdf-form-group" style="flex:1">
                                <label>File Size</label>
                                <input type="text" name="fileSize" placeholder="e.g. 2.5 MB">
                            </div>
                            <div class="pdf-form-group" style="flex:1">
                                <label>Pages</label>
                                <input type="number" name="pages" placeholder="e.g. 15">
                            </div>
                        </div>

                        <div class="pdf-form-group">
                            <label>Description</label>
                            <textarea name="description" rows="3" placeholder="Short description of the resource..."></textarea>
                        </div>

                        <div class="pdf-form-group">
                            <label>Status</label>
                            <select name="status">
                                <option value="active">Active (Visible)</option>
                                <option value="inactive">Draft (Hidden)</option>
                            </select>
                        </div>

                        <button type="submit" class="pdf-submit-btn">Publish Resource</button>
                    </form>
                </div>
            </div>

            <div id="pdf-toast">Notification</div>
        `;
    document.body.appendChild(container);

    // Load FontAwesome if missing
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fa = document.createElement("link");
      fa.rel = "stylesheet";
      fa.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      document.head.appendChild(fa);
    }
  }

  // Attach Listeners
  function attachListeners(db, currentAppId) {
    const fab = document.getElementById("pdf-admin-fab");
    const modal = document.getElementById("pdf-admin-modal");
    const closeBtn = document.querySelector(".pdf-close-btn");
    const form = document.getElementById("add-pdf-form");

    // Toggle
    fab.addEventListener("click", () => modal.classList.add("active"));
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });

    // Submit
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector(".pdf-submit-btn");
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = "Saving...";

      try {
        const formData = new FormData(form);

        // Construct Data Object
        const data = {
          title: formData.get("title"),
          category: formData.get("category"),
          link: formData.get("link"),
          img: formData.get("img"),
          fileSize: formData.get("fileSize") || "Unknown",
          pages: formData.get("pages") ? parseInt(formData.get("pages")) : null,
          description: formData.get("description"),
          status: formData.get("status"),
          views: 0,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        };

        // Add to Firestore
        await db
          .collection(`artifacts/${currentAppId}/public/data/pdfResources`)
          .add(data);

        showToast("Resource Added Successfully!", "success");
        form.reset();
        modal.classList.remove("active");
      } catch (error) {
        console.error("Error adding document: ", error);
        // Handle Permission Denied (Auth)
        if (error.code === "permission-denied") {
          showToast("Error: You are not logged in as Admin.", "error");
        } else {
          showToast("Error: " + error.message, "error");
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  function showToast(msg, type = "success") {
    const toast = document.getElementById("pdf-toast");
    toast.textContent = msg;
    toast.className = type === "success" ? "success" : "error";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  }
})();
