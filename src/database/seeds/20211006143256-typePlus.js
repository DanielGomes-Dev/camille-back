"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "typePlus",
      [
        {
          //1
          type: "Coberturas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //2
          type: "Molhos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //3
          type: "Pães",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //4
          type: "Carnes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //5
          type: "Ovos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //6
          type: "Adicionais",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //7
          type: "Bordas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //8
          type: "Recheios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //9
          type: "Complementos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //10
          type: "Saladas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //11
          type: "Misturas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //12
          type: "Adicionar Sabores a Minha Pizza",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("typeProduct", null, {});
  },
};
