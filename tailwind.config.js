/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0f172a',
        ivory: '#fffff0',
        gold: '#d4af37',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cinematic: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
