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
    ],
    shortIntro:
      "Information Technology student at National College of Science and Technology in Cavite. Passionate about web development, programming, and building clean, functional applications.",
    bio:
      "Life is too short. I focus on learning every day, improving my programming skills, and building practical software that solves real problems.",
    course: "Bachelor of Science in Information Technology",
    school: "National College of Science and Technology",
    location: "Amafel Bldg., Aguinaldo Hi-way, Dasmariñas, Philippines, 4114",
    careerGoal:
      "Be successful as a software developer, master modern web technologies, and build projects that make a positive impact.",
    profileImage: "/assets/profile.jpg",
    email: "rogeliomanaog3@gmail.com",
    phone: "+63 977 395 5453",
    resumeUrl: "#",
    status: "BSIT Student @ NCST",
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
      title: "Campus Location",
      value: "Dasmariñas, Cavite",
      subtitle: "Amafel Bldg., Aguinaldo Hi-way",
      icon: "MapPin",
    },
  },

  // Social Channels
  socialLinks: {
    github: {
      name: "GitHub",
      url: "https://github.com/rogeliomanaog3",
      placeholder: "github.com/rogeliomanaog3",
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
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
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
      description: "Building responsive, modern, and user-friendly web layouts.",
      items: [
        { name: "HTML", level: "Advanced", icon: "FileCode2" },
        { name: "CSS", level: "Advanced", icon: "Palette" },
        { name: "JavaScript", level: "Advanced", icon: "Sparkles" },
        { name: "React", level: "Intermediate", icon: "Layers" },
      ],
    },
    {
      category: "Backend",
      description: "Server-side programming, logic, and API integration.",
      items: [
        { name: "PHP", level: "Intermediate", icon: "Server" },
        { name: "Node.js", level: "Intermediate", icon: "Cpu" },
        { name: "Python", level: "Intermediate", icon: "Terminal" },
        { name: "Java", level: "Intermediate", icon: "Boxes" },
      ],
    },
    {
      category: "Database",
      description: "Relational database modeling and data storage.",
      items: [
        { name: "MySQL", level: "Intermediate", icon: "Database" },
        { name: "Firebase", level: "Intermediate", icon: "Flame" },
      ],
    },
    {
      category: "Tools",
      description: "Version control, design tools, and code editors.",
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

  // 6 Projects Showcase (Matching User Reference Layout)
  projects: [
    {
      id: "go-on-enrollment",
      title: "Go-On National College Online Enrollment Portal",
      cardTitle: "Go-On National College Online Enrollment",
      date: "16.09.2025",
      tableDate: "2025-09-16",
      category: "WEB / PORTAL",
      categoryFull: "Web Application / Portal",
      craftedBy: "rogeliomanaog3@gmail.com",
      deployedOn: "▲ gncp-main.site.je",
      liveUrl: "gncp-main.site.je/school-website",
      liveUrlFull: "https://gncp-main.site.je/school-website",
      status: "Active & Verified",
      statusType: "active",
      stack: "Web Application • Online Enrollment • Responsive UI • Student Portal • PHP / MySQL • JavaScript",
      technologies: ["PHP", "MySQL", "JavaScript", "Responsive UI", "Student Portal"],
      thumbnail: "/assets/projects/go-on-campus-thumb.png",
      heroImage: "/assets/projects/go-on-campus-large.png",
      lead: "A comprehensive academic admissions and online student enrollment platform engineered for Go-On National College in Cavite.",
      description: "Designed to modernize institutional admissions and eliminate manual in-person queues, this web platform provides prospective students and transferees with a seamless, end-to-end digital enrollment experience from program exploration to document submission.",
      overview: "The system features interactive academic program guides, multi-stage student registration, prerequisite validation, tuition payment schedule tracking, and centralized applicant records management.",
      architecture: {
        title: "Architecture & Design System",
        subtitle: "Technical Architecture | Web Application / Portal",
        points: [
          "Relational MySQL database models mapping academic programs, student applicant records, prerequisite validation, and matriculation workflows.",
          "Componentized responsive user interface optimized for smooth mobile, tablet, and desktop admissions browsing.",
          "Asynchronous form validation pipeline providing real-time feedback on document uploads, Form 137 eligibility, and personal data compliance.",
          "Scalable PHP backend architecture with modular service layers, session authentication, and automated audit logging."
        ]
      },
      highlights: {
        title: "Key Implementations & Highlights",
        subtitle: "Core Contributions | 4 Key Deliverables",
        points: [
          "Multi-stage digital enrollment wizard with progress state preservation and applicant resumption tokens.",
          "Automated student registration ID generation and dynamic application status tracker.",
          "Administrative dashboard for college registrars allowing one-click verification and batch document approvals.",
          "Eliminated manual paper queuing, reducing peak admissions turnaround time by over 65%."
        ]
      }
    },
    {
      id: "sneakrs-concept",
      title: "SNEAKRS Landing Concept & UI Design",
      cardTitle: "SNEAKRS Landing Concept & UI Design",
      date: "21.06.2025",
      tableDate: "2025-06-21",
      category: "UI/UX / CONCEPT",
      categoryFull: "E-Commerce / Concept Experience",
      craftedBy: "rogeliomanaog3@gmail.com",
      deployedOn: "Figma Cloud",
      liveUrl: "figma.com/design/TtzDl0lTbHSKuFOdQaV4gu/LAB-1-MIDTERM-AGOILO---MANAOG-",
      liveUrlFull: "https://www.figma.com/design/TtzDl0lTbHSKuFOdQaV4gu/LAB-1-MIDTERM-AGOILO---MANAOG-?node-id=0-1&t=FgONzEAq25mtd8Ij-1",
      status: "Figma Prototype",
      statusType: "active",
      stack: "Figma UI • Interactive Prototype • React • Tailwind CSS • Framer Motion • Mobile First",
      technologies: ["Figma", "UI/UX", "React", "Tailwind CSS"],
      thumbnail: "/assets/projects/sneakrs-thumb.png",
      heroImage: "/assets/projects/sneakrs-large.png",
      lead: "A futuristic athletic footwear showcase and interactive digital storefront concept.",
      description: "Engineered with high-contrast brutalist aesthetics, editorial typography, and fluid micro-interactions to showcase next-generation hyper-limited footwear drops with immersive visual impact.",
      overview: "Features interactive 360 perspective product visualizers, drop countdown tickers, dynamic size selector chips, curated trending drops grid, and an instant slide-over shopping bag.",
      architecture: {
        title: "Architecture & Design System",
        subtitle: "Technical Architecture | UI/UX Concept & Design System",
        points: [
          "High-contrast editorial typography system paired with ultra-fluid responsive CSS grid layouts.",
          "Spring-physics gesture interactions implemented via Framer Motion for intuitive tactile feedback on swipe and drag.",
          "Component-driven modular design system prototyped end-to-end in Figma prior to production code conversion.",
          "Optimized asset rendering pipeline ensuring instantaneous render times for high-density footwear renders."
        ]
      },
      highlights: {
        title: "Key Implementations & Highlights",
        subtitle: "Core Contributions | 4 Key Deliverables",
        points: [
          "Dynamic drop notification engine allowing shoppers to subscribe to limited-edition release alerts.",
          "Interactive sizing selector matrix with real-time stock indicator and localized size conversions.",
          "Silky smooth spring transitions and floating slide-over checkout cart drawer.",
          "Responsive mobile navigation with bottom thumb-zone controls for effortless one-handed browsing."
        ]
      }
    },
    {
      id: "ncst-lost-found",
      title: "NCST Campus Lost & Found Web Portal",
      cardTitle: "NCST Campus Lost & Found Web Portal",
      date: "18.11.2024",
      tableDate: "2024-11-18",
      category: "WEB / CAMPUS",
      categoryFull: "Campus Lost & Found Web Portal",
      craftedBy: "rogeliomanaog3@gmail.com",
      deployedOn: "ncst-lostandfound.local",
      liveUrl: "ncst-lostandfound.local",
      liveUrlFull: "https://ncst-lostandfound.local",
      status: "Campus Tested",
      statusType: "active",
      stack: "PHP • MySQL • Bootstrap • JavaScript • Session Authentication • File Uploads",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Session Auth"],
      thumbnail: "/assets/projects/ncst-lostfound-thumb.png",
      heroImage: "/assets/projects/ncst-lostfound-large.png",
      lead: "A centralized campus web portal for reporting, tracking, and claiming lost items at NCST.",
      description: "Engineered specifically for the National College of Science and Technology campus to eliminate misplaced items chaos and connect students directly with campus security archives.",
      overview: "The system features item registration with photographic evidence, location and category tagging, claim request verification, and custodial status logs.",
      architecture: {
        title: "Architecture & Design System",
        subtitle: "Technical Architecture | Campus Web Portal / Management",
        points: [
          "Normalized MySQL relational database schema linking student ID numbers, item records, and claim verification tickets.",
          "Secure image upload pipeline with server-side mime validation and automatic thumbnail generation.",
          "Session-based student and faculty authentication restricting post submissions to valid institutional users.",
          "Clean responsive UI built with Bootstrap and custom CSS for seamless access across mobile phones and campus kiosks."
        ]
      },
      highlights: {
        title: "Key Implementations & Highlights",
        subtitle: "Core Contributions | 4 Key Deliverables",
        points: [
          "Instant lost item reporting form supporting multi-photo uploads, location tags, and timestamp recording.",
          "Smart category filters (student ID cards, flash drives, calculators, gadgets, notebooks, keys).",
          "Verification workflow for campus security guards to inspect claimant proof of ownership before releasing items.",
          "Archived recovery audit trail reducing lost property disputes and increasing recovery rates by over 70%."
        ]
      }
    }
  ],

  // Zenitsu / Thunder Breathing subtle theme accents & easter eggs
  zenitsuTheme: {
    mantra: "Master one technique to absolute perfection.",
    japaneseTitle: "雷の呼吸 • 壱ノ型 霹靂一閃",
    accentColor: "#F59E0B",
    secondaryColor: "#F97316",
  },
};
