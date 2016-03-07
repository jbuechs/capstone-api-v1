module.exports = function(sequelize, DataTypes) {
  'use strict';
  var adie = sequelize.define('adie', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
        adie.belongsTo(models.company);
      }
    }
  });
  return adie;
};