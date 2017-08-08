var config = require('../../knexfile').development
var db = require('knex')(config)


function getAddresses(){
  return db('addresses')
}

function postAddress(address){
  return db('addresses').insert(address)
}

module.exports = {
  postAddress
}
