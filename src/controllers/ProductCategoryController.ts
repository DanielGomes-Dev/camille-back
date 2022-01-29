import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import ProductCategoryService from "../services/ProductCategoryService";
// import { apiErrorHandler } from "../handlers/errorHandler";
export default class ProductCategoryController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const categorys = await ProductCategoryService.index();
      return res.status(200).json(categorys);
    } catch (e: any) {
      console.log(e);
      return res.status(400).json({ err: e.message });
    }
  }
  async show(req: Request, res: Response): Promise<Response> {
    try {
      const typeProductId = Number(req.params.id);
      const categorys = await ProductCategoryService.show(typeProductId);
      return res.status(200).json(categorys);
    } catch (e) {
      return res.status(400).json({ err: "err" });
    }
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
