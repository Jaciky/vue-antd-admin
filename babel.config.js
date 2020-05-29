const IS_PROD = process.env.VUE_APP_PREVIEW === 'false'

const plugins = []

if (IS_PROD) {
  plugins.push('transform-remove-console')
}

// lazy load ant-design-vue
plugins.push([
  'import',
  {
    libraryName: 'ant-design-vue',
    libraryDirectory: 'es',
    style: true // `style: true` 会加载 less 文件
  }
])

// optional-chaining: obj?.xxx
plugins.push('@babel/plugin-proposal-optional-chaining')

// 可忽略对异常的捕获
plugins.push('@babel/plugin-proposal-optional-catch-binding')

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins
}
