const config = require('../../packages/ui/tailwind.config.cjs')
module.exports = {
  ...config,
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    'node_modules/@myturbostack/ui/dist/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles.css',
    '../../packages/ui/tailwind.config.cjs',
  ],
}
