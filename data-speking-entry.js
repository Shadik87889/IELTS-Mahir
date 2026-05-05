(async () => {
  // 1. Prompt for Admin Credentials securely via the browser
  const email = prompt("Enter your Admin Email:");
  if (!email) return console.warn("Upload cancelled: No email provided.");

  const password = prompt("Enter your Admin Password:");
  if (!password) return console.warn("Upload cancelled: No password provided.");

  console.log("⏳ Importing Firebase modules...");

  // 2. Dynamically import Firebase libraries directly from Google's CDN
  const { initializeApp } = await import(
    "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js"
  );
  const { getAuth, signInWithEmailAndPassword } = await import(
    "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js"
  );

  // 3. Import Firestore utilities
  const {
    getFirestore,
    doc,
    setDoc,
    collection,
    getDocs,
    query,
    where,
    deleteDoc,
  } = await import(
    "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"
  );

  // 4. Initialize a temporary, isolated Firebase App instance just for this script
  const firebaseConfig = {
    apiKey: "AIzaSyAxsd0CnLsh7t7yFy3ZPp6saGD_YpLL1mY",
    authDomain: "ielts-mahir-community-forum.firebaseapp.com",
    projectId: "ielts-mahir-community-forum",
    storageBucket: "ielts-mahir-community-forum.firebasestorage.app",
    messagingSenderId: "1036043607546",
    appId: "1:1036043607546:web:bd217e04cc0ec5f296d843",
  };

  const tempApp = initializeApp(
    firebaseConfig,
    "ConsoleUploadApp_" + Date.now(),
  );
  const auth = getAuth(tempApp);
  const db = getFirestore(tempApp);
  const targetAppId = "ielts-mahir-community-forum";

  try {
    console.log("🔐 Authenticating...");
    await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Authenticated successfully! Preparing data...");

    // --- CLEANUP OLD DATA FIRST ---
    console.log("🧹 Cleaning up existing Speaking lessons...");
    const resourcesRef = collection(
      db,
      "artifacts",
      targetAppId,
      "public",
      "data",
      "freeResources",
    );
    // Fetch all resources where category is "Speaking" to clear them out
    const q = query(resourcesRef, where("category", "==", "Speaking"));
    const snapshot = await getDocs(q);

    let deleteCount = 0;
    for (const docSnapshot of snapshot.docs) {
      await deleteDoc(docSnapshot.ref);
      deleteCount++;
    }
    console.log(
      `🗑️ Deleted ${deleteCount} old speaking lessons to prevent duplicates.`,
    );
    // -----------------------------------

    // 5. The Speaking Data
    const speakingLessons = [
      {
        id: "speak_01",
        title: "IELTS Speaking: 3 Tips for IELTS Speaking Test | IELTS Mahir |",
        summary:
          "Essential tips to boost your confidence and performance in the IELTS Speaking test.",
        link: "https://youtu.be/PlCAHkFCuFg?si=J4ULIFz-MJ6_wI0F",
        img: "https://i.ytimg.com/vi/PlCAHkFCuFg/hqdefault.jpg",
        keypoints: ["Speaking Tips", "Test Preparation"],
      },
      {
        id: "speak_02",
        title:
          "IELTS Speaking এ প্রশ্ন বুঝতে না পারলে কি করবেন? | IELTS Speaking | IELTS Mahir |",
        summary:
          "Strategies on what to do and say if you don't understand the examiner's question.",
        link: "https://youtu.be/PHgFAGFqAJ4?si=oKjRjl3DSru8nWh7",
        img: "https://i.ytimg.com/vi/PHgFAGFqAJ4/maxresdefault.jpg",
        keypoints: ["Handling Confusion", "Communication Strategy"],
      },
      {
        id: "speak_03",
        title:
          "IELTS Speaking Band 6.5 Real Test - with Feedback | IELTS Mahir |",
        summary:
          "Watch a real Band 6.5 speaking test with detailed examiner feedback.",
        link: "https://youtu.be/eL7zi0-QchI?si=AbvM27eUnYvQj24U",
        img:
          "https://i.ytimg.com/vi/eL7zi0-QchI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbgZlnyJq7TINqTcdn4SlWjvatBg",
        keypoints: ["Band 6.5", "Real Test", "Feedback"],
      },
      {
        id: "speak_04",
        title:
          "IELTS Speaking Test - Band 7 with Real Exam and Feedback | IELTS Mahir |",
        summary:
          "Analyze a Band 7 speaking performance to understand what examiners look for.",
        link: "https://youtu.be/x8KWhD5lOR4?si=RAzba-eHoI9d9Hy0",
        img:
          "https://i.ytimg.com/vi/x8KWhD5lOR4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgUGQVg3vM5-wlOdFxEid2YNPGqg",
        keypoints: ["Band 7.0", "Real Exam", "Analysis"],
      },
      {
        id: "speak_05",
        title:
          "IELTS Speaking score 6+ থেকে কিভাবে 7+ এ নিবেন | IELTS Mahir | IELTS Speaking |",
        summary:
          "A step-by-step guide to upgrading your speaking score from a 6 to a 7+.",
        link: "https://youtu.be/7rBJqwts93E?si=El70kH1i90GMK5N9",
        img:
          "https://i.ytimg.com/vi/7rBJqwts93E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzK26NvUAQZTgNj2zRlGmhM0tY2Q",
        keypoints: ["Score Improvement", "Band 6 to 7+"],
      },
      {
        id: "speak_06",
        title: "IELTS Speaking Band 7.0 Real Test | IELTS Mahir |",
        summary: "Full demonstration of a Band 7.0 speaking test performance.",
        link: "https://youtu.be/7hNkRW9Ea7I?si=M3JkNo_VbX2k9GpD",
        img:
          "https://i.ytimg.com/vi/7hNkRW9Ea7I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2dpZPyWPemOTf8G0TbbA-_pUV8w",
        keypoints: ["Band 7.0", "Mock Test"],
      },
      {
        id: "speak_07",
        title: "IELTS Speaking Band 7.5 Real Test | IELTS Mahir |",
        summary:
          "Learn high-level speaking techniques by watching a Band 7.5 real test.",
        link: "https://youtu.be/3APdIcbPD8U?si=j7hlJJbSsgBE457s",
        img:
          "https://i.ytimg.com/vi/3APdIcbPD8U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUPDpMK2j38qi8jTn5Xkzd4_1oRw",
        keypoints: ["Band 7.5", "Advanced Speaking"],
      },
      {
        id: "speak_08",
        title:
          "যে ৪টি কাজ করে IELTS Speaking এ nervousness overcome করবেন। | IELTS Mahir |",
        summary:
          "Four actionable methods to overcome nervousness and speak fluently during the test.",
        link: "https://youtu.be/4GXJK7FK1eQ?si=cEcLkcDWWWDH33X0",
        img:
          "https://i.ytimg.com/vi/4GXJK7FK1eQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAs9om1RXbj4yypWF0ZtugvdiSwyw",
        keypoints: ["Overcoming Nervousness", "Confidence"],
      },
      {
        id: "speak_09",
        title:
          "যে ১০টি কাজ করে IELTS Speaking এ আমি 8.5 পেয়েছি | How I Scored 8.5 in IELTS Speaking | IELTS Mahir",
        summary:
          "My personal top 10 habits and strategies that helped me achieve a Band 8.5.",
        link: "https://youtu.be/P_ceI6eHCMU?si=MJppsP06ka1tNchk",
        img:
          "https://i.ytimg.com/vi/P_ceI6eHCMU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9I7kWkeUQMuAehyQIErd-E9mbNg",
        keypoints: ["Band 8.5 Strategy", "Personal Experience"],
      },
      {
        id: "speak_10",
        title:
          "IELTS Speaking Test এর দিন যে ৩টি কাজ অবশ্যই করবেন । IELTS Mahir | #ielts #ieltsmahir",
        summary:
          "Three crucial things you must do on the day of your speaking exam.",
        link: "https://youtube.com/shorts/qn2L-9siaJU?si=x1S6oKjPqBiHb8ly",
        img:
          "https://i.ytimg.com/vi/qn2L-9siaJU/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLA8JruCviNc96lIqZA9u_MVKHYFVg&usqp=CCk",
        keypoints: ["Exam Day Tips", "Preparation"],
      },
      {
        id: "speak_11",
        title:
          "Speaking Cue Card এ ideas কিভাবে পাবেন? #ieltsmahir #ielts #ieltsspeaking",
        summary:
          "Brainstorming techniques to quickly generate ideas for any Cue Card topic.",
        link: "https://youtube.com/shorts/FzZxLM3qkUU?si=1J1beTfWu3IB61k1",
        img:
          "https://i.ytimg.com/vi/FzZxLM3qkUU/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDnSkLpLu4u8_TyLe89HJj2mlz00w&usqp=CCk",
        keypoints: ["Cue Card Ideas", "Brainstorming"],
      },
      {
        id: "speak_12",
        title: '"আমার কাছে মনে হয়" ইংরেজিতে কিভাবে বলবেন?',
        summary:
          "Various ways to express your opinion clearly and naturally in English.",
        link: "https://youtube.com/shorts/6hld54wdVJ4?si=c72iT9mjgag80ydq",
        img:
          "https://i.ytimg.com/vi/6hld54wdVJ4/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAtSHfC-uNcayuMH4p-96kppTrTUA&usqp=CCk",
        keypoints: ["Expressing Opinions", "Vocabulary"],
      },
      {
        id: "speak_13",
        title: "How to Start IELTS Speaking Cue Card Like a Pro? | IELTS Mahir",
        summary:
          "Learn professional opening statements to start your Part 2 Cue Card impressively.",
        link: "https://youtube.com/shorts/8b-lvmwrv-0?si=nEG2uDQS5N9uDYrj",
        img:
          "https://i.ytimg.com/vi/8b-lvmwrv-0/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC7wiv_-m2krz0Zd7FrhqnBnRaClQ&usqp=CCk",
        keypoints: ["Cue Card Openings", "Part 2 Strategy"],
      },
      {
        id: "speak_14",
        title:
          "10 Commonly Mispronounced English Words You Need to Know | Silent Letters | IELTS Mahir",
        summary:
          "Correct your pronunciation of tricky words and understand silent letters.",
        link: "https://youtu.be/wIq74KSzLvM?si=FVm7YfSa0zdxlFmz",
        img:
          "https://i.ytimg.com/vi/wIq74KSzLvM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqdrbHuSJHMEAPtcyC1nnrisE5sA",
        keypoints: ["Pronunciation", "Silent Letters"],
      },
      {
        id: "speak_15",
        title:
          "5 Ways to BOOST Your English Speaking Skills in 2026 | IELTS Mahir",
        summary:
          "Five effective daily habits to naturally boost your overall speaking fluency.",
        link: "https://youtu.be/ERmXuxV_up8?si=8Skz92w9Z2KyP0RD",
        img:
          "https://i.ytimg.com/vi/ERmXuxV_up8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiFyGn0QKBZ-6RYq6KOWZ0UgZVvA",
        keypoints: ["Speaking Fluency", "Daily Habits"],
      },
      {
        id: "speak_16",
        title:
          "যে ৩টি কাজ করলে IELTS Speaking-এ Fluency Improve করবেন | IELTS Mahir",
        summary:
          "Three key exercises to practice at home to significantly improve your fluency.",
        link: "https://youtu.be/VoX6B1rKJQo?si=oM3Hb8GVQrrqvYdx",
        img:
          "https://i.ytimg.com/vi/VoX6B1rKJQo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0Xw-wyFOnK42MBOdCyQF2RF_qLg",
        keypoints: ["Fluency Exercises", "At-home Practice"],
      },
      {
        id: "speak_17",
        title: "Band 7.0 IELTS Speaking Mock Test | IELTS Mahir",
        summary:
          "Another full-length mock test demonstrating a solid Band 7.0 performance.",
        link: "https://youtu.be/Owb6zsTNRvM?si=wzMjdNB0hNbow-S8",
        img:
          "https://i.ytimg.com/vi/Owb6zsTNRvM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD66UhWHu--P8NmZ3-FMWfpWsECHw",
        keypoints: ["Mock Test", "Band 7.0"],
      },
      {
        id: "speak_18",
        title: "IELTS পরীক্ষায় কি Common প্রশ্ন আসে? | IELTS Mahir",
        summary:
          "A breakdown of whether common or repeated questions appear in the actual test.",
        link: "https://youtube.com/shorts/Vci4xHlv3UM?si=cT58h_NVfkEv-Gmd",
        img:
          "https://i.ytimg.com/vi/Vci4xHlv3UM/oardefault.jpg?sqp=-oaymwEdCJYDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCeeDl1rKqhfzraM5fRJskDzZysjg&usqp=CCk",
        keypoints: ["Common Questions", "Test Reality"],
      },
    ];

    console.log(
      `🚀 Starting upload/update of ${speakingLessons.length} lessons to Firestore...`,
    );
    let addedCount = 0;

    // We get the current time once, then subtract milliseconds based on the index.
    const now = Date.now();

    // 6. Uploading sequence (Using setDoc and Exact Timestamps to guarantee order)
    for (let i = 0; i < speakingLessons.length; i++) {
      const lesson = speakingLessons[i];
      const docRef = doc(
        db,
        "artifacts",
        targetAppId,
        "public",
        "data",
        "freeResources",
        lesson.id,
      );

      // CREATE A CUSTOM EXACT TIMESTAMP
      // The UI sorts descending. The first item gets the newest time (now - 0),
      // ensuring the exact array order is preserved on your frontend!
      const guaranteedOrderTimestamp = new Date(now - i * 1000);

      await setDoc(
        docRef,
        {
          title: lesson.title,
          category: "Speaking", // Set category to Speaking
          link: lesson.link,
          summary: lesson.summary,
          keypoints: lesson.keypoints,
          img: lesson.img,
          timestamp: guaranteedOrderTimestamp,
          views: "0 views",
          status: "active",
        },
        { merge: true },
      );

      addedCount++;
      console.log(
        `   [${addedCount}/${speakingLessons.length}] Added: "${lesson.title}"`,
      );
    }

    console.log(
      "🎉 All done! Please refresh your Admin Panel. The exact array order for Speaking lessons is now 100% guaranteed.",
    );
  } catch (err) {
    console.error("❌ Error occurred:", err.message);
    if (err.code === "auth/invalid-credential") {
      console.error(
        "Hint: Make sure you typed your Admin email and password correctly.",
      );
    }
  }
})();
