import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'


const { reducer, actions } = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		userCreated: (state, action) => ({...state, user: action.payload })
	},

})
export default reducer



export const getUserById = (id) => async (dispatch) => {

	const { data } = await axios.get(`/api/v1/users/${id}`)

	dispatch(actions.userCreated(data.user))
}
