
# Next + Redux + Express + Mongoose + dotenv + Material-UI
#### This project handle all the things I have learned
	. NodeJS + express
	. MongoDB + Mongoose
	. React 								
		. Loop throw for every repeatable HTML 
		. Dynamically Form handler
	. Redux
		. Remove try/catch block to handling error, instead use `catchAsync` everywhere
		. Redux Toolkit ( createSlice ) handle all the repeadted code 
	. NextJS
	. Material-UI
		. make `alert` & `page loader` globally by Redux


### Add catchAsyn Function everywhere where error can be arise

##### NodeJS: 
	exports.catchAsync = (fn) => (req, res, next) => fn(req, res, next).catch(next)


##### Redux: 
	// Step-1: define this way
	export const catchAsync = (fn, showError ) => (dispatch) => fn(dispatch).catch( err => {
		dispatch( showError(err.message) )
	})

	// Step-2: called this way
	// const login = (fields) => catchAsync( async (dispatch) => {
	// 		dispatch( actions.userLogged( data ))
	// }, actions.failed)



#####	Seeder: 

	$ node server/models/seeder.js --import
	$ node server/models/seeder.js --delete
	$ node server/models/seeder.js


	// error handler for bellow 3 methods
	const catchAsync = (fn) => (data) => fn(data).catch(err => {
		console.error( err )
		process.exit(0)  						
	})

	const importData = catchAsync( async ( data ) => {
		let users = await data
				users = JSON.parse( users )

		await User.create(users)
		console.log('New data added !!!')
		process.exit(0)  						
	})

	

