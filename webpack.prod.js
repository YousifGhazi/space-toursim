const path = require("path");
const common = require("./webpack.common");
const { default: merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].[contenthash].bundle.js",
    clean: true,
  },
});
