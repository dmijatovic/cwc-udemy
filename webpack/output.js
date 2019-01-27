/**
 * Output section of webpack
 * configuration file
 */

//const webpack = require('webpack');
const path = require('path')
//we go up from webpack folder into dist
const dist = path.resolve(__dirname, '../dist')

module.exports = {
  filename: '[name].js',
  chunkFilename: '[name].js',
  path: dist
}
