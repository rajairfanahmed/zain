import type { Metadata } from "next";
import { ArrowUpRight, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Muhammad Zain-Ul-Abideen",
  description: "Production-grade distributed systems, algorithmic engines, and enterprise capstone projects.",
};

const PROJECTS = [
  {
    title: "Humankind Healthcare Super-Marketplace",
    category: "Distributed Full-Stack & Clinical Marketplace",
    description:
      "Enterprise clinical & wellness super-marketplace featuring HIPAA-aware OpenAI care navigation, Supabase Row-Level Security, Stripe Connect installments, and 200+ relational database tables.",
    tags: ["React 18", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API", "Stripe Connect"],
    highlights: ["200+ Relational Tables", "HIPAA Data Redaction", "Stripe Connect Financing"],
  },
  {
    title: "Algorithmic Systems & Data Structures Repository",
    category: "Competitive Programming & Asymptotic Algorithms",
    description:
      "200+ verified LeetCode and competitive programming solutions in modern C++ and Python spanning dynamic programming, graph algorithms, and optimal asymptotic time/space bounds.",
    tags: ["C++", "Python", "Algorithms", "Data Structures", "LeetCode 200+"],
    highlights: ["200+ Solutions", "Sub-Millisecond Execution", "Asymptotic Benchmarks"],
    githubUrl: "https://github.com/Zain308",
  },
  {
    title: "Distributed Redis In-Memory Caching & Rate-Limiter",
    category: "Distributed Systems & Infrastructure",
    description:
      "High-throughput caching layer and sliding-window rate limiter engineered to eliminate database bottlenecks across high-frequency API endpoints using Redis pub/sub distribution.",
    tags: ["Redis", "Node.js", "TypeScript", "System Architecture", "Performance"],
    highlights: ["Sliding-Window Limiter", "Pub/Sub Sync", "Sub-millisecond Latency"],
  },
  {
    title: "Intelligent Clinical Care Navigation Flow",
    category: "Applied AI & Prompt Architecture",
    description:
      "Automated clinical assistant parsing user inquiries, redacting protected health information (PHI), and directing users to appropriate clinical specialties with zero data leakage.",
    tags: ["OpenAI API", "Next.js", "TypeScript", "Data Privacy", "Prompt Engineering"],
    highlights: ["Zero-Trust Data Boundary", "Automated Triage", "Context Preservation"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      <div className="border-b border-white/[0.08] pb-12 mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-3">
          02 // The Architecture
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          Engineered Systems
        </h1>
        <p className="text-slate-400 font-mono text-xs mt-3 max-w-xl">
          Clean architectural summaries of production distributed systems, clinical workflows, and competitive algorithm repositories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.title}
            className="specular-card p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                  0{idx + 1} • {project.category}
                </span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                {project.title}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{project.highlights[0]}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                Verified <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
