const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'min': '1279px'},
      'xl': {'min': '1023px'},
      'lg': {'min': '767px'},
      'md': {'min': '639px'}
    },
    fontFamily: {
      sans: ['Montserrat']
    },
    colors: {
      ...colors,
      mainBlack: "#141414",
      secondaryBlack: "#0B0B0B",
      gold: "#FFD260",
      pink: "#FF395D",
      mainBlue: "#44BCFF",
      lightBlue: "#A4E7FF",
    },
    extend: {
      borderWidth: {
        '1px': '1px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
