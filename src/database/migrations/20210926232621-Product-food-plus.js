"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("productsFoodPlus", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: true,
      },
      saleOff: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
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
      storeId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "stores",
          },
          key: "id",
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("productsFoodPlus");
  },
};
