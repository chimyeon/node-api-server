const express = require('express')

const app = express()
// 配置中间件
const cors = require('cors')

const router = require('./router/user')

app.use(cors())
// 配置解析表单中间件
app.use(express.urlencoded({ extended: false }))
// 路由注册
app.use('/api', router)

app.listen(3007, () => {
  console.log('the api server is running at http://127.0.0.1:3007')
})


