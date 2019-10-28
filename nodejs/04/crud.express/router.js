var fs = require('fs');
var Student = require('./student.js');
var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
	Student.find(function (err, students) {
		if (err) {
			return res.status(500).send('Sever error.');
		}
		res.render('index.html', {
			fruits: [
			'苹果',
			'香蕉',
			'橘子'
			],
			students: students
		});		
	});
});

router.get('/students', function (req, res) {
	Student.find(function (err, students) {
		if (err) {
			return res.status(500).send('Sever error.');
		}
		res.render('index.html', {
			fruits: [
			'苹果',
			'香蕉',
			'橘子'
			],
			students: students
		});		
	});
});

router.get('/students/new', function (req, res) {
	res.render('new.html');
});

router.post('/students/new', function (req, res) {
	Student.save(req.body,function (err) {
		if (err) {
			return res.status(500).send('Sever error.');
		}
		res.redirect('/students');
	})
});

router.get('/students/edit', function (req, res) {
	// 1. 在客户端的列表页中处理链接问题 （需要有 id 参数）
	// 2. 获取要编辑的学生 id
	// 3. 渲染编辑页面
	console.log(req.query.id);
});

router.post('/students/edit', function (req, res) {

});

router.get('/students/delete', function (req, res) {

});

module.exports = router;
