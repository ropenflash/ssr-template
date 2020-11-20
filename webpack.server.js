const path = require('path')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')

const config = {
    // building a bundle for nodeJS
    target: "node",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    }

}

module.exports = merge(baseConfig, config)