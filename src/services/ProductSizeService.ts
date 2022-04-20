import { ProductSizeModel } from "../database/models/ProductSizeModel";
import ProductService from "./ProductService";

class ProductSizeService {
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

  async create(size: any, productId: number) {
    ///Implentar
    const newSizes = await ProductSizeModel.create({
      productSize: size.productSize,
      quantity: size.quantity,
      productId: productId,
    });
    return newSizes;
  }

  async edit(sizeEdit: any, ownerId: number): Promise<any> {
    const productSize = await ProductSizeModel.findByPk(sizeEdit.id);
    if (!productSize) throw new Error("Nenhum Tamanho Encontrado");
    const product = await ProductService.show(productSize.productId);
    if (product.store.ownerId !== ownerId)
      throw new Error("Você não tem permissão para Editar esse Tamanho");
    return productSize.update(sizeEdit);
  }

  async delete(id: number, ownerId: number): Promise<any> {
    const productSize = await ProductSizeModel.findByPk(id);
    if (!productSize) throw new Error("Nenhum Tamanho Encontrado");
    const product = await ProductService.show(productSize.productId);
    if (product.store.ownerId !== ownerId)
      throw new Error("Você não tem permissão para deletar esse Tamanho");
    return productSize?.destroy();
  }
}

export default new ProductSizeService();
