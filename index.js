const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const config = require('./config')

app.use(cors())
app.use(express.json())

// eslint-disable-next-line no-unused-vars
app.get('/', (req, res) => {
	res.send('<h1>Hello from my first deployed api </h1>')
})

app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`)
})