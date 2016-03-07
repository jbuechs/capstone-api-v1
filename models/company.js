module.exports = function(sequelize, DataTypes) {
  'use strict';
  var company = sequelize.define('company', {
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
    street: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING(2),
    },
    zip: {
      type: DataTypes.STRING(5),
    },
    website: {
      type: DataTypes.STRING,
      isUrl: true
    },
    logo: {
      type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: function(models) {
        company.hasMany(models.adie, { as: 'adies' });
        company.hasMany(models.employee, { as: 'employees'});
      }
    }
  });
  return company;
};