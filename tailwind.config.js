/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: `1440px`,
      },
      colors: {
        white: `#F2F9F1`,
        pureWhite: `#FFFFFF`,
        darkGreen: `388E3C`,
        lightGreen: `#8BC34A`,
        offWhite: `#DDEEDF`,
        darkGray: `#212529`,
        black: `#181818`,
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      container: {
        padding: '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

