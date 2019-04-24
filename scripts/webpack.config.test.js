const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const prodConfig = merge(config, {
  mode:"development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "vue-split-carousel.css"
    })
  ]
});
module.exports = prodConfig;
