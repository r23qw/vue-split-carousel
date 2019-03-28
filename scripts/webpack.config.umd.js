const config = require("./webpack.config.prod");
const merge = require("webpack-merge");
module.exports = merge(config, {
  output: {
    libraryTarget: "umd",
    filename: "vue-split-carousel.umd.js"
  }
});
