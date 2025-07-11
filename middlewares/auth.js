

var jwt = require('jsonwebtoken')
const User = require('../models/userModel')

async function authentication(req, res, next) {
  
  var token = req.header('token')
  console.log('token in auth file', token)

   if (!token) {
    return res.status(401).send('No token found');
  }

  try {
    const decoded = jwt.verify(token, 'secrete'); // correct usage ✅
    const user = await User.findById(decoded._id).select('-password');
    if (!user) {
      return res.status(401).send('User not found');
    }

    req.user = user; // Full user object without password
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).send('Invalid token');
  }

  next()
}

module.exports = authentication