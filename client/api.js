import request from 'superagent'

var requestUrl = 'http://localhost:3000/'


export function insertAddress (job, callback) {
  console.log("Job Details" + job)
  request
    .post(requestUrl+'v1')
    .send(job)
    .end((err, res) => {
      if (err) {
        callback(err)
        document.location = '/error'
      } else {
        document.location = '/thanks'
        callback(null)
      }
    })
}
