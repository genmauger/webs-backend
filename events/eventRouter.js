const express = require('express')
const Event = require('./event')
const router = express.Router()
const mongoose = require('mongoose')
const {authorize} = require('../auth/authMiddleware')

router.get('/', authorize, (req, res) => {
    Event.find().populate('title')
        .then(events => {
            res.status(200).json(events)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })

})


router.patch("/:id", authorize, (req, res, next) => {
    // const id = req.params.productId;
    const id = req.params.id
    
    Event.findByIdAndUpdate({ _id: id },  req.body, {new: true}, function(err, event) {
        if (err) return res.status(500).send(err);
        return res.json(event);
    });
  });
       

router.post('/new', authorize, (req, res) => {

    const event = new Event(req.body)
    event.save()
        .then(() => {
            res.status(201).json(event)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})


router.put('/:id/new', authorize, function (req, res, next) {
    Event.findOne({ _id: req.params.id }, function (err, event) {
        if (err) return next(err);

        event.bookings.push(req.body)

        event.save()
        return res.json(event)
    })

});

router.put('/:id/facnew', authorize, function (req, res, next) {
    Event.findOne({ _id: req.params.id }, function (err, event) {
        if (err) return next(err);

        event.facilitatorObjs.push(req.body)

        event.save()
        return res.json(event)
    })

});

router.put('/:id/:id_sub/facremove', authorize, function (req, res, next) {
    Event.findOne({ _id: req.params.id }, function (err, event) {
        if (err) return next(err);


        for (let i = 0; i < event.facilitatorObjs.length; i++) {
            
            if (event.facilitatorObjs[i]._id == req.params.id_sub) {
                var ind = i
            }
        }
        event.facilitatorObjs[ind].remove()
        event.save()
        return res.json(event)
    })

});

router.put('/:id/:id_sub/remove', authorize, function (req, res, next) {
    Event.findOne({ _id: req.params.id }, function (err, event) {
        if (err) return next(err);


        for (let i = 0; i < event.bookings.length; i++) {
            // console.log(event.bookings[i]._id)
            if (event.bookings[i]._id == req.params.id_sub) {
                var ind = i
            }
        }
        event.bookings[ind].remove()
        event.save()
        return res.json(event)
    })

});

router.delete('/:id', authorize, (req, res) => {
    const id = req.params.id
    Event.findByIdAndRemove(id, function (err, event) {
        if (err) {
            throw err;
        } else {
            res.status(204).json({
                deleted: true
            })
        }
    })
});

module.exports = router