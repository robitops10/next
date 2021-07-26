
// Step-1: define this way
export const catchAsync = (fn, showError ) => (dispatch) => fn(dispatch).catch( err => {
	dispatch( showError(err.message) )
})

// Step-2: called this way
// const login = (fields) => catchAsync( async (dispatch) => {
// 		dispatch( actions.userLogged( data ))
// }, actions.failed)



