"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          username: "Andrean",
          email: "andrean923@gmail.com",
          password:
            "$2b$10$NjP30u5xpmFxvS8XPVR4ZOp2Lo.QrcI2EXMBdrXQH2TbbTshkbWaG",
          phone: null,
          verification_code: "597703",
          status: "Verified",
        },
        {
          id: 2,
          username: "Bayu",
          email: "bayu@gmail.com",
          password:
            "$2b$10$De02rW87QxyYnaVSn3g//.AqZIgYX1GJRGMjk5eHlhdvBl9KUtt2C",
          phone: null,
          verification_code: "587783",
          status: "Verified",
        },
        {
          id: 3,
          username: "Evri",
          email: "Evri@gmail.com",
          password:
            "$2b$10$vAHZp1vHZ4tYKYQ/0tGbYOKkpQJ5v7SBCVBU8uIyJtnePSuGRmCFi",
          phone: null,
          verification_code: "236790",
          status: "Verified",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
