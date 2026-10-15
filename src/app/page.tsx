import React from "react";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import PitchDeckProjects from "@/components/PitchDeckProjects";
import AlgorithmicTerminal from "@/components/AlgorithmicTerminal";
import Link from "next/link";
import { ArrowUpRight, FileDown, Mail, Terminal, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20 overflow-x-hidden">
      {/* 1. Hero Section with Neural Holographic HUD & Telemetry */}
      <HeroSection />

      {/* 2. Asymmetric Modern Bento Grid (Humankind, 200+ LeetCode, Redis, Devsinc) */}
      <BentoGrid />

      {/* 3. Flagship Capstone Systems Showcase */}
      <PitchDeckProjects />

      {/* 4. Interactive Algorithmic Rigor Terminal */}
      <AlgorithmicTerminal />

      {/* 5. Executive Neural Contact Gateway CTA */}
      <section className="px-4 sm:px-8 py-16 sm:py-24 max-w-6xl mx-auto w-full">
        <div className="neural-card p-8 sm:p-14 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 border border-white/10">
          {/* Subtle Neural Ambient Cyan Blur */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Direct Engineering Gateway</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 font-display">
              Initiate an Engineering Dialogue
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Available for Software Engineering roles, distributed systems design, enterprise AI implementations, and campus leadership engagements.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3.5 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-surface-void shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Connect Direct</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Muhammad_Zain_Ul_Abideen_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/30 transition-all duration-200 font-mono"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Official CV</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
