/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'], // Explicitly adding Roboto here
        sans: ['"Overused Grotesk"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Roboto"', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
        serif: ['Georgia', 'Times', 'serif'],
        mono: ['Menlo', 'Courier', 'monospace'],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
      fontStyle: {
        normal: 'normal',
        italic: 'italic',
      },
    },
  },
  plugins: [],
};
