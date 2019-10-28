/**
 * 用户信息
 */
var mongoose = require('./db.js'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: { 
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true	
	},
	userage: {
		type: Number
	},
	logindate: {
		type: Date
	}
});

module.exports = mongoose.model('User',UserSchema);
