import { Request, Response } from "express";
import ProductInterface from "../interfaces/ProductInterface";
// import { apiErrorHandler } from "../handlers/errorHandler";
import ProductService from "../services/ProductService";

export default class ProductController {
  index(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  async index_by_store_id(req: Request, res: Response): Promise<Response> {
    const storeId = Number(req.params.id);
    const productListByStore = await ProductService.index(storeId);
    return res.json(productListByStore);
  }

  async index_by_token(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.body.userLogged.id;
      console.log(userId);
      const productListByStoreAndOwner = await ProductService.index_by_token(
        userId
      );
      return res.status(200).json(productListByStoreAndOwner);
    } catch (e: any) {
      console.log(e.message);
      return res.status(401).json({ err: e.message });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const product = await ProductService.show(id);
    return res.json(product);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const img: any = req.file;

    const product: ProductInterface = {
      name: req.body.name,
      description: req.body.description,
      code: req.body.code,
      photo: img.url,
      stock: req.body.stock,
      price: req.body.price,
      active: true,
      saleOff: req.body.saleOff,
      categoryProductId: req.body.categoryProductId,
      storeId: 0,
    };

    const ownerId = req.body.userLogged.id;

    try {
      const newProduct = await ProductService.create(product, ownerId);
      return res.status(201).json(newProduct);
    } catch (err: any) {
      console.log(err);
      return res.status(401).json({ err: err.message });
    }
  }

  async createImg(req: any, res: Response) {
    try {
      console.log(req.file);
      return res.send(req.file);
    } catch (e) {
      console.log(e);
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    try {
      const img: any = req.file;
      const product: any = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        code: req.body.code,
        photo: img.url,
        stock: req.body.stock,
        price: req.body.price,
        active: req.body.active,
        saleOff: req.body.saleOff,
        categoryProductId: req.body.categoryProductId,
      };
      const ownerId = req.body.userLogged.id;
      const productEdit = await ProductService.edit(product, ownerId);

      return res.status(200).json(productEdit);
    } catch (e: any) {
      console.log(e);
      return res.status(400).json({ err: e.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const productId = Number(req.params.id);
      const ownerId = req.body.userLogged.id;
      const deletedUser = await ProductService.delete(productId, ownerId);
      return res.status(200).json(deletedUser);
    } catch (e: any) {
      console.log(e);
      return res.status(401).json({ err: e.message });
    }
  }
}
