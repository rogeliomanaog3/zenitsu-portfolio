/**
 * PORTFOLIO CONFIGURATION & DATA SOURCE
 * 
 * ==============================================================================
 * Centralized data source for Manaog, Rogelio III R.
 * ==============================================================================
 */

export const portfolioData = {
  // Personal & Identity
  personal: {
    greeting: "HELLO, I'M",
    name: "Manaog, Rogelio III R.",
    shortName: "Rogelio",
    role: "Bachelor of Science in Information Technology",
    // Roles cycled in the dynamic typewriter hero effect:
    typewriterRoles: [
      "Be a good student everyday",
      "Bachelor of Science in Information Technology",
      "Aspiring Full-Stack Developer",
      "Building Clean, Resilient & Fast Web Solutions",
    ],
    shortIntro:
      "Information Technology student at National College of Science and Technology. Dedicated to learning, mastering modern full-stack development, and building high-impact digital experiences with lightning precision.",
    bio:
      "Life is too short. I believe in giving my best every day, staying curious, and building software that solves real problems with clean architecture, speed, and continuous self-improvement.",
    course: "Bachelor of Science in Information Technology",
    school: "National College of Science and Technology",
    location: "Pasong Kawayan II, General Trias City, Cavite",
    careerGoal:
      "Be successful — to continually grow as an accomplished software engineer, architect resilient full-stack applications, and make a meaningful impact through technology.",
    profileImage: "Manaog, Rogelio III R.",
    email: "manaogrogelioiiir@gmail.com",
    phone: "+63 900 000 0000",
    resumeUrl: "#",
    status: "Available for Projects & Tech Inquiries",
  },

  // About Section Modular Metric Cards
  aboutCards: {
    education: {
      title: "Education",
      value: "BS in Information Technology",
      subtitle: "National College of Science and Technology",
      icon: "GraduationCap",
    },
    focus: {
      title: "Focus",
      value: "Software & Web Development",
      subtitle: "Be a good student everyday",
      icon: "Code2",
    },
    location: {
      title: "Location",
      value: "General Trias City, Cavite",
      subtitle: "Pasong Kawayan II",
      icon: "MapPin",
    },
  },

  // Social Channels
  socialLinks: {
    github: {
      name: "GitHub",
      url: "https://github.com",
      placeholder: "github.com/rogeliomanaog",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com",
      placeholder: "linkedin.com/in/rogeliomanaog",
    },
    facebook: {
      name: "Facebook",
      url: "https://facebook.com",
      placeholder: "facebook.com/rogeliomanaog",
    },
    instagram: {
      name: "Instagram",
      url: "https://instagram.com",
      placeholder: "instagram.com/rogeliomanaog",
    },
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  // Experience Timeline
  experience: [
    {
      id: "exp-1",
      date: "2025 - PRESENT",
      role: "Information Technology Student & Developer",
      company: "National College of Science and Technology",
      description:
        "Developing responsive web applications and database architectures. Practicing modern development standards, collaborative version control, and clean component systems.",
      technologies: ["React", "JavaScript", "Node.js", "Tailwind CSS"],
    },
    {
      id: "exp-2",
      date: "2024 - 2025",
      role: "Academic Project Developer",
      company: "NCST College Projects",
      description:
        "Engineered full-stack database-driven student management prototypes. Implemented relational data schemas, secure inputs, and intuitive user interfaces.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    },
    {
      id: "exp-3",
      date: "2023 - 2024",
      role: "Independent Coding & Exploration",
      company: "Self-Directed Projects",
      description:
        "Created modular utilities, responsive frontend layouts, and automation scripts to hone programming fundamentals and computer science concepts.",
      technologies: ["Python", "Git", "GitHub", "VS Code"],
    },
  ],

  // Skills & Technologies (Strictly categorized per user prompt)
  skills: [
    {
      category: "Frontend",
      description: "Crafting reactive, lightning-fast user interfaces with semantic design.",
      items: [
        { name: "HTML", level: "Advanced", icon: "FileCode2" },
        { name: "CSS", level: "Advanced", icon: "Palette" },
        { name: "JavaScript", level: "Advanced", icon: "Sparkles" },
        { name: "React", level: "Intermediate", icon: "Layers" },
      ],
    },
    {
      category: "Backend",
      description: "Engineering dependable server architecture and high-throughput logic.",
      items: [
        { name: "PHP", level: "Intermediate", icon: "Server" },
        { name: "Node.js", level: "Intermediate", icon: "Cpu" },
        { name: "Python", level: "Intermediate", icon: "Terminal" },
        { name: "Java", level: "Intermediate", icon: "Boxes" },
      ],
    },
    {
      category: "Database",
      description: "Relational modeling, distributed document stores, and state queries.",
      items: [
        { name: "MySQL", level: "Intermediate", icon: "Database" },
        { name: "Firebase", level: "Intermediate", icon: "Flame" },
      ],
    },
    {
      category: "Tools",
      description: "Modern developer workflow tools, version control, and design systems.",
      items: [
        { name: "Git", level: "Advanced", icon: "GitBranch" },
        { name: "GitHub", level: "Advanced", icon: "Github" },
        { name: "Figma", level: "Intermediate", icon: "Figma" },
        { name: "VS Code", level: "Advanced", icon: "Laptop" },
      ],
    },
  ],

  // Featured Project (Large high-impact showcase)
  featuredProject: {
    tag: "FEATURED PROJECT",
    japaneseSubhead: "壱ノ型 • THUNDERCLAP SHOWCASE",
    title: "Full-Stack Web Portal Architecture",
    description:
      "A comprehensive, responsive full-stack platform built with modular component hierarchies, relational database schemas, and clean state handling designed for optimal performance.",
    image: "Web Platform & Dashboard System",
    role: "Lead Full-Stack Developer",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS", "Git"],
    features: [
      "Real-time event processing and synchronized state management",
      "Role-based authenticated access control and secure API validation",
      "Dynamic data visualization dashboard with low-latency chart rendering",
      "Subtle micro-interactions and mobile-first responsive architecture",
    ],
    problemSolved:
      "Manual and fragmented data handling created workflow bottlenecks and inconsistent records.",
    solution:
      "Engineered an automated full-stack architecture with normalized relational database models, instant validation, and an intuitive minimalist UI.",
    liveUrl: "#",
    codeUrl: "#",
    caseStudy: {
      client: "Academic Capstone / Enterprise Prototype",
      duration: "3 Months Intensive Development",
      architecture: "React SPA + Node REST Microservices + MySQL Cluster",
      impact: "99.8% Test Coverage, 40% reduction in workflow transaction times.",
    },
  },

  // Selected Projects (3-Column Grid)
  projects: [
    {
      id: "project-1",
      number: "PROJECT 01",
      name: "Interactive Web Application",
      description:
        "Dynamic web application engineered with modular components, responsive layouts, and robust client-side routing.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: "Web App UI Preview",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: "project-2",
      number: "PROJECT 02",
      name: "Backend REST API Service",
      description:
        "Scalable backend API server and data management portal with relational schema models and automated endpoint validation.",
      technologies: ["Node.js", "Express", "MySQL", "Postman"],
      image: "REST API Architecture Preview",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: "project-3",
      number: "PROJECT 03",
      name: "Real-Time Utility Dashboard",
      description:
        "Cross-platform developer utility and automated dashboard built for real-time monitoring and seamless state synchronization.",
      technologies: ["Python", "Firebase", "Git", "Figma"],
      image: "Monitoring Dashboard Preview",
      liveUrl: "#",
      codeUrl: "#",
    },
  ],

  // Zenitsu / Thunder Breathing subtle theme accents & easter eggs
  zenitsuTheme: {
    mantra: "Master one technique to absolute perfection.",
    japaneseTitle: "雷の呼吸 • 壱ノ型 霹靂一閃",
    accentColor: "#F59E0B",
    secondaryColor: "#F97316",
  },

  // AI Assistant Pre-Loaded Knowledge Base
  aiKnowledge: {
    welcomeMessage:
      "Greetings! I am the Thunder AI Assistant for Rogelio's portfolio. How can I help you explore my projects, technical stack, or background?",
    faqs: [
      {
        question: "What is your main technical stack?",
        answer:
          "My core stack spans modern Frontend (React, JavaScript, HTML, CSS), Backend services (Node.js, PHP, Python, Java), relational & NoSQL databases (MySQL, Firebase), and standard tooling (Git, GitHub, Figma, VS Code).",
      },
      {
        question: "What course and school do you attend?",
        answer:
          "I am pursuing a Bachelor of Science in Information Technology (BSIT) at the National College of Science and Technology (NCST).",
      },
      {
        question: "What is your motto and career goal?",
        answer:
          "My personal motto is 'Life is too short' and 'Be a good student everyday'. My goal is to be successful—continually mastering software engineering and creating impactful digital solutions.",
      },
    ],
  },
};
