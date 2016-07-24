var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {  
  entry: './assets/js/script.js',
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
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
      }, 
      {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
      }, 
      { 
          test: /\.[ot]tf$/, 
          loader: 'url?limit=65000&mimetype=application/octet-stream'
      },
      {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream"
      }, 
      {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file"
      }, 
      {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
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