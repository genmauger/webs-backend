const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()

const eventRouter = require('./events/eventRouter')
const organisationRouter = require('./organisations/organisationRouter')
const notificationRouter = require('./notifications/notificationRouter')
const userRouter = require('./users/userRouter')
// const authRouter = require('./auth/authRouter')

const PORT = 3000
app.use(bodyParser.json())
<<<<<<< HEAD
=======
// app.use(cookieParser())
>>>>>>> 8b4345af35979bc3e297103b9d61b78c5d4a0294


// var whitelist = ['https://redhillwebs.com.au', 'http://localhost:3000', 'http://localhost:3001']
// var corsOptions = {
//     credentials: true,
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

const corsOptions = {
<<<<<<< HEAD
    origin: '*',
=======
    origin: 'http://localhost:3000',
>>>>>>> 8b4345af35979bc3e297103b9d61b78c5d4a0294
    credentials: true
}

app.use(cors(corsOptions))

app.use('/events', eventRouter)
app.use('/organisations', organisationRouter)
app.use('/notifications', notificationRouter)
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.info(`server listening on port ${PORT} - ${process.env.MONGO_URI}`)
})