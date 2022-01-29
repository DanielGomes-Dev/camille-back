"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("productCategory", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      iconUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      typeProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: {
            tableName: "typeProduct",
          },
          key: "id",
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("productCategory");
  },
};
