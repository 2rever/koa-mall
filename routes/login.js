const router = require('koa-router')()
const jwt = require('jsonwebtoken')
router.prefix('/login')



router.post('/',function(ctx,next) {
  const data = ctx.request.body
  console.log(ctx.request.body)
  if(!data.name || !data.password) {
    return ctx.body = {
      code: '000002',
      data: null,
      msg: '参数不合法'
    }
  }
  const result = {
    name: 'admin',
    password: '123456'
  }
  if(data.name === result.name && data.password === result.password) {
    const token  = jwt.sign({
      name: result.name,
      _id: result._id
    },'my_token',{'expiresIn': '2h'})
    return ctx.body = {
      code: '000001',
      data: token,
      msg: '登陆成功'
    }
  } else {
    return ctx.body = {
      code: '000003',
      data: null,
      msg: '用户名或密码错误'
    }
  }
})

module.exports = router
