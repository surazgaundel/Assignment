/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:'#fffcfc',
        blue:'#153653',
        red:'#d55866',
        yellow:'#eeb44a',
      }
    },
  },
  plugins: [],
}