const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public/assets'), // string
    filename: '[name].js', // string
    publicPath: '/assets/', // string
  },
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],

  context: path.resolve(__dirname),

  devtool: 'source-map',

  resolve: {
    extensions: ['.jsx', '.js'],
  },

  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' } },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],

};

