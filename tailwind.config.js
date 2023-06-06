/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['"DM Mono"', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 5s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}

