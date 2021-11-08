"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "storeCategory",
      [
        {
          category: "Comida",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Super Mercado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Farmácia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("storeCategory", null, {});
  },
};
