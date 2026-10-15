"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import {
  Menu,
  X,
  FileDown,
  Github,
  Code2,
  Linkedin,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 sm:pt-6 transition-all duration-300 pointer-events-none">
        <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Floating Rounded Glassmorphism Capsule */}
          <div
            className={cn(
              "w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500",
              "bg-surface-950/75 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.8)]",
              scrolled
                ? "border-cyan-500/30 shadow-[0_15px_45px_-8px_rgba(6,182,212,0.15)] bg-surface-950/90"
                : "border-white/10"
            )}
          >
            {/* Left: Brand Identity with Neural Pulse Status */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full py-1 px-2"
              aria-label="Muhammad Zain-Ul-Abideen Home"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-cyan-950/60 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                <span className="text-xs font-mono font-bold text-cyan-300">Z</span>
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors font-display leading-tight">
                  Zain
                </span>
                <span className="text-[10px] font-mono text-zinc-400 tracking-wider flex items-center gap-1">
                  <span>AI & SWE</span>
                  <span className="text-cyan-400/80">●</span>
                  <span className="text-[9px] text-zinc-400">Devsinc</span>
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href) &&
                      item.href !== "/#projects";

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative",
                      isActive
                        ? "text-cyan-200 bg-cyan-950/60 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick Action Controls & Socials */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={siteConfig.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-zinc-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
                title="LeetCode (200+ Solved)"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                title="GitHub Repositories"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-zinc-400 hover:text-sky-400 hover:bg-white/5 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Verified CV Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Muhammad_Zain_Ul_Abideen_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-cyan-200 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-200 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] ml-1"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Muhammad_Zain_Ul_Abideen_Resume.pdf"
                className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300"
              >
                CV
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 focus-visible:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Glassmorphism Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-surface-void/95 backdrop-blur-2xl px-6 pt-28 pb-10 flex flex-col justify-between animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                Neural Platform Navigation
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Muhammad Zain
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl bg-white/[0.03] hover:bg-cyan-950/40 border border-white/5 hover:border-cyan-500/30 text-xl font-bold tracking-tight text-zinc-200 hover:text-cyan-300 flex items-center justify-between transition-all"
                >
                  <span>{item.label}</span>
                  <span className="text-cyan-400 text-sm font-mono">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-around py-2">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Muhammad_Zain_Ul_Abideen_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-surface-void font-bold text-sm transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
