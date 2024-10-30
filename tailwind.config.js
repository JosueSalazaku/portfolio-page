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
      "darkmodeGray": "#b3b1b1",
      "whitmodeGray": "#646464",
      "white": "#FFFFFF",
      "black": "#111111",
      "darkGray": "#191919",
      "meduimGray": "#2C2C2C",
    }
  },
  plugins: [],
};

