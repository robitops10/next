const User = require('../models/userModel')

exports.getUsers = async (req, res, next) => {
	const users = await User.find()

	res.status(200).json({ 
		status: 'success',
		users
	})
}

exports.getUserById = async (req, res, next) => {
	const user = await User.findById(req.params.id)

	res.status(200).json({ 
		status: 'success',
		user
	})
}


exports.addUser = async (req, res, next) => {
	const user = await User.create( req.body )

	res.status(201).json({ 
		status: 'success',
		user
	})
}



