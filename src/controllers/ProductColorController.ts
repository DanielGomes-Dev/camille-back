import { Request, Response } from "express";
import ProductColorService from "../services/ProductColorService";

export default class ProductColorController {
  async edit(req: Request, res: Response): Promise<Response> {
    try {
      const ownerId = Number(req.params.userLoggedId);
      const color: any = req.body;
      const editColor = await ProductColorService.edit(color, ownerId);
      return res.status(200).json(editColor);
    } catch (e: any) {
      console.log(e);
      return res.status(401).json({ err: e.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const colorId = Number(req.params.id);
      const ownerId = Number(req.params.userLoggedId);
      const deleteColor = await ProductColorService.delete(colorId, ownerId);
      return res.status(200).json(deleteColor);
    } catch (e: any) {
      console.log(e);
      return res.status(401).json({ err: e.message });
    }
  }
}
