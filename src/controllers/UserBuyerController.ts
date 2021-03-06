import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import AddressService from "../services/AddressService";
import ContactService from "../services/ContactService";
// import { apiErrorHandler } from "../handlers/errorHandler";
import UserBuyerService from "../services/UserBuyerService";
import PassCrypto from "../utils/passCrypto";
export default class UserBuyerController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await UserBuyerService.showUsers();
    return res.json(users);
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const login = {
        email: req.body.email,
        password: PassCrypto.encrypt(req.body.password),
      };
      const user = await UserBuyerService.login(login);
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

      const address = await AddressService.create({
        number: null,
        street: null,
        district: null,
        city: null,
        state: null,
        cep: newUser.cep,
      });

      const contact = await ContactService.create({
        number: null,
      });

      const newUserPayload = {
        name: newUser.name,
        cpf: newUser.cpf,
        email: newUser.email,
        password: PassCrypto.encrypt(newUser.password),
        typeUserId: 3,
        statusId: 1,
        addressId: address.id,
        contactId: contact.id,
      };

      const user = await UserBuyerService.createUser(newUserPayload);

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
