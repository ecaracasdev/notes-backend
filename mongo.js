const mongoose = require('mongoose')
const { db_password, db_name } = require('./config')
const connectionString = `mongodb+srv://db_user_elias:${db_password}@eliascluster.qrdbb.mongodb.net/${db_name}?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
	useCreateIndex:true,
	useUnifiedTopology:true,
	useFindAndModify:false,
	useNewUrlParser:true
})
	.then(() => {
		console.log('Database ñññconnected')
	})
	.catch(err => {
		console.error(err)
	})