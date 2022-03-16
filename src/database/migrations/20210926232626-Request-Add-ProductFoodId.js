"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("requests", "productId", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn("requests", "productFoodId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false,
      references: {
        model: {
          tableName: "productsFood",
        },
        key: "id",
      },
    });
  },

  down: async (queryInterface) => {
    return;
  },
};
