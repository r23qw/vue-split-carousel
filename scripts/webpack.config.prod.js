/* eslint-disable no-undef */
const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = merge(config, {
  output: {
    path: path.resolve(__dirname, "../dist"),
    libraryTarget:'amd'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "vue-split-carousel.min.css"
    })
  ]
});

module.exports = prodConfig;
