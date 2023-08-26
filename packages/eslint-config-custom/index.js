module.exports = {
  extends: ['next', 'turbo', 'prettier', 'next/core-web-vitals'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {},
}
