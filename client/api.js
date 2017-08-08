import request from 'superagent'

var requestUrl = 'http://localhost:3000/'


export function insertAddress (newHome, callback) {
  request
    .post(requestUrl)
    .send(newHome)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}
