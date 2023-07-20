/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sub-green': '#97ba16',
      },
    },
    fontSize: {
      tablet: '12px',
      phone: '10px',
      title: '2.5rem',
      titlePhone: '1.5rem',
    },
    screens: {
      tablet: { max: '850px' },
      'max-phone': { max: '430px' },
    },
  },
  plugins: [],
};
