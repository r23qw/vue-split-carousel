/* eslint-disable no-undef */
const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
process.env.NODE_ENV
const prodConfig = merge(config, {
  output: {
    path: path.resolve(__dirname, "../dist/umd"),
    libraryTarget: "umd",
    filename: "vue-split-carousel.umd.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "vue-split-carousel.min.css"
    })
  ]
});
module.exports = prodConfig

