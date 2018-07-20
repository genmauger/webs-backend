const express = require('express')
const Organisation = require('./organisation')
const router = express.Router()


router.get('/', (req, res) => {
    Organisation.find()
        .then(organisations => {
            res.status(200).json(organisations)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

module.exports = router