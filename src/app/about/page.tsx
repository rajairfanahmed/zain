import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/data/siteConfig";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Users,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  FileDown,
  Sparkles,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Engineering Trajectory & Leadership",
  description:
    "Explore Muhammad Zain-Ul-Abideen's career trajectory: Campus Ambassador at Devsinc, Computer Science Senior at NUML, Full-Stack and AI engineering experience across SPS, Dev Weekends, and university leadership.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About | Muhammad Zain-Ul-Abideen",
    description:
      "Career trajectory of Muhammad Zain-Ul-Abideen: Campus Ambassador at Devsinc, Full-Stack & AI engineer, 200+ LeetCode problems solved.",
    images: [siteConfig.ogImage],
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 flex flex-col gap-20 relative overflow-hidden">
      {/* Background Subtle Synaptic Light */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[700px] h-[450px] bg-gradient-to-bl from-cyan-500/10 via-indigo-500/05 to-transparent blur-[140px] rounded-full pointer-events-none z-0"
      />

      {/* 1. Header with Portrait & Engineering Philosophy */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-6 sm:p-12 neural-card">
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border border-white/20 shadow-2xl shrink-0 bg-surface-950 group">
          <Image
            src="/images/zain.jpg"
            alt={profileData.name}
            fill
            priority
            className="object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 176px, 224px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-void via-transparent to-transparent opacity-50" />
        </div>

        <div className="flex flex-col gap-4 text-center lg:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 w-fit mx-auto lg:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Executive Chronicle // Biography</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display leading-[1.08]">
            Engineering Systems with <span className="text-gradient-neural">Mathematical Rigor</span>
          </h1>

          <div className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            {profileData.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Muhammad_Zain_Ul_Abideen_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-medium text-surface-void bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Verified CV (PDF)</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Education & Campus Leadership Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-3xl neural-card flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Formal Academic Degree
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {profileData.education.period}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-display">
              {profileData.education.institution}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-cyan-300 mb-4">
              {profileData.education.degree}
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
              Core academic focus: {profileData.education.focus}. Applying mathematical and algorithmic foundations directly to production systems.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{profileData.education.location}</span>
            </div>
            <span className="text-cyan-400 font-bold">✦</span>
          </div>
        </div>

        {/* Devsinc Ambassadorship Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-3xl neural-card border-cyan-500/30 flex flex-col justify-between text-white relative overflow-hidden">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-300">
                Official Campus Ambassador
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Jul 2026 – Present
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-display">
              Devsinc Corporation
            </h3>
            <p className="text-xs sm:text-sm font-mono text-indigo-300 mb-4">
              Academic & Corporate Technology Liaison
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
              Acting as the primary bridge between enterprise engineering standards and university students, organizing developer symposiums, and mentoring students on career readiness.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Corporate Representation & Mentorship</span>
            <span className="text-cyan-400 font-bold">✦</span>
          </div>
        </div>
      </section>

      {/* 3. Verified Career Progression & Experience Timeline */}
      <section className="flex flex-col gap-8 relative z-10">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            Career Chronicle
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Chronological Experience & Leadership
          </h2>
        </div>

        <ExperienceTimeline />
      </section>

      {/* 4. Student Branch Leadership & Volunteering */}
      <section className="flex flex-col gap-6 relative z-10">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
            Community Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Student Branch Leadership & Volunteering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.volunteering.map((vol) => (
            <div
              key={vol.id}
              className="p-6 sm:p-8 rounded-3xl neural-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {vol.role}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {vol.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {vol.organization}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {vol.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {vol.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="text-cyan-400 font-bold">✦</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
