"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "productCategory",
      [
        {
          category: "Carvão",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Hortifrúti",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Padaria",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Salgados e biscoitos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Temperos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Genérico",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Vitaminas",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Suplementos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Bebe",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Beleza",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Cuidados",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Diários",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Dermocosméticos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Medicamentos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Perfumaria",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Bebidas",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Alimentos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Congelados",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Frutas e legumes",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Açougue",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Padaria",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Limpeza",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Higiene Pessoal",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Brinquedos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Bolachas e biscoitos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Doces",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Produtos básicos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Bolo",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Pizza",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Lanches",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Espetos",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Sorvetes",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Açaí",
          iconUrl:
            "https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-whatsapp-1.png",
          typeProduct: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Bebidas",
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
