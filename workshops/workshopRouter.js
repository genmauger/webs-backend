const express = require('express')
const Workshop = require('./workshop')
const router = express.Router()

// all our workshops
router.get('/', (req, res) => {
    Workshop.find()
        .then(workshops => {
            res.status(200).json(workshops)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})


module.exports = router