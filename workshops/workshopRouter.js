const express = require('express')
const Workshop = require('./workshop')
const router = express.Router()


router.get('/', (req, res) => {
    Workshop.find()
        .then(workshops => {
            res.status(200).json(workshops)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})


router.post('/new', (req, res) => {

    const workshop = new Workshop(req.body)
    workshop.save()
        .then(() => {
            res.status(201).json(workshop)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})


router.put('/:id/new', function (req, res, next) {
    Workshop.findOne({ _id: req.params.id }, function (err, workshop) {
        if (err) return next(err);

        workshop.bookings.push(req.body)

        workshop.save()
        return res.json(workshop)
    })

});

router.put('/:id/:id_sub/remove', function (req, res, next) {
    Workshop.findOne({ _id: req.params.id }, function (err, workshop) {
        if (err) return next(err);


        for (let i = 0; i < workshop.bookings.length; i++) {
            // console.log(workshop.bookings[i]._id)
            if (workshop.bookings[i]._id == req.params.id_sub) {
                var ind = i
            }
        }
        workshop.bookings[ind].remove()
        workshop.save()
        return res.json(workshop)
    })

});

module.exports = router