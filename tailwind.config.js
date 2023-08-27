/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  darkMode : 'class',
  theme: {
    screens: {
      'phone': '640px',
      // => @media (min-width: 640px) { ... }
      'phone-2': '785px',
      // => @media (min-width: 720px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'computer': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    extend: {},
  },
  plugins: [],
}


