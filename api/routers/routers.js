const express = require('express')
const router = express.Router()

const userRouter = require('./user.router')
const postRouter = require('./post.router')
const shelterRouter = require('./shelter.router')


router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/shelter', shelterRouter)

module.exports = router
