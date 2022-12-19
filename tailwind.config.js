/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'Roboto'
      },
      colors: {
        primary: {
          100: '#2F70B3',
          200: '#082140',
          300: '#3070B3',
          400: '#0A2D57',
        },
        secondary: {
          100: '#E8ECEF',
          200: '#072140',
        },
        tertiary: {
          100: '#F7B11D',
          200: '#B45CA4',
          300: '#8F81EA',
          400: '#EA7237',
          500: '#EFEDFC',
        }
      },
      fontSize: {
        '3.3xl': '0.83333125rem',
        '5.5xl': '1.375rem',
        '7xl': '1.75rem',
        '8xl': '2rem',
        '8.5xl': '2.125rem',
        '10.5xl' : '2.625rem',
        '22.5xl': '5.625rem',
        '32.5xl': '8.125rem',
      },
      width: {
        '74.25' : '18.5625rem',
      }
    },
  },
  plugins: [],
}
