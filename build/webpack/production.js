const webpackBase = require('./base');
const UglifyJsPlugin = require('uglify-js');

webpackBase.plugins.push(
    new UglifyJsPlugin({
        uglifyOptions: {
            warnings: false,
            ie8: false,
            output: {
                comments: false
            }
        }})
);

module.exports = webpackBase;
