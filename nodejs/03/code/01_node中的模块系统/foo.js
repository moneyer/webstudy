var foo = 'bar';

function add(x, y) {
	return x + y;
}

// exports.add = add;

// 这种方式不行
exports = add;

// 如果一个模块需要直接导出某个成员，而非挂载的方式
// 那这个时候必须使用下面这种方式
exports.add = add;

// exports 是一个对象
// 我们可以通过多次为这个对象添加成员实现对外导出多个内部成员

exports.str = 'hello';

// 现在我有一个需求：
// 我希望加载得到直接就是一个：
// 方法
// 字符串
// 数字
// 数组