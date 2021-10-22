"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "statusUser",
      [
        {
          status: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "inative",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("statusUser", null, {});
  },
};
