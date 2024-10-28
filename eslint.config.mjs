export default [
  {
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly"
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module"
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // Add rules from eslint:recommended
      "no-unused-vars": "off",
      "no-console": "off",
      // Add rules from plugin:react/recommended
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
      // Your custom rules
    }
  }
];
