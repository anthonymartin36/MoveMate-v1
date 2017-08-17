var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var server = require('../server/server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, server)

test.cb('DB Connect: Address table and test Seed', (t) => {
  //console.log("t, dumbass :" + t[0])
  var db = t.context.connection
    db('addresses').then(function(seed){
      t.is(seed.length, 2)
      t.end()
    })
})

test.cb('DB Connect: Job table and test Seed', (t) => {
  //console.log("t, dumbass :" + t[0])
  var db = t.context.connection
    db('jobs').then(function(seed){
      t.is(seed.length, 1)
      t.end()
    })
})

test.cb('DB Connect: job-details table and test Seed', (t) => {
  //console.log("t, dumbass :" + t[0])
  var db = t.context.connection
    db('job-details').then(function(seed){
      t.is(seed.length, 1)
      t.end()
    })
})

//https://github.com/avajs/ava
