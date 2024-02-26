const router = require('express').Router()

const { 
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    updatePassword,
    deleteUser
} = require ('../controllers/user.controller')

router.post('/', createUser)

router.get('/', getAllUsers)

router.get('/:id', getOneUser)

router.put('/:id', updateUser)

router.patch('/:id', updatePassword)

router.delete('/:id', deleteUser)


module.exports = router