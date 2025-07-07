// var express = require('express')
// var morgan = require('morgan')
// var cors = require('cors')
// var helmet = require('helmet')
// var helmet = require('helmet')
// var cookieParser = require('cookie-parser')

// var productRoutes = require('./routes/productsRoutes.js')

// var authMiddleware = require('./middlewares/auth.js')

// let app = express() //server creation

// app.use(express.json()) //parsing body (Built in middleware)
// app.use(express.urlencoded()) //parsing body (Built in middleware)
// app.use(express.static('public')) //parsing body (Built in middleware)
// app.use(morgan('dev'))
// app.use(cors())
// app.use(helmet())
// app.use((cookieParser()))

// app.use(authMiddleware)

// app.use('/api/products', productRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello Express server')
// })

// let port = process.env.PORT || 5000

// app.listen(port, () => {
//   console.log(`Server started in port number ${port}`)
// })

var mongoose = require('mongoose');

var dbURL = 'mongodb://localhost:27017';

// mongoose
//   .connect(dbURL)
//   .then(() => {
//     console.log('db connected successfully');
//   })
//   .catch((err) => {
//     console.log('could not connected with db');
//   });

async function connectWithDb() {
 try {
  await mongoose.connect(dbURL)
  console.log('db connected successfully')
 } catch (error) {
  console.log('cloud not connect with db', error)
 }
}

connectWithDb()
