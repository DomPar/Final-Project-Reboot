const {Post} = require ('../models/post.model')
const bcrypt = require ('bcrypt')
const {User} = require ('../models/user.model.js')

const createPost = async (req, res) => {
    
    try {
        const {dataValues} = res.locals.user
      
        const {media, title, description} = req.body
        const post = await Post.create({
            title,
            media,
            description,
            userId: dataValues.id
        })  
        res.status(200).json({
            message: 'Post created',
            result: post
        })      
    } catch (error) {
       res.status(500).json({
        message: 'Error creating Post',
        result: error 
        })
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({include: User})
        posts.sort((a,b) => b.id - a.id);
        res.status(200).json({
            message: 'Here are the Posts',
            result: posts
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting Posts',
            result: error 
            })
    }
}

const getAllPostsById = async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: {
                userId: req.params.userId,
            }
        })
        res.status(200).json({
            message: 'Here are the Posts',
            result: posts
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting Posts',
            result: error 
            })
    }
}

const getOnePost = async (req, res) => {
    try {
        const posts = await Post.findByPk(req.params.id, {
            include: User
        })

        res.status(200).json({
            message: 'Here is the Post',
            result: posts
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting one Post',
            result: error 
            })
    }
}

const updatePost = async (req, res) => {
    try {
        const [post] = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if(!post) {
            return res.status(404).send('Post not found')
        } else {
        res.status(200).json({
            message: 'Post updated succesfully',
            result: req.body
        }) 
    }
    } catch (error) {
        res.status(500).json({
            message: 'Error updating Post',
            result: error 
            })
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        if(!post) {
            return res.status(404).send('Post not found')
        } else {
        res.status(200).json({
            message: 'Post deleted succesfully',
            result: post
        }) 
    }

    } catch (error) {
        res.status(500).json({
            message: 'Error updating Post',
            result: error 
            })
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getOnePost,
    updatePost,
    deletePost,
    getAllPostsById
}
