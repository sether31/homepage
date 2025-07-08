/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        lb: {
          '0%': { transform: 'skewY(0deg)' },
          '80%': { transform: 'skewY(-5deg)' },
          '100%': { transform: 'skewY(-10deg)' },
        }
      },
      animation: {
        lb: 'lb 1.3s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

