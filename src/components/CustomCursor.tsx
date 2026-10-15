"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const lerpPos = useRef({ x: -100, y: -100 });
  const spotlightPos = useRef({ x: -500, y: -500 });
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text.toUpperCase());
        setIsHovered(true);
      } else {
        const interactive = target?.closest("a, button, [role='button'], input, textarea");
        if (interactive) {
          setCursorText("");
          setIsHovered(true);
        } else {
          setCursorText("");
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      lerpPos.current.x += (mousePos.current.x - lerpPos.current.x) * 0.18;
      lerpPos.current.y += (mousePos.current.y - lerpPos.current.y) * 0.18;

      spotlightPos.current.x += (mousePos.current.x - spotlightPos.current.x) * 0.08;
      spotlightPos.current.y += (mousePos.current.y - spotlightPos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${lerpPos.current.x}px, ${lerpPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${spotlightPos.current.x}px, ${spotlightPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <>
      {/* Ambient Mouse-Following Radial Spotlight */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-30 blur-[130px] bg-gradient-radial from-cyan-500/15 via-indigo-500/08 to-transparent transition-opacity duration-500"
        style={{ willChange: "transform" }}
      />

      {/* Primary Precision Micro-Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovered && cursorText ? "scale-0" : "scale-100"}`}
        style={{ willChange: "transform" }}
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]" />
      </div>

      {/* Smooth Lerp Trailing Halo & Contextual Badge */}
      <div
        ref={haloRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99] flex items-center justify-center transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorText
            ? "w-20 h-20 rounded-full bg-surface-950/85 backdrop-blur-md border border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.35)] scale-100"
            : isHovered
            ? "w-12 h-12 rounded-full bg-white/10 border border-cyan-400/50 scale-100"
            : "w-8 h-8 rounded-full border border-white/20 scale-100"
        }`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase animate-in fade-in duration-150">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
