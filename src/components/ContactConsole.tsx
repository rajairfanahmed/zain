"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { profileData } from "@/data/profile";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Linkedin,
  Github,
  Code2,
  ArrowUpRight,
  FileDown,
  Clock,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactConsole() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("submitting");

    const mailtoSubject = encodeURIComponent(
      formState.subject || `Engineering Inquiry from ${formState.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    setTimeout(() => {
      setStatus("sent");
      window.location.href = `mailto:${siteConfig.author.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Col 1: Direct Verification & Action Hub (Span 5) */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* Availability & Live Timezone HUD */}
        <div className="p-6 sm:p-8 rounded-3xl neural-card border-cyan-500/30 shadow-[0_10px_35px_-10px_rgba(6,182,212,0.15)] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Available for Roles
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/5">
              Full-Stack & AI
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            Actively considering full-time Software Engineering positions, distributed systems design, enterprise AI integrations, and technical leadership roles.
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-xs font-mono text-zinc-400">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Islamabad, Pakistan</span>
              </span>
              <span className="text-zinc-500">PKT (UTC+5)</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Local Time</span>
              </span>
              <span className="text-cyan-300 font-bold">
                {currentTime || "11:00 AM"}
              </span>
            </div>
          </div>
        </div>

        {/* 1-Click Direct Copy Actions */}
        <div className="flex flex-col gap-3">
          {/* Email Card with 1-click copy */}
          <div className="p-4 sm:p-5 rounded-2xl neural-card flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                  Direct Email
                </span>
                <span className="text-xs sm:text-sm font-mono text-white truncate">
                  {siteConfig.author.email}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard(siteConfig.author.email, "email")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-300 border border-white/10 transition-colors shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-cyan-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card with 1-click copy */}
          <div className="p-4 sm:p-5 rounded-2xl neural-card flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                  Direct Phone / WhatsApp
                </span>
                <span className="text-xs sm:text-sm font-mono text-white truncate">
                  {siteConfig.author.phone}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard(siteConfig.author.phone, "phone")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-300 border border-white/10 transition-colors shrink-0"
              title="Copy phone number to clipboard"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-cyan-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Verified Social Channels */}
        <div className="grid grid-cols-3 gap-3">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl neural-card flex flex-col items-center justify-center gap-2 text-center group hover:border-cyan-500/40 transition-all"
          >
            <Linkedin className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono text-zinc-300">LinkedIn</span>
          </a>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl neural-card flex flex-col items-center justify-center gap-2 text-center group hover:border-cyan-500/40 transition-all"
          >
            <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono text-zinc-300">GitHub</span>
          </a>

          <a
            href={siteConfig.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl neural-card flex flex-col items-center justify-center gap-2 text-center group hover:border-cyan-500/40 transition-all"
          >
            <Code2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono text-zinc-300">LeetCode</span>
          </a>
        </div>
      </div>

      {/* Col 2: Interactive Inbound Transmission Console (Span 7) */}
      <div className="lg:col-span-7">
        <div className="p-6 sm:p-10 rounded-3xl neural-card">
          <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                Direct Dispatch // Mail Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
                Send Direct Message
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Direct to Inbox
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-zinc-400">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface-void/80 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-zinc-400">
                  Your Official Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface-void/80 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-zinc-400">
                Subject
              </label>
              <input
                type="text"
                placeholder="Software Engineering Position / Architecture Collaboration"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-surface-void/80 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-zinc-400">
                Message Content
              </label>
              <textarea
                required
                rows={5}
                placeholder="Detail role requirements, technical scope, or collaboration inquiry..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-surface-void/80 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-surface-void font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span>Launching Mail Client...</span>
              ) : status === "sent" ? (
                <>
                  <Check className="w-4 h-4 text-surface-void" />
                  <span>Dispatching to Client...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
