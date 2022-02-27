module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'prettier/react'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies},
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
