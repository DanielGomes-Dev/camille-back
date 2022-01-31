///PAREI AQUI e Criar o Service de complementos;

import { ProductCategoryModel } from "../database/models/ProductCategoryModel";
import { ProductFoodModel } from "../database/models/ProductFoodModel";
import { ProductFoodPlusModel } from "../database/models/ProductFoodPlusModel ";
import { StoreModel } from "../database/models/StoreModel";
import ProductFoodPlusService from "./ProductFoodPlusService";

class ProductFoodService {
  async index(id: number) {
    return await ProductFoodModel.findAll({
      where: { storeId: id },
      include: [
        {
          model: StoreModel,
          as: "store", // <---- HERE,
          attributes: ["id", "companyName", "fantasyName"],
        },
        {
          model: ProductCategoryModel,
          as: "category",
        },
      ],
    });
  }

  async index_by_token(id: number) {
    const storeId = await StoreModel.findOne({
      where: { ownerId: id },
    });

    if (!storeId) throw new Error("Nenhum Usuario Encontrado");

    return await ProductFoodModel.findAll({
      where: { storeId: storeId.id },
      include: [
        {
          model: ProductCategoryModel,
          as: "category",
        },
        {
          model: StoreModel,
          as: "store", // <---- HERE,
        },
      ],
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["createdAt", "DESC"],
      ],
    });
  }

  async show(id: number): Promise<any> {
    //Implentar;
    const productFood = await ProductFoodModel.findByPk(id, {
      include: [
        {
          model: StoreModel,
          as: "store", // <---- HERE,
          attributes: ["id", "companyName", "fantasyName", "ownerId"],
        },
        {
          model: ProductCategoryModel,
          as: "category",
        },
      ],
    });

    const productFoodComplements = await ProductFoodPlusModel.findAll({
      where: { productId: id },
    });

    return { productFood, productFoodComplements };
  }

  async create(product: any, ownerId: number): Promise<any> {
    const store = await StoreModel.findOne({
      where: {
        ownerId: ownerId,
      },
    });
    if (!store) throw new Error("Nenhum Usuario Encontrado");
    product.storeId = store.id;
    const newProduct = await ProductFoodModel.create(product);
    return newProduct;
  }

  async edit(edited: any, ownerId: number): Promise<any> {
    const product: any = await ProductFoodModel.findOne({
      where: { id: edited.id },
      include: [
        {
          model: StoreModel,
          as: "store", // <---- HERE,
          attributes: ["ownerId"],
        },
      ],
    });
    if (!product) throw new Error("Produto Não existe");
    if (product.store.ownerId !== ownerId)
      throw new Error("Você não tem permisão para editar esse produto");
    return await product.update(edited);
  }

  async delete(id: number, ownerId: number): Promise<any> {
    const product: any = await ProductFoodModel.findOne({
      where: { id: id },
      include: [
        {
          model: StoreModel,
          as: "store", // <---- HERE,
          attributes: ["ownerId"],
        },
      ],
    });
    if (!product) throw new Error("Produto Não existe");
    if (product.store.ownerId !== ownerId)
      throw new Error("Você não tem permisão para deletar esse produto");

    const complements = await ProductFoodPlusService.index_by_product_id(
      product.id
    );
    for (const complement of complements) {
      await complement.destroy();
    }
    await product.destroy();
    return true;
  }
}

export default new ProductFoodService();
