"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("requests", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: {
            tableName: "usersBuyer",
          },
          key: "id",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: {
            tableName: "products",
          },
          key: "id",
        },
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: {
            tableName: "address",
          },
          key: "id",
        },
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "statusRequest",
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
    return await queryInterface.dropTable("requests");
  },
};
