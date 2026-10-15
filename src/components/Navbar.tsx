"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080B]/90 backdrop-blur-md border-b border-white/[0.08] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* ZONE 1: LOGO ON LEFT */}
          <div className="flex-1 flex items-center justify-start">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
            >
              <span className="font-display tracking-tight text-xl">zain</span>
              <span className="text-amber-400 text-sm transition-transform duration-300 group-hover:rotate-45">
                ✦
              </span>
            </Link>
          </div>

          {/* ZONE 2: NAV LINKS IN CENTER */}
          <nav className="hidden md:flex items-center justify-center gap-1 bg-[#0D1017]/80 border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-sm shadow-specular">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs uppercase tracking-widest font-mono transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-white font-semibold bg-white/[0.1] shadow-inner"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3: RESUME BUTTON ON RIGHT */}
          <div className="flex-1 flex items-center justify-end gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase font-mono tracking-wider font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/[0.24] rounded-md transition-all duration-200 shadow-sm hover:shadow-specular"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-md border border-white/[0.08] bg-[#0D1017]/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU ACCORDION */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 bg-[#0D1017]/95 border border-white/[0.1] rounded-xl backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider transition-colors ${
                    isActive
                      ? "text-white bg-white/[0.1] font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-white/[0.08] mt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs uppercase font-mono tracking-wider font-semibold text-white bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
