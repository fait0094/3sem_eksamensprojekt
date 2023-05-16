/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary_blue: "#1F9ECD",
        primary_black: "#323332",
        primary_white: "#FCFCFC",
        secondary_beige: "#f1f1e8",
        secondary_eggwhite: "#fcfbfa",
        accent_green: "#2ca900",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
