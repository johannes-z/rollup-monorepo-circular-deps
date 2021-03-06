module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
}
