/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "nord"],
  },
  content: ["./src/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

