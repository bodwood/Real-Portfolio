/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Georgia', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['Oswald'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.5rem',
    },
    minWidth: {
      0: '0',
      100: '100px',
    },
    extend: {
      width: {
        '1/3-g': '30%',
      },
      minHeight: {
        50: '55px',
      },
      boxShadow: {
        footer: '0px -7px 41px 3px rgba(175, 175, 175, 0.25)',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      flexBasis: {
        '4/5': '66%',
      },
    },
  },
  plugins: [],
};
