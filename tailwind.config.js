/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {

    },
    extend: {
      colors: {
        primery: '#1DD100',
        'primery-40': '#1DD10066',
        'primery-10': '#1DD1001A',
        't-primery': '#030712',
        't-secondary': '#03071299',
      }
    }
  },
  plugins: [],
}