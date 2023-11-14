/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'978px',
      xl:'1440px',
    },

    
    extend: {
      colors:{
        primary:'#F5693D',
        yellow:'#fef500',
        primaryBlack:'#000000',
        secondaryBlack:'#1A1D1F',
      },
      fontFamily:{
        sans:['Inter','sans-serif'],
        
      }
      
    },
  },
  plugins: [],
}
