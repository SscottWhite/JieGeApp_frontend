const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //解决跨域问题
    proxy: {
      '/vue/*': {
        target: 'http://localhost:8080/',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
