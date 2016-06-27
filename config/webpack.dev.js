var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, '..', 'app');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: ['./app/index.ts',
  'webpack-hot-middleware/client',
  'webpack/hot/only-dev-server'],
  
  
  module: {
    preLoaders: [{
      test: /\.ts?$/,
      loader: 'tslint',
      include: APP_DIR
    }

    ],
    loaders: [
      
    { test: /\.tag$/, exclude: /node_modules/, loaders: ['babel','riotjs-loader'] },
    ,{
      test: /\.ts?$/,
      loaders: ['babel','ts'],
      include: APP_DIR
    }]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.js', '.ts','.tag'],
    modulesDirectories: ["web_modules", "node_modules", "bower_components"]

  }
};
