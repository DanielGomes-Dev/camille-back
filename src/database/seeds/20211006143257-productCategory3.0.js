"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "productCategory",
      [
        {
          category: "Destilados",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Vinhos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Cervejas",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Refrigerantes",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Cigarros",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Fumos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Narguilé e assessórios",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Marmitex",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Comida Japonesa",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Porções",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("productCategory", null, {});
  },
};
