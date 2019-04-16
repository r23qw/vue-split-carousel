const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = merge(config, {
  output: {
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "umd",
    filename: "vue-split-carousel.umd.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "vue-split-carousel.css"
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
});
module.exports = prodConfig

