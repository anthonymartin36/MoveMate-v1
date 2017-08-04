function getHomes (connection) {
  return connection('home')
}

function putHome (connection, house){
  return connection('home').insert(house)
}

module.exports = {
  getHomes,
  putHome
}
