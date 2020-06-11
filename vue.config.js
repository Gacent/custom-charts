// const { resolve } = require('path')
module.exports = {
  // configureWebpack: {
  //   externals: {
  //     'vue': {
  //       root: 'Vue',
  //       commonjs: 'vue',
  //       commonjs2: 'vue',
  //       amd: 'vue'
  //     }
  //   }
  // },
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
    // config
    //   .when(process.env.NODE_ENV !== 'development',
    //     config => {
    //       // config
    //       //   .plugin('ScriptExtHtmlWebpackPlugin')
    //       //   .after('html')
    //       //   .use('script-ext-html-webpack-plugin', [{
    //       //     inline: /runtime\..*\.js$/
    //       //   }])
    //       //   .end()
    //       config
    //         .optimization.splitChunks({
    //           chunks: 'all'
    //           // cacheGroups: {
    //           //   libs: {
    //           //     name: 'chunk-libs',
    //           //     test: /[\\/]node_modules[\\/]/,
    //           //     priority: 10,
    //           //     chunks: 'initial' // only package third parties that are initially dependent
    //           //   },
    //           //   elementUI: {
    //           //     name: 'chunk-elementUI', // split elementUI into a single package
    //           //     priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //           //     test: /[\\/]node_modules[\\/]element-ui[\\/]/ // in order to adapt to cnpm
    //           //   },
    //           //   echarts: {
    //           //     name: 'chunk-echarts', // split elementUI into a single package
    //           //     priority: 18, // the weight needs to be larger than libs and app or it will be packaged into libs or app
    //           //     test: /[\\/]node_modules[\\/]lvji-custom-charts[\\/]/ // in order to adapt to cnpm
    //           //   },
    //           //   commons: {
    //           //     name: 'chunk-commons',
    //           //     test: resolve('src/components'), // can customize your rules
    //           //     minChunks: 3, //  minimum common number
    //           //     priority: 5,
    //           //     reuseExistingChunk: true
    //           //   }
    //           // }
    //         })
    //     }
    //   )
  }
}
