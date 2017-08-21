// server/routes/auth.js
const express = require('express')

const {userExists, createUser} = require('../db/users')

const router = express.Router()

router.post('/register', register)

function register (req, res) {
  console.log("Username", req.body.username)
  userExists(req.body.username, req.app.get('db'))
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      createUser(req.body.username, req.body.password, req.app.get('db'))
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

module.exports = router
