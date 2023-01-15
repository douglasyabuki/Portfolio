/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        '3xl': '2000px',
        '4xl': '2400px',
      },
      fontFamily: {
        header: ['Sansita', 'sans-serif'],
      },
      fontSize: {
        xsmall: ['.6rem', '.9rem'],
        xsmaller: ['.45rem', '.62rem'],
        xsmallest: ['.3rem', '.45rem'],
      },
      colors: {
        'background-black': ' #19181F',
        'transparent-black': ' #19181F80',
        'translucid-black' : '#0000005e',
        'background-div1': '#23202A',
        'background-div2': '#1E1B24',
        'purplish-gray': '#C2C6DD',
        'not-so-white': '#FAFAFA',
      },
    },
  },
  plugins: [],
};
