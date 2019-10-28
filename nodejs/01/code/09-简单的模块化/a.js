// require 是一个方法
// 它的作用就是用来加载模块的
// 在 Node 中，模块有三种：
// 		具名的核心模块，例如 fs、http
// 		用户自己编写的文件模块
// 			相对路径必须加 ./

console.log('a start');

require('./b.js');

console.log('a end');