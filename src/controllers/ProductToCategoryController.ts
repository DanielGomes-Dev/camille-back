import { Request, Response } from "express";
import ProductToCategoryService from "../services/ProductToCategoryService";

export default class ProductToCategoryController {
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const categoryId = Number(req.params.categoryId);
      const productId = Number(req.params.productId);

      const ownerId = Number(req.params.userLoggedId);
      const deleteColor = await ProductToCategoryService.delete(
        productId,
        categoryId,
        ownerId
      );
      return res.status(200).json(deleteColor);
    } catch (e: any) {
      console.log(e);
      return res.status(401).json({ err: e.message });
    }
  }
}
