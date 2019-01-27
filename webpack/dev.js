/**
 * Webpack development configuration
 * v1.0.1 Jan 2019
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

//shared modules
const entry = require('./entry')
const output = require('./output')
const rules = require('./rules')
const stats = require('./stats')

module.exports = {
  mode: 'development',
  entry: entry,
  output: output,
  module: {
    rules: rules
  },
  plugins: [
    //copy index html
    //https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),
    //copy static files
    //https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyWebpackPlugin([
      //copy all files from static dir to root
      //note: when no files folder is not copied!
      './static/'
    ])
  ],
  /**
   * Display stats, see link below for complete list
   * https://webpack.js.org/configuration/stats/#stats
   */
  stats: stats,
  /**
   * Webpack dev server setup
   */
  devtool: 'source-map',
  devServer: {
    port: 3000,
    stats: stats,
    compress: true,
    //route rewrites
    historyApiFallback: true
  }
}
