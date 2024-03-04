const router = require('express').Router()

const { 
    signup,
    login,
    signupShelter
} = require ('../controllers/auth.controller')

router.post('/signup', signup)
router.post('/signupshelter/signup', signupShelter)
router.post('/login', login)


module.exports = router