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
  //console.log(req.body)
  var jid = 0;
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
    .then(function (oldId){
      db.postAddress(newAddress)
      .then(function(newId){

        var jobOrder = {
          fullName: req.body.fullName,
          mobile: req.body.mobile,
          email: req.body.email,
          landline: req.body.landline
        }

        db.postJob(jobOrder)
          .then(function(jobId){
            jid = jobId
            console.log('Job ID:' + jid)
            var jobDetails = {
              job_id: jid[0],
              bedrooms: req.body.bedrooms,
              externalstairs: req.body.externalstairs,
              internalstairs: req.body.internalstairs,
              abode: req.body.abode,
              driveway: req.body.driveway,
              parking: req.body.parking,
              material: req.body.material,
              old_address_id: oldId[0],
              new_address_id: newId[0]
            }
            console.log(jobDetails)
            db.postJobDetails(jobDetails)
              .then(function(result){
                  console.log("Hmmm:" + result)
              })
            })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err + 'Server Error ')
    })
})

module.exports = router
