/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-flow': 'oxxo 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s linear infinite',
      }
    },
  },
  plugins: [],
}
