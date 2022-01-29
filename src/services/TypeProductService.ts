import { ProductModel } from "../database/models/ProductModel";
import { TypeProductModel } from "../database/models/TypeProductModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class TypeProductService implements ServiceInterface {
  async index() {
    const typeProducts = await TypeProductModel.findAll();
    console.log(typeProducts);
    return typeProducts;
  }
  async show(id: number): Promise<any> {
    ///Implentar
    return {};
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

export default new TypeProductService();
