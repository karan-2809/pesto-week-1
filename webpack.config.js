const webpack = require("webpack");
const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/bundle.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
                           patterns: [
                               {from: "*.html", to: './', context: path.resolve(__dirname, "src")},
                               {from: "*.css", to: './css', context: path.resolve(__dirname, "src/css")},
                           ]
                       })

    ],
    devServer: {
        static: path.resolve(__dirname, "./dist"),
        hot: true,
    },
};