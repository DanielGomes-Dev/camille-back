import { NextFunction, Request, Response } from "express";
import JwtService from "../services/VerifyJWT";

class authVerify {
  getUserByJwtToken(req: Request, res: Response, next: NextFunction): any {
    try {
      const jwt = new JwtService();
      const token = req.headers.authorization;
      if (!token) return res.status(401).json({ err: "no token provided" });
      const tokenJWT = token.split(" ")[1];
      const user = jwt.verify(tokenJWT);
      //Fazer: Verificar se Usuario existe no banco de dados;
      if (!user) throw "Usuario não encontrado";
      req.body.userLogged = user;
      next();
      return;
    } catch (err: any) {
      console.log(err.message);
      return res.status(401).json(err);
    }
  }
}

export default authVerify;
