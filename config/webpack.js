"use strict"

const path              = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: [
    path.join(__dirname, "../app/index.js"),
    path.join(__dirname, "../app/styles/index.scss"),
  ],
  output: {
    path: path.join(__dirname, "../public"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // .js or .jsx
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/, // .css or .scss (sass)
        loader: ExtractTextPlugin.extract("style", "css!sass"),
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  plugins: [
      new ExtractTextPlugin("bundle.css"),
  ]
}
