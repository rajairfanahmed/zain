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
