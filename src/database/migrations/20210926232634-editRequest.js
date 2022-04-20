"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "size");

    await queryInterface.addColumn("requests", "size", {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false,
      references: {
        model: {
          tableName: "productSize",
        },
        key: "id",
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("requests", "size");

    return;
  },
};
