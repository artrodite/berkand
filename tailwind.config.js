/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "berkand-blue": "#3E5F8A",
        "berkand-yellow": "#F9CC43",
        "berkand-orange": "#FF6E31",
        "berkand-green": "#2D7D53",
        "black": "#000000",
        "white": "#FFFFFF",
        "grey": "#A8A8A8",
        "text-grey": "#585858",
        "form-input": "#F6F6F6",
        "form-placeholder": "#7B7B7B",
      },
      backgroundImage: {
        'cable': "url('../public/assets/cable.svg')",
        'cable1': "url('../public/assets/cable1.svg')",
        'cable2': "url('../public/assets/cable2.svg')",
      }
    },
  },
  plugins: [],
};
