module.exports = {
  parser: "@typescript-eslint/parser", 
  parserOptions: {
    ecmaVersion: 2020, 
    sourceType: "module",
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" 
    }
  },
  extends: [
    "plugin:react/recommended", 
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
