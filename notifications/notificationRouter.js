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
router.get('/new', (req, res) => {
    const notification = new Notification(req.body)
    notification.save()
        .then(() => {
            res.status(201).json(notification)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})

// Show one

module.exports = router