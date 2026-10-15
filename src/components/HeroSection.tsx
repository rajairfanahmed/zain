"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowUpRight,
  FileDown,
  Code2,
  Cpu,
  Database,
  ShieldCheck,
  Terminal,
  Activity,
  Layers,
} from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 pt-28 sm:pt-36 pb-16 overflow-hidden max-w-6xl mx-auto w-full">
      {/* Background Subtle Neural Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 blur-[140px] rounded-full pointer-events-none -z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Telemetry (Span 7) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Neural Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 shadow-[0_0_20px_-3px_rgba(6,182,212,0.25)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>Campus Ambassador @ Devsinc • CS Senior @ NUML</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-white leading-[1.08] mb-6 font-display">
            Engineering <span className="text-gradient-neural">Neural-Grade</span> Systems & High-Scale Clouds
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl leading-relaxed mb-8 font-normal">
            Bridging algorithmic rigor with distributed architectures. Building high-throughput systems, HIPAA-compliant healthcare engines, and safe enterprise AI workflows across C++, Python, Next.js, and Redis.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
            <Link
              href="/#bento-grid"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-surface-void shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Explore Architectures</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-surface-950/60 hover:bg-surface-900 text-zinc-200 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-200"
            >
              <span>Initiate Dialogue</span>
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Muhammad_Zain_Ul_Abideen_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-mono text-cyan-300 hover:text-white bg-cyan-950/30 hover:bg-cyan-950/60 border border-cyan-500/30 transition-all duration-200"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Quick Keywords Strip */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 w-full">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mr-1">
              Stack:
            </span>
            {["C++", "Python", "React 18", "Next.js", "Redis", "Redux", "TypeScript", "Postman", "ML"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06] hover:border-cyan-500/30 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Column: Neural Identity Enclosure (Span 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-sm">
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-2xl rounded-3xl" />

            {/* Neural Glass Card Container */}
            <div className="relative p-6 sm:p-7 rounded-3xl bg-surface-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Top Telemetry Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">
                    NEURAL NODE // ONLINE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">
                  LAT: 33.6844° N
                </span>
              </div>

              {/* Portrait Frame with Specular Border */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/15 bg-surface-900 mb-5 group">
                <Image
                  src="/images/zain.jpg"
                  alt={profileData.name}
                  fill
                  priority
                  className="object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 320px, 380px"
                />

                {/* Subtle Neural Synaptic Overlay Lines on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-void via-transparent to-transparent opacity-60" />

                {/* Floating Devsinc Badge on Portrait */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-surface-950/85 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-white font-display">
                      Devsinc Ambassador
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
                    Official
                  </span>
                </div>
              </div>

              {/* Micro Metrics Rows */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={siteConfig.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-cyan-950/30 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col"
                >
                  <span className="text-[10px] font-mono text-amber-400 flex items-center gap-1">
                    <Code2 className="w-3 h-3" />
                    <span>LeetCode</span>
                  </span>
                  <span className="text-lg font-bold text-white font-mono mt-0.5">
                    200+ Solved
                  </span>
                  <span className="text-[9px] text-zinc-400 font-mono">
                    C++ & Python Optimization
                  </span>
                </a>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                  <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    <span>Architectures</span>
                  </span>
                  <span className="text-lg font-bold text-white font-mono mt-0.5">
                    10+ Capstones
                  </span>
                  <span className="text-[9px] text-zinc-400 font-mono">
                    Production Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Telemetry Ribbon / Stats Strip */}
      <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        {profileData.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight flex items-baseline gap-1">
              <span>{stat.value}</span>
              <span className="text-cyan-400 text-sm font-mono">✦</span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">
              {stat.label}
            </span>
            <span className="text-[11px] text-zinc-400 font-mono mt-0.5">
              {stat.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
