var knex = require('knex')
var config = require('../../knexfile').test

module.exports = (test, server) => {
  // Create a separate in-memory database before each test.
  // In our tests, we can get at the database as `t.context.db`.
  test.beforeEach(function (t) {
    t.context.connection = knex(config)
    if (server) {
      server.set('homeDb', t.context.connection)
      t.context.app = server
    }
    return t.context.connection.migrate.latest()
      .then(function () {
        return t.context.connection.seed.run()
      })
  })

  // Destroy the database connection after each test.
  test.afterEach(function (t) {
    t.context.connection.destroy()
  })
}
