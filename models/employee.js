module.exports = function(sequelize, DataTypes) {
  'use strict';
  var employee = sequelize.define('employee', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true  
      }
    },
    position: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    twitter: {
      type: DataTypes.STRING,
    },
    linked_in_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      }
    },
    image: {
      type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: function(models){
        employee.belongsTo(models.company, {as: 'company'});
      }
    }
  });
  return employee;
};