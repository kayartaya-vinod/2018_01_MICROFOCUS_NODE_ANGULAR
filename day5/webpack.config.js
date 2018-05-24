var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        "bundle": "./src/app.ts"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: "ts-loader"
            }
        ]
    }
};