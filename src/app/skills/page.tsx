import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SkillsMatrix from "@/components/SkillsMatrix";
import CredentialsLedger from "@/components/CredentialsLedger";
import { siteConfig } from "@/data/siteConfig";
import { Code2, ArrowUpRight, FileDown, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills & Technical Matrix | C++, Python, Next.js, Redis",
  description:
    "Comprehensive engineering matrix and verified accreditations for Muhammad Zain-Ul-Abideen: C++, Python, React, Next.js, Redis, PostgreSQL, Supabase, 200+ LeetCode solutions, and formal credentials.",
  alternates: {
    canonical: `${siteConfig.url}/skills`,
  },
  openGraph: {
    title: "Skills & Technical Matrix | Muhammad Zain-Ul-Abideen",
    description:
      "Verified engineering capabilities of Muhammad Zain-Ul-Abideen: C++, Python, Redis, React, Next.js, PostgreSQL, 200+ LeetCode solutions.",
    images: [siteConfig.ogImage],
  },
};

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 flex flex-col gap-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[700px] h-[450px] bg-gradient-to-bl from-cyan-500/10 via-indigo-500/05 to-transparent blur-[140px] rounded-full pointer-events-none z-0"
      />

      {/* 1. Page Header & Algorithmic Rigor Spotlight */}
      <section className="flex flex-col gap-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Capabilities Taxonomy // Full Stack & AI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display leading-[1.08] mb-3">
            Engineering Matrix & <span className="text-gradient-neural">Technical Mastery</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed font-normal">
            A verified inventory of architectural competencies across distributed datastores, type-safe full-stack workflows, safety-conscious AI integrations, and algorithmic optimization.
          </p>
        </div>

        {/* 200+ LeetCode Spotlight Banner */}
        <div className="p-6 sm:p-8 rounded-3xl neural-card border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_15px_40px_-10px_rgba(6,182,212,0.15)]">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-lg">
              <Code2 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-950/50 border border-amber-500/30">
                  Algorithmic Rigor
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  C++ & Python Optimization
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                200+ Problems Solved on LeetCode
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl leading-relaxed font-normal">
                Asymptotic time and space complexity profiling across Dynamic Programming, Graph Theory, Binary Trees, and sliding window paradigms.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wide bg-amber-400 hover:bg-amber-300 text-surface-void shadow-lg transition-all shrink-0"
          >
            <span>LeetCode Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 2. Interactive Skills Matrix Grid */}
      <section className="relative z-10 flex flex-col gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            Skill Taxonomy
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Categorized Technical Stack
          </h2>
        </div>
        <SkillsMatrix />
      </section>

      {/* 3. Verified Credentials Ledger */}
      <section className="relative z-10 flex flex-col gap-6">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            Formal Accreditations
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display mb-1">
            Verified Industry Accreditations
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl font-normal">
            Accredited certifications detailing issuing bodies, completion timelines, and core competencies without raw ID clutter.
          </p>
        </div>
        <CredentialsLedger />
      </section>
    </div>
  );
}
