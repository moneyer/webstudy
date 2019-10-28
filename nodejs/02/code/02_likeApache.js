var http = require('http');
var fs = require('fs');

// 1. 创建 Server
var server = http.createServer();

var wwwDir = 'D:/www';

server.on('request', function (request,response) {
  var url = request.url;

  var filePath = '/index.html';
  if (url !== '/') {
    filePath = url;
  }

  fs.readFile(wwwDir + filePath, function (error, data) {
    if (error) {
      return response.end('404 Not Found.');
    }
    response.end(data);
  })
});

// 3. 绑定端口号，启动监听服务
server.listen(4000, function () {
  console.log('server is running...');
})