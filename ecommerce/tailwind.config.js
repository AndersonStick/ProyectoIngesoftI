/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#144383',       // Color azul main
        'custom-hover-blue': '#749cbc', // Color al tener el mouse encima de un boton azul
        'custom-gris-uno': '#7c7c7c', // Gris 
        'custom-gris-dos': '#84847c', // Gris 2

      }
    },
  },
  plugins: [],
}

