var express = require('express')
// var morgan = require('morgan')
// var cors = require('cors')
// var helmet = require('helmet')
// var helmet = require('helmet')
// var cookieParser = require('cookie-parser')

var productRoutes = require('./routes/productsRoutes.js')
var userRoutes = require('./routes/userRoutes.js')

// var authMiddleware = require('./middlewares/auth.js')

let app = express() //server creation

app.use(express.json()) //parsing body (Built in middleware)
// app.use(express.urlencoded()) //parsing body (Built in middleware)
// app.use(express.static('public')) //parsing body (Built in middleware)
// app.use(morgan('dev'))
// app.use(cors())
// app.use(helmet())
// app.use((cookieParser()))

// app.use(authMiddleware)

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello Express server')
// })

let port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server started in port number ${port}`)
})

var mongoose = require('mongoose');

// var dbURL = 'mongodb://localhost:27017/Eshop-db';
var dbURL =
  'mongodb+srv://reyansoft:reyansoft@cluster0.rvqpzjn.mongodb.net/Eshop-db';

let Product = require('./models/productModel');

// mongoose
//   .connect(dbURL)
//   .then(() => {
//     console.log('db connected successfully');
//   })
//   .catch((err) => {
//     console.log('could not connected with db');
//   });

// async function sendProduct() {
// let product =  new Product({
//     name: 'banana',
//     price: 40,
//     stock: false,
//     manufacturer: 'kohli'
// })
//   let res = await product.save()

// var newproduct = {
//   name: 'samsung mobile',
//   price: 10000,
//   stock: true,
//   manufacturer: 'samsung'

// }

//  let product = await Product.create(newproduct)
//   let products = await Product.insertMany([{
//    name: 'lenova laptop',
//    price: 40000,
//    stock: true,
//    manufacturer: 'lenova'
//   }, {
//     name: 'dell laptop',
//     price: 50000,
//     stock: false,
//     manufacturer: 'dell'
//  }])
//   console.log(products)
// }

// sendProduct()

// async function getProducts() {

//   var pageNumber = 2
//   var resPerPage = 3

//   let products = await Product.find()
//     // .find({price: {$nin: [40000, 50000]}})
//     // .find({name: { $regex: /.*mobile.*/i}})
//     // .or({price: [10000, 40]})
//     // .and({price: [10000, 40]})
//     // .sort({name: 1})
//     // .select({ name: 1 })
//     // .skip((pageNumber - 1)*resPerPage)
//     // .limit(resPerPage)
//     // .countDocuments()
//   console.log(products);
// }

// getProducts();

// async function updateProduct(id) {

//   let product = await Product.findByIdAndUpdate(id, {
//     $set: {
//         price: 35000
//       }
//     }, {new: true})

//   //   product.price = 20000
//   //   product.stock = false

//   // let res = await product.save()
//   console.log(product)

//     }
// updateProduct('686cfdde98a9efac5d8a3984')

// async function deleteProduct(id) {
//   let res = await Product.deleteMany({stock: false});
//   console.log(res);
// }
// // deleteProduct('686cd4eadc17bd75907dc517');
// deleteProduct();

async function connectWithDb() {
  try {
    await mongoose.connect(dbURL);
    console.log('db connected successfully');
  } catch (error) {
    console.log('cloud not connect with db', error);
  }
}

connectWithDb();
