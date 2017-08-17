function getAddresses(db){
  return db('addresses')
}

function postAddress(address, db){
  return db('addresses').insert(address)
}

function postJob(job, db){
  return db('jobs').insert(job)
}

function postJobDetails(jobDets, db){
  return db('job-details').insert(jobDets)
}
module.exports = {
  postAddress,
  postJob,
  postJobDetails,
  getAddresses
}
