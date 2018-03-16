const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeExternals     = require('webpack-node-externals');

const config = {
    entry: './src/server/index.js',
    output: {
        filename: 'server.js',
        path: __dirname
    },

    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: [/(node_modules|bower_components)/, /test/, /public/] }
        ]
    },

    resolve: {
        extensions: ['.js', '.json']
    },

    plugins: [
        new ProgressBarPlugin()
    ],

    // Since we're building for the NodeJS environment,
    // we need to inform Webpack, otherwise the build
    // will fail.
    target: 'node',
    externals: [nodeExternals()]
};

module.exports = config;
