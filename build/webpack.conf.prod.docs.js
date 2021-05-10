const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.conf.common')

module.exports = merge(common, {
  entry: {
    app: path.resolve(__dirname, '../demo/'),
    'q-charts': path.resolve(__dirname, '../src/')
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].js',
    library: 'QchartsVue',
    libraryTarget: 'umd',
    chunkFilename: '[name].[hash:7].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo/index.html'),
      filename: 'index.html'
    })
  ]
})
