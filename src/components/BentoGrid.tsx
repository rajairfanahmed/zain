"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Database,
  Code2,
  Users,
  Activity,
  Layers,
  Sparkles,
  Lock,
  Zap,
} from "lucide-react";

export default function BentoGrid() {
  const [activeTab, setActiveTab] = useState<"all" | "core" | "cloud" | "ai">("all");

  return (
    <section id="bento-grid" className="px-4 sm:px-8 py-20 sm:py-28 max-w-6xl mx-auto w-full relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Core Architecture Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08]">
            Engineered Across <span className="text-gradient-neural">Distributed Cloud</span> & Algorithms
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-3 font-normal leading-relaxed">
            Architectural breakdown of healthcare super-marketplaces, in-memory datastores, competitive algorithmic problem solving, and university leadership.
          </p>
        </div>

        <Link
          href="/skills"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-cyan-300 hover:text-white bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/30 transition-all shrink-0"
        >
          <span>Complete Taxonomy</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Asymmetric Modern Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* ============================================================== */}
        {/* TILE 1 (Large 8-col anchor): Humankind Healthcare Super-Marketplace */}
        {/* ============================================================== */}
        <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl neural-card flex flex-col justify-between group overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none"
          />

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 block">
                    Flagship Full-Stack System // SPS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Humankind Healthcare Super-Marketplace
                  </h3>
                </div>
              </div>

              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5 shrink-0">
                <Lock className="w-2.5 h-2.5" />
                <span>HIPAA Compliant</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
              Unified clinical and wellness engine engineered at Software Productivity Strategists (SPS). Features zero-trust data access protocols across 200+ relational PostgreSQL tables, automated OpenAI care workflows with strict Protected Health Information (PHI) redaction, and multi-tier installment financing via Stripe Connect.
            </p>

            {/* Interactive Architecture Flow Diagram HUD */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-void/70 border border-white/5 mb-6">
              <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block mb-3">
                Telemetry: Zero-Trust Clinical Pipeline
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-center">
                  <span className="text-cyan-300 font-bold">React 18 & TS</span>
                  <span className="text-[10px] text-zinc-400">Modular Client UI</span>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col justify-center">
                  <span className="text-cyan-300 font-bold">PHI Redactor</span>
                  <span className="text-[10px] text-zinc-400">Data Sanitization</span>
                </div>
                <div className="p-2.5 rounded-xl bg-violet-950/40 border border-violet-500/30 flex flex-col justify-center">
                  <span className="text-violet-300 font-bold">OpenAI API</span>
                  <span className="text-[10px] text-zinc-400">Care Navigation</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-center">
                  <span className="text-emerald-300 font-bold">Supabase RLS</span>
                  <span className="text-[10px] text-zinc-400">200+ Tables</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {["React 18", "TypeScript", "Supabase RLS", "PostgreSQL", "OpenAI API", "Stripe Connect"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <Link
              href="/#projects"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              <span>Inspect Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TILE 2 (4-col): Algorithmic Rigor & LeetCode (200+ Solved) */}
        {/* ============================================================== */}
        <div className="md:col-span-4 p-6 sm:p-8 rounded-3xl neural-card flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-500/20">
                C++ & Python
              </span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Algorithmic Foundation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 font-display">
              200+ Problems Solved
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-normal">
              Asymptotic optimization across Dynamic Programming, Graph Theory, Trees, and Sliding Windows with strict time & memory constraints.
            </p>

            {/* Complexity Badges */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between p-2 rounded-xl bg-surface-void/60 border border-white/5 text-xs font-mono">
                <span className="text-zinc-400">Dynamic Programming</span>
                <span className="text-cyan-400">Optimal Substructure</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-surface-void/60 border border-white/5 text-xs font-mono">
                <span className="text-zinc-400">Graph Algorithms</span>
                <span className="text-violet-400">BFS / DFS / Dijkstra</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-surface-void/60 border border-white/5 text-xs font-mono">
                <span className="text-zinc-400">Memory Bounds</span>
                <span className="text-emerald-400">O(1) & O(N) Space</span>
              </div>
            </div>
          </div>

          <a
            href={siteConfig.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-amber-950/30 hover:bg-amber-900/40 border border-amber-500/30 text-amber-300 text-xs font-mono transition-all"
          >
            <span>Verified LeetCode Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ============================================================== */}
        {/* TILE 3 (4-col): Distributed In-Memory Datastores (Redis) */}
        {/* ============================================================== */}
        <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl neural-card flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-950/50 border border-red-500/30 flex items-center justify-center text-red-400">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded-full border border-cyan-500/20">
                Sub-ms Latency
              </span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Distributed Cloud
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Redis In-Memory Caching & Limiting
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal mb-4">
              Sliding-window rate limiters, pub/sub synchronization, and session replication eliminating database bottlenecks across high-frequency API endpoints.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Pub/Sub Sync</span>
            <span className="text-cyan-400">● 99.9% Uptime</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TILE 4 (4-col): Devsinc Campus Leadership & Mentorship */}
        {/* ============================================================== */}
        <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl neural-card flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/40 px-2 py-0.5 rounded-full border border-indigo-500/20">
                Leadership
              </span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Corporate Liaison
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Devsinc Campus Ambassador
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal mb-4">
              Primary bridge between Devsinc and NUML tech students. Organizing engineering symposiums, developer hackathons, and mentoring peers on professional transitions.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Corporate Mentorship</span>
            <span className="text-indigo-400">Devsinc ✦</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TILE 5 (4-col): Apprenticeship & Professional Trajectory */}
        {/* ============================================================== */}
        <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl neural-card flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Bronze Fellow
              </span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Engineering Apprenticeship
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Dev Weekends & Startups
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal mb-4">
              Building modular Node.js backend services, RESTful API integrations, and predictive data pipelines across Dev Weekends, Buildables, and CosmiCode.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Full-Stack Delivery</span>
            <Link href="/about" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>View History</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TILE 6 (Full 12-col): Interactive Technology Stack Matrix */}
        {/* ============================================================== */}
        <div className="md:col-span-12 p-6 sm:p-8 rounded-3xl neural-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                Engineering Stack Overview
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Verified Technical Taxonomy
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {(["all", "core", "cloud", "ai"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all capitalize ${
                    activeTab === tab
                      ? "bg-cyan-500 text-surface-void font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {[
              { name: "C++", category: "core", level: "Advanced", desc: "Data structures, memory profiling" },
              { name: "Python", category: "core", level: "Advanced", desc: "ML pipelines & backend automation" },
              { name: "React 18", category: "cloud", level: "Advanced", desc: "Modular architecture, hooks" },
              { name: "Next.js", category: "cloud", level: "Advanced", desc: "App Router, SSR, SEO engines" },
              { name: "TypeScript", category: "core", level: "Proficient", desc: "Type-safe contracts & systems" },
              { name: "Redis", category: "cloud", level: "Proficient", desc: "In-memory caching, rate limiters" },
              { name: "PostgreSQL", category: "cloud", level: "Proficient", desc: "200+ tables, indexing" },
              { name: "Supabase RLS", category: "cloud", level: "Advanced", desc: "HIPAA Zero-Trust security" },
              { name: "OpenAI API", category: "ai", level: "Advanced", desc: "PHI redaction, context guardrails" },
              { name: "Redux Toolkit", category: "cloud", level: "Proficient", desc: "Global state management" },
              { name: "Postman", category: "ai", level: "Advanced", desc: "Automated API test suites" },
              { name: "Git & GitHub", category: "core", level: "Advanced", desc: "CI/CD & team workflows" },
            ]
              .filter((item) => activeTab === "all" || item.category === activeTab)
              .map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 rounded-2xl bg-surface-void/70 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-sm font-bold text-white block mb-0.5">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 block mb-1">
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-tight">
                    {tech.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
