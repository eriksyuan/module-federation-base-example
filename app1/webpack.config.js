const { ModuleFederationPlugin } = require("webpack").container
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3001,
  },
  module: {
    rules: [{ test: /\.jsx?$/, use: "babel-loader", exclude: /node_modules/ }],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      library: { type: "var", name: "app1" },
      remotes: {
        app2: "app2",
      },
    
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}
