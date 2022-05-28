const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法检查
  lintOnSave:false,
    //开启代理服务器（方式二)
  devServer: {
    proxy: {
      '/api1': {  //匹配所有以api1开头的路径
        target: 'http://localhost:5000',   //代理目标路径
        pathRewrite:{'^/api1':''},   //重写路径
        ws: true,                   //用于支持websocket,默认为真
        changeOrigin: true         //用于控制请求头中host值，默认为真
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/api2':''},   //重写路径
        ws: true,                   //用于支持websocket,默认为真
        changeOrigin: true         //用于控制请求头中host值，默认为真
      }
    }
  }
})
