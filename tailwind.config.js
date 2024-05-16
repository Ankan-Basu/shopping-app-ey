/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '100px': '100px',
        '600px': '600px',
        '700px': '700px',
        '400px': '400px',
        '450px': '450px',
        '500px': '500px',
        '520px': '520px',
        '1000px': '1000px',
        '1280px': '1280px',
        '1536px': '1536px',
        '1600px': '1600px',
      },
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

