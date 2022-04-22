module.exports = {
  env: {
    node: true,
    es2022: true,
    commonjs: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  plugins: [
    'wdio'
  ],
  extends: [
    'airbnb-base',
    'plugin:wdio/recommended'
  ],
  rules: {
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    'no-console': 'off',
    'no-var': 'error',
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'no-await-in-loop': 'warn',
    'no-restricted-syntax': 'warn',
    'no-underscore-dangle': 'warn',
    'prefer-arrow-callback': 'error',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'always'],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'func-names': ['error', 'always'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    curly: ['error', 'all'],
    'no-use-before-define': ['error', { functions: true, classes: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'max-statements-per-line': ['error', { max: 1 }],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['multiline-expression', 'block-like'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['multiline-expression', 'block-like'] },
      { blankLine: 'always', prev: 'let', next: ['expression'] }
    ],
    'max-len': ['warn', { code: 120 }],
    camelcase: ['warn', { allow: ['business_id'] }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'function-paren-newline': ['error', 'multiline-arguments'],
    'consistent-return': 'warn',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }]
  }
};
