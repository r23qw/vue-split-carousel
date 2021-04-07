const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");
const EsmWebpackPlugin =  require("@purtuga/esm-webpack-plugin")
const prodConfig = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "vue-split-carousel.esm.js",
  },
  plugins: [new EsmWebpackPlugin()],
});
module.exports = prodConfig;
