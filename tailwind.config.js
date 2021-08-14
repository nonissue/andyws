/* eslint-disable */

const radixDark = require("./plugins/radix-colors/dark");
const radixLight = require("./plugins/radix-colors/light");
const underlineColorPlugin = require("./tailwind-underline-plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
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
        bluegray: colors.blueGray,
        almostblack: "hsl(221, 30%, 7%)",
        red: colors.red,
        darkRadixRed: radixDark.red,
        lightRadixRed: radixLight.red,
        darkRadixTomato: radixDark.tomato,
        lightRadixTomato: radixLight.tomato,
        orange: colors.orange,
        green: colors.green,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        lime: colors.lime,
        amber: colors.amber,
        sky: colors.sky,
        white: "#fff",
        mint: radixDark.mint,
        lime: radixDark.lime,
        limeLight: radixLight.lime,
        limeA: radixDark.limeA,
        amber: radixDark.amber,
        crimson: radixDark.crimson,
      },

      fontSize: {
        xxs: ".625rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        display2: ["Space Mono", ...defaultTheme.fontFamily.sans],
        mono: [
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
        "label-mono": [
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
      typography: (theme) => ({
        // https://sergiodxa.com/articles/use-tailwindcss-typography-with-dark-mode-styles
        // Reference custom fontFamily: https://github.com/tailwindlabs/tailwindcss-typography/issues/14
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              transition: "all 0.15s ease-in",
              color: theme("colors.lightRadixRed.red11"),
              background: theme("colors.lightRadixRed.red4"),
              lineHeight: `1.7`,
              display: "inline-block",
              "text-decoration": "none",
              "&:hover, &.active": {
                color: theme("colors.lightRadixRed.red12"),
                background: theme("colors.lightRadixRed.red3"),
              },
              "text-decoration": "none",
              paddingRight: `${theme("padding[1]")}`,
              paddingLeft: `${theme("padding[1]")}`,
              // paddingRight: `calc(${theme("padding[0.5]")} * 3)`,
              // paddingLeft: `calc(${theme("padding[0.5]")} * 3)`,
              fontWeight: "false",
              display: "inline-block",
            },
            h1: { color: theme("colors.gray.800") },
            h2: {
              color: theme("colors.gray.800"),
              fontFamily: `${theme("fontFamily.sans")}`,
              fontWeight: 900,
            },
            h3: {
              color: theme("colors.gray.600"),
              fontWeight: 400,
            },
            h4: {
              color: theme("colors.gray.800"),
            },
            h5: {
              color: theme("colors.gray.500"),

              fontSize: "0.9em",

              lineHeight: `1.8em`,
              "& a": {
                display: "inline",
                padding: `0px !important`,
                background: `${theme("colors.transparent")} !important`,
                // paddingTop: `calc(${theme("padding[0]")} * 0)`,
                // paddingBottom: `calc(${theme("padding[0]")} * 0)`,
                // paddingRight: `calc(${theme("padding[0.5]")} * 2)`,
                // paddingLeft: `calc(${theme("padding[0.5]")} * 2)`,
                "&:hover, &.active": {
                  color: theme("colors.lightRadixRed.red12"),
                },
              },
            },
            code: {
              color: theme("colors.gray.50"),
              "background-color": theme("colors.gray.800"),
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: theme("colors.gray.800"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.lightRadixRed.red6"),
              background: theme("colors.darkRadixRed.red4"),
              "text-decoration": "none",
              "&:hover, &.active": {
                color: theme("colors.lightRadixRed.red3"),
                background: theme("colors.darkRadixRed.red7"),
              },
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.red.100"),
            },
            h3: {
              color: theme("colors.gray.200"),
              fontWeight: 400,
            },
            h4: {
              color: theme("colors.gray.50"),
            },
            h5: {
              color: theme("colors.gray.400"),

              "& a": {
                // lineHeight: `calc(0.9em * 1.7)`,
                // display: "inline-block",
                background: `${theme("colors.transparent")} !important`,

                "&:hover, &.active": {
                  color: theme("colors.darkRadixRed.red12"),
                },
              },
            },
            code: {
              color: theme("colors.gray.800"),
              "background-color": theme("colors.gray.50"),
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: theme("colors.gray.50"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "dark"],
      backgroundOpacity: ["dark"],
      borderWidth: ["dark", "last"],
      margin: ["first"],
      padding: ["last"],
      ringColor: ["dark", "hover"],
      ringOpacity: ["dark", "hover"],
      ringWidth: ["dark", "hover"],
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    underlineColorPlugin,
  ],
};
