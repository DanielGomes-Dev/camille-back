import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import AddressService from "../services/AddressService";
import ContactService from "../services/ContactService";
import StoreService from "../services/StoreService";
// import { apiErrorHandler } from "../handlers/errorHandler";
import UserSellerService from "../services/UserSellerService";
import PassCrypto from "../utils/passCrypto";

export default class CheckoutTransparentMercadoPagoController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await UserSellerService.showUsers();
    return res.json(users);
  }

  async payment(req: Request, res: Response) {
  
                    var mercadopago = require('mercadopago');
                    mercadopago.configurations.setAccessToken("TEST-6489515349165092-111214-12076cb8f19ca7280e9cd2b6a353f127-594636924");
                    mercadopago.payment.save(req.body)
                .then(function(response: { body: { status: any; status_detail: any; id: any; }; status: number; }) {
                const { status, status_detail, id } = response.body;
                res.status(response.status).json({ status, status_detail, id });
                })
                .catch(function(error: any) {
                console.error(error);
});
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const login = {
        email: req.body.email,
        password: PassCrypto.encrypt(req.body.password),
      };
      const user = await UserSellerService.login(login);
      if (!user) throw "Login Invalido";
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.json({ error: error }).status(400);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const newUser = req.body;
      if (!(newUser.password === newUser.confirmPassword)) {
        throw { message: "password be equal" };
      }

      const newUserPayload = {
        name: newUser.name,
        cpf: newUser.cpf,
        email: newUser.email,
        password: PassCrypto.encrypt(newUser.password),
        typeUserId: 2,
        statusId: 1, //Fazer: valida????o de email
      };

      const user = await UserSellerService.createUser(newUserPayload);

      const address = await AddressService.create({
        number: null,
        street: null,
        district: null,
        city: null,
        state: null,
        cep: null,
      });

      const contact = await ContactService.create({
        number: null,
      });

      const store = await StoreService.create({
        email: null,
        companyName: null,
        fantasyName: null,
        CNPJ: null,
        ie: null,
        note: null,
        categoryId: null,
        active: false,
        ownerId: user.id,
        statusId: 3,
        addressId: address.id,
        contactId: contact.id,
      });

      return res.json(user).status(200);
    } catch (error: any) {
      console.log("error:", error.message);
      console.log(error);
      return res.status(400).json({ err: error.message });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    ///Implentar
    return res.json({});
  }

  async delete(req: Request, res: Response): Promise<Response> {
    ///Implentar
    return res.json({});
  }
}
