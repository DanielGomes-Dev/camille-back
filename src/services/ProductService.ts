import { ProductCategoryModel } from "../database/models/ProductCategoryModel";
import { ProductModel } from "../database/models/ProductModel";
import { StoreModel } from "../database/models/StoreModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";

class ProductService {
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

  async index_by_token(id: number) {
    const storeId = await StoreModel.findOne({
      where: { ownerId: id },
    });

    if (!storeId) throw new Error("Nenhum Usuario Encontrado");

    return await ProductModel.findAll({
      where: { storeId: storeId.id },
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

  async create(product: any, ownerId: number): Promise<any> {
    const store = await StoreModel.findOne({
      where: {
        ownerId: ownerId,
      },
    });
    if (!store) throw new Error("Nenhum Usuario Encontrado");
    product.storeId = store.id;
    const newProduct = await ProductModel.create(product);
    return newProduct;
  }
  async edit(edited: any, ownerId: number): Promise<any> {
    const product: any = await ProductModel.findOne({
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

  // delete(id: number): Promise<any> {
  //   ///Implentar
  //   return {};
  // }
}

export default new ProductService();
