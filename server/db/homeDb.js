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

function getJob(id, db){
  return db('jobs')
  .where('job_number', id)
}

function getJobDetail(id, db){
  return db('job-details')
  .where('job_id', id)
}

module.exports = {
  postAddress,
  postJob,
  postJobDetails,
  getAddresses,
  getJob,
  getJobDetail
}
