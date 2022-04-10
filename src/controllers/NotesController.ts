import { Request, Response } from "express";
import { DeliveryNoteModel } from "../database/models/DeliveryNoteModel";
import { ProductNoteModel } from "../database/models/ProductNoteModel";
import { StoreNoteModel } from "../database/models/StoreNoteModel";
// import { apiErrorHandler } from "../handlers/errorHandler";
export default class NotesController {
  async postNotesProduct(req: Request, res: Response): Promise<Response> {
    const productNote = {
      note: req.body.note,
      comment: req.body.comment,
      usersBuyerId: Number(req.params.userLoggedId),
      productId: req.body.productId,
    };

    console.log(productNote);

    const responseNoteProduct = await ProductNoteModel.create(productNote);
    return res.status(200).json(responseNoteProduct);
  }
  async postNotesStore(req: Request, res: Response): Promise<Response> {
    const storeNote = {
      note: req.body.note,
      comment: req.body.comment,
      usersBuyerId: Number(req.params.userLoggedId),
      storeId: req.body.storeId,
    };

    const responseNoteStore = await StoreNoteModel.create(storeNote);
    return res.status(200).json(responseNoteStore);
  }

  async postNotesDeliver(req: Request, res: Response): Promise<Response> {
    console.log(req.params.userLoggedId);
    const deliverNote = {
      note: req.body.note,
      comment: req.body.comment,
      usersBuyerId: Number(req.params.userLoggedId),
      deliverId: req.body.deliverId,
    };

    const responseNoteDeliver = await DeliveryNoteModel.create(deliverNote);
    return res.status(200).json(responseNoteDeliver);
  }

  async getNotesDeliver(req: Request, res: Response): Promise<Response> {
    const responseNoteDeliver = await DeliveryNoteModel.findAll({
      where: {
        usersBuyerId: req.params.userLoggedId,
      },
    });
    return res.status(200).json(responseNoteDeliver);
  }

  async getNotesProduct(req: Request, res: Response): Promise<Response> {
    const responseNoteProduct = await ProductNoteModel.findAll();
    return res.status(200).json(responseNoteProduct);
  }

  async getNotesStore(req: Request, res: Response): Promise<Response> {
    const responseNoteStore = await StoreNoteModel.findAll({
      where: {
        usersBuyerId: req.params.userLoggedId,
      },
    });
    return res.status(200).json(responseNoteStore);
  }
}
