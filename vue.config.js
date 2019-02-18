const path = require('path')
const glob = require('glob')

let VueConfig = {}

if (process.env.BUILD_MODE === 'packages') {
  VueConfig = {
    filenameHashing: false,
    productionSourceMap: false,
    outputDir: 'lib',
    pages: {},
    configureWebpack: config => {
      config.output.library = 'zk'
      config.output.libraryTarget = 'umd'
      const files = glob.sync(path.join(__dirname, './src/packages/components/*/index.js'))
      config.entry = {}
      for (const file of files) {
        const name = path.basename(path.dirname(file))
        config.entry[`${name}`] = file
      }
      config.entry[`index`] = `./src/packages/index`
      config.optimization.splitChunks.cacheGroups.vendors.test = () => false
      config.optimization.splitChunks.cacheGroups.common.test = () => false
    }
  }
} else {
  VueConfig = {
    baseUrl: './',
    outputDir: 'docs'
  }
}

module.exports = VueConfig
