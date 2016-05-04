var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  module:{
    loaders:[{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
    },{
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    }]  
  },
  resolve: {
    extenstions: ['','.js','.jsx']  
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};