"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "statusRequest",
      [
        {
          status: "new-request",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "separation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "ready-to-delivery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "delivering",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "finished",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("statusRequest", null, {});
  },
};
