const router = require('koa-router')()
const Person = require('../dbs/models/person')
router.prefix('/resign')



router.post('/', async function(ctx, next) {
    const person = new Person({
        name: ctx.request.body.name,
        age: ctx.request.body.age
    })
    let code
    try {
        await person.save()
        code = 0
    } catch (error) {
        code = -1
    }

    return ctx.body = {
        code
    }
})

router.post('/getPerson', async function(ctx, next) {
    const result = await Person.findOne({ name: ctx.request.body.name })
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
    const result = await Person.where({ name: ctx.request.body.name })
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
    const result = await Person.where({ name: ctx.request.body.name })
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