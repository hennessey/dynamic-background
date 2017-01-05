module.exports = {
  entry: __dirname + '/index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /string-to-colors/],
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
