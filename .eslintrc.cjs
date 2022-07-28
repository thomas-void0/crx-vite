module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "linebreak-style": ['off'],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "indent": ["error", 'tab'],
    "import/prefer-default-export": ['off'],
    "import/no-unresolved": ['off'],
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": ['off'],
    "react/react-in-jsx-scope": ['off'],
    "react/jsx-no-target-blank": ['off'],
    "react/jsx-indent": ['off'],
    "import/order": ['off'],
    "react/jsx-filename-extension": ['off'],
    "react/button-has-type": ['off'],
    "arrow-parens": ['off'],
    "no-shadow": ['off'],
    "react/jsx-one-expression-per-line": ['off'],
    "import/extensions": ['off'],
    'react/function-component-definition': ['off'],
    "arrow-body-style": ['off']
  },
};
