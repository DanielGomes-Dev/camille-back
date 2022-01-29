"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "storeCategory",
      [
        {
          category: "Tecnologia",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Casa e Decoração",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Fitnes",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Ferramentas e Peças",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Saúde e Bem Estar",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Moda",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Beleza e Cuidado",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Bebes",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Brinquedos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("storeCategory", null, {});
  },
};
