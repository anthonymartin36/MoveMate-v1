
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('job-details', function (table) {
    table.increments('job_details_id');
    table.string('job_id')
    table.integer('bedrooms');
    table.integer('externalstairs');
    table.integer('internalstairs');
    table.string('abode');
    table.string('driveway');
    table.string('parking');
    table.string('material');
    table.integer('old_address_id');
    table.integer('new_address_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('job-details')
};
