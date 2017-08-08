
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('jobs', function (table) {
    table.increments('job_number');
    table.string('fullName');
    table.string('mobile');
    table.string('email');
    table.string('landline');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('jobs')
};
