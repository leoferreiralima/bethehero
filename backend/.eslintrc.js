module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ["standard", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  plugins: ["import", "eslint-plugin-import-helpers", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-extra-boolean-cast":"off",
    "import/prefer-default-export": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["module", "/^services/", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true }
      }
    ],
    quotes: [2, "double", { allowTemplateLiterals: true }],
    semi: [2, "always"],
    "no-multiple-empty-lines": [1, { max: 1, maxEOF: 0, maxBOF: 0 }],
    "space-before-function-paren": ["warn", "always"],
    "lines-between-class-members": ["warn", "always"]
  }
};
