module.exports = [{
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        {
          loader: 'sass-loader',
          options: {
            includePaths: ['./node_modules']
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' }
      ]
    }, {
      test: /\.tsx?$/,
      use: [
        { loader: "ts-loader" }
      ]
    }]
  },
}];