// Import the recommended config from the eslint-plugin-wdio
const wdioRecommended = require('eslint-plugin-wdio').configs.recommended;

module.exports = [
  {
    plugins: {
      wdio: require("eslint-plugin-wdio"),
      spellcheck: require("eslint-plugin-spellcheck")
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        es6: true,
        mocha: true,
        node: true
      }
    },
    rules: {
      "spellcheck/spell-checker": [
        "warn",
        {
          comments: true,
          strings: true,
          identifiers: true,
          lang: "en_US"
        }
      ]
    },
  },
  // Include recommended configurations directly
  wdioRecommended, // wdio recommended rules
  require("eslint/conf/eslint-recommended") // eslint recommended rules
];
