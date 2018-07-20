const express = require('express')
const Organisation = require('./organisation')
const router = express.Router()


router.get('/', (req, res) => {
    Organisation.find()
        .then(organisations => {
            res.status(200).json(organisations)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.patch("/:id", (req, res, next) => {
  const id = req.params.id

  Organisation.findByIdAndUpdate({_id: id}, req.body,{new: true}, function(err, event){
    if(err) return res.status(500).send(err);
    return res.body.json(Organisation);
  })
})

module.exports = router