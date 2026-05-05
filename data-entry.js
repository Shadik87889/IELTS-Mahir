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
  const { getFirestore, collection, addDoc, serverTimestamp } = await import(
    "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"
  );

  // 3. Initialize a temporary, isolated Firebase App instance just for this script
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
    // Authenticate using the provided credentials
    await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Authenticated successfully! Preparing data...");

    // 4. The Data extracted from your two screenshots
    const listeningLessons = [
      {
        title: "Live Class: Matching Questions | IELTS Mahir",
        summary:
          "Comprehensive live class focusing on techniques to solve matching questions accurately.",
        link: "https://www.youtube.com/live/fRxYzPWr38Y?si=XQPetbiemcRyEUX_",
        img: "https://i.ytimg.com/vi/fRxYzPWr38Y/maxresdefault.jpg?v=67b84177",
        keypoints: ["Matching Questions", "Live Class", "Accuracy"],
      },
      {
        title: "Live Class: Listening Part 4 | IELTS Mahir |",
        summary:
          "Deep dive into Listening Part 4, tackling long monologues and complex vocabulary.",
        link: "https://www.youtube.com/live/c9hSiWzBQLc?si=aq_5akecxO7Opf7K",
        img: "https://i.ytimg.com/vi/c9hSiWzBQLc/maxresdefault.jpg?v=67b84250",
        keypoints: ["Part 4", "Monologues", "Live Class"],
      },
      {
        title:
          "Listening Maps Tips and Tricks in Bangla | Most Effective Tips And Tricks Ielts Map | IELTS Mahir",
        summary:
          "Effective tips and tricks in Bangla to confidently label maps in the listening test.",
        link: "https://www.youtube.com/live/0hjUeO0q1rE?si=m7XYM1y-CEdS4QTR",
        img: "https://i.ytimg.com/vi/0hjUeO0q1rE/maxresdefault.jpg?v=67b83f88",
        keypoints: ["Map Labeling", "Bangla", "Tips"],
      },
      {
        title: "IELTS Listening MCQ: Live Class | IELTS Mahir |",
        summary:
          "Interactive live class dedicated to mastering multiple-choice questions in listening.",
        link: "https://www.youtube.com/live/Ap3G9l_bYzQ?si=Pb4TmtxRrXnsN3Zp",
        img: "https://i.ytimg.com/vi/Ap3G9l_bYzQ/maxresdefault.jpg?v=62d69249",
        keypoints: ["MCQs", "Live Class", "Practice"],
      },
      {
        title: "IELTS Listening এ 8.5 score করার Tips | IELTS Mahir |",
        summary:
          "Advanced tips and daily practices to push your listening score to an 8.5.",
        link: "https://youtu.be/hy8S4Is0y-E?si=deSXCn5WB9zCUjXW",
        img: "https://i.ytimg.com/vi/nivfCVDKdbI/maxresdefault.jpg",
        keypoints: ["Band 8.5", "Advanced Tips", "High Score"],
      },
      {
        title:
          "IELTS Listening MCQs কিভাবে Solve করবেন? | Best Tips & Strategies | IELTS Mahir",
        summary:
          "Step-by-step strategies for breaking down and solving tricky MCQs.",
        link: "https://youtu.be/hy8S4Is0y-E?si=QHbocFH92YYzR0yv",
        img: "https://i.ytimg.com/vi/hy8S4Is0y-E/maxresdefault.jpg",
        keypoints: ["MCQ Strategies", "Step-by-step", "Accuracy"],
      },
      {
        title: "Listening MCQs এ score improve করবেন কীভাবে | IELTS Mahir |",
        summary:
          "Actionable advice on how to steadily improve your performance on multiple-choice questions.",
        link: "https://youtu.be/MPhvG4uxQJs?si=ZUyAB2hpKt0W1bb7",
        img: "https://i.ytimg.com/vi/MPhvG4uxQJs/hqdefault.jpg",
        keypoints: ["Score Improvement", "MCQs", "Advice"],
      },
      {
        title:
          "Listening MCQs তে স্কোর কিভাবে improve করবেন? | IELTS Listening |",
        summary:
          "Further techniques and practice methods to boost your MCQ scores in listening.",
        link: "https://youtu.be/rK6rv9ncXT8?si=kwvmSb2-xUm-kdee",
        img: "https://youtu.be/I2zdqbN-7xk?si=V4IzTn42FpmuYrX3",
        keypoints: ["MCQ Practice", "Techniques", "Improvement"],
      },
      {
        title:
          "IELTS Listening এ অডিও স্পিড কি আগের থেকে বেশি শোনা? | IELTS Mahir |",
        summary:
          "Addressing concerns about audio speed in recent listening tests and how to adapt.",
        link: "https://youtu.be/I2zdqbN-7xk?si=sB9bcFBmLWSeeurz",
        img:
          "https://i.ytimg.com/vi/I2zdqbN-7xk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBBY2cRz6O2zfDF74ci1_O4CjA5A",
        keypoints: ["Audio Speed", "Adaptation", "Recent Tests"],
      },
      {
        title:
          "IELTS Listening এ audio speed কি এখন বেশি? #ielts #ieltslistening",
        summary:
          "A quick discussion on the perceived increase in listening audio speed.",
        link:
          "https://i.ytimg.com/vi/qsM6jDl4TQM/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhWIF4oZTAP&rs=AOn4CLBO33FAw3gtFFjDUEPOOSq4tDRWeg",
        img: "https://youtube.com/shorts/qsM6jDl4TQM?si=GVJO2u6EdrBASsE1",
        keypoints: ["Audio Speed", "Discussion"],
      },
      {
        title:
          "IELTS Listening Tip: 3 Ways To Improve Listening Skill | IELTS Mahir |",
        summary:
          "Three fundamental ways to build and improve your overall English listening skills.",
        link: "https://youtu.be/Gt0p5yMuGHo?si=NFzzaPQuYPdM-PgQ",
        img:
          "https://i.ytimg.com/vi/Gt0p5yMuGHo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyHJJUZ-gOkRdOKNCxZRYv04J25Q",
        keypoints: ["Skill Building", "Core Tips", "Fundamentals"],
      },
      {
        title:
          "IELTS Listening Tip: Listening MCQs Tips and Tricks | IELTS Mahir |",
        summary:
          "Quick tips and tricks specifically targeted at solving multiple-choice questions faster.",
        link: "https://youtu.be/TOjHiGwr_LQ?si=8Lc8tnjxP6s0An26",
        img:
          "https://i.ytimg.com/vi/TOjHiGwr_LQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDb57oshlh4Oub_ozo98mKl8kclEA",
        keypoints: ["Quick Tips", "MCQs", "Speed"],
      },
      {
        title:
          "2026-এ IELTS Listening স্কোর বাড়াতে, টেস্টের পর করণীয় কী? | IELTS Mahir",
        summary:
          "Crucial steps to take after practice tests to analyze mistakes and increase your score.",
        link: "https://youtu.be/BG8kO4bZ5-A?si=WSAh3vAJSbj_LR5O",
        img:
          "https://i.ytimg.com/vi/uIPPYtF_TmM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARh_ICMoITAP&rs=AOn4CLAZEc2qDj0QdtNmHOlnqvXsQQXi2A",
        keypoints: ["Post-Test Analysis", "Mistake Review", "Strategy"],
      },
      {
        title:
          "IELTS Listening এবং Reading-এর উত্তরগুলো Capital Letter-এ লিখব, না কি Small Letter-এ? | IELTS Mahir",
        summary:
          "Clarification on the rules regarding capitalization when transferring answers.",
        link: "https://youtu.be/h5UY7gBF-Ec?si=dKJd7PtTLaYBzgeX",
        img:
          "https://i.ytimg.com/vi/h5UY7gBF-Ec/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBXCMcgsxSSBn-Lg6azQ94fk1nznw&usqp=CCk",
        keypoints: ["Capitalization", "Answer Sheet", "Rules"],
      },
      {
        title:
          "10 Commonly Mispronounced English Words You Need to Know | Silent Letters | IELTS Mahir",
        summary:
          "Learn the correct pronunciation of common words to avoid confusion during the listening test.",
        link: "https://youtu.be/wIq74KSzLvM?si=w68bKS1Vi0R5_KSq",
        img:
          "https://i.ytimg.com/vi/wIq74KSzLvM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqdrbHuSJHMEAPtcyC1nnrisE5sA",
        keypoints: ["Pronunciation", "Silent Letters", "Vocabulary"],
      },
      {
        title:
          "IELTS Listening এবং IELTS Reading-এ Brackets এর ভেতরের Word কি লিখতে হবে? | IELTS Mahir",
        summary:
          "Guidelines on whether to include words in brackets on your final answer sheet.",
        link: "https://youtu.be/Hh-uYAe6G1g?si=KkkoJISMCI-Zqqob",
        img:
          "https://i.ytimg.com/vi/Hh-uYAe6G1g/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBAdrpcbWF61uDt8wejuj9j6JuKvA&usqp=CCk",
        keypoints: ["Brackets", "Answer Formatting", "Guidelines"],
      },
      {
        title:
          "IELTS Listening-এ spelling মিস্টেক সমস্যা দূর করবেন কীভাবে? | IELTS Mahir",
        summary:
          "Effective methods to reduce spelling mistakes and ensure you don't lose easy marks.",
        link: "https://youtu.be/uIPPYtF_TmM?si=v5ad75jv4bYNRK3X",
        img:
          "https://i.ytimg.com/vi/uIPPYtF_TmM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG2CIACgA-KAgwIABABGH8gIyghMA8=&rs=AOn4CLCnuai_QYP-SpiZcHi7p7Qq-xRrkA",
        keypoints: ["Spelling Mistakes", "Accuracy", "Practice"],
      },
      {
        title:
          "🎧 IELTS Listening MCQ-এ Score কীভাবে IMPROVE করবেন? | IELTS Mahir",
        summary:
          "Audio-focused lesson on improving your multiple-choice question scores.",
        link: "https://youtu.be/bNS5xRhXLoY?si=7PPVhk7DzZJD5j2M",
        img: "https://youtu.be/bNS5xRhXLoY?si=DfzipVpG-DzQc51X",
        keypoints: ["MCQs", "Audio Lesson", "Score Boost"],
      },
      {
        title:
          "No more than 3 words থাকলে উত্তর কয়টি শব্দ হবে | IELTS Listening",
        summary:
          "Understanding word count instructions and ensuring your answers fit the constraints.",
        link: "https://youtu.be/8M8hQjoNtzI?si=FBQAHoS0NOJwpeOI",
        img:
          "https://i.ytimg.com/vi/8M8hQjoNtzI/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG2CIACgA-KAgwIABABGGUgYShRMA8=&rs=AOn4CLDYQFrJNDdXlwfGHXX88nx14yJWBw",
        keypoints: ["Word Count", "Instructions", "Constraints"],
      },
    ];

    console.log(
      `🚀 Starting upload of ${listeningLessons.length} lessons to Firestore...`,
    );
    let addedCount = 0;

    // 5. Uploading sequence
    for (const lesson of listeningLessons) {
      await addDoc(
        collection(
          db,
          "artifacts",
          targetAppId,
          "public",
          "data",
          "freeResources",
        ),
        {
          title: lesson.title,
          category: "Listening", // Crucial: sets the category correctly
          link: lesson.link || "",
          summary: lesson.summary,
          keypoints: lesson.keypoints,
          img: lesson.img || "",
          timestamp: serverTimestamp(),
          views: "0 views",
          status: "active",
        },
      );
      addedCount++;
      console.log(
        `   [${addedCount}/${listeningLessons.length}] Added: "${lesson.title}"`,
      );
    }

    console.log(
      "🎉 All done! Please refresh your Admin Panel to see the newly added Listening resources.",
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
