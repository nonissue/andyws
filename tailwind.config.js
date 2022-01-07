/* eslint-disable */

// https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/tailwind.config.js
// https://github.com/tailwindlabs/tailwindcss/issues/6251

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: colors.yellow,
        purple: colors.purple,
        blue: colors.blue,
        gray: colors.gray,
        bluegray: colors.slate,
        almostblack: "hsl(221, 30%, 7%)",
        red: colors.red,
        orange: colors.orange,
        green: colors.green,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        lime: colors.lime,
        amber: colors.amber,
        sky: colors.sky,
        white: "#fff",
      },
      fontSize: {
        xxs: ".625rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        display2: ["Space Mono", ...defaultTheme.fontFamily.sans],
        mono: [
          "Space Mono",
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        label: [
          "Recursive",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        label_mono: [
          "Recursive",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
