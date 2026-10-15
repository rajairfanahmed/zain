import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: {
          void: "#030712",
          950: "#050814",
          900: "#090e1f",
          850: "#0e152e",
          800: "#141d3e",
          card: "rgba(9, 14, 31, 0.72)",
          glass: "rgba(255, 255, 255, 0.03)",
        },
        neural: {
          cyan: "#06b6d4",
          sky: "#38bdf8",
          indigo: "#6366f1",
          violet: "#8b5cf6",
          purple: "#a855f7",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.14)",
          glow: "rgba(6, 182, 212, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "neural-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.15) 0%, rgba(99, 102, 241, 0.1) 40%, rgba(3, 7, 18, 0) 75%)",
        "radial-synapse":
          "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.18) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 80%)",
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "synapse-glow": "synapseGlow 4s ease-in-out infinite alternate",
        "float": "float 7s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        synapseGlow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 12px rgba(6, 182, 212, 0.3))" },
          "100%": { opacity: "0.85", filter: "drop-shadow(0 0 24px rgba(139, 92, 246, 0.5))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

