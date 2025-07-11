const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // minLength: 3,
    // maxLength: 6,
    trim: true,
    // lowercase: true
    uppercase: true
  },
  // email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  price: {
    type: Number,
    // min: 10,
    // max: 10000,
    // default: 1000
  //   validate: {
  //     validator: (value) => {
  //       return value > 0
  //     },
  //     message: 'Price must be morethan 0'
  //  }
  //   validate: {
  //     validator: async(email) => {
  //       var userExist = await Product.findOne({ email: email })
  //       return !userExist
  //     },
  //     message: 'User already exist'
  //  }
   
  },
  category: {
    type: String,
    enum: ['cloths', 'electronics'],
    required: true

  },

  stock: Boolean,
  manufacturer: String
}, { timestamps: true })

let Product = mongoose.model('product', productSchema)

module.exports = Product


