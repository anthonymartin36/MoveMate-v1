var config = require('../../knexfile').development
var db = require('knex')(config)


function getAddresses(){
  return db('addresses')
}

function postAddress(address){
  return db('addresses').insert(address)
}

function postJob(job){
  return db('jobs').insert(job)
}

function postJobDetails(jobDets){
  return db('job-details').insert(jobDets)
}
module.exports = {
  postAddress,
  postJob,
  postJobDetails 
}
