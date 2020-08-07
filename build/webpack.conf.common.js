const os = require('os')
const path = require('path')
const Happypack = require('happypack')
const threadPoll = Happypack.ThreadPool({ size: os.cpus().length })
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')
const VueMdLoader = require('./vue-md-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=babel',
        include: [
          path.resolve(__dirname, '../demo/'),
          path.resolve(__dirname, '../src/')
        ],
        exclude: [/node_modules/]
      },

      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'happypack/loader?id=babel'
              }
            }
          }
        ],
        // include: path.resolve(__dirname, '../demo'),
        exclude: /node_modules/
      },

      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'happypack/loader?id=babel'
              }
            }
          },
          VueMdLoader
        ],
        include: path.resolve(__dirname, '../demo'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
      // 'vue$': 'vue/dist/vue.common'
    }
  },

  externals: {
    spritejs: 'spritejs',
    '@qcharts/core': {
      root: 'qcharts',
      commonjs2: '@qcharts/core/dist/index.js',
      commonjs: '@qcharts/core/dist/index.js',
      amd: '@qcharts/core/dist/index.js',
      umd: 'qcharts'
    },
    vue: 'Vue',
    vuep: 'Vuep',
    'vue-router': 'VueRouter'
  },
  plugins: [
    new VueLoaderPlugin(),
    new Happypack({
      id: 'babel',
      loaders: [
        {
          loader: 'babel-loader'
        }
      ],
      threadPool: threadPoll,
      verbose: false
    }),
    new ProgressBarPlugin({
      format: 'build [:bar] :percent (:elapsed seconds)',
      clear: false,
      width: 60
    })
  ]
}
