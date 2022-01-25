///PAREI AQUI e Criar o Service de complementos;

import { ProductFoodModel } from "../database/models/ProductFoodModel";

class ProductFoodPlusService {
  async index_by_product_id(id: number) {
    return await ProductFoodModel.findAll({
      where: { productId: id },
    });
  }
}

export default new ProductFoodPlusService();
