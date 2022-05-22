const webpack = require("webpack");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: '/src/app.js', // main js
    output: {
        path: path.resolve(__dirname, "dist"), // output folder
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader' // for vue file loader
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader', // for styles
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html', // base html
        })
    ]
}
