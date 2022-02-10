"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("productColor", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      colorName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "products",
          },
          key: "id",
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("productColor");
  },
};
