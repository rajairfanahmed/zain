"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Terminal,
  Code2,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function AlgorithmicTerminal() {
  const [activeTab, setActiveTab] = useState<"summary" | "complexity" | "topics">("summary");

  const topics = [
    { name: "Dynamic Programming", count: "45+ Problems", complexity: "O(N) / O(N*W)", detail: "Knapsack, Subsequences, State Compression" },
    { name: "Graph Algorithms", count: "38+ Problems", complexity: "O(V + E)", detail: "Dijkstra, Topological Sort, BFS/DFS Traversal" },
    { name: "Trees & Binary Search", count: "42+ Problems", complexity: "O(log N)", detail: "LCA, Segment Trees, Trie Structures" },
    { name: "Sliding Window & Pointers", count: "35+ Problems", complexity: "O(N) Time, O(1) Space", detail: "Substrings, Monotonic Queues, Two Pointers" },
    { name: "Heap & Priority Queues", count: "25+ Problems", complexity: "O(N log K)", detail: "Kth Elements, Median Streams, Scheduling" },
    { name: "Greedy & Math Optimization", count: "20+ Problems", complexity: "O(N log N)", detail: "Interval Scheduling, Number Theory" },
  ];

  return (
    <section className="px-4 sm:px-8 py-16 sm:py-20 max-w-6xl mx-auto w-full relative">
      <div className="rounded-3xl neural-card overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
        {/* Terminal Title Bar */}
        <div className="px-6 py-4 bg-surface-void/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">
              zain@neural-core: ~/algorithms/leetcode-200
            </span>
          </div>

          <div className="flex items-center gap-2">
            {(["summary", "topics", "complexity"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? "bg-cyan-950/80 text-cyan-300 border border-cyan-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-8 bg-surface-void/95 font-mono text-xs sm:text-sm">
          {activeTab === "summary" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400">➜</span>
                <span className="text-white font-bold">./audit_algorithmic_foundations.sh --profile=Zyn__</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-zinc-300">
                <p className="text-zinc-400">[INFO] Fetching verified LeetCode solve registry...</p>
                <p className="text-emerald-400">✔ Total Problems Solved: 200+ (Continuous Asymptotic Benchmarking)</p>
                <p className="text-cyan-300">✔ Primary Idiomatic Languages: C++ (STL, Memory Efficiency) & Python 3</p>
                <p className="text-zinc-300">✔ Focus Areas: Dynamic Programming, Graph Traversals, Binary Trees, Sliding Window</p>
                <p className="text-violet-400">✔ Core Principle: Asymptotic minimization of auxiliary space to O(1) where feasible</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-cyan-400">Verified Solves</span>
                  <span className="text-2xl font-bold text-white mt-1">200+</span>
                  <span className="text-[10px] text-zinc-400 mt-0.5">LeetCode ID: Zyn__</span>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-amber-400">Target Efficiency</span>
                  <span className="text-2xl font-bold text-white mt-1">O(log N)</span>
                  <span className="text-[10px] text-zinc-400 mt-0.5">Optimal Asymptotic Bound</span>
                </div>
                <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-indigo-400">Core Runtime</span>
                  <span className="text-2xl font-bold text-white mt-1">C++ & Python</span>
                  <span className="text-[10px] text-zinc-400 mt-0.5">Production Memory Control</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "topics" && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-white font-bold">cat /var/metrics/algorithmic_domains.json</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topics.map((t) => (
                  <div key={t.name} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-cyan-300 font-bold text-xs">{t.name}</span>
                        <span className="text-[10px] text-zinc-400">{t.count}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 font-normal leading-relaxed">{t.detail}</p>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono mt-2 pt-1 border-t border-white/5">
                      Complexity: {t.complexity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "complexity" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400">➜</span>
                <span className="text-white font-bold">./profile_complexity_heuristics.py</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 text-zinc-300">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-white font-bold">Space Optimization Paradigm</span>
                  <span className="text-cyan-400">O(1) In-Place State</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Replacing full 2D dynamic programming matrices with two rolling 1D state vectors, reducing memory overhead from O(N × M) to O(min(N, M)).
                </p>

                <div className="flex items-center justify-between pb-2 pt-2 border-b border-white/5">
                  <span className="text-white font-bold">Search & Divide-and-Conquer</span>
                  <span className="text-violet-400">O(log N) Bound</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  Implementing binary search over continuous solution spaces (e.g. allocation constraints, capacity lower bounds) and recursive divide-and-conquer paradigms.
                </p>
              </div>
            </div>
          )}

          {/* Terminal Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[11px] text-zinc-400">
              Verified handle: <span className="text-cyan-400">Zyn__</span> on LeetCode
            </span>

            <a
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-300 text-xs font-mono transition-all"
            >
              <span>Inspect LeetCode Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
