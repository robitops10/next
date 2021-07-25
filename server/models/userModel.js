const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	name: String,
	age: {
		type: Number,
		default: 25
	}
})

module.exports = model('User', userSchema)
