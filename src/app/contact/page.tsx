import React from "react";
import type { Metadata } from "next";
import ContactConsole from "@/components/ContactConsole";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact | Direct Engineering Gateway",
  description:
    "Direct contact terminal for Muhammad Zain-Ul-Abideen: Email mr.zain903@gmail.com, Mobile 03344770224, LinkedIn, GitHub, and LeetCode profiles. Available for software engineering positions.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact | Muhammad Zain-Ul-Abideen",
    description:
      "Direct engineering contact for Muhammad Zain-Ul-Abideen: Email, Phone, LinkedIn, GitHub, and verified profiles.",
    images: [siteConfig.ogImage],
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 flex flex-col gap-10 relative overflow-hidden">
      {/* Background Subtle Synaptic Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[700px] h-[450px] bg-gradient-to-bl from-cyan-500/10 via-indigo-500/05 to-transparent blur-[140px] rounded-full pointer-events-none z-0"
      />

      <section className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Direct Gateway // Connect</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display leading-[1.08] mb-3">
          Initiate Direct <span className="text-gradient-neural">Engineering Contact</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
          Reach out for Software Engineering positions, full-stack architectures, enterprise AI workflows, or university speaking and campus ambassador engagements.
        </p>
      </section>

      <div className="relative z-10">
        <ContactConsole />
      </div>
    </div>
  );
}
