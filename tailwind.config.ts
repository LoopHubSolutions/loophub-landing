import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lh-green": "#00c566",
        "lh-green-hover": "#00d970",
        "lh-lime": "#d4ff00",
        "lh-bg": "#000000",
        "lh-bg2": "#0a0a0a",
        "lh-card": "#111111",
        "lh-border": "rgba(255,255,255,0.08)",
        "lh-dim": "rgba(255,255,255,0.5)",
        "lh-dim2": "rgba(255,255,255,0.3)",
      },
      fontFamily: {
        inter: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "blink": "blink 4s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "count-down": "countDown 8s linear infinite",
        "ring": "ring 1s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,197,102,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,197,102,0.7)" },
        },
        blink: {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.05)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        countDown: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "283" },
        },
        ring: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
