var server = require('./server')
var config = require('../knexfile').development
var db = require('knex')(config)

server.set('homeDb', db)

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
