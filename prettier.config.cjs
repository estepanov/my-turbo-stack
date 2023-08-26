/** @type {import('prettier').Config & { [key:string]: any }} */
const config = {
    arrowParens: 'always',
    printWidth: 80,
    singleQuote: true,
    jsxSingleQuote: true,
    semi: false,
    trailingComma: 'all',
    tabWidth: 2,
    plugins: [],
    // tailwindConfig: './packages/config/tailwind',

}

module.exports = config