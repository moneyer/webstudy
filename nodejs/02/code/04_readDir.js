var fs = require('fs');

fs.readdir('D:/www', function (error, files) {
	if (error) {
		return console.log('目录不存在')
	}
	console.log(files);
});