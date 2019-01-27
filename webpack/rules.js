/**
 * Module rules webpack config
 */

module.exports = [
  {
    test: /\.(png|jpg|gif)$/i,
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
    test: /\.(woff(2)?|ttf|eot)$/i,
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
    test: /\.(svg)$/i,
    use: [
      {
        loader: 'url-loader'
      }
    ]
  }
]
