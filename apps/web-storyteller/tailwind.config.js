/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        custom: '0 24px 32px rgba(0, 0, 0, 0.32)',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      boxShadow: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
