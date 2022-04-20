import { RequestModel } from "../database/models/RequestModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";
import { StoreModel } from "../database/models/StoreModel";
import { AddressModel } from "../database/models/AdressModel";
import { ProductModel } from "../database/models/ProductModel";
import { StatusRequestModel } from "../database/models/StatusRequestModel";
import { UserBuyerModel } from "../database/models/UserBuyerModel";
import { ProductCategoryModel } from "../database/models/ProductCategoryModel";
import { ProductToCategoryModel } from "../database/models/ProductToCategoryModel";
import { ProductFoodModel } from "../database/models/ProductFoodModel";
import { ProductSizeModel } from "../database/models/ProductSizeModel";
import { ProductColorModel } from "../database/models/ProductColorModel";

const includes = [
  {
    model: AddressModel,
    as: "address", // <---- HERE,
  },
  {
    model: ProductSizeModel,
    as: "sizeProduct", // <---- HERE,
  },
  {
    model: ProductColorModel,
    as: "colorProduct", // <---- HERE,
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
    model: ProductFoodModel,
    as: "productFood", // <---- HERE,
    include: [
      {
        model: ProductCategoryModel,
        as: "category",
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
];
class RequestService implements ServiceInterface {
  async index(id: number): Promise<any> {
    const store = await StoreModel.findOne({
      where: {
        ownerId: id,
      },
      include: includes,
    });

    const requestsData = await RequestModel.findAll({
      where: {
        storeId: store?.id,
      },
      include: includes,
    });

    return requestsData;
  }

  async indexByUser(id: number): Promise<any> {
    console.log(id);
    const requestsData = await RequestModel.findAll({
      where: {
        userId: id,
      },
      include: includes,
    });

    return requestsData;
  }

  async showReadyToDeliver() {
    const statusReadyToDelivery = await StatusRequestModel.findOne({
      where: {
        status: "ready-to-delivery",
      },
    });

    return await RequestModel.findAll({
      where: {
        statusId: statusReadyToDelivery?.id,
      },
    });
  }

  async myDeliverysInProgress(userDeliver: number): Promise<RequestModel[]> {
    const statusDelivering = await StatusRequestModel.findOne({
      where: {
        status: "delivering",
      },
    });
    const myDeliverys: RequestModel[] = await RequestModel.findAll({
      where: {
        deliverId: userDeliver,
        statusId: statusDelivering?.id,
      },
    });

    return myDeliverys;
  }

  async myDeliverysFinalized(userDeliver: number): Promise<RequestModel[]> {
    const statusFinished = await StatusRequestModel.findOne({
      where: {
        status: "finished",
      },
    });

    const myDeliverys: RequestModel[] = await RequestModel.findAll({
      where: {
        deliverId: userDeliver,
        statusId: statusFinished?.id,
      },
    });

    return myDeliverys;
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
          model: ProductFoodModel,
          as: "productFood", // <---- HERE,
          include: [
            {
              model: ProductCategoryModel,
              as: "category",
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

  async paymentApprove(requestId: number, userLogged: number) {
    const statusPayment = await StatusRequestModel.findOne({
      where: {
        status: "pending-payment",
      },
    });
    const statusNewRequest = await StatusRequestModel.findOne({
      where: {
        status: "new-request",
      },
    });

    const storeVerify = await StoreModel.findOne({
      where: {
        ownerId: userLogged,
      },
    });
    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        storeId: storeVerify?.id,
        statusId: statusPayment?.id,
      },
    });

    return request?.update({
      statusId: statusNewRequest?.id,
    });
  }

  async acceptRequest(requestId: number, userLogged: number) {
    const statusNewRequest = await StatusRequestModel.findOne({
      where: {
        status: "new-request",
      },
    });
    const statusSeparation = await StatusRequestModel.findOne({
      where: {
        status: "separation",
      },
    });
    const storeVerify = await StoreModel.findOne({
      where: {
        ownerId: userLogged,
      },
    });
    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        storeId: storeVerify?.id,
        statusId: statusNewRequest?.id,
      },
    });

    return request?.update({
      statusId: statusSeparation?.id,
    });
  }

  async requestSeparet(requestId: number, userLogged: number) {
    const statusSeparation = await StatusRequestModel.findOne({
      where: {
        status: "separation",
      },
    });

    const statusReadyToDelivery = await StatusRequestModel.findOne({
      where: {
        status: "ready-to-delivery",
      },
    });
    const storeVerify = await StoreModel.findOne({
      where: {
        ownerId: userLogged,
      },
    });
    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        storeId: storeVerify?.id,
        statusId: statusSeparation?.id,
      },
    });

    return request?.update({
      statusId: statusReadyToDelivery?.id,
    });
  }

  async deliveringRequest(requestId: number, userLogged: number) {
    const statusReadyToDelivery = await StatusRequestModel.findOne({
      where: {
        status: "ready-to-delivery",
      },
    });

    const statusDelivering = await StatusRequestModel.findOne({
      where: {
        status: "delivering",
      },
    });

    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        statusId: statusReadyToDelivery?.id,
      },
    });

    return request?.update({
      statusId: statusDelivering?.id,
      deliverId: userLogged,
    });
  }

  async finalizeRequest(requestId: number, userLogged: number) {
    const statusDelivering = await StatusRequestModel.findOne({
      where: {
        status: "delivering",
      },
    });

    const statusFinished = await StatusRequestModel.findOne({
      where: {
        status: "finished",
      },
    });

    const storeVerify = await StoreModel.findOne({
      where: {
        ownerId: userLogged,
      },
    });
    const request = await RequestModel.findOne({
      where: {
        id: requestId,
        storeId: storeVerify?.id,
        statusId: statusDelivering?.id,
      },
    });

    return request?.update({
      statusId: statusFinished?.id,
    });
  }
}

export default new RequestService();
