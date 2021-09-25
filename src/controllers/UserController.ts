import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "test", email: "test@test.com.br" }];

export default {
  async index(req: Request, res: Response): Promise<Response> {
    return res.json(users);
  },

  async create(req: Request, res: Response): Promise<Response> {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "teste teste",
        email: "tes@test.com.br",
      },
      message: {
        subject: "Bem-vindo ao sistema",
        body: "Seja bem-vindo",
      },
    });

    return res.send();
  },
};
