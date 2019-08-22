module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: 'babel-eslint',
  plugins: ['babel', 'react', 'react-hooks', 'prettier'],
  rules: {
    'no-unused-vars': 1,
    'no-shadow': 0,
    'babel/semi': 0,
    'prettier/prettier': [2, { singleQuote: true, endOfLine: 'auto' }],
    'react-hooks/exhaustive-deps': 1
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: 'src'
      }
    }
  }
};
