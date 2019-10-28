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


	new Student(req.body).save(function (err) {
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
	
	// 把引号全局转换为空格实现去引号
	// console.log(req.query.id.replace(/"/g, ''));
	
	Student.findById(req.query.id.replace(/"/g, ''), function (err, student) {
		if (err) {
			return res.status(500).send('Sever error.');			
		}
		res.render('edit.html', {
			student: student
		});
	});
});

router.post('/students/edit', function (req, res) {
	// 1. 获取表单数据
	//    req.body
	// 2. 更新
	//    Student.updateById()
	// 3. 发送请求
	
	var id = req.body.id.replace(/"/g, '');
	Student.findByIdAndUpdate(id, req.body, function (err) {
		if (err) {
			return res.status(500).send('Sever error.');	
		}
		res.redirect('/');
	});
});

router.get('/students/delete', function (req, res) {
	var id = req.query.id.replace(/"/g, '');
	Student.findByIdAndRemove(id, function (err) {
		if (err) {
			return res.status(500).send('Sever error.');	
		}
		res.redirect('/');
	});
});

module.exports = router;
