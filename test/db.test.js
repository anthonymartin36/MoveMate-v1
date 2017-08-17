var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var server = require('../server/server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, server)

test.cb('connect to the Address table and test the seed', (t) => {
  //console.log("t, dumbass :" + t[0])
  var db = t.context.connection
    db('addresses').then(function(seed){
      t.is(seed.length, 2)
      t.end()
    })
})


//https://github.com/avajs/ava
