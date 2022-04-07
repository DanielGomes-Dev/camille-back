"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("requests", "deliverId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false,
      references: {
        model: {
          tableName: "usersDeliver",
        },
        key: "id",
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("requests", "deliverId");
  },
};
