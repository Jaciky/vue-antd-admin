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
    'vue/order-in-components': 'error',
    'vue/attributes-order': 'error',
    'vue/no-template-shadow': 'error',
    'vue/max-attributes-per-line': [2, { singleline: 10, multiline: { max: 1, allowFirstLine: false } }],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'spaced-comment': [2, 'always'],
    'no-unexpected-multiline': 0, //避免多行表达式
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'no-tabs': 0,
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: [2, 'never', { beforeStatementContinuationChars: 'never' }],
    'no-delete-var': 2,
    'template-curly-spacing': 'off',
    indent: 'off'
  }
}
