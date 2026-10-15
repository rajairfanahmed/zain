"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight, Github, Linkedin, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquiryType, setInquiryType] = useState("Full-Time Role");

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

  const mailtoSubject = encodeURIComponent(`[${inquiryType}] Engineering Opportunity for Muhammad Zain`);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      {/* 1. HEADER SECTION */}
      <div className="border-b border-white/[0.08] pb-12 mb-12">
        <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-3">
          04 // DIRECT DISPATCH
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-white tracking-tight leading-[1.05] mb-6">
          Contact & <br />
          <span className="text-slate-400">Communication Hub.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
          Direct communication channels for engineering hiring managers, technical leads, and collaborators. Immediate 1-click clipboard triggers and verified profiles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* LEFT: 1-CLICK CLIPBOARD CARDS & INQUIRY GENERATOR */}
        <div className="lg:col-span-7 space-y-6">
          {/* EMAIL CARD */}
          <div className="specular-card p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider block">
                  Verified Direct Email
                </span>
                <span className="text-base sm:text-lg font-mono text-white font-medium select-all">
                  {email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/[0.2] text-white transition-all"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}?subject=${mailtoSubject}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-white text-black font-semibold hover:bg-slate-200 transition-all shadow-md"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* PHONE CARD */}
          <div className="specular-card p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/[0.2] text-white transition-all"
              aria-label="Copy telephone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* TARGETED INQUIRY GENERATOR */}
          <div className="specular-card p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Targeted Inquiry Launcher</span>
            </div>
            <p className="text-xs text-slate-400 font-mono mb-6 leading-relaxed">
              Select your inquiry objective to pre-format your default mail client with structured recruitment subject headers:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
              {["Full-Time Role", "Contract Build", "Campus Talk"].map((type) => (
                <button
                  key={type}
                  onClick={() => setInquiryType(type)}
                  className={`py-2 px-3 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                    inquiryType === type
                      ? "bg-amber-400 text-black font-bold shadow-md"
                      : "bg-[#07080B] text-slate-400 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <a
              href={`mailto:${email}?subject=${mailtoSubject}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-slate-200 transition-colors shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Launch Pre-Formatted Email ({inquiryType})</span>
            </a>
          </div>
        </div>

        {/* RIGHT: OFFICIAL PROFILES & AVAILABILITY TELEMETRY */}
        <div className="lg:col-span-5 space-y-6">
          {/* AVAILABILITY TELEMETRY */}
          <div className="specular-card p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Availability
              </span>
              <span className="text-xs font-mono text-slate-500">2026 CYCLE</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-slate-500 block text-[11px]">Primary Location</span>
                <span className="text-white font-semibold">Islamabad, Pakistan (UTC+5)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Work Eligibility</span>
                <span className="text-white font-semibold">On-site (Islamabad/Rawalpindi) & Global Remote</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Role Types</span>
                <span className="text-white font-semibold">Software Engineer, Distributed Systems, Full-Stack</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Notice Period / Start Date</span>
                <span className="text-emerald-400 font-semibold">Immediate / Flexible</span>
              </div>
            </div>
          </div>

          {/* OFFICIAL PROFILES */}
          <div className="specular-card p-6 sm:p-8 rounded-2xl">
            <h3 className="font-display font-bold text-white text-lg mb-4">
              Verified Developer Profiles
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6 leading-relaxed">
              Inspect open-source code repositories, 200+ LeetCode algorithmic solutions, and professional career network endorsements.
            </p>

            <div className="space-y-3">
              <a
                href="https://github.com/Zain308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#07080B] hover:bg-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  <div>
                    <span className="text-sm font-mono text-white block">GitHub Profile</span>
                    <span className="text-[11px] font-mono text-slate-500">github.com/Zain308</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
              </a>

              <a
                href="https://linkedin.com/in/zain308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-[#07080B] hover:bg-white/[0.04] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  <div>
                    <span className="text-sm font-mono text-white block">LinkedIn Profile</span>
                    <span className="text-[11px] font-mono text-slate-500">linkedin.com/in/zain308</span>
                  </div>
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
