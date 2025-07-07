var express = require('express')

var router = express.Router()



var products = [
  {id: 1, name: 'apple', price: 200},
  {id: 2, name: 'banana', price: 50},
  {id: 3, name: 'grape', price: 100}
]
//get all products

router.get('/', (req, res) => {
  res.send(products)
})

//get single products

router.get('/:id', (req, res) => {
  let product = products.find((product) => product.id === parseInt(req.params.id))
  if (!product) return res.send('No product with given ID')
  return res.send(product)
})

//create product

router.post('/', (req, res) => {

  let { name, price } = req.body
  console.log(req.body)
  
  let product = {
    id: products.length + 1,
    name,
    price
  }
  products.push(product)
  return res.send(products)
})

//update product

router.put('/:id', (req, res) => {
  let product = products.find((product) => product.id === parseInt(req.params.id))
  if (!product) return res.send('No product with given ID')
  
  product.name = req.body.name
  return res.send(product)
  
})

//delete a product

router.delete('/:id', (req, res) => {
  let product = products.find((product) => product.id === parseInt(req.params.id))
  if (!product) return res.send('No product with given ID')
  
  var index = products.indexOf(product)

  products.splice(index, 1)

  return res.send('product deleted')
  
})


module.exports = router