const {User} = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signup(req, res) {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT))
        const hash = bcrypt.hashSync(req.body.password, salt)
        req.body.password = hash
        const user = await User.create(req.body, {
            fields: ['name', 'userName', 'email', 'password','role', 'followers']
        })
        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn: '3h'})

        return res
            .status(200)
            .json({
                message: 'User created',
                result: token
            })
    } catch (error) {
        res.status(500).json({
            message: 'Error signing up',
            result: error 
            })
    }
}

async function login(req, res) {
    try {
      console.log(req.body)
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })
  
      if (!user) return res.status(404).send('Error: Email or Password incorrect')
          
        const comparePass = bcrypt.compareSync(req.body.password, user.password)
          
        if (comparePass) {
            const payload = { email: user.email}
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' })
            return res.status(200).json({
                message: "Login succesful",
                result: token })
        } else {
            return res.status(404).json('Error: Email or Password incorrect')
      }
    } catch (error) {
        res.status(500).json({
            message: 'Error signing up',
            result: error 
            })
    }
  }
module.exports = {
    signup,
    login
}