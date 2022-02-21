import { ProductToCategoryModel } from "../database/models/ProductToCategoryModel";
import ProductService from "./ProductService";

class ProductToCategoryService {
  async index(id: number): Promise<any> {
    // const store = await StoreModel.findOne({
    //   where: {
    //     owner: id,
    //   },
    // });
    // const requestsData = await RequestModel.findAll({
    //   where: {
    //     storeId: store?.id,
    //   },
    // });
    // return requestsData;
  }

  async show(request: any): Promise<any> {
    // const store = await StoreModel.findOne({
    //   where: {
    //     owner: request.storeOwnerId,
    //   },
    // });
    // const requestsData = await RequestModel.findOne({
    //   where: {
    //     id: request.requestId,
    //     storeId: store?.id,
    //   },
    // });
    // return requestsData;
  }

  async create(categoryId: number, productId: number) {
    ///Implentar
    const category = await ProductToCategoryModel.findOne({
      where: {
        productId,
        categoryId,
      },
    });

    // console.log(category);

    if (category) return;

    const newProductToCategory = await ProductToCategoryModel.create({
      categoryId: categoryId,
      productId: productId,
    });
    return newProductToCategory;
  }

  // async edit(categoryEdit: any, ownerId: number): Promise<any> {
  //   const category = await ProductToCategoryModel.findByPk(categoryEdit.id);
  //   if (!category) throw new Error("Nenhuma Cor Encontrada");
  //   const product = await ProductService.show(category.productId);
  //   if (product.store.ownerId !== ownerId)
  //     throw new Error("Você não tem permissão para deletar essa cor");
  //   return category.update(categoryEdit);
  // }

  async delete(productId: any, categoryId: any, ownerId: number): Promise<any> {
    const category = await ProductToCategoryModel.findOne({
      where: {
        categoryId: categoryId,
        productId: productId,
      },
    });
    if (!category) return;

    const product = await ProductService.show(category.productId);
    if (product.store.ownerId !== ownerId)
      throw new Error("Você não tem permissão para deletar essa categoria");
    return category?.destroy();
  }
}

export default new ProductToCategoryService();
