'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gem extends Model {
    static associate(models) {
      Gem.belongsTo(models.Ring);
      Gem.hasMany(models.UserRing);
    }
  }
  Gem.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL to the image of the gem here
  }, {
    sequelize,
    modelName: 'Gem',
  });
  return Gem;
};
