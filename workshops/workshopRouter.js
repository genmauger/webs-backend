const express = require('express')
const Workshop = require('./Workshop')
const router = express.Router()


// GET ALL WORKSHOPS
router.get('/', (req, res) => {
    Workshop.find()
    .then(workshops => {
        res.status(200).json(workshops)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

// GET SINGLE WORKSHOP
router.get('/:id', (req, res) => {
    Workshop.findById(req.params.id, function(err, workshop){
        if(err) return res.status(500).send(err.message)
        return res.json(workshop)
    })
})

// ADD WORKSHOP
router.post('/new', (req, res) => {
    const workshop = new Workshop(req.body)
    workshop.save()
    .then(res.status(201).json(workshop))
    .catch(res.status(500).json(err.message))
})

// EDIT WORKSHOP
router.put('/:id', (req, res) => {
    Workshop.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, workshop){
        if(err) return res.status(500).send(err.message)
        return res.json(workshop)
    })
})

router.delete('/:id', (req, res) => {
    Workshop.findByIdAndRemove({_id: req.params.id}, function(err, workshop){
        if(err){
            throw err;
        } else {
            res.status(204).json({
                deleted: true
            })
        }
    })
})