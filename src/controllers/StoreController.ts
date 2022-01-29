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
      const owner = Number(req.params.userLoggedId);
      const store = await StoreService.showInfo(Number(owner));
      return res.json(store);
    } catch (e) {
      console.log(e);
      return res.status(401).json({});
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    const img: any = req.files;
    const storeBody = JSON.parse(req.body.store);

    console.log(img, storeBody);

    const user = Number(req.params.userLoggedId);
    if (!user) return res.status(401).json({});

    const store = {
      email: storeBody.email,
      photo: img["logo"][0].url,
      banner: img["banner"][0].url,
      companyName: storeBody.companyName,
      fantasyName: storeBody.fantasyName,
      CNPJ: storeBody.CNPJ,
      ie: storeBody.ie,
      note: storeBody.note,
      categoryId: storeBody.categoryId,
    };

    console.log(store);

    const contact = {
      number: storeBody.contact.number,
    };

    const address = {
      number: storeBody.address.number,
      street: storeBody.address.street,
      district: storeBody.address.district,
      city: storeBody.address.city,
      state: storeBody.address.state,
      cep: storeBody.address.cep,
    };
    try {
      const storeEdit = await StoreService.edit(user, store);
      const addressEdit = await AddressService.edit(
        storeEdit.addressId,
        address
      );
      const contactEdit = await ContactService.edit(
        storeEdit.contactId,
        contact
      );

      return res.status(200).json({
        store: storeEdit,
        address: addressEdit,
        contact: contactEdit,
      });
    } catch (e: any) {
      return res.status(400).json({ err: e.message });
    }
  }
  //Criar rota para atualizar o status da loja

  async delete(req: Request, res: Response): Promise<Response> {
    return res.json({});
  }
}
