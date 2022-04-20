"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "size");

    await queryInterface.addColumn("requests", "sizeId", {
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

    await queryInterface.addColumn("requests", "colorId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false,
      references: {
        model: {
          tableName: "productColor",
        },
        key: "id",
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("requests", "sizeId");
    await queryInterface.removeColumn("requests", "colorId");

    return;
  },
};
