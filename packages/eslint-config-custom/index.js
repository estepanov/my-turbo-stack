module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'error'
    ],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
