const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'vue-split-carousel.min.css'
    })
  ]
});
