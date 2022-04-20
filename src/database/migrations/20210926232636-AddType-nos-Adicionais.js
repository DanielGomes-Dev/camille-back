"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("productsFoodPlus", "typePlusId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: {
          tableName: "typePlus",
        },
        key: "id",
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("productsFoodPlus", "typePlusId");

    return;
  },
};
