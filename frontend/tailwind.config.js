/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm charcoal surfaces
        ink: {
          DEFAULT: "#0b0b0c",
          950: "#070708",
          900: "#0b0b0c",
          850: "#111113",
          800: "#161618",
          700: "#1f1f22",
          600: "#2c2c30",
        },
        // Warm white
        paper: {
          DEFAULT: "#efebe4",
          50: "#faf8f4",
          100: "#efebe4",
          200: "#e2ddd3",
          300: "#cdc6b9",
        },
        // Neutral text tones
        fog: {
          DEFAULT: "#a3a19c",
          100: "#ecebe8",
          200: "#c9c7c2",
          300: "#a3a19c",
          400: "#7d7b77",
          500: "#5b5a57",
        },
        // Single strong accent: cobalt, from the DNR logo
        brand: {
          DEFAULT: "#2f4bff",
          light: "#8091ff",
          deep: "#1f33d6",
          violet: "#8091ff",
          cyan: "#8091ff",
        },
        // Vertical signal colours
        signal: {
          learn: "#7aa2ff",
          work: "#4fd1a5",
          product: "#d9b35b",
          studio: "#ff7a59",
          ai: "#b48cff",
        },
        // Legacy tokens kept so any untouched markup still resolves
        brass: {
          DEFAULT: "#d9b35b",
          light: "#ecd398",
          deep: "#a8833a",
        },
        charcoal: {
          950: "#121316",
          900: "#16181b",
          850: "#1e1f22",
          800: "#1e2023",
          700: "#282b30",
          600: "#353940",
          500: "#47484c",
          400: "#4c4e51",
          300: "#6d737d",
          200: "#9ea5b0",
          100: "#e2e5e9",
        },
        accent: {
          gold: "#d9b35b",
          goldLight: "#ecd398",
          blue: "#2f4bff",
          cyan: "#38bdf8",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ['"Bricolage Grotesque"', "Geist", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid display scale
        "display-3xl": ["clamp(4rem, 17vw, 19rem)", { lineHeight: "0.8", letterSpacing: "-0.06em" }],
        "display-2xl": ["clamp(3rem, 8.4vw, 9rem)", { lineHeight: "0.88", letterSpacing: "-0.055em" }],
        "display-xl": ["clamp(2.6rem, 6.2vw, 6.5rem)", { lineHeight: "0.92", letterSpacing: "-0.05em" }],
        "display-lg": ["clamp(2.2rem, 4.6vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.045em" }],
        "display-md": ["clamp(1.875rem, 3.2vw, 3rem)", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        "display-sm": ["clamp(1.5rem, 2.2vw, 2rem)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        lead: ["clamp(1.0625rem, 1.3vw, 1.25rem)", { lineHeight: "1.55", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "clamp(6rem, 11vw, 10rem)",
      },
      maxWidth: {
        site: "1600px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};
