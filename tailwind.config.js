/* eslint-disable no-undef */
// eslint-disable-next-line
const colors = require("tailwindcss/colors");
// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");
// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.tsx",
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
        bluegray: colors.blueGray,
        red: colors.red,
        orange: colors.orange,
        green: colors.green,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        lime: colors.lime,
        amber: colors.amber,
        lb: colors.lightBlue,
        white: "#fff",
      },
      fontSize: {
        xxs: ".625rem",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: [
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
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
      },
      // spacing: {
      //   1: "8px",
      //   2: "12px",
      //   3: "16px",
      //   4: "24px",
      //   5: "32px",
      //   6: "48px",
      // },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "dark"],
      backgroundOpacity: ["dark"],
      borderWidth: ["last"],
      margin: ["first"],
      padding: ["last"],
      ringColor: ["dark", "hover"],
      ringOpacity: ["dark", "hover"],
      ringWidth: ["dark", "hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
