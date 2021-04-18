const config = {
  css: { extract: false },
};

if (process.env.NODE_ENV === "production") {
  config.configureWebpack = {
    devtool: false,
  };
}

module.exports = config;
