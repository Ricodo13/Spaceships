module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'require-jsdoc': 'off',
    'no-var': 'off',
    'camelcase': 'off',
    'max-len': 'off',
    'no-unused-vars': 'off',
  },
};
