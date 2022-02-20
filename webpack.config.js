const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "breakingBad.bundle-[hash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  mode: process.env.NODE_ENV || "development",

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
