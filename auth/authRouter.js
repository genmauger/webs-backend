const express = require('express')
const JWT = require('jsonwebtoken')
const User = require('../users/user')
const JWT_SECRET = process.env.JWT_SECRET
const {logger, authenticate} = require('./authMiddleware')

const router = express.Router()

router.post('/login', logger, authenticate, (req, res) => {

  const {email, password} = req.body

  User.isAuthenticUser(email, password)
    .then(() => {

        const payload = {
          email
        }
    
        const token = JWT.sign(payload, JWT_SECRET)
    
        res.cookie('access_token', token, {
          secure: false,
          httpOnly: true
        })

        res.status(200).json({
          message: 'successful login'
        })

    })
    .catch(err => {
      res.status(500) 
      throw new Error(err.message)
    })

})

router.post('/logout', logger, (req, res) => {
  res.clearCookie('access_token').send({ message: 'Logged out. Bye 😭' })
})

router.post('/register', (req, res) => {
  const { email, password } = req.body

  User.register(email, password)
  .then(user => {
      // TODO: creates a valid cookie

      res.status(200).json(user)
  })
  .catch(err => {
      res.status(500)
      throw new Error(err.message)
  })

})

module.exports = router
