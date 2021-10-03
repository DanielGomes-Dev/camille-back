import { Request, Response } from "express";
// import { apiErrorHandler } from "../handlers/errorHandler";
import UserService from "../services/UserService";
export default class UserController {
  async showUsers(
    req: Request,
    res: Response
    // next: NextFunction
  ): Promise<any> {
    try {
      const users = await UserService.showUsers();
      return await res.json(users);
    } catch (error) {
      console.log(error);
      // apiErrorHandler(error, req, res, "Fetch All Lessons failed.");
    }
  }
}
