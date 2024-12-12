/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper-texture': "url('https://static.wixstatic.com/media/11062b_0e4baa071ef74597b23e6d8e5afcb19ef000.jpg/v1/fill/w_980,h_846,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_0e4baa071ef74597b23e6d8e5afcb19ef000.jpg')",

      }
    },
  },
  plugins: [],
}