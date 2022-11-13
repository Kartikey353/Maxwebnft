/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        textColor:"#515151",
        primary:"#f5f3f3", 
        cartbg:"#282a2c",
        cartitem:"#2e3033",
        carttotal:"rgb(135, 132, 132)"
      }
    },
  },
  plugins: [],
}
