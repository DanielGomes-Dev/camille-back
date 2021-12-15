import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import RequestInterface from "../interfaces/RequestInterface";
import RequestService from "../services/RequestService";
// import { apiErrorHandler } from "../handlers/errorHandler";
export default class RequestController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.body.userLogged.id;
      console.log(req.body.userLogged);
      const request: RequestInterface[] = await RequestService.index(id);
      return res.json(request);
    } catch (e) {
      console.log(e);
      return res.status(401).json();
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const storeOwnerId = req.body.userLogged.id;
    const requestId = Number(req.params.id);
    const request: RequestInterface = await RequestService.show({
      storeOwnerId,
      requestId,
    });
    return res.json(request);
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const request = {
        addressId: req.body.addressId,
        productId: req.body.productId,
        storeId: req.body.storeId,
        userId: req.body.userLogged.id,
        statusId: 1,
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
}
