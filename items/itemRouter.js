const express = require('express')
const Item = require('./item')
const router = express.Router()


router.get('/', (req, res) => {
    Item.find()
        .then(items => {
            res.status(200).json(items)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})


router.post('/new', (req, res) => {

    const item = new Item(req.body)
    item.save()
        .then(() => {
            res.status(201).json(item)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})


router.put('/:id/new', function (req, res, next) {
    Item.findOne({ _id: req.params.id }, function (err, item) {
        if (err) return next(err);

        item.bookings.push(req.body)

        item.save()
        return res.json(item)
    })

});

router.put('/:id/:id_sub/remove', function (req, res, next) {
    Item.findOne({ _id: req.params.id }, function (err, item) {
        if (err) return next(err);


        for (let i = 0; i < item.bookings.length; i++) {
            // console.log(item.bookings[i]._id)
            if (item.bookings[i]._id == req.params.id_sub) {
                var ind = i
            }
        }
        item.bookings[ind].remove()
        item.save()
        return res.json(item)
    })

});

module.exports = router