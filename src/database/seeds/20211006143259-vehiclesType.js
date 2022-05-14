"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "vehiclesType",
      [
        {
          //1
          type: "Moto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //2
          type: "Carro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vehiclesType", null, {});
  },
};
