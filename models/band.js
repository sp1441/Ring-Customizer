'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate(models) {
      Band.belongsTo(models.Ring);
      Band.hasMany(models.UserRing);
    }
  }
  Band.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL to an image of the band
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};
