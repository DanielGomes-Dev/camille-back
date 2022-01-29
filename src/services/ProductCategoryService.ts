import { ProductCategoryModel } from "../database/models/ProductCategoryModel";
import { ProductModel } from "../database/models/ProductModel";
import { TypeProductModel } from "../database/models/TypeProductModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class ProductCategoryService implements ServiceInterface {
  async index() {
    return await ProductCategoryModel.findAll({
      include: [
        {
          model: TypeProductModel,
          as: "type",
        },
      ],
    });
  }
  async show(id: number): Promise<any> {
    // Refatorar
    const productCategoryByTypeProduct = await ProductCategoryModel.findAll({
      where: {
        typeProduct: id,
      },
      include: [
        {
          model: TypeProductModel,
          as: "type",
        },
      ],
    });

    return productCategoryByTypeProduct;
  }

  async create(store: any): Promise<any> {
    ///Implentar
    const newUser = await ProductModel.create(store);
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

export default new ProductCategoryService();
