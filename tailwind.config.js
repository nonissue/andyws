/* eslint-disable no-undef */
// eslint-disable-next-line
const colors = require("tailwindcss/colors");
// eslint-disable-next-line no-undef
module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: colors.yellow,
        purple: colors.purple,
        blue: colors.blue,
        gray: colors.gray,
        red: colors.red,
        green: colors.green,
        pink: colors.pink,
        indigo: colors.indigo,
        lime: colors.lime,
        amber: colors.amber,
        lb: colors.lightBlue,
        white: "#fff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
