/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7469B6',
        'primary2': '#6358a6',
        'secondary': '#AD88C6',
        'secondary2': '#E1AFD1',
        'tertiary': '#FFE6E6'
      },
    },
  },
  plugins: [],
}

