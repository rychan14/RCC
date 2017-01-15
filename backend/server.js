import Koa from 'koa'
import send from 'koa-send'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) =>
  await send(ctx, 'index.html', {root: 'dist/public/'})
)

app
  .use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms, Status: ${ctx.response.status}`)
  })
  .use(router.routes())
  .use(async (ctx, next) => {
    await send(ctx, ctx.path, {root: 'dist/public/'})
  })

app.listen(3000, () => {
  console.log('listening on 3000')
})
