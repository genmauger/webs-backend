require('dotenv').config() 
const mongoose = require('mongoose')

// mongodb+srv://svetos:<PASSWORD>@cluster0-cig9q.mongodb.net/test?retryWrites=true
//  useNewUrlParser: true, promiseLibrary: global.Promise
const url = process.env.MONGO_URI
const options = {
   
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    dbName: 'webs_db',
    promiseLibrary: global.Promise
}

mongoose.connect(url, options)
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