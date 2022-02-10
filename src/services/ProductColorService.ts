import { ProductColorModel } from "../database/models/ProductColorModel";
import ProductService from "./ProductService";

class ProductColorService {
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

  async create(color: any, productId: number) {
    ///Implentar
    const newProductColor = await ProductColorModel.create({
      colorName: color.colorName,
      quantity: color.quantity,
      productId: productId,
    });
    return newProductColor;
  }

  async edit(colorEdit: any, ownerId: number): Promise<any> {
    console.log(colorEdit);
    const color = await ProductColorModel.findByPk(colorEdit.id);
    if (!color) throw new Error("Nenhuma Cor Encontrada");
    const product = await ProductService.show(color.productId);
    if (product.store.ownerId !== ownerId)
      throw new Error("Você não tem permissão para deletar essa cor");
    return color.update(colorEdit);
  }

  async delete(id: number, ownerId: number): Promise<any> {
    const color = await ProductColorModel.findByPk(id);
    if (!color) throw new Error("Nenhum Complemento Encontrado");
    const product = await ProductService.show(color.productId);
    if (product.store.ownerId !== ownerId)
      throw new Error("Você não tem permissão para deletar essa cor");
    return color?.destroy();
  }
}

export default new ProductColorService();
