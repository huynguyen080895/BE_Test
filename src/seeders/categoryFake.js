'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        Name: 'Sport',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Shooter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Fighting',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Stealth',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Survival',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Rhythm',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Survival',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Metroidvania',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Visual novels',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'MMORPG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    //return queryInterface.bulkDelete('Category', null, {});
  }
};
