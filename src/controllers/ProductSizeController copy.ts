import { Request, Response } from "express";
import ProductColorService from "../services/ProductColorService";
import ProductSizeService from "../services/ProductSizeService";

export default class ProductSizeController {
  async edit(req: Request, res: Response): Promise<Response> {
    try {
      const ownerId = Number(req.params.userLoggedId);
      const size: any = req.body;
      const editSize = await ProductSizeService.edit(size, ownerId);
      return res.status(200).json(editSize);
    } catch (e: any) {
      console.log(e);
      return res.status(401).json({ err: e.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const sizeId = Number(req.params.id);
      const ownerId = Number(req.params.userLoggedId);
      const deleteSize = await ProductSizeService.delete(sizeId, ownerId);
      return res.status(200).json(deleteSize);
    } catch (e: any) {
      console.log(e);
      return res.status(401).json({ err: e.message });
    }
  }
}
