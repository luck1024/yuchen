const path = require('path')
function resolve(dir) {
 return path.join(__dirname, dir)
}
module.exports = {
 lintOnSave: true,
 chainWebpack: config => {
  config.resolve.alias
   .set('@', resolve('src'))
   .set('assets', resolve('src/assets'))
   .set('components', resolve('src/components'))
   .set('filters', resolve('src/filters'))
   .set('stroe', resolve('src/stroe'))
   .set('network', resolve('src/network'))
   .set('router', resolve('src/router'))
   .set('views', resolve('src/views'))
 }
}