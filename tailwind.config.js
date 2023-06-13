/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors : {
        'ddcyan' : 'hsl(180, 29%, 50%)',
        'lgcyan-bg' : 'hsl(180, 52%, 96%)',
        'lgcyan-ft' : 'hsl(180, 31%, 95%)',
        'dgcyan' : 'hsl(180, 8%, 52%)',
        'vdcyan' : 'hsl(180, 14%, 20%)',
      },
      screens : {
        desktop : '1000px',
        mobile : '375px',
      },
      fontFamily : {
        'sparta' : ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}

