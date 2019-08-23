/*
 * @Author: zhang
 * @Date: 2019-08-23 16:16:09
 * @Last Modified by: zhang
 * @Last Modified time: 2019-08-23 16:22:58
 */



import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

const app = new Koa();
app.use(bodyParser())

// 监听错误信息
app.on('error', function(err, ctx) {
  console.log('server error', err)
})

// 监控端口号3003
app.listen(3003, () => {
  console.log('server is running at http://localhost:3003')
})

export default app
