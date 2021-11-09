import { Request, Response } from "express";
import ProductInterface from "../interfaces/ProductInterface";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
// import { apiErrorHandler } from "../handlers/errorHandler";
import ProductService from "../services/ProductService";

export default class ProductController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    const storeId = Number(req.params.id);
    const productListByStore = await ProductService.index(storeId);
    return res.json(productListByStore);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const product = await ProductService.show(id);
    return res.json(product);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const product: ProductInterface = req.body;
    product.active = false;
    try {
      const newProduct = await ProductService.create(product);
      return res.status(201).json(newProduct);
    } catch (err: any) {
      console.log(err);
      return res.status(500).json();
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }

  async delete(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }
}
