

var express = require('express')

var router = express.Router()
var User = require('../models/userModel')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
const authentication = require('../middlewares/auth')


//user register

router.post('/register', async(req, res) => {

  let {name, email, password} = req.body
  console.log(req.body)
    
  var salt = await bcrypt.genSalt(10)
  console.log(salt)

  var hashedPassword = await bcrypt.hash(password, salt)
  console.log(hashedPassword)
  
  let newUser = {
    name,
    email,
    password: hashedPassword
  }
 
  try {
    var user = await User.create(newUser)
    return res.send(user)
  } catch (err) {
    console.log(err)
  }
})


//user login
router.post('/login', async(req, res) => {
  
  try {
  // let {email, password} = req.body
  console.log(req.body)

    var user = await User.findOne({ email: req.body.email })
    
  if (!user) {
    return res.status(400).send('Credentials invalid')
  } 
  
  var isSamePassword = await bcrypt.compare(req.body.password, user.password)

  if (!isSamePassword) {
    return  res.status(400).send('Password is incorrect')
    }
  
    var token = await jwt.sign({ _id: user._id }, 'secrete')
    console.log(token)

    return res.send({token: token},'Login success', )
    
  } catch (err) {
    console.log(err)
  }
})

//ptv Route

router.get('/profile', authentication, (req, res) => {
  const user = req.user;

  console.log('profile accessed');
  return res.send(user); // sends user info (e.g., _id, email, etc.)
});

module.exports = router


