module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "global-require":0,
    "indent": [2, 2],
    "no-nested-ternary": 0,
    "max-len": [2, {"code": 140, "tabWidth": 4, "ignoreUrls": true}],
    "no-param-reassign": 0,
    "react/forbid-prop-types": 0
  },
};

