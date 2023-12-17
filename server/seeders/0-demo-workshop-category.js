"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "workshop_categories",
      [
        {
          id: 1,
          category_name: "Crafting",
        },
        {
          id: 2,
          category_name: "Cooking",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("workshop_categories", null, {});
  },
};
