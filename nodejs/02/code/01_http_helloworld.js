var http = require('http');
var fs = require('fs');

// 1. 创建 Server
var server = http.createServer();

var wwwDir = 'D:/www';

server.on('request', function (request,response) {
  var url = request.url;
  if (url === '/') {
  	fs.readFile(wwwDir + '/index.html', function (error, data) {
      if (error) {
      	// return 有两个作用：
      	//   1. 方法返回值
      	//   2. 阻止代码往后执行
      	return response.end('404 Not Found.')
      } else {
      	response.end(data);
      }
  	});
  } else if (url === '/a.txt') {
  	fs.readFile(wwwDir + '/a.txt', function (error, data) {
      if (error) {
      	return response.end('404 Not Found.')
      } else {
      	response.end(data);
      }
  	});
  } else if (url === '/index.html') {
  	fs.readFile(wwwDir + '/index.html', function (error, data) {
      if (error) {
      	return response.end('404 Not Found.')
      } else {
      	response.end(data);
      }
  	});
  } else if (url === '/app/login.html') {
	  	fs.readFile(wwwDir + '/app/login.html', function (error, data) {
      if (error) {
      	return response.end('404 Not Found.')
      } else {
      	response.end(data);
      }
  	});
  }
});

// 3. 绑定端口号，启动监听服务
server.listen(4000, function () {
  console.log('server is running...');
})