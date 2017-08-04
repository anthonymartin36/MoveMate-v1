import request from 'superagent'

var requestUrl = 'http://localhost:3000/'

export function requestCats(callback) {
  request
    .get(requestUrl + '/home')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}
