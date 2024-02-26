const {User} = require ('../models/user.model')
const bcrypt = require ('bcrypt')


const createUser = async (req, res) => {

    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT))
        const hash = bcrypt.hashSync(req.body.password, salt)
        req.body.password = hash


        const user = await User.create(req.body)  
        res.status(200).json({
            message: 'User created',
            result: user
        })      
    } catch (error) {
       res.status(500).json({
        message: 'Error creating user',
        result: error 
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json({
            message: 'Here are the Users',
            result: users
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting users',
            result: error 
            })
    }
}

const getOneUser = async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id)
        res.status(200).json({
            message: 'Here is the User',
            result: users
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Error getting one user',
            result: error 
            })
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getOneUser
}