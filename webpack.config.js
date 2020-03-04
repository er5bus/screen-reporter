const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')


module.exports = {
  node: { fs: 'empty' },
  devtool: 'source-map',
  entry: {
    backgroundScript: './src/backgroundScript.js',
    index: './src/index.js'
  },
  output: {
    path: __dirname + '/chrome/build/',
    filename: '[name].js',
    publicPath: '/build/',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', { loader: "postcss-loader" }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
              engine: "rework",
              path: __dirname + '/chrome/build/',
              absolute: false
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(png|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(eot|mp3|ttf|woff|woff2)$/,
        use:'file-loader'
      }
    ]
  },
  optimization: {
    minimize: false,
    portableRecords: true
  }
}
