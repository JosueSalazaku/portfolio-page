/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "gray-lightmode": "#646464",  // Light mode gray (previously whitmodeGray)
      "gray-darkmode": "#b3b1b1",   // Dark mode gray (previously darkmodeGray)
      "gray-dark": "#191919",       // Darker gray (close to black)
      "gray-medium": "#2C2C2C",     // Medium gray
      "gray-lightest": "#F9F9F9",
      "gray-light": "#F0F0F0",
      "white": "#FFFFFF",
      "black": "#111111",
    }
  },
  plugins: [],
};
