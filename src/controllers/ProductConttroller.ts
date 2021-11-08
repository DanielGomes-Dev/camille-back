import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
// import { apiErrorHandler } from "../handlers/errorHandler";
import ProductService from "../services/ProductService";

export default class ProductController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    const storeId: number = req.body.storeId;
    const productListByStore = await ProductService.index(storeId);
    return res.json(productListByStore);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const id = req.body.userLogged.id;
    const users = await ProductService.show(id);
    return res.json(users);
  }

  async create(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }

  async edit(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }

  async delete(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }
}
