const webpack = require('webpack');
const webpackBase = require('./base');

webpackBase.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
);

module.exports = webpackBase;
