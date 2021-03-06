import jwt from "jsonwebtoken";
import env from "dotenv-safe";
import jwtGenerate from "../interfaces/JwtInterface";

interface tokenInterface {
  auth: boolean;
  token?: string;
  message?: string;
}

export default class JwtService {
  private SECRET: any = env.config().parsed?.SECRET;

  create(user: jwtGenerate, type: string): tokenInterface {
    const token = jwt.sign(user, this.SECRET + type, {
      //expiresIn: 300, // expires in 5min
    });
    return { auth: true, token: token };
  }
  verify(token: string, type: string): any {
    if (!token) return { auth: false, message: "No token provided." };
    const decodedToken = jwt.verify(token, this.SECRET + type);
    return decodedToken;
  }
}
