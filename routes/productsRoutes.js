var express = require('express')

var router = express.Router()
var Product = require('../models/productModel')



// var products = [
//   {id: 1, name: 'apple', price: 200},
//   {id: 2, name: 'banana', price: 50},
//   {id: 3, name: 'grape', price: 100}
// ]

//get all products

router.get('/', async (req, res) => {
 var products = await Product.find()
  return res.send(products)
})

//get single products

router.get('/:id', async(req, res) => {
  // let product = products.find((product) => product.id === parseInt(req.params.id))
  var id = req.params.id
  var product = await Product.findById(id)
  if (!product) return res.send('No product with given ID')
  return res.send(product)
})

//create product

router.post('/', async(req, res) => {

  let { name, category, price, stock, manufacturer } = req.body
  console.log(req.body)
  
  let newproduct = {
    // id: products.length + 1,
    name,
    category,
    price,
    stock,
    manufacturer
  }
  // products.push(product)
  try {
    var product = await Product.create(newproduct)
    return res.send(product)
  } catch (err) {
    console.log(err)
  }
})

//update product

router.put('/:id', async(req, res) => {
  // let product = products.find((product) => product.id === parseInt(req.params.id))
 var id = req.params.id
    let product = await Product.findByIdAndUpdate(id, {
    $set: {
        price: 2000
      }
    }, {new: true})

  if (!product) return res.send('No product with given ID')
  
  // product.name = req.body.name
  return res.send(product)
  
})

//delete a product

router.delete('/:id', async(req, res) => {
  // let product = products.find((product) => product.id === parseInt(req.params.id))
  var id = req.params.id
  var product = await Product.findByIdAndDelete(id)
  if (!product) return res.send('No product with given ID')
  
  // var index = products.indexOf(product)

  // products.splice(index, 1)

  return res.send('product deleted')
  
})


module.exports = router