var express = require('express')
var router = express.Router()

var db = require('../db/homeDb.js')

router.post('/', function (req, res) {
  console.log(req.body)
  db.postAddress(req.body)
    .then( ()=> {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err + 'Server Error ')
    })
})

module.exports = router
