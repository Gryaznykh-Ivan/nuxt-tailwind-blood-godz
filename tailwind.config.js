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
    colors: {
      ...colors,
      mainBlack: "#141414",
      gold: "#FFD260",
      pink: "#FF395D"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
