const router = require('express').Router()

const { 
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    updatePassword,
    deleteUser,
    updateEmail,
    updateUserName
} = require ('../controllers/user.controller')

const {
    checkAuth,
    CheckAdmin
} = require('../utils/middlewares')

router.post('/', checkAuth, CheckAdmin, createUser)

router.get('/', checkAuth, getAllUsers)

router.get('/:id', checkAuth, getOneUser)

router.put('/:id', checkAuth, updateUser)

router.patch('/:id', checkAuth, updatePassword)

router.patch('/email/:id', checkAuth, updateEmail)

router.patch('/username/:id', checkAuth, updateUserName)

router.delete('/:id', checkAuth, deleteUser)


module.exports = router