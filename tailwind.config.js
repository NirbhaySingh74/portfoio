/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use 'media' for system preference-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
