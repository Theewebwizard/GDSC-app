/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
         // Custom sans-serif font
      },
      screens: {
        'below-md': { 'max': '767px' }, // Custom breakpoint for <768px
      },
    },
  },
  plugins: [],
}