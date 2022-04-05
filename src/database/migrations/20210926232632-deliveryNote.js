"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("deliveryNote", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      note: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      deliverId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: {
            tableName: "usersDeliver",
          },
          key: "id",
        },
      },
      usersBuyerId: {
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("deliveryNote");
  },
};
