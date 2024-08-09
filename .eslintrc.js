module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    // You can override specific rules or add new ones here
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ['*.css', '*.scss', '*.less'], // Adjust this if you're linting CSS files
      rules: {
        'at-rule-no-unknown': [
          0,
          {
            ignoreAtRules: [
              'tailwind',
              'apply',
              'variants',
              'responsive',
              'screen',
            ],
          },
        ],
        // other Stylelint rules...
      },
    },
  ],
};
