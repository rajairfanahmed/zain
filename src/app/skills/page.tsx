"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Award, Terminal, Database, Layout, Sparkles } from "lucide-react";
import { CREDENTIALS_DATA } from "@/data/profile";

const SKILL_GROUPS = [
  {
    category: "Languages & Algorithmic Core",
    icon: Terminal,
    color: "text-amber-400",
    skills: [
      { name: "C++ (Modern C++17/20)", level: "Advanced", detail: "STL containers, smart pointers, competitive programming, 200+ LeetCode problems" },
      { name: "Python 3", level: "Advanced", detail: "Backend microservices, ML pipelines, automated scripting, Pandas data processing" },
      { name: "TypeScript", level: "Advanced", detail: "Strict type-safe interfaces, Next.js Server Components, enterprise data schemas" },
      { name: "JavaScript (ESNext)", level: "Advanced", detail: "Asynchronous event loop, Promise orchestration, DOM architecture" },
      { name: "SQL (PostgreSQL)", level: "Proficient", detail: "Relational schema design, Row-Level Security (RLS), complex joins, indexing" },
    ],
  },
  {
    category: "Backend & Distributed Systems",
    icon: Database,
    color: "text-emerald-400",
    skills: [
      { name: "Supabase & PostgreSQL", level: "Advanced", detail: "PostgreSQL backend modeling, Row-Level Security (RLS), 200+ tables" },
      { name: "Redis In-Memory", level: "Proficient", detail: "Key evictions, pub/sub event distribution, sliding-window rate limiters" },
      { name: "Node.js & Express", level: "Proficient", detail: "RESTful API design, authentication flows, middleware pipeline architecture" },
      { name: "Stripe Connect", level: "Proficient", detail: "Fintech payment flows, multi-party payouts, installment financing" },
    ],
  },
  {
    category: "Frontend Architecture",
    icon: Layout,
    color: "text-blue-400",
    skills: [
      { name: "React 18 & Next.js", level: "Advanced", detail: "App Router, SSR, Server Components, Custom Hooks, modular architectures" },
      { name: "Tailwind CSS", level: "Advanced", detail: "Utility design systems, bespoke theme tokens, fluid clamp mathematics" },
      { name: "Awwwards Motion Suite", level: "Proficient", detail: "Lenis smooth inertia scrolling, GSAP ScrollTrigger choreography" },
      { name: "Redux Toolkit", level: "Proficient", detail: "Global client-side state management, RTK Query asynchronous caching" },
    ],
  },
  {
    category: "AI, Triage & Tooling",
    icon: Sparkles,
    color: "text-purple-400",
    skills: [
      { name: "OpenAI API", level: "Advanced", detail: "Clinical care navigation, context boundary guardrails, PHI client-side redaction" },
      { name: "Machine Learning Foundations", level: "Proficient", detail: "Feature engineering, scikit-learn, exploratory data analysis" },
      { name: "Postman & API Testing", level: "Advanced", detail: "Automated test collections, mock servers, enterprise documentation" },
      { name: "Git & Version Control", level: "Advanced", detail: "Branching strategies, CI/CD automated deployments, open source workflows" },
    ],
  },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...SKILL_GROUPS.map((g) => g.category)];

  const displayedGroups = SKILL_GROUPS.filter((g) => {
    if (activeTab === "All") return true;
    return g.category === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      {/* 1. HEADER SECTION */}
      <div className="border-b border-white/[0.08] pb-12 mb-12">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-3">
          03 // THE MATRIX
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.05] mb-6">
          Technical Skills & <br />
          <span className="text-slate-400">Competency Matrix.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
          Comprehensive inventory of language proficiencies, distributed systems technologies, interface design systems, and verified industry credentials.
        </p>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === cat
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-[#0D1017] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. SKILL GROUPS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {displayedGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.category}
              className="specular-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-white/[0.08] pb-4">
                  <Icon className={`w-5 h-5 ${group.color}`} />
                  <h2 className="text-xl font-bold font-display text-white">
                    {group.category}
                  </h2>
                </div>

                <div className="space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white font-mono">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. VERIFIED CREDENTIALS LEDGER */}
      <section className="mb-20">
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4 mb-8">
          <Award className="w-5 h-5 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Verified Industry Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREDENTIALS_DATA.map((cred) => (
            <div
              key={cred.id}
              className="specular-card p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                  VERIFIED • {cred.period}
                </span>
                <h3 className="text-base font-bold font-display text-white mb-2">
                  {cred.title}
                </h3>
                <span className="text-xs font-mono text-slate-400 block mb-4">
                  {cred.issuer}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {cred.skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NEXT CHAPTER CALLOUT */}
      <div className="border border-white/[0.1] bg-[#0D1017] p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-blue-400 block mb-1">
            04 // DIRECT DISPATCH
          </span>
          <h3 className="text-2xl font-bold font-display text-white">
            Have an open engineering role?
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Reach out directly for software engineering opportunities, contract builds, or technical leadership.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-slate-200 transition-colors whitespace-nowrap"
        >
          <span>Initialize Dispatch</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
