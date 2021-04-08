// Configuration for ESLint
// See: https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,

  'extends': [
    '@wemake-services/javascript',
    '@wemake-services/typescript/recommended',
    'plugin:compat/recommended',
  ],

  'plugins': [
    'compat',
    'json',
    'eslint-plugin-import-helpers',
  ],

  'rules': {
    // Sets the import order linting,
    // see: https://github.com/Tibfib/eslint-plugin-import-helpers
    'import-helpers/order-imports': ['error', {
      'newlinesBetween': 'always',
      'groups': ['module', '/^~//', '/^@//'],
      'alphabetize': { 'order': 'asc', 'ignoreCase': false },
    }],
  },

  'parserOptions': {
    'parser': '@typescript-eslint/parser',
  },

  'settings': {
    // providing polyfills for `eslint-plugin-compat` plugin, see:
    // https://github.com/amilajack/eslint-plugin-compat/wiki/Adding-polyfills
    'polyfills': [],
  },

  'env': {
    'node': true,
    'browser': true,
  },
}
