/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['custom'],
  parser: '@typescript-eslint/parser',
}
