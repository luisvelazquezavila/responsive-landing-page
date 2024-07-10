/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'vietnam': 'Be Vietnam Pro, sans-serif'
      },
      colors: {
        'primary-color': 'hsl(12, 88%, 59%)',
        'secondary-color': 'hsl(228, 39%, 23%)',
        'bg-card-color': 'rgba(36, 45, 82, .5)',
        'tertiary-color': 'hsl(13, 100%, 96%)',
        'quaternary-color': 'hsl(0, 0%, 98%)',
        'text-color': 'hsl(227, 12%, 61%)'
      },
      backgroundImage: {
        'close-menu': "url('../assets/icon-close.svg')",
        'open-menu': "url('../assets/icon-hamburger.svg')"
      }
    },
  },
  plugins: [],
}