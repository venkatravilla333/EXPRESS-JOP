

var express = require('express')

let app = express() //server creation

app.use(express.json()) //parsing body


var products = [
  {id: 1, name: 'apple', price: 200},
  {id: 2, name: 'banana', price: 50},
  {id: 3, name: 'grape', price: 100}
]

app.get('/', (req, res) => {
  res.send('Hello Express server')
})

//get all products

app.get('/api/products', (req, res) => {
  
  res.send(products)
})

//get single products

app.get('/api/products/:id', (req, res) => {
  let product = products.find((product) => product.id === parseInt(req.params.id))
  if (!product) return res.send('No product with given ID')
  return res.send(product)
})

//create product

app.post('/api/product', (req, res) => {

  let {name, price} = req.body
  
  let product = {
    id: products.length + 1,
    name,
    price
  }
  products.push(product)
  return res.send(products)
})

//update product

app.put('/api/product/:id', (req, res) => {
  let product = products.find((product) => product.id === parseInt(req.params.id))
  if (!product) return res.send('No product with given ID')
  
  product.name = req.body.name
  return res.send(product)
  
})

//delete a product

app.delete('/api/product/:id', (req, res) => {
  let product = products.find((product) => product.id === parseInt(req.params.id))
  if (!product) return res.send('No product with given ID')
  
  var index = products.indexOf(product)

  products.splice(index, 1)

  return res.send('product deleted')
  
})

let port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server started in port number ${port}`)
})