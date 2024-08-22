/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  daisyui:{theme:["light","dark"]},
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}