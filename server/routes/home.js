var express = require('express')
var router = express.Router()

var db = require('../db/homeDb.js')

router.post('/', function (req, res) {
  console.log(req.body)
  db.postAddress(req.body)
  res.sendStatus(200)
})

module.exports = router
