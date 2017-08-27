const path = require('path');

// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: path.resolve(__dirname, './static'),
  entry: './static/js/main.js',
  output: {
    path: path.resolve(__dirname, './static/static'),
    filename: './dist/bundle.js'
  },
  module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   use: [{
        //     loader: 'babel-loader',
        //     options: { presets: ['es2015'] }
        //   }],
        // },
      ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: '../test.html',
      template: __dirname + "/template/index.html"
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    // new ExtractTextPlugin("[name]-[hash].css")
  ]

}

module.exports = config
