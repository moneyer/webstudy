const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');// 导入 在内存中自动生成 index 页面的插件

// 创建一个插件的实例对象
const  htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'),// 源文件
  filename: 'index.html'  // 生成的内存中首页的名称
});

// 向外暴露一个打包配置对象;  因为 webpack 是基于Node构建的;所以 webpack 支持所有的Node API 和语法
module.exports = {
	mode: 'development',  //development   production
//  webpack4.x默认打包的入口是src->index.js
  plugins: [
    htmlPlugin
  ],
  module: { //所有第三方 模块的配置规则
	  rules: [  //第三方匹配规则
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]

  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], //表示, 这几个文件的后缀名, 可以省略不写
    alias: { // 表示别名
      '@': path.join(__dirname, './src') // 这样, @ 就表示项目根目录中 src 的这一层路径
    }
  }

}


// 
// 


