const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const prodConfig = merge(config, {
  output: {
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "commonjs2",
    filename: "vue-split-carousel.common.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "vue-split-carousel.css"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
module.exports = prodConfig;
