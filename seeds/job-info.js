
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {job_number: 1004, fullName: 'Anthony Martin', mobile: '0220944124', email: 'anthony.martin36@gmail.com', landline: '045777328'}
      ]);
    });
};

//
// table.increments('job_number');
// table.string('fullName');
// table.string('mobile');
// table.string('email');
// table.string('landline');
// table.integer('job_details_id');
