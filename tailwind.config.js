/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mood: {
          happy: "#facc15", // jaune
          sad: "#60a5fa", // bleu
          angry: "#f87171", // rouge
          stressed: "#a855f7", // violet
          relaxed: "#34d399", // vert
          neutral: "#d1d5db", // gris clair
        },
        background: {
          light: "#ffffff",
          dark: "#1e1e1e",
        },
      },
      fontFamily: {
        title: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
