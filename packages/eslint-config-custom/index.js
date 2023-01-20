module.exports = {
  env: {
    browser: true,
  },
  plugins: ["lodash"],
  extends: [
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "turbo",
    "prettier",
  ],
  rules: {
    "react/jsx-key": "off",
    "react/react-in-jsx-scope": false,
    "lodash/import-scope": [2, "method"],
    "import/no-unresolved": "off",
    "import/order": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
