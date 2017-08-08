var express = require('express')
var router = express.Router()

var db = require('../db/homeDb.js')
// var address = {
//   street: ,
//   area: ,
//   town: ,
//   postcode:
// }

router.post('/', function (req, res) {
  console.log(req.body)
  var oldAddress = {
    street: req.body.oldStreet,
    area: req.body.oldArea,
    town: req.body.oldTown,
    postcode: req.body.oldPostcode
  }
  var newAddress = {
    street: req.body.newStreet,
    area: req.body.newArea,
    town: req.body.newTown,
    postcode: req.body.newPostcode
  }
  db.postAddress(oldAddress)
    .then(function (old_id){
      db.postAddress(newAddress)
      .then(function(new_id){
        console.log("Old ID:" + old_id)
        console.log("New ID:" + new_id)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err + 'Server Error ')
    })
})

module.exports = router
