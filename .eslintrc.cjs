module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'postcss.config.js',
    'tailwind.config.js',
    'webpack.config.*.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // FIXME: Remove this rule
    '@typescript-eslint/no-explicit-any': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
