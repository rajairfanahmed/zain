export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  architecture: string[];
  tags: string[];
  highlights: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export const PROFILE_METRICS: Metric[] = [
  {
    value: "200+",
    label: "LeetCode Solutions",
    detail: "Dynamic programming, graph theory, trees, and greedy paradigms in C++ & Python",
  },
  {
    value: "200+",
    label: "Relational Tables",
    detail: "Enterprise schema design, Supabase RLS, and HIPAA-compliant data boundaries",
  },
  {
    value: "100%",
    label: "PHI Sanitization",
    detail: "Automated OpenAI clinical triage with zero patient data leakage",
  },
  {
    value: "Ambassador",
    label: "Devsinc Leadership",
    detail: "Direct liaison bridging enterprise engineering opportunities with campus developers",
  },
];

export const FLAGSHIP_PROJECT: Project = {
  id: "humankind-marketplace",
  title: "Humankind Healthcare Super-Marketplace",
  category: "Distributed Architecture & Embedded Fintech",
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
};

export const ALL_PROJECTS: Project[] = [
  FLAGSHIP_PROJECT,
  {
    id: "algorithmic-problem-engine",
    title: "Algorithmic Systems & Data Structures Repository",
    category: "Competitive Programming & Asymptotic Algorithms",
    subtitle: "200+ Verified LeetCode Solutions in Modern C++ and Python",
    description:
      "Comprehensive repository of 200+ optimized algorithmic solutions spanning dynamic programming, graph algorithms (Dijkstra, BFS/DFS, TopoSort), tree traversals, and greedy paradigms.",
    architecture: [
      "Rigorous time and space complexity profiling adhering to tight asymptotic bounds.",
      "Idiomatic modern C++ (STL containers, templates, smart pointers) and Python 3 implementations.",
      "Corner-case stress testing suites evaluating boundary conditions and memory overhead.",
    ],
    tags: ["C++", "Python", "Algorithms", "Data Structures", "LeetCode 200+"],
    highlights: ["200+ Solved Problems", "Optimal Time Complexity", "Dynamic Programming & Graphs"],
    githubUrl: "https://github.com/Zain308",
  },
  {
    id: "distributed-cache-store",
    title: "High-Throughput Redis Caching & Rate-Limiter",
    category: "Distributed Systems & In-Memory Infrastructure",
    subtitle: "In-Memory Session & High-Frequency Request Synchronization",
    description:
      "A distributed caching layer designed to mitigate database bottlenecks across high-frequency API endpoints using Redis key evictions and sliding-window rate limiters.",
    architecture: [
      "Sliding-window counter implementation guarding critical authentication and booking endpoints.",
      "Redis Pub/Sub event distribution notifying connected client portals in sub-millisecond latency.",
      "Fallback circuit breaker mechanisms ensuring graceful degradation during connection interruptions.",
    ],
    tags: ["Redis", "Node.js", "TypeScript", "System Architecture", "Performance"],
    highlights: ["Sliding-Window Limiter", "Pub/Sub Synchronization", "Sub-millisecond Latency"],
  },
  {
    id: "ai-care-navigation",
    title: "Intelligent Clinical Care Navigation Flow",
    category: "Applied AI & Medical Prompt Architecture",
    subtitle: "Automated Clinical Assistant with Zero-Trust PHI Redaction",
    description:
      "An AI-powered operational care assistant that parses user inquiries, matches appropriate clinical specialties, and generates structured care recommendations while redacting sensitive patient identifiers.",
    architecture: [
      "Structured OpenAI prompt engineering pipelines with context boundary enforcement.",
      "Client-side and middleware sanitization preventing PHI leakage prior to LLM dispatch.",
      "Event-driven integration loop coordinating provider booking availability.",
    ],
    tags: ["OpenAI API", "Next.js", "TypeScript", "Data Privacy", "Prompt Engineering"],
    highlights: ["Zero-Trust Data Boundary", "Automated Triage", "Context Preservation"],
  },
];

export interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "corporate" | "leadership";
  summary: string;
  achievements: string[];
  skills: string[];
}

