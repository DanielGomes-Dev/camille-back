import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import StoreService from "../services/StoreService";
// import { apiErrorHandler } from "../handlers/errorHandler";
export default class StoreController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    const stores = await StoreService.index();
    return res.json(stores);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const store = await StoreService.show(id);
    // const category = await store.getCategory();
    // const subs = category.getStoreCategory();
    // console.log(typeof store, "type");
    // console.log(store);
    return res.json(store);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {
      email,
      companyName,
      fantasyName,
      // owner,
      CNPJ,
      ie,
      note,
      categoryId,
      contactId,
      addressId,
    } = req.body;

    const store = {
      email,
      companyName,
      fantasyName,
      owner: req.body.userLogged.id,
      CNPJ,
      ie,
      note,
      categoryId,
      contactId,
      addressId,
    };

    try {
      const newStore = await StoreService.create(store);
      return res.status(201).json(newStore);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({ err: err.errors[0].message });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }

  async delete(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }
}
