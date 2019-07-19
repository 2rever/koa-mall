const router = require('koa-router')()
const Users = require('../dbs/models/users')
router.prefix('/resign')



router.post('/', async function(ctx, next) {
    let data = ctx.request.body
    let result = await Users.findOne({account:data.account})
    if(result){
        return   ctx.body = {
            code: -1,
            msg: '该用户名已存在'
        }
    }else {
        let code
        let msg
        const users = new Users({
            account: data.account,
            password: data.password
                })
        try {
            await users.save()
            code = 0
            msg = '添加成功'
        } catch (error) {
            code = -1
            msg = '添加失败，请重试'
        }
        return ctx.body = {
            code,
            msg
        }
    }
})

router.post('/find', async function(ctx, next) {
    const result = await Users.findOne({ name: ctx.request.body.name })
    let code
    try {
        code = 0
    } catch (error) {
        code = -1
    }

    return ctx.body = {
        code,
        result
    }
})

router.post('/updatePerson', async function(ctx, next) {
    const result = await Users.where({ name: ctx.request.body.name })
        .update({ age: ctx.request.body.age })
    let code
    try {
        code = 0
    } catch (error) {
        code = -1
    }

    return ctx.body = {
        code,
        result
    }
})

router.post('/deletePerson', async function(ctx, next) {
    const result = await Users.where({ name: ctx.request.body.name })
        .remove()
    let code
    try {
        code = 0
    } catch (error) {
        code = -1
    }

    return ctx.body = {
        code,
        result
    }
})

module.exports = router