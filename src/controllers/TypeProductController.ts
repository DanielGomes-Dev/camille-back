import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import TypeProductService from "../services/TypeProductService";
// import { apiErrorHandler } from "../handlers/errorHandler";
export default class TypeProductController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const typeProducts = await TypeProductService.index();
      console.log(typeProducts);
      return res.status(200).json(typeProducts);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ err: "err" });
    }
  }
  async show(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");

    // const storeId = Number(req.params.id);
    // const subCategories = await StoreProductCategoryService.show(storeId);
    // return res.status(200).json(subCategories);
  }
  create(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  edit(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}
