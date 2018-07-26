const auth = require('../users/user')
const { Bearer } = require('permit')
const JWT = require('jsonwebtoken')

const permit = new Bearer({
  query: 'access_token',
})


module.exports = {
    logger,
    authenticate,
    authorize
}


function logger(req, res, next){
  console.log(new Date(), req.method, req.url)
  next()
}

function authenticate(req, res, next) {

    const {email, password} = req.body
    console.log("email: " + email)

    const authed = auth.isAuthenticUser(email, password)
    
    if(!authed) {
        res.status(401)
        next(new Error('Not authorized!'))
    }

    next()
}

function authorize(req, res, next) {
    console.log("token:" + req.cookies.access_token)

    const token = req.cookies.access_token
    // const token = permit.check(req)
    console.log('Here is the token:' + token)

    const jwtSecret = process.env.JWT_SECRET
    JWT.verify(token, jwtSecret, (err, payload) => {
        
        if(err) {
            console.log(err)
            permit.fail(res)
            throw new Error('You are not authorized')
        }

        next()
    })
}