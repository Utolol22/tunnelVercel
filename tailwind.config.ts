import type { Config } from "tailwindcss"
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "rouge-liberation": "#C41E3A",
        "rouge-sombre": "#8A1428",
        "rouge-tres-sombre": "#4A0A15",
        "noir-profond": "#121212",
        "noir-rougeatre": "#1A0000",
        "blanc-purete": "#FFFFFF",
        "sable-introspection": "#F5E6D3",
        "gris-sagesse": "#4A4A4A",
        "yellow-400": "#FACC15",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #000000, #1A0000)",
        "section-transition-dark": "linear-gradient(to bottom, #121212, #0A0000)",
        "section-transition-light": "linear-gradient(to bottom, #F5E6D3, #FFFFFF)",
        "section-transition-mixed": "linear-gradient(to bottom, #121212, #F5E6D3)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInLeft: "slideInLeft 1s ease-in-out",
        fadeScale: "fadeScale 1.5s ease-in-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glitch-1": "glitch1 2.5s infinite",
        "glitch-2": "glitch2 2.5s infinite",
        "zero-pulse": "zeroPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeScale: {
          "0%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0.9" },
        },
        glitch1: {
          "0%, 100%": { transform: "none" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        glitch2: {
          "0%, 100%": { transform: "none" },
          "25%": { transform: "translate(2px, 0)" },
          "50%": { transform: "translate(-2px, 1px)" },
          "75%": { transform: "translate(0, -1px)" },
        },
        zeroPulse: {
          "0%": { opacity: "0.6", transform: "scale(1)", filter: "blur(2px)" },
          "50%": { opacity: "0.8", transform: "scale(1.03)", filter: "blur(3px)" },
          "100%": { opacity: "0.6", transform: "scale(1)", filter: "blur(2px)" },
        },
      },
      boxShadow: {
        "section-transition": "0 -20px 30px -10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
