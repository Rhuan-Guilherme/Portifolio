/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        bord: '0 0px 10px 1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
