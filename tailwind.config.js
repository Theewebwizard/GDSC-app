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
        'above-md': {'min': '1000px', 'max': '1200px'},
        'fort':{'min':'1440px'},
        'smallest': { 'min': '320px', 'max': '374px'},
        'latest':{'min': '1480px'},
        'largelatest':{'min': '1551px'},
        'phonelatest':{'min': '1551px'},
        'height-800-851': {'raw': '(min-height: 800px) and (max-height: 858px)'},
      },
    },
  },
  plugins: [],
}