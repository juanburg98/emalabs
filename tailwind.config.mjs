const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#171717", // title
        secondary: "#666666", // text
        tertiary: "#fafafa", // bg
        quaternary: "#ebebeb", // hover
        quinary: "#ffffff", // hover
        sextenary: "#0070f3", // detail
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};