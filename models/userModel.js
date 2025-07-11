let mongoose  = require("mongoose");


let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true 
  }
})

var User = mongoose.model('user', userSchema)

module.exports = User