const express = require('express')
const Notification = require('./notification')
const router = express.Router()
const {authorize} = require('../auth/authMiddleware')

// Show all
router.get('/', authorize, (req, res) => {
    Notification.find()
        .then(notifications => {
            res.status(200).json(notifications)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
});



// Show one
router.get('/:id', authorize, (req, res) => {
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

router.post('/new', authorize, (req, res) => {

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
router.get('/:id', authorize, (req, res) => {
    const id = req.params.id
    Notification.findById({ _id: id} )
    .then(notification => {
        res.status(200).json(notification)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

// Update 
router.patch("/:id", authorize, (req, res, next) => {
    // const id = req.params.productId;
    const id = req.params.id
    
    Notification.findByIdAndUpdate({ _id: id },  req.body, {new: true}, function(err, notification) {
        if (err) return res.status(500).send(err);
        return res.json(notification);
    });
  });


module.exports = router