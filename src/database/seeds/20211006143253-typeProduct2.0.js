"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "typeProduct",
      [
        {
          //26
          type: "Farmácia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //27
          type: "Supermercados",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("typeProduct", null, {});
  },
};
