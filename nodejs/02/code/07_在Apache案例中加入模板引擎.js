var http = require('http');
var fs = require('fs');
var template = require('art-template');

var server = http.createServer();

var wwwDir = 'D:/www';

server.on('request', function (request,response) {
  var url = request.url;

  fs.readFile('./template_Apache.html', function (error, data) {
    if (error) {
      return response.end('404 Not Found.');
    }
    
    fs.readdir(wwwDir, function (error, files) {
      if (error) {
        console.log('目录不存在')
        return response.end('Can not find www Dir');
      }

      console.log(files);

      var htlStr = template.render(data.toString(), {
        title: 'ApacheDir',
        files: files
      })


      // 发送解析替换过后的响应数据
      response.end(htlStr)
    })
  })
});

// 3. 绑定端口号，启动监听服务
server.listen(4000, function () {
  console.log('server is running...');
})