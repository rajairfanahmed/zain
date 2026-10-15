"use client";

import React, { useState, useMemo } from "react";
import { profileData } from "@/data/profile";
import { Layers, Terminal, Sparkles, Database, Cpu, Search } from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryKey = "all" | "languages" | "frontend" | "backend" | "aiAndTools";

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { key: CategoryKey; label: string; icon: React.ReactNode }[] = [
    { key: "all", label: "Complete Inventory", icon: <Layers className="w-3.5 h-3.5" /> },
    { key: "languages", label: "Languages", icon: <Terminal className="w-3.5 h-3.5" /> },
    { key: "frontend", label: "Frontend & UI", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: "backend", label: "Backend & Cloud", icon: <Database className="w-3.5 h-3.5" /> },
    { key: "aiAndTools", label: "AI & Engineering", icon: <Cpu className="w-3.5 h-3.5" /> },
  ];

  const allSkills = useMemo(() => {
    const { languages, frontend, backend, aiAndTools } = profileData.skillsMatrix;
    return [
      ...languages.map((s) => ({ ...s, group: "Languages" })),
      ...frontend.map((s) => ({ ...s, group: "Frontend" })),
      ...backend.map((s) => ({ ...s, group: "Backend & Cloud" })),
      ...aiAndTools.map((s) => ({ ...s, group: "AI & Tools" })),
    ];
  }, []);

  const filteredSkills = useMemo(() => {
    let result = allSkills;
    if (activeTab === "languages") result = result.filter((s) => s.group === "Languages");
    if (activeTab === "frontend") result = result.filter((s) => s.group === "Frontend");
    if (activeTab === "backend") result = result.filter((s) => s.group === "Backend & Cloud");
    if (activeTab === "aiAndTools") result = result.filter((s) => s.group === "AI & Tools");

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.detail.toLowerCase().includes(q) ||
          s.group.toLowerCase().includes(q)
      );
    }
    return result;
  }, [allSkills, activeTab, searchQuery]);

  return (
    <div className="flex flex-col gap-6">
      {/* Category Filter Pills & Real-Time Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-surface-950/80 border border-white/10 w-fit">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                type="button"
                className={cn(
                  "flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200",
                  isActive
                    ? "bg-cyan-500 text-surface-void font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                )}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Real-Time Filter Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter stack (e.g. C++, Redis)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs font-mono rounded-xl bg-surface-950/80 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl neural-card flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-base font-bold text-white tracking-tight font-display">
                  {skill.name}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-2 py-0.5 rounded-full border",
                    skill.level === "Advanced"
                      ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/30"
                      : "bg-white/[0.04] text-zinc-400 border-white/10"
                  )}
                >
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                {skill.detail}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
              <span className="text-zinc-400">{skill.group}</span>
              <span className="text-cyan-400">● 100% Verified</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
