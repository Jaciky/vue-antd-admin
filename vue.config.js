'use strict'
const path = require('path')
const name = 'vue-antd-admin-template'

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: process.env.outputDir,
  lintOnSave: false,
  productionSourceMap: process.env.VUE_APP_CUR_MODE === 'test',
  runtimeCompiler: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#13ce66',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/styles/variables.less')]
    }
  },
  configureWebpack: {
    name,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        _com: path.resolve(__dirname, './src/components'),
        _api: path.resolve(__dirname, './src/api'),
        _views: path.resolve(__dirname, './src/views')
      }
    }
  },
  chainWebpack: config => {
    // https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config.when(process.env.NODE_ENV === 'development', config => {
      config.devtool('cheap-source-map')
      config.optimization.minimize(false)
    })

    config.when(process.env.NODE_ENV === 'production', config => {
      // 启用 Gzip 压缩
      config
        .plugin('CompressionWebpackPlugin')
        .use(require('compression-webpack-plugin'), [
          {
            filename: '[path].gz[query]', // 目标文件名
            algorithm: 'gzip', // 使用gzip压缩
            test: new RegExp('\\.(js|css)$'), // 压缩 js 与 css
            threshold: 10240, // 资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
          }
        ])
        .end()

      config.optimization.runtimeChunk('single') // 将多入口的webpack运行时文件打包成一个 runtime文件
    })
  },
  devServer: {
    open: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: 'http://192.168.1.141:8888'
  }
}
