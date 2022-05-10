import { PlusInRequestsModel } from "../database/models/PlusInRequestsModel";
import { ProductCategoryModel } from "../database/models/ProductCategoryModel";
import { ProductFoodPlusModel } from "../database/models/ProductFoodPlusModel ";
import { ProductModel } from "../database/models/ProductModel";
import { TypeProductModel } from "../database/models/TypeProductModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";
import ProductFoodPlusService from "./ProductFoodPlusService";

class PlusInRequestsService {
  async index() {
    return await PlusInRequestsModel.findAll();
  }
  async show(id: number): Promise<any> {
    // Refatorar
    const productCategoryByTypeProduct = await PlusInRequestsModel.findAll({
      where: {
        typeProduct: id,
      },
    });

    return productCategoryByTypeProduct;
  }

  async create(requestPlus: any, storeId: any): Promise<any> {
    ///Implentar
    const plus = await ProductFoodPlusModel.findByPk(requestPlus.plusId);
    if (plus?.storeId != storeId)
      throw "Erro ao Cadastrar um Complemento ao Pedido";

    const newUser = await PlusInRequestsModel.create(requestPlus);
    return newUser;
  }
  async edit(id: number, edited: any): Promise<any> {
    ///Implentar
    return {};
  }
  async delete(id: number): Promise<any> {
    ///Implentar
    return {};
  }
}

export default new PlusInRequestsService();
