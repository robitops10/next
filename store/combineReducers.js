import { combineReducers } from 'redux'
import userReducer from './userReducer'
import dialogReducer from './dialogReducer'

export default combineReducers({
	user: userReducer,
	dialog: dialogReducer,
})


