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
          black:  "#0A0A0A",
          white:  "#F5F5F5",
          gold:   "#C9A84C",
          "gold-light": "#E8C97A",
          "gold-dark":  "#A07830",
          gray:   "#1A1A1A",
          "gray-mid": "#2A2A2A",
          "gray-light": "#6B7280",
          accent: "#FF6B35",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
