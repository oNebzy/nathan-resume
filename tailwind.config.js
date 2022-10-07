/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kaushanscript: ['Kaushan Script']
      },
      animation: {
        wiggle: 'wiggle .5s ease-in-out infinite',
        jiggle: 'jiggle .5s infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        jiggle: {
          '0%, 100%': { transform: 'translateY(-15%) rotate(-12deg)'},
          '50%': { transform: 'translateY(5%) rotate(-12deg)' },
          '25%, 75%': {transform: 'rotate(8deg)'}
        }
      }
    },
  },
  plugins: [],
}
