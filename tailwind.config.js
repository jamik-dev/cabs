/** @type {import('tailwindcss').Config} */

export default {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#EB5757',
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fccccc',
          300: '#f9a8a8',
          400: '#f47575',
          500: '#eb5757',
          600: '#d62c2c',
          700: '#b42121',
          800: '#951f1f',
          900: '#7c2020',
          950: '#430c0c'
        },
        black: {
          DEFAULT: '#020105'
        },
        grey: {
          0: '#5D5D5F',
          1: '#F5F5F7',
          2: '#C2C2C3',
          3: '#9A999B',
          4: '#EBEBEB'
        },
      }
    },
    fontFamily: {
      inherit: 'inherit',
      roboto: ["Roboto Flex", 'sans-serif'],
      golos: ["Golos Text", 'sans-serif'],
    }
  },
  plugins: []
};
