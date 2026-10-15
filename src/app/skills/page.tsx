import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills & Matrix | Muhammad Zain-Ul-Abideen",
  description: "Categorized technical skills matrix, algorithms, distributed systems, and verified credentials.",
};

const SKILL_CATEGORIES = [
  {
    name: "Languages & Algorithmic Core",
    skills: [
      { name: "C++", note: "Modern C++, STL, competitive programming, dynamic programming" },
      { name: "Python", note: "Backend services, ML pipelines, Pandas, automation" },
      { name: "TypeScript", note: "Type-safe interfaces, enterprise React/Next.js architectures" },
      { name: "JavaScript (ESNext)", note: "Asynchronous runtime, event loop, DOM architecture" },
      { name: "SQL", note: "Relational modeling, indexing, query optimization" },
    ],
  },
  {
    name: "Distributed Systems & Backend",
    skills: [
      { name: "Supabase & PostgreSQL", note: "Row-Level Security (RLS), 200+ tables, triggers" },
      { name: "Redis", note: "In-memory caching, pub/sub, sliding-window rate limiters" },
      { name: "Node.js & Express", note: "RESTful microservices, auth flows, middleware" },
      { name: "Stripe Connect", note: "Fintech workflows, installment financing, LaaS" },
    ],
  },
  {
    name: "Frontend & Interface Engineering",
    skills: [
      { name: "React 18 / Next.js", note: "App Router, SSR, Server Components, Custom Hooks" },
      { name: "Tailwind CSS", note: "Design systems, fluid clamp scaling, bespoke themes" },
      { name: "Motion & Interaction", note: "GSAP ScrollTrigger, Lenis smooth scrolling" },
      { name: "Redux Toolkit", note: "Global state management, RTK Query" },
    ],
  },
  {
    name: "AI & Engineering Tooling",
    skills: [
      { name: "OpenAI API", note: "Clinical care navigation, PHI redaction, structured output" },
      { name: "Machine Learning", note: "Feature engineering, evaluation, scikit-learn" },
      { name: "Postman & Git", note: "API testing suites, Git branching workflows, CI/CD" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      <div className="border-b border-white/[0.08] pb-12 mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-3">
          03 // The Matrix
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          Technical Skills & Matrix
        </h1>
        <p className="text-slate-400 font-mono text-xs mt-3 max-w-xl">
          Comprehensive breakdown of language proficiencies, distributed systems technologies, and engineering tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.name} className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D1017]">
            <h2 className="text-lg font-display font-bold text-white mb-6 border-b border-white/[0.06] pb-3">
              {category.name}
            </h2>

            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-white block">{skill.name}</span>
                    <span className="text-xs text-slate-400 font-mono">{skill.note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
