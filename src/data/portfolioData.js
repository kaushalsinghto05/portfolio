export const portfolioData = {
  personal: {
    name: "Kaushal Singh",
    role: "Full-Stack Developer & AI/ML Enthusiast",
    degree: "B.Tech in Computer Science & Engineering",
    college: "United Institute of Technology, Prayagraj",
    location: "Prayagraj & Jaunpur, Uttar Pradesh, India",
    email: "kaushalsinghoksi.c@gmail.com",
    phone: "+91-9005346561",
    profileImage: "/assets/profile.jpg",
    resumeUrl: "/assets/resume.pdf",
    shortBio: "Hey there! I'm a pre-final year CS student who genuinely loves turning raw ideas into working software. Whether it's crafting slick React web apps, training computer vision models to detect objects in real time, or grinding out DSA problems on LeetCode late at night — I love building things that actually work.",
    typewriterWords: [
      "Full-Stack Web Builder",
      "AI & Machine Learning Explorer",
      "Computer Vision Enthusiast",
      "60+ LeetCode Problem Solver",
      "Agentic AI Certified Explorer ✨"
    ],
    socials: {
      github: "https://github.com/kaushalsinghto05",
      linkedin: "https://linkedin.com/in/kaushal-singh-og",
      leetcode: "https://leetcode.com/u/kaushasingh/",
      email: "mailto:kaushalsinghoksi.c@gmail.com",
      phone: "tel:+919005346561"
    }
  },

  stats: [
    { label: "LeetCode DSA Solved", value: "60+", icon: "code" },
    { label: "Projects Shipped", value: "6+", icon: "rocket" },
    { label: "B.Tech CGPA", value: "7.00", icon: "academic" },
    { label: "REST APIs Built", value: "30+", icon: "server" }
  ],

  about: {
    story: "My journey into coding started with curiosity about how software and smart algorithms power the tools we use daily. As a B.Tech Computer Science student at United Institute of Technology, Prayagraj (2023–2027), I've spent the last few years diving headfirst into full-stack development, machine learning, and competitive programming. I believe in learning by doing — building real projects from scratch rather than just reading theory.",
    principles: [
      {
        title: "Clean Architecture & Fast Interfaces",
        description: "I write clean, modular React and Node.js code with responsive layouts that feel instantaneous and delightful to use."
      },
      {
        title: "Practical AI & Computer Vision",
        description: "From custom YOLO helmet detection on video streams to ML classification for healthcare datasets, I focus on AI that solves tangible problems."
      },
      {
        title: "Algorithmic Problem Solving",
        description: "Solving 60+ DSA problems on LeetCode taught me to think critically about time and space complexity, edge cases, and optimization."
      },
      {
        title: "End-to-End Ownership",
        description: "From designing database schemas and writing 30+ REST APIs to crafting the frontend UI and deploying to the cloud, I enjoy owning the entire stack."
      }
    ],
    interests: [
      { name: "Cricket", icon: "cricket", desc: "Playing match-winning overs on weekends" },
      { name: "Volleyball", icon: "volleyball", desc: "Team energy & fast reflexes on court" },
      { name: "Badminton", icon: "badminton", desc: "Smashing rallies & agility" },
      { name: "Music", icon: "music", desc: "Coding fuel & lo-fi beats" },
      { name: "Exploring New Tech", icon: "tech", desc: "Tinkering with LLMs & 3D Web" }
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        title: "Programming Languages",
        icon: "code",
        color: "from-blue-500 via-cyan-400 to-teal-400",
        items: [
          { name: "C", level: 85 },
          { name: "C++", level: 88 },
          { name: "Python", level: 90 },
          { name: "JavaScript", level: 86 }
        ]
      },
      {
        id: "web-dev",
        title: "Web Technologies & Frameworks",
        icon: "globe",
        color: "from-purple-500 via-pink-500 to-rose-400",
        items: [
          { name: "React.js", level: 88 },
          { name: "Node.js", level: 82 },
          { name: "Express.js", level: 84 },
          { name: "REST APIs", level: 88 },
          { name: "HTML5 & CSS3", level: 92 },
          { name: "JavaScript (ES6+)", level: 88 }
        ]
      },
      {
        id: "ml-data",
        title: "Machine Learning & Data Science",
        icon: "brain",
        color: "from-emerald-400 via-teal-500 to-cyan-500",
        items: [
          { name: "Scikit-learn", level: 86 },
          { name: "Pandas", level: 88 },
          { name: "NumPy", level: 90 },
          { name: "Matplotlib", level: 85 },
          { name: "Data Preprocessing", level: 88 },
          { name: "Model Development", level: 85 }
        ]
      },
      {
        id: "cv-ai",
        title: "Computer Vision & Deep Learning",
        icon: "eye",
        color: "from-amber-400 via-orange-500 to-rose-500",
        items: [
          { name: "OpenCV", level: 86 },
          { name: "YOLO (Object Detection)", level: 88 },
          { name: "TensorFlow", level: 80 },
          { name: "face-api.js", level: 84 }
        ]
      },
      {
        id: "ai-llm",
        title: "AI & LLM Integrations",
        icon: "sparkles",
        color: "from-cyan-400 via-indigo-500 to-purple-500",
        items: [
          { name: "OpenAI API", level: 88 },
          { name: "Chat Completions", level: 90 },
          { name: "Prompt Engineering", level: 92 }
        ]
      },
      {
        id: "db-tools",
        title: "Databases & Dev Tools",
        icon: "database",
        color: "from-rose-500 via-purple-600 to-blue-500",
        items: [
          { name: "MySQL", level: 84 },
          { name: "MongoDB", level: 82 },
          { name: "SQLite", level: 85 },
          { name: "Git & GitHub", level: 90 },
          { name: "Postman", level: 86 },
          { name: "JWT Auth", level: 85 }
        ]
      }
    ]
  },

  projects: [
    {
      id: "ravan-assistant",
      title: "Ravan — Genetic AI Coding Assistant",
      status: "In Progress",
      category: "AI-ML",
      categoryLabel: "AI / Genetic Algorithms",
      featured: true,
      description: "An experimental coding assistant that combines genetic algorithm evolution with OpenAI LLM prompts to iteratively test, refine, mutate, and repair code until it achieves optimal execution.",
      highlights: [
        "Automated fitness evaluation scoring code on accuracy, runtime, and simplicity",
        "Prompt-engineered LLM feedback loops for intelligent bug repair",
        "Self-improving code generation pipeline with AST syntax validation"
      ],
      techStack: ["OpenAI API", "Prompt Engineering", "Python", "JavaScript", "Genetic Algorithms"],
      github: "https://github.com/kaushalsinghto05",
      live: "https://github.com/kaushalsinghto05",
      gradient: "from-purple-600 via-pink-600 to-cyan-400"
    },
    {
      id: "securenet-nids",
      title: "SecureNet — AI Network Intrusion Detector",
      status: "In Progress",
      category: "Cybersecurity",
      categoryLabel: "Cybersecurity & ML",
      featured: true,
      description: "A network security monitor that captures live packet traffic, extracts statistical flow features, and feeds them into ML anomaly detection models to catch suspicious activity and attacks in real time.",
      highlights: [
        "Live network packet sniffing and feature extraction engine",
        "Trained anomaly detection models for scanning zero-day traffic spikes",
        "Visual threat analytics dashboard with instant incident alert flags"
      ],
      techStack: ["Python", "Machine Learning", "Network Packet Analysis", "Scikit-learn", "Scapy"],
      github: "https://github.com/kaushalsinghto05",
      live: "https://github.com/kaushalsinghto05",
      gradient: "from-rose-600 via-red-500 to-amber-400"
    },
    {
      id: "helmet-detection",
      title: "Real-Time Helmet Detection for Road Safety",
      status: "Completed",
      category: "AI-ML",
      categoryLabel: "Computer Vision",
      featured: true,
      description: "A computer vision safety system using a custom-trained YOLO model on construction and road safety datasets, optimized to process live camera feeds frame-by-frame at high FPS.",
      highlights: [
        "Trained on Hard Hat Workers & Construction Site Safety datasets",
        "Optimized frame-by-frame inference for smooth live video feeds",
        "Instant visual bounding boxes flagging safety non-compliance"
      ],
      techStack: ["Python", "OpenCV", "YOLO", "TensorFlow", "Deep Learning"],
      github: "https://github.com/kaushalsinghto05",
      live: "https://github.com/kaushalsinghto05",
      gradient: "from-amber-500 via-orange-500 to-rose-500"
    },
    {
      id: "tours-travels",
      title: "Tours & Travels Full-Stack Booking Platform",
      status: "Completed",
      category: "Web Dev",
      categoryLabel: "Full-Stack Web Dev",
      featured: true,
      description: "A complete commercial travel platform spanning 9 custom pages with customer bookings, package browsing, driver allocations, and an admin dashboard powered by 30+ REST APIs.",
      highlights: [
        "30+ REST APIs across 6 modular services (booking, cars, drivers, packages, enquiries, auth)",
        "Secure role-based JWT access control for admins, staff, and travelers",
        "Google Maps integration for instant route distance calculations and geocoding"
      ],
      techStack: ["React.js (Vite)", "Node.js", "Express.js", "MongoDB", "JWT", "Google Maps API"],
      github: "https://github.com/kaushalsinghto05",
      live: "https://github.com/kaushalsinghto05",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600"
    },
    {
      id: "face-auth-system",
      title: "Biometric Face Recognition Login System",
      status: "Completed",
      category: "AI-ML",
      categorySecondary: "Web Dev",
      categoryLabel: "AI & Full-Stack",
      featured: true,
      description: "A passwordless login system giving users the choice between password authentication or instant webcam facial verification, benchmarked across 20+ test logins with bcrypt-secured database storage.",
      highlights: [
        "Client-side 128-d face descriptor extraction using face-api.js",
        "Bcrypt-hashed credential storage with SQLite backend and secure tokens",
        "Smooth fallback logic for traditional password entry if webcam is absent"
      ],
      techStack: ["React.js", "Node.js", "SQLite", "face-api.js", "bcrypt", "Express.js"],
      github: "https://github.com/kaushalsinghto05",
      live: "https://github.com/kaushalsinghto05",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500"
    },
    {
      id: "heart-diabetes-prediction",
      title: "Heart & Diabetes Risk Prediction Models",
      status: "Completed",
      category: "AI-ML",
      categoryLabel: "Healthcare ML",
      featured: true,
      description: "Supervised classification pipelines predicting cardiovascular disease and diabetes risk using the UCI Heart Disease and Pima Indians Diabetes datasets with full evaluation benchmarks.",
      highlights: [
        "Data cleaning, missing value handling, feature scaling, and outlier filtering",
        "Benchmarked models using confusion matrices, precision, recall, and ROC curves",
        "Clear visualization plots built with Matplotlib and Seaborn for doctor-friendly insights"
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/kaushalsinghto05",
      live: "https://github.com/kaushalsinghto05",
      gradient: "from-pink-500 via-purple-500 to-indigo-500"
    }
  ],

  achievements: [
    {
      title: "60+ DSA Problems Solved on LeetCode",
      description: "Tackled 60+ algorithmic challenges across arrays, binary trees, dynamic programming, graphs, and two-pointer techniques.",
      icon: "code",
      badge: "Problem Solver",
      highlight: "60+ Solved",
      link: "https://leetcode.com/u/kaushasingh/"
    },
    {
      title: "Maintained 7.00 CGPA in B.Tech CSE",
      description: "Consistent academic performance at United Institute of Technology, Prayagraj, building strong foundations in core CS subjects.",
      icon: "academic",
      badge: "Academics",
      highlight: "7.00 CGPA"
    },
    {
      title: "Shipped 6 Real-World Projects",
      description: "Built 6 diverse applications from scratch spanning full-stack web platforms, machine learning classifiers, and cybersecurity tools.",
      icon: "rocket",
      badge: "Builder",
      highlight: "6 Shipped"
    },
    {
      title: "Ideathons & Hackathons",
      description: "Participated in college ideathons and technical competitions, collaborating with peers to brainstorm and build rapid prototypes.",
      icon: "trophy",
      badge: "Competitions",
      highlight: "Active Participant"
    }
  ],

  leetcodeWidget: {
    username: "kaushasingh",
    profileUrl: "https://leetcode.com/u/kaushasingh/",
    totalSolved: 60,
    easy: 35,
    medium: 22,
    hard: 3,
    acceptanceRate: "68.4%",
    badge: "Active LeetCode Solver"
  },

  certifications: [
    {
      id: "cert-oracle-ai",
      title: "Agentic AI Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Verified Credential",
      skills: ["Agentic AI", "AI Agents", "LangChain", "OpenAI Agents SDK", "MCP Server", "OCI AI"],
      credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5E7A03AEDCED04FC66736967E0AFB2099BF6F6D2B50C70A18A92EA707387766E",
      icon: "brain"
    },
    {
      id: "cert-hackerrank",
      title: "HackerRank Certified Developer (Skill Assessment)",
      issuer: "HackerRank",
      date: "Verified Credential",
      skills: ["Problem Solving", "Algorithms", "Data Structures", "Code Optimization"],
      credentialUrl: "https://www.hackerrank.com/certificates/0613df0c6c20",
      icon: "code"
    },
    {
      id: "cert-fullstack",
      title: "Full-Stack & Machine Learning Engineering Track",
      issuer: "Practical Engineering Projects",
      date: "2024",
      skills: ["React.js", "Node.js", "Computer Vision (YOLO)", "Scikit-Learn", "REST APIs"],
      credentialUrl: "https://github.com/kaushalsinghto05",
      icon: "react"
    }
  ],

  education: [
    {
      institution: "United Institute of Technology, Prayagraj",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      duration: "July 2023 – May 2027",
      grade: "CGPA: 7.00 / 10.0",
      location: "Prayagraj, Uttar Pradesh",
      status: "Current",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Design & Analysis of Algorithms",
        "Probability & Statistics",
        "Computer Networks"
      ],
      description: "Deepening my knowledge of core computer science principles, database internals, data structures, and practical software design patterns."
    },
    {
      institution: "Bayalasi Inter College, Jalalpur, Jaunpur",
      degree: "Senior Secondary (12th: 72%) & Secondary (10th: 83%)",
      duration: "Completed with Distinction",
      grade: "12th: 72% | 10th: 83%",
      location: "Jalalpur, Jaunpur, Uttar Pradesh",
      status: "Completed",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
      description: "Built a solid mathematical and analytical foundation that sparked my passion for programming and technology."
    }
  ],

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]
};
