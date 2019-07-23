const router = require('koa-router')()
const Products = require('../dbs/models/products')
router.prefix('/products')



function compareAccount(req,mongo) {
  if(req.username === mongo.username && req.password === mongo.password) {
    return true
  }else {
    return false
  }
}

router.post('/add', async function(ctx, next) {
    let data = ctx.request.body
    let result = await Products.findOne({title:data.title})
    if(result){
        return   ctx.body = {
            code: 50008,
            msg: '该用户名已存在'
        }
    }else {
        let code
        let msg
        const products = new Products({
            title: data.title,
            price: data.price,
            url: data.url,
            desc: data.desc,
            status: 1
                })
        try {
            await products.save()
            code = 20000
            msg = '添加成功'
        } catch (error) {
            code = 50008
            msg = '添加失败，请重试'
        }
        return ctx.body = {
            code,
            msg
        }
    }
})

router.get('/get', async function(ctx, next) {
    const result = await Products.find()
    let code
    try {
        code = 20000
    } catch (error) {
        code = 50008
    }

    return ctx.body = {
        code,
        data:result
    }
})


module.exports = router
