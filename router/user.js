const express = require('express')

const router = express.Router()

// 注册
router.post('/reguser', (req, res) => {
  res.send('resuser OK')
})

// 登陆
router.post('/login', (req, res) => {
  res.send('login OK')
})

module.exports = router