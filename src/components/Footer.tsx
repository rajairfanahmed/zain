import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#040507] text-slate-400 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-1.5 text-xl font-bold text-white mb-2">
            <span>zain</span>
            <span className="text-amber-400">✦</span>
          </Link>
          <p className="text-xs font-mono text-slate-500 max-w-sm">
            Muhammad Zain-Ul-Abideen • Software Engineer & Devsinc Campus Ambassador. Distributed systems, algorithms, and AI care architectures.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs uppercase font-mono tracking-wider">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Zain308"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-colors bg-[#0D1017]"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/zain308"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-colors bg-[#0D1017]"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            className="p-2.5 rounded-lg border border-white/[0.08] hover:border-white/[0.2] hover:text-white transition-colors bg-[#0D1017]"
            aria-label="Direct Contact"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-4">
        <span>© {new Date().getFullYear()} Muhammad Zain-Ul-Abideen. All rights reserved.</span>
        <span>Awwwards Obsidian Architecture • Next.js App Router</span>
      </div>
    </footer>
  );
}
