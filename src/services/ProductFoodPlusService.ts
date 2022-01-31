///PAREI AQUI e Criar o Service de complementos;

import { ProductFoodPlusModel } from "../database/models/ProductFoodPlusModel ";
import ProductFoodService from "./ProductFoodService";

class ProductFoodPlusService {
  async index_by_product_id(id: number) {
    return await ProductFoodPlusModel.findAll({
      where: { productId: id },
    });
  }

  async insert_plus_in_food(plus: any) {
    return await ProductFoodPlusModel.create(plus);
  }

  async delete_plus_in_food(id: number, ownerId: number) {
    const plus = await ProductFoodPlusModel.findByPk(id);
    if (!plus) throw new Error("Nenhum Complemento Encontrado");
    const productFood = await ProductFoodService.show(plus.productId);
    if (productFood.productFood.store.ownerId !== ownerId)
      throw new Error("Você não tem permissão para alterar esse complemento");
    return plus?.destroy();
  }
}

export default new ProductFoodPlusService();
