const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  devServer: { contentBase: './dist' },
  module: {
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }) },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new ExtractTextPlugin('style.css')]
};
