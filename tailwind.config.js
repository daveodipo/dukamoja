/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {      
      fontFamily: {
      Sans: ["Open Sans", "sans-serif"],
      Merriweather: ["Merriweather", "serif"],
      Serifpro:["Source Serif Pro","serif"],
      Slab:["Roboto Slab","serif"],
      Noto:["Noto Serif JP","serif"],
      Playfair:['Playfair Display', "Serif"]
          },},
  },
  plugins: [],
}
