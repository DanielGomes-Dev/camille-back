import { RequestModel } from "../database/models/RequestModel";
import ServiceInterface from "../interfaces/Project/ServiceInterface";
import { StoreModel } from "../database/models/StoreModel";

class RequestService implements ServiceInterface {
  async index(id: number): Promise<any> {
    const store = await StoreModel.findOne({
      where: {
        owner: id,
      },
    });

    const requestsData = await RequestModel.findAll({
      where: {
        storeId: store?.id,
      },
    });

    return requestsData;
  }

  async show(request: any): Promise<any> {
    const store = await StoreModel.findOne({
      where: {
        owner: request.storeOwnerId,
      },
    });

    const requestsData = await RequestModel.findOne({
      where: {
        id: request.requestId,
        storeId: store?.id,
      },
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
}

export default new RequestService();
