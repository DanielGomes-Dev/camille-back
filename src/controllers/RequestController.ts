import { request, Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import RequestInterface from "../interfaces/RequestInterface";
import AddressService from "../services/AddressService";
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

  async create(req: Request, res: Response): Promise<Response> {
    console.log("ok");
    try {
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

      const product = await ProductService.show(Number(req.body.productId));
      const request = {
        addressId: addressInfo.id,
        productId: req.body.productId,
        userId: Number(req.params.userLoggedId),
        statusId: 1,
        storeId: Number(product.store.id),
        quantity: req.body.quantity,
      };

      const newRequest = await RequestService.create(request);
      return res.status(201).json(newRequest);
    } catch (err: any) {
      console.log(err);
      // return res.status(400).json({ err: err.errors[0].message });
      return res.status(400).json({ err: "erro" });
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

      const requestAccepted = RequestService.deliveringRequest(
        requestId,
        userLogged
      );
      return res.status(200).json(requestAccepted);
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
