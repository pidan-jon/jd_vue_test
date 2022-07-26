//服务器
const Koa = require('koa');
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router()
const bodyparser = new BodyParser();

app.use(bodyparser);

const apirouter = require('./router/index.js')
app.use(router.routes()).use(router.allowedMethods())//返回路径对应路由
app.use(apirouter.routes())

app.use(async (ctx,next)=>{
    await next();
    ctx.response.type='text/html';
    ctx.response.body='Hello,server!'
});

app.listen(3000);
console.log('listen port 3000...')
console.log('http://localhost:3000')