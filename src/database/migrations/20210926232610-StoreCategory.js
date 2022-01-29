"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("storeCategory", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      iconUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("storeCategory");
  },
};
