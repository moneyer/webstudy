var http = require('http')

// 1. 创建 Server
var server = http.createServer()

// 2. 监听 request 请求事件，设置请求处理函数
server.on('request',function (request,response) {
	console.log('收到客户端请求了，请求路径是：' + request.url)
	console.log('请求我的客户端地址是：',request.socket.remoteAddress,request.socket.remotePort);

	// response.write('hello')
	// response.write(' nodejs')
	// response.end()

	// 一般使用如下方式
	// response.end('hello nodejs')

	var url = request.url;
	// 根据不同 url 返回不同的响应

	// response.setHeader('Content-Type','text/plain;charset = utf-8')
	if (url === '/') {
		response.end("index page")
	} else if (url === '/login') {
		response.end('login page')
	} else 	if (url === '/products') {
		var products = [
			{
				name: '苹果 X',
				price: 8888
			},
			{
				name: '小米 mix3',
				price: 4888
			},
			{
				name: '锤子 qqq',
				price: 8888
			}
		]

		// 响应内容只能是二进制或字符串

		// text/plain 就是普通文本
    	response.setHeader('Content-Type', 'text/plain; charset=utf-8')
		response.end(JSON.stringify(products))
	} else {
		response.end('404 not found.')
	}

})

// 3.绑定端口号，启动服务器
server.listen(4000,function () {
	console.log('服务器启动成功了，可以访问了。。。。')
})