"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "productCategory",
      [
        {
          category: "Lanches",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Limpeza",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Tarja Preta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("productCategory", null, {});
  },
};
