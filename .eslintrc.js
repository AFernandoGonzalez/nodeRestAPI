module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["**/*.mjs"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    "linebreak-style": 0,
    quotes: ["error", "double"],
    "comma-dangle": 0,
  },
};
