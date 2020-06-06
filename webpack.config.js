'use strict';

const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// Paths

const paths = {
  root: (...segments) => path.resolve(path.join(__dirname, ...segments)),
  src: (...segments) => paths.root('src', ...segments),
  config: (...segments) => paths.root('config', ...segments),
  npm: (...segments) => paths.root('node_modules', ...segments),
  build: (...segments) => paths.root('_build', ...segments)
};

// Config

module.exports = (options) => {
  const ENV = (options && options.production) ? 'production' : 'development';
  process.env.NODE_ENV = ENV;

  return {
    context: paths.root(),
    entry: paths.src('index.ts'),
    output: {
      path: paths.build(ENV),
      filename: 'scripts/index.[chunkhash].js',
      publicPath: '/'
    },

    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.ts$/,
          exclude: [ paths.npm() ],
          loader: 'tslint-loader'
        },
        {
          test: /\.ts$/,
          exclude: [ paths.npm() ],
          loader: 'awesome-typescript-loader',
          query: {
            silent: true
          }
        },
        {
          test: /\.json$/,
          include: [ paths.config() ],
          loader: 'file-loader',
          query: {
            name: 'config/[name].[ext]'
          }
        }
      ]
    },

    resolve: {
      extensions: [ '.ts', '.js' ],
      modules: [ 'node_modules' ],
      plugins: [
        new TsConfigPathsPlugin()
      ]
    },

    plugins: plugins(ENV),

    devtool: ENV === 'production' ? 'nosources-source-map' : 'source-map',
    devServer: devServer(ENV)
  };
};

// Plugins

const plugins = env => {
  const common = [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise'
    }),
    new CleanWebpackPlugin([ paths.build(env) ], {
      verbose: false,
      root: paths.root()
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.src('index.html'),
      favicon: paths.src('favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ];

  if (env === 'production') {
    return common.concat([
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        sourceMap: true
      }),
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        test: /\.js$|\.css$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]);
  } else {
    return common;
  }
};

// Dev server

const devServer = env => {
  const config = {
    contentBase: paths.build(env),
    historyApiFallback: true,
    port: 8080,

    compress: true
  };

  return env !== 'development' ? undefined : config;
};
