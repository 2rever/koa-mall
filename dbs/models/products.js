const mongoose = require('../db')
let usersSchema = new mongoose.Schema({ 
    title: String,
    price: Number,
    url: String,
    desc: String,
    status: Number,
    type:Number
    })

module.exports = mongoose.model('products', usersSchema,'products')