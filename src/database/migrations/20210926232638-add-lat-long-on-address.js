"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("address", "lat", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });
    await queryInterface.addColumn("address", "long", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("address", "lat");
    await queryInterface.removeColumn("address", "long");

    return;
  },
};
