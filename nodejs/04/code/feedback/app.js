var express = require('express');
var bodyParser = require('body-parser');

// 1. 创建 app
var app = express();

// Express 中使用 art-template 的配置
// 第一二个参数，表示，当渲染以 .art 结尾的文件的时候， 使用art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express 中
// 虽然这里不需要引入 art-template 但是也必须安装
// 原因就在于 express-art-template 依赖了 art-template
app.engine('html', require('express-art-template'));


app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// 开放 public 、 view 目录的资源
app.use('/public/', express.static('./public/'));
// app.use('/views/', express.static('./views/'));

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

app.get('/', function (req, res) {
	
  // res.send('hello world');

	// res.redirect('./views/index.html');
	
	res.render('index.html', {
		comments : comments
	});
});

app.get('/post', function (req, res) {
	res.render('post.html');
});

// app.get('/pinglun', function (req, res) {
//   var comment = req.query;
//   comment.dateTime = '2018-11-30 11:42:22';
//   comments.unshift(comment);
//   res.redirect('/');
// });

app.post('/post', function (req, res) {
  console.log('收到表单请求了');
  var comment = req.body;
  comment.dateTime = '2018-11-30 11:42:22';
  comments.unshift(comment);
  res.redirect('/');
});

app.listen(3000, function () {
	console.log('app is running at port 3000.');
});