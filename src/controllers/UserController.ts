import { Request, Response } from "express";
// import { apiErrorHandler } from "../handlers/errorHandler";
import UserService from "../services/UserService";
export default class UserController {
  async register(
    req: Request,
    res: Response
    // jwt: JWT
    // next: NextFunction
  ): Promise<any> {
    try {
      const newUser = req.body;
      if (!(newUser.password === newUser.confirmPassword))
        throw { errors: [{ message: "password be equal" }] };

      const newUserPayload = {
        name: newUser.name,
        cpf: newUser.cpf,
        email: newUser.email,
        password: newUser.password,
        typeUserId: newUser.typeUserId,
        status: "active",
      };

      const users = await UserService.createUser(newUserPayload);

      return res.json(users).status(200);
    } catch (error: any) {
      console.log(error.message);
      return res.json({ err: error.errors[0].message }).status(400);
    }
  }

  async login(req: Request, res: Response): Promise<any> {
    try {
      const login = {
        email: req.body.email,
        password: req.body.password,
      };
      const user = await UserService.login(login);
      if (!user) throw "Login Invalido";
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.json({ error: error }).status(400);
    }
  }
}
