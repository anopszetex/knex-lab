module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['google', 'prettier', 'eslint:recommended', 'plugin:n/recommended'],
  overrides: [],
  plugins: ['promise'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
