/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        diagonalMove: {
          '0%': { transform: 'translate(-420, -120)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0p, 0)' },
        },

        diagonalMoveReverse: {
          '0%': { transform: 'translate(420, 120)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },

        diagonalMove80k: {
          '0%': { transform: 'translate(0, -320)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        diagonalMoveClose80k: {
          '0%': { transform: 'translate(0, 320px)' },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },

      animation: {
        diagonal: 'diagonalMove 1s ease-in-out',
        diagonalClose: 'diagonalMoveReverse 1s ease-in-out',
        diagonal80k: 'diagonalMove80k 1s ease-in-out',
        diagonalClose80k: 'diagonalMoveClose80k 1s ease-in-out',
      },

      fontFamily: {
        sans: [
          'Inter',
          'sans-serif'
        ],
        grotesk: {
          regular: ["'Grotesk Regular'", "sans-serif"], // 400
          medium: ["'Grotesk Medium'", "sans-serif"],   // 500
          semibold: ["'Grotesk SemiBold'", "sans-serif"], // 600
          bold: ["'Grotesk Bold'", "sans-serif"],
        },

        euclid: {
          regular: ["'Euclid Circular B Regular'", "sans-serif"], // 400
          light: ["'Euclid Circular B Light'", "sans-serif"],     // 300
          medium: ["'Euclid Circular B Medium'", "sans-serif"],   // 500
          semibold: ["'Euclid Circular B SemiBold'", "sans-serif"], // 600
          bold: ["'Euclid Circular B Bold'", "sans-serif"],       // 700
        },
      },
    },
  },
  plugins: [],
};
