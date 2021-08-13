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
      },
      typography: (theme) => ({
        // https://sergiodxa.com/articles/use-tailwindcss-typography-with-dark-mode-styles
        // Reference custom fontFamily: https://github.com/tailwindlabs/tailwindcss-typography/issues/14
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.red.900"),
              "text-decoration": "none",
              fontWeight: "false",
              "&:hover, &.active": {
                color: theme("colors.red.500"),
                strong: {
                  color: theme("colors.gray.50"),
                },
              },
            },
            h1: {
              color: theme("colors.gray.800"),
              fontFamily: `${theme("fontFamily.sans")}`,
              fontWeight: 900,
            },
            h2: {
              color: theme("colors.gray.800"),
            },
            h3: {
              color: theme("colors.gray.400"),
              fontWeight: 400,
            },
            h4: {
              color: theme("colors.gray.800"),
            },
            h5: {
              color: theme("colors.gray.500"),
              // fontStyle: "italic",
              fontSize: "0.9em",
              // lineHeight: "calc(0.9em * 1.8)",
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
              color: theme("colors.gray.50"),
              "text-decoration": "none",
              "&:hover, &.active": {
                color: theme("colors.amber.amber11"),
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
              color: theme("colors.gray.500"),
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
