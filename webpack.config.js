const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'template', 'index.ejs'), //eslint-disable-line
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') //eslint-disable-line
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|html|svg|ttf|woff|eot|cur)$/,
        loader: 'file-loader',
      },
    ]
  }
};
