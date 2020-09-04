// gzip --start
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzip = true // 是否使用gzip
const productionGzipExtensions = ['js', 'css'] // 需要gzip压缩的文件后缀
// gzip --end

module.exports = {
  //编译打包存放的目录默认dist
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  assetsDir: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('autoprefixer')()],
      },
      sass: {
        prependData: `@import "~@/static/scss/common.scss";`,
      },
    },

    //css单独分离,需要热更新此处设置成false
    //extract: true,
  },
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  configureWebpack: (config) => {
    // 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
    config.plugins.push(
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
      })
    )
  },

  // 本地代理
  devServer: {
    proxy: {
      [process.env.VUE_APP_API_AGENT]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          [process.env.VUE_APP_API_AGENT]: '/',
        },
      },
    },
  },
}
