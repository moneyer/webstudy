var mongoose = require('mongoose');

var Schema = mongoose.Schema;

url = 'mongodb://localhost/zzc';
// 1. 连接数据库
mongoose.connect(url);

// 2. 设计集合结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
});

// 3. 将文档结构发布为模型
//    mongoose.model 方法就是将一个架构发布为 model
//    第一个参数： 传入一个大写名词单数字符串用来表示你的数据库名称
//               mongoose 会自动将大写名称的字符串生成 小写复数 的集合名称
//               例如这里的 User 最终会变为 users 集合名称
//    第二个参数： 架构 Schema
//    
//     返回值： 模型构造函数 
var User = mongoose.model('User', userSchema);

// 4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为(增删改查)

/**
 * 新增数据
 * @type {User}
 */
// var admin = new User({
// 	username: 'zs',
// 	password: '123456',
// 	email: 'admin@admin.com'
// });
// admin.save(function (err,result) {
// 	if (err) throw err;
// 	console.log('保存成功');
// 	console.log(result);
// });	

/**
 * 查询数据
 */
// User.find(function (err, result) {
// 	if (err) throw err;
// 	console.log(result);
// });

User.findOne({
	username: 'zs'
}, function (err, result) {
	if (err) throw err;
	console.log(result);
});

/**
 * 删除数据
 */


/**
 * 更新数据
 */
