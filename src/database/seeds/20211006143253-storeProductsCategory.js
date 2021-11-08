"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "storeProductsCategory",
      [
        {
          categoryStoreId: 1,
          categoryProductId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryStoreId: 2,
          categoryProductId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryStoreId: 3,
          categoryProductId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("storeProductsCategory", null, {});
  },
};
