const webpack = require("webpack")
const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const BUILD_DIR = path.resolve(__dirname, "build")
const APP_DIR = path.resolve(__dirname, "src")

module.exports = {
  entry:     APP_DIR + "/index.js",
  output:    {
    path:       BUILD_DIR,
    filename:   "js/main.[hash:6].js",
    publicPath: "/",
  },
  module:    {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:     {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use:  [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve:   {
    extensions: [".js", ".json", ".jsx"],
  },
  plugins:   [
    new HtmlWebPackPlugin({
      template: "templates/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename:      "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  devtool: "#eval-source-map"
}