/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#02D72F',
        secondary: '#1B2126',
        stroke: '#00AA13',
        'neutral-light': '#F5F5F5',
        'neutral-dark': '#A0AAB4',
      },
    },
  },
  plugins: [],
}
