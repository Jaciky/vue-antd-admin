module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/this-in-template': ['error', 'never'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/max-attributes-per-line': 'off',
    // 'vue/html-self-closing': 'error',
    'vue/order-in-components': 'error',
    'vue/attributes-order': 'error',
    // 'vue/require-prop-types': 'error',
    'vue/no-template-shadow': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'spaced-comment': [2, 'always'],
    'no-unexpected-multiline': 0 //避免多行表达式
  }
}
