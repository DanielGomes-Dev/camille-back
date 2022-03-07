"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("requests", "quantity", {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false,
    });
  },

  down: async (queryInterface) => {
    return;
  },
};
