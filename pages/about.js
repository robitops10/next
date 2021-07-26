import { useState, useEffect } from 'react'

import { showLoader } from '../store/dialogReducer'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button'

const id = '60fd2a42da43c7731b6ae930'

const About = () => {
	const dispatch = useDispatch()
	const { user } =	useSelector( state => state.user )

	console.log( user )


	const handleButtonClick = async (evt) => {
		dispatch( showLoader() )
	}

	return (
		<>
			<h2>About page</h2>

			<Button onClick={handleButtonClick} variant='outlined'color='primary'>Add User</Button>

		</>
	)
}
export default About


// export const getServerSideProps = async () => {
	// const { data } = await axios.get('api/v1/users')

	// return { props : { data } }
// }
