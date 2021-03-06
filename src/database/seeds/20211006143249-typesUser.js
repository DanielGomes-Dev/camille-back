"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "typesUser",
      [
        {
          type: "masterAdmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "client",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "deliveryman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("typesUser", null, {});
  },
};
