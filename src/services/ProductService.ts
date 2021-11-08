import { ProductModel } from "../database/models/ProductModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class ProductService implements ServiceInterface {
  async index(id: number) {
    return await ProductModel.findAll();
  }
  async show(id: number): Promise<any> {
    //Implentar;
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

export default new ProductService();
