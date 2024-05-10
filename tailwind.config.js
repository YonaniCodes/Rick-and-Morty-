/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      height:{
        '340':"373px",
        'inherit':'inherit'
      },
      width: {
        '600': '600px',
      },
      maxWidth:{
        '600': '600px',

      },
       backgroundColor:{
       'bisque':'bisque'
      }
    },
  },
  plugins: [],
}

