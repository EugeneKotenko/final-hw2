const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./client/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[fullhash].js",
    clean: true,
    publicPath: "./",
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[fullhash].css",
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'client/static'), to: 'static' }
      ],
    }),
  ],
  devServer: {
    port: 5555,
    historyApiFallback: true,
    static: {
       directory: path.join(__dirname, 'dist')
    },
 },
 resolve: {
    extensions: [".jsx", ".js"],
 },
  resolve: {
    extensions: [".jsx", ".js"],
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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["node_modules"],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
};
