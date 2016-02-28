// 'use strict';
module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
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
        Company.hasMany(models.Adie, { as: 'adies' });
        Company.hasMany(models.Employee, { as: 'employees'});
        console.log('Company associations created');
      }
    }
  });
  return Company;
};