const { defineConfig } = require('@vue/cli-service')
process.env.NODE_ENV === "production" ? "/horoscope-test/" : "/",
process.env.NODE_ENV === "production" ? "/horoscope-test/" : "/",
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = { publicPath: process.env.NODE_ENV === 'production'  ? '/horoscope-testcd dist' : ''}
