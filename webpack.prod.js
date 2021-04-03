const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./dist/index.js",
  mode: "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {},
    }),
  ],
};