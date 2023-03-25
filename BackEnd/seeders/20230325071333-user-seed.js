'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john@gmail.com',
        password: '$2y$10$muG1PEhyDng0IP9ckl5m2O2L8rdVTf56UdBHL2sQxUB4vnXfSBd4K',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rendra',
        email: 'rendra@gmail.com',
        password: '$2y$10$muG1PEhyDng0IP9ckl5m2O2L8rdVTf56UdBHL2sQxUB4vnXfSBd4K',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
