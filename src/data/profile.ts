export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  featured?: boolean;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  skills: string[];
}

export interface VolunteeringItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  skills: string[];
}

export interface CapstoneProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architecture: string[];
  tags: string[];
  highlights: string[];
  featured?: boolean;
  githubUrl?: string;
}

export const profileData = {
  name: "Muhammad Zain-Ul-Abideen",
  preferredName: "Zain",
  heroHeadline: "CS Senior | Software Engineer | Campus Ambassador@Devsinc",
  heroSubtitle:
    "Engineering robust, human-centered systems across modern full-stack architectures, distributed datastores, and safety-conscious AI integrations.",
  status: "Available for Software Engineering Roles & Strategic Collaborations",
  stats: [
    { label: "Problems Solved", value: "200+", detail: "LeetCode & Algorithmic Foundations" },
    { label: "Capstone Projects", value: "10+", detail: "End-to-End Production Architectures" },
    { label: "Industry Experience", value: "1.5+ Yrs", detail: "Startups, Corporate & Apprenticeships" },
    { label: "Campus Leadership", value: "Devsinc", detail: "Official University Ambassador" },
  ],
  bioParagraphs: [
    "I am a final-year Computer Science student at the National University of Modern Languages (NUML) with a deep conviction that great engineering pairs mathematical rigor with empathetic system design.",
    "My hands-on experience spans building distributed healthcare super-marketplaces with React 18, TypeScript, and Supabase RLS, integrating safety-first OpenAI workflows with protected health data (PHI) redaction, and designing scalable event-driven synchronization loops across 200+ relational tables.",
    "As Campus Ambassador for Devsinc, I actively bridge the gap between academic theory and enterprise engineering standards, organizing high-impact technical workshops and mentoring peers through their professional career transitions.",
  ],
  education: {
    institution: "National University of Modern Languages (NUML)",
    degree: "Bachelor of Science, Computer Science",
    period: "February 2023 – February 2027",
    location: "Islamabad, Pakistan",
    focus: "Distributed Systems, Algorithms, Software Engineering, AI & Database Systems",
  },
  experiences: [
    {
      id: "devsinc-ca",
      role: "Campus Ambassador",
      company: "Devsinc",
      employmentType: "Apprenticeship",
      period: "Jul 2026 – Present",
      location: "Remote",
      featured: true,
      description: [
        "Appointed as Campus Ambassador to bridge the gap between academic learning and industry expectations for tech students.",
        "Act as the primary liaison between Devsinc and the university student body to promote corporate exposure and tech career pathways.",
        "Facilitate and organize campus events, workshops, and seminars aimed at equipping students with practical skills required for modern software engineering roles.",
        "Guide and mentor peers on navigating the transition from graduation to the professional tech workforce.",
        "Represent the corporate culture and growth mindset of Devsinc to foster a career-ready student community.",
      ],
      skills: ["Campus Relations", "Event Organization", "Technical Leadership", "Mentorship"],
    },
    {
      id: "dev-weekends",
      role: "Software Engineer",
      company: "Dev Weekends",
      employmentType: "Apprenticeship",
      period: "Dec 2025 – Present",
      location: "Lahore, Punjab, Pakistan (Remote)",
      featured: true,
      description: [
        "Contributing as a Software Engineer within an intensive engineering apprenticeship program.",
        "Engineering modular backend workflows, API integrations, and modern client features.",
        "Awarded Bronze Fellow completion in recognition of full-stack delivery excellence.",
      ],
      skills: ["Node.js", "JavaScript", "Full-Stack Development", "API Architecture"],
    },
    {
      id: "sps-intern",
      role: "Software Engineer Intern",
      company: "Software Productivity Strategists, Inc. (SPS)",
      employmentType: "Internship",
      period: "Oct 2025 – Jul 2026",
      location: "Islamabad, Pakistan",
      featured: true,
      description: [
        "Contributed to Humankind, a unified healthcare super-marketplace designed to streamline discovery, booking, and financing for clinical and wellness services.",
        "Full-Stack Development: Built modular, fully responsive customer and provider modules utilizing React 18, TypeScript, and Tailwind CSS.",
        "Backend & Security: Leveraged Supabase and PostgreSQL to develop backend services, implementing Row-Level Security (RLS) policies to safeguard health data and enforce zero-trust access protocols (HIPAA compliance).",
        "AI Integration: Engineered natural care flows and operational automated interfaces with the OpenAI API, integrating strategic protocols for redacting protected health data (PHI).",
        "Fintech Solutions: Integrated multi-tier installment pricing systems and flexible processing flows powered by Stripe Connect and LaaS endpoints.",
        "System Architecture: Maintained a robust database architecture containing 200+ relational tables while managing event-driven integration loops for state synchronization.",
      ],
      skills: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenAI API", "Stripe Connect", "HIPAA Compliance"],
    },
    {
      id: "buildables",
      role: "Data Scientist",
      company: "Buildables",
      employmentType: "Internship",
      period: "Aug 2025 – Nov 2025",
      location: "Remote",
      description: [
        "Engineered predictive data pipelines, feature extraction workflows, and analytical summaries using Python and modern data science toolkits.",
      ],
      skills: ["Python", "Data Science", "Pandas", "Feature Engineering"],
    },
    {
      id: "cosmicode",
      role: "Python Developer",
      company: "CosmiCode",
      employmentType: "Contract",
      period: "Jul 2025 – Oct 2025",
      location: "Remote",
      description: [
        "Developed Python backend utilities, web scraping modules, and process automation routines with emphasis on modular, testable code.",
      ],
      skills: ["Python", "Automation", "Backend Scripting"],
    },
    {
      id: "zeroai",
      role: "Full Stack Developer",
      company: "ZeroAI Lab",
      employmentType: "Internship",
      period: "Jun 2025 – Aug 2025",
      location: "Remote",
      description: [
        "Engineered dynamic web interfaces and AI integration modules for responsive web products.",
      ],
      skills: ["Full Stack Development", "React", "AI Integration"],
    },
    {
      id: "certura",
      role: "Full-stack Developer",
      company: "Certura",
      employmentType: "Apprenticeship",
      period: "Apr 2025 – May 2025",
      location: "Pakistan",
      description: [
        "Constructed reusable frontend UI components and structured REST API integrations.",
      ],
      skills: ["React", "JavaScript", "REST APIs"],
    },
    {
      id: "developershub",
      role: "Full-stack Developer",
      company: "DevelopersHub Corporation",
      employmentType: "Internship",
      period: "Mar 2025 – May 2025",
      location: "Islamabad, Pakistan",
      description: [
        "Designed and developed dynamic, user-friendly applications that enhanced business operational flows.",
      ],
      skills: ["Full Stack Development", "JavaScript", "HTML5", "CSS3"],
    },
  ] as ExperienceItem[],
  credentials: [
    {
      id: "gdgoc-numl",
      title: "GDGoC NUML Certificates 2025-26",
      issuer: "GDG On Campus - NUML",
      period: "Issued Jun 2025 – Jun 2026",
      skills: ["Team Management", "Teamwork", "Community Leadership"],
    },
    {
      id: "bootdev-python",
      title: "Learn to Code in Python Course",
      issuer: "Boot.dev",
      period: "Issued Apr 2026",
      skills: ["Python", "Data Structures", "Algorithms", "Backend Systems"],
    },
    {
      id: "pandas-essential",
      title: "Pandas Essential Training",
      issuer: "Continuing Professional Education",
      period: "Verified Completion",
      skills: ["Data Wrangling", "Pandas", "Analytical Queries"],
    },
    {
      id: "what-is-data-science",
      title: "What is Data Science?",
      issuer: "IBM / Professional Education",
      period: "Verified Completion",
      skills: ["Data Science Methodologies", "Exploratory Analysis"],
    },
    {
      id: "python-developer",
      title: "Python Developer Certification",
      issuer: "Industry Accredited Course",
      period: "Verified Completion",
      skills: ["OOP", "Pythonic Architecture", "Modular Programming"],
    },
    {
      id: "google-prompting",
      title: "Google Prompting Essentials",
      issuer: "Google",
      period: "Verified Completion",
      skills: ["Prompt Engineering", "LLM Context Architecture", "Safety Evaluation"],
    },
  ] as CredentialItem[],
  volunteering: [
    {
      id: "ieee-lead",
      role: "Internal PR Lead",
      organization: "IEEE Student Community at NUML",
      period: "Aug 2025 – Present (1 yr 3 mos)",
      summary:
        "Fostering transparent internal communications, coordinating engineering symposiums, and steering student engagement initiatives across campus.",
      skills: ["Public Relations", "Community Management", "Cross-Team Alignment"],
    },
    {
      id: "gdg-event-member",
      role: "Event Management Member",
      organization: "GDG On Campus - NUML",
      period: "Jun 2025 – Jun 2026 (1 yr 1 mo)",
      summary:
        "Orchestrating technical seminars, developer workshops, and hackathon logistics to empower university developers. Recognized with a formal Certificate of Appreciation.",
      skills: ["Event Operations", "Logistics", "Developer Evangelism"],
    },
  ] as VolunteeringItem[],
  skillsMatrix: {
    languages: [
      { name: "C++", level: "Advanced", detail: "Data structures, memory optimization, competitive problem solving" },
      { name: "Python", level: "Advanced", detail: "Backend systems, ML pipelines, automation, Pandas" },
      { name: "TypeScript", level: "Proficient", detail: "Type-safe interfaces, enterprise React/Next.js architectures" },
      { name: "JavaScript", level: "Advanced", detail: "ESNext, asynchronous event loop, DOM manipulation" },
      { name: "SQL", level: "Proficient", detail: "Relational modeling, indexing, PostgreSQL RLS" },
      { name: "Java", level: "Foundational", detail: "Object-oriented design patterns, concurrency" },
    ],
    frontend: [
      { name: "React 18", level: "Advanced", detail: "Custom hooks, concurrent mode, modular components" },
      { name: "Next.js", level: "Advanced", detail: "App Router, SSR, SSG, Metadata API, SEO" },
      { name: "Tailwind CSS", level: "Advanced", detail: "Utility-first design systems, custom themes, dark mode" },
      { name: "Redux Toolkit", level: "Proficient", detail: "Global state management, RTK Query" },
    ],
    backend: [
      { name: "Supabase", level: "Advanced", detail: "PostgreSQL backend, Auth, Row-Level Security (RLS)" },
      { name: "PostgreSQL", level: "Proficient", detail: "Schema design, 200+ tables, triggers, indexing" },
      { name: "Redis", level: "Proficient", detail: "In-memory caching, pub/sub, rate limiting" },
      { name: "Node.js", level: "Proficient", detail: "Express, REST APIs, microservices" },
      { name: "MongoDB", level: "Proficient", detail: "Document stores, aggregation pipelines" },
      { name: "Stripe Connect", level: "Proficient", detail: "Fintech payment flows, installment financing" },
    ],
    aiAndTools: [
      { name: "OpenAI API", level: "Advanced", detail: "Natural care flows, PHI redaction, safe clinical UX" },
      { name: "Machine Learning", level: "Proficient", detail: "Model evaluation, feature engineering, scikit-learn" },
      { name: "Postman", level: "Advanced", detail: "API test suites, automated documentation, mock servers" },
      { name: "Git & GitHub", level: "Advanced", detail: "Branching strategies, CI/CD workflows, open source" },
    ],
  },
  flagshipProjects: [
    {
      id: "humankind-marketplace",
      title: "Humankind Healthcare Super-Marketplace",
      subtitle: "Enterprise Clinical & Wellness Discovery, Booking & Financing Engine",
      description:
        "A unified healthcare super-marketplace engineered for clinical and wellness services. Features zero-trust data access protocols, embedded fintech financing, and intelligent AI care flows.",
      architecture: [
        "Full-stack React 18, TypeScript, and responsive Tailwind CSS client modules.",
        "Supabase and PostgreSQL backend running strict Row-Level Security (RLS) to enforce HIPAA compliance.",
        "OpenAI API care navigation flows with built-in PHI (Protected Health Information) redaction.",
        "Embedded installment pricing systems powered by Stripe Connect and LaaS endpoints.",
        "Event-Driven Integration Hub maintaining cross-platform sync across 200+ relational tables.",
      ],
      tags: ["React 18", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API", "Stripe Connect", "Tailwind CSS"],
      highlights: ["HIPAA-Aware PHI Redaction", "200+ Relational Tables", "Stripe Connect Installments"],
      featured: true,
    },
    {
      id: "algorithmic-problem-engine",
      title: "Algorithmic Systems & Data Structures Repository",
      subtitle: "200+ Verified LeetCode & Competitive Programming Solutions",
      description:
        "Comprehensive collection of 200+ optimized algorithmic solutions spanning dynamic programming, graph theory, tree traversals, and greedy paradigms in C++ and Python.",
      architecture: [
        "Time and space complexity profiling with strict asymptotic bounds.",
        "Idiomatic modern C++ (STL, templates, smart pointers) and Python3 implementations.",
        "Benchmark test harnesses with corner-case stress testing.",
      ],
      tags: ["C++", "Python", "Algorithms", "Data Structures", "LeetCode 200+"],
      highlights: ["200+ Problems Solved", "Optimal Time Complexity", "Dynamic Programming & Graphs"],
      featured: true,
      githubUrl: "https://github.com/Zain308",
    },
    {
      id: "ai-care-navigation",
      title: "Intelligent Clinical Care Navigation Flow",
      subtitle: "Automated Clinical Assistant with PHI Redaction & Safety-First Guardrails",
      description:
        "An AI-powered operational care assistant that parses user inquiries, matches appropriate clinical specialties, and generates structured care recommendations while strictly redacting sensitive patient identifiers.",
      architecture: [
        "Structured OpenAI prompt engineering pipelines with context boundary enforcement.",
        "Client-side and middleware sanitization preventing PHI leakage prior to LLM dispatch.",
        "Event-driven integration loop coordinating provider booking availability.",
      ],
      tags: ["OpenAI API", "Next.js", "TypeScript", "Data Privacy", "Prompt Engineering"],
      highlights: ["Zero-Trust Data Boundary", "Automated Triage", "Context Preservation"],
      featured: true,
    },
    {
      id: "distributed-cache-store",
      title: "High-Throughput Redis Caching & Rate-Limiter",
      subtitle: "In-Memory Session & Request Synchronization Hub",
      description:
        "A distributed state and caching layer designed to mitigate database bottlenecks across high-frequency API endpoints using Redis key evictions and sliding-window rate limiters.",
      architecture: [
        "Sliding-window counter implementation guarding critical authentication and booking routes.",
        "Redis Pub/Sub event distribution notifying connected client portals in real-time.",
        "Fallback mechanisms ensuring graceful degradation during connection interruptions.",
      ],
      tags: ["Redis", "Node.js", "TypeScript", "System Architecture", "Performance"],
      highlights: ["Sliding-Window Limiter", "Pub/Sub Synchronization", "Sub-millisecond Latency"],
      featured: true,
    },
  ] as CapstoneProject[],
};
