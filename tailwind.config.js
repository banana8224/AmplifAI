
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0F1A",
        surface: "#151730",
        "surface-2": "#1E1635",
        "surface-3": "#241B44",
        primary: {
          DEFAULT: "#9B5DFF",
          soft: "#BFA3FF",
        },
        accent: {
          blue: "#38BDF8",
          green: "#34D399",
          gold: "#FACC15",
          magenta: "#D946EF"
        },
        text: {
          DEFAULT: "#EDE9FE",
          muted: "#9CA3AF"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(155,93,255,0.18)",
        'glow-blue': "0 0 40px rgba(56,189,248,0.12)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
