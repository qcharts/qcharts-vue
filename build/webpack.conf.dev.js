const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.conf.common')

module.exports = merge(common, {
  entry: {
    app: path.resolve(__dirname, '../demo/'),
    'q-charts': path.resolve(__dirname, '../src/')
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: 'QchartsVue',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../src/'),
    compress: true,
    hot: false,
    inline: true,
    quiet: true,
    open: true,
    watchOptions: {
      aggregateTimeout: 1000,
      poll: 3000
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          failOnError: true,
          quiet: true
        },
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'static/img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'static/fonts/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.d\.ts$/]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo/index.html'),
      filename: 'index.html'
    })
  ]
})