export const WORK_EXPERIENCE: TimelineItem[] = [
  {
    id: "devsinc-ambassador",
    role: "Campus Ambassador",
    organization: "Devsinc",
    period: "Nov 2025 – Present",
    location: "Islamabad, PK",
    type: "corporate",
    summary:
      "Selected as the official university liaison representing Devsinc at NUML, bridging premier enterprise software engineering opportunities with top-tier student developers.",
    achievements: [
      "Facilitating enterprise tech talks, recruitment drives, and technical workshops.",
      "Coordinating mentorship pipelines between Devsinc tech leads and senior CS students.",
      "Promoting modern full-stack and distributed architecture best practices across campus.",
    ],
    skills: ["Technical Evangelism", "Community Leadership", "Developer Outreach", "Corporate Liaison"],
  },
  {
    id: "sps-engineer",
    role: "Full-Stack Software Engineer",
    organization: "Strategic Partnership Services (SPS)",
    period: "2024 – 2025",
    location: "Islamabad, PK",
    type: "corporate",
    summary:
      "Core engineer on Humankind, a clinical healthcare and wellness super-marketplace engineered for end-to-end appointment discovery, booking, and fintech financing.",
    achievements: [
      "Designed and optimized data models across 200+ relational database tables with PostgreSQL and Supabase.",
      "Enforced strict HIPAA compliance by building client-side and middleware PHI redaction for OpenAI care navigation.",
      "Engineered multi-party payment installment financing workflows using Stripe Connect endpoints.",
    ],
    skills: ["React 18", "TypeScript", "Supabase", "PostgreSQL RLS", "OpenAI API", "Stripe Connect"],
  },
  {
    id: "dev-weekends",
    role: "Full-Stack Engineering Apprentice",
    organization: "Dev Weekends",
    period: "2024",
    location: "Islamabad, PK",
    type: "corporate",
    summary:
      "Accelerated engineering program focused on production-grade web systems, type safety, modular frontend architectures, and resilient REST APIs.",
    achievements: [
      "Built responsive, accessible user interfaces with React, Next.js, and Tailwind CSS.",
      "Implemented state management paradigms and optimized asynchronous client-server data fetching.",
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "RESTful APIs", "State Management"],
  },
];

export const LEADERSHIP_EXPERIENCE: TimelineItem[] = [
  {
    id: "ieee-lead",
    role: "Internal PR Lead",
    organization: "IEEE Student Community at NUML",
    period: "Aug 2025 – Present",
    location: "Islamabad, PK",
    type: "leadership",
    summary:
      "Directing internal communications and student engagement strategies for the university's premier technical engineering society.",
    achievements: [
      "Spearheaded technical symposium communications and cross-departmental coordination.",
      "Aligned student project teams with faculty advisors and industry speakers.",
    ],
    skills: ["Public Relations", "Cross-Functional Alignment", "Event Operations"],
  },
  {
    id: "gdg-event-member",
    role: "Event Management Member",
    organization: "GDG On Campus - NUML",
    period: "Jun 2025 – Jun 2026",
    location: "Islamabad, PK",
    type: "leadership",
    summary:
      "Core organizing team member executing technical workshops, hackathons, and Google developer technology seminars. Awarded formal Certificate of Appreciation.",
    achievements: [
      "Co-organized large-scale university hackathons and hands-on developer code labs.",
      "Managed logistics and speaker arrangements for 200+ attendees per event.",
    ],
    skills: ["Hackathon Organization", "Logistics", "Community Operations"],
  },
];

export const EDUCATION_DATA = {
  institution: "National University of Modern Languages (NUML)",
  degree: "Bachelor of Science in Computer Science (BSCS)",
  period: "2022 – 2026",
  location: "Islamabad, Pakistan",
  description:
    "Rigorous computer science curriculum emphasizing distributed systems, algorithm analysis, operating systems, and database engineering.",
  coursework: [
    "Design & Analysis of Algorithms",
    "Distributed Database Systems",
    "Object-Oriented Software Engineering",
    "Data Structures in C++",
    "Operating Systems & Concurrency",
    "Computer Networks & Protocols",
  ],
};

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  period: string;
  skills: string[];
}

export const CREDENTIALS_DATA: Credential[] = [
  {
    id: "gdg-cert",
    title: "Certificate of Appreciation (Event Operations)",
    issuer: "Google Developer Groups On Campus - NUML",
    period: "2025 – 2026",
    skills: ["Technical Events", "Community Evangelism", "Developer Hackathons"],
  },
  {
    id: "bootdev-backend",
    title: "Backend Architecture & Data Structures",
    issuer: "Boot.dev",
    period: "Verified",
    skills: ["Algorithms in C++", "Pythonic Systems", "Memory Profiling"],
  },
  {
    id: "google-prompting",
    title: "Google Prompting & Context Architecture",
    issuer: "Google",
    period: "Verified",
    skills: ["Prompt Engineering", "Context Window Management", "Zero-Trust Guardrails"],
  },
  {
    id: "ibm-data-science",
    title: "Data Science & Analytical Querying",
    issuer: "IBM",
    period: "Verified",
    skills: ["Pandas", "Analytical Queries", "Exploratory Data Analysis"],
  },
];


