/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['"DM Mono"', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 5s linear infinite',
        'pulse-slower': 'pulse 10s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
        'bounce-slower': 'bounce 5s linear infinite',
      },
      spacing: {
        '20p': '20%',
        '10p': '10%',
        '15p': '15%',
      },
      // margin: {
      //   '20p': '20%',
      // }
    },
  },
  plugins: [],
}
