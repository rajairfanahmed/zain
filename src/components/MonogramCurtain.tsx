"use client";

import React, { useEffect, useState } from "react";

export default function MonogramCurtain() {
  const [stage, setStage] = useState<"holding" | "revealing" | "unmounted">("holding");

  useEffect(() => {
    // Cinematic hold, then trigger split curtain parting
    const revealTimer = setTimeout(() => {
      setStage("revealing");
    }, 750);

    const unmountTimer = setTimeout(() => {
      setStage("unmounted");
    }, 1800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (stage === "unmounted") return null;

  const isRevealing = stage === "revealing";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[120] pointer-events-none flex flex-col overflow-hidden"
    >
      {/* Top Half Curtain */}
      <div
        className={`w-full h-1/2 bg-[#050608] border-b border-white/5 transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isRevealing ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Center Cinematic Monogram Plaque */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-3 transition-all duration-700 ease-out ${
          isRevealing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-100/90 border border-cyan-500/30 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
          <span className="text-xl font-mono font-bold tracking-tight bg-gradient-to-br from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            MZ
          </span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="text-xs font-mono tracking-[0.25em] text-text-primary uppercase font-semibold">
            Muhammad Zain-Ul-Abideen
          </span>
          <span className="text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase">
            Software Engineer • Campus Ambassador
          </span>
        </div>
      </div>

      {/* Bottom Half Curtain */}
      <div
        className={`w-full h-1/2 bg-[#050608] border-t border-white/5 transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isRevealing ? "translate-y-full" : "translate-y-0"
        }`}
      />
    </div>
  );
}
