var path = require('path')
var express = require('express')
const passport = require('passport')

var bodyParser = require('body-parser')
var request = require('superagent')
var server = express()
var cors = require('cors')

var home = require('./routes/home')
var users = require('./routes/auth')

server.use(passport.initialize())

//server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.use('/api/v1/auth', users)

server.use('/v1', home)
server.get('/thanks', (req, res) => {
  res.send('<a href="/">Thanks!</a>')
})
server.get('/error', (req, res) => {
  res.send('<a href="/">error!</a>')
})

module.exports = server


// server.get('/v1', function(req, res){
//   request
//     .get("https://oauth.nzpost.co.nz/as/token.oauth2")
//     .query({
//       grant_type: 'client_credentials',
//       client_id: '4f4eeb6996f04eb6bd6b9a3c5191c096',
//       client_secret: '6eABEc6e02A342b785A07b33a05852Fc'
//     })
//     .end((err, response) => {
//       console.log(err, res.text)
//       res.send(err)
//       var token = res.text
//       request
//         .get("https://api.nzpost.co.nz/addresschecker/1.0/find")
//         .query({address_line_1: '150 willis str', type: 'Postal', max: 20, access_token: token} )
//         // .set('Authorization', `Bearer ${token}`)
//         .set('Accept', 'application/json')
//         .end((err, res) => {
//           // console.log(err)
//         })
//     })
//
// })
