const express = require('express')
const User = require('./user')
const router = express.Router()


router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.get('/:email', (req, res) => {
    const email = req.params.email
    User.findOne({email: email})
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.post('/new', (req, res) => {

    const user = new User(req.body)
    user.save()
        .then(() => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})

router.patch("/:id", (req, res, next) => {
    // const id = req.params.productId;
    const id = req.params.id
    
    User.findByIdAndUpdate({ _id: id },  req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send(err);
        return res.json(user);
    });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndRemove(id, function (err, user) {
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