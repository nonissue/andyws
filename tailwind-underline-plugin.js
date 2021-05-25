/* eslint-disable */

/*
  SOURCE: https://gist.github.com/djm/bcfdfc1117fbe61931041dcfb65556ee
  
  Creates colored underline utility classes.
  
  Explanation: https://css-tricks.com/almanac/properties/t/text-decoration-color/
  Browser Support: https://caniuse.com/#search=text-decoration-color
  
  e.g
  
  .underline-black => text-decoration: underline #000 !important;
  .underline-green-400 => text-decoration: underline #68d391 !important;
*/

const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, e, theme, variants }) {
  const colors = theme("colors", {});
  const underlineColorVariants = variants("underlineColor", []);

  const utilities = Object.entries(colors).map(([color, colorValue]) => {
    if (typeof colorValue === "object") {
      return Object.entries(colorValue).map(([colorVariant, value]) => {
        return {
          [`.underline-${e(color)}-${e(colorVariant)}`]: {
            textDecoration: `underline ${value}`,
          },
        };
      });
    } else {
      return {
        [`.underline-${e(color)}`]: {
          textDecoration: `underline ${colorValue}`,
        },
      };
    }
  });

  addUtilities(utilities, underlineColorVariants);
});
