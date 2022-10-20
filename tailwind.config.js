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
        jiggle: 'jiggle .5s infinite',
        jelloR: 'jelloR 1s',
        jelloL: 'jelloL 1s'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1.15)' },
          '50%': { transform: 'rotate(3deg) scale(1.15)' },
        },
        jiggle: {
          '0%, 100%': { transform: 'translateY(-15%) rotate(-12deg)'},
          '50%': { transform: 'translateY(5%) rotate(-12deg)' },
          '25%, 75%': {transform: 'rotate(8deg)'}
        },
        jelloR: {
          'from, 9.1%,to' :{
            transform: 'translate3d(0,0,0)'
          },
          '18.2%': {
            transform: 'skewX(-16deg) skewY(-16deg)',
          },
          '27.3%': {
            transform: 'skewX(10deg) skewY(10deg)',
          },
          '36.4%': {
            transform: 'skewX(-5deg) skewY(-5deg)',
          },
          '45.5%': {
            transform: 'skewX(2deg) skewY(2deg)',
          },
          '54.6%': {
            transform: 'skewX(-1deg) skewY(-1deg)',
          },
          '63.7%': {
            transform: 'skewX(.5deg) skewY(.5deg)',
          },
          '72.8%': {
            transform: 'skewX(-.25deg) skewY(-.25deg)',
          },
          '81.9%': {
            transform: 'skewX(.125deg) skewY(.125deg)',
          },
          '91%': {
            transform: 'skewX(-.0625deg) skewY(-.0625deg)',
          },
        },
        jelloL: {
          'from, 9.1%,to' :{
            transform: 'translate3d(0,0,0)'
          },
          '18.2%': {
            transform: 'skewX(16deg) skewY(16deg)',
          },
          '27.3%': {
            transform: 'skewX(-10deg) skewY(-10deg)',
          },
          '36.4%': {
            transform: 'skewX(5deg) skewY(5deg)',
          },
          '45.5%': {
            transform: 'skewX(-2deg) skewY(-2deg)',
          },
          '54.6%': {
            transform: 'skewX(1deg) skewY(1deg)',
          },
          '63.7%': {
            transform: 'skewX(-.5deg) skewY(-.5deg)',
          },
          '72.8%': {
            transform: 'skewX(.25deg) skewY(.25deg)',
          },
          '81.9%': {
            transform: 'skewX(-.125deg) skewY(-.125deg)',
          },
          '91%': {
            transform: 'skewX(.0625deg) skewY(.0625deg)',
          },
        }
      }
    },
  },
  plugins: [],
}
