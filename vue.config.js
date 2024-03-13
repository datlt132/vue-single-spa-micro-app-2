const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.devServer.headers({
      'Access-Control-Allow-Origin': '*',
    });
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
})
