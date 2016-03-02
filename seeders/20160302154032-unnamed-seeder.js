module.exports = {
  up: function (queryInterface, Sequelize) {
    'use strict';
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Company", [
      { name: 'Company 1' },
      { name: 'Company 2' },
      { name: 'Company 3' },
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    'use strict';
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Company', null, {});
  }
};
