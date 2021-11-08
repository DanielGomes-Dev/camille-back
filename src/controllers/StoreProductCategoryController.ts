import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import StoreProductCategoryService from "../services/StoreProductCategoryService";
// import { apiErrorHandler } from "../handlers/errorHandler";
export default class StoreProductCategoryController
  implements ControllerInterface
{
  index(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  async show(req: Request, res: Response): Promise<Response> {
    const storeId = Number(req.params.id);
    const subCategories = await StoreProductCategoryService.show(storeId);
    return res.status(200).json(subCategories);
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
