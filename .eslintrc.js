// .eslintrc.js
// https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js
// https://www.npmjs.com/package/eslint-config-nextjs
// https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest
// https://github.com/vercel/next.js/blob/320986a2b897bc512c21f7148f4a4c8ce749dcae/packages/eslint-config-next/index.js#L70
// https://github.com/vercel/next.js/issues/25920
module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended', // eslint default rules

    // Can Remove?
    'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    'plugin:@typescript-eslint/recommended',
    // End Can Remove

    'plugin:prettier/recommended',
    'prettier',
    'next/core-web-vitals',
    'next',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/react-in-jsx-scope': 'off',
    '@next/next/link-passhref': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
  },
};
