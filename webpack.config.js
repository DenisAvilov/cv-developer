const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')


const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `[name].${ext}` : `bundle.[contenthash].${ext}`

const plagins = () => {
  const basePlagins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: (`./css/${filename('css')}`)
    }),
    new CopyPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'build')},
      ],
    }),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
    }),
  ]
  if (isProd) {
    basePlagins.push(
        new ImageMinimizerPlugin({
          minimizerOptions: {
            plugins: [
              ['jpegtran', {progressive: true}],
            ]
          }})
    )
  }
  return basePlagins
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './scss/index.scss', './js/index.js'],
  output: {
    filename: './js/' + filename('js'),
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    port: 3000,
    open: true
  },
  plugins: plagins(),
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.s[ac]ss*$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) =>{
                return path.relative(path.dirname(resourcePath), context) + '/'
              }
            }
          },
          {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(?:|gif|jpg|jpeg|png|svg|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./img/${filename( '[ext]' )}`
            }
          },
        ],
      },
      {
        test: /\.(?:|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./fonts/${filename( '[ext]' )}`
            }
          },
        ],
      },
    ]
  }
}
