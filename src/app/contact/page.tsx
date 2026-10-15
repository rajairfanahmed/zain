"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "mr.zain903@gmail.com";
  const phone = "03344770224";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      <div className="border-b border-white/[0.08] pb-12 mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-3">
          04 // Direct Dispatch
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          Contact & Dispatch
        </h1>
        <p className="text-slate-400 font-mono text-xs mt-3 max-w-xl">
          Direct communication channels for engineering hiring managers, recruiters, and collaborators.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          {/* EMAIL CARD */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D1017] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider block">
                  Direct Email
                </span>
                <span className="text-base sm:text-lg font-mono text-white font-medium select-all">
                  {email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}?subject=Software%20Engineering%20Opportunity`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider bg-white text-black font-semibold hover:bg-slate-200 transition-all"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* PHONE CARD */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D1017] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider block">
                  Direct Telephone
                </span>
                <span className="text-base sm:text-lg font-mono text-white font-medium select-all">
                  {phone}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyPhone}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white transition-all"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* SOCIAL CHANNELS */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D1017]">
            <h3 className="font-display font-bold text-white text-lg mb-4">
              Official Profiles
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6 leading-relaxed">
              Explore open source contributions, algorithmic repositories, and professional networking endorsements.
            </p>

            <div className="space-y-3">
              <a
                href="https://github.com/Zain308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  <span className="text-sm font-mono text-white">github.com/Zain308</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
              </a>

              <a
                href="https://linkedin.com/in/zain308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  <span className="text-sm font-mono text-white">linkedin.com/in/zain308</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
