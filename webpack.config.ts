/* eslint-disable @typescript-eslint/no-var-requires */
const { CheckerPlugin } = require('awesome-typescript-loader')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')

const PATHS = {
  'src': path.join(__dirname, 'src'),
  'static': path.join(__dirname, 'static'),
  'dist': path.join(__dirname, 'dist'),
}

const html = `${PATHS.static}/index.pug`

const compileTemplate = (fileName: string): typeof HtmlWebpackPlugin => {
  return new HtmlWebpackPlugin({
    'filename': `${fileName}.html`,
    'template': html,
  })
}

module.exports = {
  'entry':
    `${PATHS.src}/pages/index.ts`,

  'target': 'browserslist',

  'output': {
    'filename': '[contenthash].bundle.js',
    'path': PATHS.dist,
    'wasmLoading': false,
  },

  'module': {
    'rules': [
      {
        'test': /\.pug$/u,
        'use': [
          'pug-loader',
        ],
      },
      {
        'test': /\.(png|jpg|gif|svg)$/ui,
        'use': [
          {
            'loader': 'url-loader',
            'options': {
              'limit': 8192,
            },
          },
        ],
        'type': 'javascript/auto',
      },
      {
        'test': /\.scss|css$/u,
        'use': [
          'style-loader',
          'css-loader',
          {
            'loader': 'sass-loader',
          },
        ],
      },

      {
        'enforce': 'pre',
        'test': /\.tsx?$/u,
        'exclude': /node_modules/u,
        'loader': 'eslint-loader',
      },

      {
        'test': /\.tsx?$/u,
        'loader': 'ts-loader',
        'exclude': /(node_modules)/u,
      },
    ],
  },

  'resolve': {
    'extensions': ['.ts', '.js'],
    'fallback': {
      'path': require.resolve('path-browserify'),
      'fs': false,
      'assert': require.resolve('assert/'),
    },
    'alias': {
      'process': 'process/browser',
    },
  },

  'plugins': [
    new webpack.ProvidePlugin({
      'process': 'process/browser',
    }),
    new CleanWebpackPlugin({
      'dry': true,
      'cleanOnceBeforeBuildPatterns': PATHS.dist,
    }),
    new CheckerPlugin(),
    new CircularDependencyPlugin({
      'cwd': process.cwd(),
      'exclude': /a\.ts|node_modules/u,
      'failOnError': true,
    }),
    new LiveReloadPlugin(),
    compileTemplate('index'),
  ],

  'mode': 'development',

  'devServer': {
    'contentBase': PATHS.dist,
    'watchContentBase': true,
    'historyApiFallback': true,
    'port': 3000,
  },

  'optimization': {
    'minimize': true,
    'minimizer': [
      new TerserPlugin({
        'terserOptions': { 'output': { 'ascii_only': true } },
      }),
    ],
    'splitChunks': {
      'chunks': 'async',
      'minSize': 30000,
      'minChunks': 1,
      'name': false,

      'cacheGroups': {
        'vendors': {
          'test': /[/\\]node_modules[/\\]/u,
          'priority': -10,
        },
      },
    },
  },
}
