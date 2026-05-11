import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f9fb",
        surface: "#ffffff",
        ink: "#0f172a",
        muted: "#475569",
        line: "#dbe5f0",
        navy: "#12324a",
        teal: "#0f766e",
        soft: "#e8f2f4",
        sand: "#f3f6f8",
        projected: "#d97706",
      },
      boxShadow: {
        panel: "0 18px 45px rgba(15, 23, 42, 0.08)",
        soft: "0 10px 30px rgba(15, 23, 42, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        proseplus: "72ch",
      },
      gridTemplateColumns: {
        hero: "minmax(0,1.15fr) minmax(320px,0.85fr)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(18, 50, 74, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(18, 50, 74, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
