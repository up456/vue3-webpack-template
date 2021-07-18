
const path = require('path') 
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    extensions: ['.js','.vue'],
    alias: { 
      '~': path.resolve(__dirname,'src'),
      'assets': path.resolve(__dirname,'src/assets')
    }
  },
  entry: './src/main.js',
  output: {   
    clean: true
  },

  module: {
    rules: [
      {
        test:/\.vue$/,
        use: 'vue-loader'
      },
      {
        test:/\.s?css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test:/\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },

  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    }),
    new VueLoaderPlugin()
  ],

  devServer: {
    host: 'localhost'
  }
}
