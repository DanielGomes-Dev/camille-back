"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "types_user",
          },
          key: "id",
        },
      },
      contact: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "contacts",
          },
          key: "id",
        },
      },
      address: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "address",
          },
          key: "id",
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("users");
  },
};
