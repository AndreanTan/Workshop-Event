"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "workshop_languanges",
      [
        {
          id: 1,
          languange: "indonesia",
        },
        {
          id: 2,
          languange: "inggris",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("workshop_languanges", null, {});
  },
};
