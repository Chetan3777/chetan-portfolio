/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm cream / parchment background system
        cream: {
          50: "#FBF8F2",
          100: "#F5F0E6",
          200: "#EDE6D6",
          300: "#E2D9C4",
        },
        // Dark contrast surface for inverted sections
        ink: {
          950: "#0A0A0C",
          900: "#101013",
          800: "#1A1A20",
          700: "#26262E",
          600: "#3A3A45",
        },
        // Accent — refined warm orange (professional, not playful)
        brand: {
          50: "#FFF1E6",
          100: "#FFE0CB",
          200: "#FFC299",
          300: "#FFA266",
          400: "#FF8533",
          500: "#F26A1F", // primary
          600: "#D45516",
          700: "#A8420F",
          DEFAULT: "#F26A1F",
        },
        // Text
        fg: {
          DEFAULT: "#0F0F12",
          muted: "#5C5C66",
          dim: "#8A8A92",
          inverse: "#F5F0E6",
          "inverse-muted": "#9A9AA3",
        },
        line: "rgba(15, 15, 18, 0.10)",
        "line-dark": "rgba(245, 240, 230, 0.10)",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,15,18,0.04), 0 8px 24px -12px rgba(15,15,18,0.08)",
        "soft-lg":
          "0 4px 12px -2px rgba(15,15,18,0.06), 0 24px 48px -16px rgba(15,15,18,0.12)",
        "brand-glow":
          "0 6px 20px -6px rgba(242, 106, 31, 0.45), 0 2px 6px -2px rgba(242, 106, 31, 0.25)",
        pill: "0 8px 24px -8px rgba(10, 10, 12, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "float-slow-rev": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(6px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "blink": "blink 1s steps(1) infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "float-slow-rev": "float-slow-rev 5s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
