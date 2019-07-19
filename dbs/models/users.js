const mongoose = require('../db')
let usersSchema = new mongoose.Schema({ 
    account: String,
    password: String 
    })

module.exports = mongoose.model('users', usersSchema,'users')