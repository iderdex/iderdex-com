/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        metal: {
          900: '#111111',
          800: '#1a1a1a',
          700: '#222222',
          green: {
            500: '#1a472a',
            600: '#143620',
            700: '#0f2816',
          }
        }
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};