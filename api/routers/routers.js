const express = require('express')
const router = express.Router()

const userRouter = require('./user.router')
const postRouter = require('./post.router')


router.use('/user', userRouter)
router.use('/post', postRouter)

module.exports = router
