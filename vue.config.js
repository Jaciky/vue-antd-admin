const { IgnorePlugin } = require('webpack')
const dynamicThemePlugin = require('./src/plugins/dynamicThemePlugin')

// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

const isProd = process.env.NODE_ENV === 'production'

const port = process.env.port || process.env.npm_config_port || 9527 // dev port
const title = 'Vue Antd Admin' // title

const assetsCDN = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  css: [],
  // https://unpkg.com/browse/vue@2.6.11/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.3.1/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js'
  ]
}

const vueConfig = {
  publicPath: isProd ? '/vue-antd-admin/' : './',

  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // if prod, add externals
    externals: isProd ? assetsCDN.externals : {}
  },

  chainWebpack: config => {
    // https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config.when(!isProd, config => {
      config.devtool('cheap-source-map')
      config.optimization.minimize(false)
    })

    config.when(isProd, config => {
      config
        .plugin('CompressionWebpackPlugin')
        .use(require('compression-webpack-plugin'), [
          {
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240, // 资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
          }
        ])
        .end()

      config.optimization.runtimeChunk('single')

      // if prod is on
      // assets require on cdn
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN
        return args
      })
    })

    config.plugin('html').tap(args => {
      args[0].title = title
      return args
    })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          // 'primary-color': '#13ce66',
          // 'link-color': '#1DA57A',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },

  // global less variables
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/assets/styles/variables.less'), resolve('src/assets/styles/utils.less')]
    }
  },

  devServer: {
    port: port,
    open: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    // proxy: {
    //   [process.env.VUE_APP_API_BASE_URL]: {
    //     target: `http://127.0.0.1:${port}/mock`,
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: false,
  runtimeCompiler: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

// preview.pro.loacg.com only do not use in your production;
if (process.env.VUE_APP_PREVIEW === 'true') {
  console.log('VUE_APP_PREVIEW', true)
  // add `ThemeColorReplacer` plugin to webpack plugins
  vueConfig.configureWebpack.plugins.push(dynamicThemePlugin())
}

module.exports = vueConfig
