/**
 * Webpack PRODUCTION configuration
 * v1.0.1 Jan 2019
 */
const path = require('path')
const dist = path.resolve(__dirname, '../dist')

//PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

//DEFINITIONS
const entry = require('./entry')
const output = require('./output')
const rules = require('./rules')
const stats = require('./stats')
const optimization = require('./optimization')

module.exports = {
  mode: 'production',
  entry: entry,
  output: output,
  module: {
    rules: rules
  },
  plugins: [
    //remove all files from dist folder on each build
    //https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(['*.*'], {
      // Absolute path to root folder (paths appended to this)
      // Default: root of your package
      root: dist,
      // Use boolean "true" to test/emulate delete. (will not remove files).
      // Default: false - remove files
      dry: false,
      // allow the plugin to clean folders outside of the webpack root.
      // Default: false - don't allow clean folder outside of root
      allowExternal: false
    }),
    //copy index html and script bundles
    //https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    //copy assets
    //https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyWebpackPlugin([
      //copy all files from assets dir to root
      './static/'
    ]),
    /* Bundle Analyzer - further investigation needed
			https://www.npmjs.com/package/webpack-bundle-analyzer
		*/
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_report.html'
    })
  ],
  /*
		Optimize bundels
		https://webpack.js.org/configuration/optimization/
	*/
  optimization: optimization,
  /**
   * Display stats, see link below for complete list
   * https://webpack.js.org/configuration/stats/#stats
   */
  stats: stats
}
