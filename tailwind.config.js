/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Georgia', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['Oswald'],
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
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '2000px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

/*
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }


Desktop = 1920
Macbook Air = 1440
iPad 10.9 in = 810
iPad Pro = 1024
Google Pixel = 393
iPhone Mini = 375
iPhone Pro Max = 390

sm phones
md ipads
lg small laptops and larger tablets
xl laptops
2xl desktops
*/
