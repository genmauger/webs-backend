const express = require('express')
const Notification = require('./notification')
const router = express.Router()

// Show all
router.get('/', (req, res) => {
    Notification.find()
        .then(notifications => {
            res.status(200).json(notifications)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

// Create new notification


// Show one

module.exports = router