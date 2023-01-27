/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sooltan-1': '#FF0025',
        'sooltan-2': '#2DA44E',
        'sooltan-3': '#EDECF0',
        'sooltan-4': '#F6F8FA'
      },
      maxWidth: {
        desk: '1024px'
      },
      width: {
        desk: '1440px',
        cont: '1318'
      }
    },
  },
  plugins: [],
}