/* eslint-disable no-undef */
const config = require("./webpack.config.prod");
const merge = require("webpack-merge");
module.exports = merge(config, {

  output: {
    path: path.resolve(__dirname, "../lib/dist"),
    libraryTarget: "umd",
    filename: "vue-split-carousel.umd.js"
  }
});
