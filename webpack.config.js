const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.jsx"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  plugins: [new dotenv()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
