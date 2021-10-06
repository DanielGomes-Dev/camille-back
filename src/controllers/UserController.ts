import { Request, Response } from "express";
// import { apiErrorHandler } from "../handlers/errorHandler";
import UserService from "../services/UserService";
export default class UserController {
  async index(
    req: Request,
    res: Response
    // next: NextFunction
  ): Promise<any> {
    try {
      const users = await UserService.showUsers();
      return await res.json(users);
    } catch (error) {
      console.log(error);
    }
  }

  async store(
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

      console.log(newUserPayload);

      const users = await UserService.createUser(newUserPayload);
      return await res.json(users);
    } catch (error) {
      console.log(error);
      return await res.json(error).status(400);
    }
  }
}
