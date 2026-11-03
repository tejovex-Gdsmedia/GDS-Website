/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Site surfaces
          bg:      "#F5FAFD", // Light Background
          surface: "#FFFFFF", // card / panel background
          white:   "#FFFFFF",
          // Text
          ink:   "#172B4D", // Main Text
          muted: "#64748B", // Secondary Text
          // Primary — blue, used across nav, links, borders, accents
          blue:        "#008DBB",
          "blue-deep":  "#075F91",
          "blue-light": "#56B6D9",
          // CTA — orange, reserved for primary call-to-action buttons
          orange:        "#FF9810",
          "orange-vivid": "#FF5B00",
          // Supporting accents
          green:      "#278A2B",
          lime:       "#A8D51D",
          yellow:     "#FFD21A",
        },
      },
      fontFamily: {
        // Body copy, nav, buttons, labels, cards — Work Sans.
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        // Headings — Playfair Display (see app/layout.tsx / globals.css).
        display: ["var(--font-heading)", "Georgia", "serif"],
        // This brutalist theme uses "font-mono" purely as a styling choice
        // for UI copy (nav/buttons/labels/cards), not for real code — so it
        // follows the body font too, per the typography update.
        mono: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
