const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./base');
const webpackBase = {
    mode: 'production',
    ...webpackConfig,
    optimization: {
        minimizer: [new UglifyJsPlugin()],
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true
    }
};

module.exports = webpackBase;
