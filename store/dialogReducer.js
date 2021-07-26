import { createSlice } from '@reduxjs/toolkit'
import { catchAsync } from './util'

const { reducer, actions } = createSlice({
	name: 'dialog',
	initialState: {
		loader: false
	},
	reducers: {
		showedLoader: (state, action) => ({ ...state, loader: action.payload.open }),
		hiddenLoader: (state, action) => ({ ...state, loader: action.payload.open }),
		failed: (state, action) => ({ ...state, error: action.payload }),
	}
})
export default reducer


export const showLoader = () => catchAsync(async (dispatch) => {
	dispatch(actions.showedLoader({open: true}))
}, actions.failed)

export const hideLoader = () => catchAsync(async (dispatch) => {
	dispatch(actions.hiddenLoader({open: false}))
}, actions.failed)

