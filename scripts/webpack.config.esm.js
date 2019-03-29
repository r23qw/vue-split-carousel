const config = require("./webpack.config.base");
const merge = require("webpack-merge");
const path = require("path");

const prodConfig = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "vue-split-carousel.esm.js"
  },
  optimization: {
    usedExports: true
  }
});
module.exports = prodConfig;
