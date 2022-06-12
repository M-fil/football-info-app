module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',

        'react/jsx-props-no-spreading': 0,
        quotes: [2, 'single', {avoidEscape: true}],

        'no-console': ['error', {allow: ['warn', 'error']}],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'off',

        'max-len': ['error', {code: 150}],
        'sonarjs/no-identical-functions': 'off',
      },
    },
  ],
};
