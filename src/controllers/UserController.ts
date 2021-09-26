import { Request, Response } from "express";
// import EmailService from "../services/EmailService";

export default class UserController {
  async getUsers(req: Request, res: Response): Promise<void> {
    const user = {
      email: "test@test",
      password: "test1234",
    };
    // const users = await User.find().populate("posts", "title url -_id");
    res.json([user, user]);
  }

  async getUser(req: Request, res: Response): Promise<void> {
    const user = {
      email: "test@test",
      password: "test1234",
    };
    // const user = await User.findById(req.params.id).populate("posts");
    res.json(user);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = {
      email: "test@test",
      password: "test1234",
    };
    // const newUser = new User(req.body);
    // await newUser.save();
    res.json({ status: 200, user });
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const user = {
      email: "test@test",
      password: "test1234",
    };
    const { id } = req.params;
    // const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ user, id });
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const user = {
      email: "test@test",
      password: "test1234",
    };
    const { id } = req.params;
    // const user = await User.findByIdAndRemove(id);
    res.json({ user, id });
  }
}
