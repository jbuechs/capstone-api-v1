module.exports = function(sequelize, DataTypes) {
  'use strict';
  var Adie = sequelize.define('Adie', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true  
      }
    },
    cohort: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    github_username: {
      type: DataTypes.STRING
    },
    twitter: {
      type: DataTypes.STRING
    },
    linked_in_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    },
    image: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    bio: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        Adie.belongsTo(models.Company, { as: 'internship'});
      }
    }
  });
  return Adie;
};