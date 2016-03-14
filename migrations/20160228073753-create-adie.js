module.exports = {
  up: function(queryInterface, Sequelize) {
    'use strict';
    return queryInterface.createTable('adies', {
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
      cohort: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      github_username: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      linked_in_url: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        }
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      bio: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    'use strict';
    return queryInterface.dropTable('adies');
  }
};