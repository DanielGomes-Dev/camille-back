import { ProductCategoryModel } from "../database/models/ProductCategoryModel";
import { ProductModel } from "../database/models/ProductModel";
import { StoreModel } from "../database/models/StoreModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class ProductService implements ServiceInterface {
  async index(id: number) {
    return await ProductModel.findAll({
      where: { storeId: id },
      include: [
        {
          model: StoreModel,
          as: "store", // <---- HERE,
        },
      ],
    });
  }

  async show(id: number): Promise<any> {
    //Implentar;
    return await ProductModel.findByPk(id, {
      include: [
        {
          model: StoreModel,
          as: "store", // <---- HERE,
          attributes: ["id", "companyName", "fantasyName"],
        },
        {
          model: ProductCategoryModel,
          as: "category",
          attributes: ["category"],
        },
      ],
    });
  }

  async create(product: any): Promise<any> {
    ///Implentar
    const newProduct = await ProductModel.create(product);
    return newProduct;
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

export default new ProductService();
