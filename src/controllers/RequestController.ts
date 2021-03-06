import { Request, Response } from "express";
import { RequestModel } from "../database/models/RequestModel";
import { StatusRequestModel } from "../database/models/StatusRequestModel";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import RequestInterface from "../interfaces/RequestInterface";
import AddressService from "../services/AddressService";
import PlusInRequestService from "../services/PlusInRequestService";
import ProductFoodService from "../services/ProductFoodService";
import ProductService from "../services/ProductService";
import RequestService from "../services/RequestService";
// import { apiErrorHandler } from "../handlers/errorHandler";
export default class RequestController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.userLoggedId);
      const request: RequestInterface[] = await RequestService.index(id);
      return res.json(request);
    } catch (e) {
      console.log(e);
      return res.status(401).json();
    }
  }

  async indexByUser(req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.userLoggedId);
      const request: RequestInterface[] = await RequestService.indexByUser(id);
      return res.json(request);
    } catch (e) {
      console.log(e);
      return res.status(401).json();
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const storeOwnerId = Number(req.params.userLoggedId);
    const requestId = Number(req.params.id);
    const request: RequestInterface = await RequestService.show({
      storeOwnerId,
      requestId,
    });
    return res.json(request);
  }

  async showReadyToDeliver(req: Request, res: Response): Promise<Response> {
    const requests: RequestModel[] = await RequestService.showReadyToDeliver();
    return res.json(requests);
  }

  async myDeliverysInProgress(req: Request, res: Response): Promise<Response> {
    const userLogged = Number(req.params.userLoggedId);
    const myDeliverys = RequestService.myDeliverysInProgress(userLogged);
    return res.json(myDeliverys);
  }

  async myDeliverysFinalized(req: Request, res: Response): Promise<Response> {
    const userLogged = Number(req.params.userLoggedId);
    const myDeliverys = RequestService.myDeliverysFinalized(userLogged);
    return res.json(myDeliverys);
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body.productId && !req.body.productFoodId) {
        throw new Error("Nenhum produto informado");
      }
      if (req.body.productId && req.body.productFoodId) {
        throw new Error("Forne??a apenas um produto");
      }
      let addressInfo;

      if (req.body.address?.id) {
        addressInfo = await AddressService.show(req.body.address.id);
      } else {
        const addressInfoBody = {
          userId: Number(req.params.userLoggedId),
          number: req.body.address.number,
          street: req.body.address.street,
          district: req.body.address.district,
          city: req.body.address.city,
          state: req.body.address.state,
          cep: req.body.address.cep,
        };
        addressInfo = await AddressService.create(addressInfoBody);
      }

      let product;
      console.log(req.body.productFoodId);

      if (req.body.productId)
        product = await ProductService.show(Number(req.body.productId));

      if (req.body.productFoodId)
        product = await ProductFoodService.show(Number(req.body.productFoodId));

      const statusNewRequest = await StatusRequestModel.findOne({
        where: {
          status: "new-request",
        },
      });

      console.log(product.store.id);

      const request = {
        addressId: addressInfo.id,
        productId: req.body.productId,
        productFoodId: req.body.productFoodId,
        userId: Number(req.params.userLoggedId),
        statusId: statusNewRequest?.id,
        storeId: Number(product.store.id),
        quantity: req.body.quantity,
        sizeId: req.body.sizeId,
        colorId: req.body.colorId,
      };

      const newRequest = await RequestService.create(request);
      if (req.body.plus && req.body.plus.length > 0) {
        for (let index = 0; index < req.body.plus.length; index++) {
          const id = req.body.plus[index];
          await PlusInRequestService.create(
            {
              requestId: newRequest.id,
              plusId: id,
            },
            request.storeId
          );
        }
      }

      return res.status(201).json(newRequest);
    } catch (err: any) {
      console.log(err.message);
      // return res.status(400).json({ err: err.errors[0].message });
      return res.status(400).json({ err: err.message });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }

  async delete(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }

  async acceptNewRequest(req: Request, res: Response): Promise<Response> {
    try {
      const requestId = Number(req.params.requestId);
      const userLogged = Number(req.params.userLoggedId);
      console.log(requestId);
      console.log(userLogged);

      const requestAccepted = RequestService.acceptRequest(
        requestId,
        userLogged
      );
      return res.status(200).json(requestAccepted);
    } catch (e) {
      console.log(e);
      return res.status(401).json({});
    }
  }

  async requestSeparet(req: Request, res: Response): Promise<Response> {
    try {
      const requestId = Number(req.params.requestId);
      const userLogged = Number(req.params.userLoggedId);
      console.log(requestId);
      console.log(userLogged);

      const requestAccepted = RequestService.requestSeparet(
        requestId,
        userLogged
      );
      return res.status(200).json(requestAccepted);
    } catch (e) {
      console.log(e);
      return res.status(401).json({});
    }
  }

  async deliveringRequest(req: Request, res: Response): Promise<Response> {
    try {
      const requestId = Number(req.params.requestId);
      const userLogged = Number(req.params.userLoggedId);
      console.log(requestId);
      console.log(userLogged);

      const deliveringRequest = RequestService.deliveringRequest(
        requestId,
        userLogged
      );
      return res.status(200).json(deliveringRequest);
    } catch (e) {
      console.log(e);
      return res.status(401).json({});
    }
  }

  async finalizeRequest(req: Request, res: Response): Promise<Response> {
    try {
      const requestId = Number(req.params.requestId);
      const userLogged = Number(req.params.userLoggedId);

      const requestAccepted = RequestService.finalizeRequest(
        requestId,
        userLogged
      );
      return res.status(200).json(requestAccepted);
    } catch (e) {
      console.log(e);
      return res.status(401).json({});
    }
  }
}
