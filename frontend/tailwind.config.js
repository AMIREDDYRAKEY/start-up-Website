/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#121316',
          900: '#16181b',
          850: '#1e1f22', // Swatch base
          800: '#1e2023', // Swatch dark
          700: '#282b30',
          600: '#353940',
          500: '#47484c', // Swatch mid
          400: '#4c4e51', // Swatch light
          300: '#6d737d',
          200: '#9ea5b0',
          100: '#e2e5e9',
        },
        accent: {
          gold: '#d4af37',
          goldLight: '#f3e5ab',
          blue: '#3b82f6',
          cyan: '#38bdf8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'charcoal': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'glow-gold': '0 0 30px -5px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
};
