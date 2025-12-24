// .eslintrc.js
// https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js
// https://www.npmjs.com/package/eslint-config-nextjs
// https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    // "plugin:@next/next/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
    react: {
      version: "detect",
    },
    files: ["**/*.ts", "**/*.tsx"],
  },
};
