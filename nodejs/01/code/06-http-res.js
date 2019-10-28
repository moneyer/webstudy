var http = require('http')

var server = http.createServer()

// request 请求事件处理函数，需要接收两个参数：
// 		Request 请求对象
// 			请求对象可以用来获取客户端的一些请求信息，例如请求路径
// 		Reponse 响应对象
// 			响应对象可以用来给客户端发送响应信息
server.on('request',function (request,response) {
	// http://127.0.0.1:4000/		/
	// http://127.0.0.1:4000/a 		/a
	console.log('收到客户端请求了，请求路径是：' + request.url)

	// response 对象有一个方法： write 可以用来给客户端发送响应数据
	// write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
	response.write('hello')
	response.write(' nodejs')

	// 
	response.end()
})

server.listen(4000,function () {
	console.log('服务器启动成功了，可以通过 http://127.0.0.1:4000/ 来访问')
})