const ExtractTextPlugin = require('extract-text-webpack-plugin');

const browserConfig = {
    mode: 'development',
    entry: './src',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
    output: {
        path: __dirname + '/build/browser',
        filename: 'bundle.js'
    }
};

module.exports = browserConfig;