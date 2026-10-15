"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowUpRight,
  Github,
  ShieldCheck,
  Cpu,
  Database,
  Activity,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function PitchDeckProjects() {
  const [selectedProject, setSelectedProject] = useState<string>("humankind-marketplace");

  const projects = [
    {
      id: "humankind-marketplace",
      title: "Humankind Healthcare Super-Marketplace",
      subtitle: "Enterprise Clinical & Wellness Discovery, Booking & Financing Engine",
      role: "Full-Stack & Security Engineer @ SPS",
      period: "Oct 2025 – Jul 2026",
      status: "Production Architecture",
      icon: Activity,
      description:
        "A unified healthcare super-marketplace engineered for clinical and wellness services. Features zero-trust data access protocols, embedded fintech financing via Stripe Connect, and intelligent AI care flows.",
      architecture: [
        "Full-stack React 18, TypeScript, and responsive Tailwind CSS client modules.",
        "Supabase and PostgreSQL backend running strict Row-Level Security (RLS) to enforce HIPAA compliance.",
        "OpenAI API care navigation flows with built-in PHI (Protected Health Information) redaction.",
        "Embedded installment pricing systems powered by Stripe Connect and LaaS endpoints.",
        "Event-Driven Integration Hub maintaining cross-platform sync across 200+ relational tables.",
      ],
      metrics: ["200+ Relational Tables", "HIPAA PHI Redaction", "Stripe Connect"],
      tags: ["React 18", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API", "Stripe Connect"],
    },
    {
      id: "algorithmic-problem-engine",
      title: "Algorithmic Systems & Data Structures Repository",
      subtitle: "200+ Verified LeetCode & Competitive Programming Solutions",
      role: "Algorithmic Systems Design & Optimization",
      period: "Active Continuous Practice",
      status: "Continuous Benchmark",
      icon: Cpu,
      githubUrl: siteConfig.links.leetcode,
      description:
        "Comprehensive collection of 200+ optimized algorithmic solutions spanning dynamic programming, graph theory, tree traversals, and greedy paradigms in C++ and Python.",
      architecture: [
        "Time and space complexity profiling with strict asymptotic bounds (O(1) space, O(log N) searches).",
        "Idiomatic modern C++ (STL, templates, memory efficiency) and Python3 implementations.",
        "Benchmark test harnesses with corner-case stress testing and sliding-window algorithmic profiling.",
      ],
      metrics: ["200+ Problems Solved", "Optimal Complexity", "C++ & Python"],
      tags: ["C++", "Python", "Algorithms", "Dynamic Programming", "LeetCode 200+"],
    },
    {
      id: "ai-care-navigation",
      title: "Intelligent Clinical Care Navigation Flow",
      subtitle: "Automated Clinical Assistant with PHI Redaction & Safety Guardrails",
      role: "AI Architecture & Context Boundaries",
      period: "Production Workflow",
      status: "Safe AI Engine",
      icon: ShieldCheck,
      description:
        "An AI-powered operational care assistant that parses user inquiries, matches appropriate clinical specialties, and generates structured care recommendations while strictly redacting sensitive patient identifiers.",
      architecture: [
        "Structured OpenAI prompt engineering pipelines with strict context boundary enforcement.",
        "Client-side and middleware sanitization preventing PHI leakage prior to LLM dispatch.",
        "Event-driven integration loop coordinating provider booking availability.",
      ],
      metrics: ["Zero-Trust Data Boundary", "Automated Triage", "Context Preservation"],
      tags: ["OpenAI API", "Next.js", "TypeScript", "Data Privacy", "Prompt Engineering"],
    },
    {
      id: "distributed-cache-store",
      title: "High-Throughput Redis Caching & Rate-Limiter",
      subtitle: "In-Memory Session & Request Synchronization Hub",
      role: "Distributed Systems Architecture",
      period: "In-Memory Infrastructure",
      status: "Distributed Layer",
      icon: Database,
      description:
        "A distributed state and caching layer designed to mitigate database bottlenecks across high-frequency API endpoints using Redis key evictions and sliding-window rate limiters.",
      architecture: [
        "Sliding-window counter implementation guarding critical authentication and booking routes.",
        "Redis Pub/Sub event distribution notifying connected client portals in real-time.",
        "Fallback mechanisms ensuring graceful degradation during connection interruptions.",
      ],
      metrics: ["Sliding-Window Limiter", "Pub/Sub Synchronization", "Sub-ms Latency"],
      tags: ["Redis", "Node.js", "TypeScript", "System Architecture", "Performance"],
    },
  ];

  const current = projects.find((p) => p.id === selectedProject) || projects[0];
  const CurrentIcon = current.icon;

  return (
    <section id="projects" className="px-4 sm:px-8 py-20 sm:py-28 max-w-6xl mx-auto w-full relative">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10"
      />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Capstone Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08]">
            Flagship Engineering <span className="text-gradient-neural">Architectures</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-3 font-normal leading-relaxed">
            Real production systems demonstrating end-to-end full-stack capabilities, distributed datastores, healthcare security, and algorithmic efficiency.
          </p>
        </div>

        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all shrink-0"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub Ecosystem</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
        </a>
      </div>

      {/* Interactive Tabs Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {projects.map((project) => {
          const Icon = project.icon;
          const isSelected = project.id === selectedProject;
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project.id)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between min-h-[110px] ${
                isSelected
                  ? "bg-surface-950/90 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  : "bg-surface-950/40 border-white/5 hover:border-white/15"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${
                    isSelected
                      ? "bg-cyan-500 text-surface-void"
                      : "bg-white/5 text-zinc-400"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono text-zinc-400">
                  {project.period.includes("Oct") ? "SPS" : "Production"}
                </span>
              </div>
              <span
                className={`text-xs sm:text-sm font-bold tracking-tight line-clamp-1 ${
                  isSelected ? "text-white" : "text-zinc-400"
                }`}
              >
                {project.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Project Deep-Dive Spotlight Card */}
      <div className="p-6 sm:p-10 rounded-3xl neural-card relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          {/* Left Details */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                {current.role}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {current.period}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                {current.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display mb-2">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm font-mono text-cyan-300 mb-6">
              {current.subtitle}
            </p>

            <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-8">
              {current.description}
            </p>

            {/* Architecture Highlights */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Architectural Implementation Highlights</span>
              </h4>

              <div className="space-y-2.5">
                {current.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-surface-void/60 border border-white/5 text-xs text-zinc-300 leading-relaxed font-normal"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Tags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {current.githubUrl ? (
                  <a
                    href={current.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium text-surface-void bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
                  >
                    <span>View Repository / Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 transition-all"
                  >
                    <span>Request Architecture Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Metrics Panel */}
          <div className="w-full lg:w-72 shrink-0 p-6 rounded-2xl bg-surface-void/80 border border-white/10 flex flex-col gap-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 border-b border-white/10 pb-3 block">
              SYSTEM TELEMETRY
            </span>

            {current.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-300">
                  {metric}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider mt-0.5">
                  Verified Metric // 0{i + 1}
                </span>
              </div>
            ))}

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Audited System</span>
              </span>
              <span className="text-cyan-400 font-bold">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
