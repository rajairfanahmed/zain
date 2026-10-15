"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, CheckCircle2, Shield, Layers, Cpu, Code2 } from "lucide-react";
import { ALL_PROJECTS } from "@/data/profile";

const CATEGORIES = ["All Systems", "Distributed Systems", "Algorithms", "AI & Healthcare"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    if (selectedCategory === "All Systems") return true;
    if (selectedCategory === "Distributed Systems")
      return project.category.includes("Distributed") || project.category.includes("Fintech");
    if (selectedCategory === "Algorithms") return project.category.includes("Algorithms");
    if (selectedCategory === "AI & Healthcare")
      return project.category.includes("Clinical") || project.category.includes("AI");
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      {/* 1. HEADER SECTION */}
      <div className="border-b border-white/[0.08] pb-12 mb-12">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-3">
          02 // THE ARCHITECTURE
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.05] mb-6">
          Engineered Systems & <br />
          <span className="text-slate-400">Production Showcases.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
          Detailed case studies across distributed backends, 200+ table relational schemas, HIPAA-compliant AI triage, and competitive algorithmic solutions.
        </p>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-[#0D1017] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. PROJECTS LIST */}
      <div className="space-y-12">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="specular-card p-8 sm:p-12 rounded-2xl relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
                  <span>0{idx + 1} // {project.category}</span>
                  <span>✦</span>
                  <span className="text-slate-500">PRODUCTION VERIFIED</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold font-display text-white mb-2">
                  {project.title}
                </h2>
                <h3 className="text-sm sm:text-base font-semibold text-slate-300 font-mono mb-4">
                  {project.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* ACTION LINKS */}
              <div className="flex items-center gap-3 self-start">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/[0.2] text-white text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#07080B] border border-white/[0.08] text-slate-400 text-xs font-mono uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5 text-amber-400" />
                    <span>Enterprise Architecture / NDA</span>
                  </div>
                )}
              </div>
            </div>

            {/* ARCHITECTURAL BREAKDOWN */}
            <div className="mb-8 pt-6 border-t border-white/[0.08]">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-4">
                ENGINEERING SPECIFICATION & IMPLEMENTATION
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.architecture.map((arch, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#07080B]/60 border border-white/[0.04]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                      {arch}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TAGS & HIGHLIGHTS FOOTER */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                {project.highlights.map((hl, hIdx) => (
                  <span key={hIdx} className="hidden sm:inline-block">
                    • {hl}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. NEXT CHAPTER CALLOUT */}
      <div className="mt-20 border border-white/[0.1] bg-[#0D1017] p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 block mb-1">
            03 // THE MATRIX
          </span>
          <h3 className="text-2xl font-bold font-display text-white">
            Inspect Full Technical Skills Matrix
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Review detailed proficiencies across Languages, Distributed Systems, Frontend, and AI Tools.
          </p>
        </div>

        <Link
          href="/skills"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-slate-200 transition-colors whitespace-nowrap"
        >
          <span>View Skills Matrix</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
