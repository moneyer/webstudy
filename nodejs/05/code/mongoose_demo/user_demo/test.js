var User = require('./user.js');

/**
 * 插入
 */

function insert () {
	var user = new User({
		username: 'admin',
		password: '123456',
		userage: 18,
		logindate: new Date()
	});

	user.save(function (err, result) {
		if (err) throw err;
		console.log('Result:' + result);
	});
}

insert();
