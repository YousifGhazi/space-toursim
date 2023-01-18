const path = require("path");
const common = require("./webpack.common");
const { default: merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  bail: true,
  devServer: {
    static: "./",
    open: true,
    hot: true,
    port: 3000,
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
});
