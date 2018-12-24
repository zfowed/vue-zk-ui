const fs = require('fs')
const path = require('path')

let VueConfig = {}

if (process.env.BUILD_MODE === 'packages') {
  VueConfig = {
    filenameHashing: false,
    productionSourceMap: false,
    outputDir: 'lib',
    assetsDir: 'assets',
    pages: {},
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        config.output.library = 'zk'
        config.output.libraryTarget = 'umd'
        const files = fs.readdirSync(path.join(__dirname, './src/packages/'))
        config.entry = {}
        for (const file of files) {
          const ext = path.extname(file)
          const name = path.basename(file, ext)
          if (ext === '.vue') {
            config.entry[`../../${name}`] = `./src/packages/${name}`
          }
          config.entry[`../../index`] = `./src/packages/index`
        }
        config.optimization.splitChunks.cacheGroups.vendors.test = () => false
        config.optimization.splitChunks.cacheGroups.common.test = () => false
      }
    }
  }
} else {
  VueConfig = {
    baseUrl: './',
    outputDir: 'docs'
  }
}

module.exports = VueConfig
