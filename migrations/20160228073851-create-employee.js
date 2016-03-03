module.exports = {
  up: function(queryInterface, Sequelize) {
    'use strict';
    return queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true  
        }
      },
      position: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        }
      },
      twitter: {
        type: Sequelize.STRING,
      },
      linked_in_url: {
        type: Sequelize.STRING,
        validate: {
          isUrl: true,
        }
      },
      image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    'use strict';
    return queryInterface.dropTable('employees');
  }
};