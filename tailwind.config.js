/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7d9ff',
          100: '#ffe4e1',
          200: '#f0f0ff',
          300: '#d9f0ff',
          400: '#a0e0ff'
        }
      }
    },
  },
  plugins: [],
}
