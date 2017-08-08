var express = require('express')
var router = express.Router()

var db = require('../db/homeDb.js')

router.post('/', function (req, res) {
  db.postAddress(req.body)
  res.sendStatus(200)
})

module.exports = router
