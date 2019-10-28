function fn(callback) {
	var callback = function (data) { console.log(data); };

	// var data = '默认数据';
	// setTimeout(function () {
	// 	data = 'hello';
	// }, 1000);

	setTimeout(function () {
		data = 'hello';
		callback(data);
	}, 1000);

};

// 调用 fn ，得到内部的data
// console.log(fn());

// 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
fn(function (data) {
	console.log(data);
});