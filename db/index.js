const mongoose = require('./db')
const Schema  = mongoose.Schema

const ceshiSchema = new Schema({
    name: String,
    age: Number,
    address: String,
    tel: Number
})

const MyModel = mongoose.model('user',ceshiSchema)

class Mongodb {
    constructor () {

    }
    query() {
        return new Promise((resolve,reject) => {
            MyModel.find({},(err,res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
    save(obj) {
        const m = new MyModel(obj)
        return new Promise((resolve,reject) => {
            m.save((err,res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}

module.exports = new Mongodb()