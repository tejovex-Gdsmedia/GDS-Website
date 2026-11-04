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
          // Primary — blue, used across nav, links, borders, accents.
          // Darkened from #008DBB to pass WCAG AA (4.5:1) for small/normal
          // text on the brand-bg background; #008DBB only passed for large
          // text (~3.7:1 vs the 4.5:1 normal-text requirement).
          blue:        "#0076A3",
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
      // Single source of truth for the site's soft/curved shape language.
      // Overriding the DEFAULT borderRadius scale (not adding new keys)
      // means every existing rounded-sm/md/lg/xl/2xl/full class site-wide
      // picks these up automatically.
      borderRadius: {
        none: "0",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-lg)",
        "2xl": "var(--radius-lg)",
        "3xl": "var(--radius-lg)",
        full: "var(--radius-pill)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        "soft-sm": "var(--shadow-soft-sm)",
        "soft-lg": "var(--shadow-soft-lg)",
      },
    },
  },
  plugins: [],
};
