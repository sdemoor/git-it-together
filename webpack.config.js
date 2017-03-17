var path = require('path');

module.exports = {
  entry: './client/app/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      }
    ]
  }
}