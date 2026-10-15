import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Briefcase, Award, GraduationCap, FileText } from "lucide-react";
import { WORK_EXPERIENCE, LEADERSHIP_EXPERIENCE, EDUCATION_DATA } from "@/data/profile";

export const metadata: Metadata = {
  title: "About & Leadership | Muhammad Zain-Ul-Abideen",
  description:
    "Engineering philosophy, professional software engineering trajectory, and technical leadership of Muhammad Zain-Ul-Abideen.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      {/* 1. HEADER SECTION */}
      <div className="border-b border-white/[0.08] pb-12 mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-3">
          01 // THE CHRONICLE
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.05] mb-6">
          Engineering Rigor & <br />
          <span className="text-slate-400">Technical Leadership.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
          A chronicle of systems architecture, algorithmic problem-solving, and community impact. Bridging production software engineering with campus technical evangelism.
        </p>
      </div>

      {/* 2. PHILOSOPHY & PORTRAIT SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
        {/* LEFT: ENGINEERING MANIFESTO & PRINCIPLES */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
              The Engineering Manifesto
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              I believe that enduring software is engineered from the data layer outward. A sleek frontend interface is only as reliable as the concurrency bounds, caching strategies, and data access controls supporting it under load.
            </p>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Whether architecting Humankind&apos;s 200+ table healthcare super-marketplace with HIPAA-aware client-side PHI redaction, or optimizing competitive dynamic programming solutions in modern C++, my focus is always on **asymptotic efficiency, operational security, and developer clarity**.
            </p>
          </div>

          {/* THREE GUIDING PRINCIPLES */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0D1017]">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                PRINCIPLE 01 // DEPTH OVER SURFACE
              </span>
              <h3 className="font-display font-semibold text-white text-base mb-1">
                Data-First Architecture
              </h3>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                Design strict schemas, enforce PostgreSQL Row-Level Security, and minimize round-trips with Redis in-memory caches before composing the UI.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0D1017]">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                PRINCIPLE 02 // ALGORITHMIC DISCIPLINE
              </span>
              <h3 className="font-display font-semibold text-white text-base mb-1">
                Asymptotic Precision
              </h3>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                200+ solved LeetCode problems across dynamic programming, graph theory, and trees in modern C++ and Python form the foundation of my performance instincts.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0D1017]">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">
                PRINCIPLE 03 // TECHNICAL EVANGELISM
              </span>
              <h3 className="font-display font-semibold text-white text-base mb-1">
                Servant Leadership
              </h3>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                As Devsinc Campus Ambassador and IEEE PR Lead, I connect university developers with industry leaders, demystifying career growth and modern web stacks.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: EDITORIAL PORTRAIT ENCLOSURE */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 specular-card rounded-2xl p-3 shadow-2xl">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
              <Image
                src="/images/zain.jpg"
                alt="Muhammad Zain-Ul-Abideen"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-transparent to-transparent opacity-70" />
            </div>

            <div className="p-5 font-mono text-xs">
              <div className="flex items-center justify-between mb-3 border-b border-white/[0.06] pb-3">
                <span className="text-white font-bold text-sm">Muhammad Zain</span>
                <span className="text-amber-400">✦</span>
              </div>
              <div className="space-y-1.5 text-slate-400">
                <div className="flex justify-between">
                  <span>Role:</span>
                  <span className="text-slate-200">Software Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span>Ambassadorship:</span>
                  <span className="text-emerald-400">Devsinc Campus Lead</span>
                </div>
                <div className="flex justify-between">
                  <span>Alma Mater:</span>
                  <span className="text-slate-200">NUML Islamabad</span>
                </div>
                <div className="flex justify-between">
                  <span>Graduation:</span>
                  <span className="text-slate-200">Class of 2026</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06]">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Download Verified Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PROFESSIONAL WORK EXPERIENCE */}
      <section className="mb-24">
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4 mb-12">
          <Briefcase className="w-5 h-5 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-white/[0.08]">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-10 sm:pl-16">
              {/* Timeline Node */}
              <div className="absolute left-2.5 sm:left-4.5 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-amber-400 bg-[#07080B]" />

              <div className="specular-card p-6 sm:p-8 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                      {job.role}
                    </h3>
                    <span className="text-sm font-semibold text-amber-400 font-mono">
                      {job.organization}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] self-start sm:self-auto">
                    {job.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                  {job.summary}
                </p>

                <div className="space-y-2 mb-6">
                  {job.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STUDENT LEADERSHIP & COMMUNITY IMPACT */}
      <section className="mb-24">
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4 mb-12">
          <Award className="w-5 h-5 text-emerald-400" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Technical Leadership & Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_EXPERIENCE.map((item) => (
            <div key={item.id} className="specular-card p-6 sm:p-8 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    {item.role}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{item.period}</span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-3">
                  {item.organization}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {item.summary}
                </p>

                <div className="space-y-2 mb-6">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ACADEMIC FOUNDATION */}
      <section className="mb-24">
        <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4 mb-8">
          <GraduationCap className="w-5 h-5 text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Academic Foundation
          </h2>
        </div>

        <div className="specular-card p-8 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                {EDUCATION_DATA.institution}
              </h3>
              <span className="text-sm font-semibold text-slate-300 font-mono">
                {EDUCATION_DATA.degree}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] self-start sm:self-auto">
              {EDUCATION_DATA.period} • {EDUCATION_DATA.location}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
            {EDUCATION_DATA.description}
          </p>

          <div>
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-3">
              Core Technical Coursework
            </span>
            <div className="flex flex-wrap gap-2">
              {EDUCATION_DATA.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 rounded-md bg-[#07080B] border border-white/[0.08] text-xs font-mono text-slate-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEXT CHAPTER CALLOUT */}
      <div className="border border-white/[0.1] bg-[#0D1017] p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-amber-400 block mb-1">
            CONTINUE THE EVALUATION
          </span>
          <h3 className="text-2xl font-bold font-display text-white">
            Ready to inspect production architectures?
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Review flagship healthcare marketplaces, algorithms, and distributed caching implementations.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-slate-200 transition-colors whitespace-nowrap"
        >
          <span>Inspect Projects</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
