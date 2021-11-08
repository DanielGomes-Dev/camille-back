"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("storeProductsCategory", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      categoryStoreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "storeCategory",
          },
          key: "id",
        },
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
      // categoryStore: {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      //   unique: true,
      // },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("storeProductsCategory");
  },
};
