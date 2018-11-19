const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
var OfflinePlugin = require('offline-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/(node_modules)/, /\.spec\.js$/],
        include: [
          path.resolve(__dirname, '../js')
        ],
        use: []
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
		      "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve('./src/assets'), 
        to: path.resolve('./dist/assets')
      }
    ]),
    new OfflinePlugin({
      caches: 'all',
      publicPath: void 0,
      updateStrategy: 'changed',
      responseStrategy: 'cache-first',
      externals: [],
      excludes: ['**/.*', '**/*.map', '**/*.gz'],
      relativePaths: ':relativePaths:',
      version: null,
      autoUpdate: false,
      cacheMaps: null,
      appShell: null,

    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    historyApiFallback: true
  }
};
