import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText, CheckCircle2, Terminal, Layers, ShieldCheck, Cpu } from "lucide-react";
import Marquee from "@/components/Marquee";
import { PROFILE_METRICS, FLAGSHIP_PROJECT } from "@/data/profile";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION (THE VANGUARD) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 sm:pt-16 pb-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* LEFT: EDITORIAL COPY & HEADLINE */}
          <div className="flex-1 max-w-3xl">
            {/* Live Availability Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
              <span className="text-emerald-500/60">•</span>
              <span className="text-slate-300">Devsinc Ambassador</span>
            </div>

            {/* Monumental Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.05] mb-8">
              Scalable Systems & <br />
              <span className="text-slate-400">Algorithmic Precision.</span>
            </h1>

            {/* Authoritative Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
              Muhammad Zain-Ul-Abideen is a Software Engineer, final-year Computer Science senior at NUML, and official Campus Ambassador @ Devsinc. Architecting high-concurrency distributed backends, clinical healthcare super-marketplaces, and 200+ optimal algorithmic solutions.
            </p>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-slate-200 transition-all shadow-lg hover:shadow-specular"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/[0.12] hover:border-white/[0.24] text-white font-mono text-xs uppercase tracking-wider font-medium hover:bg-white/[0.04] transition-all bg-[#0D1017]/50"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Verified CV</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-transparent hover:border-white/[0.08] text-slate-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                <span>Direct Dispatch →</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: ASYMMETRIC PORTRAIT STAGE */}
          <div className="w-full sm:w-80 lg:w-[400px] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0D1017] p-2.5 shadow-2xl group transition-all duration-500 hover:border-white/[0.25]">
              {/* Corner Sparkle Signatures */}
              <div className="absolute top-4 right-4 z-10 text-amber-400 text-sm">✦</div>
              <div className="absolute bottom-16 left-4 z-10 text-slate-600 text-xs font-mono">01 // IDENTITY</div>

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out">
                <Image
                  src="/images/zain.jpg"
                  alt="Muhammad Zain-Ul-Abideen"
                  fill
                  className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-[#07080B]/20 to-transparent opacity-75" />
              </div>

              {/* Portrait Info Footer */}
              <div className="p-4 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-white font-bold block text-sm">Muhammad Zain</span>
                  <span className="text-slate-400 text-[11px]">Software Engineer • Devsinc</span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-400 block font-semibold text-[11px]">Islamabad, PK</span>
                  <span className="text-slate-500 text-[10px]">UTC+5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS KINETIC MARQUEE */}
      <Marquee />

      {/* 3. HIGH-DENSITY ENGINEERING METRICS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-12">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
              ENGINEERING RIGOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Verified Production Metrics
            </h2>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-slate-500">
            EVALUATION // 01
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className="specular-card p-6 sm:p-8 rounded-xl flex flex-col justify-between overflow-hidden min-w-0"
            >
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-slate-500 block mb-4">
                  0{idx + 1} // STAT
                </span>
                <span
                  className={`font-display font-extrabold text-white block tracking-tight mb-2 truncate ${
                    metric.value.length > 7
                      ? "text-2xl sm:text-3xl"
                      : metric.value.length > 4
                      ? "text-3xl sm:text-4xl"
                      : "text-4xl sm:text-5xl"
                  }`}
                  title={metric.value}
                >
                  {metric.value}
                </span>
                <span className="text-sm font-semibold text-slate-200 block mb-2 font-mono truncate">
                  {metric.label}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono leading-relaxed mt-4 pt-4 border-t border-white/[0.06]">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED FLAGSHIP ARCHITECTURE PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="specular-card p-8 sm:p-12 lg:p-16 rounded-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
                <span>01 // FLAGSHIP ARCHITECTURE</span>
                <span>✦</span>
                <span className="text-slate-500">ENTERPRISE CLINICAL SUPER-MARKETPLACE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-4">
                {FLAGSHIP_PROJECT.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mb-8">
                {FLAGSHIP_PROJECT.description}
              </p>

              <div className="space-y-3 mb-8">
                {FLAGSHIP_PROJECT.architecture.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-slate-300 font-mono">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {FLAGSHIP_PROJECT.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-slate-200 transition-colors"
                >
                  <span>Inspect All Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ARCHITECTURAL HIGHLIGHTS LEDGER */}
            <div className="w-full lg:w-80 flex-shrink-0 bg-[#07080B]/80 border border-white/[0.08] rounded-xl p-6 font-mono text-xs">
              <span className="text-slate-500 text-[11px] block uppercase tracking-wider mb-4 border-b border-white/[0.06] pb-2">
                SYSTEM TELEMETRY
              </span>
              <div className="space-y-4">
                <div>
                  <span className="text-slate-400 block text-[11px]">Database Topology</span>
                  <span className="text-white font-semibold">200+ Relational Tables (PostgreSQL)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Security Framework</span>
                  <span className="text-emerald-400 font-semibold">Row-Level Security (RLS) & HIPAA</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Embedded Financing</span>
                  <span className="text-white font-semibold">Stripe Connect & LaaS Endpoints</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Clinical Assistant</span>
                  <span className="text-amber-400 font-semibold">OpenAI Prompt & PHI Redaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING CHAPTER NAVIGATION TEASERS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/about"
            className="specular-card p-8 rounded-xl group transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">01 // CHRONICLE</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">About & Leadership</h3>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              Engineering philosophy, academic achievements at NUML, and community leadership at Devsinc, IEEE, and GDG.
            </p>
          </Link>

          <Link
            href="/skills"
            className="specular-card p-8 rounded-xl group transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">02 // MATRIX</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">Technical Skills</h3>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              Categorized matrix spanning Languages, Distributed Systems, Frontend Engineering, and Verified Credentials.
            </p>
          </Link>

          <Link
            href="/contact"
            className="specular-card p-8 rounded-xl group transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">03 // DISPATCH</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">Direct Contact</h3>
            <p className="text-xs text-slate-400 font-mono leading-relaxed">
              1-click clipboard copy for email and phone, verified social profiles, and instant mailto launch.
            </p>
          </Link>
        </div>
      </section>

      {/* 6. HIRING MANAGER DIRECT DISPATCH CALLOUT */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="border border-white/[0.12] bg-[#0D1017] p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 block mb-2">
              SEEKING ENGINEERING TALENT?
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold font-display text-white mb-2">
              Let&apos;s Build Resilient Systems.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-xl">
              Available for software engineering roles, high-concurrency architecture consulting, and technical leadership opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-md bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-slate-200 transition-colors"
            >
              Initialize Dispatch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-md border border-white/[0.12] hover:border-white/[0.24] text-white font-mono text-xs uppercase tracking-wider font-medium hover:bg-white/[0.04] transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
