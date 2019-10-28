var http = require('http');
var fs = require('fs');

var server = http.createServer();

var wwwDir = 'D:/www';

server.on('request', function (request,response) {
  var url = request.url;

  fs.readFile('./template.html', function (error, data) {
    if (error) {
      return response.end('404 Not Found.');
    }
    
    fs.readdir(wwwDir, function (error, files) {
      if (error) {
        console.log('目录不存在')
        return response.end('Can not find www Dir');
      }

      console.log(files);

      // 2.1 生成需要替换的内容
      var content = ''
      files.forEach(function (item) {
        // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
        content += `
          <tr>
            <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
          </tr>
        `
      })

      // 2.3 替换
      data = data.toString()
      data = data.replace('^_^', content)

      // 3. 发送解析替换过后的响应数据
      response.end(data)
    })
  })
});

// 3. 绑定端口号，启动监听服务
server.listen(4000, function () {
  console.log('server is running...');
})