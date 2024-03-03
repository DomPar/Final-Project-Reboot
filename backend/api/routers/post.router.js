const router = require('express').Router()
const {
    checkAuth,
    CheckAdmin
} = require('../utils/middlewares')
const { 
    createPost,
    getAllPosts,
    getOnePost,
    updatePost,
    deletePost
} = require ('../controllers/post.controller')

router.post('/', checkAuth, createPost)

router.get('/', getAllPosts)

router.get('/:id', getOnePost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

module.exports = router