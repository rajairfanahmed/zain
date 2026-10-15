import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07080B",
        foreground: "#F8FAFC",
        obsidian: {
          950: "#040507",
          900: "#07080B",
          800: "#0D1017",
          700: "#141824",
          600: "#1F2436",
        },
        specular: {
          border: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.16)",
          highlight: "rgba(255, 255, 255, 0.25)",
        },
        accent: {
          emerald: "#10B981",
          amber: "#F59E0B",
          blue: "#3B82F6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.15em",
      },
      boxShadow: {
        specular: "0 0 0 1px rgba(255, 255, 255, 0.08), 0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        "specular-hover": "0 0 0 1px rgba(255, 255, 255, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};

export default config;
