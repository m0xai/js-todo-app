const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  mode: 'production',
  entry: {
    app: './src/js/app.js',
    home: './src/js/home.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dashboard | Zu Tun',
      template: './src/templates/app.html',
      filename: 'app.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      title: 'Zu Tun | Startseite',
      template: './src/templates/home.html',
      filename: 'index.html',
      chunks: ['home'],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[id].[chunkhash].js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
