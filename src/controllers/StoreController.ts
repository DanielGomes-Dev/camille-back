import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import AddressService from "../services/AddressService";
import ContactService from "../services/ContactService";
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
    return res.json(store);
  }

  create(req: Request, res: Response): Promise<Response> {
    return Promise.resolve(res.json({}));
  }

  async getInformation(req: Request, res: Response): Promise<Response> {
    try {
      const owner = req.body.userLogged;
      console.log(owner);
      const store = await StoreService.showInfo(Number(owner.id));
      return res.json(store);
    } catch (e) {
      console.log(e);
      return res.status(401).json({});
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    const user = req.body.userLogged;
    if (!user) return res.status(401).json({});

    const store = {
      email: req.body.email,
      companyName: req.body.companyName,
      fantasyName: req.body.fantasyName,
      CNPJ: req.body.CNPJ,
      ie: req.body.ie,
      note: req.body.note,
      categoryId: req.body.categoryId,
    };

    const contact = {
      number: req.body.contact.number,
    };

    const address = {
      number: req.body.address.number,
      street: req.body.address.street,
      district: req.body.address.district,
      city: req.body.address.city,
      state: req.body.address.state,
      cep: req.body.address.cep,
    };
    const storeEdit = await StoreService.edit(user.id, store);
    const addressEdit = await AddressService.edit(storeEdit.addressId, address);
    const contactEdit = await ContactService.edit(storeEdit.contactId, contact);

    return res.status(200).json({
      store: storeEdit,
      address: addressEdit,
      contact: contactEdit,
    });
  }
  //Criar rota para atualizar o status da loja

  async delete(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }
}
