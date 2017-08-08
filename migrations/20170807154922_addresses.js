exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('addresses', function (table) {
    table.increments('id');
    table.string('street');
    table.string('area');
    table.string('town');
    table.string('postcode');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('addresses')
};
