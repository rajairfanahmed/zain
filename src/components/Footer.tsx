import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
  Mail,
  MapPin,
  FileDown,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-void/90 backdrop-blur-xl relative overflow-hidden">
      {/* Subtle Bottom Ambient Synaptic Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-500/05 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Role (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white font-display group w-fit"
            >
              <span>Zain</span>
              <span className="text-cyan-400 font-mono text-xs px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                AI & SWE
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-normal">
              Computer Science Senior at NUML & Campus Ambassador @ Devsinc. Engineering distributed backends, healthcare super-marketplaces, and AI pipelines.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Islamabad, Pakistan • Open to Global Relocation</span>
            </div>
          </div>

          {/* Col 2: Navigation (Span 3) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Platform Chapters
            </span>
            <div className="flex flex-col gap-2 text-xs font-mono">
              <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                About & Trajectory
              </Link>
              <Link href="/skills" className="text-zinc-400 hover:text-white transition-colors">
                Skills & Accreditations
              </Link>
              <Link href="/#projects" className="text-zinc-400 hover:text-white transition-colors">
                Flagship Systems
              </Link>
              <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                Contact Console
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Muhammad_Zain_Ul_Abideen_Resume.pdf"
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 mt-1"
              >
                <span>Download CV (PDF)</span>
                <FileDown className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 3: Verified Channels (Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
              Verified Profiles
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 text-xs text-zinc-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 text-xs text-zinc-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={siteConfig.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 text-xs text-zinc-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>LeetCode (200+ Solved)</span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs font-mono text-zinc-400">
          <span>
            © {new Date().getFullYear()} Muhammad Zain-Ul-Abideen. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300">Devsinc Campus Ambassador • NUML BSCS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
