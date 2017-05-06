const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');

const config = require('./webpack.default');

config.devtool = 'source-map';
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'WEBPACK_ENV': '"dev"'
  })
]);
module.exports = config;
