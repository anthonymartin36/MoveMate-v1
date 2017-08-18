var express = require('express')
var router = express.Router()

var db = require('../db/homeDb.js')

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

  db.postAddress(oldAddress, req.app.get('homeDb'))
    .then(function (oldId){
      db.postAddress(newAddress, req.app.get('homeDb'))
      .then(function(newId){

        var jobOrder = {
          fullName: req.body.fullName,
          mobile: req.body.mobile,
          email: req.body.email,
          landline: req.body.landline
        }

        db.postJob(jobOrder, req.app.get('homeDb'))
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
            db.postJobDetails(jobDetails, req.app.get('homeDb'))
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

router.get('/:id', function (req, res) {

  db.getJob(req.params.id, req.app.get('homeDb'))
    .then(function(data){
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err + 'Server Error ')
    })
    .getJobDetail(req.params.id, req.app.get('homeDb'))
    .then(function(data){
      res.json(data)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err + 'Server Error ')
    })
})

module.exports = router
