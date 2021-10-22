"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("stores", {
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
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      fantasyName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      owner: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      CNPJ: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      ie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "storeCategory",
          },
          key: "id",
        },
      },
      contactId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "contacts",
          },
          key: "id",
        },
      },
      addressId: {
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
    return await queryInterface.dropTable("stores");
  },
};
