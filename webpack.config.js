var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {  
  entry: './dev/script.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },
    module: {
    loaders: [
      {
        test: /\.jsx?$/,         
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
         test: /\.css$/, 
         loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      { 
          test: /\.[ot]tf$/, 
          loader: 'url?limit=65000&mimetype=application/octet-stream'
      },
      {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
          loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
};