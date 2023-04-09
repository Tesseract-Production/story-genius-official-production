// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      "./apps/**/*.{js,ts,jsx,tsx}", 
      "./packages/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      textColor: ['active'],
      boxShadow: ['active'],
    },
  },
  plugins: [
    
  ],
};
