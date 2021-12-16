import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import StoreService from "../services/StoreService";
// import { apiErrorHandler } from "../handlers/errorHandler";
export default class StoreController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    const stores = await StoreService.index();
    return res.json(stores);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const store = await StoreService.show(id);
    return res.json(store);
  }

  create(req: Request, res: Response): Promise<Response> {
    return Promise.resolve(res.json({}));
  }

  async getInformation(req: Request, res: Response): Promise<Response> {
    try {
      const owner = req.body.userLogged;
      console.log(owner);
      const store = await StoreService.showInfo(Number(owner.id));
      return res.json(store);
    } catch (e) {
      console.log(e);
      return res.status(401).json({});
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }

  async delete(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }
}
