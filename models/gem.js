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
    image: DataTypes.STRING // URL to an image of the gem
  }, {
    sequelize,
    modelName: 'Gem',
  });
  return Gem;
};
