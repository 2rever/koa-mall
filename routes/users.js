const router = require('koa-router')()
const jwt = require('jsonwebtoken')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = {
    name: '麦克',
    age: 26,
    address: 'lcsc'
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})


module.exports = router
