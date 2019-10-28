// 浏览器中的 JavaScript 是没有文件操作的能力的
// node中的javascript具有文件操作的能力

// fs是file-system的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中，就提供了所有文件操作相关的API
// 例如： fs.readFile 就是用来读取文件的 

// 1.使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 2.读取文件
//	 第一个参数就是要读取的文件路径
//	 第二个参数是一个回调函数
//
//		成功
//			data 数据
//			error null
//		失败
//			data undefined没有数据
//			error 错误对象
fs.readFile('./data/a.txt',function (error,data){
// <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
// 文件中储存的其实都是二进制数据 0 1
// 所以我们可以通过 toString 方法把其转化为我们认识到鹅字符
//	console.log(data)

	// console.log(error)
	// console.log(data)

// 通过判断error 是否有错误发生
	if (error) {
		console.log('读取文件失败了')
	} else {
		console.log(data.toString())
	}

})