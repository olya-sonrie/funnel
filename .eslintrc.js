module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    'eol-last': 1,
    'no-console': 'error',
    curly: 1,
  },
}
