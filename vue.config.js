const path = require('path');
function resolve(dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  pages: {
    index: {
      entry: 'examples/index.js'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  configureWebpack: config => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      }
    )
  }
}
