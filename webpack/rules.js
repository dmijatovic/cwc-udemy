/**
 * Module rules webpack config
 */

module.exports = [
  {
    test: /\.(png|jpg|gif|svg)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name].[ext]'
        }
      }
    ]
  }
]
