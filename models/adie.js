// 'use strict';
module.exports = function(sequelize, DataTypes) {
  var Adie = sequelize.define('Adie', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Adie;
};