const express = require('express')
const Notification = require('./notification')
const router = express.Router()


router.get('/', (req, res) => {
    Notification.find()
        .then(notifications => {
            res.status(200).json(notifications)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
});

router.post('/new', (req, res) => {

    const notification = new Notification(req.body)
    notification.save()
        .then(() => {
            res.status(201).json(notification)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
});

// Show one
router.get('/:id', (req, res) => {
    const id = req.params.id
    Notification.findById({ _id: id} )
    .then(notification => {
        res.status(200).json(notification)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})


module.exports = router