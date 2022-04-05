import { Request, Response } from "express";
import AddressService from "../services/AddressService";
import ContactService from "../services/ContactService";
import UserDeliverService from "../services/UserDeliverService";
// import { apiErrorHandler } from "../handlers/errorHandler";
import PassCrypto from "../utils/passCrypto";

export default class UserDeliverController {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await UserDeliverService.showUsers();
    return res.json(users);
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const login = {
        email: req.body.email,
        password: PassCrypto.encrypt(req.body.password),
      };
      const user = await UserDeliverService.login(login);
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
        cep: null,
      });

      const contact = await ContactService.create({
        number: null,
      });

      const newUserPayload = {
        photo:
          "https://e7.pngegg.com/pngimages/179/752/png-clipart-food-delivery-courier-service-food-delivery-delivery-man-food-service.png",
        name: newUser.name,
        cpf: newUser.cpf,
        email: newUser.email,
        password: PassCrypto.encrypt(newUser.password),
        CNH: newUser.CNH,
        NCDate: new Date(),
        typeUserId: 2,
        statusId: 1, //Fazer: validação de email
        addressId: address.id,
        contactId: contact.id,
      };

      console.log(newUserPayload);

      const user = await UserDeliverService.createUser(newUserPayload);

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
