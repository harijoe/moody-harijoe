require('webpack')

module.exports = {
  context: __dirname,
  entry: './index',
  output: {
    path: `${__dirname}/dist`,
    filename: 'handler.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: [require('webpack-node-externals')()],
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
}
