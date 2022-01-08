// .eslintrc.js
// https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js
// https://www.npmjs.com/package/eslint-config-nextjs
// https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest
// eslint-disable-next-line no-undef
module.exports = {
  root: true,

  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended', // eslint default rules
    'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'next/core-web-vitals',
    'next',
  ],
  rules: {
    // 'jsx-a11y/anchor-is-valid': 'off',
    //'react/prop-types': 'off', // We turn off prop-types rule, as we will use TypeScript's types instead.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/react-in-jsx-scope': 'off',
    '@next/next/link-passhref': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
    react: {
      version: 'detect',
    },
    files: ['**/*.ts', '**/*.tsx'],
  },
};
