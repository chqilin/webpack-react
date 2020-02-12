const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        index: resolve(__dirname, "src/index.jsx")
    },

    output: {
        path: resolve(__dirname, "dist"),
        filename: '[name].js'
    },

    devServer: {
        contentBase: "./dist",
        open: true
    },

    module: {
        rules: [
            { test: /\.(jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64]',
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]

            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}