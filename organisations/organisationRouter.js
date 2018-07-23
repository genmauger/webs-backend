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
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id
    Organisation.findById(id, 
    function(err, organisation) {
      if (err) return res.status(500).send(err);
      return res.json(organisation);
    }
  )})
});

router.patch('/:id', (req, res, next) => {
  // const id = req.params.productId;
  const id = req.params.id
  
  Organisation.findByIdAndUpdate({ _id: id },  req.body, {new: true}, function(err, organisation) {
      if (err) return res.status(500).send(err);
      return res.json(organisation);
  })
});

router.post('/new', (req, res) => {
 const organisation = new Organisation(req.body)
 organisation.save()
     .then(() => {
         res.status(201).json(organisation)
     })
     .catch(err => {
         res.status(500).json({ err: err.message })
     })
});

//   router.put('/:id/new', function (req, res) {
//     const id = req.params.id
//     Organisation.findOne({ _id: id }), function (err, organisation) {
//       if(err) return res.status(500).send(err);
//       organisation.save()
//       return res.json(organisation)
//     }
//   })


  router.put('/:id/locnew', function (req, res, next) {
    Organisation.findOne({ _id: req.params.id }, function (err, organisation) {
        if (err) return next(err);

        organisation.locations.push(req.body)

        organisation.save()
        return res.json(organisation)
    })

});

router.put('/:id/:id_loc/roomnew', function (req, res, next) {
    Organisation.findOne({ _id: req.params.id }, function (err, organisation) {
        if (err) return next(err);


        for (let i = 0; i < organisation.locations.length; i++) {
            
            if (organisation.locations[i]._id == req.params.id_loc) {
                var ind = i
            }
        }
        organisation.locations[ind].rooms.push(req.body)
        organisation.save()
        return res.json(organisation)
    })

});





router.delete('/:id', (req, res) => {
 const id = req.params.id
 Organisation.findByIdAndRemove(id, function (err, organisation) {
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