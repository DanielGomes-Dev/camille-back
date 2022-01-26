import { ProductCategoryModel } from "../database/models/ProductCategoryModel";
import { ProductModel } from "../database/models/ProductModel";
import { StoreProductsCategoryModel } from "../database/models/StoreProductsCategoryModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class StoreProductCategoryService implements ServiceInterface {
  async index(id: number) {
    return await ProductModel.findAll();
  }
  async show(id: number): Promise<any> {
    //Refatorar
    const subCategory = [];

    const subCategories = await StoreProductsCategoryModel.findAll({
      attributes: ["categoryProductId"],
      where: {
        categoryStoreId: id,
      },
    });

    for (const sub of subCategories) {
      const categoryProduct = await ProductCategoryModel.findByPk(
        sub.categoryProductId,
        {
          attributes: ["id", "category"],
        }
      );
      if (!categoryProduct) throw new Error("Falha ao Encontrar Categoria");
      subCategory.push(categoryProduct);
    }

    return subCategory;
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

export default new StoreProductCategoryService();
