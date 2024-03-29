const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nanum: ['"Nanum Gothic"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
