const fs = require('fs')
const path = require('path')

module.exports = {
  outputDir: 'examples',
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: config => {
    const files = fs.readdirSync(path.join(__dirname, './src/packages/'))
    for (const file of files) {
      const ext = path.extname(file)
      const name = path.basename(file, ext)
      config.entry[`../../lib/${name}`] = `./src/packages/${name}`
    }
  }
}