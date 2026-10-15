"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
      active: false,
    };

    // Calculate node density based on viewport
    const isMobile = width < 768;
    const nodeCount = isMobile ? 38 : 78;
    const maxDistance = isMobile ? 110 : 150;

    const nodes: Node[] = [];
    const pulses: Pulse[] = [];

    const colors = [
      "rgba(6, 182, 212,",   // Cyan
      "rgba(99, 102, 241,",  // Indigo
      "rgba(139, 92, 246,",  // Violet
      "rgba(56, 189, 248,",  // Sky
    ];

    for (let i = 0; i < nodeCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 1.2,
        color,
        baseAlpha: Math.random() * 0.4 + 0.35,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const spawnPulse = (from: number, to: number) => {
      if (pulses.length > 20) return;
      pulses.push({
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: Math.random() * 0.015 + 0.008,
        color: Math.random() > 0.5 ? "rgba(6, 182, 212, 0.9)" : "rgba(168, 85, 247, 0.9)",
      });
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    let lastPulseTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Periodically trigger a synaptic pulse along connected nodes
      if (time - lastPulseTime > 500 && Math.random() > 0.3) {
        lastPulseTime = time;
        const i = Math.floor(Math.random() * nodes.length);
        for (let j = 0; j < nodes.length; j++) {
          if (i !== j) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < maxDistance) {
              spawnPulse(i, j);
              break;
            }
          }
        }
      }

      // Draw Connections (Synapses)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Mouse connection influence
        if (mouse.active) {
          const dx = mouse.x - nodes[i].x;
          const dy = mouse.y - nodes[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.45;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Gentle gravity toward cursor
            if (!prefersReducedMotion) {
              nodes[i].x += (dx / dist) * 0.3;
              nodes[i].y += (dy / dist) * 0.3;
            }
          }
        }
      }

      // Draw Active Synaptic Action Potentials (Pulses)
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const n1 = nodes[pulse.fromNode];
        const n2 = nodes[pulse.toNode];
        if (n1 && n2) {
          const px = n1.x + (n2.x - n1.x) * pulse.progress;
          const py = n1.y + (n2.y - n1.y) * pulse.progress;

          ctx.fillStyle = pulse.color;
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();

          // Subtle glow
          ctx.fillStyle = "rgba(6, 182, 212, 0.25)";
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Nodes (Neurons)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Wrap edges smoothly
          if (node.x < -10) node.x = width + 10;
          if (node.x > width + 10) node.x = -10;
          if (node.y < -10) node.y = height + 10;
          if (node.y > height + 10) node.y = -10;

          node.pulsePhase += node.pulseSpeed;
        }

        const pulseScale = 1 + Math.sin(node.pulsePhase) * 0.25;
        const currentAlpha = node.baseAlpha + Math.sin(node.pulsePhase) * 0.15;

        // Core neuron dot
        ctx.fillStyle = `${node.color} ${Math.min(1, Math.max(0, currentAlpha))})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2);
        ctx.fill();

        // Subtle soft halo on select nodes
        if (i % 3 === 0) {
          ctx.fillStyle = `${node.color} 0.08)`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    // Pause animation when tab is inactive to preserve battery and CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
