/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: '6rem',
    },
    extend: {
      colors: {
        'eggshell': '#F2F9F1',
        'dark-green': '#388E3C',
        'light-green': '#8BC34A',
        'green-white': '#DDEEDF',
        'dark-shade': '#212529',
      }
    },
  },
  plugins: [],
}
