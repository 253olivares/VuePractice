const { defineConfig } = require('@vue/cli-service')

// api config that sets up a proxy all this really does is so that instead of typing http://localhost the code looks for
// instances of api/ when submitting links to treat is as the original like.


module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '^/api':{
        target: 'http://localhost:5000',
        changeOrigin:true,
        logLevel:'debug',
        pathRewrite: {'^/api': '/'}
      },
    }
  }
}
)
