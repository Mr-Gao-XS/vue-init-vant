module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,
  assetsDir: './',
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
