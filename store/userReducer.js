import { createSlice } from '@reduxjs/toolkit'
import { catchAsync } from './util'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'


const { reducer, actions } = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		loginRequested: (state, action) => ({
			...state, loading: true, user: {}
		}),	
		userLogged: (state, action) => ({
			...state, loading: false, user: action.payload.user 
		}),
		failed: (state, action) => ({
			...state, loading: false, user: {}, error: action.payload
		}),


	}
})
export default reducer


export const login = (fields) => catchAsync( async (dispatch) => {
		const { data } = await axios.post('/api/v1/users/login', fields)

		dispatch( actions.loginRequested() )
		dispatch( actions.userLogged( data ))
}, actions.failed)


