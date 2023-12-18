/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      lineHeight: {
        12: "65px",
      },
      spacing: {
        85: "85%",
      },
    },
  },
  plugins: [],
};
