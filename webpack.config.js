const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const plugins = [new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})];

//nie dziala tworzenie index.html????

//webpack.config.js
module.exports = (env) => {
  if (env === 'production') {
    plugins.push(
      new OptimizeJsPlugin({
        sourceMap: false
      })
    )
  }
  const enviroment = env || 'production';
  return {
    mode: enviroment,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
    },
    module: {
      rules: [{
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            presets: ['env', 'react']
          }
        },
        {
          test: /\.css$/,
          use: [{
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimize: false
    },
    plugins: plugins
  }
};