var express = require('express')
var router = express.Router()

var homeDb = require('../db/homeDb')

router.post('/home', (req, res) => {
  var knex = req.app.get('db')
  homeDb.putHome(knex)
    .insert(req.body)
    .then(home => {
      res.json(homes)
    })
    .catch(err => {
      res.sendStatus(500).send(err + ' SERVER ERROR')
    })
})

module.exports = router
