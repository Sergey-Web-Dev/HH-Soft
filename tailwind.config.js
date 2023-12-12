/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      spacing: {
        85: "85%",
      },
    },
  },
  plugins: [],
};
