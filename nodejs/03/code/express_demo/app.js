// 0. 安装
// 1. 引包
var express = require('express');

// 2. 创建你的服务器应用程序
//    也就是原来的 http.creatServer
var app = express();

// 公开指定目录
// 只要这样做了，你就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use('/public/', express.static('./public/'));
app.use('/static/', express.static('./static/'));

// 当服务器收到 get 请求 / 的时候，执行回调处理函数
app.get('/',function (request, response) {
	response.send("hello express!");
})

app.get('/about', function (request,response) {
	response.send("about express.");
})

// 相当于 server.listen
app.listen(3000, function () {
	console.log('app is running at port 3000.');
})