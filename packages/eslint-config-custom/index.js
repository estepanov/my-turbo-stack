module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
