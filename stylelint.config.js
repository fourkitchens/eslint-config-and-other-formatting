module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'at-root',
          'each',
          'else',
          'forward',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'use',
          'while',
        ],
      },
    ],
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'prettier/prettier': true,
    'selector-class-pattern': null,
  },
};
