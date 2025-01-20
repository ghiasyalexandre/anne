/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'paper-texture': "url('https://static.wixstatic.com/media/11062b_0e4baa071ef74597b23e6d8e5afcb19ef000.jpg/v1/fill/w_980,h_846,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_0e4baa071ef74597b23e6d8e5afcb19ef000.jpg')",

      },
      
      boxShadow: { 
        neonLight: "0 0 5px theme('colors.white/20'), 0 0 20px theme('colors.white/70')",
        neonLightSlim: "0 0 5px theme('colors.white/20'), 0 0 8px theme('colors.white/70')",
        neonDarkSlim: "0 0 5px theme('colors.black/20'), 0 0 8px theme('colors.black/70')",
        neonDark : "0 0 5px theme('colors.black/20'), 0 0 20px theme('colors.black/70')",
   
        cardShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        cardShadow2: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",     
        cardShadow3: " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",        
        cardShadow4: " rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
    
      },
    },
  },
  plugins: [],
}