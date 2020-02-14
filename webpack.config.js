const webpack = require('webpack');

module.exports = {
  node: {
    fs: 'empty'
  },
  entry: {
    eventPage: './src/eventPage.js',
    options: './src/options.js',
    receiver: './src/receiver.js'
  },
  output: {
    path: __dirname + "/extension/assets/js",
    filename: "[name].js",
    sourceMapFilename: "[name].js.map"
  },
  devtool: 'source-map',
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
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|svg|png)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
