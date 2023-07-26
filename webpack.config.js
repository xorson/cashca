const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  resolve: {
        extensions: ['.js','.tsx' ]
    },
plugins: [
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],


  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webcash-pack.js',
  },
};
