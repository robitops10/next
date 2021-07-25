const { Router } = require('express')
const { 
	getUsers, 
	addUser,
	getUserById,

} = require('../controllers/userController')

module.exports = router = Router()


router.route('/')
	.get(getUsers)
	.post(addUser)


router.route('/:id').get(getUserById)
