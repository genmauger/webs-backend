const express = require('express')
const Notification = require('./notification')
const router = express.Router()

<<<<<<< HEAD
// Show all
=======

>>>>>>> 8b4345af35979bc3e297103b9d61b78c5d4a0294
router.get('/', (req, res) => {
    Notification.find()
        .then(notifications => {
            res.status(200).json(notifications)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

<<<<<<< HEAD
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

// Create new notification
router.post('/new', (req, res) => {

    const notification = new Notification(req.body)
    notification.save()
        .then(() => {
            res.status(201).json(notification)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})

// Update 
router.patch("/:id", (req, res, next) => {
    // const id = req.params.productId;
    const id = req.params.id
    
    Notification.findByIdAndUpdate({ _id: id },  req.body, {new: true}, function(err, notification) {
        if (err) return res.status(500).send(err);
        return res.json(notification);
    });
  });


=======
>>>>>>> 8b4345af35979bc3e297103b9d61b78c5d4a0294
module.exports = router