'use strict';

const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    new ExtractPlugin('bundle-[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ]
  }
}
