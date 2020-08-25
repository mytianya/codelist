// vue-cli3 提供一个可选的 vue.config.js 配置文件。如果这个文件存在则他会被自动加载，所有的对项目和webpack的配置，都在这个文件中
module.exports = {
    // 修改 src 目录 为 examples 目录
    pages: {
      index: {
        // page 的入口
        entry: 'examples/main.js',   // 把src 修改为examples
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html'
      }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    /* chainWebpack 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。 */
    chainWebpack: config => {
      config.module
        .rule('js')
        .include
          .add(__dirname + 'packages')  // 注意这里需要绝对路径，所有要拼接__dirname
          .end()
        .use('babel')
          .loader('babel-loader')
          .tap(options => {
            // 修改它的选项...
            return options
          })
    },
    devServer:{
        proxy:{
           // "/iis/imf/":{
                "/":{
                target:'http://192.28.4.2:9997', // 目标代理接口地址
                secure:false,
                changeOrigin: true,// 开启代理，在本地创建一个虚拟服务端
                ws:true
            }
        }
    },
  }
  