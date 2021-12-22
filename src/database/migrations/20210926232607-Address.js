"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("address", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // unique: true,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: true,
        // unique: true,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: true,
        // unique: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
        // unique: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
        // unique: true,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: true,
        // unique: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("address");
  },
};
