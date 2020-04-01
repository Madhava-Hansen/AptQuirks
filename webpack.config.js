const path = require("path");
var webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

let plugins = [];
let devPlugins = [];

const prodPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  }),
  new UglifyJsPlugin(),
];

plugins = plugins.concat(
  process.env.NODE_ENV === "production" ? prodPlugins : devPlugins
);

let mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  plugins: plugins,
  mode: mode,
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: "babel-loader" },
      { test: /\.js$/, use: "babel-loader" },
      { exclude: /node_modules/ },
    ],
  },
  devtool: "source-map",
};
