/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts}',
    "./src/components/**/*.{js,vue,ts}",
    "./src/views/**/*.{js,vue,ts}",
    "./src/App.vue",
    "./index.html"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
  darkMode: 'class',
}
