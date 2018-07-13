const mongoose = require('mongoose')

// mongodb+srv://svetos:<PASSWORD>@cluster0-cig9q.mongodb.net/test?retryWrites=true
const url = 'mongodb+srv://cluster0-cig9q.mongodb.net/'
const options = {
    user: 'svetos',
    pass: 'mojtemota',
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