module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: [
    'vue',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'max-len': [
      'warn',
    ],
    'vue/max-attributes-per-line': ['warn', {
      singleline: 2,
    }],
    'import/extensions': ['warn', {
      vue: 'never',
    }],
    'import/prefer-default-export': ['off'],
    'no-shadow': ['off'],
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': ['off'],
    'no-return-assign': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
