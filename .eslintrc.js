module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/order-in-components': 'error',
    'vue/attributes-order': 'error',
    'vue/no-template-shadow': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'multiline-ternary': ['error', 'always-multiline'],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'spaced-comment': [2, 'always'],
    'no-unexpected-multiline': 0,
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'no-delete-var': 2,
    'template-curly-spacing': 'off',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/no-v-html': 'error'
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier']
}
