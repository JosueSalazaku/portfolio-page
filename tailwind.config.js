/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Overused Grotesk"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
        serif: ['Georgia', 'Times', 'serif'],
        mono: ['Menlo', 'Courier', 'monospace'],
      },
      fontWeight: {
        sans: 'bold',
      },
    },
  },
  plugins: [],
}

