require('dotenv').config() 
const mongoose = require('mongoose')

// mongodb+srv://svetos:<PASSWORD>@cluster0-cig9q.mongodb.net/test?retryWrites=true
//  useNewUrlParser: true, promiseLibrary: global.Promise
<<<<<<< HEAD
// const url = process.env.MONGO_URI
// const options = {
   
//     user: process.env.MONGO_USER,
//     pass: process.env.MONGO_PASS,
//     dbName: process.env.MONGO_DBNAME,
//     promiseLibrary: global.Promise
// }

// mongoose.connect(url, options)
//     .then(() => {
//         console.info(
//             'WEBS mongodb db connection established'
//         )
//     })
//     .catch(err => {
//         console.error(
//             `WEBS mongodb db failure: ${err.message}`
//         )
//     })

mongoose.connect('mongodb://localhost:27017')
=======
const url = process.env.MONGO_URI
const options = {
   
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    dbName: process.env.MONGO_DBNAME,
    promiseLibrary: global.Promise
}

mongoose.connect(url, options)
>>>>>>> 8b4345af35979bc3e297103b9d61b78c5d4a0294
    .then(() => {
        console.info(
            'WEBS mongodb db connection established'
        )
    })
    .catch(err => {
        console.error(
            `WEBS mongodb db failure: ${err.message}`
        )
    })

module.exports = mongoose