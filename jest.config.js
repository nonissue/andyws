// eslint-disable-next-line no-undef
module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    // "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    // Not sure if this is needed... NOTE: IT IS
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/__mocks__/fileMock.js`,

    // Not sure how many of the below moduleMappers are needed?
    "^@/styles/(.*)$": ["<rootDir>/src/styles/$1"],
    "^@/lib/(.*)$": ["<rootDir>/src/lib/$1"],
    // if folder has an index.tsx with exports, only need format below?
    "^@/components": ["<rootDir>/src/components"],
    "^@/layouts/(.*)$": ["<rootDir>/src/layouts/$1"],
    "^@/data/(.*)$": ["<rootDir>/data/$1"],
    "^@/types/(.*)$": ["<rootDir>/src/types/$1"],
    "^@/types$": ["<rootDir>/src/types/index.d.ts"],
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
