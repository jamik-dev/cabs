/** @type {import('tailwindcss').Config} */

export default {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1878F3',
          50: '#eef8ff',
          100: '#daefff',
          200: '#bce3ff',
          300: '#8fd3ff',
          400: '#5ab9ff',
          500: '#3399fe',
          600: '#1878f3',
          700: '#1563e0',
          800: '#1851b5',
          900: '#1a478e',
          950: '#142c57'
        },
        black: {
          DEFAULT: '#020105'
        },
        grey: {
          0: '#5D5D5F',
          1: '#F5F5F7',
          2: '#C2C2C3',
          3: '#9A999B',
          4: '#EBEBEB',
          5: '#F2F8FF'
        },
      }
    },
    fontFamily: {
      inherit: 'inherit',
      big: ["Big Shoulders Display", 'sans-serif'],
      golos: ["Golos Text", 'sans-serif'],
    }
  },
  plugins: []
};
