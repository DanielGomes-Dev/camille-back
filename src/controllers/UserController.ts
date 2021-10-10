import { Request, Response } from "express";
// import { apiErrorHandler } from "../handlers/errorHandler";
import UserService from "../services/UserService";
export default class UserController {
  // async index(
  //   req: Request,
  //   res: Response
  //   // next: NextFunction
  // ): Promise<any> {
  //   try {
  //     const users = await UserService.showUsers();
  //     return await res.json(users);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async register(
    req: Request,
    res: Response
    // next: NextFunction
  ): Promise<any> {
    try {
      const newUser = req.body;
      if (!(newUser.password === newUser.confirmPassword))
        throw { message: "password are diferent" };

      const newUserPayload = {
        name: newUser.name,
        cpf: newUser.cpf,
        email: newUser.email,
        password: newUser.password,
        typeUserId: newUser.typeUserId,
        status: "active",
      };

      const users = await UserService.createUser(newUserPayload);
      return await res.json(users);
    } catch (error) {
      console.log(error);
      return await res.json(error).status(400);
    }
  }

  async login(req: Request, res: Response): Promise<any> {
    try {
      const login = {
        email: req.body.email,
        password: req.body.password,
      };
      const user = await UserService.login(login);
      return await res.json(user);
    } catch (error) {
      console.log(error);
      return await res.json(error).status(400);
    }
  }
}
