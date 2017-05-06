const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');

const config = require('./webpack.default');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production'

config.devtool = 'hidden-source-map';
config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    },
    comments: false,
    sourceMap: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'ENV': JSON.stringify(ENV)
    }
  }),
  new CopyWebpackPlugin([{ from: './src/index.html' }], {})
]);
module.exports = config;
