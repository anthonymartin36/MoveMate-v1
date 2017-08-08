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
  db.postAddress(oldAddress)
    .then( () => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err + 'Server Error ')
    })
})

module.exports = router
