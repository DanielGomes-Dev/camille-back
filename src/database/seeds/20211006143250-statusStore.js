"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "statusStore",
      [
        {
          status: "open",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "close",
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
    await queryInterface.bulkDelete("statusStore", null, {});
  },
};
