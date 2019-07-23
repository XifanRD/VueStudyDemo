'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
    // 例如将'localhost:8080/api/xxx'代理到'www.example.com/xxx'
    proxyTable: {
      // '/api': { // 匹配所有以 '/api'开头的请求路径
      //   target: 'www.example.com', // 代理目标的基础路径
      //   如果是https接口，需要配置这个参数 secure: false,
      //   changeOrigin: true, // 支持跨域
      //   pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
      //     '^/api': ''
      //   }
      // }
       '/v1': {
         target: 'http://cangdu.org:8001'
       },
       '/v4': {
        target: 'http://cangdu.org:8001'
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    // 一般npm run build 的时候路径要改成'./'
    assetsPublicPath: './',

    /**
     * Source Maps
     */
    // 项目打包后，我们的代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确知道是哪里的代码出错了，而开启了 productionSourceMap，就会自动生成一些 map 文件，准确地告诉我们哪一行那一列出错。关闭了 productionSourceMap 后，一方面可以减少上线代码包的大小，另一方面提高系统的安全性。
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    // 线上代码一般是混淆压缩的，无法正确清晰地定位报错代码的位置，所以需要启用 `sourceMap`，例如，在 webpack打包工具中启用：
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // vue开启gzip，默认关闭（false）
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
