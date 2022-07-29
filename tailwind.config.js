/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
          'flip-in': {
              '0%': {
                  opacity: '1',
                  transform: 'rotateY(90deg)',

              },
              '100%': {
                  opacity: '1',
                  transform: 'rotateY(0deg)'
              },
          },
          'flip-out': {
            '0%': {
                opacity: '1',
                transform: 'rotateY(0deg)'

            },
            '100%': {
                opacity: '1',
                transform: 'rotateY(-90deg)'
            },
        },
      },
      animation: {
          'flip-in': 'flip-in 0.5s ease-out',
          'flip-out': 'flip-out 0.5s ease-out',
      }
  },
  },
  plugins: [],
};