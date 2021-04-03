const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./dist/index.js",
  mode: "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      fs: false
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {},
    }),
  ],
};