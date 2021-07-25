require('dotenv').config()  							// load environment variable

const next = require('next')
const express = require('express')
const database = require('./models/database')

const userRouter = require('./routes/userRoute')


const app = next({ dev: process.env.NODE_ENV !== 'production'})
const handler = app.getRequestHandler()


app.prepare().then(() => {
	const server = express()

	// handle common middleware here
	server.use(express.json())

	// handle route middleware here
	server.use('/api/v1/users', userRouter)
	

	// handle NextJS middleware here 
	server.get('*', handler )
	server.use( handler )



	// handle error here



	// start server on port 3000 on locally
	const { PORT = 3000 } = process.env
	server.listen( PORT, async (err) => {
		if( err ) throw err

		const { connection } = await database()
		console.log(`Server running on ${connection.host} port: ${PORT} database successful!!!`)

	})
}).catch(console.error)
