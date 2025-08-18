/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",   // tells Tailwind to scan all React files
    ],
    theme: {
      extend: {
        fontFamily: {
          fira: ['"Fira Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };  