module.exports = {
  extends: ['next', 'turbo', 'prettier'],
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
