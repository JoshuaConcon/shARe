const path = require('path');
const webpack = require('webpack');
const S3Plugin = require('webpack-s3-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
         presets: ['react', 'es2015', 'stage-2']
       }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader', 'less-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                progressive: true,
                optimizationLevel: 7,
                interlaced: false,
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                },
                mozjpeg: {
                  progressive: true,
                },
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      querystring: 'querystring-browser'
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    hot: true,
    historyApiFallback: true,
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    //new BundleAnalyzerPlugin({ analyzerMode: 'static' })
    new S3Plugin({
      // Only upload css and js
      include: /.*\.(css|js)/,
      // s3Options are required
      s3Options: {
        accessKeyId: 'AKIAJGDH23M7MJCTPAVA',
        secretAccessKey: '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',
      },
      s3UploadOptions: {
        Bucket: 'share-hosting-mobilehub-1774715290'
      }
    })
  ],
  watch: false
};