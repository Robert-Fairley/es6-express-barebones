const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');

const config = {
    entry: './src/client/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            { test:/\.js$/, loader: 'babel-loader', exclude: [/node_modules/, /test/, /src\/server/] }
        ]
    },

    resolve: {
        extensions: ['.js', '.json']
    },

    plugins: [
        new ProgressBarPlugin()
    ]
};

module.exports = config;
