"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "storeCategory",
      [
        {
          category: "Bebidas",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
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
