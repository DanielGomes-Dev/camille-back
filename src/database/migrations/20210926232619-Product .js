"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("products", {
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
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      stock: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        allowNull: false,
        default: false,
      },
      categoryProductId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "productCategory",
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
    return await queryInterface.dropTable("products");
  },
};
