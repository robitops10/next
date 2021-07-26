import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { login } from '../store/userReducer'


import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { fieldItems, fieldItemsObj } from '../data/loginFormData'



const Login = () => {
	const dispatch = useDispatch()
	const [ fields, setFields ] = useState(fieldItemsObj)

	const formHandler = (evt) => {
		evt.preventDefault()

		dispatch( login(fields) )
		console.log( fields )
	}

	return (
		<form onSubmit={formHandler} noValidate >
			{fieldItems.map(({label, name, type}, index) => <TextField
				key={index}
				variant='outlined'
				color='primary'
				margin='dense'
				fullWidth
				required

				label={label}
				type={type}
				name={name}

				value={fields[name]}
				onChange={(evt) => setFields({...fields, [evt.target.name]: evt.target.value})}

				error={false}
				helperText={''}

			/>)}
			<Button variant='outlined'color='primary'type='submit'>Login</Button>
		</form>
	)
}

export default Login
