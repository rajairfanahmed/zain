import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code, Cpu, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      {/* HERO STAGE HEADER */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 border-b border-white/[0.08] pb-16">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Software Engineering Roles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.05] mb-8">
            Scalable Systems & <br />
            <span className="text-slate-400">Algorithmic Engineering</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
            Software Engineer & Devsinc Campus Ambassador. Architecting high-concurrency distributed workflows, healthcare super-marketplaces, and competitive algorithmic problem-solving.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-slate-200 transition-colors shadow-lg"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/[0.12] hover:border-white/[0.24] text-white font-mono text-xs uppercase tracking-wider font-medium hover:bg-white/[0.04] transition-colors"
            >
              <span>Initialize Dispatch</span>
            </Link>
          </div>
        </div>

        {/* ASYMMETRIC PORTRAIT FRAME */}
        <div className="w-full sm:w-80 lg:w-96 flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0D1017] p-2 shadow-2xl group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500">
              <Image
                src="/images/zain.jpg"
                alt="Muhammad Zain-Ul-Abideen"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-4 flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-white font-semibold block">Muhammad Zain</span>
                <span className="text-slate-500 text-[11px]">Devsinc Campus Ambassador</span>
              </div>
              <span className="text-amber-400 text-lg">✦</span>
            </div>
          </div>
        </div>
      </div>

      {/* THREE PILLARS OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0D1017]/50">
          <Cpu className="w-6 h-6 text-amber-400 mb-4" />
          <h3 className="font-display font-semibold text-white text-lg mb-2">Distributed Systems</h3>
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            High-concurrency database modeling (200+ relational tables), Supabase RLS, Redis in-memory pub/sub, and Stripe Connect fintech flows.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0D1017]/50">
          <Code className="w-6 h-6 text-emerald-400 mb-4" />
          <h3 className="font-display font-semibold text-white text-lg mb-2">Algorithmic Mastery</h3>
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            200+ verified LeetCode & competitive programming solutions across dynamic programming, graph theory, and modern C++/Python optimization.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0D1017]/50">
          <ShieldCheck className="w-6 h-6 text-blue-400 mb-4" />
          <h3 className="font-display font-semibold text-white text-lg mb-2">Technical Leadership</h3>
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            Devsinc Campus Ambassador, IEEE NUML Internal PR Lead, and GDG On Campus Event Member spearheading university engineering initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}
