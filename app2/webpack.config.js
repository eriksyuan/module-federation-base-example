const { ModuleFederationPlugin } = require("webpack").container
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
  entry: "./src/index.js",
  mode:'development',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "http://localhost:3002/",
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "app2-remote-entry.js",
      exposes: {
        "./Button": "./src/Button",
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}
