const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
 /**
 * @typedef {import('webpack').Configuration} WebpackConfig
 *
 * @type {WebpackConfig}
 */
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // filename: 'bundle.js',
    // library: 'ml_hooks',
    // libraryTarget: "umd",
    // globalObject: "this",
    
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src', to: ''}
      ]
    }),
    new CleanWebpackPlugin()
  ],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  }
}

