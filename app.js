const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

const playlist = require('./controller/playlist.js')
router.use('/playlist',playlist.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})


app.listen(3000, () => {
  console.log('服务开启在3000端口号')
})

//mvc  模型，视图，控制