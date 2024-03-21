/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'sidebar': '#ffffff',
        'primary': '#6d28d9',
        'secondary': '#e5e7eb'
      },
    },
  },
  plugins: [],
}