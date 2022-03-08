"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "typeProduct",
      [
        {
          //1
          type: "Acessórios para Veículos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //2
          type: "Agro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //3
          type: "Alimentos, Bebidas e Utilitários",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //4
          type: "Animais",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //5
          type: "Antiguidades e Coleções",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //6
          type: "Arte, Papelaria e Armarinho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //7
          type: "Bebês",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //8
          type: "Beleza e Cuidado Pessoal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //9
          type: "Brinquedos e Hobbies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //10
          type: "Calçados, Roupas e Bolsas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //11
          type: "Câmeras e Acessórios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //12
          type: "Casa, Moveis e Decoração",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //13
          type: "Celulares e telefones",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //14
          type: "Construção",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //15
          type: "Eletrodomésticos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //16
          type: "Eletrônicos, Áudio e Vídeos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //17
          type: "Esportes e Fitness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //18
          type: "Ferramentas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //19
          type: "Festas e Lembrancinhas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //20
          type: "Games",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //21
          type: "Industria e Comércio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //22
          type: "Informática",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //23
          type: "Instrumentos Musicais",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //24
          type: "Joias e relógios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //25
          type: "Livros, Revistas e Comics",
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
