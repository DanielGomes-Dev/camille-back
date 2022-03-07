"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("products", "size", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });

    await queryInterface.addColumn("products", "weight", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });

    await queryInterface.changeColumn("products", "description", {
      type: Sequelize.STRING(255 * 10),
    });

    await queryInterface.removeColumn("products", "categoryProductId");

    await queryInterface.createTable("productToCategory", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "productCategory",
          },
          key: "id",
        },
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
    return;
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("productToCategory");
  },
};
