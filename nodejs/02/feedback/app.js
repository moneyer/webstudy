// app application 应用程序
// 把当前模块所有的依赖项都声明再文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views（视图） 目录中
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
// / index.html
// /public 整个 public 目录中的资源都允许被访问
// 前后端融会贯通了，为所欲为

var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('art-template');

var comments = [
  {
  	name: '张三',
  	message: '今天天气不错！',
  	dateTime: '2018-11-29'
  },
  {
  	name: '张三2',
  	message: '今天天气不错！',
  	dateTime: '2018-11-29'
  },
  {
  	name: '张三3',
  	message: '今天天气不错！',
  	dateTime: '2018-11-29'
  },
  {
  	name: '张三4',
  	message: '今天天气不错！',
  	dateTime: '2018-11-29'
  }
]

http
  .createServer(function (request, response) {
  	// 简写方式，该函数会直接被注册为 server 的 request 请求事件处理函数
    // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
  	var parseObj = url.parse(request.url, true);

  	var pathname = parseObj.pathname;
  	if (pathname === '/') {
  		fs.readFile('./views/index.html', function (error, data) {
  			if (error) {
  				return response.end('404 Not Found.');
  			}
  			var htmlStr = template.render(data.toString(), {
  				comments: comments
  			})
  			response.end(htmlStr);
  		})
  	} else if(pathname.indexOf('/public/') === 0){
      // /public/css/main.css
      // /public/js/main.js
      // /public/lib/jquery.js
      // 统一处理：
      //    如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
      //    所以我们就直接可以把请求路径当作文件路径来直接进行读取
  		fs.readFile('.' + pathname, function (error, data) {
  			if (error) {
  				return response.end('404 Not Found.');
  			}
  			response.end(data);
  		})
  	} else if (pathname === '/post') {
  		fs.readFile('./views/post.html', function (error, data) {
  			if (error) {
  				return response.end('404 Not Found.');
  			}
  			response.end(data);
  		})
  	} else if(pathname === '/pinglun'){
      // 注意：这个时候无论 /pinglun?xxx 之后是什么，我都不用担心了，因为我的 pathname 是不包含 ? 之后的那个路径
      // 一次请求对应一次响应，响应结束这次请求也就结束了
  		// response.end(JSON.stringify(parseObj.query));
  		var comment = parseObj.query;
  		comment.dateTime = '2018-11-30 11:42:22';
  		comments.unshift(comment);

  		response.statusCode = 302;
  		response.setHeader('location', '/');
  		response.end();
  	} else {
  		// 其他的处理404找不到
  		fs.readFile('./views/404.html', function (error, data) {
  			if (error) {
  				return response.end('404 Not Found.');
  			}
  			response.end(data);
  		})
  	}
  })
  .listen(3000, function () {
  	console.log('server is running...');
  });
