const express = require('express')
const router = express.Router()


const userRouter = require('./user.router')
const postRouter = require('./post.router')
const shelterRouter = require('./shelter.router')
const authRouter = require('./auth.router')
const petRouter = require('./pet.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/shelter', shelterRouter)
router.use('/pet', petRouter)

module.exports = router
