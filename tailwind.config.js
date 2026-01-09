/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        graffiti: ["'Permanent Marker'", "cursive"],
        street: ["'Rock Salt'", "cursive"],
        professional: ["'Outfit'", "sans-serif"],
        sans: ["'Outfit'", "sans-serif"],
      },
      colors: {
        "theme-black": "#0a0a0a",
        "theme-dark-gray": "#1a1a1a",
        "theme-gray": "#2a2a2a",
        "theme-light-gray": "#8a8a8a",
        "theme-white": "#f0f0f0",
      },
    },
  },
  plugins: [],
}