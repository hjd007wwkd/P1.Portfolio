const path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            include: path.join(__dirname, 'src')
        }, {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
              } 
          }]
        }
      ]
    },
    devtool: 'eval'
};