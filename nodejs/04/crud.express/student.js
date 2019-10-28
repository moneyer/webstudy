/**
 * student.js
 * 职责：操作文件中的数据，只处理数据，
 */
var fs = require('fs');

var dbPath = './db.json';

/**
 * 获取所有学生列表
 *     第一个参数 err
 *         成功是 null
 *         错误是 错误对象
 *     第二个参数是 结果
 *         成功是 数组
 *         错误是 undefined
 * return []
 */
exports.find = function (callback) {
	fs.readFile(dbPath, 'utf8',function (err, data) {
		if (err) {
			return callback(err);
		}
		callback(null, JSON.parse(data).students);
	});
};

// find (function (err, data) {

// }) ;

/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
	fs.readFile(dbPath, 'utf8',function (err, data) {
		if (err) {
			return callback(err);
		}
		var students = JSON.parse(data).students;

		// 处理 id 唯一的， 不重复
		student.id = students[students.length - 1].id + 1;

		// 把对象保存到文件中
		students.push(student);
		var fileData = JSON.stringify({
			students: students
		});
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				// 失败了返回错误
				return callback(err);
			}
			// 成功就是没错
			callback(null);
		});
	});
};

/**
 * 更新学生
 */
exports.updateById = function (student,callback) {
	fs.readFile(dbPath, 'utf8',function (err, data) {
		if (err) {
			return callback(err);
		}
		var students = JSON.parse(data).students;

		student.id = parseInt(student.id);

		var stu = students.find(function (item) {
			return item.id = student.id;
		});

		for (var key in student) {
			stu[key] = student[key];
		}

		var fileData = JSON.stringify({
			students: students
		});
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				// 失败了返回错误
				return callback(err);
			}
			// 成功就是没错
			callback(null);
		});
	});
};

/**
 * 删除学生
 */
exports.delete = function () {
	/* body... */
};