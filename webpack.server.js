const path = require('path')

module.exports = {
    // building a bundle for nodeJS
    target: "node",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/react",
                        "@babel/env"
                    ]
                }
            }
        ]
    }

}