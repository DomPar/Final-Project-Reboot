const router = require('express').Router()

const { 
    createUser,
    getAllUsers,
    getOneUser
} = require ('../controllers/user.controller')

router.post('/', createUser)

router.get('/', getAllUsers)

router.get('/:id', getOneUser)


module.exports = router