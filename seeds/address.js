
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {id: 1, street: '53B Hankey St.', area: 'Mt Cook', town: 'Wellington', postcode: '6011'},
        {id: 2, street: '14A Watson St', area: 'Te Aro', town: 'Wellington', postcode: '6011'}
      ]);
    });
};
