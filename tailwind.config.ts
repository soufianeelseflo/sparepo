import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1200px" }
      },
      colors: {
        brand: {
          50: "#f6f9fc",
          100: "#e9f2f6",
          200: "#cfe1eb",
          300: "#a7c7d9",
          400: "#6aa4c0",
          500: "#2a7ea6",
          600: "#1e6487",
          700: "#184f6b",
          800: "#133d54",
          900: "#0f3043"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(42,126,166,0.6)" },
          "50%": { boxShadow: "0 0 24px 2px rgba(42,126,166,0.75)" }
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        "slide-up": "slideUp .2s ease-out forwards"
      }
    }
  },
  plugins: []
} satisfies Config;
