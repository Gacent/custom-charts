module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = 102400
        return options
      })
  }
}
