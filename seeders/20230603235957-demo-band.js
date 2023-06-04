'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bands', [{
      name: 'Gold',
      image: 'gold_band.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Silver',
      image: 'silver_band.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Platinum',
      image: 'platinum_band.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bands', null, {});
  }
};
