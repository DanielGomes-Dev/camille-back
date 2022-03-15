import { RequestModel } from "../database/models/RequestModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";
import { StoreModel } from "../database/models/StoreModel";
import { AddressModel } from "../database/models/AdressModel";
import { ProductModel } from "../database/models/ProductModel";
import { StatusRequestModel } from "../database/models/StatusRequestModel";
import { UserBuyerModel } from "../database/models/UserBuyerModel";
import { ProductCategoryModel } from "../database/models/ProductCategoryModel";
import { ProductToCategoryModel } from "../database/models/ProductToCategoryModel";

class RequestService implements ServiceInterface {
  async index(id: number): Promise<any> {
    const store = await StoreModel.findOne({
      where: {
        ownerId: id,
      },
    });

    const requestsData = await RequestModel.findAll({
      where: {
        storeId: store?.id,
      },
      include: [
        {
          model: AddressModel,
          as: "address", // <---- HERE,
        },
        {
          model: ProductModel,
          as: "product", // <---- HERE,
          include: [
            {
              model: ProductToCategoryModel,
              as: "categorys",
              include: [
                {
                  model: ProductCategoryModel,
                  as: "category", // <---- HERE,
                },
              ],
            },
          ],
        },
        {
          model: StoreModel,
          as: "store", // <---- HERE,
          include: [
            {
              model: AddressModel,
              as: "address", // <---- HERE,
            },
          ],
        },
        {
          model: StatusRequestModel,
          as: "status", // <---- HERE,
        },
        {
          model: UserBuyerModel,
          as: "user", // <---- HERE,
        },
      ],
    });

    return requestsData;
  }

  async indexByUser(id: number): Promise<any> {
    console.log(id);
    const requestsData = await RequestModel.findAll({
      where: {
        userId: id,
      },
      include: [
        {
          model: AddressModel,
          as: "address", // <---- HERE,
        },
        {
          model: ProductModel,
          as: "product", // <---- HERE,
          include: [
            {
              model: ProductToCategoryModel,
              as: "categorys",
              include: [
                {
                  model: ProductCategoryModel,
                  as: "category", // <---- HERE,
                },
              ],
            },
          ],
        },
        {
          model: StoreModel,
          as: "store", // <---- HERE,
          include: [
            {
              model: AddressModel,
              as: "address", // <---- HERE,
            },
          ],
        },
        {
          model: StatusRequestModel,
          as: "status", // <---- HERE,
        },
        {
          model: UserBuyerModel,
          as: "user", // <---- HERE,
        },
      ],
    });

    return requestsData;
  }

  async show(request: any): Promise<any> {
    const store = await StoreModel.findOne({
      where: {
        ownerId: request.storeOwnerId,
      },
    });

    const requestsData = await RequestModel.findOne({
      where: {
        id: request.requestId,
        storeId: store?.id,
      },
      include: [
        {
          model: AddressModel,
          as: "address", // <---- HERE,
        },
        {
          model: ProductModel,
          as: "product", // <---- HERE,
        },
        {
          model: StoreModel,
          as: "store", // <---- HERE,
          include: [
            {
              model: AddressModel,
              as: "address", // <---- HERE,
            },
          ],
        },
        {
          model: StatusRequestModel,
          as: "status", // <---- HERE,
        },
        {
          model: UserBuyerModel,
          as: "user", // <---- HERE,
        },
      ],
    });

    return requestsData;
  }

  async create(request: any) {
    ///Implentar
    const newRequest = await RequestModel.create(request);
    return newRequest;
  }

  edit(id: number, edited: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  delete(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async acceptRequest(requestId: number, userLogged: number) {
    const storeVerify = await StoreModel.findOne({
      where: {
        ownerId: userLogged,
      },
    });
    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        storeId: storeVerify?.id,
        statusId: 1,
      },
    });

    return request?.update({
      statusId: 2,
    });
  }

  async requestSeparet(requestId: number, userLogged: number) {
    const storeVerify = await StoreModel.findOne({
      where: {
        ownerId: userLogged,
      },
    });
    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        storeId: storeVerify?.id,
        statusId: 2,
      },
    });

    console.log(request);

    return request?.update({
      statusId: 3,
    });
  }

  async deliveringRequest(requestId: number, userLogged: number) {
    const storeVerify = await StoreModel.findOne({
      where: {
        ownerId: userLogged,
      },
    });
    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        storeId: storeVerify?.id,
        statusId: 3,
      },
    });

    return request?.update({
      statusId: 4,
    });
  }

  async finalizeRequest(requestId: number, userLogged: number) {
    const storeVerify = await StoreModel.findOne({
      where: {
        ownerId: userLogged,
      },
    });
    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        storeId: storeVerify?.id,
        statusId: 4,
      },
    });

    return request?.update({
      statusId: 5,
    });
  }
}

export default new RequestService();
