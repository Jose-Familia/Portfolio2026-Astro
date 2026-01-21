/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // Soporte para modo oscuro
  theme: {
    extend: {
      // Paleta de colores minimalista
      colors: {
        // Colores principales
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        // Escala de grises personalizada
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          150: "#ededed",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          850: "#1f1f1f",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      // Tipografía
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      // Espaciado consistente
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      // Tamaños de fuente
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "2.25rem", letterSpacing: "-0.02em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "7xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      // Animaciones
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "blur-in": "blurIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        blurIn: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
      },
      // Transiciones
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
      },
      // Bordes redondeados
      borderRadius: {
        "4xl": "2rem",
      },
      // Box shadow personalizado
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 10px 40px -15px rgba(0, 0, 0, 0.1)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
