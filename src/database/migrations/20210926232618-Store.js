"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("stores", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      banner: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      fantasyName: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: {
            tableName: "usersSeller",
          },
          key: "id",
        },
      },
      CNPJ: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      ie: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "statusStore",
          },
          key: "id",
        },
      },
      note: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      categoryId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "storeCategory",
          },
          key: "id",
        },
      },
      contactId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "contacts",
          },
          key: "id",
        },
      },
      addressId: {
        allowNull: false,
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
