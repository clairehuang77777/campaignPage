const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // 或 'production'
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'public'), // 輸出到 public 資料夾
    filename: 'bundle.js', // JavaScript 輸出文件
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 處理 .js 檔案
        use: {
          loader: 'babel-loader', // 解析ES6語法
          options: {
            presets:['@babel/preset-env'], //使用babel預設環境
          }     
        }
      },
      {
        test: /\.scss$/, // 處理 .scss 檔案
        use: [
          MiniCssExtractPlugin.loader, // 提取 CSS 到單獨文件
          'css-loader',                // 解析 CSS
          'sass-loader',                // 將 Sass 編譯成 CSS
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheet.css', // 輸出 CSS 文件名
    })
  ]
};
