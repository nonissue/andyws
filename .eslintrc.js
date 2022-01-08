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
    /* 
    ISSUE / TODO

    is this really needed?
    can we remove eslint-import-resolver-typescript?
    https:ithub.com/vercel/next.js/issues/25920

    Yah, it's here:
    https://github.com/vercel/next.js/blob/320986a2b897bc512c21f7148f4a4c8ce749dcae/packages/eslint-config-next/index.js#L70 
    */
    /* disabling it seems to not cause issues? */
    // 'import/resolver': {
    //   typescript: {
    //     project: '.',
    //   },
    // },
    react: {
      version: 'detect',
    },
    files: ['**/*.ts', '**/*.tsx'],
  },
};
