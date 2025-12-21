/* eslint-disable */

// https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/tailwind.config.js
// https://github.com/tailwindlabs/tailwindcss/issues/6251

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        klimOrange: "#E84203",
        emojiLight: "yellow",
        emojiLightHover: colors.blue,
        emojiDark: colors.black,
        emojiDarkHover: colors.white,
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
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: "1px 1.5px 1.5px rgb(0 0 0 / 0.15)",
          },
          ".dark .text-shadow": {
            textShadow: "1px 1.5px 1.5px rgb(0 0 0 / 0.2)",
          },
          ".text-shadow-lg": {
            textShadow: "3px 3px 0px rgb(0 0 0 / 0.15)",
          },
          // base
          ".emoji-shadow": { textShadow: "0 0 0 #E84203" },
          ".emoji-shadow-hover": { textShadow: "0 0 0 #000000" },

          // dark base
          ".dark .emoji-shadow": { textShadow: "0 0 0 #000000" },
          ".dark .emoji-shadow-hover": { textShadow: "0 0 0 #ffffff" },
        },
        // These variants matter if you want to use `hover:` in className
        ["hover"],
      );
    }),
  ],
};
