const jwt = require('jsonwebtoken')
const {User} = require('../models/user.model')
const {Shelter} = require('../models/shelter.model')

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send('Token not found')

  jwt.verify(
    req.headers.authorization,
     process.env.JWT_SECRET,
      async (err, result) => {
    if (err) return res.status(401).send('Token not valid')

    if(result.type === 'user'){
      const user = await User.findOne({ where: { email: result.email } })
      if (!user) return res.status(401).send('Token not valid')
      res.locals.user = user
    } 
    if (result.type === 'manager') {
      const shelter = await Shelter.findOne({ where: { email: result.email } })
      if (!shelter) return res.status(401).send('Token not valid')
      res.locals.shelter = shelter
    }
    next() 
  })
}

const CheckAdmin = (req, res, next) => {
    if (res.locals.user.role !== 'admin') {
        return res.status(401).send('User not authorized')
    } else {
        next()
    }
}

module.exports = {
    checkAuth,
    CheckAdmin
}