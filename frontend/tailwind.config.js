/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'978px',
      xl:'1440px',
    },
    extend: {
      colors:{
        primaryBlack:'#000000',
        secondaryBlack:'#1A1D1F',
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        
      }
    },
  },
  plugins: [],
}
