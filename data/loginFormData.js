
const getItem = (label, name, type='text') => ({ label, name, type })
const fieldItems = [
	getItem('Email Address', 'email'),
	getItem('Password', 'password', 'password'),
]

const fieldItemsObj = {}
fieldItems.map( field => fieldItemsObj[field.name] = '')

export { fieldItems, fieldItemsObj }

