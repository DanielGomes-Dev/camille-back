"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("vehicles", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      chassi: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      vehicleTypeId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "vehiclesType",
          },
          key: "id",
        },
      },
      ownerVehicleId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usersDeliver",
          },
          key: "id",
        },
      },
      dealership: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      modelCar: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable("vehicles");
  },
};
