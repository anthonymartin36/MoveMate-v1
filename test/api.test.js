var test = require('ava')

var request = require('supertest')
var server = require('../server/server')
var config = require('../knexfile').development

var db = require('knex')(config)

server.set('homeDb', db)

var testPost =
  { job_id: 5018,
  bedrooms: '1',
  externalstairs: '1',
  internalstairs: '1',
  abode: 'House',
  driveway: 'yes',
  parking: 'Yes',
  material: 'www',
  old_address_id: 1001,
  new_address_id: 1002 }


test.cb('API Call: Get /v1', (t)=> {
  request(server)
    .get('/v1')
    .end((err, res) =>{
      //console.log('need the Api calls to work')
      t.is(res.body.length, undefined, 'get no response')
      t.is(res.status, 404, 'Status 404 confirmed')
      //t.pass()
      t.end()
    })
})

test.cb('API Call: Post /v1', (t)=> {
  request(server)
    .post('/v1')
    .send(testPost)
    .end((err, res) =>{
      //console.log(res.body.text)
      t.is(res.body.length, undefined, 'post no response')
      t.is(res.status, 404, 'Status 404 confirmed')
      //t.pass()
      t.end()
    })
})
