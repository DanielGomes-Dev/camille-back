import { Request, Response } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
// import { apiErrorHandler } from "../handlers/errorHandler";
import UserSellerService from "../services/UserSellerService";
export default class UserSellerController implements ControllerInterface {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await UserSellerService.showUsers();
    return res.json(users);
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const login = {
        email: req.body.email,
        password: req.body.password,
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
        password: newUser.password,
        typeUserId: 2,
        statusId: 1,
      };

      const user = await UserSellerService.createUser(newUserPayload);

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
