const mongoose = require('../db')
let usersSchema = new mongoose.Schema({ 
    username: String,
    password: String 
    })

module.exports = mongoose.model('users', usersSchema,'users')