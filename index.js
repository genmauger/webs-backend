const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()

const itemRouter = require('./items/itemRouter')
// const authRouter = require('./auth/authRouter')

const PORT = 3000
app.use(bodyParser.json())
// app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true 
 }
app.use(cors(corsOptions))

app.use('/items', itemRouter)
// app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.info(`server listening on port ${PORT}`)
})