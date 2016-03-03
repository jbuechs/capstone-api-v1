module.exports = {
  up: function(queryInterface, Sequelize) {
    'use strict';
    return queryInterface.createTable('Adies', {
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
        validate: {
          isUrl: true,
        }
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
      bio: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Adies');
  }
};