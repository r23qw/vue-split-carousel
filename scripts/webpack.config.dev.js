const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  entry:{
    app: path.resolve(__dirname,'../examples/index.js')
  },
  output: {
    path: path.resolve(__dirname, "../examples"),
    filename: '[name].[hash:7].js',
  },
  devServer: {
    port: 4242,
    publicPath:'/',
    hot: true
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './examples/index.tpl.html',
      filename: './index.html'
    }),
  ]
});
module.exports = devConfig;
