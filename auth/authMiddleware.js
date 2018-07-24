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
    // req.query req.params.id (23)
    const {email, password} = req.body

    const authed = auth.isAuthenticUser(email, password)
    if(!authed) {
        res.status(401)
        next(new Error('Not authorized!'))
    }

    next()
}

function authorize(req, res, next) {
    // const authHeader = req.get('Authorization')
    // const [,token] = authHeader.split(' ') //['Bearer', '007']

    const token = permit.check(req)
    const jwtSecret = process.env.JWT_SECRET
    JWT.verify(token, jwtSecret, (err, payload) => {
        
        if(err) {
            permit.fail(res)
            throw new Error('You are not authorized')
        }

        // if(payload.bond !== '007') {
        //     permit.fail(res)
        //     throw new Error('You are not authorized')
        // }

        next()
    })


   
}