/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '450px' },
    },
    extend: {
      colors: {
        'dark-bg': '#000235',
        'light-bg': '#302A64',
        'pink-cr': '#660D52',
        'orange-cr': 'rgb(198, 103, 52, 50%)',
        'bttn-bg': '#0351B6',
        'lg-bl-tx': '#ABD9D9',
        'lg-text': '#A8A8A8',
      },
    },
  },
  plugins: [],
};
