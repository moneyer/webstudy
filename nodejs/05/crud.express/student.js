var mongoose = require('mongoose');

url = 'mongodb://localhost/zzc';
// 1. 连接数据库
mongoose.connect(url);

var Schema = mongoose.Schema;

var studentSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: Number,
		enum: [0,1],
		default: 0
	},
	age: {
		type: Number
	},
	hobbies: {
		type: String
	}
});

module.exports = mongoose.model('Student', studentSchema);