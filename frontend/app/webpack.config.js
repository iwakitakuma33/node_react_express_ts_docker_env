const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch",'@babel/polyfill', path.resolve(__dirname, "./src/index.tsx")],
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    modules: ["node_modules"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              ["@babel/preset-env"],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "react-hot-loader/babel",
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        enforce: "pre",
        test: /\.ts(x?)$/,
        loader: "source-map-loader"
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    hot: true,
    open: true,
    port: 8080,
    contentBase: path.resolve(__dirname, "dist/"),
    headers: {
      'Access-Control-Allow-Origin': 'Access-Control-Allow-Origin: http://localhost:8080',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
};
// const path = require("path");

// module.exports = {
//   entry: path.resolve(__dirname, "./src/index.tsx"),
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js"
//   },
//   devtool: "source-map",
//   target: "node",
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".json"]
//   },
//   module: {
//     rules: [
//       { test: /\.tsx?$/, loader: "ts-loader" },
//       {
//         enforce: "pre",
//         test: /\.tsx?$/,
//         loader: "source-map-loader"
//       }
//     ]
//   }
// };