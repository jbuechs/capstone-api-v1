module.exports = {
  up: function (queryInterface, Sequelize) {
    'use strict';
    return queryInterface.addColumn('employees', 'companyId', {
      type: Sequelize.INTEGER,
      model: 'companies',
      key: 'id',
    });
  },

  down: function (queryInterface, Sequelize) {
    'use strict';
    return queryInterface.removeColumn('employees', 'companyId');
  }
};
