
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job-details').del()
    .then(function () {
      // Inserts seed entries
      return knex('job-details').insert([
        {
          job_details_id: 24,
          job_id: 1004,
          bedrooms: 2,
          externalstairs: 2,
          internalstairs: 3,
          abode: 'Apartment',
          driveway: 'yes',
          parking: 'rowValue2',
          material: 'I have a lot of material',
          old_address_id: 1,
          new_address_id: 2
        }
      ]);
    });
};
//
// table.increments('job_details_id');
// table.integer('job_id')
// table.integer('bedrooms');
// table.integer('externalstairs');
// table.integer('internalstairs');
// table.string('abode');
// table.string('driveway');
// table.string('parking');
// table.string('material');
// table.integer('old_address_id');
// table.integer('new_address_id');
