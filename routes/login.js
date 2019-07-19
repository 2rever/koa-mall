const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const Users = require('../dbs/models/users')
router.prefix('/login')



function compareAccount(req,mongo) {
  if(req.username === mongo.username && req.password === mongo.password) {
    return true
  }else {
    return false
  }
}
router.post('/', async function(ctx, next) {
    let data = ctx.request.body
    let result = await Users.findOne({username:data.username})
    if(!result || !compareAccount(data,result)) {
      return ctx.body = {
        code: 50008,
        msg: '用户名或密码错误'
      }
    }else{
        return   ctx.body = {
            token: 'sff',
            code: 20000,
            msg: '登陆成功'
        }
    }
})

// router.post('/',function(ctx,next) {
//   const data = ctx.request.body
//   console.log(ctx.request.body)
//   if(!data.name || !data.password) {
//     return ctx.body = {
//       code: '000002',
//       data: null,
//       msg: '参数不合法'
//     }
//   }
//   const result = {
//     name: 'admin',
//     password: '123456'
//   }
//   if(data.name === result.name && data.password === result.password) {
//     const token  = jwt.sign({
//       name: result.name,
//       _id: result._id
//     },'my_token',{'expiresIn': '2h'})
//     return ctx.body = {
//       code: '000001',
//       data: token,
//       msg: '登陆成功'
//     }
//   } else {
//     return ctx.body = {
//       code: '000003',
//       data: null,
//       msg: '用户名或密码错误'
//     }
//   }
// })


module.exports = router
